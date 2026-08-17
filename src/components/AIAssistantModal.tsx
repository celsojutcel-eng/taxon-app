import React, { useState } from "react";
import { LessonPlan } from "../types";
import { Sparkles, HelpCircle, HeartHandshake, Wrench, FilePlus, X, Copy, Check, Send } from "lucide-react";

interface AIAssistantModalProps {
  plan: LessonPlan;
  isOpen: boolean;
  onClose: () => void;
  onAppendToPlan?: (type: string, content: string) => void;
}

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({
  plan,
  isOpen,
  onClose,
  onAppendToPlan,
}) => {
  const [activeTab, setActiveTab] = useState<string>("quiz");
  const [customPrompt, setCustomPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [resultText, setResultText] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleRunAI = async (actionType: string, promptDetails?: string) => {
    setIsLoading(true);
    setResultText("");
    try {
      const response = await fetch("/api/refine-section", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: actionType,
          currentPlan: plan,
          promptDetails: promptDetails || customPrompt,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Erro ao consultar a IA.");
      }
      setResultText(data.resultText || "Nenhum resultado gerado.");
    } catch (err: any) {
      alert("Erro: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!resultText) return;
    navigator.clipboard.writeText(resultText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl text-slate-100 overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 bg-gradient-to-r from-indigo-900 to-purple-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-lg bg-indigo-600/40 border border-indigo-400/30 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-indigo-300 animate-pulse" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Assistente Pedagógico IA</h3>
              <p className="text-xs text-indigo-200">Expandir e personalizar: {plan.title}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Tabs */}
        <div className="p-3 bg-slate-800/60 border-b border-slate-800 flex items-center space-x-2 overflow-x-auto text-xs font-medium">
          <button
            onClick={() => {
              setActiveTab("quiz");
              if (!resultText) handleRunAI("generate_quiz");
            }}
            className={`px-3 py-2 rounded-lg flex items-center space-x-1.5 whitespace-nowrap transition ${
              activeTab === "quiz"
                ? "bg-indigo-600 text-white font-bold"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Criar Quiz de Fixação</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("inclusion");
              if (!resultText) handleRunAI("adapt_inclusion");
            }}
            className={`px-3 py-2 rounded-lg flex items-center space-x-1.5 whitespace-nowrap transition ${
              activeTab === "inclusion"
                ? "bg-indigo-600 text-white font-bold"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Inclusão & Acessibilidade</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("digital_tools");
              if (!resultText) handleRunAI("suggest_digital_tools");
            }}
            className={`px-3 py-2 rounded-lg flex items-center space-x-1.5 whitespace-nowrap transition ${
              activeTab === "digital_tools"
                ? "bg-indigo-600 text-white font-bold"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Ferramentas Digitais</span>
          </button>

          <button
            onClick={() => setActiveTab("custom")}
            className={`px-3 py-2 rounded-lg flex items-center space-x-1.5 whitespace-nowrap transition ${
              activeTab === "custom"
                ? "bg-indigo-600 text-white font-bold"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            <FilePlus className="w-3.5 h-3.5" />
            <span>Pedido Personalizado</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 flex-1 overflow-y-auto space-y-4">
          {activeTab === "custom" && (
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wide block">
                O que você gostaria de adicionar ou alterar neste plano?
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Ex: Crie um exemplo prático para o tema com analogias cotidianas..."
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  onClick={() => handleRunAI("custom", customPrompt)}
                  disabled={isLoading || !customPrompt.trim()}
                  className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-sm text-white flex items-center space-x-1.5 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>Gerar</span>
                </button>
              </div>
            </div>
          )}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="py-12 text-center space-y-3">
              <div className="w-8 h-8 border-3 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-sm font-medium text-indigo-300">
                Processando com Inteligência Artificial Gemini...
              </p>
            </div>
          )}

          {/* AI Result Output */}
          {!isLoading && resultText && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Resultado Gerado
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={handleCopy}
                    className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center space-x-1 transition"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copiado!" : "Copiar"}</span>
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                {resultText}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium transition"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
