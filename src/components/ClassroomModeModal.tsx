import React, { useState, useEffect } from "react";
import { LessonPlan, TimelineItem } from "../types";
import { Play, Pause, RotateCcw, ChevronRight, ChevronLeft, X, Bell, Clock, CheckCircle, Volume2 } from "lucide-react";

interface ClassroomModeModalProps {
  plan: LessonPlan;
  isOpen: boolean;
  onClose: () => void;
}

export const ClassroomModeModal: React.FC<ClassroomModeModalProps> = ({
  plan,
  isOpen,
  onClose,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const steps = plan.timeline || [];
  const currentStep: TimelineItem | undefined = steps[currentStepIndex];

  // Initialize step timer when step changes
  useEffect(() => {
    if (currentStep) {
      setTimeLeft((currentStep.durationMinutes || 5) * 60);
      setIsRunning(false);
    }
  }, [currentStepIndex, plan]);

  // Timer countdown interval
  useEffect(() => {
    let interval: any = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      if (soundEnabled) {
        playChimeSound();
      }
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, soundEnabled]);

  const playChimeSound = () => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5 note
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.5); // A5
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.8);
    } catch (e) {
      console.log("Audio not supported or blocked");
    }
  };

  if (!isOpen || !currentStep) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const progressPercent = Math.round(
    ((currentStepIndex + 1) / (steps.length || 1)) * 100
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full flex flex-col shadow-2xl text-slate-100 overflow-hidden min-h-[80vh]">
        {/* Header Bar */}
        <div className="p-4 bg-slate-800/80 border-b border-slate-700/80 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-extrabold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
              <Clock className="w-3.5 h-3.5 mr-1" /> Modo Aula ao Vivo
            </span>
            <h3 className="font-bold text-sm sm:text-base text-slate-200 truncate max-w-md">
              {plan.title}
            </h3>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2 rounded-lg border text-xs flex items-center space-x-1.5 transition ${
                soundEnabled
                  ? "bg-slate-800 border-indigo-500/40 text-indigo-300"
                  : "bg-slate-800/50 border-slate-700 text-slate-500"
              }`}
              title="Ativar/desativar aviso sonoro ao fim de cada etapa"
            >
              <Volume2 className="w-4 h-4" />
              <span className="hidden sm:inline">Som {soundEnabled ? "ON" : "OFF"}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Step Progress Line */}
        <div className="bg-slate-950 px-6 py-2 flex items-center justify-between text-xs text-slate-400 border-b border-slate-800">
          <span>
            Etapa <strong className="text-white">{currentStepIndex + 1}</strong> de{" "}
            <strong className="text-white">{steps.length}</strong>
          </span>
          <div className="w-1/3 bg-slate-800 h-2 rounded-full overflow-hidden mx-4">
            <div
              className="bg-indigo-500 h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span>{progressPercent}% da aula</span>
        </div>

        {/* Main Interactive Stage */}
        <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Left: Timer Display */}
            <div className="md:col-span-1 bg-slate-950/70 border border-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-4">
              <div className="text-xs font-extrabold uppercase tracking-widest text-indigo-400">
                {currentStep.phase || "Etapa Atual"}
              </div>

              <div
                className={`text-5xl sm:text-6xl font-black font-mono tracking-tight ${
                  timeLeft < 60 ? "text-amber-400 animate-pulse" : "text-white"
                }`}
              >
                {formatTime(timeLeft)}
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsRunning(!isRunning)}
                  className={`p-3.5 rounded-xl font-bold text-white flex items-center justify-center space-x-2 shadow-lg transition ${
                    isRunning
                      ? "bg-amber-600 hover:bg-amber-500 shadow-amber-600/30"
                      : "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/30"
                  }`}
                >
                  {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  <span className="text-sm">{isRunning ? "Pausar" : "Iniciar"}</span>
                </button>

                <button
                  onClick={() => {
                    setIsRunning(false);
                    setTimeLeft((currentStep.durationMinutes || 5) * 60);
                  }}
                  className="p-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                  title="Reiniciar tempo da etapa"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right: Step Details */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  {currentStep.durationMinutes} minutos previstos
                </span>
                <h2 className="text-2xl font-bold text-slate-100 mt-1">{currentStep.title}</h2>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 text-slate-200 text-sm leading-relaxed">
                {currentStep.description}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-900/60">
                  <div className="text-xs font-bold text-indigo-300 uppercase tracking-wide mb-1">
                    👨‍🏫 Papel do Professor:
                  </div>
                  <p className="text-xs text-slate-300">{currentStep.teacherRole}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-violet-950/40 border border-violet-900/60">
                  <div className="text-xs font-bold text-violet-300 uppercase tracking-wide mb-1">
                    🧑‍🎓 Papel dos Alunos:
                  </div>
                  <p className="text-xs text-slate-300">{currentStep.studentRole}</p>
                </div>
              </div>

              {currentStep.resourcesNeeded && currentStep.resourcesNeeded.length > 0 && (
                <div className="text-xs text-slate-400 pt-2">
                  <strong className="text-slate-300">Recursos para esta etapa:</strong>{" "}
                  {currentStep.resourcesNeeded.join(", ")}
                </div>
              )}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentStepIndex === 0}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium flex items-center space-x-2 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Etapa Anterior</span>
            </button>

            <div className="text-xs text-slate-400 hidden sm:block">
              {currentStepIndex < steps.length - 1
                ? `Próxima: ${steps[currentStepIndex + 1]?.title}`
                : "Última etapa da aula!"}
            </div>

            <button
              onClick={() =>
                setCurrentStepIndex((prev) => Math.min(steps.length - 1, prev + 1))
              }
              disabled={currentStepIndex === steps.length - 1}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold flex items-center space-x-2 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-md shadow-indigo-600/30"
            >
              <span>Próxima Etapa</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
