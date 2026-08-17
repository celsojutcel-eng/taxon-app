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
