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

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Falha ao comunicar com o servidor Gemini.");
      }

      const newPlan: LessonPlan = data;
      setCurrentPlan(newPlan);

      // Auto-save to saved plans library
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
    // Remove duplicates by id
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
          <div>Desenvolvido com IA Gemini & Exportação Automática em PDF</div>
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
