import React, { useState } from "react";
import { LessonPlan } from "../types";
import { Folder, Search, Trash2, Copy, FileText, Download, Upload, X, Clock, BookOpen, ExternalLink } from "lucide-react";

interface SavedPlansModalProps {
  plans: LessonPlan[];
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (plan: LessonPlan) => void;
  onDeletePlan: (planId: string) => void;
  onImportPlans: (importedPlans: LessonPlan[]) => void;
}

export const SavedPlansModal: React.FC<SavedPlansModalProps> = ({
  plans,
  isOpen,
  onClose,
  onSelectPlan,
  onDeletePlan,
  onImportPlans,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("ALL");

  if (!isOpen) return null;

  const subjects = Array.from(new Set(plans.map((p) => p.subject).filter(Boolean)));

  const filteredPlans = plans.filter((plan) => {
    const matchesSearch =
      plan.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.gradeLevel.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === "ALL" || plan.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  const handleExportJSON = () => {
    if (plans.length === 0) return;
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(plans, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `meus_planos_de_aula_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        const importedArray = Array.isArray(parsed) ? parsed : [parsed];
        onImportPlans(importedArray);
        alert(`${importedArray.length} plano(s) importado(s) com sucesso!`);
      } catch (err) {
        alert("Arquivo JSON inválido.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl text-slate-100 overflow-hidden">
        {/* Header */}
        <div className="p-5 bg-slate-800/80 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/30 flex items-center justify-center">
              <Folder className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Biblioteca de Planos de Aula</h3>
              <p className="text-xs text-slate-400">{plans.length} plano(s) gravado(s) no seu navegador</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleExportJSON}
              disabled={plans.length === 0}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center space-x-1.5 border border-slate-700 transition disabled:opacity-40"
              title="Exportar backup de todos os planos em JSON"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Exportar Backup</span>
            </button>

            <label className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center space-x-1.5 border border-slate-700 transition cursor-pointer">
              <Upload className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Importar</span>
              <input type="file" accept=".json" onChange={handleFileUpload} className="hidden" />
            </label>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="p-4 bg-slate-950/60 border-b border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="sm:col-span-2 relative">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
            <input
              type="text"
              placeholder="Buscar por título, assunto ou série..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="ALL">Todos os Componentes Curriculares</option>
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Plan List */}
        <div className="p-4 sm:p-6 flex-1 overflow-y-auto space-y-3">
          {filteredPlans.length === 0 ? (
            <div className="py-16 text-center text-slate-500 space-y-3">
              <BookOpen className="w-12 h-12 mx-auto text-slate-600 stroke-1" />
              <p className="text-sm font-medium">Nenhum plano de aula encontrado.</p>
              <p className="text-xs text-slate-600">
                Gere um novo plano de aula na tela principal para salvá-lo automaticamente aqui.
              </p>
            </div>
          ) : (
            filteredPlans.map((plan) => (
              <div
                key={plan.id}
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500/50 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {plan.subject}
                    </span>
                    <span className="text-xs text-slate-400">• {plan.gradeLevel}</span>
                  </div>
                  <h4 className="font-bold text-base text-slate-100 group-hover:text-indigo-300 transition truncate">
                    {plan.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2">{plan.summary}</p>
                  <div className="flex items-center space-x-3 text-[11px] text-slate-500 pt-1">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" /> {plan.duration}
                    </span>
                    <span>
                      Criado em: {new Date(plan.createdAt).toLocaleDateString("pt-BR")}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 self-end sm:self-center">
                  <button
                    onClick={() => {
                      onSelectPlan(plan);
                      onClose();
                    }}
                    className="px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center space-x-1.5 transition shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Abrir</span>
                  </button>

                  <button
                    onClick={() => {
                      if (confirm(`Deseja realmente apagar o plano "${plan.title}"?`)) {
                        onDeletePlan(plan.id);
                      }
                    }}
                    className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 transition"
                    title="Excluir plano"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex justify-end">
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
