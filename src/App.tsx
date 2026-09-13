import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { GeneratorForm } from "./components/GeneratorForm";
import { LessonPlanView } from "./components/LessonPlanView";
import { SavedPlansModal } from "./components/SavedPlansModal";
import { ClassroomModeModal } from "./components/ClassroomModeModal";
import { AIAssistantModal } from "./components/AIAssistantModal";
import { LessonPlan, GeneratorFormData } from "./types";
import { Sparkles, BookOpenCheck, AlertCircle } from "lucide-react";

const STORAGE_KEY = "lesson_plans_v1";

export default function App() {
  const [currentPlan, setCurrentPlan] = useState<LessonPlan | null>(null);
  const [savedPlans, setSavedPlans] = useState<LessonPlan[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Modals state
  const [isSavedOpen, setIsSavedOpen] = useState<boolean>(false);
  const [isClassroomModeOpen, setIsClassroomModeOpen] = useState<boolean>(false);
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState<boolean>(false);

  // 1. CORREÇÃO CRÍTICA: Aponta para a URL oficial do SDK do Canva
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.canva.com/designbutton/v2/api.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // 2. FUNÇÃO QUE ABRE O EDITOR DO CANVA ATUALIZADA PARA O PADRÃO V2 SDK
  const handleOpenCanva = async () => {
    if (!(window as any).Canva || !(window as any).Canva.DesignButton) {
      alert("A ferramenta do Canva ainda está carregando. Aguarde 2 segundos!");
      return;
    }

          try {
      const canvaApi = await (window as any).Canva.DesignButton.initialize({
        apiKey: "AAHOGNyGfQw"
      });



      canvaApi.createDesign({
        design: {
          type: "Presentation", 
        },
        onDesignPublish: (opts: any) => {
          const imagemDoCanvaUrl = opts.exportUrl;

          if (currentPlan) {
            const planoAtualizado: LessonPlan = {
              ...currentPlan,
              suporte_dados: {
                requer_ilustracao: true,
                prompt_para_imagem: "Criado de forma personalizada via Canva",
                url: imagemDoCanvaUrl,
                imageUrl: imagemDoCanvaUrl,
              } as any
            };

            handleUpdateCurrentPlan(planoAtualizado);
            alert("Sucesso! O seu design do Canva foi embutido no seu plano de aula!");
          }
        },
      });
    } catch (error) {
      console.error("Erro na integração:", error);
      alert("Não foi possível carregar a janela do Canva.");
    }
  };

  // Load saved plans from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setSavedPlans(parsed);
        }
      }
    } catch (e) {
      console.error("Erro ao carregar planos salvos:", e);
    }
  }, []);

  // Save to localStorage when savedPlans changes
  const savePlansToStorage = (plans: LessonPlan[]) => {
    setSavedPlans(plans);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(plans));
    } catch (e) {
      console.error("Erro ao salvar no localStorage:", e);
    }
  };

  const handleGeneratePlan = async (formData: GeneratorFormData) => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const response = await fetch("/api/generate-lesson-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let data: any;
      try {
        const text = await response.text();
        data = JSON.parse(text);
      } catch {
        throw new Error("O servidor retornou uma resposta temporariamente inacessível. Por favor, tente novamente em instantes.");
      }

      if (!response.ok) {
        const rawErr = data.error || data.message || "Falha ao comunicar com o servidor Gemini.";
        let cleanErr = typeof rawErr === "string" ? rawErr : JSON.stringify(rawErr);
        if (cleanErr.includes("503") || cleanErr.includes("high demand") || cleanErr.includes("UNAVAILABLE")) {
          cleanErr = "Os servidores de Inteligência Artificial estão com alta demanda temporária. Por favor, aguarde alguns instantes e tente novamente.";
        }
        throw new Error(cleanErr);
      }

      const newPlan: LessonPlan = data;
      setCurrentPlan(newPlan);

      const updatedList = [newPlan, ...savedPlans.filter((p) => p.id !== newPlan.id)];
      savePlansToStorage(updatedList);
    } catch (err: any) {
      console.error("Erro na geração:", err);
      setErrorMessage(
        err.message || "Ocorreu um erro ao gerar o plano de aula. Por favor, tente novamente."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateCurrentPlan = (updated: LessonPlan) => {
    setCurrentPlan(updated);
    const updatedList = savedPlans.map((p) => (p.id === updated.id ? updated : p));
    savePlansToStorage(updatedList);
  };

  const handleDeletePlan = (planId: string) => {
    const updatedList = savedPlans.filter((p) => p.id !== planId);
    savePlansToStorage(updatedList);
    if (currentPlan?.id === planId) {
      setCurrentPlan(null);
    }
  };

  const handleImportPlans = (importedPlans: LessonPlan[]) => {
    const merged = [...importedPlans, ...savedPlans];
    const unique = Array.from(new Map(merged.map((item) => [item.id, item])).values());
    savePlansToStorage(unique);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* App Header */}
      <Header
        savedCount={savedPlans.length}
        onOpenSaved={() => setIsSavedOpen(true)}
        onNewPlan={() => {
          setCurrentPlan(null);
          setErrorMessage(null);
        }}
        hasActivePlan={!!currentPlan}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {errorMessage && (
          <div className="max-w-4xl mx-auto mb-6 p-4 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-200 flex items-start space-x-3 text-sm">
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold block mb-0.5">Erro na Geração:</strong>
              <span>{errorMessage}</span>
            </div>
          </div>
        )}

        {/* Botão de personalização do Canva */}
        {currentPlan && (
          <div className="max-w-4xl mx-auto mb-4 flex justify-end">
            <button
              onClick={handleOpenCanva}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium rounded-xl shadow-md transition-all active:scale-95 text-sm"
            >
              <Sparkles className="w-4 h-4 text-purple-200 animate-pulse" />
              <span>Personalizar com IA do Canva (Premium Edu)</span>
            </button>
          </div>
        )}

        {/* View Switcher: Form or Active Lesson Plan */}
        {!currentPlan ? (
          <GeneratorForm onSubmit={handleGeneratePlan} isLoading={isLoading} />
        ) : (
          <LessonPlanView
            plan={currentPlan}
            onUpdatePlan={handleUpdateCurrentPlan}
            onOpenClassroomMode={() => setIsClassroomModeOpen(true)}
            onOpenAIAssistant={() => setIsAIAssistantOpen(true)}
            onBackToForm={() => setCurrentPlan(null)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <BookOpenCheck className="w-4 h-4 text-indigo-400" />
            <span className="font-semibold text-slate-400">Plano de Aula Interativo</span>
            <span>• Alinhado à BNCC</span>
          </div>
          <div>Desenvolvido com IA Gemini & Integração Oficial Canva SDK</div>
        </div>
      </footer>

      {/* Modals */}
      <SavedPlansModal
        plans={savedPlans}
        isOpen={isSavedOpen}
        onClose={() => setIsSavedOpen(false)}
        onSelectPlan={(plan) => setCurrentPlan(plan)}
        onDeletePlan={handleDeletePlan}
        onImportPlans={handleImportPlans}
      />

      {currentPlan && (
        <>
          <ClassroomModeModal
            plan={currentPlan}
            isOpen={isClassroomModeOpen}
            onClose={() => setIsClassroomModeOpen(false)}
          />

          <AIAssistantModal
            plan={currentPlan}
            isOpen={isAIAssistantOpen}
            onClose={() => setIsAIAssistantOpen(false)}
          />
        </>
      )}
    </div>
  );
}
