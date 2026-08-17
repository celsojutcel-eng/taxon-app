import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Lazy init Gemini AI
function getGenAI() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is not defined.");
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Endpoint: Generate Full Lesson Plan
app.post("/api/generate-lesson-plan", async (req, res) => {
  try {
    const {
      subject,
      gradeLevel,
      bimester,
      duration,
      topic,
      learningObjectives,
      methodology,
      bnccCompetencies,
      customNotes,
      schoolName,
      teacherName,
      activeBloomLevel,
      bloomLevelPlans,
    } = req.body;

    if (!topic || !subject) {
      return res.status(400).json({ error: "O tema e o componente curricular são obrigatórios." });
    }

    const ai = getGenAI();

    const prompt = `Você é um consultor pedagógico e especialista em planos de aula alinhados à BNCC (Base Nacional Comum Curricular) e aos currículos estaduais e municipais do Brasil.
Crie um plano de aula completo, prático, detalhado e altamente engajador.

REGRA CRÍTICA DE FIDELIDADE CURRICULAR:
Antes de preencher os blocos de verbo, objeto e modificador, busque o texto oficial exato da habilidade correspondente ao código inserido (sem misturar com outras séries ou enunciados). Só então divida o texto real da habilidade nos blocos visuais correspondentes:
1. [VERBO(S)] - Ação cognitiva principal esperada do aluno (sem cortar verbos compostos, como 'Identificar e analisar', 'Resolver e elaborar problemas', 'Quantificar e estabelecer relações', 'Investigar e analisar', 'Caracterizar e comparar', 'Posicionar-se criticamente').
2. [OBJETO DE CONHECIMENTO] - O conteúdo ou conceito central abordado, mantendo a integridade textual e precisão conceitual da BNCC.
3. [MODIFICADOR/CONTEXTO] - Condições, aprofundamentos, finalidades ou ferramentas especificadas na habilidade oficial.

Atenção à correspondência estrita de ano/série e componente curricular:
- EF06 para 6º Ano do Ensino Fundamental
- EF07 para 7º Ano do Ensino Fundamental
- EF08 para 8º Ano do Ensino Fundamental
- EF09 para 9º Ano do Ensino Fundamental
- EM13 para Ensino Médio
Nunca misture códigos, anos ou enunciados de outras séries.

EXCEÇÃO DE BANCO DE DADOS (BNCC OFICIAL):
Para a habilidade EF08MA22, utilize OBRIGATORIAMENTE este texto e decomposição oficial:
- Código: EF08MA22
- Texto Completo: "Calcular a probabilidade de eventos, com base na construção do espaço amostral, utilizando o princípio multiplicativo, e reconhecer que a soma das probabilidades de todos os elementos do espaço amostral é igual a 1."
- Verbo(s): "Calcular e Reconhecer"
- Objeto de Conhecimento: "A probabilidade de eventos e a soma das probabilidades dos elementos do espaço amostral"
- Modificador/Contexto: "Com base na construção do espaço amostral e utilizando o princípio multiplicativo"
(Proibido utilizar enunciados de outras séries, como experimentos aleatórios de anos anteriores).

Dados do Plano:
- Componente Curricular: ${subject || "Geral"}
- Série / Ano / Nível: ${gradeLevel || "Ensino Fundamental"}
- Bimestre: ${bimester || "Não especificado"}
- Duração total: ${duration || "50 minutos"}
- Tema Principal: ${topic}
${learningObjectives ? `- Objetivos de Aprendizagem Alvo: ${learningObjectives}` : ""}
- Metodologia de Ensino: ${methodology || "Aprendizagem Ativa / Expositiva Dialogada"}
- Habilidades BNCC requeridas: ${bnccCompetencies || "Sugerir os códigos e habilidades BNCC oficiais mais aplicáveis ao tema e série"}
- Observações adicionais do professor: ${customNotes || "Nenhuma"}
- Nome da Escola: ${schoolName || ""}
- Nome do Professor: ${teacherName || ""}

Por favor, responda estritamente em JSON estruturado com o seguinte esquema.
Certifique-se de que todas as etapas de tempo (timeline) somem a duração total aproximada de ${duration || "50 minutos"}.
Utilize linguagem clara, motivadora e pronta para uso em sala de aula.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "Título atraente da aula" },
            subject: { type: Type.STRING },
            gradeLevel: { type: Type.STRING },
            duration: { type: Type.STRING },
            schoolName: { type: Type.STRING },
            teacherName: { type: Type.STRING },
            summary: { type: Type.STRING, description: "Resumo executivo da aula em 2-3 frases" },
            bnccSkills: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  code: { type: Type.STRING, description: "Ex: (EF06MA01) ou (EM13MAT307)" },
                  description: { type: Type.STRING, description: "Descrição oficial da habilidade" },
                  verb: { type: Type.STRING, description: "1. [VERBO(S)] - Ação cognitiva principal esperada do aluno" },
                  content: { type: Type.STRING, description: "2. [OBJETO DE CONHECIMENTO] - Conteúdo ou conceito central abordado" },
                  context: { type: Type.STRING, description: "3. [MODIFICADOR/CONTEXTO] - Condições, aprofundamentos, finalidades ou ferramentas utilizadas" },
                },
                required: ["code", "description"],
              },
            },
            generalObjectives: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Objetivos gerais da aula",
            },
            specificObjectives: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Objetivos específicos mensuráveis",
            },
            prerequisites: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Conhecimentos prévios esperados dos alunos",
            },
            timeline: {
              type: Type.ARRAY,
              description: "Passo a passo cronológico da aula",
              items: {
                type: Type.OBJECT,
                properties: {
                  phase: { type: Type.STRING, description: "Ex: Introdução, Desenvolvimento, Prática Guia, Fechamento" },
                  title: { type: Type.STRING, description: "Nome da atividade ou etapa" },
                  durationMinutes: { type: Type.INTEGER, description: "Duração estimada em minutos" },
                  description: { type: Type.STRING, description: "Instrução detalhada de como executar" },
                  teacherRole: { type: Type.STRING, description: "O que o professor faz nessa etapa" },
                  studentRole: { type: Type.STRING, description: "O que os alunos fazem nessa etapa" },
                  resourcesNeeded: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                },
                required: ["phase", "title", "durationMinutes", "description", "teacherRole", "studentRole"],
              },
            },
            assessmentMethod: {
              type: Type.STRING,
              description: "Como a aprendizagem será avaliada (formativa/sumativa)",
            },
            rubricCriteria: {
              type: Type.ARRAY,
              description: "Rubrica simples de avaliação",
              items: {
                type: Type.OBJECT,
                properties: {
                  criterion: { type: Type.STRING },
                  excelente: { type: Type.STRING },
                  bom: { type: Type.STRING },
                  emDesenvolvimento: { type: Type.STRING },
                },
                required: ["criterion", "excelente", "bom", "emDesenvolvimento"],
              },
            },
            inclusivityAdaptations: {
              type: Type.STRING,
              description: "Estratégias para alunos com TDAH, autismo ou ritmos diferentes de aprendizagem",
            },
            homeworkOrExtension: {
              type: Type.STRING,
              description: "Desafio extra ou atividade para casa",
            },
            necessaryMaterials: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Lista de materiais e recursos tecnológicos/físicos",
            },
            teacherTips: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Dicas de gestão de sala de aula e potenciais imprevistos",
            },
          },
          required: [
            "title",
            "subject",
            "gradeLevel",
            "duration",
            "summary",
            "bnccSkills",
            "generalObjectives",
            "specificObjectives",
            "timeline",
            "assessmentMethod",
            "necessaryMaterials",
          ],
        },
      },
    });

    const jsonText = response.text || "{}";
    const parsedData = JSON.parse(jsonText);

    // Attach server generated timestamp & id and school/teacher details
    const result = {
      id: "plan_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
      createdAt: new Date().toISOString(),
      schoolName: schoolName || "E.E. Pe. Sabóia de Medeiros",
      teacherName: teacherName || "",
      currentBloomLevel: activeBloomLevel || 1,
      bloomPlans: bloomLevelPlans || {},
      ...parsedData,
    };

    res.json(result);
  } catch (error: any) {
    console.error("Erro ao gerar plano de aula:", error);
    res.status(500).json({
      error: error?.message || "Falha ao gerar plano de aula com Inteligência Artificial.",
    });
  }
});

// Endpoint: AI Refine / Generate Extras
app.post("/api/refine-section", async (req, res) => {
  try {
    const { action, currentPlan, promptDetails } = req.body;
    const ai = getGenAI();

    let systemPrompt = "Você é um assistente pedagógico especialista. Responda em Português do Brasil com foco em clareza e aplicação prática.";

    let prompt = "";
    if (action === "generate_quiz") {
      prompt = `Com base neste plano de aula sobre "${currentPlan?.topic || currentPlan?.title}", crie 5 questões de fixação/avaliação formativa (com gabarito e explicação pedagógica). ${promptDetails || ""}`;
    } else if (action === "adapt_inclusion") {
      prompt = `Ofereça 3 a 5 estratégias práticas e específicas de inclusão para este plano de aula sobre "${currentPlan?.topic || currentPlan?.title}" para atender alunos neurodivergentes (ex: Autismo, TDAH, Dislexia) e com necessidades visuais/auditivas. ${promptDetails || ""}`;
    } else if (action === "expand_activity") {
      prompt = `Forneça um roteiro passo a passo com falas sugeridas e um exemplo prático para a atividade: "${promptDetails || "Atividade Principal"}".`;
    } else if (action === "suggest_digital_tools") {
      prompt = `Sugira 4 ferramentas digitais gratuitas (ex: Kahoot, Mentimeter, Padlet, Canva, PhET) e como usá-las especificamente nesta aula sobre "${currentPlan?.topic || currentPlan?.title}".`;
    } else {
      prompt = `Aprimore o seguinte trecho do plano de aula de acordo com este pedido: ${promptDetails}.\n\nPlano atual: ${JSON.stringify(currentPlan).substring(0, 1500)}`;
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        systemInstruction: systemPrompt,
      },
    });

    res.json({ resultText: response.text });
  } catch (error: any) {
    console.error("Erro ao refinar seção:", error);
    res.status(500).json({ error: error?.message || "Erro ao processar requisição com IA." });
  }
});

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
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
