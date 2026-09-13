export interface BNCCSkill {
  code: string;
  description: string;
  verb?: string; // 1. [VERBO(S)] - Ação cognitiva principal esperada do aluno
  content?: string; // 2. [OBJETO DE CONHECIMENTO] - O conteúdo ou conceito central abordado
  context?: string; // 3. [MODIFICADOR/CONTEXTO] - Condições, aprofundamentos, finalidades ou ferramentas utilizadas
}

export interface TimelineItem {
  id?: string;
  phase: string; // Ex: Introdução, Desenvolvimento, Prática Guia, Fechamento
  title: string;
  durationMinutes: number;
  description: string;
  teacherRole: string;
  studentRole: string;
  resourcesNeeded: string[];
}

export interface RubricCriterion {
  criterion: string;
  excelente: string;
  bom: string;
  emDesenvolvimento: string;
}

export interface BloomLevelPlan {
  level: number;
  levelName: string;
  status: "pending" | "in_progress" | "completed";
  notes?: string;
  formativeEvidence?: string;
  recoveryNotes?: string;
  recompositionNotes?: string;
  completedAt?: string;
}

export interface LessonPlan {
  id: string;
  createdAt: string;
  updatedAt?: string;
  title: string;
  subject: string;
  gradeLevel: string;
  bimester?: string;
  duration: string;
  schoolName?: string;
  teacherName?: string;
  summary: string;
  bnccSkills: BNCCSkill[];
  generalObjectives: string[];
  specificObjectives: string[];
  prerequisites: string[];
  timeline: TimelineItem[];
  assessmentMethod: string;
  rubricCriteria: RubricCriterion[];
  inclusivityAdaptations: string;
  homeworkOrExtension: string;
  necessaryMaterials: string[];
  teacherTips: string[];
  customNotes?: string;
  currentBloomLevel?: number;
  targetBloomLevel?: number;
  bloomPlans?: Record<number, BloomLevelPlan>;
}

export interface GeneratorFormData {
  subject: string;
  gradeLevel: string;
  bimester?: string;
  duration: string;
  topic: string;
  learningObjectives?: string;
  methodology: string;
  bnccCompetencies: string;
  schoolName: string;
  teacherName: string;
  customNotes: string;
  activeBloomLevel?: number;
  bloomLevelPlans?: Record<number, BloomLevelPlan>;
}

export interface VisualResourceData {
  tipo: "obra_arte" | "charge_hq" | "mapa" | "grafico" | "tabela" | "fotografia" | "esquema_geometrico" | "nenhum";
  titulo: string;
  autor_ou_fonte: string;
  descricao_visual: string;
  imagem_url?: string;
  tabela_markdown?: string;
  aspect_ratio?: "1:1" | "4:3" | "16:9" | "3:4";
}

export interface AssessmentItemData {
  numero_item?: number;
  suporte_dados?: {
    requer_ilustracao?: boolean;
    prompt_para_imagem?: string;
  };
  texto_base: string;
  enunciado: string;
  alternativas: {
    A: string;
    B: string;
    C: string;
    D: string;
    E?: string;
    [key: string]: string | undefined;
  };
  gabarito: "A" | "B" | "C" | "D" | "E" | string;
  justificativa_gabarito: string;
  justificativa_distratores?: {
    A?: string;
    B?: string;
    C?: string;
    D?: string;
    E?: string;
    [key: string]: string | undefined;
  };
  nivel_bloom?: string;
  dificuldade?: "Fácil" | "Médio" | "Difícil" | string;
  adaptada_educacao_especial?: boolean;
  recurso_acessibilidade?: string;
  recurso_visual?: VisualResourceData;
}

export interface AssessmentApiRequest {
  codigoSeduc: string;
  nivelBloom?: string;
  etapa?: string;
  componente?: string;
  subject?: string;
  textoHabilidade?: string;
  skillText?: string;
  gradeLevel?: string;
  tema?: string;
  topic?: string;
  dificuldade?: string;
  educacaoEspecial?: boolean;
  quantidade?: number;
  incluirSuporteVisual?: boolean;
}

export interface AssessmentApiResponse {
  habilidade?: string;
  componente?: string;
  etapa?: string;
  total_itens?: number;
  questoes?: AssessmentItemData[];
  itens?: AssessmentItemData[];
  metadados?: {
    habilidade_seduc: string;
    nivel_bloom?: string;
    etapa: string;
    componente?: string;
    dificuldade_solicitada?: string;
    educacao_especial?: boolean;
    suporte_visual_solicitado?: string;
    total_itens: number;
  };
  error?: string;
  message?: string;
}

export interface AssessmentResponse {
  metadados?: {
    habilidade_seduc: string;
    nivel_bloom?: string;
    etapa: string;
    componente?: string;
    dificuldade_solicitada?: string;
    educacao_especial?: boolean;
    suporte_visual_solicitado?: string;
    total_itens: number;
  };
  itens?: AssessmentItemData[];
  questoes?: AssessmentItemData[];
}
