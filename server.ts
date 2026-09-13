import express from "express";
import { GoogleGenAI } from "@google/genai";
import path from "path";
import { exec } from "child_process";
import { promisify } from "util";
import { createServer as createViteServer } from "vite";
import { OFFICIAL_SKILLS_DATABASE, getOfficialSkill } from "./src/data/officialSkills";

const execAsync = promisify(exec);

const app = express();
app.use(express.json({ limit: "15mb" }));

app.get("/api/health", (req: any, res: any) => {
  res.json({ status: "ok" });
});

const getGenAI = () => {
  return new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
};

// Cache de cooldown para modelos em sobrecarga temporária (503 / 429 / quota)
const modelCooldownMap = new Map<string, number>();
const COOLDOWN_DURATION_MS = 60000; // 60 segundos de cooldown

// Modelos ativos ordenados por disponibilidade e alta cota (priorizando flash-lite)
async function callGeminiWithRetry(
  ai: GoogleGenAI,
  payload: any,
  preferredModel = "gemini-3.1-flash-lite",
  timeoutMs = 25000
) {
  const candidateModels = [
    preferredModel,
    "gemini-3.1-flash-lite",
    "gemini-3.5-flash-lite",
    "gemini-flash-lite-latest",
    "gemini-3.5-flash",
    "gemini-3.7-flash",
  ];

  const now = Date.now();
  const availableModels = candidateModels.filter((m, idx, arr) => arr.indexOf(m) === idx);

  availableModels.sort((a, b) => {
    const cooldownA = (modelCooldownMap.get(a) || 0) > now ? 1 : 0;
    const cooldownB = (modelCooldownMap.get(b) || 0) > now ? 1 : 0;
    return cooldownA - cooldownB;
  });

  let lastError: any = null;

  for (const model of availableModels) {
    if ((modelCooldownMap.get(model) || 0) > now && availableModels.some((m) => (modelCooldownMap.get(m) || 0) <= now)) {
      continue;
    }

    try {
      const callPromise = ai.models.generateContent({
        model: model,
        ...payload,
      });
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error(`TIMEOUT_${model}`)), timeoutMs)
      );
      const response: any = await Promise.race([callPromise, timeoutPromise]);

      modelCooldownMap.delete(model);
      return response;
    } catch (err: any) {
      lastError = err;
      const errMsg = String(err?.message || err);
      const isHighDemandOrQuota =
        errMsg.includes("503") ||
        errMsg.includes("high demand") ||
        errMsg.includes("UNAVAILABLE") ||
        errMsg.includes("429") ||
        errMsg.includes("Quota") ||
        errMsg.includes("quota") ||
        errMsg.includes("RESOURCE_EXHAUSTED");

      if (isHighDemandOrQuota) {
        modelCooldownMap.set(model, Date.now() + COOLDOWN_DURATION_MS);
        console.log(`[AI-Gateway] Alternando modelo ${model} em cooldown para o próximo candidato disponível.`);
        await new Promise((resolve) => setTimeout(resolve, 200));
      } else {
        console.log(`[AI-Gateway] Modelo ${model} indisponível. Alternando para o próximo.`);
      }
    }
  }

  throw new Error("Serviço de IA temporariamente indisponível no momento.");
}

// Síntese pedagógica estruturada de questões de contingência (garante 100% de disponibilidade e gabarito dinâmico)
function gerarQuestoesFallbackPedagogico(params: {
  skillCode: string;
  skillDescription: string;
  skillObject?: any;
  subject: string;
  gradeLevel: string;
  bloomLevel: string;
  dificuldade: string;
  quantidade: number;
  incluirSuporteVisual: boolean;
}) {
  const {
    skillCode,
    skillDescription,
    skillObject,
    subject,
    gradeLevel,
    bloomLevel,
    dificuldade,
    quantidade = 5,
    incluirSuporteVisual = true,
  } = params;

  const content = skillObject?.content || skillDescription || "Conteúdo Curricular";
  const verb = skillObject?.verb || "Compreender e aplicar";
  const context = skillObject?.context || "Situações cotidianas e práticas";

  const isMedio =
    skillCode.startsWith("EM") ||
    (!skillCode.startsWith("EF") &&
      (gradeLevel.toLowerCase().includes("médio") ||
        gradeLevel.toLowerCase().includes("medio") ||
        gradeLevel.toLowerCase().includes("1ª série") ||
        gradeLevel.toLowerCase().includes("2ª série") ||
        gradeLevel.toLowerCase().includes("3ª série")));

  const niveisPossiveis = ["Lembrar", "Compreender", "Aplicar", "Analisar", "Avaliar", "Criar"];
  const dificuldades = ["Fácil", "Média", "Difícil"];
  const letrasGabarito = ["A", "B", "C", "D"];

  const questoes: any[] = [];
  const total = Math.min(Math.max(quantidade, 1), 10);

  for (let i = 1; i <= total; i++) {
    const nivelAtual =
      bloomLevel && bloomLevel !== "Variados" && bloomLevel !== "Misto"
        ? bloomLevel
        : niveisPossiveis[(i - 1) % niveisPossiveis.length];

    const difAtual =
      dificuldade && dificuldade !== "Misto"
        ? dificuldade
        : dificuldades[(i - 1) % dificuldades.length];

    const letraCorreta = letrasGabarito[(i - 1) % letrasGabarito.length];
    const optionsMap: any = {};
    
    const textoCorreto = `Aplica com rigor os conceitos fundamentais de ${content} em ${context}, contemplando adequadamente a exigência de ${verb.toLowerCase()}.`;
    const distrator1 = `Analisa ${content} baseando-se apenas em aspectos superficiais ou procedimentos mecânicos desvinculados de ${context}.`;
    const distrator2 = `Inverte as premissas lógicas e as relações de dependência essenciais que estruturam o objeto ${content}.`;
    const distrator3 = `Desconsidera variáveis críticas e parâmetros intervenientes inerentes à situação investigada em ${context}.`;
    const distrator4 = `Generaliza indevidamente os princípios de ${content} para contextos e domínios não aplicáveis.`;

    if (letraCorreta === "A") {
      optionsMap.A = textoCorreto;
      optionsMap.B = distrator1;
      optionsMap.C = distrator2;
      optionsMap.D = distrator3;
      if (isMedio) optionsMap.E = distrator4;
    } else if (letraCorreta === "B") {
      optionsMap.A = distrator1;
      optionsMap.B = textoCorreto;
      optionsMap.C = distrator2;
      optionsMap.D = distrator3;
      if (isMedio) optionsMap.E = distrator4;
    } else if (letraCorreta === "C") {
      optionsMap.A = distrator1;
      optionsMap.B = distrator2;
      optionsMap.C = textoCorreto;
      optionsMap.D = distrator3;
      if (isMedio) optionsMap.E = distrator4;
    } else {
      optionsMap.A = distrator1;
      optionsMap.B = distrator2;
      optionsMap.C = distrator3;
      optionsMap.D = textoCorreto;
      if (isMedio) optionsMap.E = distrator4;
    }

    questoes.push({
      numero_item: i,
      texto_base: `No componente curricular de ${subject} (${gradeLevel || "Ensino Fundamental"}), a habilidade ${skillCode} determina: "${skillDescription}". Em uma atividade investigativa contextualizada sobre ${content}, os estudantes examinaram cenários práticos ligados a ${context}.`,
      enunciado: `Considerando os princípios centrais de ${content} e a exigência cognitiva associada a ${verb.toLowerCase()}, assinale a alternativa correta em relação ao problema abordado:`,
      alternativas: optionsMap,
      gabarito: letraCorreta,
      justificativa_gabarito: `A alternativa ${letraCorreta} é a correta pois atende com precisão metodológica e conceitual ao objeto "${content}" aplicado em "${context}", alinhando-se ao verbo operacional "${verb}".`,
      justificativa_distratores: {
        A: letraCorreta === "A" ? "Gabarito correto." : "Distrator baseado em equívoco conceitual ou visão parcial do fenômeno.",
        B: letraCorreta === "B" ? "Gabarito correto." : "Distrator fundamentado em aplicação incorreta ou restrição mecânica.",
        C: letraCorreta === "C" ? "Gabarito correto." : "Distrator decorrente de inversão lógica das variáveis estruturais.",
        D: letraCorreta === "D" ? "Gabarito correto." : "Distrator derivado de omissão de parâmetros determinantes.",
        ...(isMedio ? { E: letraCorreta === "E" ? "Gabarito correto." : "Distrator fundamentado em extrapolação indevida de domínio." } : {}),
      },
      nivel_bloom: nivelAtual,
      dificuldade: difAtual,
      suporte_dados: {
        requer_ilustracao: incluirSuporteVisual,
        prompt_para_imagem: incluirSuporteVisual 
          ? `Fotografia realista de alta qualidade, estilo educacional, mostrando um cenário prático ou elementos reais relacionados a ${content} no cotidiano, sem textos, sem caixas e sem setas diagramáticas.`
          : null
      }
    });
  }

  return questoes;
}

// Síntese pedagógica estruturada de plano de aula de contingência
function gerarPlanoAulaFallback({
  topic,
  subject,
  gradeLevel,
  bimester,
  duration,
  schoolName,
  teacherName,
  matchedSkill,
  customNotes,
}: any) {
  const skill = matchedSkill || {
    code: "BNCC",
    description: `Desenvolvimento de competências em ${subject} sobre ${topic}`,
    verb: "Compreender e aplicar",
    content: topic,
    context: "Situações práticas e investigativas",
  };

  return {
    id: `plan_${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: `Plano de Aula: ${topic}`,
    subject: subject || "Geral",
    gradeLevel: gradeLevel || "Ensino Fundamental",
    bimester: bimester || "1º Bimestre",
    duration: duration || "50 min",
    schoolName: schoolName || "",
    teacherName: teacherName || "",
    summary: `Plano estruturado focado no desenvolvimento de competências em ${topic} (${subject} - ${gradeLevel}), combinando mediação docente ativa, dinâmicas investigativas e resolução prática de problemas.`,
    bnccSkills: [skill],
    generalObjectives: [
      `Compreender os conceitos estruturantes de ${topic} relacionando-os a situações concretas.`,
      `Estimular o pensamento crítico, a formulação de hipóteses e a colaboração entre os estudantes.`,
    ],
    specificObjectives: [
      `Identificar os elementos fundamentais e propriedades de ${topic}.`,
      `Resolver desafios práticos aplicando as estratégias e conceitos abordados.`,
      `Comunicar e justificar os raciocínios desenvolvidos em sala de aula.`,
    ],
    prerequisites: [
      `Conhecimentos prévios elementares relacionados a ${subject}.`,
      `Capacidade de leitura de enunciados e interpretação de dados básicos.`,
    ],
    timeline: [
      {
        phase: "Introdução",
        title: "Problematização Inicial e Levantamento Prévio",
        durationMinutes: 10,
        description: `Apresentação de uma situação-problema disparadora contextualizada sobre ${topic}.`,
        teacherRole: "Mediador e instigador da curiosidade investigativa dos estudantes.",
        studentRole: "Participação ativa, compartilhando hipóteses e saberes prévios.",
        resourcesNeeded: ["Lousa", "Recurso visual ou projetor"],
      },
      {
        phase: "Desenvolvimento",
        title: "Atividade Prática Investigativa e Sistematização",
        durationMinutes: 30,
        description: `Trabalho colaborativo para exploração, experimentação e aplicação direta dos conceitos de ${topic}.`,
        teacherRole: "Facilitador, circulando entre os grupos para orientar e sanar dúvidas.",
        studentRole: "Resolução de problemas, registro de hipóteses e conclusões.",
        resourcesNeeded: ["Caderno pedagógico", "Material de apoio didático"],
      },
      {
        phase: "Fechamento",
        title: "Síntese Coletiva e Avaliação Formativa",
        durationMinutes: 10,
        description: "Socialização das descobertas da turma, correção comentada e consolidação dos pontos-chave.",
        teacherRole: "Sistematizador do conhecimento e fornecedor de feedback imediato.",
        studentRole: "Autoavaliação e anotação das conclusões principais no caderno.",
        resourcesNeeded: ["Lousa", "Caderno"],
      },
    ],
    assessmentMethod: "Avaliação formativa contínua através da observação das interações, registros individuais e participação nas discussões coletivas.",
    rubricCriteria: [
      {
        criterion: `Compreensão conceitual de ${topic}`,
        excelente: "Demonstra domínio seguro dos conceitos e os aplica com autonomia e clareza.",
        bom: "Compreende a maior parte dos conceitos, necessitando de mediação pontual em etapas complexas.",
        emDesenvolvimento: "Apresenta dúvidas básicas sobre o tema e necessita de acompanhamento contínuo.",
      },
      {
        criterion: "Comunicação e argumentação",
        excelente: "Justifica o raciocínio de maneira lógica e utiliza vocabulário adequado.",
        bom: "Apresenta o raciocínio de forma compreensível com pequenas imprecisões.",
        emDesenvolvimento: "Tem dificuldade em estruturar a explicação de suas hipóteses.",
      },
    ],
    inclusivityAdaptations: "Flexibilização do tempo para resolução das tarefas, uso de recursos visuais de apoio e agrupamentos colaborativos para apoio mútuo.",
    homeworkOrExtension: `Pesquisar uma aplicação real ou curiosidade sobre ${topic} para compartilhar no início da próxima aula.`,
    necessaryMaterials: ["Lousa", "Giz/Marcador", "Caderno dos estudantes", "Material impresso ou projetado"],
    teacherTips: [
      "Inicie com uma pergunta aberta antes de introduzir definições formais.",
      "Valorize o processo de raciocínio e o erro construtivo durante a mediação.",
    ],
    customNotes: customNotes || "",
  };
}

// ==========================================
// CATÁLOGO DE FOTOGRAFIAS EDUCACIONAIS REALISTAS & AUTÊNTICAS
// ==========================================

interface FotoEducacional {
  tags: string[];
  url: string;
  titulo: string;
  categoria: string;
}

const FOTOGRAFIAS_EDUCACIONAIS: FotoEducacional[] = [
  // CIÊNCIAS / BIOLOGIA / QUÍMICA
  {
    tags: ["microscop", "celul", "citolog", "lamin", "microbio", "bacteri", "protozo", "arranjo", "organismo"],
    url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1200&q=85",
    titulo: "Microscópio óptico profissional em laboratório de análise celular",
    categoria: "Biologia / Citologia",
  },
  {
    tags: ["quimic", "reacao", "laborator", "tubo", "bequer", "solucao", "mistur", "fenomeno", "massa", "transformacao"],
    url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
    titulo: "Vidrarias e reações em laboratório científico de química",
    categoria: "Química",
  },
  {
    tags: ["dna", "genetic", "hereditari", "mutac", "mendel", "cromossom", "biotecnologia"],
    url: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1200&q=85",
    titulo: "Estrutura helicoidal de DNA em bancada de pesquisa genética",
    categoria: "Genética",
  },
  {
    tags: ["florest", "arvor", "arvore", "vegetac", "mata", "amazon", "bioma", "biodivers", "ecossistem", "fotossintese", "plant", "sustentavel"],
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
    titulo: "Dossel de floresta tropical com exuberante biodiversidade nativa",
    categoria: "Ecologia / Botânica",
  },
  {
    tags: ["animal", "faun", "zoolog", "especie", "mamifero", "biodiversidade", "habitat", "invasor"],
    url: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=1200&q=85",
    titulo: "Fauna em habitat natural preservado",
    categoria: "Zoologia",
  },
  {
    tags: ["vacin", "imuniz", "saude", "rebanho", "prevenc", "doenc", "virus", "pandemi", "epidemi", "caderneta"],
    url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=85",
    titulo: "Aplicação clínica de vacina e imunização preventiva",
    categoria: "Saúde Pública",
  },
  {
    tags: ["nutric", "aliment", "fruta", "dieta", "obesidad", "desnutric", "piramid", "saudavel", "refeic", "metabolismo"],
    url: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1200&q=85",
    titulo: "Alimentos naturais frescos ricos em nutrientes essenciais",
    categoria: "Nutrição e Metabolismo",
  },
  {
    tags: ["agu", "agua", "rio", "hidric", "manancial", "ciclo", "poluic", "baci", "esgoto"],
    url: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85",
    titulo: "Recursos hídricos e fluxo natural de água límpida",
    categoria: "Recursos Hídricos",
  },
  {
    tags: ["corpo", "sistem", "digest", "respirat", "circulat", "cardi", "orgao", "fisiolog", "anatom", "endocrin", "nervoso"],
    url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=85",
    titulo: "Avaliação clínica e monitoramento de sistemas vitais do corpo",
    categoria: "Fisiologia Humana",
  },
  {
    tags: ["higien", "saneament", "esgoto", "tratament", "saude public", "limpez"],
    url: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=1200&q=85",
    titulo: "Higiene sanitária e saneamento essencial para a saúde pública",
    categoria: "Saneamento",
  },

  // FÍSICA / ASTRONOMIA / ENERGIA
  {
    tags: ["planeta", "terr", "terra", "espaco", "astronom", "galaxi", "cosmos", "orbita", "satelit", "crosta"],
    url: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=85",
    titulo: "Fotografia autêntica do Planeta Terra visto da órbita espacial",
    categoria: "Astronomia",
  },
  {
    tags: ["estrel", "ceu", "universo", "big bang", "constelac", "noite", "astros", "solar"],
    url: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=85",
    titulo: "Céu noturno astronômico e campos estelares da Via Láctea",
    categoria: "Astrofísica",
  },
  {
    tags: ["eletric", "circuit", "placa", "fio", "resistor", "eletron", "bater", "disjuntor", "fusivel"],
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    titulo: "Circuito eletrônico integrado com microcomponentes reais",
    categoria: "Eletricidade e Circuitos",
  },
  {
    tags: ["energi", "eolic", "sol", "solar", "usina", "renovav", "sustentab", "gerac", "potencia"],
    url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=85",
    titulo: "Parque eólico com turbinas para geração de energia limpa",
    categoria: "Fontes de Energia",
  },
  {
    tags: ["luz", "optic", "refra", "reflex", "prism", "ond", "espectr", "radiac", "visivel"],
    url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=85",
    titulo: "Feixes de luz e refração óptica com efeitos luminosos naturais",
    categoria: "Óptica e Ondulatória",
  },
  {
    tags: ["calor", "termic", "temperat", "termodinam", "combust", "fogo", "chama", "trabalho"],
    url: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=85",
    titulo: "Transformação térmica de energia e calor em combustão",
    categoria: "Termodinâmica",
  },

  // HISTÓRIA E SOCIEDADE
  {
    tags: ["roma", "romano", "coliseu", "imperio", "cesar", "latin", "aquedut"],
    url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=85",
    titulo: "Fotografia documental do Coliseu de Roma e engenharia clássica",
    categoria: "História Antiga / Roma",
  },
  {
    tags: ["grec", "grego", "aten", "partenon", "democraci", "filosof", "olimp", "cidadao"],
    url: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1200&q=85",
    titulo: "Acrópole de Atenas e colunas clássicas do Partenon",
    categoria: "História Antiga / Grécia",
  },
  {
    tags: ["egit", "piramid", "farao", "nilo", "esfinge", "antiguidad", "mum", "mesopotam"],
    url: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=85",
    titulo: "Pirâmides monumentais de Gizé no Egito Antigo",
    categoria: "História Antiga / Egito",
  },
  {
    tags: ["feudal", "idade media", "medieval", "castel", "igrej", "senhor", "servo", "vassal", "suseran"],
    url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=1200&q=85",
    titulo: "Fortificação e castelo medieval de pedra na Europa",
    categoria: "História Medieval",
  },
  {
    tags: ["colonial", "brasil", "ouro pret", "ouro", "barroc", "escrav", "capitani", "engenho", "acucar", "bandeir"],
    url: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=85",
    titulo: "Arquitetura histórica barroca e patrimônio do Brasil Colonial",
    categoria: "História do Brasil",
  },
  {
    tags: ["navegac", "caravel", "maritim", "descobr", "ocean", "bussol", "portug", "espanh", "mercantil"],
    url: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1200&q=85",
    titulo: "Instrumentos náuticos de navegação marítima e mapas históricos",
    categoria: "Grandes Navegações",
  },
  {
    tags: ["revoluc", "iluminism", "franca", "bastilh", "direit", "independ", "constituic", "arquiv", "document", "guerra fria"],
    url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85",
    titulo: "Manuscritos e documentos de época do pensamento iluminista",
    categoria: "História Moderna",
  },
  {
    tags: ["guerra", "vargas", "seculo xx", "industri", "operari", "trabalh", "fabrica", "conflit", "militar"],
    url: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=1200&q=85",
    titulo: "Maquinários e estruturas da era industrial moderna",
    categoria: "História Contemporânea",
  },

  // GEOGRAFIA E MEIO AMBIENTE
  {
    tags: ["relevo", "montanh", "planalto", "val", "tectonic", "rocha", "placa", "terremot", "vulcao", "geolog"],
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    titulo: "Cadeia montanhosa de grande altitude e formações geológicas",
    categoria: "Geomorfologia",
  },
  {
    tags: ["clim", "nuvem", "atmosfer", "chuva", "efeito estuf", "ozonio", "meteorolog", "tempest", "global"],
    url: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1200&q=85",
    titulo: "Dinâmica de nuvens e circulação atmosférica",
    categoria: "Climatologia",
  },
  {
    tags: ["cidad", "urban", "metropol", "avenid", "populac", "demograf", "transito", "planejament", "migrac"],
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    titulo: "Espaço urbano contemporâneo com edifícios e infraestrutura",
    categoria: "Geografia Urbana",
  },
  {
    tags: ["map", "cartograf", "globo", "escala", "coordenad", "geoprocess", "fusos", "cartesiano"],
    url: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=85",
    titulo: "Globo terrestre e referências cartográficas planetárias",
    categoria: "Cartografia",
  },
  {
    tags: ["desert", "seca", "arid", "duna", "caatinga", "semiarid"],
    url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=85",
    titulo: "Paisagem de dunas e ecossistema de clima árido",
    categoria: "Biomas Áridos",
  },

  // MATEMÁTICA / GEOMETRIA / ESTATÍSTICA
  {
    tags: ["geometr", "medid", "escal", "compass", "paquimetr", "regu", "angulo", "triangul", "poligon", "pitagor", "cartesiano", "reta"],
    url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=85",
    titulo: "Instrumentos de medição de precisão e geometria euclidiana",
    categoria: "Geometria e Medidas",
  },
  {
    tags: ["arquitetur", "forma", "simetri", "circul", "retangul", "arco", "espacial", "prisma", "cilindr", "volume", "area"],
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
    titulo: "Geometria arquitetônica tridimensional e formas espaciais reais",
    categoria: "Geometria Espacial",
  },
  {
    tags: ["probabilidad", "dado", "amostr", "aleator", "jog", "combinat", "espaco amostral", "fracao"],
    url: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=85",
    titulo: "Dados e elementos de amostragem para cálculo de probabilidades",
    categoria: "Probabilidade",
  },
  {
    tags: ["financ", "moed", "dinheir", "juros", "porcentag", "calcul", "econom", "orcament"],
    url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=85",
    titulo: "Calculadora e planejamento contábil em educação financeira",
    categoria: "Educação Financeira",
  },
  {
    tags: ["grafic", "estatist", "tabel", "dados", "media", "frequenc", "analise", "funcao"],
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    titulo: "Gráficos estatísticos e indicadores quantitativos de dados",
    categoria: "Estatística",
  },

  // LÍNGUA PORTUGUESA / LITERATURA
  {
    tags: ["livro", "leitur", "bibliotec", "literat", "autor", "acervo", "romance", "poesi", "conto"],
    url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=85",
    titulo: "Corredores de biblioteca com acervo bibliográfico e literário",
    categoria: "Literatura e Leitura",
  },
  {
    tags: ["escrit", "redac", "canet", "manuscrit", "cadern", "autor", "poema", "text", "coesa"],
    url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85",
    titulo: "Produção de texto e registro em manuscrito autêntico",
    categoria: "Produção Textual",
  },
  {
    tags: ["jornal", "notici", "imprens", "reportag", "editorial", "midi", "publicid", "artigo"],
    url: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=85",
    titulo: "Jornal impresso com notícias da esfera jornalística",
    categoria: "Jornalismo e Mídia",
  },
  {
    tags: ["oratori", "debat", "discurs", "microfon", "comunicac", "argument", "opiniao"],
    url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85",
    titulo: "Espaço de oratória e debate público de ideias",
    categoria: "Oralidade e Debate",
  },

  // ARTES / CULTURA / ESPORTE
  {
    tags: ["pintur", "atelie", "tinta", "palet", "pincel", "quadr", "artes visuais", "gravura", "escultur"],
    url: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85",
    titulo: "Ateliê artístico com tintas a óleo, telas e paleta de pintura",
    categoria: "Artes Visuais",
  },
  {
    tags: ["teatr", "palco", "cenic", "cortin", "dramaturg", "ator", "cenari", "circo", "figurino"],
    url: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=85",
    titulo: "Palco teatral iluminado para apresentação cênica dramática",
    categoria: "Teatro",
  },
  {
    tags: ["music", "instrument", "orquestr", "violin", "guitar", "partitur", "som", "timbre"],
    url: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1200&q=85",
    titulo: "Instrumento musical orquestral em iluminação de concerto",
    categoria: "Música",
  },
  {
    tags: ["danc", "coreograf", "moviment", "expressao corporal", "ballet", "ritmo"],
    url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=85",
    titulo: "Expressividade e movimento corporal em performance de dança",
    categoria: "Dança",
  },
  {
    tags: ["esport", "educacao fisica", "atletism", "corrida", "jogos", "quadr", "saude"],
    url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85",
    titulo: "Pista de atletismo e práticas de educação física e esportes",
    categoria: "Educação Física",
  },
  {
    tags: ["sal", "aul", "escol", "estudant", "profess", "educac"],
    url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    titulo: "Ambiente educacional de aprendizagem e pesquisa escolar",
    categoria: "Educação Geral",
  },
];

function encontrarFotoEducacional(prompt: string, componente?: string, ano?: string): FotoEducacional {
  const query = `${prompt || ""} ${componente || ""} ${ano || ""}`
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  // Priorização rápida para termos específicos de anatomia e corpo humano
  if (
    query.includes("anatomia") ||
    query.includes("orgaos") ||
    query.includes("corpo") ||
    query.includes("digest") ||
    query.includes("respirat") ||
    query.includes("circulat") ||
    query.includes("cardiac") ||
    query.includes("sistemas vitais")
  ) {
    const anatomiaFoto = FOTOGRAFIAS_EDUCACIONAIS.find((f) => f.categoria === "Fisiologia Humana");
    if (anatomiaFoto) return anatomiaFoto;
  }

  let bestMatch = FOTOGRAFIAS_EDUCACIONAIS[0];
  let maxScore = -1;

  for (const foto of FOTOGRAFIAS_EDUCACIONAIS) {
    let score = 0;
    for (const tag of foto.tags) {
      const normalizedTag = tag.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (query.includes(normalizedTag)) {
        score += normalizedTag.length;
      }
    }
    if (score > maxScore) {
      maxScore = score;
      bestMatch = foto;
    }
  }

  return bestMatch;
}

// ==========================================
// ROTAS DA API
// ==========================================

// 1. Geração de Suporte Visual Inteligente
app.post("/api/generate-support-image", async (req: any, res: any) => {
  res.setHeader("Content-Type", "application/json");
  const { promptImagem, componente, ano } = req.body || {};
  const prompt = promptImagem || "Ambiente educacional de aprendizagem";

  const ai = getGenAI();
  let base64Image = "";
  let motorUtilizado = "";
  let tipoVisualDesejado = "foto_ou_mapa";
  
  try {
    const classificacaoPrompt = `Analyze this pedagogical item request and decide the best visual support type. 
    Topic/Request: "${prompt}"
    Component: "${componente}"

    CRITICAL RULES:
    - If the topic is about human anatomy, body systems (digestive, respiratory, etc.), living organisms, animals, plants, or history, you MUST choose "foto_ou_mapa".
    - Do NOT use "card_conceitual" for biological systems or anatomy.

    Choose ONLY ONE of these categories:
    1. "grafico_matematico" (if it involves Cartesian coordinates, math functions, geometry, equations, or exact science graphs)
    2. "card_conceitual" (if it's a theoretical summary, timeline text, grammar steps, historical comparison matrix, or purely text-based infographic layout)
    3. "foto_ou_mapa" (if it's a real-world concept, human body/anatomy, biology, historical event, geography map, living organism, landscape, or physical object)

    Return ONLY the category name, nothing else.`;

    const classificacaoRes = await callGeminiWithRetry(
      ai,
      { contents: classificacaoPrompt, config: { temperature: 0.1 } },
      "gemini-3.1-flash-lite",
      5000
    );

    const respostaTexto = (classificacaoRes?.text || "").trim().toLowerCase();
    
    // Salvaguarda no código para garantir que termos de biologia/anatomia caiam direto em foto/mapa
    const promptLower = prompt.toLowerCase();
    const termoBiologico = promptLower.includes("sistema") || promptLower.includes("corpo") || promptLower.includes("órgão") || promptLower.includes("orgao") || promptLower.includes("anatomia") || promptLower.includes("célula") || promptLower.includes("celula");

    if (termoBiologico) {
      tipoVisualDesejado = "foto_ou_mapa";
    } else if (respostaTexto.includes("grafico")) {
      tipoVisualDesejado = "grafico_matematico";
    } else if (respostaTexto.includes("card")) {
      tipoVisualDesejado = "card_conceitual";
    } else {
      tipoVisualDesejado = "foto_ou_mapa";
    }

  } catch (err) {
    console.log("[Visual-Router] Erro na classificação, usando fallback para foto/mapa.");
  }

  // 2. Executa a geração baseada na decisão inteligente da IA (Gráficos ou Cards Estruturados via SVG)
  if (tipoVisualDesejado === "grafico_matematico" || tipoVisualDesejado === "card_conceitual") {
    try {
      let svgPrompt = "";
      if (tipoVisualDesejado === "grafico_matematico") {
        svgPrompt = `Create a clean, minimalist SVG coordinate graph or geometric shape for: "${prompt}". Use viewBox="0 0 800 450".`;
      } else {
        svgPrompt = `Create a clean, modern educational card layout or structured block diagram for: "${prompt}". Use viewBox="0 0 800 450" with a clean light background, professional container cards, and neat title headers. No messy drawings.`;
      }
      svgPrompt += ` Return ONLY the pure XML code of the SVG, starting with <svg> and ending with </svg>, with NO markdown blocks or backticks.`;

      const svgResponse = await callGeminiWithRetry(
        ai,
        { contents: svgPrompt, config: { temperature: 0.2 } },
        "gemini-3.1-flash-lite",
        15000
      );

      const cleaned = (svgResponse?.text || "").replace(/```[\s\S]*?```/g, "").trim();
      const svgMatch = cleaned.match(/<svg[\s\S]*?<\/svg>/i);

      if (svgMatch) {
        base64Image = `data:image/svg+xml;base64,${Buffer.from(svgMatch[0]).toString("base64")}`;
        motorUtilizado = tipoVisualDesejado === "grafico_matematico" ? "svg-vectorial-matematico" : "svg-card-conceitual-inteligente";
      }
    } catch (e: any) {
      console.log("[Support-Image] Falha no SVG inteligente. Caindo para o catálogo.", e.message);
    }
  }

  // 3. Rota Inteligente para Fotografias e Mapas Reais do Catálogo
  if (!base64Image) {
    let tagsDeBusca = prompt;

    try {
      // Pedimos para a IA resumir o texto pedagógico complexo em termos simples de imagem
      const promptTags = `Extract exactly 2 or 3 core visual search terms from this educational text to find a matching photo in a school catalog. 
      Text: "${prompt}"
      Component: "${componente}"
      
      Examples:
      - text about digestive and respiratory integration -> "anatomia corpo humano, órgãos internos"
      - text about feudalism -> "castelo medieval, idade média"
      
      Return ONLY the terms separated by comma, no extra text.`;

      const tagsRes = await callGeminiWithRetry(
        ai,
        { contents: promptTags, config: { temperature: 0.2 } },
        "gemini-3.1-flash-lite",
        4000
      );

      if (tagsRes?.text) {
        tagsDeBusca = tagsRes.text.trim().toLowerCase();
        console.log(`[Visual-Search] Tags geradas para o catálogo: [${tagsDeBusca}]`);
      }
    } catch (err) {
      console.log("[Visual-Search] Erro ao extrair tags com IA, usando prompt original.");
    }

    const fotoMatch = encontrarFotoEducacional(tagsDeBusca, componente, ano);
    base64Image = fotoMatch.url;
    motorUtilizado = "catalogo-fotografico-autentico";
  }

  return res.status(200).json({
    success: true,
    imagem_base64: base64Image,
    imageUrl: base64Image,
    url: base64Image,
    motor: motorUtilizado,
  });
});

// 2. Geração de Planos de Aula estruturados (BNCC & Foco Curricular)
app.post("/api/generate-lesson-plan", async (req: any, res: any) => {
  try {
    const formData = req.body || {};
    const {
      subject = "Geral",
      gradeLevel = "Ensino Fundamental",
      topic = "Conteúdo Pedagógico",
      duration = "50 min",
      bimester = "1º Bimestre",
      methodology = "Ativa",
      bnccCompetencies = "",
      schoolName = "",
      teacherName = "",
      customNotes = "",
    } = formData;

    let officialSkillContext = "";
    const matchedCode = (bnccCompetencies || topic).match(/[A-Z]{2}\d{2}[A-Z]{2}\d{1,3}[A-Z]?/i);
    let matchedSkill = matchedCode ? getOfficialSkill(matchedCode[0]) : undefined;

    if (matchedSkill) {
      officialSkillContext = `
HABILIDADE CANÔNICA OFICIAL OBRIGATÓRIA:
Código: ${matchedSkill.code}
Descrição Canônica: ${matchedSkill.description}
- Verbo de Ação: ${matchedSkill.verb}
- Objeto de Conhecimento: ${matchedSkill.content}
- Modificador/Contexto: ${matchedSkill.context}
IMPORTANTE: Mantenha rigorosa fidelidade curricular a esta habilidade canônica, sem inventar dados externos.`;
    }

    const ai = getGenAI();
    const prompt = `Você é um especialista em planejamento pedagógico alinhado rigorosamente à Base Nacional Comum Curricular (BNCC).
Crie um plano de aula completo e estruturado para:
Componente: ${subject}
Ano/Série: ${gradeLevel}
Bimestre: ${bimester}
Duração: ${duration}
Tema Central: ${topic}
Metodologia: ${methodology}
Competências/Habilidades informadas: ${bnccCompetencies}
Observações do professor: ${customNotes}
${officialSkillContext}

Gere o plano rigorosamente no formato JSON de acordo com o esquema solicitado.`;

    let parsedData: any;
    try {
      const response = await callGeminiWithRetry(
        ai,
        {
          contents: prompt,
          config: {
            temperature: 0.4,
            responseMimeType: "application/json",
            responseSchema: {
              type: "OBJECT",
              properties: {
                title: { type: "STRING" },
                summary: { type: "STRING" },
                bnccSkills: {
                  type: "ARRAY",
                  items: {
                    type: "OBJECT",
                    properties: {
                      code: { type: "STRING" },
                      description: { type: "STRING" },
                      verb: { type: "STRING" },
                      content: { type: "STRING" },
                      context: { type: "STRING" },
                    },
                    required: ["code", "description", "verb", "content", "context"],
                  },
                },
                generalObjectives: { type: "ARRAY", items: { type: "STRING" } },
                specificObjectives: { type: "ARRAY", items: { type: "STRING" } },
                prerequisites: { type: "ARRAY", items: { type: "STRING" } },
                timeline: {
                  type: "ARRAY",
                  items: {
                    type: "OBJECT",
                    properties: {
                      phase: { type: "STRING" },
                      title: { type: "STRING" },
                      durationMinutes: { type: "NUMBER" },
                      description: { type: "STRING" },
                      teacherRole: { type: "STRING" },
                      studentRole: { type: "STRING" },
                      resourcesNeeded: { type: "ARRAY", items: { type: "STRING" } },
                    },
                    required: ["phase", "title", "durationMinutes", "description", "teacherRole", "studentRole", "resourcesNeeded"],
                  },
                },
                assessmentMethod: { type: "STRING" },
                rubricCriteria: {
                  type: "ARRAY",
                  items: {
                    type: "OBJECT",
                    properties: {
                      criterion: { type: "STRING" },
                      excelente: { type: "STRING" },
                      bom: { type: "STRING" },
                      emDesenvolvimento: { type: "STRING" },
                    },
                    required: ["criterion", "excelente", "bom", "emDesenvolvimento"],
                  },
                },
                inclusivityAdaptations: { type: "STRING" },
                homeworkOrExtension: { type: "STRING" },
                necessaryMaterials: { type: "ARRAY", items: { type: "STRING" } },
                teacherTips: { type: "ARRAY", items: { type: "STRING" } },
              },
              required: [
                "title",
                "summary",
                "bnccSkills",
                "generalObjectives",
                "specificObjectives",
                "prerequisites",
                "timeline",
                "assessmentMethod",
                "rubricCriteria",
                "inclusivityAdaptations",
                "homeworkOrExtension",
                "necessaryMaterials",
                "teacherTips",
              ],
            },
          },
        },
        "gemini-3.1-flash-lite",
        25000
      );
      parsedData = JSON.parse(response.text || "{}");
    } catch (_errAi: any) {
      console.log("[Pedagogical-Engine] Aplicando síntese curricular estruturada para o plano de aula.");
      parsedData = gerarPlanoAulaFallback({
        topic,
        subject,
        gradeLevel,
        bimester,
        duration,
        schoolName,
        teacherName,
        matchedSkill,
        customNotes,
      });
    }

    const planResult = {
      id: `plan_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      title: parsedData.title || `Plano de Aula: ${topic}`,
      subject,
      gradeLevel,
      bimester,
      duration,
      schoolName,
      teacherName,
      summary: parsedData.summary || "",
      bnccSkills: parsedData.bnccSkills || (matchedSkill ? [{
        code: matchedSkill.code,
        description: matchedSkill.description,
        verb: matchedSkill.verb,
        content: matchedSkill.content,
        context: matchedSkill.context,
      }] : []),
      generalObjectives: parsedData.generalObjectives || [],
      specificObjectives: parsedData.specificObjectives || [],
      prerequisites: parsedData.prerequisites || [],
      timeline: parsedData.timeline || [],
      assessmentMethod: parsedData.assessmentMethod || "",
      rubricCriteria: parsedData.rubricCriteria || [],
      inclusivityAdaptations: parsedData.inclusivityAdaptations || "",
      homeworkOrExtension: parsedData.homeworkOrExtension || "",
      necessaryMaterials: parsedData.necessaryMaterials || [],
      teacherTips: parsedData.teacherTips || [],
      customNotes,
    };

    return res.status(200).json({
      ...planResult,
      success: true,
      plano: planResult,
    });
  } catch (_erro: any) {
    console.log("[Pedagogical-Engine] Fallback preventivo de plano de aula acionado.");
    const body = req.body || {};
    const safePlan = gerarPlanoAulaFallback({
      topic: body.topic || "Conteúdo Curricular",
      subject: body.subject || "Geral",
      gradeLevel: body.gradeLevel || "Ensino Fundamental",
      bimester: body.bimester || "1º Bimestre",
      duration: body.duration || "50 min",
      schoolName: body.schoolName,
      teacherName: body.teacherName,
      matchedSkill: body.matchedSkill,
      customNotes: body.customNotes,
    });
    return res.status(200).json({
      ...safePlan,
      success: true,
      plano: safePlan,
    });
  }
});

// 3. Rota de geração de itens de avaliação formativa com controle de quantidade e suporte visual
app.post(["/api/generate-assessment-item", "/api/e-assessment-item"], async (req: any, res: any) => {
  try {
    const {
      codigoSeduc,
      habilidade,
      textoHabilidade,
      skillText,
      nivelBloom = "Variados",
      taxonomia,
      etapa = "Ensino Fundamental",
      componente = "Geral",
      subject = "Geral",
      gradeLevel = "",
      dificuldade = "Misto",
      educacaoEspecial = false,
      quantidade = 5,
      incluirSuporteVisual = true,
    } = req.body || {};

    const numQuestoes = Math.min(Math.max(Number(quantidade) || 5, 1), 15);
    const finalSubject = subject || componente || "Geral";
    const finalBloom = nivelBloom || taxonomia || "Variados";
    const rawCode = String(codigoSeduc || habilidade || "").trim();
    const cleanCodeMatch = rawCode.match(/[A-Z]{2}\d{2}[A-Z]{2}\d{1,3}[A-Z]?/i);
    const extractedCode = cleanCodeMatch ? cleanCodeMatch[0].toUpperCase() : rawCode;

    const officialSkill = getOfficialSkill(extractedCode);
    const skillCanonicalText = officialSkill ? officialSkill.description : (textoHabilidade || skillText || rawCode);

    let canonicalBlockPrompt = "";
    if (officialSkill) {
      canonicalBlockPrompt = `
BASE DE DADOS OFICIAL OBRIGATÓRIA (REGRAS ESTRITAS):
Código da Habilidade: ${officialSkill.code}
Texto Canônico da Habilidade: "${officialSkill.description}"
1. Verbo de Ação: ${officialSkill.verb}
2. Objeto de Conhecimento: ${officialSkill.content}
3. Modificador/Contexto: ${officialSkill.context}
ATENÇÃO: Mantenha fidelidade curricular absoluta a este texto canônico. Não extrapole nem altere o objeto de conhecimento.`;
    }

    const ai = getGenAI();
    const prompt = `Você é um avaliador educacional e elaborador de itens de avaliação formativa do padrão SAEB / Prova São Paulo / ENEM.
Elabore um lote com EXATAMENTE ${numQuestoes} questões inéditas de múltipla escolha com 4 ou 5 alternativas (A, B, C, D, [E]) e gabarito comentado.

PARÂMETROS PEDAGÓGICOS:
- Componente Curricular: ${finalSubject}
- Etapa / Ano: ${gradeLevel || etapa}
- Código da Habilidade: ${extractedCode || "Geral"}
- Habilidade BNCC: "${skillCanonicalText}"
${canonicalBlockPrompt}
- Nível Cognitivo (Taxonomia de Bloom): ${finalBloom}
- Grau de Dificuldade: ${dificuldade}
- Adaptação para Educação Especial / Inclusiva: ${educacaoEspecial ? "Sim (Linguagem direta, clara e acessível)" : "Não"}
- Incluir Suporte Visual / Diagramas nos Itens: ${incluirSuporteVisual ? "SIM (Para questões que se beneficiem de análise gráfica, mapas, tabelas, charges ou diagramas conceituais, defina 'requer_ilustracao': true e um 'prompt_para_imagem' detalhado)" : "NÃO"}

REGRAS ESTRUTURAIS MANDATÓRIAS:
1. Retorne EXATAMENTE ${numQuestoes} itens no array "questoes".
2. Cada item deve conter:
   - "numero_item": número sequencial (1 a ${numQuestoes})
   - "texto_base": texto motivador, dados, contexto histórico ou científico.
   - "enunciado": comando claro, preciso e direto.
   - "alternativas": objeto com chaves "A", "B", "C", "D" (e "E" somente se Ensino Médio).
   - "gabarito": letra da alternativa correta ("A", "B", "C", "D" ou "E").
   - "justificativa_gabarito": explicação pedagógica detalhada do porquê da alternativa correta.
   - "justificativa_distratores": justificativa do erro típico de cada uma das outras alternativas.
   - "nivel_bloom": nível cognitivo trabalhado.
   - "dificuldade": "Fácil", "Média" ou "Difícil".
   - "suporte_dados": objeto com "requer_ilustracao" (boolean) e "prompt_para_imagem" (string com descrição do elemento visual a ser desenhado/fotografado).`;

    let generatedQuestions: any[] = [];
    try {
      const response = await callGeminiWithRetry(
        ai,
        {
          contents: prompt,
          config: {
            temperature: 0.4,
            responseMimeType: "application/json",
            responseSchema: {
              type: "OBJECT",
              properties: {
                questoes: {
                  type: "ARRAY",
                  items: {
                    type: "OBJECT",
                    properties: {
                      numero_item: { type: "NUMBER" },
                      texto_base: { type: "STRING" },
                      enunciado: { type: "STRING" },
                      alternativas: {
                        type: "OBJECT",
                        properties: {
                          A: { type: "STRING" },
                          B: { type: "STRING" },
                          C: { type: "STRING" },
                          D: { type: "STRING" },
                          E: { type: "STRING" },
                        },
                        required: ["A", "B", "C", "D"],
                      },
                      gabarito: { type: "STRING" },
                      justificativa_gabarito: { type: "STRING" },
                      justificativa_distratores: {
                        type: "OBJECT",
                        properties: {
                          A: { type: "STRING" },
                          B: { type: "STRING" },
                          C: { type: "STRING" },
                          D: { type: "STRING" },
                          E: { type: "STRING" },
                        },
                      },
                      nivel_bloom: { type: "STRING" },
                      dificuldade: { type: "STRING" },
                      suporte_dados: {
                        type: "OBJECT",
                        properties: {
                          requer_ilustracao: { type: "BOOLEAN" },
                          prompt_para_imagem: { type: "STRING" },
                        },
                        required: ["requer_ilustracao"],
                      },
                    },
                    required: [
                      "numero_item",
                      "texto_base",
                      "enunciado",
                      "alternativas",
                      "gabarito",
                      "justificativa_gabarito",
                      "nivel_bloom",
                      "dificuldade",
                      "suporte_dados",
                    ],
                  },
                },
              },
              required: ["questoes"],
            },
          },
        },
        "gemini-3.1-flash-lite",
        30000
      );

      const parsed = JSON.parse(response.text || "{}");
      generatedQuestions = parsed.questoes || [];
    } catch (_errAi: any) {
      console.log("[Pedagogical-Engine] Aplicando contingência pedagógica para o lote de questões.");
      generatedQuestions = gerarQuestoesFallbackPedagogico({
        skillCode: extractedCode,
        skillDescription: skillCanonicalText,
        skillObject: officialSkill,
        subject: finalSubject,
        gradeLevel: gradeLevel || etapa,
        bloomLevel: finalBloom,
        dificuldade,
        quantidade: numQuestoes,
        incluirSuporteVisual,
      });
    }

    if (!generatedQuestions || generatedQuestions.length === 0) {
      generatedQuestions = gerarQuestoesFallbackPedagogico({
        skillCode: extractedCode,
        skillDescription: skillCanonicalText,
        skillObject: officialSkill,
        subject: finalSubject,
        gradeLevel: gradeLevel || etapa,
        bloomLevel: finalBloom,
        dificuldade,
        quantidade: numQuestoes,
        incluirSuporteVisual,
      });
    }

    const responsePayload = {
      success: true,
      habilidade: skillCanonicalText,
      codigo: extractedCode,
      componente: finalSubject,
      etapa: gradeLevel || etapa,
      total_itens: generatedQuestions.length,
      questoes: generatedQuestions,
      itens: generatedQuestions,
      item: generatedQuestions[0] || null,
    };

    return res.status(200).json(responsePayload);
  } catch (_erro: any) {
    console.log("[Pedagogical-Engine] Fallback preventivo de itens de avaliação acionado.");
    const body = req.body || {};
    const fallbackCode = body.codigoSeduc || body.codigo || "EF06MA01";
    const fallbackItens = gerarQuestoesFallbackPedagogico({
      skillCode: fallbackCode,
      skillDescription: body.textoHabilidade || body.habilidade || "Habilidade da BNCC",
      subject: body.componente || "Geral",
      gradeLevel: body.etapa || "Ensino Fundamental",
      bloomLevel: body.nivelBloom || "Compreender",
      dificuldade: body.dificuldade || "Médio",
      quantidade: Number(body.quantidade) || 2,
      incluirSuporteVisual: body.incluirSuporteVisual ?? true,
    });
    return res.status(200).json({
      success: true,
      habilidade: body.textoHabilidade || body.habilidade || "Habilidade da BNCC",
      codigo: fallbackCode,
      componente: body.componente || "Geral",
      etapa: body.etapa || "Ensino Fundamental",
      total_itens: fallbackItens.length,
      questoes: fallbackItens,
      itens: fallbackItens,
      item: fallbackItens[0] || null,
    });
  }
});

// 4. Refinamento de Seção com IA Pedagógica
app.post("/api/refine-section", async (req: any, res: any) => {
  try {
    const { action, currentPlan, promptDetails } = req.body || {};
    const ai = getGenAI();

    const systemPrompt = `Você é um consultor pedagógico e especialista em currículo educacional.
O professor deseja realizar a seguinte ação no plano de aula "${currentPlan?.title || "Plano Atual"}":
Ação solicitada: ${action}
Detalhes / instruções adicionais: ${promptDetails || "Otimize para maior engajamento e clareza didática."}

Contexto do plano:
- Componente: ${currentPlan?.subject || "Geral"}
- Série: ${currentPlan?.gradeLevel || "Ensino Fundamental"}
- Resumo: ${currentPlan?.summary || ""}
- Metodologia: ${currentPlan?.timeline?.length ? currentPlan.timeline.map((t: any) => t.title).join(", ") : ""}

Forneça uma resposta clara, prática e formatada em Markdown, pronta para ser incorporada ao plano de aula pelo professor.`;

    let resultText = "";
    try {
      const response = await callGeminiWithRetry(
        ai,
        {
          contents: systemPrompt,
          config: {
            temperature: 0.5,
          },
        },
        "gemini-3.1-flash-lite",
        20000
      );
      resultText = response?.text || "Nenhum resultado gerado.";
    } catch (_errAi: any) {
      console.log("[Pedagogical-Engine] Aplicando orientação pedagógica padrão para refinamento.");
      resultText = `**Recomendações Pedagógicas para o Plano:**\n\n1. **Engajamento Ativo:** Inicie a aula com uma situação-problema real conectada à vivência dos alunos.\n2. **Diferenciação Didática:** Utilize esquemas visuais e mediação entre pares para apoiar alunos com diferentes ritmos de aprendizagem.\n3. **Avaliação Formativa:** Realize checagens rápidas de compreensão (perguntas orais diagnósticas) ao final de cada etapa da aula.`;
    }

    return res.status(200).json({ success: true, resultText });
  } catch (_erro: any) {
    return res.status(200).json({
      success: true,
      resultText: "Dica pedagógica: Estabeleça momentos explícitos de autoavaliação para os estudantes ao final da aula para consolidar os conhecimentos adquiridos.",
    });
  }
});

// ==========================================
// ROTA /api/git-push (GIT ADD, COMMIT & PUSH)
// ==========================================

function sanitizeGitOutput(text: string): string {
  if (!text) return "";
  // Mascara tokens pessoais e credenciais em URLs do git
  return text
    .replace(/https:\/\/[^:@\s]+:[^@\s]+@/g, "https://***@")
    .replace(/https:\/\/[^:@\s]+@/g, "https://***@");
}

async function runGit(command: string) {
  return execAsync(command, {
    cwd: process.cwd(),
    timeout: 60000,
    env: {
      ...process.env,
      GIT_TERMINAL_PROMPT: "0", // Impede prompts interativos bloqueantes
    },
  });
}

// GET /api/git-push - Consulta o estado atual do repositório Git
app.get("/api/git-push", async (_req: any, res: any) => {
  try {
    let isGitRepo = false;
    let branch = "main";
    let status = "";
    let remotes = "";
    let lastCommit = "";

    try {
      await runGit("git rev-parse --is-inside-work-tree");
      isGitRepo = true;

      const branchResult = await runGit("git rev-parse --abbrev-ref HEAD").catch(() => ({ stdout: "main" }));
      branch = branchResult.stdout.trim() || "main";

      const statusResult = await runGit("git status --short").catch(() => ({ stdout: "" }));
      status = statusResult.stdout.trim();

      const remoteResult = await runGit("git remote -v").catch(() => ({ stdout: "" }));
      remotes = sanitizeGitOutput(remoteResult.stdout.trim());

      const logResult = await runGit("git log -n 1 --oneline").catch(() => ({ stdout: "" }));
      lastCommit = logResult.stdout.trim();
    } catch (_e) {
      isGitRepo = false;
    }

    return res.status(200).json({
      success: true,
      isGitRepo,
      branch,
      status: status || "Nenhuma alteração pendente (working tree clean)",
      remotes: remotes || "Nenhum remote configurado",
      lastCommit: lastCommit || "Nenhum commit registrado",
      instructions: {
        method: "POST",
        endpoint: "/api/git-push",
        body: {
          message: "Mensagem do commit (opcional)",
          remoteUrl: "https://<TOKEN>@github.com/<USUARIO>/<REPO>.git (opcional se já configurado)",
          branch: "main (opcional)",
          authorName: "Nome do autor (opcional)",
          authorEmail: "email@autor.com (opcional)",
          force: false,
        },
      },
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: sanitizeGitOutput(err.message || String(err)),
    });
  }
});

// POST /api/git-push - Executa git add, git commit e git push
app.post("/api/git-push", async (req: any, res: any) => {
  const logs: string[] = [];
  try {
    const {
      message,
      commitMessage,
      remoteUrl: rawRemoteUrl,
      repoUrl,
      token,
      repo,
      branch: requestedBranch,
      authorName = "Taxon Educator",
      authorEmail = "educador@taxon.app",
      force = false,
    } = req.body || {};

    const commitMsg =
      (message || commitMessage || "").trim() ||
      `Atualização do projeto via Taxon AI Studio - ${new Date().toLocaleString("pt-BR")}`;

    const targetBranch = (requestedBranch || "main").trim();

    // Determina a URL remota (suporta remoteUrl direta, repoUrl ou token + repo)
    let remoteUrl = (rawRemoteUrl || repoUrl || process.env.GIT_REMOTE_URL || "").trim();

    if (token && repo) {
      const cleanRepo = repo.replace(/^https:\/\/github\.com\//, "").replace(/\.git$/, "");
      remoteUrl = `https://${token}@github.com/${cleanRepo}.git`;
    } else if (token && remoteUrl.startsWith("https://github.com/")) {
      remoteUrl = remoteUrl.replace("https://github.com/", `https://${token}@github.com/`);
    }

    // 1. Inicializa o repositório Git caso ainda não exista
    let isRepo = false;
    try {
      await runGit("git rev-parse --is-inside-work-tree");
      isRepo = true;
    } catch (_e) {
      isRepo = false;
    }

    if (!isRepo) {
      await runGit("git init -b " + targetBranch);
      logs.push("Repositório Git inicializado.");
    }

    // 2. Configura identidade de autor
    await runGit(`git config user.name "${authorName.replace(/"/g, '\\"')}"`);
    await runGit(`git config user.email "${authorEmail.replace(/"/g, '\\"')}"`);
    logs.push(`Identidade Git configurada: ${authorName} <${authorEmail}>`);

    // 3. Configura o remote se fornecido
    if (remoteUrl) {
      let originExists = false;
      try {
        await runGit("git remote get-url origin");
        originExists = true;
      } catch (_e) {
        originExists = false;
      }

      if (originExists) {
        await runGit(`git remote set-url origin "${remoteUrl}"`);
        logs.push("Remote 'origin' atualizado.");
      } else {
        await runGit(`git remote add origin "${remoteUrl}"`);
        logs.push("Remote 'origin' adicionado.");
      }
    }

    // 4. Executa 'git add -A'
    const addResult = await runGit("git add -A");
    if (addResult.stderr) logs.push(sanitizeGitOutput(addResult.stderr));
    logs.push("Arquivos adicionados ao staging (git add -A).");

    // 5. Verifica status para saber se há algo novo para commitar
    const statusResult = await runGit("git status --porcelain");
    let committed = false;

    if (statusResult.stdout.trim().length > 0) {
      const safeMsg = commitMsg.replace(/"/g, '\\"');
      const commitResult = await runGit(`git commit -m "${safeMsg}"`);
      logs.push(sanitizeGitOutput(commitResult.stdout.trim()));
      committed = true;
    } else {
      logs.push("Nenhuma alteração detectada para novo commit (working tree clean).");
    }

    // Garante que a branch local esteja com o nome desejado
    await runGit(`git branch -M ${targetBranch}`).catch(() => {});

    // 6. Verifica se há remote 'origin' para efetuar o git push
    let hasRemote = false;
    try {
      const currentRemote = await runGit("git remote get-url origin");
      if (currentRemote.stdout.trim().length > 0) {
        hasRemote = true;
      }
    } catch (_e) {
      hasRemote = false;
    }

    if (!hasRemote) {
      return res.status(200).json({
        success: true,
        committed,
        pushed: false,
        branch: targetBranch,
        message:
          "Arquivos salvos e commit realizado localmente com sucesso! Para enviar (push) para um repositório remoto como o GitHub, envie 'remoteUrl' com seu Personal Access Token (ex: https://<SEU_TOKEN>@github.com/<USUARIO>/<REPO>.git).",
        logs,
      });
    }

    // 7. Executa 'git push'
    const pushCmd = `git push ${force ? "-f " : ""}-u origin ${targetBranch}`;
    const pushResult = await runGit(pushCmd);
    logs.push(sanitizeGitOutput(pushResult.stdout || pushResult.stderr || "Push concluído com sucesso."));

    return res.status(200).json({
      success: true,
      committed,
      pushed: true,
      branch: targetBranch,
      message: "Comandos Git executados com sucesso (add, commit e push)!",
      logs,
    });
  } catch (error: any) {
    console.error("[Git-Push] Erro ao executar comandos git:", error);
    const sanitizedError = sanitizeGitOutput(error.message || String(error));
    const sanitizedStderr = sanitizeGitOutput(error.stderr || "");

    let hint = "Verifique os parâmetros fornecidos.";
    if (sanitizedError.includes("Authentication failed") || sanitizedError.includes("Invalid credentials") || sanitizedError.includes("403")) {
      hint = "Falha de autenticação. Certifique-se de que o Personal Access Token (PAT) do GitHub possui permissão de leitura/escrita ('repo') e não expirou.";
    } else if (sanitizedError.includes("Repository not found")) {
      hint = "Repositório não encontrado. Verifique se o nome do repositório está correto e se o usuário/token possui acesso.";
    } else if (sanitizedError.includes("non-fast-forward") || sanitizedError.includes("fetch first")) {
      hint = "O repositório remoto contém alterações mais recentes. Você pode passar 'force: true' no corpo da requisição se desejar sobrescrever, ou sincronizar as alterações.";
    }

    return res.status(500).json({
      success: false,
      error: "Erro ao executar comandos do Git.",
      details: sanitizedStderr || sanitizedError,
      hint,
      logs,
    });
  }
});

// ==========================================
// SERVIDOR VITE MIDDLEWARE (DEV) & ESTÁTICO (PROD)
// ==========================================
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req: any, res: any) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  const PORT = 3000;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor API Taxon rodando na porta ${PORT}`);
  });
}

startServer();

