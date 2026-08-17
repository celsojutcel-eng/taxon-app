import React, { useState } from "react";
import {
  Layers,
  CheckCircle2,
  Lock,
  Unlock,
  ChevronUp,
  RotateCcw,
  LifeBuoy,
  FileEdit,
  ArrowRight,
  Info,
  Check,
  AlertCircle,
  Clock,
  ClipboardCheck,
  Sparkles
} from "lucide-react";
import { BloomLevelPlan } from "../types";

// Dicionário canônico de mapeamento de verbos para os níveis da Taxonomia de Bloom
export const VERB_TO_BLOOM: Record<string, { level: number; category: string }> = {
  // Nível 1: Lembrar (Recordar)
  "identificar": { level: 1, category: "Lembrar" },
  "listar": { level: 1, category: "Lembrar" },
  "localizar": { level: 1, category: "Lembrar" },
  "reconhecer": { level: 1, category: "Lembrar" },

  // Nível 2: Compreender (Entender)
  "apreciar": { level: 2, category: "Compreender" },
  "apropriar-se": { level: 2, category: "Compreender" },
  "apropriar": { level: 2, category: "Compreender" },
  "associar": { level: 2, category: "Compreender" },
  "caracterizar": { level: 2, category: "Compreender" },
  "classificar": { level: 2, category: "Compreender" },
  "comparar": { level: 2, category: "Compreender" },
  "compartilhar": { level: 2, category: "Compreender" },
  "compreender": { level: 2, category: "Compreender" },
  "concluir": { level: 2, category: "Compreender" },
  "contextualizar": { level: 2, category: "Compreender" },
  "deduzir": { level: 2, category: "Compreender" },
  "descrever": { level: 2, category: "Compreender" },
  "dialogar": { level: 2, category: "Compreender" },
  "distinguir": { level: 2, category: "Compreender" },
  "explicar": { level: 2, category: "Compreender" },
  "explorar": { level: 2, category: "Compreender" },
  "fruir": { level: 2, category: "Compreender" },
  "inferir": { level: 2, category: "Compreender" },
  "interagir": { level: 2, category: "Compreender" },
  "interessar-se": { level: 2, category: "Compreender" },
  "interessar": { level: 2, category: "Compreender" },
  "interpretar": { level: 2, category: "Compreender" },
  "ler": { level: 2, category: "Compreender" },
  "obter": { level: 2, category: "Compreender" },
  "participar": { level: 2, category: "Compreender" },
  "perceber": { level: 2, category: "Compreender" },
  "posicionar-se": { level: 2, category: "Compreender" },
  "posicionar": { level: 2, category: "Compreender" },
  "relacionar": { level: 2, category: "Compreender" },
  "representar": { level: 2, category: "Compreender" },
  "vivenciar": { level: 2, category: "Compreender" },

  // Nível 3: Aplicar (Usar)
  "adotar": { level: 3, category: "Aplicar" },
  "aplicar": { level: 3, category: "Aplicar" },
  "calcular": { level: 3, category: "Aplicar" },
  "empregar": { level: 3, category: "Aplicar" },
  "escrever": { level: 3, category: "Aplicar" },
  "experimentar": { level: 3, category: "Aplicar" },
  "fazer": { level: 3, category: "Aplicar" },
  "implementar": { level: 3, category: "Aplicar" },
  "praticar": { level: 3, category: "Aplicar" },
  "quantificar": { level: 3, category: "Aplicar" },
  "realizar": { level: 3, category: "Aplicar" },
  "reescrever": { level: 3, category: "Aplicar" },
  "utilizar": { level: 3, category: "Aplicar" },

  // Nível 4: Analisar (Examinar)
  "analisar": { level: 4, category: "Analisar" },
  "articular": { level: 4, category: "Analisar" },
  "investigar": { level: 4, category: "Analisar" },
  "mapear": { level: 4, category: "Analisar" },
  "pesquisar": { level: 4, category: "Analisar" },
  "problematizar": { level: 4, category: "Analisar" },
  "revisar": { level: 4, category: "Analisar" },
  "selecionar": { level: 4, category: "Analisar" },

  // Nível 5: Avaliar (Julgar)
  "argumentar": { level: 5, category: "Avaliar" },
  "avaliar": { level: 5, category: "Avaliar" },
  "contribuir": { level: 5, category: "Avaliar" },
  "debater": { level: 5, category: "Avaliar" },
  "discutir": { level: 5, category: "Avaliar" },
  "justificar": { level: 5, category: "Avaliar" },

  // Nível 6: Criar (Produzir)
  "compor": { level: 6, category: "Criar" },
  "construir": { level: 6, category: "Criar" },
  "criar": { level: 6, category: "Criar" },
  "desenvolver": { level: 6, category: "Criar" },
  "editar": { level: 6, category: "Criar" },
  "elaborar": { level: 6, category: "Criar" },
  "entrevistar": { level: 6, category: "Criar" },
  "estabelecer": { level: 6, category: "Criar" },
  "formular": { level: 6, category: "Criar" },
  "mobilizar": { level: 6, category: "Criar" },
  "planejar": { level: 6, category: "Criar" },
  "produzir": { level: 6, category: "Criar" },
  "propor": { level: 6, category: "Criar" },
  "resolver": { level: 6, category: "Criar" },
};

export const BLOOM_LEVELS_INFO = [
  {
    level: 6,
    name: "6. Criar (Produzir)",
    shortName: "Criar",
    desc: "Reunir e estruturar elementos para formar um todo original, planejado ou inovador.",
    examples: "Compor, Construir, Criar, Desenvolver, Editar, Elaborar, Entrevistar, Estabelecer, Formular, Mobilizar, Planejar, Produzir, Propor, Resolver",
    bgColor: "bg-purple-600",
    bgActive: "bg-purple-600 text-white border-purple-400 shadow-purple-900/40",
    bgInactive: "bg-purple-950/40 text-purple-300 border-purple-900/50",
    badgeColor: "bg-purple-900/80 text-purple-200 border-purple-500/40",
    accentBorder: "border-purple-500",
    glowColor: "shadow-purple-500/20",
    defaultPlaceholder: "Ex: Como os alunos irão criar, projetar ou compor uma solução original ou produto final?",
    evidencePlaceholder: "Ex: Produto autoral elaborado pelos estudantes (maquete, protótipo, texto dissertativo, plano de ação, etc.) e rubrica de criatividade/consistência.",
    recoveryPlaceholder: "Ex: Atividade de recuperação: Oferecer moldes, templates ou criação em duplas para os alunos que tiveram dificuldade.",
    recompositionPlaceholder: "Ex: Recomposição das aprendizagens de criação: Reestruturar etapas do projeto e critérios de avaliação com acompanhamento guiado."
  },
  {
    level: 5,
    name: "5. Avaliar (Julgar)",
    shortName: "Avaliar",
    desc: "Emitir julgamentos de valor baseados em critérios, evidências, argumentação ou ponderação.",
    examples: "Argumentar, Avaliar, Contribuir, Debater, Discutir, Justificar",
    bgColor: "bg-rose-600",
    bgActive: "bg-rose-600 text-white border-rose-400 shadow-rose-900/40",
    bgInactive: "bg-rose-950/40 text-rose-300 border-rose-900/50",
    badgeColor: "bg-rose-900/80 text-rose-200 border-rose-500/40",
    accentBorder: "border-rose-500",
    glowColor: "shadow-rose-500/20",
    defaultPlaceholder: "Ex: Como os alunos irão debater, defender pontos de vista ou avaliar evidências críticas?",
    evidencePlaceholder: "Ex: Rubrica de argumentação oral ou parecer crítico fundamentado produzido individualmente com base em evidências verificáveis.",
    recoveryPlaceholder: "Ex: Recuperação: Guia estruturado de perguntas para apoiar a argumentação e justificativa dos critérios.",
    recompositionPlaceholder: "Ex: Recomposição: Análise guiada de prós e contras em pequenos grupos antes do debate individual."
  },
  {
    level: 4,
    name: "4. Analisar (Examinar)",
    shortName: "Analisar",
    desc: "Separar o conteúdo em partes, investigando conexões, padrões e estruturas.",
    examples: "Analisar, Articular, Investigar, Mapear, Pesquisar, Problematizar, Revisar, Selecionar",
    bgColor: "bg-amber-600",
    bgActive: "bg-amber-600 text-white border-amber-400 shadow-amber-900/40",
    bgInactive: "bg-amber-950/40 text-amber-300 border-amber-900/50",
    badgeColor: "bg-amber-900/80 text-amber-200 border-amber-500/40",
    accentBorder: "border-amber-500",
    glowColor: "shadow-amber-500/20",
    defaultPlaceholder: "Ex: Como os alunos irão dissecar o tema em partes, comparar fontes e identificar padrões ou causas?",
    evidencePlaceholder: "Ex: Mapa conceitual comparativo, quadro sinóptico ou relatório de investigação com identificação das partes e relações causais.",
    recoveryPlaceholder: "Ex: Recuperação: Esquemas visuais (mapas conceituais preenchidos parcialmente) para investigação orientada.",
    recompositionPlaceholder: "Ex: Recomposição: Retomar os conceitos fundamentais de análise e distinção de elementos centrais."
  },
  {
    level: 3,
    name: "3. Aplicar (Usar)",
    shortName: "Aplicar",
    desc: "Executar ou utilizar um procedimento em uma situação específica, rotineira ou nova.",
    examples: "Adotar, Aplicar, Calcular, Empregar, Escrever, Experimentar, Fazer, Implementar, Praticar, Quantificar, Realizar, Reescrever, Utilizar",
    bgColor: "bg-emerald-600",
    bgActive: "bg-emerald-600 text-white border-emerald-400 shadow-emerald-900/40",
    bgInactive: "bg-emerald-950/40 text-emerald-300 border-emerald-900/50",
    badgeColor: "bg-emerald-900/80 text-emerald-200 border-emerald-500/40",
    accentBorder: "border-emerald-500",
    glowColor: "shadow-emerald-500/20",
    defaultPlaceholder: "Ex: Que exercícios práticos, experimentos, cálculos ou aplicações no cotidiano serão realizados pelos alunos?",
    evidencePlaceholder: "Ex: Resolução de situação-problema prática, roteiro de experimento executado ou produção escrita contextualizada.",
    recoveryPlaceholder: "Ex: Recuperação: Exercícios com passo a passo resolvido de modelo e prática orientada com suporte do professor.",
    recompositionPlaceholder: "Ex: Recomposição: Reforço na metodologia de aplicação e uso de ferramentas práticas/calculadoras/materiais concretos."
  },
  {
    level: 2,
    name: "2. Compreender (Entender)",
    shortName: "Compreender",
    desc: "Construir significado a partir de textos, materiais orais, visuais ou conceituais.",
    examples: "Apreciar, Apropriar-se, Associar, Caracterizar, Classificar, Comparar, Compartilhar, Compreender, Concluir, Contextualizar, Deduzir, Descrever, Dialogar, Distinguir, Explicar, Explorar, Fruir, Inferir, Interagir, Interessar-se, Interpretar, Ler, Obter, Participar, Perceber, Posicionar-se, Relacionar, Representar, Vivenciar",
    bgColor: "bg-cyan-600",
    bgActive: "bg-cyan-600 text-white border-cyan-400 shadow-cyan-900/40",
    bgInactive: "bg-cyan-950/40 text-cyan-300 border-cyan-900/50",
    badgeColor: "bg-cyan-900/80 text-cyan-200 border-cyan-500/40",
    accentBorder: "border-cyan-500",
    glowColor: "shadow-cyan-500/20",
    defaultPlaceholder: "Ex: Como os alunos irão explicar, parafrasear, comparar ou interpretar os conceitos centrais com suas próprias palavras?",
    evidencePlaceholder: "Ex: Paráfrase explicativa em 1 parágrafo, esquema explicativo 'como funciona' ou respostas a questões conceituais abertas.",
    recoveryPlaceholder: "Ex: Recuperação: Uso de vídeos curtos, infográficos explicativos e paráfrases orais com mediação direta.",
    recompositionPlaceholder: "Ex: Recomposição: Retomada das noções fundamentais através de analogias simples e perguntas direcionadas."
  },
  {
    level: 1,
    name: "1. Lembrar (Recordar)",
    shortName: "Lembrar",
    desc: "Recuperar, memorizar ou reconhecer informações e conceitos básicos.",
    examples: "Identificar, Listar, Localizar, Reconhecer",
    bgColor: "bg-blue-600",
    bgActive: "bg-blue-600 text-white border-blue-400 shadow-blue-900/40",
    bgInactive: "bg-blue-950/40 text-blue-300 border-blue-900/50",
    badgeColor: "bg-blue-900/80 text-blue-200 border-blue-500/40",
    accentBorder: "border-blue-500",
    glowColor: "shadow-blue-500/20",
    defaultPlaceholder: "Ex: Como os alunos irão memorizar, identificar, reconhecer ou listar os termos e conceitos básicos desta aula?",
    evidencePlaceholder: "Ex: Quiz de 3 perguntas rápidas, lista de verificação de termos-chave, ticket de saída com identificação correta dos conceitos.",
    recoveryPlaceholder: "Ex: Recuperação: Cartões de memorização (flashcards), caça-palavras conceituais ou jogos de correspondência de termos.",
    recompositionPlaceholder: "Ex: Recomposição: Glossário ilustrado dos termos essenciais e retomada individualizada com auxílio de pares."
  },
];

// Extrai o nível mais alto a partir dos verbos da habilidade
export function getBloomLevelForVerb(verbString: string): { maxLevel: number; matchedVerbs: string[]; primaryVerb: string } {
  if (!verbString) return { maxLevel: 1, matchedVerbs: [], primaryVerb: "" };

  const words = verbString
    .toLowerCase()
    .replace(/[(),.;/\\-]/g, " ")
    .split(/\s+/)
    .map((w) => w.trim())
    .filter((w) => w.length > 2);

  let maxLevel = 1;
  const matchedVerbs: string[] = [];

  const normalizedText = verbString.toLowerCase();
  for (const [verbKey, info] of Object.entries(VERB_TO_BLOOM)) {
    if (normalizedText.includes(verbKey)) {
      matchedVerbs.push(verbKey);
      if (info.level > maxLevel) {
        maxLevel = info.level;
      }
    }
  }

  if (matchedVerbs.length === 0) {
    for (const w of words) {
      if (VERB_TO_BLOOM[w]) {
        matchedVerbs.push(w);
        if (VERB_TO_BLOOM[w].level > maxLevel) {
          maxLevel = VERB_TO_BLOOM[w].level;
        }
      }
    }
  }

  const primaryVerb = matchedVerbs.length > 0 ? matchedVerbs[matchedVerbs.length - 1] : (words[0] || "");
  return { maxLevel, matchedVerbs: Array.from(new Set(matchedVerbs)), primaryVerb };
}

interface BloomPyramidSectionProps {
  skillsDetails: Array<{
    code: string;
    verb: string;
    content: string;
    context: string;
    fullText: string;
  }>;
  rawCompetencies?: string;
  lessonTopic?: string;
  // Estado e callbacks de progressão pedagógica
  currentActiveLevel?: number;
  bloomPlans?: Record<number, BloomLevelPlan>;
  onChangeBloomPlans?: (plans: Record<number, BloomLevelPlan>) => void;
  onAdvanceToNextPlan?: (nextLevel: number) => void;
}

export const BloomPyramidSection: React.FC<BloomPyramidSectionProps> = ({
  skillsDetails,
  rawCompetencies,
  lessonTopic,
  currentActiveLevel = 1,
  bloomPlans = {},
  onChangeBloomPlans,
  onAdvanceToNextPlan,
}) => {
  // Se não tiver habilidades definidas, não renderiza
  if ((!skillsDetails || skillsDetails.length === 0) && !rawCompetencies) {
    return null;
  }

  // Agrega todos os verbos de todas as habilidades selecionadas
  const allVerbsText = skillsDetails.length > 0
    ? skillsDetails.map((s) => s.verb).join(" ")
    : (rawCompetencies || "");

  const { maxLevel: targetMaxLevel, matchedVerbs } = getBloomLevelForVerb(allVerbsText);
  const targetInfo = BLOOM_LEVELS_INFO.find((item) => item.level === targetMaxLevel) || BLOOM_LEVELS_INFO[5];

  // Estado local para o nível atualmente selecionado para edição (abre por padrão no nível ativo ou 1)
  const [selectedEditingLevel, setSelectedEditingLevel] = useState<number>(1);
  const [showEvidenceBox, setShowEvidenceBox] = useState<boolean>(true);
  const [showRecoveryBox, setShowRecoveryBox] = useState<boolean>(false);
  const [showRecompositionBox, setShowRecompositionBox] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Determinar qual o nível máximo já liberado (baseado em planos concluídos ou nível 1 sempre liberado)
  // O nível 1 começa sempre liberado. Nível 2 só libera se o 1 estiver concluído, etc.
  const isLevelUnlocked = (lvl: number): boolean => {
    if (lvl === 1) return true;
    // O nível anterior precisa estar concluído
    const prevPlan = bloomPlans[lvl - 1];
    return !!(prevPlan && prevPlan.status === "completed");
  };

  const isLevelCompleted = (lvl: number): boolean => {
    return bloomPlans[lvl]?.status === "completed";
  };

  const currentEditingInfo = BLOOM_LEVELS_INFO.find((item) => item.level === selectedEditingLevel) || BLOOM_LEVELS_INFO[5];
  const currentPlanData: BloomLevelPlan = bloomPlans[selectedEditingLevel] || {
    level: selectedEditingLevel,
    levelName: currentEditingInfo.shortName,
    status: "in_progress",
    notes: "",
    formativeEvidence: "",
    recoveryNotes: "",
    recompositionNotes: "",
  };

  const handleUpdatePlanField = (field: keyof BloomLevelPlan, value: any) => {
    if (field === "formativeEvidence" && value && value.trim().length > 0) {
      setValidationError(null);
    }
    const updated: BloomLevelPlan = {
      ...currentPlanData,
      [field]: value,
    };
    if (onChangeBloomPlans) {
      onChangeBloomPlans({
        ...bloomPlans,
        [selectedEditingLevel]: updated,
      });
    }
  };

  const handleCompleteCurrentLevel = () => {
    // Validação OBRIGATÓRIA: Avaliação Formativa / Evidência não pode estar vazia
    const evidenceText = (currentPlanData.formativeEvidence || "").trim();
    if (!evidenceText) {
      setShowEvidenceBox(true);
      setValidationError(
        `O preenchimento da "Avaliação Formativa / Evidência" é OBRIGATÓRIO para validar o Nível ${selectedEditingLevel} (${currentEditingInfo.shortName}) e liberar a próxima etapa.`
      );
      return;
    }

    setValidationError(null);
    const updated: BloomLevelPlan = {
      ...currentPlanData,
      status: "completed",
      completedAt: new Date().toISOString(),
    };
    const newPlans = {
      ...bloomPlans,
      [selectedEditingLevel]: updated,
    };
    if (onChangeBloomPlans) {
      onChangeBloomPlans(newPlans);
    }

    // Se houver próximo nível a ser liberado até o alvo
    const nextLvl = selectedEditingLevel + 1;
    if (nextLvl <= targetMaxLevel) {
      setSelectedEditingLevel(nextLvl);
      if (onAdvanceToNextPlan) {
        onAdvanceToNextPlan(nextLvl);
      }
    }
  };

  const handleReopenLevel = (lvl: number) => {
    if (onChangeBloomPlans && bloomPlans[lvl]) {
      const updated: BloomLevelPlan = {
        ...bloomPlans[lvl],
        status: "in_progress",
      };
      onChangeBloomPlans({
        ...bloomPlans,
        [lvl]: updated,
      });
    }
  };

  return (
    <div className="bg-slate-900 border-2 border-indigo-500/60 rounded-2xl p-5 sm:p-6 shadow-xl space-y-6 animate-in fade-in duration-300">
      {/* Cabeçalho da Seção da Pirâmide de Bloom */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30 shrink-0">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-sm sm:text-base font-black text-white uppercase tracking-wider">
                Taxonomia de Bloom • Planejamento Progressivo por Níveis
              </h3>
              <span className="text-[10px] bg-indigo-950 text-indigo-300 border border-indigo-600/50 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                Progressão Cognitiva
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Planeje cada etapa cognitiva com avaliação formativa obrigatória, recuperação e recomposição até atingir o alvo.
            </p>
          </div>
        </div>

        {/* Nível Alvo Final da Habilidade */}
        <div className="flex items-center gap-2 self-start sm:self-auto bg-slate-800/90 border border-slate-700 px-3.5 py-2 rounded-xl shrink-0">
          <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Alvo da Habilidade:</span>
          <span className={`text-xs font-black px-2.5 py-1 rounded-lg ${targetInfo.bgColor} text-white shadow-sm flex items-center gap-1`}>
            <CheckCircle2 className="w-3.5 h-3.5" />
            Nível {targetMaxLevel} - {targetInfo.shortName}
          </span>
        </div>
      </div>

      {/* Destaque dos verbos identificados */}
      <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px]">
            Verbo(s) da Habilidade:
          </span>
          {matchedVerbs.length > 0 ? (
            matchedVerbs.map((v, idx) => (
              <span
                key={idx}
                className="bg-indigo-900/60 border border-indigo-500/50 text-indigo-200 font-bold px-2.5 py-0.5 rounded-md capitalize"
              >
                {v}
              </span>
            ))
          ) : (
            <span className="text-slate-300 italic">
              {skillsDetails.map((s) => s.verb).join(", ") || "Identificado na descrição oficial"}
            </span>
          )}
        </div>

        <div className="text-[11px] text-slate-400 flex items-center gap-2 flex-wrap">
          <span>Habilidade BNCC:</span>
          <span className="font-mono font-bold text-indigo-300">
            {skillsDetails.map((s) => s.code).join(", ") || "BNCC"}
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            <Check className="w-3 h-3" /> Nível 1 (Lembrar) aberto para edição
          </span>
        </div>
      </div>

      {/* Instrução de Bloqueio/Desbloqueio Progressivo com Evidência Obrigatória */}
      <div className="bg-indigo-950/40 border border-indigo-700/40 rounded-xl p-3 flex items-start gap-2.5 text-xs text-indigo-200">
        <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-indigo-300 font-bold block mb-0.5">
            Regra de Progressão Curricular com Evidência Obrigatória:
          </strong>
          <span>
            O professor inicia pelo <strong>Nível 1 (Lembrar)</strong>. Para avançar e liberar o próximo nível cognitivo para a mesma aula, é <strong>obrigatório preencher a Avaliação Formativa/Evidência</strong> de aprendizagem da etapa atual até alcançar o nível alvo (<strong>Nível {targetMaxLevel} - {targetInfo.shortName}</strong>).
          </span>
        </div>
      </div>

      {/* Visualização Visual Interativa da Pirâmide de Bloom */}
      <div className="space-y-2.5 pt-1">
        <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">
          <span className="flex items-center gap-1 text-purple-400">
            <ChevronUp className="w-3.5 h-3.5" /> Níveis Superiores (Topo)
          </span>
          <span className="text-blue-400">
            Nível Base (Início Obrigatório)
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {BLOOM_LEVELS_INFO.map((item) => {
            // Regra de cores: correspondente e anteriores ao alvo
            const isTargetOrBelow = item.level <= targetMaxLevel;
            const isUnlocked = isLevelUnlocked(item.level);
            const isCompleted = isLevelCompleted(item.level);
            const isSelected = selectedEditingLevel === item.level;
            const isCurrentTarget = item.level === targetMaxLevel;

            // Largura em cascata para formato da pirâmide
            const widthClasses: Record<number, string> = {
              6: "sm:w-[68%] self-center",
              5: "sm:w-[74%] self-center",
              4: "sm:w-[80%] self-center",
              3: "sm:w-[86%] self-center",
              2: "sm:w-[93%] self-center",
              1: "sm:w-[100%]",
            };

            return (
              <button
                key={item.level}
                type="button"
                onClick={() => {
                  if (isUnlocked) {
                    setSelectedEditingLevel(item.level);
                    setValidationError(null);
                  }
                }}
                disabled={!isUnlocked}
                className={`w-full text-left ${widthClasses[item.level]} rounded-xl transition-all duration-200 border p-3 sm:p-3.5 cursor-pointer ${
                  !isUnlocked
                    ? "bg-slate-900/60 text-slate-500 border-slate-800 opacity-50 cursor-not-allowed"
                    : isSelected
                    ? `${item.bgActive} border-2 ring-2 ring-white ring-offset-2 ring-offset-slate-900 shadow-xl scale-[1.01]`
                    : isCompleted
                    ? "bg-emerald-950/80 text-emerald-200 border-emerald-600/70 shadow-md hover:border-emerald-400"
                    : isTargetOrBelow
                    ? `${item.bgColor} text-white opacity-90 hover:opacity-100 hover:scale-[1.005] shadow-md`
                    : "bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-500"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs sm:text-sm font-black tracking-wide flex items-center gap-1.5">
                      {isCompleted ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : isUnlocked ? (
                        <Unlock className="w-3.5 h-3.5 text-indigo-300" />
                      ) : (
                        <Lock className="w-3.5 h-3.5 text-slate-500" />
                      )}
                      {item.name}
                    </span>

                    {/* Tags de status */}
                    {isCurrentTarget && (
                      <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-sm">
                        Alvo da Habilidade
                      </span>
                    )}

                    {isCompleted ? (
                      <span className="bg-emerald-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                        ✓ Nível Concluído
                      </span>
                    ) : isUnlocked ? (
                      <span className="bg-white/20 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-full">
                        {isSelected ? "Em Edição" : "Clique para Planejar"}
                      </span>
                    ) : (
                      <span className="bg-slate-800 text-slate-400 text-[10px] font-medium uppercase px-2 py-0.5 rounded-full">
                        Bloqueado (Conclua nível {item.level - 1})
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] sm:text-xs opacity-90">
                    {item.desc}
                  </span>
                </div>

                <div className="mt-1.5 pt-1.5 border-t border-white/20 text-[10px] sm:text-[11px] truncate opacity-85">
                  <strong>Verbos de ação:</strong> {item.examples}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* PAINEL EDITÁVEL DO NÍVEL SELECIONADO COM AVALIAÇÃO FORMATIVA, RECUPERAÇÃO E RECOMPOSIÇÃO */}
      <div className={`mt-6 rounded-2xl border-2 p-5 sm:p-6 space-y-5 bg-slate-950/90 shadow-2xl transition-all ${currentEditingInfo.accentBorder}`}>
        {/* Cabeçalho do Editor do Nível */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-9 h-9 rounded-xl ${currentEditingInfo.bgColor} text-white flex items-center justify-center font-black text-sm shadow-md`}>
              {currentEditingInfo.level}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm sm:text-base font-extrabold text-white">
                  Planejamento do {currentEditingInfo.name}
                </h4>
                {isLevelCompleted(selectedEditingLevel) ? (
                  <span className="text-[11px] bg-emerald-950 border border-emerald-600 text-emerald-300 px-2.5 py-0.5 rounded-full font-bold">
                    ✓ Concluído & Validado
                  </span>
                ) : (
                  <span className="text-[11px] bg-indigo-950 border border-indigo-600 text-indigo-300 px-2.5 py-0.5 rounded-full font-bold">
                    Em Construção
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {currentEditingInfo.desc}
              </p>
            </div>
          </div>

          {/* Botões de Ação: Avaliação Formativa (Obrigatório), Recuperação e Recomposição */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* BOTÃO AVALIAÇÃO FORMATIVA / EVIDÊNCIA (OBRIGATÓRIO) */}
            <button
              type="button"
              onClick={() => setShowEvidenceBox((prev) => !prev)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                showEvidenceBox
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/30 border border-purple-400 ring-1 ring-purple-300"
                  : (currentPlanData.formativeEvidence || "").trim()
                  ? "bg-purple-950 text-purple-200 border border-purple-500"
                  : "bg-slate-800 hover:bg-slate-700 text-purple-300 border border-purple-600/50 animate-pulse"
              }`}
            >
              <ClipboardCheck className="w-3.5 h-3.5 text-purple-200" />
              <span>Avaliação Formativa / Evidência</span>
              <span className="bg-purple-900/90 text-purple-200 text-[10px] px-1.5 py-0.2 rounded font-black uppercase">
                Obrigatório
              </span>
            </button>

            {/* BOTÃO RECUPERAÇÃO */}
            <button
              type="button"
              onClick={() => setShowRecoveryBox((prev) => !prev)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                showRecoveryBox
                  ? "bg-amber-600 text-white shadow-md shadow-amber-600/30 border border-amber-400"
                  : "bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-600/40"
              }`}
            >
              <LifeBuoy className="w-3.5 h-3.5" />
              <span>{showRecoveryBox ? "Ocultar Recuperação" : "+ Planejar Recuperação"}</span>
            </button>

            {/* BOTÃO RECOMPOSIÇÃO */}
            <button
              type="button"
              onClick={() => setShowRecompositionBox((prev) => !prev)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                showRecompositionBox
                  ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/30 border border-cyan-400"
                  : "bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-600/40"
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{showRecompositionBox ? "Ocultar Recomposição" : "+ Planejar Recomposição"}</span>
            </button>
          </div>
        </div>

        {/* ALERTA DE VALIDAÇÃO DE OBRIGATORIEDADE */}
        {validationError && (
          <div className="bg-rose-950/80 border-2 border-rose-500 rounded-xl p-3.5 text-xs text-rose-200 flex items-start gap-2.5 animate-in fade-in slide-in-from-top-1">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-rose-300 font-bold block mb-0.5">Validação Obrigatória de Evidência:</strong>
              <span>{validationError}</span>
            </div>
          </div>
        )}

        {/* Caixa Editável Principal do Nível (Lembrar / Compreender / etc.) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <FileEdit className="w-4 h-4 text-indigo-400" />
              Atividades e Estratégias Pedagógicas para o Nível {currentEditingInfo.shortName}:
            </label>
            <span className="text-[11px] text-slate-400">
              Verbos: {currentEditingInfo.examples.split(", ").slice(0, 4).join(", ")}...
            </span>
          </div>

          <textarea
            rows={3}
            value={currentPlanData.notes || ""}
            onChange={(e) => handleUpdatePlanField("notes", e.target.value)}
            placeholder={currentEditingInfo.defaultPlaceholder}
            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-slate-500 transition resize-y font-sans leading-relaxed"
          />
        </div>

        {/* CAIXA EDITÁVEL: AVALIAÇÃO FORMATIVA / EVIDÊNCIA (PREENCHIMENTO OBRIGATÓRIO PARA LIBERAR PRÓXIMO NÍVEL) */}
        {showEvidenceBox && (
          <div className={`rounded-xl p-4 space-y-2 border-2 transition-all animate-in fade-in duration-200 ${
            validationError
              ? "bg-rose-950/40 border-rose-500 shadow-lg shadow-rose-950/50 ring-2 ring-rose-500/50"
              : (currentPlanData.formativeEvidence || "").trim()
              ? "bg-purple-950/40 border-purple-500/70"
              : "bg-purple-950/30 border-purple-500/50"
          }`}>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <label className="text-xs font-black text-purple-200 uppercase tracking-wider flex items-center gap-1.5">
                <ClipboardCheck className="w-4 h-4 text-purple-400" />
                Avaliação Formativa / Evidência de Aprendizagem ({currentEditingInfo.shortName}):
                <span className="text-rose-400 ml-1 font-black">* Obrigatório</span>
              </label>
              <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                (currentPlanData.formativeEvidence || "").trim()
                  ? "bg-emerald-900/80 text-emerald-200 border border-emerald-500/50"
                  : "bg-rose-900/80 text-rose-200 border border-rose-500/50"
              }`}>
                {(currentPlanData.formativeEvidence || "").trim() ? "✓ Evidência Registrada" : "Pendente de Preenchimento"}
              </span>
            </div>
            <p className="text-[11px] text-purple-300/80">
              Descreva o instrumento, registro ou produção do aluno que comprova que este nível cognitivo foi atingido antes de liberar o próximo.
            </p>
            <textarea
              rows={3}
              value={currentPlanData.formativeEvidence || ""}
              onChange={(e) => handleUpdatePlanField("formativeEvidence", e.target.value)}
              placeholder={currentEditingInfo.evidencePlaceholder}
              className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 text-purple-100 text-xs focus:outline-none focus:ring-2 placeholder-purple-500/40 resize-y border ${
                validationError
                  ? "border-rose-500 focus:ring-rose-500"
                  : "border-purple-600/70 focus:ring-purple-500"
              }`}
            />
          </div>
        )}

        {/* CAIXA EDITÁVEL: PLANEJAMENTO DE RECUPERAÇÃO */}
        {showRecoveryBox && (
          <div className="bg-amber-950/30 border-2 border-amber-600/60 rounded-xl p-4 space-y-2 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <LifeBuoy className="w-4 h-4 text-amber-400" />
                Planejamento de Recuperação Contínua ({currentEditingInfo.shortName}):
              </label>
              <span className="text-[10px] bg-amber-900/60 text-amber-200 px-2 py-0.5 rounded font-semibold">
                Para alunos que necessitam de apoio extra
              </span>
            </div>
            <textarea
              rows={3}
              value={currentPlanData.recoveryNotes || ""}
              onChange={(e) => handleUpdatePlanField("recoveryNotes", e.target.value)}
              placeholder={currentEditingInfo.recoveryPlaceholder}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-amber-700/60 text-amber-100 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-amber-600/50 resize-y"
            />
          </div>
        )}

        {/* CAIXA EDITÁVEL: PLANEJAMENTO DE RECOMPOSIÇÃO */}
        {showRecompositionBox && (
          <div className="bg-cyan-950/30 border-2 border-cyan-600/60 rounded-xl p-4 space-y-2 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                <RotateCcw className="w-4 h-4 text-cyan-400" />
                Planejamento de Recomposição de Aprendizagens ({currentEditingInfo.shortName}):
              </label>
              <span className="text-[10px] bg-cyan-900/60 text-cyan-200 px-2 py-0.5 rounded font-semibold">
                Retomada de pré-requisitos e lacunas essenciais
              </span>
            </div>
            <textarea
              rows={3}
              value={currentPlanData.recompositionNotes || ""}
              onChange={(e) => handleUpdatePlanField("recompositionNotes", e.target.value)}
              placeholder={currentEditingInfo.recompositionPlaceholder}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-cyan-700/60 text-cyan-100 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-cyan-600/50 resize-y"
            />
          </div>
        )}

        {/* Rodapé do Editor: Botão de Conclusão / Liberação do Próximo Nível */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-800">
          <div className="text-xs text-slate-400 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-indigo-400" />
            <span>
              {isLevelCompleted(selectedEditingLevel)
                ? "Este nível foi avaliado com evidência registrada e o nível subsequente foi liberado."
                : selectedEditingLevel < targetMaxLevel
                ? `Insira a Avaliação Formativa/Evidência para concluir o nível ${selectedEditingLevel} e liberar o Nível ${selectedEditingLevel + 1} (${BLOOM_LEVELS_INFO.find((x) => x.level === selectedEditingLevel + 1)?.shortName}).`
                : "Insira a Avaliação Formativa/Evidência para fechar o ciclo do Nível Alvo da Habilidade!"}
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {isLevelCompleted(selectedEditingLevel) ? (
              <button
                type="button"
                onClick={() => handleReopenLevel(selectedEditingLevel)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reabrir para Edição</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleCompleteCurrentLevel}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-extrabold shadow-lg shadow-emerald-600/30 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>
                  {selectedEditingLevel < targetMaxLevel
                    ? `Validar Evidência, Concluir Nível ${selectedEditingLevel} e Liberar Nível ${selectedEditingLevel + 1}`
                    : `Validar Evidência e Concluir Nível Alvo (${currentEditingInfo.shortName})`}
                </span>
                {selectedEditingLevel < targetMaxLevel && <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
