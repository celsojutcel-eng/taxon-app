import React, { useState, useEffect, useCallback } from "react";
import {
  HelpCircle,
  Sparkles,
  Award,
  AlertTriangle,
  RefreshCw,
  Layers,
  Brain,
  Image as ImageIcon,
  CheckCircle2,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
  Gauge,
  Accessibility,
  Palette,
  Download,
  ListOrdered,
} from "lucide-react";
import { AssessmentItemData, AssessmentApiRequest, AssessmentApiResponse } from "../types";

export type QuestaoItem = AssessmentItemData & {
  numero_item: number;
};

export interface AssessmentGeneratorSectionProps {
  skillCode?: string;
  skillText?: string;
  subject?: string;
  gradeLevel?: string;
  activeBloomLevel?: number;
}

const BLOOM_LEVEL_NAMES: Record<number, string> = {
  1: "Lembrar",
  2: "Compreender",
  3: "Aplicar",
  4: "Analisar",
  5: "Avaliar",
  6: "Criar",
};

export const AssessmentGeneratorSection: React.FC<AssessmentGeneratorSectionProps> = ({
  skillCode = "EF06HI21",
  skillText,
  subject,
  gradeLevel,
  activeBloomLevel,
}) => {
  const [questoes, setQuestoes] = useState<QuestaoItem[]>([]);
  const [imagensCarregadas, setImagensCarregadas] = useState<Record<number, string>>({});
  const [loadingImagens, setLoadingImagens] = useState<Record<number, boolean>>({});
  const [loadingGeral, setLoadingGeral] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState<boolean>(false);

  // Configurações e autonomia do professor
  const [selectedQuantidade, setSelectedQuantidade] = useState<number>(5);
  const [incluirSuporteVisual, setIncluirSuporteVisual] = useState<boolean>(true);
  const [selectedDifficulty, setSelectedDifficulty] = useState<"Misto" | "Fácil" | "Médio" | "Difícil">("Misto");
  const [selectedBloomLevel, setSelectedBloomLevel] = useState<string>("Todos / Variados");
  const [specialEducation, setSpecialEducation] = useState<boolean>(false);

  useEffect(() => {
    if (activeBloomLevel && BLOOM_LEVEL_NAMES[activeBloomLevel]) {
      setSelectedBloomLevel(BLOOM_LEVEL_NAMES[activeBloomLevel]);
    }
  }, [activeBloomLevel]);

  // Extrai código normalizado
  const cleanCode = skillCode ? skillCode.replace(/[^A-Za-z0-9]/g, "").toUpperCase() : "EF06HI21";
  const match = cleanCode.match(/[A-Z]{2}\d{2}[A-Z]{2}\d{1,3}[A-Z]?/);
  const normalizedCode = match ? match[0] : cleanCode;

  // Catálogo cliente de fotografias educacionais autênticas e realistas
  const FOTOS_REALISTAS_CLIENTE: { tags: string[]; url: string }[] = [
    {
      tags: ["microscop", "celul", "citolog", "bacteri", "biolog", "organismo"],
      url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1200&q=85",
    },
    {
      tags: ["quimic", "reacao", "laborator", "tubo", "solucao", "massa", "transformacao"],
      url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
    },
    {
      tags: ["florest", "arvor", "bioma", "biodivers", "ecossistem", "plant", "sustentavel"],
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
    },
    {
      tags: ["vacin", "imuniz", "saude", "rebanho", "prevenc", "caderneta"],
      url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=85",
    },
    {
      tags: ["nutric", "aliment", "fruta", "dieta", "obesidad", "saudavel"],
      url: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1200&q=85",
    },
    {
      tags: ["planeta", "terra", "espaco", "astronom", "galaxi", "crosta"],
      url: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=85",
    },
    {
      tags: ["eletric", "circuit", "fio", "resistor", "disjuntor"],
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    },
    {
      tags: ["energi", "eolic", "solar", "usina", "renovav"],
      url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=85",
    },
    {
      tags: ["roma", "romano", "coliseu", "imperio"],
      url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=85",
    },
    {
      tags: ["grec", "aten", "partenon", "democraci", "filosof"],
      url: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1200&q=85",
    },
    {
      tags: ["feudal", "idade media", "castel", "medieval"],
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=1200&q=85",
    },
    {
      tags: ["colonial", "brasil", "barroc", "ouro", "ouro pret"],
      url: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=85",
    },
    {
      tags: ["map", "cartograf", "globo", "escala", "coordenad", "cartesiano"],
      url: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=85",
    },
    {
      tags: ["relevo", "montanh", "tectonic", "rocha"],
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    },
    {
      tags: ["geometr", "medid", "regu", "compass", "triangul", "pitagor", "angulo"],
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=85",
    },
    {
      tags: ["probabilidad", "dado", "amostr", "jog"],
      url: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=85",
    },
    {
      tags: ["grafic", "estatist", "tabel", "dados"],
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    },
    {
      tags: ["livro", "leitur", "bibliotec", "literat"],
      url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=85",
    },
    {
      tags: ["teatr", "palco", "cenic", "dramaturg", "ator", "circo"],
      url: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=85",
    },
    {
      tags: ["music", "instrument", "orquestr", "som"],
      url: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  function obterFotoEducacionalCliente(prompt: string, componente?: string): string {
    const q = `${prompt || ""} ${componente || ""}`
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    let best = FOTOS_REALISTAS_CLIENTE[0].url;
    let max = -1;

    for (const f of FOTOS_REALISTAS_CLIENTE) {
      let score = 0;
      for (const t of f.tags) {
        if (q.includes(t)) score += t.length;
      }
      if (score > max) {
        max = score;
        best = f.url;
      }
    }
    return best;
  }

  // 1. CARREGADOR DE IMAGENS PARALELO E ROBUSTO
  const carregarImagensDoLote = useCallback(async (itensParaProcessar: QuestaoItem[]) => {
    const itensComPrompt = itensParaProcessar.filter(
      (q) => q.suporte_dados?.prompt_para_imagem
    );

    if (itensComPrompt.length === 0) return;

    // Marca todos como carregando
    setLoadingImagens((prev) => {
      const next = { ...prev };
      itensComPrompt.forEach((q) => {
        if (!imagensCarregadas[q.numero_item]) {
          next[q.numero_item] = true;
        }
      });
      return next;
    });

    // Executa as requisições de forma escalonada com proteção total contra falhas
    for (const questao of itensComPrompt) {
      const numItem = questao.numero_item;
      const prompt = questao.suporte_dados?.prompt_para_imagem;

      if (!prompt) continue;

      (async () => {
        try {
          const response = await fetch("/api/generate-support-image", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              promptImagem: prompt,
              componente: subject,
              ano: gradeLevel,
            }),
          });

          let data: any = null;
          try {
            const text = await response.text();
            data = JSON.parse(text);
          } catch {
            // Resposta não-JSON interceptada com segurança
          }

          if (data && data.success && data.imagem_base64) {
            setImagensCarregadas((prev) => ({ ...prev, [numItem]: data.imagem_base64 }));
          } else {
            // Fallback fotográfico realista garantido no cliente
            const clientFoto = obterFotoEducacionalCliente(prompt, subject);
            setImagensCarregadas((prev) => ({ ...prev, [numItem]: clientFoto }));
          }
        } catch {
          const clientFoto = obterFotoEducacionalCliente(prompt, subject);
          setImagensCarregadas((prev) => ({ ...prev, [numItem]: clientFoto }));
        } finally {
          setLoadingImagens((prev) => ({ ...prev, [numItem]: false }));
        }
      })();

      // Pequeno intervalo entre disparos
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  }, [imagensCarregadas, subject, gradeLevel]);

  // Função para regerar imagem de um item específico
  const handleRegenerarImagemIndividual = async (numItem: number, prompt: string) => {
    if (!prompt) return;

    setLoadingImagens((prev) => ({ ...prev, [numItem]: true }));
    try {
      const response = await fetch("/api/generate-support-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          promptImagem: prompt,
          componente: subject,
          ano: gradeLevel,
        }),
      });

      let data: any = null;
      try {
        const text = await response.text();
        data = JSON.parse(text);
      } catch {
        // Resposta não-JSON interceptada com segurança
      }

      if (data && data.success && data.imagem_base64) {
        setImagensCarregadas((prev) => ({ ...prev, [numItem]: data.imagem_base64 }));
      } else {
        const clientFoto = obterFotoEducacionalCliente(prompt, subject);
        setImagensCarregadas((prev) => ({ ...prev, [numItem]: clientFoto }));
      }
    } catch {
      const clientFoto = obterFotoEducacionalCliente(prompt, subject);
      setImagensCarregadas((prev) => ({ ...prev, [numItem]: clientFoto }));
    } finally {
      setLoadingImagens((prev) => ({ ...prev, [numItem]: false }));
    }
  };

  // Permite ao professor solicitar fotografia realista sob demanda para um item específico
  const handleGerarImagemSobDemanda = (numItem: number, questao: QuestaoItem) => {
    const prompt =
      questao.suporte_dados?.prompt_para_imagem?.trim() ||
      `Fotografia realista e autêntica de suporte para ${subject || "o conteúdo"}: ${questao.enunciado || questao.texto_base || "registro pedagógico autêntico"}`;

    setQuestoes((prev) =>
      prev.map((q) =>
        q.numero_item === numItem
          ? {
              ...q,
              suporte_dados: {
                requer_ilustracao: true,
                prompt_para_imagem: prompt,
              },
            }
          : q
      )
    );
    handleRegenerarImagemIndividual(numItem, prompt);
  };

  // 2. DISPARADOR DE TEXTO: Solicita os itens com quantidade e configuração visual escolhidas pelo professor
  const handleGerarBateriaItens = async () => {
    setLoadingGeral(true);
    setError(null);
    setImagensCarregadas({});
    setLoadingImagens({});

    const codClean = (normalizedCode || "").toUpperCase().trim();
    const isMedio =
      codClean.startsWith("EM") ||
      (!codClean.startsWith("EF") &&
        (gradeLevel?.toLowerCase().includes("médio") ||
          gradeLevel?.toLowerCase().includes("medio") ||
          gradeLevel?.toLowerCase().includes("1ª série") ||
          gradeLevel?.toLowerCase().includes("2ª série") ||
          gradeLevel?.toLowerCase().includes("3ª série")));

    const etapaFinal = isMedio ? "Ensino Médio" : "Ensino Fundamental";

    const payload: AssessmentApiRequest = {
      codigoSeduc: normalizedCode,
      nivelBloom: selectedBloomLevel,
      etapa: etapaFinal,
      componente: subject,
      subject: subject,
      textoHabilidade: skillText,
      skillText: skillText,
      gradeLevel: gradeLevel || etapaFinal,
      dificuldade: selectedDifficulty,
      educacaoEspecial: specialEducation,
      quantidade: selectedQuantidade,
      incluirSuporteVisual: incluirSuporteVisual,
    };

    try {
      const response = await fetch("/api/generate-assessment-item", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data: AssessmentApiResponse;
      try {
        const text = await response.text();
        data = JSON.parse(text);
      } catch {
        throw new Error("O servidor retornou uma resposta temporariamente inacessível. Por favor, tente novamente em alguns instantes.");
      }

      if (!response.ok) {
        const rawMsg = data.message || data.error || `Falha ao gerar os ${selectedQuantidade} itens de avaliação.`;
        let userMessage = typeof rawMsg === "string" ? rawMsg : JSON.stringify(rawMsg);
        if (userMessage.includes("503") || userMessage.includes("high demand") || userMessage.includes("UNAVAILABLE")) {
          userMessage = "Os servidores de Inteligência Artificial estão com alta demanda temporária. Por favor, aguarde alguns instantes e clique em 'Tentar de novo'.";
        } else if (userMessage.includes("429") || userMessage.includes("quota")) {
          userMessage = "Limite temporário de requisições atingido. Por favor, aguarde alguns segundos e tente novamente.";
        } else if (userMessage.includes("TIMEOUT") || userMessage.includes("timeout")) {
          userMessage = "A geração das questões demorou mais que o esperado devido à sobrecarga de rede. Por favor, tente novamente.";
        }
        throw new Error(userMessage);
      }

      let listaItens: QuestaoItem[] = [];

      if (data.questoes && Array.isArray(data.questoes)) {
        listaItens = data.questoes.map((it, idx) => ({
          ...it,
          numero_item: it.numero_item || idx + 1,
        }));
      } else if (data.itens && Array.isArray(data.itens)) {
        listaItens = data.itens.map((it, idx) => ({
          ...it,
          numero_item: it.numero_item || idx + 1,
        }));
      }

      // Normaliza garantindo que todos os itens tenham suporte visual e IDs corretos de acordo com a escolha do professor
      listaItens = listaItens.map((it, idx) => {
        const num = it.numero_item || idx + 1;
        const promptOrig =
          it.suporte_dados?.prompt_para_imagem ||
          it.recurso_visual?.descricao_visual ||
          "";

        const promptFinal =
          promptOrig.trim() ||
          (incluirSuporteVisual
            ? `Esquema visual didático e infográfico de suporte para ${subject || "o conteúdo"}: ${it.enunciado || it.texto_base || "análise conceitual"}`
            : "");

        const alternativasNormalizadas: {
          A: string;
          B: string;
          C: string;
          D: string;
          E?: string;
          [key: string]: string | undefined;
        } = {
          A: it.alternativas?.A || "",
          B: it.alternativas?.B || "",
          C: it.alternativas?.C || "",
          D: it.alternativas?.D || "",
          ...(it.alternativas?.E ? { E: it.alternativas.E } : {}),
        };

        return {
          numero_item: num,
          suporte_dados: {
            requer_ilustracao: incluirSuporteVisual ? Boolean(it.suporte_dados?.requer_ilustracao ?? true) : false,
            prompt_para_imagem: promptFinal,
          },
          texto_base: it.texto_base || "",
          enunciado: it.enunciado || "",
          alternativas: alternativasNormalizadas,
          gabarito: it.gabarito || "A",
          justificativa_gabarito: it.justificativa_gabarito || "",
          justificativa_distratores: it.justificativa_distratores,
          nivel_bloom: it.nivel_bloom,
          dificuldade: it.dificuldade,
          adaptada_educacao_especial: it.adaptada_educacao_especial,
          recurso_acessibilidade: it.recurso_acessibilidade,
        };
      });

      // Garantia estrita de 4 alternativas para Ensino Fundamental
      if (!isMedio) {
        listaItens = listaItens.map((it) => {
          const altsClean = {
            A: it.alternativas?.A || "",
            B: it.alternativas?.B || "",
            C: it.alternativas?.C || "",
            D: it.alternativas?.D || "",
          };
          return {
            ...it,
            alternativas: altsClean,
            gabarito: it.gabarito === "E" ? "D" : it.gabarito,
          };
        });
      }

      setQuestoes(listaItens);
      if (listaItens.length > 0) {
        setExpandedIndex(0);
        // Dispara o carregamento das ilustrações se o professor optou por incluir suporte visual
        if (incluirSuporteVisual) {
          carregarImagensDoLote(listaItens);
        }
      }
    } catch (err: any) {
      console.error("Erro ao processar lote de itens:", err);
      setError(err.message || "Erro inesperado ao gerar os itens.");
    } finally {
      setLoadingGeral(false);
    }
  };

  const handleCopySingle = (q: QuestaoItem) => {
    const altText = Object.entries(q.alternativas)
      .map(([l, t]) => `${l}) ${t}`)
      .join("\n");

    const text = `QUESTÃO ${q.numero_item} [${q.dificuldade || "Padrão"}] [Bloom: ${q.nivel_bloom || "Geral"}]
TEXTO-BASE:
${q.texto_base}

ENUNCIADO:
${q.enunciado}

ALTERNATIVAS:
${altText}

GABARITO: (${q.gabarito})
JUSTIFICATIVA: ${q.justificativa_gabarito}
`;
    navigator.clipboard.writeText(text);
    setCopiedIndex(q.numero_item);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCopyAll = () => {
    if (questoes.length === 0) return;

    let fullText = `BANCO DE ITENS - SEDUC SP\nHabilidade: ${normalizedCode}\n\n`;

    questoes.forEach((q) => {
      const altText = Object.entries(q.alternativas)
        .map(([l, t]) => `${l}) ${t}`)
        .join("\n");

      fullText += `--- QUESTÃO ${q.numero_item} ---\n${q.texto_base}\n\n${q.enunciado}\n\n${altText}\n\nGABARITO: (${q.gabarito})\nJUSTIFICATIVA: ${q.justificativa_gabarito}\n\n`;
    });

    navigator.clipboard.writeText(fullText);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  return (
    <div className="mt-4 bg-slate-900 border-2 border-indigo-500/50 rounded-2xl p-5 shadow-2xl space-y-4 text-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-800/50 pb-3">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 shrink-0">
            <Brain className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <div className="flex items-center space-x-2 flex-wrap gap-y-1">
              <h3 className="text-base font-black text-slate-100 flex items-center gap-1.5">
                Banco de {questoes.length > 0 ? questoes.length : selectedQuantidade} {(questoes.length > 0 ? questoes.length : selectedQuantidade) === 1 ? "Item" : "Itens"} de Avaliação Multimodal
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                SEDUC SP
              </span>
              {gradeLevel && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/20 text-indigo-200 border border-indigo-500/30">
                  {gradeLevel}
                </span>
              )}
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                normalizedCode?.toUpperCase().startsWith("EM") || gradeLevel?.toLowerCase().includes("médio")
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                  : "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
              }`}>
                {normalizedCode?.toUpperCase().startsWith("EM") || gradeLevel?.toLowerCase().includes("médio")
                  ? "Ensino Médio • 5 Alternativas (A, B, C, D, E)"
                  : "Ensino Fundamental • 4 Alternativas (A, B, C, D)"}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Habilidade Alvo:{" "}
              <span className="font-mono font-bold text-indigo-300 bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-800/60">
                {normalizedCode}
              </span>
              {subject ? ` • ${subject}` : ""}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleGerarBateriaItens}
            disabled={loadingGeral}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition duration-200 flex items-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            {loadingGeral ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-white" />
                <span>Gerando {selectedQuantidade} {selectedQuantidade === 1 ? "Item" : "Itens"}{incluirSuporteVisual ? " com Imagens" : ""}...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>
                  {questoes.length > 0
                    ? `Regerar (${selectedQuantidade} ${selectedQuantidade === 1 ? "Item" : "Itens"})`
                    : `Gerar ${selectedQuantidade} ${selectedQuantidade === 1 ? "Item" : "Itens"}${incluirSuporteVisual ? " com Imagens" : ""}`}
                </span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Painel de Autonomia & Configurações Pedagógicas */}
      <div className="bg-slate-950/70 border border-indigo-900/50 rounded-xl p-3.5 space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-indigo-300">
          <div className="flex items-center space-x-2">
            <SlidersHorizontal className="w-4 h-4 text-indigo-400" />
            <span>Autonomia do Professor & Parâmetros de Avaliação:</span>
          </div>
          <span className="text-[11px] text-slate-400 font-normal hidden sm:inline">
            Ajuste quantidade, recursos visuais e critérios pedagógicos
          </span>
        </div>

        {/* Linha 1: Autonomia do Formato (Quantidade de Questões + Suporte Visual) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-2.5 rounded-lg bg-indigo-950/30 border border-indigo-900/40">
          {/* Seletor de Quantidade de Itens */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <ListOrdered className="w-3.5 h-3.5 text-indigo-400" />
                Quantidade de Questões:
              </span>
              <span className="text-[11px] text-indigo-300 font-extrabold bg-indigo-900/50 px-2 py-0.5 rounded border border-indigo-700/50">
                {selectedQuantidade} {selectedQuantidade === 1 ? "questão" : "questões"}
              </span>
            </label>
            <div className="grid grid-cols-5 gap-1.5">
              {[1, 3, 5, 10, 15].map((qtd) => (
                <button
                  key={qtd}
                  type="button"
                  onClick={() => setSelectedQuantidade(qtd)}
                  className={`py-1.5 rounded-lg text-xs font-black transition-all border cursor-pointer ${
                    selectedQuantidade === qtd
                      ? "bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-600/40 scale-[1.02]"
                      : "bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {qtd} {qtd === 1 ? "Item" : "Itens"}
                </button>
              ))}
            </div>
          </div>

          {/* Opção / Checkbox de Suporte Visual (Geração de Imagens via IA) */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
                Suporte Visual Realista (Fotografias):
              </span>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                incluirSuporteVisual
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                  : "bg-slate-800 text-slate-400 border border-slate-700"
              }`}>
                {incluirSuporteVisual ? "Ativado" : "Desativado"}
              </span>
            </label>

            <button
              type="button"
              onClick={() => setIncluirSuporteVisual(!incluirSuporteVisual)}
              className={`w-full p-1.5 rounded-lg border text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                incluirSuporteVisual
                  ? "bg-amber-950/40 border-amber-500/60 text-amber-200 hover:bg-amber-950/60"
                  : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-300"
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className={`w-4 h-4 rounded flex items-center justify-center border transition ${
                  incluirSuporteVisual
                    ? "bg-amber-500 border-amber-400 text-slate-950"
                    : "bg-slate-800 border-slate-600 text-transparent"
                }`}>
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-left leading-tight">
                  {incluirSuporteVisual ? "Gerar fotografias autênticas e realistas" : "Apenas texto (sem suporte de fotos)"}
                </span>
              </div>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800/90 text-slate-300 font-mono shrink-0 ml-1">
                {incluirSuporteVisual ? "Fotográfico" : "Mais rápido"}
              </span>
            </button>
          </div>
        </div>

        {/* Linha 2: Parâmetros Pedagógicos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Bloom */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
              <Brain className="w-3.5 h-3.5 text-violet-400" />
              Taxonomia de Bloom:
            </label>
            <select
              value={selectedBloomLevel}
              onChange={(e) => setSelectedBloomLevel(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-2 focus:ring-2 focus:ring-indigo-500 font-medium"
            >
              <option value="Todos / Variados">⚡ Todos / Progressão Geral</option>
              <option value="Lembrar">1. Lembrar</option>
              <option value="Compreender">2. Compreender</option>
              <option value="Aplicar">3. Aplicar</option>
              <option value="Analisar">4. Analisar</option>
              <option value="Avaliar">5. Avaliar</option>
              <option value="Criar">6. Criar</option>
            </select>
          </div>

          {/* Dificuldade */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5 text-amber-400" />
              Dificuldade:
            </label>
            <div className="grid grid-cols-4 gap-1">
              {(["Misto", "Fácil", "Médio", "Difícil"] as const).map((dif) => (
                <button
                  key={dif}
                  type="button"
                  onClick={() => setSelectedDifficulty(dif)}
                  className={`px-1.5 py-1.5 rounded-lg text-xs font-bold transition border cursor-pointer ${
                    selectedDifficulty === dif
                      ? "bg-indigo-600 text-white border-indigo-400 shadow"
                      : "bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800"
                  }`}
                >
                  {dif}
                </button>
              ))}
            </div>
          </div>

          {/* Educação Especial */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
              <Accessibility className="w-3.5 h-3.5 text-cyan-400" />
              Inclusão / DUA:
            </label>
            <button
              type="button"
              onClick={() => setSpecialEducation(!specialEducation)}
              className={`w-full p-2 rounded-lg border text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                specialEducation
                  ? "bg-cyan-950/60 border-cyan-500 text-cyan-200"
                  : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"
              }`}
            >
              <span>{specialEducation ? "✓ Questões Adaptadas Ativas" : "Ativar Questões Adaptadas"}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">DUA</span>
            </button>
          </div>
        </div>
      </div>

      {error && (
        <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-200 text-xs flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{error}</span>
          </div>
          <button
            type="button"
            onClick={handleGerarBateriaItens}
            className="px-2.5 py-1 bg-rose-800 hover:bg-rose-700 rounded text-white text-xs font-bold"
          >
            Tentar de novo
          </button>
        </div>
      )}

      {/* Lista de Questões */}
      <div className="space-y-4">
        {questoes.length === 0 && !loadingGeral && (
          <div className="flex flex-col items-center justify-center p-8 border border-dashed border-slate-700 rounded-xl bg-slate-800/40 text-slate-400 text-center">
            <HelpCircle className="h-10 w-10 text-slate-500 mb-2" />
            <p className="text-sm font-medium">Nenhum item gerado ainda.</p>
            <p className="text-xs text-slate-500 mt-1">
              Clique no botão acima para criar {selectedQuantidade} {selectedQuantidade === 1 ? "questão alinhada" : "questões alinhadas"} à habilidade {normalizedCode}.
            </p>
          </div>
        )}

        {questoes.length > 0 && (
          <div className="flex items-center justify-between bg-indigo-950/40 p-2.5 rounded-lg border border-indigo-800/40">
            <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              {questoes.length} {questoes.length === 1 ? "Item Gerado" : "Itens Gerados"}{incluirSuporteVisual ? " com Suporte Visual" : " (Modo Textual)"}
            </span>
            <button
              type="button"
              onClick={handleCopyAll}
              className="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center space-x-1"
            >
              {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedAll ? "Copiado!" : `Copiar Todas as ${questoes.length}`}</span>
            </button>
          </div>
        )}

        {questoes.map((questao) => {
          const isExpanded = expandedIndex === questao.numero_item - 1;

          return (
            <div
              key={questao.numero_item}
              className="p-5 bg-slate-800 rounded-xl border border-slate-700 shadow-lg space-y-3"
            >
              <div className="flex items-center justify-between border-b border-slate-700/50 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 bg-purple-950 text-purple-300 rounded-full text-xs font-bold border border-purple-800/50">
                    Questão {questao.numero_item}
                  </span>
                  {questao.dificuldade && (
                    <span className="px-2 py-0.5 bg-slate-700 text-slate-200 text-[10px] font-semibold rounded">
                      {questao.dificuldade}
                    </span>
                  )}
                  {questao.nivel_bloom && (
                    <span className="px-2 py-0.5 bg-indigo-950 text-indigo-300 text-[10px] font-semibold rounded">
                      Bloom: {questao.nivel_bloom}
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => handleCopySingle(questao)}
                    className="p-1.5 text-slate-400 hover:text-white rounded bg-slate-700 transition"
                    title="Copiar item"
                  >
                    {copiedIndex === questao.numero_item ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    Gabarito: ({questao.gabarito})
                  </span>
                </div>
              </div>

              {/* Contêiner de Imagem */}
              {questao.suporte_dados?.requer_ilustracao && (
                <div className="my-3 p-3.5 border border-slate-700/80 rounded-xl bg-slate-950 flex flex-col items-center justify-center min-h-[220px] transition-all">
                  {loadingImagens[questao.numero_item] ? (
                    <div className="flex flex-col items-center space-y-2.5 text-center py-6">
                      <RefreshCw className="h-7 w-7 text-indigo-400 animate-spin" />
                      <p className="text-xs text-indigo-300 font-medium">Obtendo registro fotográfico autêntico e realista...</p>
                      <span className="text-[11px] text-slate-500 max-w-sm">Fotografia documental de alta resolução contextualizada à habilidade</span>
                    </div>
                  ) : imagensCarregadas[questao.numero_item] ? (
                    <div className="relative group w-full flex flex-col items-center">
                      <img
                        src={imagensCarregadas[questao.numero_item]}
                        alt="Fotografia realista de suporte pedagógico da questão"
                        referrerPolicy="no-referrer"
                        className="rounded-lg max-w-full h-auto max-h-[360px] border border-slate-700/80 shadow-lg object-contain bg-slate-900"
                      />
                      
                      <div className="flex flex-wrap items-center justify-between w-full mt-2.5 px-1 gap-2">
                        <div className="flex items-center space-x-1.5 text-[11px] text-slate-400 min-w-0">
                          <ImageIcon className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                          <span className="font-semibold text-slate-300 shrink-0">Fotografia Realista</span>
                          <span className="text-slate-600 shrink-0">•</span>
                          <span className="text-slate-400 truncate max-w-xs">{questao.suporte_dados.prompt_para_imagem}</span>
                        </div>

                        <div className="flex items-center space-x-1.5 shrink-0">
                          <a
                            href={imagensCarregadas[questao.numero_item]}
                            download={`foto-realista-item-${questao.numero_item}.jpg`}
                            className="px-2.5 py-1 text-[11px] font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-600/50 rounded-lg flex items-center space-x-1 transition"
                            title="Baixar fotografia pedagógica em alta resolução"
                          >
                            <Download className="h-3 w-3" />
                            <span>Baixar Foto</span>
                          </a>

                          <button
                            type="button"
                            onClick={() => handleRegenerarImagemIndividual(questao.numero_item, questao.suporte_dados.prompt_para_imagem)}
                            disabled={loadingImagens[questao.numero_item]}
                            className="px-2.5 py-1 text-[11px] font-semibold text-indigo-300 hover:text-white bg-indigo-950/70 hover:bg-indigo-900/80 border border-indigo-700/50 rounded-lg flex items-center space-x-1 transition"
                            title="Buscar ou regerar outra fotografia realista para este item"
                          >
                            <RefreshCw className={`h-3 w-3 ${loadingImagens[questao.numero_item] ? "animate-spin" : ""}`} />
                            <span>Regerar Foto</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center p-4 text-slate-400 text-xs flex flex-col items-center space-y-2">
                      <div className="flex items-center space-x-2 text-amber-400 font-medium">
                        <AlertTriangle className="h-4 w-4" />
                        <span>Fotografia pendente de carregamento</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRegenerarImagemIndividual(questao.numero_item, questao.suporte_dados.prompt_para_imagem)}
                        className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition"
                      >
                        <RefreshCw className="h-3.5 w-3.5" />
                        <span>Gerar Fotografia Realista Agora</span>
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Botão de ativação sob demanda para itens gerados no modo textual */}
              {!questao.suporte_dados?.requer_ilustracao && !imagensCarregadas[questao.numero_item] && (
                <div className="my-2 flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => handleGerarImagemSobDemanda(questao.numero_item, questao)}
                    className="text-[11px] text-slate-300 hover:text-amber-300 flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-amber-500/50 transition cursor-pointer font-medium"
                    title="Obter fotografia realista e autêntica pedagógica para este item"
                  >
                    <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
                    <span>Adicionar Fotografia Realista via IA neste item</span>
                  </button>
                </div>
              )}

              <p className="text-sm text-slate-300 font-serif leading-relaxed italic bg-slate-850 p-3 rounded-lg border border-slate-750/30">
                "{questao.texto_base}"
              </p>

              <h4 className="text-sm font-semibold text-slate-100 leading-snug">
                {questao.enunciado}
              </h4>

              {/* Alternativas */}
              <div className="space-y-1.5">
                {Object.keys(questao.alternativas || {}).map((letra) => {
                  const textoAlternativa = questao.alternativas[letra];
                  const esGabarito = letra === questao.gabarito;
                  return (
                    <div
                      key={letra}
                      className={`p-2.5 rounded-lg text-xs transition-all border flex items-start space-x-2.5 ${
                        esGabarito
                          ? "bg-emerald-950/30 border-emerald-600/50 text-emerald-200 font-medium"
                          : "bg-slate-750/50 border-slate-700 text-slate-300 hover:bg-slate-700/60"
                      }`}
                    >
                      <span
                        className={`font-bold text-xs px-2 py-0.5 rounded ${
                          esGabarito ? "bg-emerald-900 text-emerald-200" : "bg-slate-700 text-slate-400"
                        }`}
                      >
                        {letra}
                      </span>
                      <span className="flex-1 leading-tight">{textoAlternativa}</span>
                    </div>
                  );
                })}
              </div>

              {/* Justificativa do Gabarito */}
              <div className="p-3 bg-purple-950/20 border border-purple-900/40 rounded-lg text-xs text-purple-200 flex items-start space-x-2">
                <Award className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-purple-300 mr-1">Justificativa ({questao.gabarito}):</span>
                  <span className="text-slate-300">{questao.justificativa_gabarito}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssessmentGeneratorSection;
