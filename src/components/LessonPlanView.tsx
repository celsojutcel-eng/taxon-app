import React, { useState, useRef } from "react";
import { LessonPlan, TimelineItem, BloomLevelPlan } from "../types";
import { parseBNCCDetails } from "../data/bnccSuggestions";
import { TaxonLogo } from "./TaxonLogo";
import { AssessmentGeneratorSection } from "./AssessmentGeneratorSection";
import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";
import {
  Download,
  Printer,
  Sparkles,
  Clock,
  BookOpen,
  School,
  User,
  CheckCircle2,
  Plus,
  Trash2,
  Edit3,
  Copy,
  Check,
  Play,
  Share2,
  ArrowLeft,
  GraduationCap,
  ListChecks,
  AlertCircle,
  HelpCircle,
  Award,
  Layers,
} from "lucide-react";

interface LessonPlanViewProps {
  plan: LessonPlan;
  onUpdatePlan: (updated: LessonPlan) => void;
  onOpenClassroomMode: () => void;
  onOpenAIAssistant: () => void;
  onBackToForm: () => void;
}

export const LessonPlanView: React.FC<LessonPlanViewProps> = ({
  plan,
  onUpdatePlan,
  onOpenClassroomMode,
  onOpenAIAssistant,
  onBackToForm,
}) => {
  const [isExportingPdf, setIsExportingPdf] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);
  const documentRef = useRef<HTMLDivElement>(null);

  // PDF Export logic using html2canvas-pro and jsPDF (native OKLCH support)
  const handleExportPdf = async () => {
    if (!documentRef.current) return;
    setIsExportingPdf(true);

    try {
      const element = documentRef.current;
      const sanitizedSubject = plan.subject.replace(/[^a-zA-Z0-9]/g, "_");
      const sanitizedTitle = plan.title.replace(/[^a-zA-Z0-9]/g, "_").slice(0, 40);
      const filename = `Plano_de_Aula_${sanitizedSubject}_${sanitizedTitle}.pdf`;

      // Render element to high-res canvas via html2canvas-pro
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: "#ffffff",
        windowWidth: 1200,
        onclone: (clonedDoc) => {
          // Hide elements marked as non-printable or buttons if any
          const noPrints = clonedDoc.querySelectorAll(".no-print");
          noPrints.forEach((el) => {
            (el as HTMLElement).style.display = "none";
          });
        },
      });

      // A4 portrait dimensions in millimeters
      const pdf = new jsPDF({
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      });

      const pageWidthMm = 210;
      const pageHeightMm = 297;
      const marginMm = 10;
      const printWidthMm = pageWidthMm - marginMm * 2; // 190 mm
      const printHeightMm = pageHeightMm - marginMm * 2; // 277 mm

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      // Calculate slice height in canvas pixels corresponding to one A4 printable area
      const pageCanvasHeight = Math.floor((canvasWidth / printWidthMm) * printHeightMm);
      const totalPages = Math.ceil(canvasHeight / pageCanvasHeight);

      for (let page = 0; page < totalPages; page++) {
        const sourceY = page * pageCanvasHeight;
        const sourceHeight = Math.min(pageCanvasHeight, canvasHeight - sourceY);

        // Render page slice onto individual canvas
        const pageCanvas = document.createElement("canvas");
        pageCanvas.width = canvasWidth;
        pageCanvas.height = sourceHeight;
        const pageCtx = pageCanvas.getContext("2d");

        if (pageCtx) {
          pageCtx.fillStyle = "#ffffff";
          pageCtx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
          pageCtx.drawImage(
            canvas,
            0,
            sourceY,
            canvasWidth,
            sourceHeight,
            0,
            0,
            canvasWidth,
            sourceHeight
          );

          const imgData = pageCanvas.toDataURL("image/jpeg", 0.98);
          const renderHeightMm = (sourceHeight * printWidthMm) / canvasWidth;

          if (page > 0) {
            pdf.addPage();
          }

          pdf.addImage(imgData, "JPEG", marginMm, marginMm, printWidthMm, renderHeightMm);
        }
      }

      pdf.save(filename);
    } catch (error) {
      console.error("Erro ao exportar PDF:", error);
      alert("Falha ao exportar PDF automaticamente. Você também pode utilizar a opção Imprimir / Salvar como PDF do navegador.");
    } finally {
      setIsExportingPdf(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
PLANO DE AULA: ${plan.title}
COMPONENTE CURRICULAR: ${plan.subject} | SÉRIE: ${plan.gradeLevel} | DURAÇÃO: ${plan.duration}
ESCOLA: ${plan.schoolName || "N/A"} | PROFESSOR(A): ${plan.teacherName || "N/A"}

RESUMO:
${plan.summary}

HABILIDADES BNCC:
${plan.bnccSkills.map((s) => `- [${s.code}] ${s.description}`).join("\n")}

OBJETIVOS GERAIS:
${plan.generalObjectives.map((o) => `- ${o}`).join("\n")}

CRONOGRAMA DE ETAPAS:
${plan.timeline
  .map(
    (t, idx) =>
      `\n${idx + 1}. [${t.durationMinutes} min] ${t.title} (${t.phase})\n   Descrição: ${t.description}\n   Papel Prof: ${t.teacherRole}\n   Papel Alunos: ${t.studentRole}`
  )
  .join("\n")}

RECURSOS E MATERIAIS:
${plan.necessaryMaterials.map((m) => `- ${m}`).join("\n")}

MÉTODO DE AVALIAÇÃO:
${plan.assessmentMethod}

ADAPTAÇÕES DE INCLUSÃO:
${plan.inclusivityAdaptations}
`.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Handlers for interactive field edits
  const handleTimelineItemChange = (index: number, field: keyof TimelineItem, value: any) => {
    const updatedTimeline = [...plan.timeline];
    updatedTimeline[index] = { ...updatedTimeline[index], [field]: value };
    onUpdatePlan({ ...plan, timeline: updatedTimeline });
  };

  const handleAddTimelineStep = () => {
    const newStep: TimelineItem = {
      phase: "Atividade Prática",
      title: "Nova Etapa Interativa",
      durationMinutes: 10,
      description: "Descreva o que será feito nesta etapa.",
      teacherRole: "Orientar os alunos",
      studentRole: "Participar ativamente",
      resourcesNeeded: ["Caderno", "Lápis"],
    };
    onUpdatePlan({ ...plan, timeline: [...plan.timeline, newStep] });
  };

  const handleRemoveTimelineStep = (index: number) => {
    const updated = plan.timeline.filter((_, idx) => idx !== index);
    onUpdatePlan({ ...plan, timeline: updated });
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Control Action Bar */}
      <div className="bg-slate-900 border border-slate-800 p-4 sm:p-5 rounded-2xl shadow-xl flex flex-wrap items-center justify-between gap-3 text-white no-print">
        <button
          onClick={onBackToForm}
          className="inline-flex items-center px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm font-medium transition"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          <span>Voltar ao Formulário</span>
        </button>

        <div className="flex flex-wrap items-center gap-2">
          {/* Edit Toggle */}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`inline-flex items-center px-3 py-2 rounded-xl text-xs sm:text-sm font-medium border transition ${
              isEditing
                ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"
            }`}
          >
            <Edit3 className="w-4 h-4 mr-1.5" />
            <span>{isEditing ? "Concluir Edição" : "Editar Conteúdo"}</span>
          </button>

          {/* AI Pedagogy Assistant */}
          <button
            onClick={onOpenAIAssistant}
            className="inline-flex items-center px-3.5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-600/30 transition"
          >
            <Sparkles className="w-4 h-4 mr-1.5 text-amber-300 animate-pulse" />
            <span>Assistente IA</span>
          </button>

          {/* Modo Aula Live */}
          <button
            onClick={onOpenClassroomMode}
            className="inline-flex items-center px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/30 transition"
          >
            <Play className="w-4 h-4 mr-1.5 fill-current" />
            <span>Modo Aula Live</span>
          </button>

          {/* Copy Plain Text */}
          <button
            onClick={handleCopyText}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
            title="Copiar texto formatado"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>

          {/* Print */}
          <button
            onClick={handlePrint}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
            title="Imprimir"
          >
            <Printer className="w-4 h-4" />
          </button>

          {/* PDF EXPORT BUTTON */}
          <button
            onClick={handleExportPdf}
            disabled={isExportingPdf}
            className="inline-flex items-center px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-indigo-600/40 transition disabled:opacity-50"
          >
            {isExportingPdf ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                <span>Gerando PDF...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-1.5" />
                <span>Exportar PDF</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* DOCUMENT PREVIEW CONTAINER (Exportable area for html2pdf) */}
      <div
        ref={documentRef}
        id="lesson-plan-pdf-document"
        className="bg-white text-slate-900 p-8 sm:p-12 rounded-2xl shadow-2xl border border-slate-200 font-sans print:shadow-none print:p-0 print:border-none"
        style={{ color: "#0f172a", backgroundColor: "#ffffff" }}
      >
        {/* Top Header with TAXON Logo & School Banner */}
        <div className="mb-6 pb-5 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* TAXON Logo */}
          <TaxonLogo size="md" variant="light" showTagline={true} />

          {/* School and Teacher Information */}
          <div className="flex flex-col sm:items-end text-left sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 w-full sm:w-auto">
            <div className="flex items-center sm:justify-end space-x-1.5 text-slate-800">
              <School className="w-4 h-4 text-indigo-700 shrink-0" />
              <span className="text-sm font-extrabold text-slate-900">
                {plan.schoolName || "E.E. Pe. Sabóia de Medeiros"}
              </span>
            </div>
            <div className="text-xs text-slate-600 mt-0.5">
              <span className="text-slate-400 font-medium">Professor(a): </span>
              <span className="font-bold text-slate-800">{plan.teacherName || "Equipe Docente"}</span>
            </div>
          </div>
        </div>

        {/* Document Header */}
        <div className="border-b-2 border-indigo-600 pb-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-1 flex items-center">
              <GraduationCap className="w-4 h-4 mr-1.5" />
              PLANO DE AULA INTERATIVO • BNCC ALINHADO
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {isEditing ? (
                <input
                  type="text"
                  value={plan.title}
                  onChange={(e) => onUpdatePlan({ ...plan, title: e.target.value })}
                  className="w-full font-bold border-b-2 border-indigo-500 focus:outline-none text-2xl text-slate-900"
                />
              ) : (
                plan.title
              )}
            </h1>
          </div>

          <div className="text-right text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200 w-full sm:w-auto">
            {plan.schoolName && (
              <div className="font-bold text-slate-800 flex items-center justify-end">
                <School className="w-3.5 h-3.5 mr-1 text-indigo-600" /> {plan.schoolName}
              </div>
            )}
            {plan.teacherName && (
              <div className="text-slate-700 flex items-center justify-end mt-0.5">
                <User className="w-3.5 h-3.5 mr-1 text-indigo-600" /> Prof(a): {plan.teacherName}
              </div>
            )}
            <div className="text-slate-500 mt-0.5">Data: {new Date().toLocaleDateString("pt-BR")}</div>
          </div>
        </div>

        {/* Metadata Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
          <div className="space-y-0.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block">
              Componente Curricular
            </span>
            <span className="text-sm font-bold text-slate-900">{plan.subject}</span>
          </div>

          <div className="space-y-0.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block">
              Série / Ano
            </span>
            <span className="text-sm font-bold text-slate-900">
              {plan.gradeLevel} {plan.bimester ? `(${plan.bimester})` : ""}
            </span>
          </div>

          <div className="space-y-0.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block">
              Duração
            </span>
            <span className="text-sm font-bold text-slate-900 flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-indigo-600" /> {plan.duration}
            </span>
          </div>

          <div className="space-y-0.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block">
              Data de Criação
            </span>
            <span className="text-sm font-bold text-slate-900">
              {new Date(plan.createdAt).toLocaleDateString("pt-BR")}
            </span>
          </div>
        </div>

        {/* Summary Executive */}
        <div className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center">
            <BookOpen className="w-4 h-4 mr-1.5 text-indigo-600" /> Resumo Pedagógico
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
            {isEditing ? (
              <textarea
                value={plan.summary}
                onChange={(e) => onUpdatePlan({ ...plan, summary: e.target.value })}
                className="w-full text-sm p-2 border rounded focus:outline-none"
                rows={3}
              />
            ) : (
              plan.summary
            )}
          </p>
        </div>

        {/* BNCC Competencies / Skills */}
        {plan.bnccSkills && plan.bnccSkills.length > 0 && (
          <div className="mb-8 page-break-inside-avoid">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center">
                <Award className="w-4 h-4 mr-1.5 text-indigo-600" /> Habilidades BNCC Relacionadas
              </h3>
              <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                Fidelidade Curricular Oficial
              </span>
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {plan.bnccSkills.map((skill, idx) => {
                const parsed = parseBNCCDetails(skill.code ? `${skill.code} - ${skill.description || ""}` : skill.description);
                const displayDesc = parsed?.fullText ? parsed.fullText.replace(/^[A-Z0-9*]+\s*[-–—:]\s*/i, "") : skill.description;
                const verb = parsed?.verb || skill.verb;
                const content = parsed?.content || skill.content;
                const context = parsed?.context || skill.context;

                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2"
                  >
                    <div className="flex items-start space-x-2.5">
                      <span className="inline-block px-2.5 py-1 rounded text-xs font-mono font-bold bg-indigo-600 text-white shrink-0 shadow-sm mt-0.5">
                        {skill.code || parsed?.code || "BNCC"}
                      </span>
                      <p className="text-xs text-slate-800 font-bold leading-relaxed">{displayDesc}</p>
                    </div>

                    {verb && content && context && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                        <div className="bg-blue-50 border border-blue-200/70 p-2.5 rounded-lg text-xs">
                          <span className="text-[9px] uppercase tracking-wider text-blue-700 font-bold block mb-0.5">
                            1. [VERBO(S)] - Ação Cognitiva
                          </span>
                          <span className="font-semibold text-blue-900">{verb}</span>
                        </div>
                        <div className="bg-emerald-50 border border-emerald-200/70 p-2.5 rounded-lg text-xs">
                          <span className="text-[9px] uppercase tracking-wider text-emerald-700 font-bold block mb-0.5">
                            2. [OBJETO DE CONHECIMENTO]
                          </span>
                          <span className="font-semibold text-emerald-900">{content}</span>
                        </div>
                        <div className="bg-rose-50 border border-rose-200/70 p-2.5 rounded-lg text-xs">
                          <span className="text-[9px] uppercase tracking-wider text-rose-700 font-bold block mb-0.5">
                            3. [MODIFICADOR/CONTEXTO]
                          </span>
                          <span className="font-semibold text-rose-900">{context}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Objectives Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 page-break-inside-avoid">
          {/* General Objectives */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-2 flex items-center">
              <ListChecks className="w-4 h-4 mr-1.5 text-indigo-600" /> Objetivos Gerais
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {plan.generalObjectives.map((obj, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-indigo-600 font-bold mr-2">•</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specific Objectives */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-2 flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-1.5 text-indigo-600" /> Objetivos Específicos
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {plan.specificObjectives.map((obj, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-indigo-600 font-bold mr-2">•</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bloom Cognitive Progression and Planning Details (if available) */}
        {plan.bloomPlans && Object.keys(plan.bloomPlans).length > 0 && (
          <div className="mb-8 p-5 rounded-2xl bg-indigo-50/40 border-2 border-indigo-200/80 space-y-4 page-break-inside-avoid">
            <div className="flex items-center justify-between border-b border-indigo-100 pb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-800 flex items-center">
                <Layers className="w-4 h-4 mr-1.5 text-indigo-600" /> Planejamento por Níveis da Taxonomia de Bloom
              </h3>
              <span className="text-[10px] bg-indigo-600 text-white font-bold px-2 py-0.5 rounded-full">
                Progressão Curricular
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {(Object.values(plan.bloomPlans) as BloomLevelPlan[]).map((bp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-indigo-100 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-indigo-950 flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] flex items-center justify-center font-bold">
                        {bp.level}
                      </span>
                      Nível {bp.level}: {bp.levelName}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      bp.status === "completed" ? "bg-emerald-100 text-emerald-800" : "bg-indigo-100 text-indigo-800"
                    }`}>
                      {bp.status === "completed" ? "✓ Concluído" : "Em Andamento"}
                    </span>
                  </div>

                  {bp.notes && (
                    <div className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/70">
                      <strong className="text-indigo-900 block mb-0.5">Estratégias Pedagógicas:</strong>
                      <span>{bp.notes}</span>
                    </div>
                  )}

                  {bp.formativeEvidence && (
                    <div className="text-xs text-purple-900 bg-purple-50/70 p-2.5 rounded-lg border border-purple-200">
                      <strong className="text-purple-900 block mb-0.5 font-bold">Avaliação Formativa / Evidência de Aprendizagem:</strong>
                      <span>{bp.formativeEvidence}</span>
                    </div>
                  )}

                  {bp.recoveryNotes && (
                    <div className="text-xs text-amber-900 bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                      <strong className="text-amber-800 block mb-0.5">Plano de Recuperação Contínua:</strong>
                      <span>{bp.recoveryNotes}</span>
                    </div>
                  )}

                  {bp.recompositionNotes && (
                    <div className="text-xs text-cyan-900 bg-cyan-50 p-2.5 rounded-lg border border-cyan-200">
                      <strong className="text-cyan-800 block mb-0.5">Plano de Recomposição de Aprendizagens:</strong>
                      <span>{bp.recompositionNotes}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Timeline / Cronograma Passo a Passo */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center">
              <Layers className="w-4 h-4 mr-1.5 text-indigo-600" /> Cronograma e Roteiro da Aula
            </h3>
            {isEditing && (
              <button
                onClick={handleAddTimelineStep}
                className="px-3 py-1 rounded bg-indigo-600 text-white text-xs font-bold flex items-center space-x-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Adicionar Etapa</span>
              </button>
            )}
          </div>

          <div className="space-y-4">
            {plan.timeline.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm relative space-y-3 page-break-inside-avoid"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-extrabold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-extrabold uppercase tracking-wide text-indigo-700">
                      {item.phase}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      ({item.durationMinutes} min)
                    </span>
                  </div>

                  {isEditing && (
                    <button
                      onClick={() => handleRemoveTimelineStep(idx)}
                      className="text-rose-500 hover:text-rose-700 text-xs flex items-center"
                    >
                      <Trash2 className="w-3.5 h-3.5 mr-1" /> Remover
                    </button>
                  )}
                </div>

                <h4 className="font-bold text-base text-slate-900">
                  {isEditing ? (
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => handleTimelineItemChange(idx, "title", e.target.value)}
                      className="w-full border-b focus:outline-none font-bold"
                    />
                  ) : (
                    item.title
                  )}
                </h4>

                <p className="text-xs text-slate-700 leading-relaxed">
                  {isEditing ? (
                    <textarea
                      value={item.description}
                      onChange={(e) =>
                        handleTimelineItemChange(idx, "description", e.target.value)
                      }
                      className="w-full border rounded p-1 text-xs"
                      rows={2}
                    />
                  ) : (
                    item.description
                  )}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="bg-indigo-50/60 p-2.5 rounded-lg border border-indigo-100">
                    <span className="font-bold text-indigo-900 block mb-0.5">
                      👨‍🏫 Papel do Professor:
                    </span>
                    <span className="text-slate-700">{item.teacherRole}</span>
                  </div>

                  <div className="bg-violet-50/60 p-2.5 rounded-lg border border-violet-100">
                    <span className="font-bold text-violet-900 block mb-0.5">
                      🧑‍🎓 Papel dos Alunos:
                    </span>
                    <span className="text-slate-700">{item.studentRole}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources & Assessment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 page-break-inside-avoid">
          {/* Materials */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-2">
              📦 Materiais & Recursos Necessários
            </h3>
            <ul className="space-y-1 text-xs text-slate-700">
              {plan.necessaryMaterials.map((mat, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-indigo-600 font-bold mr-2">✓</span>
                  <span>{mat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Assessment */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-2">
              📝 Método de Avaliação Formativa
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">{plan.assessmentMethod}</p>
          </div>
        </div>

        {/* Rubric Criteria Table (if present) */}
        {plan.rubricCriteria && plan.rubricCriteria.length > 0 && (
          <div className="mb-8 page-break-inside-avoid">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              📊 Rubrica Simplificada de Desempenho
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-indigo-900 text-white font-bold">
                    <th className="p-2.5 border border-indigo-800">Critério</th>
                    <th className="p-2.5 border border-indigo-800 bg-emerald-700">Excelente</th>
                    <th className="p-2.5 border border-indigo-800 bg-blue-700">Bom</th>
                    <th className="p-2.5 border border-indigo-800 bg-amber-700">Em Desenvol.</th>
                  </tr>
                </thead>
                <tbody>
                  {plan.rubricCriteria.map((rubric, i) => (
                    <tr key={i} className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="p-2.5 border border-slate-200 font-bold text-slate-900">
                        {rubric.criterion}
                      </td>
                      <td className="p-2.5 border border-slate-200 text-slate-700">
                        {rubric.excelente}
                      </td>
                      <td className="p-2.5 border border-slate-200 text-slate-700">{rubric.bom}</td>
                      <td className="p-2.5 border border-slate-200 text-slate-700">
                        {rubric.emDesenvolvimento}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Inclusion & Adaptations */}
        {plan.inclusivityAdaptations && (
          <div className="mb-8 p-4 rounded-xl bg-amber-50 border border-amber-200 page-break-inside-avoid">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1.5 text-amber-700" />
              Estratégias de Acessibilidade & Inclusão
            </h3>
            <p className="text-xs text-amber-950 leading-relaxed">{plan.inclusivityAdaptations}</p>
          </div>
        )}

        {/* Gerador de 10 Itens de Avaliação da Habilidade Selecionada */}
        {plan.bnccSkills && plan.bnccSkills.length > 0 && (
          <div className="mb-8 page-break-inside-avoid">
            <AssessmentGeneratorSection
              skillCode={plan.bnccSkills[0]?.code || ""}
              skillText={plan.bnccSkills[0]?.description || ""}
              subject={plan.subject}
              gradeLevel={plan.gradeLevel}
              activeBloomLevel={plan.currentBloomLevel}
            />
          </div>
        )}

        {/* Teacher Tips & Extension */}
        {plan.teacherTips && plan.teacherTips.length > 0 && (
          <div className="mb-8 p-4 rounded-xl bg-slate-50 border border-slate-200 page-break-inside-avoid">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              💡 Dicas de Gestão de Sala para o Professor
            </h3>
            <ul className="space-y-1 text-xs text-slate-700">
              {plan.teacherTips.map((tip, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-indigo-600 font-bold mr-2">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Signatures for PDF Print Export */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 gap-8 text-center text-xs text-slate-600 page-break-inside-avoid">
          <div>
            <div className="border-b border-slate-400 w-3/4 mx-auto mb-2" />
            <p className="font-bold text-slate-800">
              {plan.teacherName ? `Prof. ${plan.teacherName}` : "Assinatura do(a) Professor(a)"}
            </p>
            <p className="text-[10px] text-slate-500">Docente Responsável</p>
          </div>
          <div>
            <div className="border-b border-slate-400 w-3/4 mx-auto mb-2" />
            <p className="font-bold text-slate-800">Coordenação Pedagógica</p>
            <p className="text-[10px] text-slate-500">
              {plan.schoolName ? plan.schoolName : "Visto da Direção / Coordenação"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
