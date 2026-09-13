import React, { useState } from "react";
import { GeneratorFormData } from "../types";
import {
  SUBJECT_OPTIONS,
  GRADE_OPTIONS,
  BIMESTER_OPTIONS,
  METHODOLOGY_OPTIONS,
  DURATION_OPTIONS,
  TEACHER_OPTIONS,
  getSuggestedLessons,
  getLessonObjectives,
  getLessonBNCC,
  getLessonBNCCList,
  parseBNCCDetails,
  parseAllBNCCDetails,
} from "../data/bnccSuggestions";
import { Sparkles, BookOpen, Clock, School, User, FileText, Compass, Calendar, ListFilter, Target } from "lucide-react";
import { BloomPyramidSection } from "./BloomPyramidSection";
import { AssessmentGeneratorSection } from "./AssessmentGeneratorSection";
import { TaxonLogo } from "./TaxonLogo";

interface GeneratorFormProps {
  onSubmit: (data: GeneratorFormData) => void;
  isLoading: boolean;
}

export const GeneratorForm: React.FC<GeneratorFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<GeneratorFormData>({
    subject: "História",
    gradeLevel: "Ensino Fundamental II - 6º Ano A",
    bimester: "4º Bimestre",
    duration: "1 aula - 50 minutos",
    topic: "",
    learningObjectives: "",
    methodology: "",
    bnccCompetencies: "",
    schoolName: "E.E. Pe. Sabóia de Medeiros",
    teacherName: "",
    customNotes: "",
  });

  const suggestedLessons = getSuggestedLessons(
    formData.subject,
    formData.gradeLevel,
    formData.bimester || "4º Bimestre"
  );

  const bnccOptionsList = getLessonBNCCList(formData.topic, formData.gradeLevel, formData.subject);
  const bnccDetails = parseAllBNCCDetails(formData.bnccCompetencies);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "topic") {
      const autoObj = getLessonObjectives(value, formData.gradeLevel, formData.subject);
      const autoBncc = getLessonBNCC(value, formData.gradeLevel, formData.subject);
      setFormData((prev) => ({
        ...prev,
        topic: value,
        learningObjectives: autoObj || prev.learningObjectives,
        bnccCompetencies: autoBncc || prev.bnccCompetencies,
      }));
    } else if (name === "gradeLevel" || name === "subject" || name === "bimester") {
      const updatedGrade = name === "gradeLevel" ? value : formData.gradeLevel;
      const updatedSubject = name === "subject" ? value : formData.subject;
      const updatedBimester = name === "bimester" ? value : (formData.bimester || "4º Bimestre");

      const newSuggested = getSuggestedLessons(updatedSubject, updatedGrade, updatedBimester);
      let nextTopic = formData.topic;
      if (newSuggested.length > 0) {
        if (!newSuggested.includes(formData.topic)) {
          const matchAula = formData.topic.match(/aula\s*(\d+)/i);
          if (matchAula) {
            const foundSameNumber = newSuggested.find((l) =>
              new RegExp(`aula\\s*${matchAula[1]}\\b`, "i").test(l)
            );
            nextTopic = foundSameNumber || newSuggested[0];
          } else {
            nextTopic = newSuggested[0];
          }
        }
      }
      const autoObj = getLessonObjectives(nextTopic, updatedGrade, updatedSubject);
      const autoBncc = getLessonBNCC(nextTopic, updatedGrade, updatedSubject);

      setFormData((prev) => ({
        ...prev,
        [name]: value,
        topic: nextTopic,
        learningObjectives: autoObj || prev.learningObjectives,
        bnccCompetencies: autoBncc || prev.bnccCompetencies,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.topic.trim()) {
      alert("Por favor, informe ou selecione o título/tema da aula.");
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-900/90 via-slate-900 to-slate-900 p-6 sm:p-8 border-b border-slate-800 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <TaxonLogo size="md" variant="dark" showTagline={true} />
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 self-start sm:self-auto">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>IA Pedagógica • BNCC 2026</span>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-100 mt-2">
          Crie seu Plano de Aula Estruturado
        </h2>
        <p className="text-sm text-slate-300 mt-1 max-w-2xl">
          Selecione o componente e as habilidades curriculares para alinhar a Taxonomia de Bloom, avaliação formativa e cronograma em PDF.
        </p>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 text-slate-200">
        {/* School & Teacher Information (Instituição & Professor) */}
        <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              <School className="w-3.5 h-3.5 inline mr-1 text-indigo-400" />
              Nome da Escola / Instituição
            </label>
            <input
              type="text"
              name="schoolName"
              placeholder="Ex: E.E. Pe. Sabóia de Medeiros"
              value={formData.schoolName}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              <User className="w-3.5 h-3.5 inline mr-1 text-indigo-400" />
              Nome do(a) Professor(a)
            </label>
            <select
              name="teacherName"
              value={formData.teacherName}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer font-medium"
            >
              <option value="">-- Selecione o(a) Professor(a) --</option>
              {TEACHER_OPTIONS.map((teacher) => (
                <option key={teacher} value={teacher}>
                  {teacher}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Subject / Componente Curricular */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              <BookOpen className="w-3.5 h-3.5 inline mr-1 text-indigo-400" />
              Componente Curricular
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            >
              {SUBJECT_OPTIONS.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>

          {/* Grade / Nível */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              <Compass className="w-3.5 h-3.5 inline mr-1 text-indigo-400" />
              Série / Ano Escolar
            </label>
            <select
              name="gradeLevel"
              value={formData.gradeLevel}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            >
              {GRADE_OPTIONS.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>

          {/* Bimestre */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              <Calendar className="w-3.5 h-3.5 inline mr-1 text-indigo-400" />
              Bimestre
            </label>
            <select
              name="bimester"
              value={formData.bimester || "4º Bimestre"}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            >
              {BIMESTER_OPTIONS.map((bim) => (
                <option key={bim} value={bim}>
                  {bim}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Topic Input & Dropdown Suggestions */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              <FileText className="w-3.5 h-3.5 inline mr-1 text-indigo-400" />
              Título / Tema da Aula *
            </label>
            {suggestedLessons.length > 0 && (
              <span className="text-[11px] font-semibold text-indigo-400 flex items-center">
                <ListFilter className="w-3.5 h-3.5 mr-1" />
                {suggestedLessons.length} Aulas disponíveis no currículo
              </span>
            )}
          </div>

          {/* Dropdown / Caixa suspensa de temas do currículo */}
          {suggestedLessons.length > 0 && (
            <div className="bg-indigo-950/50 border border-indigo-700/60 rounded-xl p-3 space-y-1.5 shadow-inner">
              <label className="block text-[11px] font-bold text-indigo-300 uppercase tracking-wider flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1 text-amber-400" />
                Caixa suspensa de aulas do currículo ({formData.bimester} - {formData.subject}):
              </label>
              <select
                onChange={(e) => {
                  const selected = e.target.value;
                  if (selected) {
                    const autoObj = getLessonObjectives(selected, formData.gradeLevel, formData.subject);
                    const autoBncc = getLessonBNCC(selected, formData.gradeLevel, formData.subject);
                    setFormData((prev) => ({
                      ...prev,
                      topic: selected,
                      learningObjectives: autoObj || "",
                      bnccCompetencies: autoBncc || "",
                    }));
                  }
                }}
                value={suggestedLessons.includes(formData.topic) ? formData.topic : ""}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-indigo-500/70 text-indigo-100 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400 cursor-pointer"
              >
                <option value="">-- Clique aqui para selecionar a aula na caixa suspensa --</option>
                {suggestedLessons.map((lesson, idx) => (
                  <option key={idx} value={lesson}>
                    {lesson}
                  </option>
                ))}
              </select>
            </div>
          )}

          <input
            type="text"
            name="topic"
            required
            placeholder="Digite o título/tema da aula ou escolha na caixa suspensa acima..."
            value={formData.topic}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          />
        </div>

        {/* Objetivos de Aprendizagem */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center">
              <Target className="w-3.5 h-3.5 inline mr-1 text-indigo-400" />
              Objetivos de Aprendizagem
            </label>
            {formData.learningObjectives && (
              <span className="text-[11px] font-semibold text-emerald-400 flex items-center">
                ✓ Preenchido automaticamente
              </span>
            )}
          </div>
          <textarea
            name="learningObjectives"
            rows={3}
            placeholder="Os objetivos de aprendizagem serão preenchidos automaticamente ao selecionar uma aula do currículo na caixa suspensa, ou você pode digitá-los aqui..."
            value={formData.learningObjectives || ""}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-y"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Methodology */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Metodologia de Ensino
            </label>
            <select
              name="methodology"
              value={formData.methodology}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition cursor-pointer"
            >
              <option value="">-- Selecione uma metodologia (Opcional) --</option>
              {METHODOLOGY_OPTIONS.map((meth) => (
                <option key={meth} value={meth}>
                  {meth}
                </option>
              ))}
            </select>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              <Clock className="w-3.5 h-3.5 inline mr-1 text-indigo-400" />
              Duração Total Estimada
            </label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition cursor-pointer"
            >
              {DURATION_OPTIONS.map((dur) => (
                <option key={dur} value={dur}>
                  {dur}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* BNCC Competencies */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center">
              <Sparkles className="w-3.5 h-3.5 inline mr-1 text-indigo-400" />
              Habilidades / Códigos BNCC (Opcional)
            </label>
            {formData.bnccCompetencies && (
              <span className="text-[11px] font-semibold text-emerald-400 flex items-center">
                ✓ Preenchido automaticamente
              </span>
            )}
          </div>

          {/* Caixa suspensa de Habilidades BNCC */}
          <div className="bg-indigo-950/50 border border-indigo-700/60 rounded-xl p-3 space-y-2 shadow-inner">
            <label className="block text-[11px] font-bold text-indigo-300 uppercase tracking-wider flex items-center">
              <ListFilter className="w-3.5 h-3.5 mr-1 text-amber-400" />
              Caixa suspensa de Habilidades BNCC:
            </label>
            <select
              value={formData.bnccCompetencies}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  bnccCompetencies: e.target.value,
                }));
              }}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-indigo-500/70 text-indigo-100 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400 cursor-pointer"
            >
              <option value="">-- Clique aqui para selecionar a habilidade BNCC na caixa suspensa --</option>
              {/* HISTÓRIA (EF06 a EF09) */}
              <optgroup label="História - Ensino Fundamental (BNCC Oficial)">
                <option value="EF06HI01 - Identificar diferentes formas de registro da história (fontes visuais, escritas, orais, materiais), compreendendo que elas expressam visões de diferentes grupos humanos em diferentes tempos e espaços.">
                  EF06HI01 - Identificar diferentes formas de registro da história (fontes visuais, escritas, orais, materiais)...
                </option>
                <option value="EF06HI02 - Identificar a gênese da produção da história e a importância de questionar a origem e a autoria de narrativas, discursos e fontes históricas.">
                  EF06HI02 - Identificar a gênese da produção da história e a importância de questionar a origem e a autoria de narrativas...
                </option>
                <option value="EF06HI03 - Identificar as hipóteses científicas sobre o surgimento da espécie humana e sua dispersão pelo planeta, a partir do estudo de fósseis, vestígios materiais e artefatos.">
                  EF06HI03 - Identificar as hipóteses científicas sobre o surgimento da espécie humana e sua dispersão pelo planeta...
                </option>
                <option value="EF06HI04 - Conhecer e analisar teorias científicas e mitos sobre o surgimento da espécie humana, compreendendo as diferentes visões de mundo presentes nas sociedades tradicionais e contemporâneas.">
                  EF06HI04 - Conhecer e analisar teorias científicas e mitos sobre o surgimento da espécie humana...
                </option>
                <option value="EF06HI05 - Descrever as origens e as características das primeiras civilizações e sociedades da Antiguidade (Egito, Mesopotâmia, China, Índia, Fenícia, etc.), destacando as semelhanças e diferenças entre elas.">
                  EF06HI05 - Descrever as origens e as características das primeiras civilizações e sociedades da Antiguidade...
                </option>
                <option value="EF06HI06 - Analisar o papel da religião, da escrita, das leis e do Estado nas sociedades da Antiguidade, compreendendo os processos de dominação e organização social da época.">
                  EF06HI06 - Analisar o papel da religião, da escrita, das leis e do Estado nas sociedades da Antiguidade...
                </option>
                <option value="EF06HI07 - Identificar as características das sociedades da Antiguidade Clássica (Grécia e Roma), analisando suas estruturas políticas, econômicas, sociais e culturais, bem como o legado deixado para o mundo ocidental.">
                  EF06HI07 - Identificar as características das sociedades da Antiguidade Clássica (Grécia e Roma)...
                </option>
                <option value="EF06HI08 - Descrever o processo de formação da cidadania e da democracia na Grécia Antiga (especialmente em Atenas), identificando limites, exclusões e permanências em relação aos dias atuais.">
                  EF06HI08 - Descrever o processo de formação da cidadania e da democracia na Grécia Antiga...
                </option>
                <option value="EF06HI09 - Descrever o processo de expansão territorial e militar de Roma, analisando as transformações políticas, econômicas e sociais decorrentes da formação do Império Romano.">
                  EF06HI09 - Descrever o processo de expansão territorial e militar de Roma...
                </option>
                <option value="EF06HI11 - Caracterizar o processo de consolidação do cristianismo no Império Romano, compreendendo as transformações culturais e políticas associadas a esse fenômeno histórico.">
                  EF06HI11 - Caracterizar o processo de consolidação do cristianismo no Império Romano...
                </option>
                <option value="EF06HI12 - Descrever o processo de crise e fragmentação do Império Romano do Ocidente, identificando as bases da transição para a sociedade feudal na Europa medieval.">
                  EF06HI12 - Descrever o processo de crise e fragmentação do Império Romano do Ocidente...
                </option>
                <option value="EF06HI13 - Analisar a organização política, econômica e social do feudalismo na Idade Média europeia, compreendendo as relações de suserania, vassalagem, servidão e o papel da Igreja Católica.">
                  EF06HI13 - Analisar a organização política, econômica e social do feudalismo na Idade Média europeia...
                </option>
                <option value="EF06HI14 - Identificar características das culturas pré-colombianas (maias, astecas e incas), analisando suas organizações sociais, econômicas, políticas e religiosas antes da chegada dos europeus.">
                  EF06HI14 - Identificar características das culturas pré-colombianas (maias, astecas e incas)...
                </option>
                <option value="EF07HI01 - Explicar o processo de formação e consolidação dos estados nacionais modernos na Europa, com ênfase nas monarquias absolutas em Portugal, Espanha, França e Inglaterra.">
                  EF07HI01 - Explicar o processo de formação e consolidação dos estados nacionais modernos na Europa...
                </option>
                <option value="EF07HI02 - Analisar a política mercantilista adotada pelas monarquias europeias e sua relação com a exploração colonial na América e na África.">
                  EF07HI02 - Analisar a política mercantilista adotada pelas monarquias europeias e sua relação com a exploração colonial...
                </option>
                <option value="EF07HI03 - Identificar as motivações e os desdobramentos das Grandes Navegações e dos descobrimentos marítimos dos séculos XV e XVI, destacando o pioneirismo ibérico.">
                  EF07HI03 - Identificar as motivações e os desdobramentos das Grandes Navegações e dos descobrimentos marítimos...
                </option>
                <option value="EF07HI04 - Explicar os impactos da expansão marítima e colonial europeia sobre as populações nativas da América, com foco nas violências, extermínios e resistências.">
                  EF07HI04 - Explicar os impactos da expansão marítima e colonial europeia sobre as populações nativas da América...
                </option>
                <option value="EF07HI05 - Descrever o sistema de colonização portuguesa no Brasil (capitanias hereditárias, governos-gerais, economia açucareira e escravidão indígena e africana).">
                  EF07HI05 - Descrever o sistema de colonização portuguesa no Brasil...
                </option>
                <option value="EF07HI06 - Analisar a organização da sociedade colonial brasileira, destacando a economia do açúcar, o papel da Igreja, o trabalho escravo e as formas de resistência negra e indígena.">
                  EF07HI06 - Analisar a organização da sociedade colonial brasileira, destacando a economia do açúcar...
                </option>
                <option value="EF07HI07 - Descrever a expansão territorial do Brasil colonial para o interior, analisando as expedições de bandeirantes, as missões jesuíticas e a pecuária no sertão.">
                  EF07HI07 - Descrever a expansão territorial do Brasil colonial para o interior...
                </option>
                <option value="EF07HI08 - Analisar o processo de descoberta e exploração do ouro nas regiões de Minas Gerais, Goiás e Mato Grosso, e suas consequências urbanas, econômicas e demográficas.">
                  EF07HI08 - Analisar o processo de descoberta e exploração do ouro nas regiões de Minas Gerais, Goiás e Mato Grosso...
                </option>
                <option value="EF07HI09 - Analisar as transformações econômicas, sociais e culturais decorrentes do ciclo do ouro no Brasil colonial, com ênfase no surgimento de cidades e do barroco mineiro.">
                  EF07HI09 - Analisar as transformações econômicas, sociais e culturais decorrentes do ciclo do ouro no Brasil colonial...
                </option>
                <option value="EF07HI10 - Analisar as revoltas nativistas e emancipatórias no Brasil colonial (como a Guerra dos Emboabas, Revolta de Beckman, Inconfidência Mineira e Conjuntura Baiana).">
                  EF07HI10 - Analisar as revoltas nativistas e emancipatórias no Brasil colonial...
                </option>
                <option value="EF07HI11 - Analisar os antecedentes e os desdobramentos da Inconfidência Mineira, contextualizando os ideais iluministas e a crise do sistema colonial português.">
                  EF07HI11 - Analisar os antecedentes e os desdobramentos da Inconfidência Mineira...
                </option>
                <option value="EF07HI12 - Analisar as características do Iluminismo e sua influência nas revoluções burguesas, na independência dos Estados Unidos e nas ideias de liberdade e igualdade na Europa e América.">
                  EF07HI12 - Analisar as características do Iluminismo e sua influência nas revoluções burguesas...
                </option>
                <option value="EF07HI13 - Analisar os antecedentes, o desenvolvimento e os impactos da Revolução Francesa, compreendendo a queda do Antigo Regime e a formulação dos direitos universais.">
                  EF07HI13 - Analisar os antecedentes, o desenvolvimento e os impactos da Revolução Francesa...
                </option>
                <option value="EF07HI14 - Analisar o processo de independência das colônias espanholas na América, identificando lideranças, conflitos regionais e os projetos políticos predominantes.">
                  EF07HI14 - Analisar o processo de independência das colônias espanholas na América...
                </option>
                <option value="EF08HI01 - Analisar o processo de expansão imperialista europeia na Ásia e na África no século XIX, identificando justificativas ideológicas e interesses econômicos.">
                  EF08HI01 - Analisar o processo de expansão imperialista europeia na Ásia e na África no século XIX...
                </option>
                <option value="EF08HI02 - Analisar os desdobramentos do imperialismo na África e na Ásia, destacando os conflitos, a divisão territorial arbitrária e a exploração de recursos.">
                  EF08HI02 - Analisar os desdobramentos do imperialismo na África e na Ásia...
                </option>
                <option value="EF08HI03 - Analisar os antecedentes, as causas e os desdobramentos da Primeira Guerra Mundial, compreendendo o impacto geopolítico e humano do conflito.">
                  EF08HI03 - Analisar os antecedentes, as causas e os desdobramentos da Primeira Guerra Mundial...
                </option>
                <option value="EF08HI04 - Analisar os impactos da Primeira Guerra Mundial e a emergência de regimes totalitários (fascismo e nazismo) na Europa entreguerras.">
                  EF08HI04 - Analisar os impactos da Primeira Guerra Mundial e a emergência de regimes totalitários...
                </option>
                <option value="EF08HI05 - Analisar o processo de crise econômica mundial de 1929 e seus reflexos no cenário internacional e na economia brasileira (Era Vargas).">
                  EF08HI05 - Analisar o processo de crise econômica mundial de 1929 e seus reflexos...
                </option>
                <option value="EF08HI06 - Identificar e analisar as características da Era Vargas no Brasil (1930-1945), compreendendo a centralização política, as leis trabalhistas e o populismo.">
                  EF08HI06 - Identificar e analisar as características da Era Vargas no Brasil (1930-1945)...
                </option>
                <option value="EF08HI07 - Analisar as origens, os desdobramentos e o impacto histórico da Segunda Guerra Mundial, com ênfase no Holocausto e no uso de armas nucleares.">
                  EF08HI07 - Analisar as origens, os desdobramentos e o impacto histórico da Segunda Guerra Mundial...
                </option>
                <option value="EF08HI08 - Analisar a participação do Brasil na Segunda Guerra Mundial e o impacto dessa experiência no processo de redemocratização interna pós-1945.">
                  EF08HI08 - Analisar a participação do Brasil na Segunda Guerra Mundial e o impacto...
                </option>
                <option value="EF08HI09 - Analisar as origens e a dinâmica da Guerra Fria, compreendendo a bipolaridade mundial, a corrida armamentista e espacial, e os conflitos regionais.">
                  EF08HI09 - Analisar as origens e a dinâmica da Guerra Fria...
                </option>
                <option value="EF08HI10 - Identificar e analisar o processo de descolonização da Ásia e da África, compreendendo as lutas pela independência e os desafios geopolíticos subsequentes.">
                  EF08HI10 - Identificar e analisar o processo de descolonização da Ásia e da África...
                </option>
                <option value="EF08HI12 - Analisar as transformações sociais, econômicas e culturais ocorridas no Brasil pós-Segunda Guerra Mundial, com ênfase na urbanização e industrialização.">
                  EF08HI12 - Analisar as transformações sociais, econômicas e culturais ocorridas no Brasil pós-Segunda Guerra Mundial...
                </option>
                <option value="EF09HI01 - Analisar os antecedentes, o desenvolvimento e os desdobramentos da Guerra Fria, com foco na consolidação do bloco capitalista e socialista.">
                  EF09HI01 - Analisar os antecedentes, o desenvolvimento e os desdobramentos da Guerra Fria...
                </option>
                <option value="EF09HI02 - Analisar o processo de redemocratização do Brasil, com ênfase no fim da ditadura militar, nas Diretas Já e na Constituição de 1988.">
                  EF09HI02 - Analisar o processo de redemocratização do Brasil (fim da ditadura, Diretas Já, 1988)...
                </option>
                <option value="EF09HI03 - Identificar e analisar as características do populismo e da industrialização no Brasil do período JK ao regime militar (1945-1985).">
                  EF09HI03 - Identificar e analisar as características do populismo e da industrialização no Brasil (JK ao regime militar)...
                </option>
                <option value="EF09HI04 - Analisar as características dos regimes militares na América Latina e as lutas pela redemocratização e defesa dos direitos humanos.">
                  EF09HI04 - Analisar as características dos regimes militares na América Latina e as lutas pela redemocratização...
                </option>
                <option value="EF09HI05 - Analisar os principais conflitos do Oriente Médio após a Segunda Guerra Mundial, compreendendo os fatores políticos, religiosos e territoriais.">
                  EF09HI05 - Analisar os principais conflitos do Oriente Médio após a Segunda Guerra Mundial...
                </option>
                <option value="EF09HI06 - Analisar o processo de globalização e a formação de blocos econômicos, identificando os impactos na economia, cultura e geopolítica mundial.">
                  EF09HI06 - Analisar o processo de globalização e a formação de blocos econômicos...
                </option>
                <option value="EF09HI07 - Analisar os desafios sociais, econômicos e políticos do mundo contemporâneo, com ênfase nas desigualdades globais e migrações.">
                  EF09HI07 - Analisar os desafios sociais, econômicos e políticos do mundo contemporâneo...
                </option>
              </optgroup>
              <optgroup label="Ciências Humanas / Geografia / Ensino Médio">
              <option value="EM13CHS401 - Interpretar a atuação das sociedades na transformação de diferentes lugares e regiões">
                EM13CHS401 - Interpretar a atuação das sociedades na transformação de diferentes lugares e regiões
              </option>
              <option value="EM13CHS603 - Analisar a formação de diferentes populações e suas relações com o meio ambiente e o espaço geográfico">
                EM13CHS603 - Analisar a formação de diferentes populações e suas relações com o meio ambiente e o espaço geográfico
              </option>
              <option value="EM13CHS204 - Comparar diferentes processos de ocupação do espaço geográfico e suas consequências socioambientais">
                EM13CHS204 - Comparar diferentes processos de ocupação do espaço geográfico e suas consequências socioambientais
              </option>
              <option value="EM13CHS402 - Analisar as transformações sociais e econômicas decorrentes da globalização">
                EM13CHS402 - Analisar as transformações sociais e econômicas decorrentes da globalização
              </option>
              <option value="EM13CHS503 - Identificar formas de atuação social que contribuam para a redução da desigualdade, do preconceito e da violência">
                EM13CHS503 - Identificar formas de atuação social que contribuam para a redução da desigualdade, do preconceito e da violência
              </option>
              <option value="EM13CHS601 - Identificar os processos de produção e circulação de riquezas, mercadorias e pessoas">
                EM13CHS601 - Identificar os processos de produção e circulação de riquezas, mercadorias e pessoas
              </option>
              <option value="EM13CHS306 - Avaliar as pretensões de universalidade do conhecimento de modo a compreender as relações entre ciência, tecnologia e sociedade">
                EM13CHS306 - Avaliar as pretensões de universalidade do conhecimento de modo a compreender as relações entre ciência, tecnologia e sociedade
              </option>
              <option value="EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço">
                EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço
              </option>
              <option value="EF09GE10 - Analisar a importância dos organismos internacionais na governança global e na solução de conflitos geopolíticos">
                EF09GE10 - Analisar a importância dos organismos internacionais na governança global e na solução de conflitos geopolíticos
              </option>
              <option value="EF09GE11 - Relacionar os fluxos migratórios às crises humanitárias e aos processos de globalização">
                EF09GE11 - Relacionar os fluxos migratórios às crises humanitárias e aos processos de globalização
              </option>
              <option value="EF09GE18 - Identificar os aspectos culturais e demográficos das diferentes regiões do mundo contemporâneo">
                EF09GE18 - Identificar os aspectos culturais e demográficos das diferentes regiões do mundo contemporâneo
              </option>
              <option value="EF08GE16A - Identificar o papel dos países desenvolvidos na economia global e nos fluxos de capitais">
                EF08GE16A - Identificar o papel dos países desenvolvidos na economia global e nos fluxos de capitais
              </option>
              <option value="EF08GE16B - Analisar a atuação das empresas transnacionais na organização do espaço geográfico mundial">
                EF08GE16B - Analisar a atuação das empresas transnacionais na organização do espaço geográfico mundial
              </option>
              <option value="EF08GE20B - Analisar as dinâmicas de migração contemporâneas e seus impactos socioeconômicos">
                EF08GE20B - Analisar as dinâmicas de migração contemporâneas e seus impactos socioeconômicos
              </option>
              <option value="EF08GE10 - Analisar a importância dos recursos hídricos para o desenvolvimento humano e econômico">
                EF08GE10 - Analisar a importância dos recursos hídricos para o desenvolvimento humano e econômico
              </option>
              <option value="EF08GE17 - Avaliar os impactos ambientais decorrentes das atividades produtivas em nível global">
                EF08GE17 - Avaliar os impactos ambientais decorrentes das atividades produtivas em nível global
              </option>
              <option value="EF08GE18 - Reconhecer os principais problemas ambientais globais e suas possíveis soluções">
                EF08GE18 - Reconhecer os principais problemas ambientais globais e suas possíveis soluções
              </option>
              <option value="EF08GE15 - Analisar os fluxos de mercadorias e pessoas no contexto da globalização">
                EF08GE15 - Analisar os fluxos de mercadorias e pessoas no contexto da globalização
              </option>
              <option value="EF08GE22 - Relacionar as desigualdades regionais aos processos de desenvolvimento econômico">
                EF08GE22 - Relacionar as desigualdades regionais aos processos de desenvolvimento econômico
              </option>
              <option value="EF08GE21 - Discutir o papel das organizações internacionais na governança global e resolução de conflitos">
                EF08GE21 - Discutir o papel das organizações internacionais na governança global e resolução de conflitos
              </option>
              <option value="EF07GE05 - Analisar fatos e situações para compreender a integração entre os lugares e a vida cotidiana das populações">
                EF07GE05 - Analisar fatos e situações para compreender a integração entre os lugares e a vida cotidiana das populações
              </option>
              <option value="EF07GE06 - Discutir as transformações dos espaços geográficos como produto das relações socioeconômicas e culturais">
                EF07GE06 - Discutir as transformações dos espaços geográficos como produto das relações socioeconômicas e culturais
              </option>
              <option value="EF07GE08 - Analisar a transformação das paisagens naturais e antrópicas em função das dinâmicas populacionais">
                EF07GE08 - Analisar a transformação das paisagens naturais e antrópicas em função das dinâmicas populacionais
              </option>
              <option value="EF07GE09A - Interpretar fenômenos geográficos a partir de representações cartográficas variadas">
                EF07GE09A - Interpretar fenômenos geográficos a partir de representações cartográficas variadas
              </option>
              <option value="EF07GE20* - Caracterizar os processos de urbanização no território brasileiro">
                EF07GE20* - Caracterizar os processos de urbanização no território brasileiro
              </option>
              <option value="EF07GE21* - Identificar as contradições do processo de urbanização em diferentes escalas">
                EF07GE21* - Identificar as contradições do processo de urbanização em diferentes escalas
              </option>
              <option value="EF06GE16* - Descrever as características das paisagens dos lugares de vivência e os fatores de sua transformação">
                EF06GE16* - Descrever as características das paisagens dos lugares de vivência e os fatores de sua transformação
              </option>
              <option value="EF06GE11 - Analisar distintas interações das sociedades com a natureza, com base na identificação de impactos econômicos e socioambientais">
                EF06GE11 - Analisar distintas interações das sociedades com a natureza, com base na identificação de impactos econômicos e socioambientais
              </option>
              <option value="EF06GE10 - Explicar a formação de grandes domínios morfoclimáticos no Brasil, sua importância para a biodiversidade e as intervenções humanas">
                EF06GE10 - Explicar a formação de grandes domínios morfoclimáticos no Brasil, sua importância para a biodiversidade e as intervenções humanas
              </option>
              <option value="EF06GE05 - Relacionar padrões climáticos aos tipos de vegetação e às atividades econômicas em diferentes regiões">
                EF06GE05 - Relacionar padrões climáticos aos tipos de vegetação e às atividades econômicas em diferentes regiões
              </option>
              <option value="EF06MA16 - Associar pares ordenados de números à localização de pontos em um plano cartesiano">
                EF06MA16 - Associar pares ordenados de números à localização de pontos em um plano cartesiano
              </option>
              <option value="EF06MA17 - Quantificar e estabelecer relações entre o número de vértices, faces e arestas de prismas e pirâmides">
                EF06MA17 - Quantificar e estabelecer relações entre o número de vértices, faces e arestas de prismas e pirâmides
              </option>
              <option value="EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura">
                EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura
              </option>
              <option value="EF06MA03 - Resolver problemas envolvendo o cálculo do máximo divisor comum ou do mínimo múltiplo comum">
                EF06MA03 - Resolver problemas envolvendo o cálculo do máximo divisor comum ou do mínimo múltiplo comum
              </option>
              <option value="EF07MA27 - Resolver e elaborar problemas envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo">
                EF07MA27 - Resolver e elaborar problemas envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo
              </option>
              <option value="EF07MA17 - Resolver e elaborar problemas que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais">
                EF07MA17 - Resolver e elaborar problemas que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais
              </option>
              <option value="EF07MA02 - Resolver e elaborar problemas com números inteiros, envolvendo as operações fundamentais">
                EF07MA02 - Resolver e elaborar problemas com números inteiros, envolvendo as operações fundamentais
              </option>
              <option value="EF08MA22 - Calcular a probabilidade de eventos, com base na construção do espaço amostral, utilizando o princípio multiplicativo, e reconhecer que a soma das probabilidades de todos os elementos do espaço amostral é igual a 1.">
                EF08MA22 - Calcular a probabilidade de eventos, com base na construção do espaço amostral, utilizando o princípio multiplicativo, e reconhecer que a soma das probabilidades de todos os elementos do espaço amostral é igual a 1.
              </option>
              <option value="EF08MA25 - Obter os valores de medidas de tendência central e de dispersão em um conjunto de dados estatísticos">
                EF08MA25 - Obter os valores de medidas de tendência central e de dispersão em um conjunto de dados estatísticos
              </option>
              <option value="EF07MA35 - Compreender o conceito de frequência e sua representação em tabelas e gráficos estatísticos">
                EF07MA35 - Compreender o conceito de frequência e sua representação em tabelas e gráficos estatísticos
              </option>
              <option value="EF07MA36 - Resolver e elaborar problemas envolvendo o cálculo de probabilidade de eventos em experimentos aleatórios">
                EF07MA36 - Resolver e elaborar problemas envolvendo o cálculo de probabilidade de eventos em experimentos aleatórios
              </option>
              <option value="EF08MA12 - Identificar a simetria de reflexão, rotação e translação em figuras planas e no plano cartesiano">
                EF08MA12 - Identificar a simetria de reflexão, rotação e translação em figuras planas e no plano cartesiano
              </option>
              <option value="EF08MA13 - Demonstrar propriedades de figuras geométricas planas, utilizando transformações geométricas">
                EF08MA13 - Demonstrar propriedades de figuras geométricas planas, utilizando transformações geométricas
              </option>
              <option value="EF08MA04 - Resolver e elaborar problemas com números racionais na representação fracionária e decimal">
                EF08MA04 - Resolver e elaborar problemas com números racionais na representação fracionária e decimal
              </option>
              <option value="EF08MA19 - Resolver e elaborar problemas envolvendo medidas de volume de prismas retos, por meio de composições e decomposições">
                EF08MA19 - Resolver e elaborar problemas envolvendo medidas de volume de prismas retos, por meio de composições e decomposições
              </option>
              <option value="EF07MA33 - Estabelecer a relação entre o volume e a capacidade de recipientes por meio de transformações de unidades">
                EF07MA33 - Estabelecer a relação entre o volume e a capacidade de recipientes por meio de transformações de unidades
              </option>
              <option value="EF09MA11 - Resolver e elaborar problemas envolvendo medidas de volume de corpos e recipientes complexos">
                EF09MA11 - Resolver e elaborar problemas envolvendo medidas de volume de corpos e recipientes complexos
              </option>
              <option value="EF07MA34 - Planejar e realizar pesquisa envolvendo a coleta de dados estatísticos em diferentes contextos">
                EF07MA34 - Planejar e realizar pesquisa envolvendo a coleta de dados estatísticos em diferentes contextos
              </option>
              <option value="EF08MA30 - Estimar e medir volumes de prismas e cilindros por meio de aproximações">
                EF08MA30 - Estimar e medir volumes de prismas e cilindros por meio de aproximações
              </option>
              <option value="EF09MA20 - Analisar e estabelecer a probabilidade de eventos compostos utilizando o princípio multiplicativo">
                EF09MA20 - Analisar e estabelecer a probabilidade de eventos compostos utilizando o princípio multiplicativo
              </option>
              <option value="EF09MA08 - Resolver e elaborar problemas que envolvam a razão de semelhança em figuras geométricas planas e homotetias">
                EF09MA08 - Resolver e elaborar problemas que envolvam a razão de semelhança em figuras geométricas planas e homotetias
              </option>
              <option value="EM13MAT307 - Identificar e analisar a presença de grandezas em situações reais e geométricas envolvendo trigonometria no triângulo retângulo">
                EM13MAT307 - Identificar e analisar a presença de grandezas em situações reais e geométricas envolvendo trigonometria no triângulo retângulo
              </option>
              <option value="EM13MAT309 - Resolver e elaborar problemas envolvendo o cálculo de áreas de superfícies planas e de corpos redondos">
                EM13MAT309 - Resolver e elaborar problemas envolvendo o cálculo de áreas de superfícies planas e de corpos redondos
              </option>
              <option value="EM13MAT314 - Investigar e analisar a ocorrência de fenômenos estatísticos por meio de distribuições probabilísticas">
                EM13MAT314 - Investigar e analisar a ocorrência de fenômenos estatísticos por meio de distribuições probabilísticas
              </option>
              <option value="EM13MAT316 - Resolver e elaborar problemas envolvendo a análise de dados estatísticos em diferentes contextos">
                EM13MAT316 - Resolver e elaborar problemas envolvendo a análise de dados estatísticos em diferentes contextos
              </option>
              <option value="EM13MAT506 - Interpretar informações contidas em textos e gráficos estatísticos, identificando tendências e padrões">
                EM13MAT506 - Interpretar informações contidas em textos e gráficos estatísticos, identificando tendências e padrões
              </option>
              <option value="EM13CHS503 - Identificar formas de atuação social que contribuam para a redução da desigualdade, do preconceito e da violência.">
                EM13CHS503 - Identificar formas de atuação social que contribuam para a redução da desigualdade, do preconceito e da violência.
              </option>
              <option value="EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.">
                EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.
              </option>
              <option value="EM13CHS306 - Avaliar as pretensões de universalidade do conhecimento de modo a compreender as relações entre ciência, tecnologia e sociedade.">
                EM13CHS306 - Avaliar as pretensões de universalidade do conhecimento de modo a compreender as relações entre ciência, tecnologia e sociedade.
              </option>
              <option value="EM13CHS401 - Identificar e analisar as relações entre sujeitos, grupos, classes sociais e sociedades com culturas distintas diante das transformações técnicas, tecnológicas e informacionais.">
                EM13CHS401 - Identificar e analisar as relações entre sujeitos, grupos, classes sociais e sociedades com culturas distintas diante das transformações técnicas...
              </option>
              <option value="EM13CHS603 - Analisar a formação de diferentes países, povos e nações e de suas experiências políticas e de exercício da cidadania.">
                EM13CHS603 - Analisar a formação de diferentes países, povos e nações e de suas experiências políticas e de exercício da cidadania.
              </option>
              <option value="EM13CHS204 - Posicionar-se com base em princípios éticos frente aos desafios ambientais contemporâneos.">
                EM13CHS204 - Posicionar-se com base em princípios éticos frente aos desafios ambientais contemporâneos.
              </option>
              <option value="EM13CHS402 - Analisar e comparar indicadores de emprego, trabalho e renda em diferentes espaços, escalas e tempos, associando-os a processos de estratificação social.">
                EM13CHS402 - Analisar e comparar indicadores de emprego, trabalho e renda em diferentes espaços, escalas e tempos, associando-os a processos de estratificação social.
              </option>
              {bnccOptionsList.map((opt, idx) => (
                <option key={idx} value={opt.fullText}>
                  {opt.code} - {opt.verb} | {opt.content} | {opt.context}
                </option>
              ))}
              <option value="EF09HI24 - Analisar as transformações políticas, econômicas, sociais e culturais de 1989 aos dias atuais, identificando questões relevantes.">
                EF09HI24 - Analisar as transformações políticas, econômicas, sociais e culturais de 1989 aos dias atuais, identificando questões relevantes.
              </option>
              <option value="EF09HI22 - Discutir o papel da mobilização da sociedade brasileira do final do período ditatorial até a Constituição de 1988.">
                EF09HI22 - Discutir o papel da mobilização da sociedade brasileira do final do período ditatorial até a Constituição de 1988.
              </option>
              <option value="EF09HI31 - Identificar e analisar os impactos da globalização nas relações políticas, econômicas e culturais.">
                EF09HI31 - Identificar e analisar os impactos da globalização nas relações políticas, econômicas e culturais.
              </option>
              <option value="EF09HI32 - Analisar as consequências da globalização para as diferentes populações e regiões do mundo.">
                EF09HI32 - Analisar as consequências da globalização para as diferentes populações e regiões do mundo.
              </option>
              <option value="EF09HI33 - Analisar as transformações nas relações políticas locais e globais geradas pelo desenvolvimento das tecnologias digitais de informação e comunicação.">
                EF09HI33 - Analisar as transformações nas relações políticas locais e globais geradas pelo desenvolvimento das tecnologias digitais de informação e comunicação.
              </option>
              <option value="EF09HI34 - Identificar e analisar os processos de integração regional e seus impactos nas sociedades contemporâneas.">
                EF09HI34 - Identificar e analisar os processos de integração regional e seus impactos nas sociedades contemporâneas.
              </option>
              <option value="EF09HI27 - Relacionar aspectos das mudanças econômicas, culturais e sociais ocorridas no Brasil a partir da década de 1990 ao papel do Estado, mercado e sociedade civil.">
                EF09HI27 - Relacionar aspectos das mudanças econômicas, culturais e sociais ocorridas no Brasil a partir da década de 1990 ao papel do Estado, mercado e sociedade civil.
              </option>
              <option value="EF09HI35 - Discutir e analisar as demandas por direitos sociais e políticos de diferentes grupos na atualidade.">
                EF09HI35 - Discutir e analisar as demandas por direitos sociais e políticos de diferentes grupos na atualidade.
              </option>
              <option value="EF09HI36 - Identificar e analisar as transformações nas relações de trabalho e nas formas de organização social contemporâneas.">
                EF09HI36 - Identificar e analisar as transformações nas relações de trabalho e nas formas de organização social contemporâneas.
              </option>
              <option value="EF09HI08 - Identificar as transformações ocorridas no debate político-social durante a transição entre o século XIX e XX.">
                EF09HI08 - Identificar as transformações ocorridas no debate político-social durante a transição entre o século XIX e XX.
              </option>
              <option value="EF08HI19A - Formular questionamentos sobre a tutela da população indígena, a escravidão dos negros e a tutela dos egressos da escravidão.">
                EF08HI19A - Formular questionamentos sobre a tutela da população indígena, a escravidão dos negros e a tutela dos egressos da escravidão.
              </option>
              <option value="EF08HI27 - Identificar, com base na seleção e consulta de fontes de diferentes naturezas, as tensões e os significados dos discursos civilizatórios, avaliando seus impactos negativos para os povos indígenas originários e para as populações negras nas Américas.">
                EF08HI27 - Identificar, com base na seleção e consulta de fontes de diferentes naturezas, as tensões e os significados dos discursos civilizatórios...
              </option>
              <option value="EF08HI21 - Identificar e analisar as políticas oficiais com relação ao indígena durante o Império.">
                EF08HI21 - Identificar e analisar as políticas oficiais com relação ao indígena durante o Império.
              </option>
              <option value="EF08HI20 - Identificar e relacionar aspectos das estruturas sociais da atualidade com os legados da escravidão no Brasil e discutir a importância de ações afirmativas.">
                EF08HI20 - Identificar e relacionar aspectos das estruturas sociais da atualidade com os legados da escravidão...
              </option>
              <option value="EF08HI22 - Discutir o papel das culturas letradas, não letradas e das artes na produção das identidades no Brasil do século XIX.">
                EF08HI22 - Discutir o papel das culturas letradas, não letradas e das artes na produção das identidades no Brasil do século XIX.
              </option>
              <option value="EF08HI25 - Caracterizar e contextualizar aspectos das relações entre os Estados Unidos da América e a América Latina no século XIX.">
                EF08HI25 - Caracterizar e contextualizar aspectos das relações entre os Estados Unidos da América e a América Latina no século XIX.
              </option>
              <option value="EF08HI23 - Estabelecer relações causais entre as ideologias raciais e o determinismo no contexto do imperialismo europeu e seus impactos na África e na Ásia.">
                EF08HI23 - Estabelecer relações causais entre as ideologias raciais e o determinismo no contexto do imperialismo europeu...
              </option>
              <option value="EF08HI24 - Reconhecer os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.">
                EF08HI24 - Reconhecer os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo...
              </option>
              <option value="EF07HI17 - Discutir as razões da passagem do mercantilismo para o capitalismo.">
                EF07HI17 - Discutir as razões da passagem do mercantilismo para o capitalismo.
              </option>
              <option value="EF07HI20* - Relacionar o racismo da contemporaneidade ao processo de escravização das populações africanas e afrodescendentes no período colonial.">
                EF07HI20* - Relacionar o racismo da contemporaneidade ao processo de escravização das populações africanas e afrodescendentes no período colonial.
              </option>
              <option value="EF07HI19* - Analisar as condições das pessoas escravizadas e identificar as formas de resistência à escravidão na América Portuguesa.">
                EF07HI19* - Analisar as condições das pessoas escravizadas e identificar as formas de resistência à escravidão na América Portuguesa.
              </option>
              <option value="EF07HI16 - Analisar os mecanismos e as dinâmicas de comércio de escravizados em suas diferentes fases, identificando os agentes responsáveis pelo tráfico.">
                EF07HI16 - Analisar os mecanismos e as dinâmicas de comércio de escravizados em suas diferentes fases, identificando os agentes responsáveis pelo tráfico.
              </option>
              <option value="EF07HI15 - Discutir o conceito de escravidão moderna e suas distinções em relação ao escravismo antigo e à servidão medieval.">
                EF07HI15 - Discutir o conceito de escravidão moderna e suas distinções em relação ao escravismo antigo e à servidão medieval.
              </option>
              <option value="EF06HI14 - Identificar características das culturas pré-colombianas (maias, astecas e incas), analisando suas organizações sociais, econômicas, políticas e religiosas antes da chegada dos europeus.">
                EF06HI14 - Identificar características das culturas pré-colombianas (maias, astecas e incas)...
              </option>
            </optgroup>
          </select>

            {/* Detailed visual breakdown box (matching user's table image) */}
            {bnccDetails.length > 0 && (
              <div className="mt-2.5 space-y-3">
                <div className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider flex items-center justify-between">
                  <span>
                    Estrutura Detalhada {bnccDetails.length > 1 ? `das Habilidades BNCC (${bnccDetails.length} habilidades)` : `da Habilidade BNCC (${bnccDetails[0].code})`}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Fidelidade Curricular Oficial
                  </span>
                </div>
                {bnccDetails.map((detail, idx) => (
                  <div key={idx} className="bg-slate-900/90 border border-indigo-500/40 rounded-xl p-3 space-y-2">
                    <div className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider flex items-center justify-between">
                      <span className="truncate pr-2">
                        Habilidade {bnccDetails.length > 1 ? `${idx + 1}: ` : ""}{detail.fullText}
                      </span>
                      <span className="text-[10px] bg-indigo-900/80 text-indigo-200 px-2.5 py-0.5 rounded-full font-mono font-bold shrink-0">
                        {detail.code}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
                      <div className="bg-slate-800 border border-slate-700 p-2.5 rounded-lg text-center flex flex-col justify-center">
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5 block">Código</span>
                        <span className="text-sm font-black text-white">{detail.code}</span>
                      </div>
                      <div className="bg-blue-950/70 border border-blue-600/60 p-2.5 rounded-lg text-center flex flex-col justify-center">
                        <span className="text-[9px] uppercase tracking-wider text-blue-400 font-semibold mb-0.5 block">1. [VERBO(S)] - Ação Cognitiva</span>
                        <span className="font-bold text-blue-300">{detail.verb}</span>
                      </div>
                      <div className="bg-emerald-950/70 border border-emerald-600/60 p-2.5 rounded-lg text-center flex flex-col justify-center">
                        <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-semibold mb-0.5 block">2. [OBJETO DE CONHECIMENTO]</span>
                        <span className="font-semibold text-emerald-300">{detail.content}</span>
                      </div>
                      <div className="bg-rose-950/70 border border-rose-600/60 p-2.5 rounded-lg text-center flex flex-col justify-center">
                        <span className="text-[9px] uppercase tracking-wider text-rose-400 font-semibold mb-0.5 block">3. [MODIFICADOR/CONTEXTO]</span>
                        <span className="font-semibold text-rose-300">{detail.context}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <input
            type="text"
            name="bnccCompetencies"
            placeholder="Ex: EF06HI14, EF06MA01 (ou edite o texto da habilidade diretamente)"
            value={formData.bnccCompetencies}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          />
        </div>

        {/* Pirâmide de Bloom (Aparece logo após a habilidade e antes do nome da escola) */}
        {formData.bnccCompetencies && (
          <BloomPyramidSection
            skillsDetails={bnccDetails}
            rawCompetencies={formData.bnccCompetencies}
            lessonTopic={formData.topic}
            currentActiveLevel={formData.activeBloomLevel || 1}
            bloomPlans={formData.bloomLevelPlans || {}}
            onChangeBloomPlans={(plans) => {
              setFormData((prev) => ({
                ...prev,
                bloomLevelPlans: plans,
              }));
            }}
            onAdvanceToNextPlan={(nextLevel) => {
              setFormData((prev) => ({
                ...prev,
                activeBloomLevel: nextLevel,
              }));
            }}
          />
        )}

        {/* Gerador de 10 Itens de Avaliação da Habilidade Selecionada */}
        {formData.bnccCompetencies && (
          <AssessmentGeneratorSection
            skillCode={bnccDetails[0]?.code || formData.bnccCompetencies}
            skillText={bnccDetails[0]?.fullText || formData.bnccCompetencies}
            subject={formData.subject}
            gradeLevel={formData.gradeLevel}
            activeBloomLevel={formData.activeBloomLevel}
          />
        )}

        {/* Custom Notes */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
            Instruções Especiais / Recursos Específicos
          </label>
          <textarea
            name="customNotes"
            rows={2}
            placeholder="Ex: Incluir atividade com data show, preparar turma para alunos com necessidades de atenção estendida, etc."
            value={formData.customNotes}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-y"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-base shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition duration-200 flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                <span>Gerando Plano de Aula com IA Gemini...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Gerar Plano de Aula Completo</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
