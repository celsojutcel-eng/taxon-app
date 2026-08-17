export interface TemplatePreset {
  id: string;
  title: string;
  subject: string;
  gradeLevel: string;
  duration: string;
  topic: string;
  methodology: string;
  bnccCompetencies: string;
  customNotes: string;
}

export const SUBJECT_OPTIONS = [
  "Aprofundamento Filosofia",
  "Aprofundamento Geografia",
  "Aprofundamento Sociologia",
  "Arte",
  "Artes e Mídias Digitais",
  "Atualidades",
  "Biologia",
  "Ciências",
  "Educação Especial",
  "Educação Financeira",
  "Educação Física",
  "Eletivas",
  "Ema",
  "Filosofia",
  "Física",
  "Geografia",
  "História",
  "Inglês",
  "Intérprete de Libras",
  "Liderança e Oratória",
  "Matemática",
  "Orientação de Estudos – Língua Portuguesa",
  "Orientação de Estudos – Matemática",
  "Português",
  "Práticas Experimentais",
  "Química",
  "Redação",
  "Robótica",
  "Sociologia",
  "Tecnologia",
];

export const GRADE_OPTIONS = [
  "Ensino Fundamental II - 6º Ano A",
  "Ensino Fundamental II - 6º Ano B",
  "Ensino Fundamental II - 7º Ano A",
  "Ensino Fundamental II - 7º Ano B",
  "Ensino Fundamental II - 8º Ano A",
  "Ensino Fundamental II - 8º Ano B",
  "Ensino Fundamental II - 9º Ano A",
  "Ensino Fundamental II - 9º Ano B",
  "Ensino Médio - 2º Ano A",
  "Ensino Médio - 3º Ano A",
];

export const BIMESTER_OPTIONS = [
  "1º Bimestre",
  "2º Bimestre",
  "3º Bimestre",
  "4º Bimestre",
];

export const CURRICULUM_LESSONS_MAP: Record<string, string[]> = {
  // Inglês - 6º Ano - 4º Bimestre
  "Inglês|6º Ano|4º Bimestre": [
    "Aula 1: Oral exchange and family introductions",
    "Aula 2: Daily routines and present simple",
    "Aula 3: Building lexical repertoire",
    "Aula 4: Written texts and everyday vocabulary",
    "Aula 5: Text planning and listening comprehension",
    "Aula 6: Writing about preferences and routines",
    "Aula 7: Oral interaction and vocabulary development",
    "Aula 8: Reading strategies and text comprehension",
    "Aula 9: Finding specific information and asking questions",
    "Aula 10: Lexical repertoire consolidation",
    "Aula 11: English around the world and global communication",
    "Aula 12: English in society, advertising and digital culture",
  ],
  // Inglês - 7º Ano - 4º Bimestre
  "Inglês|7º Ano|4º Bimestre": [
    "Aula 1: Interviewing peers and past experiences",
    "Aula 2: Stories, past routines and simple past",
    "Aula 3: Reading strategies: skimming, scanning and inferences",
    "Aula 4: Connecting paragraphs and main ideas",
    "Aula 5: Oral comprehension and narrative composition",
    "Aula 6: Reading comprehension and text structure",
    "Aula 7: Key information and global comprehension",
    "Aula 8: Text analysis and discursive context",
    "Aula 9: Prior knowledge, oral listening and narrative creation",
    "Aula 10: Narrative writing and text structuring",
    "Aula 11: Fiction narratives and listening skills",
    "Aula 12: Linguistic variation and accents in English",
    "Aula 13: Collaborative oral interaction and text planning",
  ],
  // Inglês - 8º Ano - 4º Bimestre
  "Inglês|8º Ano|4º Bimestre": [
    "Aula 1: Global meaning of oral texts and past continuous",
    "Aula 2: Narrative comprehension and past actions",
    "Aula 3: Oral texts and past continuous in context",
    "Aula 4: Past events and storytelling",
    "Aula 5: Listening comprehension and past actions",
    "Aula 6: Narrative structures and past continuous",
    "Aula 7: Oral discourse and chronological narration",
    "Aula 8: Textual connections and past tenses",
    "Aula 9: Inferring implicit information and literary appreciation",
    "Aula 10: Critical reading and literary analysis",
    "Aula 11: Comparing perspectives and critical text analysis",
  ],
  // Inglês - 9º Ano - 4º Bimestre
  "Inglês|9º Ano|4º Bimestre": [
    "Aula 1: Main arguments, evidence and discourse connectors",
    "Aula 2: Argumentative structures and connectors",
    "Aula 3: Identifying arguments and evidence in texts",
    "Aula 4: Connectors of contrast, addition and conclusion",
    "Aula 5: Distinguishing facts from opinions and cohesive connectors",
    "Aula 6: Fact vs. opinion in journalistic media",
    "Aula 7: Media literacy, arguments and connectors",
    "Aula 8: Analyzing opinion pieces and argument structures",
    "Aula 9: Fact vs. opinion in contemporary media",
    "Aula 10: Critical evaluation of journalistic texts",
    "Aula 11: Media discourse and opinion analysis",
  ],
  // Inglês - 2º Ano (2ª Série) - 4º Bimestre
  "Inglês|2º Ano|4º Bimestre": [
    "Aula 1: Media discourse, worldview and critical analysis",
    "Aula 2: Ideology, culture and youth citizenship",
    "Aula 3: Critical reading of global media discourses",
    "Aula 4: Cultural diversity and human rights in digital media",
    "Aula 5: Multimodal texts, power relations and language production",
    "Aula 6: Youth protagonist and sociocultural topics",
    "Aula 7: Media analysis, stereotypes and critical expression",
    "Aula 8: Oral and written production on global issues",
    "Aula 9: Multimodal semiosis and English as a lingua franca",
    "Aula 10: Multilingual practices and social discourse",
    "Aula 11: Language function, multicultural communication and lingua franca",
  ],
  // Inglês - 3º Ano (3ª Série) - 4º Bimestre
  "Inglês|3º Ano|4º Bimestre": [
    "Aula 1: Media discourse, worldview and critical analysis",
    "Aula 2: Ideology, culture and youth citizenship",
    "Aula 3: Critical reading of global media discourses",
    "Aula 4: Cultural diversity and human rights in digital media",
    "Aula 5: Multimodal texts, power relations and language production",
    "Aula 6: Youth protagonist and sociocultural topics",
    "Aula 7: Multimodal semiosis and English as a lingua franca",
    "Aula 8: Multilingual practices and social discourse",
    "Aula 9: Advanced lingua franca, cultural diversity and sociolinguistics",
    "Aula 10: Global communication and linguistic diversity",
    "Aula 11: Multimodal analysis, intercultural communication and lingua franca",
  ],
  // História - 6º Ano - 4º Bimestre
  "História|6º Ano|4º Bimestre": [
    "Aula 1: A mulher na transição da Antiguidade para a Idade Média",
    "Aula 2: Os povos germânicos",
    "Aula 3: Reino Franco: dinastias Merovíngia e Carolíngia",
    "Aula 4: O papel da religião cristã na Idade Média",
    "Aula 5: O trabalho e a vida social na Idade Média",
    "Aula 6: O feudalismo europeu",
    "Aula 7: Lógicas comerciais no mundo medieval",
    "Aula 8: Mundo árabe e o nascimento do islamismo",
    "Aula 9: Império Otomano",
    "Aula 10: O povo judeu e suas relações no mundo medieval",
    "Aula 11: Em nome de Deus: as Cruzadas",
    "Aula 12: A crise do sistema feudal",
  ],
  // História - 7º Ano - 4º Bimestre
  "História|7º Ano|4º Bimestre": [
    "Aula 1: A escravidão e a servidão ao longo da história",
    "Aula 2: Escravidão na África",
    "Aula 3: Nos caminhos da escravidão: África, Europa e América em conexão",
    "Aula 4: O Atlântico negro: as rotas dos navios e a diáspora forçada",
    "Aula 5: O sistema escravista e as condições de escravizados",
    "Aula 6: Vozes silenciadas: a vida dos negros no Brasil colonial",
    "Aula 7: Resistência negra: Esperança Garcia e outras formas de luta no Brasil colonial",
    "Aula 8: Palmares: o quilombo que nunca se rendeu",
    "Aula 9: Lideranças negras: heróis da resistência",
    "Aula 10: Raízes do racismo: conexões entre o passado e o presente",
    "Aula 11: A passagem do capitalismo mercantil para o capitalismo industrial",
    "Aula 12: Transição econômica: do mercantilismo ao capitalismo liberal",
  ],
  // História - 8º Ano - 4º Bimestre
  "História|8º Ano|4º Bimestre": [
    "Aula 1: O legado da luta negra contra a escravidão",
    "Aula 2: As políticas de imigração e o abolicionismo no Brasil Imperial",
    "Aula 3: Pensamento e cultura no século XIX: darwinismo social e racismo",
    "Aula 4: A resistência dos povos indígenas e o discurso civilizatório nas Américas",
    "Aula 5: O Estado brasileiro e sua relação com os indígenas na construção do Império",
    "Aula 6: Vozes da literatura negra no Brasil do século XIX",
    "Aula 7: Cultura letrada e não letrada no Brasil durante o século XIX",
    "Aula 8: Romantismo no Brasil do século XIX",
    "Aula 9: Relações entre os Estados Unidos da América e a América Latina no século XIX",
    "Aula 10: Da Doutrina Monroe ao intervencionismo: as influências dos EUA na América Latina",
    "Aula 11: Determinismo e imperialismo europeu",
    "Aula 12: Nacionalismo e as novas nações europeias: o início do imperialismo",
    "Aula 13: Teorias raciais e o imperialismo na África",
    "Aula 14: O imperialismo europeu e a partilha da África",
    "Aula 15: Resistência à partilha da África",
    "Aula 16: A África e o capitalismo industrial europeu",
    "Aula 17: Recursos africanos e os interesses da Europa: histórias por trás do colonialismo",
    "Aula 18: Colonialismo ontem e hoje: consequências do colonialismo no mundo atual",
  ],
  // História - 9º Ano - 4º Bimestre
  "História|9º Ano|4º Bimestre": [
    "Aula 1: A Constituição de 1988: a chamada \"Constituição Cidadã\"",
    "Aula 2: A eleição de Tancredo Neves e o Governo José Sarney",
    "Aula 3: As manifestações culturais no processo de redemocratização",
    "Aula 4: A luta pelos direitos civis no Brasil",
    "Aula 5: Processos de descolonização na África",
    "Aula 6: Líderes e movimentos de independência na África",
    "Aula 7: Processos de descolonização na Ásia: independências e lideranças",
    "Aula 8: O fim da Guerra Fria",
    "Aula 9: Globalização em debate: movimentos críticos e seus desafios às políticas globais",
    "Aula 10: Tecnologias digitais e as transformações da globalização",
    "Aula 11: Nacionalismo e neoliberalismo na América Latina: o papel das organizações internacionais na dinâmica regional",
    "Aula 12: O Plano Real e as transformações econômicas no Brasil nos anos 1990",
    "Aula 13: O Brasil nos anos 1990: o governo de Fernando Henrique Cardoso e as transformações no país",
    "Aula 14: Fronteiras em movimento: crise de refugiados e migrações na Era da Globalização",
    "Aula 15: Grupos terroristas contemporâneos",
    "Aula 16: Conflitos no século XXI",
    "Aula 17: Aula Desafio: defesa das minorias",
    "Aula 18: Transformações políticas, sociais e culturais no Brasil de 1989 aos dias atuais",
  ],
  // Aprofundamento Geografia - 3º Ano - 4º Bimestre
  "Aprofundamento Geografia|3º Ano|4º Bimestre": [
    "Aula 1: Globalização e seus impactos desiguais",
    "Aula 2: Países em desenvolvimento: principais desafios",
    "Aula 3: Produtividade e tecnologia",
    "Aula 4: Corrida tecnológica e a nova corrida espacial",
    "Aula 5: Indústria 4.0",
    "Aula 6: Globalização digital",
    "Aula 7: O mundo digital – Trabalho",
    "Aula 8: Geopolítica e dinheiro",
    "Aula 9: Geopolítica da informação e as Big Techs",
    "Aula 10: Geopolítica e a informação: preparação do simulado",
    "Aula 11: Geopolítica e a informação: planejamento",
    "Aula 12: Geopolítica e a informação: prática da simulação",
  ],
  // Educação Física - 6º Ano - 4º Bimestre
  "Educação Física|6º Ano|4º Bimestre": [
    "Aula 1: Jogos de Tabuleiro",
    "Aula 2: Damas e Xadrez",
    "Aula 3: Trilha",
    "Aula 4: Pong Hau Ki",
    "Aula 5: Labirinto e Shisima",
    "Aula 6: Jogo da onça",
    "Aula 7: Jogos de casa",
    "Aula 8: Lutas do Brasil: Tarracá, Huka-Huka e Luta Marajoara",
    "Aula 9: Os jogos de oposição nas lutas do Brasil",
    "Aula 10: O Huka-Huka",
    "Aula 11: A Luta Marajoara",
    "Aula 12: O Tarracá",
    "Aula 13: Recriando as lutas do Brasil",
    "Aula 14: Apresentando as criações",
  ],
  // Educação Física - 7º Ano - 4º Bimestre
  "Educação Física|7º Ano|4º Bimestre": [
    "Aula 1: Jogos Eletrônicos: Realidade Virtual e Realidade Aumentada",
    "Aula 2: Just Dance",
    "Aula 3: Free Fire adaptado",
    "Aula 4: Pokemon Go",
    "Aula 5: Damas e xadrez virtual",
    "Aula 6: Agora é a hora da sua sugestão",
    "Aula 7: Transformando o virtual em analógico",
    "Aula 8: Jogos eletrônicos, captação de movimento e preparação física de Cyberatletas",
    "Aula 9: Jogos eletrônicos de esporte",
    "Aula 10: Jogos eletrônicos com captação de movimento - dança",
    "Aula 11: Jogos eletrônicos com captação de movimento - esporte ou exercício físico",
    "Aula 12: Vivenciando modalidades dos e-sports",
    "Aula 13: A preparação física dos Cyberatletas",
    "Aula 14: Programas de preparação física dos atletas de e-sports",
  ],
  // Educação Física - 8º Ano - 4º Bimestre
  "Educação Física|8º Ano|4º Bimestre": [
    "Aula 1: Trilha e Trekking",
    "Aula 2: Planejando a trilha escolar",
    "Aula 3: Técnicas de caminhada",
    "Aula 4: Trilha simulada e cooperação",
    "Aula 5: Riscos e Estratégias de Segurança",
    "Aula 6: Preparação de um informe multimídia sobre Trilhas e Trekking",
    "Aula 7: Apresentando a Trilha e o Trekking",
    "Aula 8: Exercício físico, dismorfia corporal e medicamentos",
    "Aula 9: Planejamento de campanha para uma vida saudável",
    "Aula 10: Produção de campanha",
    "Aula 11: Apresentação de campanha - cartazes",
    "Aula 12: Apresentação de campanha - Podcasts e videoasts",
    "Aula 13: Apresentação de campanha - atividade e exercícios físicos",
    "Aula 14: Apresentação de campanha - atividades diversificadas",
  ],
  // Educação Física - 9º Ano - 4º Bimestre
  "Educação Física|9º Ano|4º Bimestre": [
    "Aula 1: Introdução à Corrida de Orientação",
    "Aula 2: Conhecendo o território da escola",
    "Aula 3: Aprendendo a usar mapas e bússolas",
    "Aula 4: Mini-circuito de orientação na escola",
    "Aula 5: Estratégias e tomada de decisão",
    "Aula 6: Corrida de Orientação Escolar",
    "Aula 7: Reflexão e divulgação da experiência",
    "Aula 8: Padrões de beleza e composição corporal",
    "Aula 9: Índice de Massa Corporal - IMC",
    "Aula 10: Relação Cintura Quadril - RCQ",
    "Aula 11: Exercícios para o condicionamento físico",
    "Aula 12: Jogando com a composição corporal",
    "Aula 13: Planejamento de um programa de exercício físico",
    "Aula 14: Experimentação do programa de exercício físico",
  ],
  // Educação Física - 2º Ano - 4º Bimestre
  "Educação Física|2º Ano|4º Bimestre": [
    "Aula 1: Jogos Cooperativos",
    "Aula 2: Jogos de confiança",
    "Aula 3: Jogos de comunicação e sintonia",
    "Aula 4: Jogos de superação coletiva",
    "Aula 5: Desafio cooperativo com pontuação coletiva",
    "Aula 6: Recriando jogos competitivos de modo cooperativo",
    "Aula 7: Cooperar é transformar",
  ],
  // Educação Física - 3º Ano - 4º Bimestre
  "Educação Física|3º Ano|4º Bimestre": [
    "Aula 1: Swordplay - uma luta do mundo ou entretenimento?",
    "Aula 2: Confeccionando seus implementos",
    "Aula 3: Se familiarizando com suas próprias criações",
    "Aula 4: Regras na prática",
    "Aula 5: Combate 1x1",
    "Aula 6: Ampliando a escala da batalha",
    "Aula 7: Hora do torneio",
  ],
  // Arte - 6º Ano - 4º Bimestre
  "Arte|6º Ano|4º Bimestre": [
    "Aula 1: Fugindo com o circo: Memórias do circo paulista",
    "Aula 2: O poder do riso",
    "Aula 3: O Augusto e o Branco",
    "Aula 4: A trupe chega: funções e organização",
    "Aula 5: Teatro e circo: velhos companheiros",
    "Aula 6: A comédia e a farsa no circo",
    "Aula 7: Meu palhaço pessoal",
    "Aula 8: O nariz de palhaço",
    "Aula 9: Levantando a lona do circo",
    "Aula 10: Confusão nos bastidores?",
    "Aula 11: Criando e ensaiando cenas cômicas",
    "Aula 12: O grande dia: o circo-teatro chegou!",
  ],
  // Arte - 7º Ano - 4º Bimestre
  "Arte|7º Ano|4º Bimestre": [
    "Aula 1: Fundamentos do teatro de animação",
    "Aula 2: Fantoche de luva e o despertar da voz!",
    "Aula 3: Fantoche de luva: criando pequenas cenas!",
    "Aula 4: Explorando o teatro de sombras: Luz, recorte e distorção",
    "Aula 5: Animando os objetos do mundo",
    "Aula 6: Combinando formas animadas",
    "Aula 7: Improvisação em grupos",
    "Aula 8: Dramaturgia de formas animadas",
    "Aula 9: Ensaiando a cena",
    "Aula 10: Ensaio geral",
    "Aula 11: Apresentações Finais",
    "Aula 12: Retrospectiva e reflexão",
  ],
  // Arte - 8º Ano - 4º Bimestre
  "Arte|8º Ano|4º Bimestre": [
    "Aula 1: O teatro e (á) a nossa história",
    "Aula 2: Teatro e ancestralidade",
    "Aula 3: Os elementos que fazem o teatro",
    "Aula 4: Escalando e refinando",
    "Aula 5: Apresentação das cenas",
    "Aula 6: Minhas raízes teatrais",
  ],
  // Arte - 9º Ano - 4º Bimestre
  "Arte|9º Ano|4º Bimestre": [
    "Aula 1: A Vida dos atores: Do tablado ao tapete vermelho",
    "Aula 2: Romeu no palco, Julieta na tela",
    "Aula 3: Caminhos de construção de personagem",
    "Aula 4: Para além da interpretação",
    "Aula 5: A construção da cena",
    "Aula 6: Luz, câmera e ação!",
    "Aula 7: No tapete vermelho!",
  ],
  // Artes e Mídias Digitais - 3º Ano - 4º Bimestre
  "Artes e Mídias Digitais|3º Ano|4º Bimestre": [
    "Aula 1: Divulgação científica como linguagem midiática",
    "Aula 2: Divulgação Científica: Da Ideia à Roteirização",
    "Aula 3: Divulgação Científica: Roteirização e Planejamento de Gravação",
    "Aula 4: Gravação: luz, câmera e ação!",
    "Aula 5: Portfólio: Processo para Elaboração",
    "Aula 6: Divulgando meu portfólio",
  ],
  // Atualidades - 3º Ano - 4º Bimestre
  "Atualidades|3º Ano|4º Bimestre": [
    "Aula 1: Repertório I: A ciência da urgência — o que os dados do clima já mostram",
    "Aula 2: Repertório II: Justiça climática — quem paga a conta da crise?",
    "Aula 3: Estudo de caso e discussão: crise climática no presente (Parte 1)",
    "Aula 4: Estudo de caso e discussão: crise climática no presente (Parte 2)",
    "Aula 5: Oficina de escrita: como traduzir ciência para o público? (Parte 1)",
    "Aula 6: Oficina de escrita e síntese: Texto de divulgação científica - Por que este caso importa agora? (Parte 2)",
    "Aula 7: Repertório I: Biotecnologia, poder e desigualdade",
    "Aula 8: Repertório II: Corpos aprimorados — a retórica da inovação e seus limites",
    "Aula 9: Estudo de caso e discussão — Quem terá acesso ao futuro? (Parte 1)",
    "Aula 10: Estudo de caso e discussão — Quem terá acesso ao futuro? (Parte 2)",
    "Aula 11: Oficina de escrita — A reportagem interpretativa de futuro (Parte 1)",
    "Aula 12: Oficina de escrita: A reportagem interpretativa de futuro - Quem controla o futuro dos corpos (Parte 2)",
  ],
  // Educação Financeira - 7º Ano - 4º Bimestre
  "Educação Financeira|7º Ano|4º Bimestre": [
    "Aula 1: Introdução à renda ‒ Parte 1",
    "Aula 2: Introdução à renda ‒ Parte 2",
    "Aula 3: Quanto tem na conta?",
    "Aula 4: Chegou a fatura. E agora?",
    "Aula 5: Cupom fiscal: para que serve? ‒ Parte 1",
    "Aula 6: Cupom fiscal: para que serve? ‒ Parte 2",
    "Aula 7: Porcentagem no dia a dia - Parte 1: na mídia",
    "Aula 8: Porcentagem no dia a dia - Parte 2: descontos e acréscimos",
    "Aula 9: Porcentagem no dia a dia - Parte 3: contas de consumo",
    "Aula 10: Porcentagem no dia a dia - Parte 4: metas e gráficos",
    "Aula 11: Construindo gráficos financeiros – Parte 1",
    "Aula 12: Construindo gráficos financeiros – Parte 2",
  ],
  // Educação Financeira - 8º Ano - 4º Bimestre
  "Educação Financeira|8º Ano|4º Bimestre": [
    "Aula 1: Cidadania Financeira: o que é e por que é importante?",
    "Aula 2: Cidadania financeira",
    "Aula 3: Ética financeira - Parte 1",
    "Aula 4: Ética financeira - Parte 2",
    "Aula 5: Segurança financeira e tecnologia",
    "Aula 6: Proteção de Dados e Privacidade Financeira.",
    "Aula 7: Consumo consciente - Parte 1",
    "Aula 8: Consumo consciente - Parte 2",
    "Aula 9: Consumo consciente - Parte 3",
    "Aula 10: Black Friday, preços ao longo do tempo e promoções relâmpago",
    "Aula 11: Projeto final: construindo o Guia da Cidadania Financeira - Parte 1",
    "Aula 12: Projeto final: apresentando o Guia da Cidadania Financeira - Parte 2",
  ],
  // Práticas Experimentais - 6º Ano - 4º Bimestre
  "Práticas Experimentais|6º Ano|4º Bimestre": [
    "Aula 1: Luz e cor",
    "Aula 2: Audição e equilíbrio",
    "Aula 3: Tato",
    "Aula 4: Luz e cor",
  ],
  // Práticas Experimentais - 7º Ano - 4º Bimestre
  "Práticas Experimentais|7º Ano|4º Bimestre": [
    "Aula 1: As bactérias",
    "Aula 2: Sistema imune humano",
    "Aula 3: O que são vacinas?",
  ],
  // Práticas Experimentais - 8º Ano - 4º Bimestre
  "Práticas Experimentais|8º Ano|4º Bimestre": [
    "Aula 1: Magnetismo",
    "Aula 2: Cargas elétricas e eletrização",
    "Aula 3: Condutores e isolantes",
  ],
  // Práticas Experimentais - 9º Ano - 4º Bimestre
  "Práticas Experimentais|9º Ano|4º Bimestre": [
    "Aula 1: Introdução à cinemática",
    "Aula 2: Aceleração",
    "Aula 3: Planetas rochosos",
  ],
  // Química - 2º Ano - 4º Bimestre
  "Química|2º Ano|4º Bimestre": [
    "Aula 1: A história e evolução das pilhas e baterias.",
    "Aula 2: Processos eletroquímicos.",
    "Aula 3: Oxirredução e condução de energia.",
    "Aula 4: Funcionamento de pilhas e baterias.",
    "Aula 5: Avaliando a diferença de potencial de uma pilha.",
    "Aula 6: Construindo uma pilha ou bateria.",
    "Aula 7: Células voltaicas.",
    "Aula 8: Eletrólise ígnea e aquosa.",
    "Aula 9: Galvanoplastia.",
    "Aula 10: Galvanoplastia: uma aplicação da eletrólise.",
    "Aula 11: Primeira lei da eletrólise.",
    "Aula 12: Lixo eletrônico: descarte e impactos ambientais.",
  ],
  // Ciências - 6º Ano - 4º Bimestre
  "Ciências|6º Ano|4º Bimestre": [
    "Aula 1: Organização dos órgãos em sistemas do corpo humano",
    "Aula 2: Sistema nervoso",
    "Aula 3: Estrutura do neurônio",
    "Aula 4: Sistema nervoso central",
    "Aula 5: Sistema nervoso periférico",
    "Aula 6: Sentido da visão",
    "Aula 7: Simulador: funcionamento do olho humano",
    "Aula 8: Sentidos do paladar e do olfato",
    "Aula 9: Sentido do tato",
    "Aula 10: Sentido da audição e equilíbrio",
    "Aula 11: Sistema esquelético",
    "Aula 12: Sistema muscular",
    "Aula 13: Mão biônica: acessibilidade",
    "Aula 14: Mão biônica: finalização",
    "Aula 15: Efeitos das drogas no organismo",
    "Aula 16: Conscientização sobre o enfrentamento ao uso de drogas",
    "Aula 17: Retomada: Sistema nervoso",
    "Aula 18: Retomada: Sistema locomotor",
  ],
  // Ciências - 7º Ano - 4º Bimestre
  "Ciências|7º Ano|4º Bimestre": [
    "Aula 1: Saúde",
    "Aula 2: Vírus",
    "Aula 3: Doenças causadas por vírus",
    "Aula 4: Bactérias",
    "Aula 5: Doenças causadas por bactérias",
    "Aula 6: Pandemia, endemia, epidemia e surto",
    "Aula 7: Como as pandemias se espalham?",
    "Aula 8: Sistema imune humano: principais características",
    "Aula 9: Sistema imune humano: resposta imune",
    "Aula 10: Vacinas",
    "Aula 11: Processo de fabricação de vacinas",
    "Aula 12: A importância da vacinação: um estudo de caso",
    "Aula 13: A importância da vacinação: reflexão",
    "Aula 14: Saneamento básico: impactos na vida cotidiana",
    "Aula 15: Saneamento básico: papel na sustentabilidade",
    "Aula 16: Indicadores de saúde",
    "Aula 17: Retomada: Epidemiologia",
    "Aula 18: Retomada: Saúde",
  ],
  // Ciências - 8º Ano - 4º Bimestre
  "Ciências|8º Ano|4º Bimestre": [
    "Aula 1: Energia no cotidiano",
    "Aula 2: Fontes de energia",
    "Aula 3: Transformação de energia",
    "Aula 4: Energias renováveis",
    "Aula 5: Magnetismo",
    "Aula 6: Cargas elétricas e eletrização - Parte 1",
    "Aula 7: Cargas elétricas e eletrização - Parte 2",
    "Aula 8: Corrente elétrica",
    "Aula 9: Corrente alternada e corrente contínua",
    "Aula 10: Condutores e isolantes",
    "Aula 11: Distribuição de energia",
    "Aula 12: Circuitos elétricos",
    "Aula 13: Circuito em série e circuito em paralelo",
    "Aula 14: Cuidados em relação à eletricidade",
    "Aula 15: Simulador de um circuito elétrico - Parte 1",
    "Aula 16: Simulador de um circuito elétrico - Parte 2",
    "Aula 17: Classificação dos aparelhos eletrônicos",
    "Aula 18: Consumo dos aparelhos eletrônicos",
    "Aula 19: Ações de economia de eletricidade",
    "Aula 20: Simulador: ações de economia de eletricidade",
    "Aula 21: Consumo e desenvolvimento sustentável",
    "Aula 22: Retomada: Energia",
    "Aula 23: Retomada: Fenômenos elétricos e magnéticos",
    "Aula 24: Retomada: Distribuição de energia",
  ],
  // Ciências - 9º Ano - 4º Bimestre
  "Ciências|9º Ano|4º Bimestre": [
    "Aula 1: História do estudo dos movimentos",
    "Aula 2: Introdução à cinemática e Primeira Lei de Newton",
    "Aula 3: Posição, distância e espaço percorrido",
    "Aula 4: Velocidade - Parte 1",
    "Aula 5: Velocidade - Parte 2",
    "Aula 6: Aceleração, força e leis de Newton - Parte 1",
    "Aula 7: Aceleração, força e leis de Newton - Parte 2",
    "Aula 8: Aula desafio: Cálculo da velocidade escalar média",
    "Aula 9: Aula desafio: Cálculo da aceleração escalar média",
    "Aula 10: Modelos geocêntrico e heliocêntrico: a construção do conhecimento científico ao longo do tempo",
    "Aula 11: Origem do Sistema Solar e de seus astros",
    "Aula 12: Planetas do Sistema Solar",
    "Aula 13: Ciclo de vida das estrelas",
    "Aula 14: Observação do céu",
    "Aula 15: Constelações indígenas",
    "Aula 16: Planetário virtual",
    "Aula 17: Força gravitacional",
    "Aula 18: Movimentos da Terra e da Lua",
    "Aula 19: Vida fora da Terra",
    "Aula 20: Exploração espacial",
    "Aula 21: Retomada: Movimento",
    "Aula 22: Retomada: Sistema Solar",
    "Aula 23: Retomada: Observação do céu",
    "Aula 24: Retomada: Exploração espacial",
  ],
  // Sociologia - 2º Ano - 4º Bimestre
  "Sociologia|2º Ano|4º Bimestre": [
    "Aula 1: Mudanças sociais: como as sociedades se transformam",
    "Aula 2: Globalização, tecnologias e mudanças sociais",
    "Aula 3: Mudanças sociais e contemporaneidade",
    "Aula 4: A sociedade de risco",
    "Aula 5: Mundo do trabalho e capitalismo",
    "Aula 6: Tecnologias e mundo do trabalho",
    "Aula 7: Mudanças no mundo do trabalho",
    "Aula 8: Trabalho e riscos na contemporaneidade",
    "Aula 9: Sociedade de consumidores",
    "Aula 10: Indústria cultural, consumismo e identidade",
    "Aula 11: A vida digital e seus riscos",
    "Aula 12: Viver para o consumismo?",
  ],
  // Aprofundamento Sociologia - 3º Ano - 4º Bimestre
  "Aprofundamento Sociologia|3º Ano|4º Bimestre": [
    "Aula 1: A questão indígena: culturas e modos de conhecer o mundo dos povos originários",
    "Aula 2: Territórios, identidades e modos de vida dos povos originários",
    "Aula 3: Violências contra os povos indígenas",
    "Aula 4: Povos indígenas, direitos humanos e cidadania",
    "Aula 5: A questão negra: as relações raciais no Brasil",
    "Aula 6: Racismos e violências contra a população negra",
    "Aula 7: Negritude: cultura, identidade e resistência",
    "Aula 8: Quilombolas: modos de vida, resistência e luta por direitos",
    "Aula 9: A questão de gênero",
    "Aula 10: Violências de gênero e sexualidade",
    "Aula 11: Gênero e interseccionalidade",
    "Aula 12: Gênero e cidadania",
  ],
  // Sociologia - 3º Ano - 4º Bimestre
  "Sociologia|3º Ano|4º Bimestre": [
    "Aula 1: A questão indígena: culturas e modos de conhecer o mundo dos povos originários",
    "Aula 2: Territórios, identidades e modos de vida dos povos originários",
    "Aula 3: Violências contra os povos indígenas",
    "Aula 4: Povos indígenas, direitos humanos e cidadania",
    "Aula 5: A questão negra: as relações raciais no Brasil",
    "Aula 6: Racismos e violências contra a população negra",
    "Aula 7: Negritude: cultura, identidade e resistência",
    "Aula 8: Quilombolas: modos de vida, resistência e luta por direitos",
    "Aula 9: A questão de gênero",
    "Aula 10: Violências de gênero e sexualidade",
    "Aula 11: Gênero e interseccionalidade",
    "Aula 12: Gênero e cidadania",
  ],
  // Física - 2º Ano - 4º Bimestre
  "Física|2º Ano|4º Bimestre": [
    "Aula 1: Propagação retilínea da luz",
    "Aula 2: Exercícios sobre propagação da luz, sombras e câmara escura",
    "Aula 3: Da reflexão à formação de imagens em espelhos planos",
    "Aula 4: Leis da reflexão e formação de imagens em espelhos planos",
    "Aula 5: Elementos geométricos e características dos espelhos esféricos gaussianos",
    "Aula 6: Raios particulares e representações gráficas em espelhos esféricos",
    "Aula 7: Exercícios propostos: Raios luminosos e imagens em espelhos esféricos",
    "Aula 8: Equação de Gauss e aumento linear",
    "Aula 9: Exercícios sobre referencial Gaussiano e equação de Gauss",
    "Aula 10: Índices de refração e Leis da refração da luz",
    "Aula 11: Comportamento óptico em lentes delgadas",
    "Aula 12: Resolvendo problemas com equação de Gauss e aumento linear em lentes",
  ],
  // Física - 3º Ano - 4º Bimestre
  "Física|3º Ano|4º Bimestre": [
    "Aula 1: Lei de Faraday-Neumann",
    "Aula 2: O nascimento da física quântica: como o calor mudou a física",
    "Aula 3: A luz em pacotes: quando Einstein inventou os fótons",
    "Aula 4: Matéria que ondula: a estranha dualidade onda-partícula",
    "Aula 5: Entre dois mundos: onde a física clássica encontra a quântica",
    "Aula 6: O limite do conhecimento: a incerteza como lei da natureza",
    "Aula 7: Exercícios propostos sobre trocas de calor entre corpos",
    "Aula 8: Exercícios sobre Leis de Ohm, Kirchhoff e associação de resistores.",
    "Aula 9: Aprendendo a calcular campo e potencial elétrico gerado por cargas pontuais.",
    "Aula 10: Exercícios sobre equação dos gases ideais e processos termodinâmicos.",
    "Aula 11: Exercícios sobre segunda e terceira Lei da termodinâmica.",
    "Aula 12: Problemas de empuxo e equilíbrio em corpos imersos.",
  ],
  // Biologia - 2º Ano - 4º Bimestre
  "Biologia|2º Ano|4º Bimestre": [
    "Aula 1: Saúde e bem-estar dos adolescentes",
    "Aula 2: Infecções sexualmente transmissíveis",
    "Aula 3: Sistema endócrino e contraceptivos hormonais",
    "Aula 4: Sistema reprodutor e outros métodos contraceptivos",
    "Aula 5: Sistema Nervoso",
    "Aula 6: Como as drogas podem impactar o sistema nervoso",
    "Aula 7: Drogas lícitas: tabaco e nicotina",
    "Aula 8: Vulnerabilidade dos jovens à desinformação",
    "Aula 9: Obesidade e desnutrição",
    "Aula 10: Sistema endócrino e diabetes",
    "Aula 11: Higiene dos alimentos",
    "Aula 12: Protozooses e saneamento básico: giardíase e amebíase",
  ],
  // Português - 6º Ano - 4º Bimestre
  "Português|6º Ano|4º Bimestre": [
    "Aula 1: Ler é ver além! - Parte 1",
    "Aula 2: Ler é ver além! - Parte 2",
    "Aula 3: Fatos - Parte 1",
    "Aula 4: Fatos - Parte 2",
    "Aula 5: Deu na mídia! - Parte 1",
    "Aula 6: Deu na mídia! - Parte 2",
    "Aula 7: Poemas e palavras - Parte 1",
    "Aula 8: Um espaço de respeito e combinados – Parte 2",
    "Aula 9: Uma história clássica – Parte 1",
    "Aula 10: Uma história clássica – Parte 2",
    "Aula 11: Rindo e aprendendo – Parte 1",
    "Aula 12: Rindo e aprendendo – Parte 2",
    "Aula 13: Consum ou criativo? – Parte 1",
    "Aula 14: Consum ou criativo? – Parte 2",
    "Aula 15: Histórias de mistério – Parte 1",
    "Aula 16: Histórias de mistério – Parte 2",
    "Aula 17: O povo conta – Parte 1",
    "Aula 18: O povo conta – Parte 2",
    "Aula 19: A sabedoria das lendas indígenas – Parte 1",
    "Aula 20: A sabedoria das lendas indígenas – Parte 2",
    "Aula 21: O mundo dos mitos – Parte 1",
    "Aula 22: O mundo dos mitos – Parte 2",
    "Aula 23: Arrepios literários – Parte 1",
    "Aula 24: Arrepios literários – Parte 2",
  ],
  // Português - 7º Ano - 4º Bimestre
  "Português|7º Ano|4º Bimestre": [
    "Aula 1: Entre o verbal e o não verbal: construção de sentidos – Parte 1",
    "Aula 2: Entre o verbal e o não verbal: construção de sentidos – Parte 2",
    "Aula 3: Real ou imaginário? – Parte 1",
    "Aula 4: Real ou imaginário? – Parte 2",
    "Aula 5: Histórias que marcaram – Parte 1",
    "Aula 6: Histórias que marcaram – Parte 2",
    "Aula 7: Uma história em vários ângulos – Parte 1",
    "Aula 8: Uma história em vários ângulos – Parte 2",
    "Aula 9: A língua que falamos – Parte 1",
    "Aula 10: A língua que falamos – Parte 2",
    "Aula 11: Escrita digital – Parte 1",
    "Aula 12: Escrita digital – Parte 2",
    "Aula 13: A voz da notícia – Parte 1",
    "Aula 14: A voz da notícia – Parte 2",
    "Aula 15: Por trás das câmeras do telejornalismo – Parte 1",
    "Aula 16: Por trás das câmeras do telejornalismo – Parte 2",
    "Aula 17: Autores indígenas – Parte 1",
    "Aula 18: Autores indígenas – Parte 2",
    "Aula 19: Proteção por escrito – Parte 1",
    "Aula 20: Proteção por escrito – Parte 2",
    "Aula 21: Mesclando gêneros – Parte 1",
    "Aula 22: Mesclando gêneros – Parte 2",
    "Aula 23: Páginas de aventura – Parte 1",
    "Aula 24: Páginas de aventura – Parte 2",
  ],
  // Português - 8º Ano - 4º Bimestre
  "Português|8º Ano|4º Bimestre": [
    "Aula 1: Narrativas cotidianas – Parte 1",
    "Aula 2: Narrativas cotidianas – Parte 2",
    "Aula 3: Narrativas populares – Parte 1",
    "Aula 4: Narrativas populares – Parte 2",
    "Aula 5: Mundos fantásticos – Parte 1",
    "Aula 6: Mundos fantásticos – Parte 2",
    "Aula 7: Versos com intenções – Parte 1",
    "Aula 8: Versos com intenções – Parte 2",
    "Aula 9: Pensar e argumentar – Parte 1",
    "Aula 10: Pensar e argumentar – Parte 2",
    "Aula 11: Brincar com sentidos – Parte 1",
    "Aula 12: Brincar com sentidos – Parte 2",
    "Aula 13: Histórias que encantam – Parte 1",
    "Aula 14: Histórias que encantam – Parte 2",
    "Aula 15: Nas entrelinhas da melodia – Parte 1",
    "Aula 16: Nas entrelinhas da melodia – Parte 2",
    "Aula 17: Vozes que transformam – Parte 1",
    "Aula 18: Vozes que transformam – Parte 2",
    "Aula 19: Cartazes que impactam e convencem – Parte 1",
    "Aula 20: Cartazes que impactam e convencem – Parte 2",
    "Aula 21: Palavras de incentivo e reflexão – Parte 1",
    "Aula 22: Palavras de incentivo e reflexão – Parte 2",
    "Aula 23: Falar e ouvir: discutir para construir – Parte 1",
    "Aula 24: Falar e ouvir: discutir para construir – Parte 2",
  ],
  // Português - 9º Ano - 4º Bimestre
  "Português|9º Ano|4º Bimestre": [
    "Aula 1: Regras também fazem arte – Parte 1",
    "Aula 2: Regras também fazem arte – Parte 2",
    "Aula 3: Poemas para ver – Parte 1",
    "Aula 4: Poemas para ver – Parte 2",
    "Aula 5: A arte da representação – Parte 1",
    "Aula 6: A arte da representação – Parte 2",
    "Aula 7: Desafios da juventude em histórias marcantes – Parte 1",
    "Aula 8: Desafios da juventude em histórias marcantes – Parte 2",
    "Aula 9: Capítulos que fazem história – Parte 1",
    "Aula 10: Capítulos que fazem história – Parte 2",
    "Aula 11: Quem disse o quê? – Parte 1",
    "Aula 12: Quem disse o quê? – Parte 2",
    "Aula 13: Diálogos sob atenção – Parte 1",
    "Aula 14: Diálogos sob atenção – Parte 2",
    "Aula 15: Diálogos que geram histórias – Parte 1",
    "Aula 16: Diálogos que geram histórias – Parte 2",
    "Aula 17: Pensar e compartilhar – Parte 1",
    "Aula 18: Pensar e compartilhar – Parte 2",
    "Aula 19: Entre direitos e deveres – Parte 1",
    "Aula 20: Entre direitos e deveres – Parte 2",
    "Aula 21: Palavras que humanizam, textos que protegem – Parte 1",
    "Aula 22: Palavras que humanizam, textos que protegem – Parte 2",
    "Aula 23: Estruturando o pensamento",
    "Aula 24: Desafio do mundo real",
  ],
  // Português - 2º Ano - 4º Bimestre
  "Português|2º Ano|4º Bimestre": [
    "Aula 1: Simbolismo em diálogo: Baudelaire e Cruz e Sousa",
    "Aula 2: Simbolismo no Brasil",
    "Aula 3: Produzindo poemas, despertando os sentidos!",
    "Aula 4: Simbolistas na Vibe!: mostra de poemas!",
    "Aula 5: A prosa regionalista romântica: pais e filhos em Inocência",
    "Aula 6: Perfis femininos no romance urbano: Lucíola",
    "Aula 7: Perfis femininos no romance urbano: Senhora",
    "Aula 8: Traição ou não traição? Dom Casmurro, de Machado de Assis",
    "Aula 9: Capitu e Desdêmona: entre vozes e narrativas",
    "Aula 10: Júlia Lopes de Almeida: uma escritora à frente de seu tempo",
    "Aula 11: Fanzine literário: palavras, arte e ação!",
    "Aula 12: Compartilhando fanzines literários: palavras, arte e ação!",
    "Aula 13: O texto dissertativo-argumentativo e sua importância no Enem – Parte 1",
    "Aula 14: O texto dissertativo-argumentativo e sua importância no Enem – Parte 2",
    "Aula 15: Texto dissertativo-argumentativo – Parte 3",
    "Aula 16: Texto dissertativo-argumentativo – Parte 4",
    "Aula 17: Para que servem as leis?",
    "Aula 18: Se liga: seus direitos no Estatuto da Juventude",
    "Aula 19: Vozes da periferia: A revolução dos saraus e slams",
    "Aula 20: Vozes da periferia: o slam, a batalha de versos",
    "Aula 21: Vozes da periferia: produzindo slams",
    "Aula 22: Vozes da periferia: a batalha de versos",
    "Aula 23: Playlist literária – Parte 1",
    "Aula 24: Playlist literária – Parte 2",
  ],
  // Português - 3º Ano - 4º Bimestre
  "Português|3º Ano|4º Bimestre": [
    "Aula 1: Textos contemporâneos africanos: Moçambique – Parte 1",
    "Aula 2: Textos contemporâneos africanos: Moçambique – Parte 2",
    "Aula 3: Textos contemporâneos africanos: Angola",
    "Aula 4: Textos contemporâneos africanos: Cabo Verde",
    "Aula 5: Textos contemporâneos portugueses – Parte 1",
    "Aula 6: Textos contemporâneos portugueses – Parte 2",
    "Aula 7: Textos contemporâneos indígenas – Parte 1",
    "Aula 8: Textos contemporâneos indígenas – Parte 2",
    "Aula 9: Texto dissertativo-argumentativo – Parte 1",
    "Aula 10: Texto dissertativo-argumentativo – Parte 2",
    "Aula 11: Literatura brasileira e a poesia de Ferreira Gullar",
    "Aula 12: Literatura brasileira e a poesia de Paulo Leminski",
    "Aula 13: Literatura brasileira e a prosa de Rubem Braga",
    "Aula 14: Literatura brasileira e a prosa de Fernando Sabino",
    "Aula 15: Redação de vestibular como gênero – Parte 1",
    "Aula 16: Redação de vestibular como gênero – Parte 2",
    "Aula 17: Literatura brasileira contemporânea: Milton Hatoum – Parte 1",
    "Aula 18: Literatura brasileira contemporânea: Milton Hatoum – Parte 2",
    "Aula 19: Literatura brasileira contemporânea: Conceição Evaristo – Parte 1",
    "Aula 20: Literatura brasileira contemporânea: Conceição Evaristo – Parte 2",
    "Aula 21: Literatura nas redes sociais – Parte 1",
    "Aula 22: Literatura nas redes sociais – Parte 2",
    "Aula 23: Vozes das mulheres na literatura contemporânea brasileira – Parte 1",
    "Aula 24: Vozes das mulheres na literatura contemporânea brasileira – Parte 2",
  ],
  // Aprofundamento Filosofia - 3º Ano - 4º Bimestre
  "Aprofundamento Filosofia|3º Ano|4º Bimestre": [
    "Aula 1: A construção do sujeito moral",
    "Aula 2: Subjetivação e relações de poder",
    "Aula 3: A arte e utopia",
    "Aula 4: Arte e técnica na modernidade",
    "Aula 5: O consumo cultural",
    "Aula 6: A sociedade do espetáculo",
    "Aula 7: Trabalho e condição humana",
    "Aula 8: Emancipação e alienação",
    "Aula 9: Natureza e cultura",
    "Aula 10: Filósofos negros contra o colonialismo",
    "Aula 11: O que é o homem?",
    "Aula 12: Os desafios da convivência em um mundo plural",
  ],
  // Filosofia - 3º Ano - 4º Bimestre
  "Filosofia|3º Ano|4º Bimestre": [
    "Aula 1: A construção do sujeito moral",
    "Aula 2: Subjetivação e relações de poder",
    "Aula 3: A arte e utopia",
    "Aula 4: Arte e técnica na modernidade",
    "Aula 5: O consumo cultural",
    "Aula 6: A sociedade do espetáculo",
    "Aula 7: Trabalho e condição humana",
    "Aula 8: Emancipação e alienação",
    "Aula 9: Natureza e cultura",
    "Aula 10: Filósofos negros contra o colonialismo",
    "Aula 11: O que é o homem?",
    "Aula 12: Os desafios da convivência em um mundo plural",
  ],

  // História - 6º Ano - 1º Bimestre
  "História|6º Ano|1º Bimestre": [
    "Aula 1: O que é História e a contagem do tempo",
    "Aula 2: As fontes históricas e o trabalho do historiador",
    "Aula 3: As origens da humanidade e o Paleolítico",
    "Aula 4: A Revolução Neolítica e o surgimento das vilas",
  ],
  // História - 6º Ano - 2º Bimestre
  "História|6º Ano|2º Bimestre": [
    "Aula 1: Povos da Mesopotâmia: escrita e códigos de leis",
    "Aula 2: O Egito Antigo: religião, sociedade e poder dos faraós",
    "Aula 3: Os hebreus, fenícios e persas no mundo antigo",
  ],
  // História - 6º Ano - 3º Bimestre
  "História|6º Ano|3º Bimestre": [
    "Aula 1: Grécia Antiga: formação das Polis e democracia ateniense",
    "Aula 2: Esparta e a sociedade militarizada",
    "Aula 3: Roma Antiga: Monarquia e República",
    "Aula 4: O Império Romano e sua expansão",
  ],
  // História - 2º Ano - 4º Bimestre
  "História|2º Ano|4º Bimestre": [
    "Aula 1: Relações entre sujeitos, grupos e classes sociais diante de transformações técnicas",
    "Aula 2: Formação de diferentes países, povos e nações - Parte 1",
    "Aula 3: Formação de diferentes países, povos e nações - Parte 2",
    "Aula 4: Formação de diferentes países, povos e nações - Parte 3",
    "Aula 5: Formação de diferentes países, povos e nações - Parte 4",
    "Aula 6: Formação de diferentes países, povos e nações - Parte 5",
    "Aula 7: Desafios ambientais contemporâneos e princípios éticos - Parte 1",
    "Aula 8: Desafios ambientais contemporâneos e princípios éticos - Parte 2",
    "Aula 9: Desafios ambientais contemporâneos e princípios éticos - Parte 3",
    "Aula 10: Desafios ambientais contemporâneos e princípios éticos - Parte 4",
    "Aula 11: Indicadores de emprego, trabalho e renda - Parte 1",
    "Aula 12: Indicadores de emprego, trabalho e renda - Parte 2",
  ],
  // História - 3º Ano - 4º Bimestre
  "História|3º Ano|4º Bimestre": [
    "Aula 1: Formas de atuação social para redução da desigualdade, preconceito e violência",
    "Aula 2: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 1",
    "Aula 3: Pretensões de universalidade do conhecimento: ciência, tecnologia e sociedade",
    "Aula 4: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 2",
    "Aula 5: Formas de atuação social para redução da desigualdade - Parte 2",
    "Aula 6: Formas de atuação social para redução da desigualdade - Parte 3",
    "Aula 7: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 3",
    "Aula 8: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 4",
    "Aula 9: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 5",
    "Aula 10: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 6",
    "Aula 11: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 7",
    "Aula 12: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 8",
  ],
  // Geografia - 6º Ano - 4º Bimestre
  "Geografia|6º Ano|4º Bimestre": [
    "Aula 1: Características das paisagens dos lugares de vivência e fatores de transformação - Parte 1",
    "Aula 2: Características das paisagens dos lugares de vivência - Parte 2",
    "Aula 3: Características das paisagens dos lugares de vivência - Parte 3",
    "Aula 4: Características das paisagens dos lugares de vivência - Parte 4",
    "Aula 5: Características das paisagens dos lugares de vivência - Parte 5",
    "Aula 6: Distintas interações das sociedades com a natureza e impactos socioambientais",
    "Aula 7: Formação de grandes domínios morfoclimáticos no Brasil e intervenções humanas - Parte 1",
    "Aula 8: Formação de grandes domínios morfoclimáticos no Brasil - Parte 2",
    "Aula 9: Formação de grandes domínios morfoclimáticos no Brasil - Parte 3",
    "Aula 10: Padrões climáticos, vegetação e atividades econômicas - Parte 1",
    "Aula 11: Padrões climáticos, vegetação e atividades econômicas - Parte 2",
    "Aula 12: Padrões climáticos, vegetação e atividades econômicas - Parte 3",
    "Aula 13: Padrões climáticos, vegetação e atividades econômicas - Parte 4",
    "Aula 14: Padrões climáticos, vegetação e atividades econômicas - Parte 5",
    "Aula 15: Padrões climáticos, vegetação e atividades econômicas - Parte 6",
    "Aula 16: Padrões climáticos, vegetação e atividades econômicas - Parte 7",
    "Aula 17: Padrões climáticos, vegetação e atividades econômicas - Parte 8",
    "Aula 18: Padrões climáticos, vegetação e atividades econômicas - Parte 9",
  ],
  // Geografia - 7º Ano - 4º Bimestre
  "Geografia|7º Ano|4º Bimestre": [
    "Aula 1: Integração entre os lugares e a vida cotidiana das populações - Parte 1",
    "Aula 2: Integração entre os lugares e a vida cotidiana das populações - Parte 2",
    "Aula 3: Integração entre os lugares e a vida cotidiana das populações - Parte 3",
    "Aula 4: Integração entre os lugares e a vida cotidiana das populações - Parte 4",
    "Aula 5: Transformações dos espaços geográficos e integração entre os lugares - Parte 1",
    "Aula 6: Transformações dos espaços geográficos, paisagens e integração entre lugares - Parte 2",
    "Aula 7: Transformação das paisagens naturais e antrópicas e dinâmicas populacionais - Parte 1",
    "Aula 8: Transformação das paisagens naturais e antrópicas e dinâmicas populacionais - Parte 2",
    "Aula 9: Transformação das paisagens e representações cartográficas - Parte 1",
    "Aula 10: Transformação das paisagens e representações cartográficas - Parte 2",
    "Aula 11: Transformação das paisagens naturais e antrópicas - Parte 3",
    "Aula 12: Transformação das paisagens naturais e antrópicas - Parte 4",
    "Aula 13: Transformações dos espaços geográficos e dinâmica territorial",
    "Aula 14: Transformações dos espaços geográficos e representações cartográficas",
    "Aula 15: Processos de urbanização e desenvolvimento territorial",
    "Aula 16: Contradições do processo de urbanização em diferentes escalas",
    "Aula 17: Processos de urbanização no território brasileiro, contradições e representações cartográficas",
    "Aula 18: Processos de urbanização no território brasileiro e suas contradições",
  ],
  // Geografia - 8º Ano - 4º Bimestre
  "Geografia|8º Ano|4º Bimestre": [
    "Aula 1: Papel dos países desenvolvidos na economia global e fluxos de capitais",
    "Aula 2: Dinâmicas de migração contemporâneas e seus impactos socioeconômicos - Parte 1",
    "Aula 3: Atuação das empresas transnacionais e importância dos recursos hídricos",
    "Aula 4: Impactos ambientais decorrentes das atividades produtivas em nível global",
    "Aula 5: Papel dos países desenvolvidos e atuação das empresas transnacionais",
    "Aula 6: Atuação das empresas transnacionais e principais problemas ambientais globais",
    "Aula 7: Dinâmicas de migração contemporâneas e seus impactos socioeconômicos - Parte 2",
    "Aula 8: Dinâmicas de migração contemporâneas e seus impactos socioeconômicos - Parte 3",
    "Aula 9: Fluxos de mercadorias e pessoas no contexto da globalização",
    "Aula 10: Desigualdades regionais e processos de desenvolvimento econômico",
    "Aula 11: Dinâmicas de migração contemporâneas e seus impactos socioeconômicos - Parte 4",
    "Aula 12: Papel das organizações internacionais na governança global e resolução de conflitos",
  ],
  // Geografia - 9º Ano - 4º Bimestre
  "Geografia|9º Ano|4º Bimestre": [
    "Aula 1: Organismos internacionais e fluxos migratórios na globalização - Parte 1",
    "Aula 2: Organismos internacionais e fluxos migratórios na globalização - Parte 2",
    "Aula 3: Organismos internacionais e fluxos migratórios na globalização - Parte 3",
    "Aula 4: Organismos internacionais e fluxos migratórios na globalização - Parte 4",
    "Aula 5: Organismos internacionais, governança global e crises humanitárias - Parte 1",
    "Aula 6: Organismos internacionais, governança global e crises humanitárias - Parte 2",
    "Aula 7: Organismos internacionais, governança global e crises humanitárias - Parte 3",
    "Aula 8: Aspectos culturais e demográficos do mundo contemporâneo - Parte 1",
    "Aula 9: Aspectos culturais e demográficos do mundo contemporâneo - Parte 2",
    "Aula 10: Aspectos culturais e demográficos do mundo contemporâneo - Parte 3",
    "Aula 11: Aspectos culturais e demográficos do mundo contemporâneo - Parte 4",
    "Aula 12: Aspectos culturais e demográficos do mundo contemporâneo - Parte 5",
  ],
  // Geografia - 2º Ano - 4º Bimestre
  "Geografia|2º Ano|4º Bimestre": [
    "Aula 1: Atuação das sociedades na transformação de diferentes lugares e regiões",
    "Aula 2: Formação de diferentes populações e suas relações com o meio ambiente - Parte 1",
    "Aula 3: Formação de diferentes populações e suas relações com o meio ambiente - Parte 2",
    "Aula 4: Formação de diferentes populações e suas relações com o meio ambiente - Parte 3",
    "Aula 5: Formação de diferentes populações e suas relações com o meio ambiente - Parte 4",
    "Aula 6: Formação de diferentes populações e suas relações com o meio ambiente - Parte 5",
    "Aula 7: Processos de ocupação do espaço geográfico e consequências socioambientais - Parte 1",
    "Aula 8: Processos de ocupação do espaço geográfico e consequências socioambientais - Parte 2",
    "Aula 9: Processos de ocupação do espaço geográfico e consequências socioambientais - Parte 3",
    "Aula 10: Processos de ocupação do espaço geográfico e consequências socioambientais - Parte 4",
    "Aula 11: Transformações sociais e econômicas decorrentes da globalização - Parte 1",
    "Aula 12: Transformações sociais e econômicas decorrentes da globalização - Parte 2",
    "Aula 13: Transformações sociais e econômicas decorrentes da globalização - Parte 3",
  ],
  // Geografia - 3º Ano - 4º Bimestre
  "Geografia|3º Ano|4º Bimestre": [
    "Aula 1: Formas de atuação social para redução da desigualdade, preconceito e violência - Parte 1",
    "Aula 2: Processos de produção e circulação de riquezas, mercadorias e pessoas - Parte 1",
    "Aula 3: Universalidade do conhecimento e relações entre ciência, tecnologia e sociedade",
    "Aula 4: Processos de produção e circulação de riquezas, mercadorias e pessoas - Parte 2",
    "Aula 5: Formas de atuação social para redução da desigualdade, preconceito e violência - Parte 2",
    "Aula 6: Formas de atuação social para redução da desigualdade, preconceito e violência - Parte 3",
    "Aula 7: Processos de produção e circulação de riquezas, mercadorias e pessoas - Parte 3",
    "Aula 8: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 1",
    "Aula 9: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 2",
    "Aula 10: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 3",
    "Aula 11: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 4",
    "Aula 12: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 5",
  ],
  // Matemática - 6º Ano - 4º Bimestre
  "Matemática|6º Ano|4º Bimestre": [
    "Aula 1: Localização de pontos no plano cartesiano - Parte 1",
    "Aula 2: Localização de pontos no plano cartesiano - Parte 2",
    "Aula 3: Relações entre vértices, faces e arestas de prismas e pirâmides - Parte 1",
    "Aula 4: Relações entre vértices, faces e arestas de prismas e pirâmides - Parte 2",
    "Aula 5: Relações entre vértices, faces e arestas de prismas e pirâmides - Parte 3",
    "Aula 6: Relações entre vértices, faces e arestas de prismas e pirâmides - Parte 4",
    "Aula 7: Localização de pontos no plano cartesiano - Parte 3",
    "Aula 8: Plano cartesiano e relações em prismas e pirâmides - Parte 1",
    "Aula 9: Plano cartesiano e relações em prismas e pirâmides - Parte 2",
    "Aula 10: Plano cartesiano e relações em prismas e pirâmides - Parte 3",
    "Aula 11: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 1",
    "Aula 12: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 2",
    "Aula 13: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 3",
    "Aula 14: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 4",
    "Aula 15: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 5",
    "Aula 16: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 6",
    "Aula 17: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 7",
    "Aula 18: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 8",
    "Aula 19: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 9",
    "Aula 20: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 10",
    "Aula 21: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 11",
    "Aula 22: MDC, MMC e problemas envolvendo grandezas - Parte 1",
    "Aula 23: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 12",
    "Aula 24: MDC, MMC e problemas envolvendo grandezas - Parte 2",
    "Aula 25: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 13",
    "Aula 26: MDC, MMC e problemas envolvendo grandezas - Parte 3",
    "Aula 27: MDC, MMC e problemas envolvendo grandezas - Parte 4",
    "Aula 28: MDC, MMC e problemas envolvendo grandezas - Parte 5",
    "Aula 29: MDC, MMC e problemas envolvendo grandezas - Parte 6",
    "Aula 30: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 14",
  ],
  // Matemática - 7º Ano - 4º Bimestre
  "Matemática|7º Ano|4º Bimestre": [
    "Aula 1: Medida da área de figuras geométricas utilizando expressões de cálculo - Parte 1",
    "Aula 2: Medida da área de figuras geométricas utilizando expressões de cálculo - Parte 2",
    "Aula 3: Medida da área de figuras geométricas utilizando expressões de cálculo - Parte 3",
    "Aula 4: Medida da área de figuras geométricas utilizando expressões de cálculo - Parte 4",
    "Aula 5: Medida da área de figuras geométricas utilizando expressões de cálculo - Parte 5",
    "Aula 6: Medida da área de figuras geométricas utilizando expressões de cálculo - Parte 6",
    "Aula 7: Medida da área de figuras geométricas utilizando expressões de cálculo - Parte 7",
    "Aula 8: Medida da área de figuras geométricas utilizando expressões de cálculo - Parte 8",
    "Aula 9: Medida da área de figuras geométricas utilizando expressões de cálculo - Parte 9",
    "Aula 10: Medida da área de figuras geométricas utilizando expressões de cálculo - Parte 10",
    "Aula 11: Variação de grandezas diretamente e inversamente proporcionais - Parte 1",
    "Aula 12: Variação de grandezas diretamente e inversamente proporcionais - Parte 2",
    "Aula 13: Variação de grandezas diretamente e inversamente proporcionais - Parte 3",
    "Aula 14: Variação de grandezas diretamente e inversamente proporcionais - Parte 4",
    "Aula 15: Variação de grandezas diretamente e inversamente proporcionais - Parte 5",
    "Aula 16: Variação de grandezas diretamente e inversamente proporcionais - Parte 6",
    "Aula 17: Variação de grandezas diretamente e inversamente proporcionais - Parte 7",
    "Aula 18: Variação de grandezas diretamente e inversamente proporcionais - Parte 8",
    "Aula 19: Variação de grandezas diretamente e inversamente proporcionais - Parte 9",
    "Aula 20: Variação de grandezas diretamente e inversamente proporcionais - Parte 10",
    "Aula 21: Problemas com números inteiros e operações fundamentais - Parte 1",
    "Aula 22: Problemas com números inteiros e operações fundamentais - Parte 2",
    "Aula 23: Problemas com números inteiros e operações fundamentais - Parte 3",
    "Aula 24: Problemas com números inteiros e operações fundamentais - Parte 4",
    "Aula 25: Problemas com números inteiros e operações fundamentais - Parte 5",
    "Aula 26: Problemas com números inteiros e operações fundamentais - Parte 6",
    "Aula 27: Problemas com números inteiros e operações fundamentais - Parte 7",
    "Aula 28: Problemas com números inteiros e operações fundamentais - Parte 8",
    "Aula 29: Problemas com números inteiros e operações fundamentais - Parte 9",
    "Aula 30: Problemas com números inteiros e operações fundamentais - Parte 10",
  ],
  // Matemática - 8º Ano - 4º Bimestre
  "Matemática|8º Ano|4º Bimestre": [
    "Aula 1: Probabilidade de eventos e contagem de casos possíveis - Parte 1",
    "Aula 2: Medidas de tendência central e dispersão - Parte 1",
    "Aula 3: Conceito de frequência e tabelas e gráficos estatísticos - Parte 1",
    "Aula 4: Medidas de tendência central e dispersão - Parte 2",
    "Aula 5: Medidas de tendência central e dispersão - Parte 3",
    "Aula 6: Medidas de tendência central e dispersão - Parte 4",
    "Aula 7: Cálculo de probabilidade em experimentos aleatórios - Parte 1",
    "Aula 8: Cálculo de probabilidade em experimentos aleatórios - Parte 2",
    "Aula 9: Medidas de tendência central e dispersão - Parte 5",
    "Aula 10: Medidas de tendência central e dispersão - Parte 6",
    "Aula 11: Variação de grandezas diretamente e inversamente proporcionais - Parte 11",
    "Aula 12: Simetria de reflexão, rotação e translação - Parte 1",
    "Aula 13: Simetria de reflexão, rotação e translação - Parte 2",
    "Aula 14: Simetria de reflexão, rotação e translação - Parte 3",
    "Aula 15: Simetria de reflexão, rotação e translação - Parte 4",
    "Aula 16: Transformações geométricas e propriedades de figuras planas - Parte 1",
    "Aula 17: Transformações geométricas e propriedades de figuras planas - Parte 2",
    "Aula 18: Transformações geométricas e propriedades de figuras planas - Parte 3",
    "Aula 19: Transformações geométricas e propriedades de figuras planas - Parte 4",
    "Aula 20: Transformações geométricas e propriedades de figuras planas - Parte 5",
    "Aula 21: Transformações geométricas e propriedades de figuras planas - Parte 6",
    "Aula 22: Operações fundamentais com números inteiros - Parte 1",
    "Aula 23: Operações com números racionais fracionários e decimais - Parte 1",
    "Aula 24: Operações com números racionais fracionários e decimais - Parte 2",
    "Aula 25: Operações com números racionais fracionários e decimais - Parte 3",
    "Aula 26: Operações com números racionais fracionários e decimais - Parte 4",
    "Aula 27: Operações com números racionais fracionários e decimais - Parte 5",
    "Aula 28: Operações com números racionais fracionários e decimais - Parte 6",
    "Aula 29: Operações com números racionais fracionários e decimais - Parte 7",
    "Aula 30: Operações com números racionais fracionários e decimais - Parte 8",
  ],
  // Matemática - 9º Ano - 4º Bimestre
  "Matemática|9º Ano|4º Bimestre": [
    "Aula 1: Volume de prismas retos e decomposição - Parte 1",
    "Aula 2: Volume de prismas retos e decomposição - Parte 2",
    "Aula 3: Volume de prismas retos e decomposição - Parte 3",
    "Aula 4: Volume de prismas retos e decomposição - Parte 4",
    "Aula 5: Volume de prismas retos e decomposição - Parte 5",
    "Aula 6: Relação entre volume e capacidade de recipientes - Parte 1",
    "Aula 7: Medidas de volume de corpos e recipientes complexos - Parte 1",
    "Aula 8: Medidas de volume de corpos e recipientes complexos - Parte 2",
    "Aula 9: Volume de prismas retos e decomposição - Parte 6",
    "Aula 10: Relação entre volume e capacidade de recipientes - Parte 2",
    "Aula 11: Coleta de dados estatísticos em diferentes contextos - Parte 1",
    "Aula 12: Estimar e medir volumes de prismas e cilindros - Parte 1",
    "Aula 13: Probabilidade de eventos compostos e princípio multiplicativo - Parte 1",
    "Aula 14: Probabilidade de eventos compostos e princípio multiplicativo - Parte 2",
    "Aula 15: Probabilidade de eventos compostos e princípio multiplicativo - Parte 3",
    "Aula 16: Probabilidade de eventos compostos e princípio multiplicativo - Parte 4",
    "Aula 17: Probabilidade de eventos compostos e princípio multiplicativo - Parte 5",
    "Aula 18: Probabilidade de eventos compostos e princípio multiplicativo - Parte 6",
    "Aula 19: Probabilidade de eventos simples e compostos - Parte 1",
    "Aula 20: Probabilidade de eventos e contagem de casos - Parte 2",
    "Aula 21: Simetria de reflexão, rotação e translação - Parte 5",
    "Aula 22: Simetria de reflexão, rotação e translação - Parte 6",
    "Aula 23: Razão de semelhança em figuras planas e homotetias - Parte 1",
    "Aula 24: Razão de semelhança em figuras planas e homotetias - Parte 2",
    "Aula 25: Razão de semelhança em figuras planas e homotetias - Parte 3",
    "Aula 26: Simetria de reflexão, rotação e translação - Parte 7",
    "Aula 27: Razão de semelhança em figuras planas e homotetias - Parte 4",
    "Aula 28: Razão de semelhança em figuras planas e homotetias - Parte 5",
    "Aula 29: Razão de semelhança em figuras planas e homotetias - Parte 6",
    "Aula 30: Razão de semelhança em figuras planas e homotetias - Parte 7",
  ],
  // Matemática - 2º Ano - 4º Bimestre
  "Matemática|2º Ano|4º Bimestre": [
    "Aula 1: Trigonometria no triângulo retângulo - Parte 1",
    "Aula 2: Trigonometria no triângulo retângulo - Parte 2",
    "Aula 3: Trigonometria no triângulo retângulo - Parte 3",
    "Aula 4: Trigonometria no triângulo retângulo - Parte 4",
    "Aula 5: Trigonometria no triângulo retângulo - Parte 5",
    "Aula 6: Trigonometria no triângulo retângulo - Parte 6",
    "Aula 7: Trigonometria no triângulo retângulo - Parte 7",
    "Aula 8: Trigonometria no triângulo retângulo - Parte 8",
    "Aula 9: Relações entre vértices, faces e arestas de prismas e pirâmides - Parte 1",
    "Aula 10: Vértices, faces e arestas e áreas de superfícies - Parte 1",
    "Aula 11: Cálculo de áreas de superfícies planas e corpos redondos - Parte 1",
    "Aula 12: Cálculo de áreas de superfícies planas e corpos redondos - Parte 2",
    "Aula 13: Cálculo de áreas de superfícies planas e corpos redondos - Parte 3",
    "Aula 14: Cálculo de áreas de superfícies planas e corpos redondos - Parte 4",
    "Aula 15: Cálculo de áreas de superfícies planas e corpos redondos - Parte 5",
    "Aula 16: Cálculo de áreas de superfícies planas e corpos redondos - Parte 6",
    "Aula 17: Cálculo de áreas de superfícies planas e corpos redondos - Parte 7",
    "Aula 18: Cálculo de áreas de superfícies planas e corpos redondos - Parte 8",
    "Aula 19: Cálculo de áreas de superfícies planas e corpos redondos - Parte 9",
    "Aula 20: Cálculo de áreas de superfícies planas e corpos redondos - Parte 10",
    "Aula 21: Cálculo de áreas de superfícies planas e corpos redondos - Parte 11",
    "Aula 22: Cálculo de áreas de superfícies planas e corpos redondos - Parte 12",
    "Aula 23: Cálculo de áreas de superfícies planas e corpos redondos - Parte 13",
    "Aula 24: Cálculo de áreas de superfícies planas e corpos redondos - Parte 14",
  ],
  // Matemática - 3º Ano - 4º Bimestre
  "Matemática|3º Ano|4º Bimestre": [
    "Aula 1: Fenômenos estatísticos e distribuições probabilísticas - Parte 1",
    "Aula 2: Fenômenos estatísticos e distribuições probabilísticas - Parte 2",
    "Aula 3: Fenômenos estatísticos e distribuições probabilísticas - Parte 3",
    "Aula 4: Fenômenos estatísticos e distribuições probabilísticas - Parte 4",
    "Aula 5: Fenômenos estatísticos e distribuições probabilísticas - Parte 5",
    "Aula 6: Fenômenos estatísticos e distribuições probabilísticas - Parte 6",
    "Aula 7: Fenômenos estatísticos e distribuições probabilísticas - Parte 7",
    "Aula 8: Fenômenos estatísticos e distribuições probabilísticas - Parte 8",
    "Aula 9: Análise de dados estatísticos em diferentes contextos - Parte 1",
    "Aula 10: Análise de dados estatísticos em diferentes contextos - Parte 2",
    "Aula 11: Análise de dados estatísticos em diferentes contextos - Parte 3",
    "Aula 12: Análise de dados estatísticos em diferentes contextos - Parte 4",
    "Aula 13: Análise de dados estatísticos em diferentes contextos - Parte 5",
    "Aula 14: Análise de dados estatísticos em diferentes contextos - Parte 6",
    "Aula 15: Análise de dados estatísticos em diferentes contextos - Parte 7",
    "Aula 16: Análise de dados estatísticos em diferentes contextos - Parte 8",
    "Aula 17: Interpretação de gráficos estatísticos, tendências e padrões - Parte 1",
    "Aula 18: Trigonometria no triângulo retângulo - Parte 9",
    "Aula 19: Trigonometria no triângulo retângulo - Parte 10",
    "Aula 20: Trigonometria no triângulo retângulo - Parte 11",
    "Aula 21: Trigonometria no triângulo retângulo - Parte 12",
    "Aula 22: Trigonometria no triângulo retângulo - Parte 13",
    "Aula 23: Trigonometria no triângulo retângulo - Parte 14",
    "Aula 24: Trigonometria no triângulo retângulo - Parte 15",
  ],
};

export function getSuggestedLessons(subject: string, gradeLevel: string, bimester: string): string[] {
  // Extract grade keyword like "6º Ano", "7º Ano", "8º Ano", "9º Ano", "2º Ano", "3º Ano"
  let gradeKey = "";
  if (gradeLevel.includes("6º") || gradeLevel.includes("6")) gradeKey = "6º Ano";
  else if (gradeLevel.includes("7º") || gradeLevel.includes("7")) gradeKey = "7º Ano";
  else if (gradeLevel.includes("8º") || gradeLevel.includes("8")) gradeKey = "8º Ano";
  else if (gradeLevel.includes("9º") || gradeLevel.includes("9")) gradeKey = "9º Ano";
  else if (gradeLevel.includes("2º") || gradeLevel.includes("2")) gradeKey = "2º Ano";
  else if (gradeLevel.includes("3º") || gradeLevel.includes("3")) gradeKey = "3º Ano";

  const key = `${subject}|${gradeKey}|${bimester}`;
  if (CURRICULUM_LESSONS_MAP[key]) {
    return CURRICULUM_LESSONS_MAP[key];
  }

  // General fallback for subject + bimester if no exact grade key match
  const fallbackKey = `${subject}||${bimester}`;
  return CURRICULUM_LESSONS_MAP[fallbackKey] || [];
}

export const LESSON_OBJECTIVES_MAP: Record<string, string> = {
  "Aula 1: A mulher na transição da Antiguidade para a Idade Média":
    "Identificar como as mudanças da Antiguidade para a Idade Média impactaram o papel e as experiências das mulheres;\nCompreender como as novas estruturas sociais, políticas e culturais redefiniram o lugar da mulher na sociedade",
  "Aula 2: Os povos germânicos":
    "Identificar as principais características dos povos germânicos;\nExplorar a relevância das descobertas arqueológicas, com foco no túmulo de Prittlewell, para entender a história desses povos.",
  "Aula 3: Reino Franco: dinastias Merovíngia e Carolíngia":
    "Compreender o contexto histórico das dinastias Merovíngia e Carolíngia no Reino Franco;\nRefletir sobre o impacto das dinastias Merovíngia e Carolíngia na formação da Europa medieval.",
  "Aula 4: O papel da religião cristã na Idade Média":
    "Analisar a importância dos mosteiros para a sociedade medieval e o desenvolvimento da cultura;\nAnalisar os conflitos e alianças entre a Igreja e os governantes medievais.",
  "Aula 5: O trabalho e a vida social na Idade Média":
    "Compreender as formas de trabalho na sociedade medieval, com foco no sistema feudal.\nIdentificar o papel dos senhores feudais e dos servos no abastecimento e na organização do feudo.",
  "Aula 6: O feudalismo europeu":
    "Compreender o contexto histórico e as origens do Feudalismo;\nReconhecer a estrutura social e política do Feudalismo.",
  "Aula 7: Lógicas comerciais no mundo medieval":
    "Compreender as principais características do comércio medieval, identificando suas rotas, formas de organização e mecanismos de regulação (feiras e guildas);\nExplorar como as lógicas comerciais medievais se conectavam com os sistemas econômicos e políticos.",
  "Aula 8: Mundo árabe e o nascimento do islamismo":
    "Compreender as características e a trajetória do povo árabe na Idade Média;\nIdentificar a importância do islã na cultura e na sociedade medieval.",
  "Aula 9: Império Otomano":
    "Compreender a formação e expansão do Império Otomano durante a Idade Média;\nAnalisar a estrutura política, social e cultural do Império Otomano.",
  "Aula 10: O povo judeu e suas relações no mundo medieval":
    "Compreender a história do povo judeu na Idade Média, desde a Diáspora até as comunidades medievais; Identificar a importância do judaísmo na cultura e na sociedade medieval.",
  "Aula 11: Em nome de Deus: as Cruzadas":
    "Analisar como as Cruzadas influenciaram a cultura, a política e a sociedade da Idade Média.",
  "Aula 12: A crise do sistema feudal":
    "Compreender as principais causas e fatores que levaram à crise do sistema feudal na Europa;\nIdentificar os impactos da crise do sistema feudal nas estruturas políticas, sociais e econômicas da Idade Média.",

  // História - 7º Ano - 4º Bimestre
  "Aula 1: A escravidão e a servidão ao longo da história":
    "- Compreender os conceitos de escravidão e servidão, suas características e diferenças.\n- Analisar a mudança da escravidão e da servidão ao longo da história, desde a Antiguidade até os tempos modernos.\n- Refletir sobre as permanências e heranças sociais da escravidão na atualidade.",
  "Aula 2: Escravidão na África":
    "- Analisar os mecanismos e dinâmicas do comércio de escravizados na África pré-colonial, identificando as principais regiões e zonas africanas de procedência dos escravizados;\n- Compreender as lógicas internas das sociedades africanas e suas relações com o tráfico de escravizados, destacando os agentes responsáveis pelo comércio de pessoas.",
  "Aula 3: Nos caminhos da escravidão: África, Europa e América em conexão":
    "- Compreender o processo histórico da escravização dos africanos;\n- Analisar as conexões entre a África, a Europa e a América.",
  "Aula 4: O Atlântico negro: as rotas dos navios e a diáspora forçada":
    "- Compreender a complexa dinâmica do tráfico transatlântico de escravizados, desde as origens africanas até os destinos nas Américas, com foco na diversidade geográfica, rotas marítimas e identidades étnicas envolvidas;\n- Analisar as condições de transporte de africanos escravizados nos navios negreiros durante a travessia do Atlântico.",
  "Aula 5: O sistema escravista e as condições de escravizados":
    "- Compreender o sistema escravista na América Portuguesa, investigando o funcionamento do comércio de escravizados e seus principais agentes envolvidos nesse tráfico;\n- Compreender a condição jurídica dos escravizados, destacando os impactos sociais, econômicos e políticos desse sistema na sociedade colonial.",
  "Aula 6: Vozes silenciadas: a vida dos negros no Brasil colonial":
    "- Analisar as estratégias de resistência cultural e social criadas pelos negros, especialmente no âmbito familiar, para preservar sua identidade e humanidade;\n- Identificar as funções econômicas, sociais e culturais desempenhadas pelos negros escravizados, destacando o impacto de seu trabalho nas dinâmicas coloniais.",
  "Aula 7: Resistência negra: Esperança Garcia e outras formas de luta no Brasil colonial":
    "- Compreender as condições de vida e de resistência das pessoas escravizadas no Brasil colonial;\n- Analisar a carta de Esperança Garcia como documento histórico e símbolo de resistência;\n- Reconhecer diferentes estratégias de luta contra o sistema escravista e seu legado para a sociedade brasileira.",
  "Aula 8: Palmares: o quilombo que nunca se rendeu":
    "- Compreender a resistência do Quilombo de Palmares diante das constantes tentativas de destruição por parte do Estado colonial e da Coroa portuguesa;\n- Analisar o papel de personagens históricos como Zumbi dos Palmares, Dandara e Ganga Zumba.",
  "Aula 9: Lideranças negras: heróis da resistência":
    "- Reconhecer a importância das lideranças negras na luta contra a escravidão",
  "Aula 10: Raízes do racismo: conexões entre o passado e o presente":
    "- Relacionar o racismo contemporâneo ao processo histórico de escravização das populações africanas e afrodescendentes no período colonial.",
  "Aula 11: A passagem do capitalismo mercantil para o capitalismo industrial":
    "- Compreender as características do mercantilismo e do capitalismo;\n- Analisar os fatores que levaram à transição do mercantilismo para o capitalismo.",
  "Aula 12: Transição econômica: do mercantilismo ao capitalismo liberal":
    "- Identificar os principais conceitos relacionados ao mercantilismo e ao capitalismo, como acúmulo de metais preciosos, balança comercial favorável, livre concorrência, propriedade privada etc.;\n- Descrever as características marcantes de cada sistema econômico, reconhecendo suas diferenças e semelhanças.",

  // História - 8º Ano - 4º Bimestre
  "Aula 1: O legado da luta negra contra a escravidão":
    "• Analisar as diferentes formas de resistência adotadas pelos escravizados;\n• Refletir sobre as heranças do sistema escravista na sociedade atual.",
  "Aula 2: As políticas de imigração e o abolicionismo no Brasil Imperial":
    "• Identificar as políticas migratórias adotadas pelo Brasil Imperial e seus desdobramentos para a sociedade da época;\n• Caracterizar a transição do trabalho escravo para o trabalho livre no país.",
  "Aula 3: Pensamento e cultura no século XIX: darwinismo social e racismo":
    "• Identificar a deturpação do pensamento darwinista em darwinismo social; Compreender como as teorias racistas justificavam a opressão de povos originários.",
  "Aula 4: A resistência dos povos indígenas e o discurso civilizatório nas Américas":
    "• Analisar o discurso civilizatório nas Américas e seu impacto para com os povos originários.\n• Compreender a resistência dos povos indígenas diante da ofensiva civilizatória.",
  "Aula 5: O Estado brasileiro e sua relação com os indígenas na construção do Império":
    "• Compreender qual foi o trato dispensado aos indígenas conforme a Constituição de 1824 e outros documentos;\n• Debater acerca das permanências geradas a partir das políticas de extermínio dos povos indígenas durante o Império.",
  "Aula 6: Vozes da literatura negra no Brasil do século XIX":
    "• Identificar como a literatura do século XIX se referia à população negra;\n• Compreender a voz de resistência negra presente na literatura brasileira do século XIX.",
  "Aula 7: Cultura letrada e não letrada no Brasil durante o século XIX":
    "• Analisar o papel da cultura letrada e não letrada na construção das identidades no Brasil do século XIX;\n• Analisar as representações visuais da cultura popular brasileira durante o século XIX.",
  "Aula 8: Romantismo no Brasil do século XIX":
    "• Relacionar o Romantismo com a construção da identidade nacional durante o século XIX.",
  "Aula 9: Relações entre os Estados Unidos da América e a América Latina no século XIX":
    "• Analisar os interesses políticos e econômicos que influenciaram as relações entre Estados Unidos da América e América Latina;\n• Compreender as relações diplomáticas e comerciais entre os Estados Unidos da América e América Latina.",
  "Aula 10: Da Doutrina Monroe ao intervencionismo: as influências dos EUA na América Latina":
    "• Caracterizar a Doutrina Monroe e seus impactos nas relações entre os Estados Unidos e a América Latina;\n• Analisar os casos de intervenções dos EUA na América Latina durante o século XIX.",
  "Aula 11: Determinismo e imperialismo europeu":
    "• Retomar as teorias raciais do século XIX;\n• Compreender o impacto das teorias racistas no processo de colonização da África.",
  "Aula 12: Nacionalismo e as novas nações europeias: o início do imperialismo":
    "• Compreender como o nacionalismo e os processos de unificação europeia no século XIX fortaleceram os Estados nacionais e contribuíram para a expansão imperialista;\n• Identificar relações entre identidade nacional, ideias de superioridade cultural e dominação colonial.",
  "Aula 13: Teorias raciais e o imperialismo na África":
    "• Compreender o que foi e como se construiu o imperialismo;\n• Relacionar o imperialismo aos impactos causados pelas teorias raciais no continente africano durante o século XIX.",
  "Aula 14: O imperialismo europeu e a partilha da África":
    "• Identificar como se deu o processo de partilha da África;\n• Analisar como países europeus atuaram no processo de partilha da África.",
  "Aula 15: Resistência à partilha da África":
    "• Identificar os movimentos de resistência frente ao processo de partilha da África.",
  "Aula 16: A África e o capitalismo industrial europeu":
    "• Identificar os principais produtos africanos explorados pelos europeus durante o imperialismo (como borracha, café, cacau, ouro, diamantes, entre outros).\n• Analisar como a ocupação europeia transformou a economia e a organização social das comunidades africanas.",
  "Aula 17: Recursos africanos e os interesses da Europa: histórias por trás do colonialismo":
    "• Debater as consequências do imperialismo do século XIX no continente europeu",
  "Aula 18: Colonialismo ontem e hoje: consequências do colonialismo no mundo atual":
    "• Analisar consequências do imperialismo europeu na África",

  // História - 9º Ano - 4º Bimestre
  "Aula 1: A Constituição de 1988: a chamada \"Constituição Cidadã\"":
    "• Compreender o processo de elaboração da Constituição, estimulando a reflexão sobre o papel do Estado e da sociedade;\n• Analisar a importância da luta pela cidadania e pelos direitos civis no Brasil;",
  "Aula 2: A eleição de Tancredo Neves e o Governo José Sarney":
    "• Compreender os acontecimentos históricos que levaram à eleição de Tancredo Neves e ao estabelecimento do Governo José Sarney;\n• Analisar e refletir sobre as principais características e desafios do governo Sarney.",
  "Aula 3: As manifestações culturais no processo de redemocratização":
    "• Analisar o papel das manifestações culturais, como as artes plásticas, a música, a literatura e o cinema, durante o processo de redemocratização;\n• Reconhecer o papel das manifestações culturais como formas de resistência, expressão e mobilização social.",
  "Aula 4: A luta pelos direitos civis no Brasil":
    "• Compreender a importância da luta pela cidadania e pelos direitos civis no Brasil;\n• Analisar a conquista do direito ao voto para analfabetos e para jovens a partir dos 16 anos.",
  "Aula 5: Processos de descolonização na África":
    "• Compreender o impacto do imperialismo europeu nas sociedades africanas.\n• Analisar os principais processos de descolonização ocorridos na África ao longo do século XX.",
  "Aula 6: Líderes e movimentos de independência na África":
    "• Reconhecer a importância dos líderes e dos movimentos nacionalistas africanos.\n• Analisar discursos e ações políticas nos processos de independência.",
  "Aula 7: Processos de descolonização na Ásia: independências e lideranças":
    "• Descrever os principais processos de descolonização ocorridos na Ásia ao longo do século XX e suas especificidades regionais;\n• Analisar a atuação de líderes como Gandhi, Jawaharlal Nehru, Ho Chi Minh e Sukarno.",
  "Aula 8: O fim da Guerra Fria":
    "• Analisar os fatores e eventos que contribuíram para o declínio da Guerra Fria;\n• Compreender como o fim da Guerra Fria afetou a política internacional, as relações entre Estados e o equilíbrio de poder.",
  "Aula 9: Globalização em debate: movimentos críticos e seus desafios às políticas globais":
    "• Compreender o significado e a abrangência da globalização, percebendo as transformações ocorridas no cenário mundial após o fim da Guerra Fria e a emergência de novos atores globais;\n• Analisar os movimentos críticos às políticas globais, compreendendo suas demandas e o papel que desempenham na busca por alternativas ao processo de globalização.",
  "Aula 10: Tecnologias digitais e as transformações da globalização":
    "• Identificar os movimentos críticos às políticas globais e suas demandas;\n• Analisar o papel desses movimentos na busca por alternativas ao processo de globalização;",
  "Aula 11: Nacionalismo e neoliberalismo na América Latina: o papel das organizações internacionais na dinâmica regional":
    "• Discutir as motivações e objetivos por trás da adoção de diferentes políticas econômicas na América Latina, com foco no protecionismo econômico;\n• Compreender os fundamentos do neoliberalismo e seus impactos sociais nos países latino-americanos;\n• Analisar o papel das organizações internacionais na América Latina, com foco nos desafios e benefícios da cooperação internacional para o desenvolvimento da região.",
  "Aula 12: O Plano Real e as transformações econômicas no Brasil nos anos 1990":
    "• Compreender como o Plano Real (1994) controlou a inflação no Brasil;\n• Reconhecer os impactos positivos e negativos das mudanças econômicas dos anos 1990 (como o fim da inflação e as privatizações).",
  "Aula 13: O Brasil nos anos 1990: o governo de Fernando Henrique Cardoso e as transformações no país":
    "• Analisar as principais transformações políticas, econômicas e sociais durante o governo FHC.\n• Refletir sobre os impactos dessas mudanças na construção da cidadania e na consolidação da democracia no Brasil.",
  "Aula 14: Fronteiras em movimento: crise de refugiados e migrações na Era da Globalização":
    "• Analisar as causas do aumento dos movimentos migratórios forçados, especialmente em razão de conflitos terroristas e guerras no mundo contemporâneo.\n• Refletir sobre os desafios enfrentados pelos refugiados e os choques culturais gerados pela convivência entre diferentes grupos na sociedade globalizada.",
  "Aula 15: Grupos terroristas contemporâneos":
    "• Compreender como as atividades de grupos terroristas impactam não apenas as regiões onde atuam;\n• Entender as motivações ideológicas, políticas e religiosas de diferentes grupos terroristas contemporâneos;\n• Analisar como as ações de diferentes grupos terroristas contemporâneos refletem questões históricas, culturais e políticas específicas de suas regiões.",
  "Aula 16: Conflitos no século XXI":
    "• Conhecer conflitos significativos que ocorreram no mundo no século XXI; Identificar os principais atores envolvidos nos conflitos estudados.",
  "Aula 17: Aula Desafio: defesa das minorias":
    "• Compreender o que são e quais as consequências de punições estabelecidas em âmbito administrativo;\n• Analisar leis do estado de São Paulo que punem administrativamente atos discriminatórios contra as minorias.",
  "Aula 18: Transformações políticas, sociais e culturais no Brasil de 1989 aos dias atuais":
    "• Identificar as principais transformações políticas, sociais e culturais ocorridas no Brasil desde 1989 até os dias atuais;\n• Analisar os impactos dessas transformações na vida da população brasileira;\n• Entender como as transformações políticas, sociais e culturais foram influenciadas pelo processo de globalização.",

  // História - 2º Ano - 4º Bimestre
  "Aula 1: Tudo que é sólido desmancha no ar: opulência material e corrosão do trabalhador":
    "• Identificar as diferenças entre a 1ª e 2ª Revolução Industrial: mudanças nas relações de trabalho, produção e avanços tecnológicos;\n• Analisar as mudanças e permanências do trabalho e dos meios de produção no contexto da 1ª Revolução Industrial, relacionando às condições de vida da classe operária;\n• Caracterizar as mobilizações operárias no contexto da primeira metade do século XIX.",
  "Aula 2: Primavera dos povos: \"sopra o vento das revoluções\"":
    "• Identificar a importância da irrupção de 1848 para os movimentos proletários tendo em vista as correntes de pensamento crítico ao capitalismo, como o socialismo;\n• Analisar a relação entre liberalismo e nacionalismo, destacando como esses ideais impulsionaram os movimentos revolucionários de 1848 e contribuíram para a reorganização política dos Estados europeus no século XIX.",
  "Aula 3: A invenção das tradições: as unificações da Alemanha e da Itália":
    "• Compreender como o ideal nacionalista, impulsionado pelo liberalismo e pelas transformações do século XIX, foi fundamental para a consolidação dos Estados-nação italiano e alemão, influenciando o equilíbrio de poder na Europa;\n• Analisar como o nacionalismo, inicialmente revolucionário, foi apropriado por elites políticas para promover a unificação, consolidar Estados-nação e redefinir as fronteiras da Europa no século XIX.",
  "Aula 4: Sangue, Ferro e Risorgimento: a unificação Alemã e Italiana na Era dos Nacionalismos":
    "• Examinar as semelhanças e diferenças entre os processos de unificação italiano e alemão;\n• Investigar a relação entre a onda revolucionária de 1848 e a vitória da unidade nacional no início da década de 1870-1871;\n• Analisar o papel de Bismarck na condução da luta pela unificação da Alemanha e de Garibaldi na Itália.",
  "Aula 5: O longo século XIX: a consolidação e a crítica ao mundo burguês.":
    "• Analisar o conflito entre capital e trabalho no contexto da obra de Marx e Engels - O Manifesto do Partido Comunista;\n• Caracterizar o antagonismo entre burguesia e proletariado no contexto histórico da obra;",
  "Aula 6: Revoluções possíveis: \"Vive la Commune!\"":
    "• Compreender o contexto que levou ao movimento revolucionário denominado Comuna de Paris e a proclamação da primeira república proletária;\n• Analisar a importância da Comuna para o internacionalismo proletário.",
  "Aula 7: Os Estados Unidos e um \"Destino Manifesto\": Go West... e cresça com o país":
    "• Examinar o discurso nacionalista da doutrina do Destino Manifesto no contexto do expansionismo estadunidense;\n• Relacionar o Homestead Act (1862), a imigração e a expropriação indígena ao desenvolvimento econômico e produtivo dos Estados Unidos no século XIX.",
  "Aula 8: Uma casa dividida: a guerra de civil nos EUA":
    "• Identificar os fatores que levaram ao conflito entre Norte e Sul, as diferenças econômicas, as disputas políticas sobre a expansão da escravidão para novos territórios e as tensões sociais que culminaram na Guerra de Secessão (1861-1865);\n• Comparar os desdobramentos da Guerra Civil para o Norte e para o Sul, considerando seu impacto nas economias das regiões e na consolidação do poder federal ao final do conflito.",
  "Aula 9: Nós o povo dos Estados Unidos: regionalismo ou união perfeita?":
    "• Analisar no regionalismo sulista e no nacionalismo da União, os discursos e justificativas que levaram à secessão e criação dos Estados Confederados, assim como à Guerra Civil;\n• Discutir o papel de Abraham Lincoln na consolidação do nacionalismo estadunidense antes e durante a Guerra Civil, observando como suas decisões influenciaram a preservação da União.",
  "Aula 10: A reconstrução: \"nasce\" uma nação!":
    "• Analisar o contexto de Reconstrução (1865-1877) dos Estados Unidos, após a Guerra Civil;\n• Compreender a situação da população negra no período pós-abolição.",
  "Aula 11: American ingenuity: os magnatas da indústria e o self-made man":
    "• Analisar a construção do mito do self-made man e suas relações com a formação da identidade nacional nos EUA;\n• Compreender o papel das holdings e trusts no desenvolvimento da economia dos Estados Unidos, os impactos sociais, políticos, no final do século XIX e início do século XX.",
  "Aula 12: Trabalho e direitos: qual a \"jornada\"?":
    "• Analisar o processo de luta da classe operária por direitos;\n• Compreender em seu contexto a luta dos trabalhadores de Haymarket pelas 8 horas diárias.",

  // História - 3º Ano - 4º Bimestre
  "Aula 1: Políticas para os povos indígenas durante o regime militar":
    "• Compreender as consequências das ações estatais sobre as comunidades indígenas na ditadura militar, analisando legislações específicas e o impacto do conceito de integração territorial.",
  "Aula 2: O Movimento Negro Unificado e a resistência ao racismo":
    "• Analisar a formação, as pautas do MNU e o papel das mobilizações negras na luta por direitos e resistência política no contexto ditatorial.",
  "Aula 3: Desenvolvimentismo na Amazônia e a luta de Chico Mendes":
    "• Explicar os impactos socioambientais das políticas de ocupação da Amazônia e a relevância das lideranças seringueiras na defesa da floresta.",
  "Aula 4: As greves operárias do ABC Paulista":
    "• Analisar as motivações econômicas e políticas das paralisações operárias no ABC, identificando suas reivindicações e efeitos no cenário político nacional.",
  "Aula 5: Direitos humanos e a repressão estatal na ditadura":
    "• Discutir os mecanismos de repressão do regime militar e avaliar a importância da defesa dos direitos fundamentais para a ordem democrática.",
  "Aula 6: A Comissão Nacional da Verdade e a memória histórica":
    "• Compreender a relevância da apuração das violações de direitos humanos para a preservação da memória coletiva e o fortalecimento democrático.",
  "Aula 7: Abertura política, Anistia e a campanha das Diretas Já":
    "• Analisar a transição para o regime democrático, identificando o papel dos movimentos sociais e das manifestações populares na redemocratização.",
  "Aula 8: Direitos e cidadania no Brasil: um projeto em construção":
    "• Avaliar o processo de criação da CF de 1988, a participação popular, seus avanços e limites da cidadania no Brasil para diferentes grupos sociais.",
  "Aula 9: A bancada do batom: a trajetória e luta os direitos femininos na política":
    "• Analisar a trajetória dos direitos políticos da mulher no Brasil, no século XX;\n• Compreender historicamente as relações entre a ausência de direitos das mulheres e a formação patriarcal da sociedade brasileira;\n• Avaliar o papel do Lobby do batom, da bancada feminina no processo de redemocratização e elaboração da CF de 1988, para a promoção de direitos e acesso à uma sociedade mais igualitária e inclusiva.",
  "Aula 10: Uma \"Nova República\" com pouca novidade: de Tancredo Neves a José Sarney":
    "• Analisar as políticas econômicas implementadas para combater a hiperinflação;\n• Compreender a contradição entre o modelo econômico liberal do governo Sarney e os princípios de bem-estar social da Constituição de 1988, avaliando seus impactos na efetivação dos direitos sociais durante a redemocratização.",
  "Aula 11: Um \"caçador\" de Marajás: do confisco da poupança ao impeachment, o governo Fernando Collor de Mello":
    "• Analisar o contexto sociopolítico e econômico que permitiu a eleição de Fernando Collor em 1989, considerando a construção da sua imagem pública;\n• Examinar as medidas radicais dos planos econômicos (com foco no confisco da poupança e no congelamento de preços), avaliando o impacto para a população;\n• Relacionar o fracasso do Plano Collor, somado às denúncias de corrupção, ao movimento dos \"Caras-Pintadas\" e o processo de impeachment.",
  "Aula 12: O Plano Real: um \"tiquete\" para a presidência da República":
    "• Examinar o processo de implementação do Plano Real e seus efeitos na economia brasileira;\n• Analisar a consolidação do Plano Real no governo FHC e a implementação da agenda neoliberal;\n• Discutir os desdobramentos sociais e as críticas às reformas neoliberais dos anos 1990, tendo em vista seu impacto sobre o desemprego, a desigualdade e a indústria nacional.",

  // Geografia - 6º Ano - 4º Bimestre
  "Aula 1: Litosfera e os agentes internos":
    "• Descrever as camadas que compõem a estrutura interna da Terra e suas características.\n• Explicar como os movimentos das placas tectônicas e a atividade vulcânica moldam o relevo.",
  "Aula 2: Relevo e os agentes externos":
    "• Identificar os agentes externos do relevo.\n• Analisar o processo de formação e a transformação do relevo por meio da ação do intemperismo e da erosão.\n• Diferenciar intemperismo físico, químico e biológico.",
  "Aula 3: Formas do relevo":
    "• Identificar as principais formas do relevo oceânico.\n• Classificar as principais formas do relevo terrestre.\n• Diferenciar depressão relativa e absoluta.",
  "Aula 4: Relevo brasileiro":
    "• Identificar as unidades do relevo brasileiro.\n• Interpretar mapas e perfis topográficos do Brasil.",
  "Aula 5: Modelagem de formas de relevo":
    "• Criar modelos físicos para ilustrar as principais formas de relevo.",
  "Aula 6: Ação humana sobre o relevo":
    "• Identificar as principais ações de intervenções antrópicas na litosfera.\n• Explicar os movimentos de massa e suas consequências.\n• Analisar ações preventivas para esses desastres.",
  "Aula 7: Solo":
    "• Identificar os componentes formadores do solo.\n• Explicar o conceito de solo e sua importância para a vida na Terra.",
  "Aula 8: Formação do solo":
    "• Identificar os perfis de solos, seus horizontes e suas características.\n• Identificar os solos predominantes no Brasil por meio de mapas.\n• Explicar o processo de formação dos solos.",
  "Aula 9: Usos do solo":
    "• Analisar o uso do solo nos setores da economia.\n• Interpretar mapas de uso do solo.",
  "Aula 10: Biosfera: ecorregiões e biomas":
    "• Diferenciar ecorregiões e biomas.\n• Localizar as ecorregiões do Brasil e do mundo.\n• Localizar os biomas do Brasil.",
  "Aula 11: Ecorregiões terrestres":
    "• Analisar as principais características das ecorregiões do planeta.",
  "Aula 12: Biomas do Brasil: Amazônia e Caatinga":
    "• Analisar as principais características dos biomas: Amazônia e Caatinga.",
  "Aula 13: Biomas do Brasil: Cerrado e Pantanal":
    "• Analisar as principais características dos biomas: Cerrado e Pantanal.",
  "Aula 14: Biomas do Brasil: Mata Atlântica e Pampas":
    "• Analisar as principais características dos biomas: Mata Atlântica e Pampas.",
  "Aula 15: Biomas: ameaças e impactos socioambientais":
    "• Analisar as principais ameaças e impactos socioambientais nos biomas do Brasil.",
  "Aula 16: Conservação e preservação dos biomas e biodiversidade":
    "• Refletir sobre a biodiversidade mundial.\n• Refletir sobre a preservação dos biomas e da biodiversidade.\n• Elaborar soluções para a preservação e conservação dos biomas.",
  "Aula 17: Terrário":
    "• Construir um miniecossistema para observar as relações ecológicas.",
  "Aula 18: Produzindo um terrário":
    "• Construir um miniecossistema para observar as relações ecológicas.",

  // Geografia - 7º Ano - 4º Bimestre
  "Aula 1: Do mercantilismo ao capitalismo":
    "• Identificar características econômicas e políticas do período de passagem do mercantilismo para o capitalismo.",
  "Aula 2: O capitalismo e suas fases":
    "• Classificar as fases do sistema capitalista.\n• Identificar as características do sistema capitalista.",
  "Aula 3: Introdução à globalização":
    "• Identificar as etapas do processo de globalização.",
  "Aula 4: Globalização":
    "• Relacionar a globalização com mudanças no cotidiano das pessoas.",
  "Aula 5: Aula prática: Capitalismo e globalização na sociedade atual":
    "• Analisar como a evolução do capitalismo gerou transformações ao longo do tempo.",
  "Aula 6: Revolução Industrial":
    "• Explicar o desenvolvimento da Revolução Industrial.\n• Identificar as principais transformações tecnológicas que marcaram o período histórico que envolveu a Revolução Industrial.",
  "Aula 7: Industrialização e urbanização":
    "• Analisar como a industrialização possibilitou o desenvolvimento da urbanização, com ênfase nas transformações socioeconômicas e ambientais no Brasil.",
  "Aula 8: A industrialização no campo":
    "• Interpretar o processo de modernização do campo brasileiro.\n• Analisar as consequências da modernização do campo.",
  "Aula 9: Os contrastes do campo brasileiro":
    "• Analisar os contrastes no campo brasileiro.",
  "Aula 10: A urbanização brasileira":
    "• Analisar as principais características do espaço urbano brasileiro.\n• Interpretar os processos de industrialização e urbanização brasileira no século XX.",
  "Aula 11: Industrialização e a questão ambiental":
    "• Relacionar os processos de industrialização e as transformações ambientais no Brasil.",
  "Aula 12: A tecnologia transforma":
    "• Analisar as transformações econômicas e sociais ocasionadas pela inovação tecnológica.",
  "Aula 13: Recursos naturais":
    "• Diferenciar recursos naturais renováveis e não renováveis com base em suas características.\n• Identificar exemplos de recursos renováveis e não renováveis no dia a dia.",
  "Aula 14: Matriz energética e fontes de energia":
    "• Analisar como as diferentes sociedades se apropriam das fontes de energia.",
  "Aula 15: Recursos naturais: usos e sustentabilidade":
    "• Interpretar o conceito de desenvolvimento sustentável.\n• Analisar o papel da economia circular na redução de resíduos e promoção da sustentabilidade.",
  "Aula 16: Uso dos recursos naturais na agricultura e na indústria":
    "• Relacionar os processos produtivos na agricultura e na indústria com as práticas de consumo consciente.",
  "Aula 17: Análise de consumo dos recursos naturais":
    "• Analisar o uso consciente dos recursos naturais.",
  "Aula 18: Alternativas para o futuro":
    "• Criar possíveis propostas para a construção de sociedades sustentáveis.",

  // Geografia - 8º Ano - 4º Bimestre
  "Aula 1: Urbanização na América Latina":
    "• Identificar os fatores que impulsionam a urbanização.\n• Analisar o crescimento das cidades latino-americanas.",
  "Aula 2: Urbanização no continente africano":
    "• Identificar os fatores que impulsionam a urbanização.\n• Relacionar o processo de urbanização no continente africano com a hierarquia das cidades.",
  "Aula 3: A questão habitacional e os movimentos sociais urbanos na América Latina e África":
    "• Analisar as causas e consequências do déficit habitacional nas áreas urbanas.\n• Discutir sobre os movimentos sociais urbanos.",
  "Aula 4: A segregação socioespacial na América Latina":
    "• Investigar como ocorre a segregação socioespacial em diferentes contextos urbanos.\n• Relacionar a segregação socioespacial e a vulnerabilidade das populações urbanas.",
  "Aula 5: Políticas públicas e planejamento urbano":
    "• Analisar como o planejamento urbano integrado e o uso de tecnologias podem promover o desenvolvimento sustentável nas cidades.\n• Discutir a importância da participação cidadã e parcerias público-privadas na criação de cidades mais inclusivas, eficientes e sustentáveis.",
  "Aula 6: Propostas de melhorias urbanas no meu município":
    "• Analisar como o planejamento urbano integrado e o uso de tecnologias podem promover o desenvolvimento sustentável nas cidades.\n• Identificar regiões no município para receber melhorias urbanas.",
  "Aula 7: Biodiversidade na África e na América Latina":
    "• Identificar hotspots em regiões da América Latina e África.\n• Analisar a biodiversidade e os impactos das atividades econômicas.",
  "Aula 8: Recursos naturais na África":
    "• Identificar a distribuição dos principais recursos naturais da África.\n• Relacionar a exploração predatória dos recursos naturais aos conflitos armados em diferentes regiões da África.",
  "Aula 9: Geopolítica das águas na América Latina e na África":
    "• Analisar como a distribuição e o controle da água geram conflitos e cooperação entre países, especialmente em regiões com escassez hídrica.",
  "Aula 10: Energias renováveis e sustentabilidade":
    "• Comparar dados sobre a distribuição e uso de diferentes fontes de energia, especialmente as renováveis.\n• Examinar conflitos e contradições relacionadas aos recursos energéticos, com ênfase nos renováveis.",
  "Aula 11: Mudanças climáticas: desertificação na América Latina e África.":
    "• Relacionar a desertificação às mudanças climáticas.\n• Analisar os impactos socioeconômicos e ambientais da desertificação, reconhecendo estratégias de mitigação e adaptação.",
  "Aula 12: Antártica":
    "• Identificar os aspectos físicos e ambientais.\n• Analisar o papel ambiental e territorial da Antártida no contexto geopolítico.",

  // Geografia - 9º Ano - 4º Bimestre
  "Aula 1: Industrialização na Europa: origens e transformações":
    "• Identificar as fases e os processos da Revolução Industrial na Europa.",
  "Aula 2: Industrialização na Europa: distribuição e desafios atuais":
    "• Identificar a distribuição industrial e a influência da União Europeia na economia.\n• Identificar os atuais desafios enfrentados pelos setores industriais.",
  "Aula 3: Industrialização na Ásia: trajetórias e desafios do Japão":
    "• Reconhecer o papel do Japão como polo industrial e os fatores que impulsionaram seu crescimento econômico.",
  "Aula 4: Industrialização na Ásia: a força da China":
    "• Identificar o processo de industrialização da China.\n• Reconhecer o papel da indústria chinesa na economia mundial.",
  "Aula 5: Industrialização na Ásia: a ascensão da Índia":
    "• Identificar o processo de industrialização da Índia.\n• Reconhecer o papel da indústria indiana na economia mundial.",
  "Aula 6: Industrialização na Ásia: os Tigres Asiáticos":
    "• Reconhecer o papel dos Tigres Asiáticos como polos industriais da Ásia.\n• Explicar o crescimento dos Novos Tigres Asiáticos e sua inserção na economia global.",
  "Aula 7: Indústria e economia na Oceania":
    "• Reconhecer o processo de industrialização da Austrália e da Nova Zelândia.\n• Explicar a relação entre os setores industriais e o comércio internacional da região.",
  "Aula 8: Fontes de energia e matrizes tradicionais":
    "• Identificar a evolução das fontes de energia e sua relação com a industrialização.\n• Analisar os impactos socioeconômicos e ambientais dessas fontes.",
  "Aula 9: Transição energética e desenvolvimento sustentável":
    "• Identificar as potencialidades e desafios da transição energética na Europa, Ásia e Oceania.\n• Comparar tecnologias energéticas segundo características regionais.",
  "Aula 10: Indústria e energia no mundo digital":
    "• Analisar recursos renováveis e não renováveis e a utilização desses em novos tipos de indústria e tecnologia.\n• Compreender como a inteligência artificial modifica o espaço geográfico físico e digital.",
  "Aula 11: Energia e território na Europa, Ásia e Oceania - análise de padrões e desafios":
    "• Identificar tipos de energia e padrões de produção, consumo e comércio.\n• Relacionar características físicas, recursos naturais e matriz energética em escala local, regional e global.",
  "Aula 12: Energia e território na Europa, Ásia e Oceania - soluções e escolhas estratégicas":
    "• Avaliar alternativas energéticas considerando recursos, sociedade e impactos ambientais.\n• Justificar escolhas energéticas integrando geografia física, socioeconômica e territorial.",

  // Matemática - 6º Ano - 4º Bimestre
  "Aula 1: Sólidos geométricos em situações do cotidiano":
    "• Compreender que sólidos geométricos são figuras geométricas tridimensionais maciças.\n• Compreender que, dependendo das características que possuem, os sólidos geométricos são classificados em poliédros e corpos redondos.\n• Explorar situações do cotidiano em que os sólidos geométricos são utilizados.",
  "Aula 2: Elementos dos sólidos geométricos":
    "• Diferenciar figuras bidimensionais de figuras tridimensionais.\n• Identificar, em sólidos geométricos, seus elementos: faces, arestas e vértices.\n• Diferenciar poliédros de corpos redondos.",
  "Aula 3: Explorando características de prismas e pirâmides":
    "• Diferenciar figuras bidimensionais de figuras tridimensionais.\n• Identificar e quantificar vértices, faces e arestas de prismas e pirâmides.\n• Estabelecer relações entre o número de vértices, faces e arestas em prismas e pirâmides.\n• Relacionar o número de faces, vértices e arestas de prismas e pirâmides ao número de lados do polígono da base.",
  "Aula 4: Resolução de problemas - Prismas e pirâmides":
    "• Identificar e quantificar vértices, faces e arestas de prismas e pirâmides.\n• Estabelecer relações entre o número de vértices, faces e arestas em prismas e pirâmides.",
  "Aula 5: Revisão: Características de prismas e pirâmides":
    "• Identificar, em sólidos geométricos, seus elementos: faces, arestas e vértices.\n• Diferenciar poliédros de corpos redondos.",
  "Aula 6: A forma planificada de prismas e pirâmides":
    "• Associar prismas e pirâmides com as suas planificações.\n• Reconhecer, nomear e comparar polígonos que representam as faces de prismas e pirâmides, considerando lados, vértices e ângulos.",
  "Aula 7: Explorando características de cilindros e cones":
    "• Diferenciar figuras bidimensionais de figuras tridimensionais.\n• Distinguir um sólido geométrico a partir da observação das figuras planas que o formam.\n• Associar figuras geométricas a suas planificações e analisar, nomear e comparar seus atributos.",
  "Aula 8: Resolução de problemas - Prismas, pirâmides, cilindros e cones":
    "• Associar figuras geométricas a suas planificações e analisar, nomear e comparar seus atributos.\n• Resolver problemas envolvendo a identificação dos elementos de prismas, pirâmides, cilindros e cones, em contextos envolvendo embalagens e a logística de produtos.",
  "Aula 9: Aula de verificação - Figuras geométricas espaciais":
    "• Diferenciar figuras bidimensionais de figuras tridimensionais.\n• Identificar, em sólidos geométricos, seus elementos: faces, arestas e vértices.",
  "Aula 10: Revisão: Figuras geométricas espaciais e suas planificações":
    "• Estabelecer relações entre o número de vértices, faces e arestas em prismas e pirâmides.\n• Relacionar figuras geométricas espaciais e suas planificações.",
  "Aula 11: Unidades de medida por toda parte":
    "• Explorar unidades de medida em situações do cotidiano, buscando levantar conhecimentos prévios dos estudantes.\n• Compreender que medir é comparar grandezas de mesma natureza, portanto, quando as grandezas envolvidas não são de mesma natureza, torna-se inviável fazer uma comparação.",
  "Aula 12: Medidas de comprimento":
    "• Resolver problemas envolvendo unidades de medida de comprimento, utilizando conversões entre as unidades de medida mais usuais, quando necessário.",
  "Aula 13: Medidas de massa":
    "• Resolver problemas envolvendo unidades de medida de massa, utilizando conversões entre as unidades de medida mais usuais, quando necessário.",
  "Aula 14: Resolução de problemas - Medidas de comprimento e de massa":
    "• Resolver problemas envolvendo unidades de medida de comprimento, massa e conversões usuais.",
  "Aula 15: Revisão: Conversão de unidades de medida de comprimento":
    "• Resolver problemas envolvendo a conversão entre unidades de medida de comprimento.",
  "Aula 16: Medidas de capacidade":
    "• Resolver situações-problema envolvendo medidas de capacidade.",
  "Aula 17: Medidas de tempo":
    "• Identificar e utilizar adequadamente as unidades de medida de tempo, selecionando a unidade mais apropriada para cada situação.\n• Converter medidas de tempo entre unidades diferentes (segundos/minutos, minutos/horas), utilizando operações matemáticas básicas.\n• Resolver problemas práticos que envolvam cálculos com tempo, aplicando conceitos de intervalo temporal e duração em contextos reais.",
  "Aula 18: Resolução de problemas - Medidas de capacidade e de tempo":
    "• Reconhecer as unidades de medida de tempo e capacidade mais usuais.\n• Converter medidas de tempo e de capacidade, utilizando operações matemáticas básicas.\n• Resolver problemas práticos que envolvam cálculos com tempo, aplicando conceitos de intervalo temporal e duração em contextos reais.",
  "Aula 19: Aula de verificação - Grandezas e medidas (comprimento, massa, capacidade e tempo)":
    "• Resolver situações-problema que envolvam diferentes grandezas (comprimento, massa, capacidade e tempo), selecionando unidades adequadas.\n• Realizar conversões entre unidades de medida, aplicando-as na resolução de situações-problema.",
  "Aula 20: Revisão: Grandezas e conversão de unidades":
    "• Resolver situações-problema que envolvam diferentes grandezas (comprimento, massa, tempo e capacidade), reutilizando conhecimentos já estudados.\n• Realizar conversões entre unidades de medida, aplicando-as de forma adequada em diferentes contextos.",
  "Aula 21: Medindo superfícies":
    "• Explorar o conceito de área em situações envolvendo medidas de superfície, utilizando malhas quadriculadas e mobilizando conhecimentos prévios.",
  "Aula 22: Área de quadrados e retângulos":
    "• Calcular áreas de quadrados e retângulos utilizando malhas quadriculadas como suporte visual e estratégias de contagem.\n• Reconhecer a relação entre as medidas dos lados e a área total de figuras retangulares, identificando padrões multiplicativos e a representação de potências de expoente 2 em quadrados.\n• Resolver problemas práticos que envolvam cálculo de áreas de quadrados e retângulos em situações do cotidiano, sem uso de fórmulas convencionais.",
  "Aula 23: Área de triângulos":
    "• Calcular áreas de triângulos utilizando malhas quadriculadas como suporte visual, contando quadradinhos inteiros e frações de unidades.\n• Decompor figuras em triângulos para facilitar o cálculo de áreas em situações práticas.\n• Resolver problemas contextualizados que envolvam cálculo de áreas triangulares em situações do cotidiano, utilizando estratégias de estimativa e contagem.",
  "Aula 24: Resolução de problemas envolvendo áreas de retângulos e triângulos":
    "• Calcular áreas de quadrados, retângulos e triângulos utilizando diferentes estratégias.\n• Representar e calcular áreas de quadrados utilizando potências com expoente 2.\n• Resolver problemas práticos que envolvam cálculo de áreas de quadrados, retângulos e triângulos em situações do cotidiano, sem uso de fórmulas convencionais.",
  "Aula 25: Revisão: Área de quadrados, retângulos e triângulos":
    "• Resolver situações-problema que envolvam o cálculo de área de quadrados, retângulos e triângulos, mobilizando conhecimentos já estudados.\n• Aplicar estratégias para determinar a área de figuras em diferentes representações, como malhas quadriculadas.",
  "Aula 26: Volume de cubos - Parte 1":
    "• Reconhecer volume como grandeza associada a sólidos geométricos.\n• Medir volumes por meio de empilhamentos de cubos.\n• Reconhecer expressões numéricas para representar o volume de cubos por meio de multiplicações.\n• Identificar a relação entre a medida da aresta e o volume de um cubo, sistematizando o registro do volume de cubos por meio da potência com expoente 3.",
  "Aula 27: Volume de cubos - Parte 2":
    "• Reconhecer unidades de medida de volume.\n• Diferenciar unidades de medida de comprimento, área e volume.\n• Representar a área de quadrados por meio de potências de expoente 2.\n• Representar o volume de cubos por meio de potências de expoente 3.",
  "Aula 28: Resolução de problemas envolvendo volume":
    "• Resolver situações-problema envolvendo medidas de volume.",
  "Aula 29: Aula de verificação - Área em malhas quadriculadas e volume por empilhamento":
    "• Resolver situações-problema que envolvam área e volume, mobilizando os conhecimentos já estudados.\n• Interpretar e comparar medidas de área e volume em diferentes representações.",
  "Aula 30: Revisão: Volume por empilhamento":
    "• Resolver situações-problema que envolvam o cálculo de volume por empilhamento de blocos, mobilizando conhecimentos já estudados.\n• Diferenciar unidades de medida de comprimento, área e volume.",

  // Matemática - 7º Ano - 4º Bimestre
  "Aula 1: Explorando o conceito de ângulo":
    "• Reconhecer ângulos retos e não retos em figuras poligonais com o uso de dobraduras, esquadros ou softwares de geometria.",
  "Aula 2: Triângulos e suas particularidades":
    "• Classificar triângulos em relação às medidas dos lados.\n• Classificar triângulos em relação às medidas dos ângulos.\n• Explorar características dos triângulos, incluindo o fato de que a soma das medidas dos ângulos internos resulta 180°.",
  "Aula 3: Ângulos complementares e suplementares":
    "• Explorar nesta aula o prolongamento de um dos lados de um triângulo, para explorar ângulos suplementares.\n• Utilizar equações do 1º grau e cálculos mentais.\n• Reconhecer que, se um dos ângulos do triângulo mede 90°, a soma das medidas dos outros dois resultará 90°, assim tem-se um par de ângulos complementares.",
  "Aula 4: Resolução de problemas - Ângulos complementares e suplementares":
    "• Reconhecer que a soma dos ângulos internos de um triângulo é igual a 180°.\n• Resolver problemas envolvendo ângulos complementares e suplementares.\n• Resolver problemas envolvendo as medidas dos ângulos internos de um triângulo.",
  "Aula 5: Revisão: Classificação e propriedades dos triângulos":
    "• Reconhecer características dos triângulos, incluindo o fato de que a soma das medidas dos ângulos internos resulta 180°.",
  "Aula 6: Triângulos e ângulos":
    "• Reconhecer ângulos internos e externos, ângulos suplementares e complementares em diversos tipos de triângulos.",
  "Aula 7: Quadriláteros e ângulos":
    "• Reconhecer ângulos internos e externos, ângulos suplementares e complementares em diversos tipos de quadriláteros.\n• Resolver equações do 1º grau da forma ax + b = c.",
  "Aula 8: Resolução de problemas - Triângulos, quadriláteros e ângulos":
    "• Resolver problemas envolvendo a relação entre os ângulos internos e externos de triângulos e quadriláteros.",
  "Aula 9: Aula de verificação - Triângulos, quadriláteros e ângulos":
    "• Reconhecer ângulos internos e externos, ângulos suplementares e complementares em diversos tipos de quadriláteros.\n• Resolver equações do 1º grau da forma ax + b = c.",
  "Aula 10: Revisão: Relações angulares em quadriláteros":
    "• Reconhecer ângulos internos e externos, ângulos suplementares e complementares em diversos tipos de quadriláteros.",
  "Aula 11: Razão em situações do cotidiano":
    "• Analisar situações do cotidiano envolvendo razão, utilizando tabelas para identificar relações entre grandezas e construir a ideia de proporção.",
  "Aula 12: Entendendo a proporção":
    "• Conceituar proporção como uma igualdade entre duas razões;\n• Retomar a equação do 1º grau como ferramenta no processo de resolução de proporções;\n• Aplicar a propriedade fundamental das proporções.",
  "Aula 13: Grandezas diretamente proporcionais":
    "• Identificar situações envolvendo grandezas diretamente proporcionais em contextos do cotidiano;\n• Determinar a constante de proporcionalidade em diferentes situações-problema;\n• Resolver problemas envolvendo grandezas diretamente proporcionais.",
  "Aula 14: Resolução de problemas - Proporção e grandezas diretamente proporcionais":
    "• Resolver problemas envolvendo grandezas diretamente proporcionais.",
  "Aula 15: Revisão: Grandezas diretamente proporcionais":
    "• Resolver problemas envolvendo grandezas diretamente proporcionais.",
  "Aula 16: Grandezas inversamente proporcionais":
    "• Reconhecer relações de proporcionalidade inversa envolvendo duas grandezas.\n• Resolver problemas que envolvendo grandezas inversamente proporcionais.",
  "Aula 17: Regra de três simples":
    "• Explorar as estratégias da regra de três para resolver problemas envolvendo grandezas diretamente e inversamente proporcionais.\n• Aplicar equações do 1º grau como ferramenta no processo de resolução envolvendo grandezas proporcionais.",
  "Aula 18: Resolução de problemas - Regra de três simples":
    "• Resolver problemas envolvendo grandezas diretamente proporcionais e grandezas inversamente proporcionais, por meio da regra de três simples.",
  "Aula 19: Aula de verificação - Grandezas diretamente e inversamente proporcionais":
    "• Reconhecer a regra de três simples como estratégia de resolução para problemas envolvendo grandezas proporcionais.\n• Resolver problemas envolvendo grandezas diretamente e inversamente proporcionais por meio de estratégias diversas.",
  "Aula 20: Revisão: Grandezas diretamente e inversamente proporcionais":
    "• Resolver situações-problema que envolvam relações de proporcionalidade, mobilizando conhecimentos já estudados e diferentes estratégias de resolução.",
  "Aula 21: Explorando porcentagens":
    "• Associar as representações 10%, 25%, 50%, 75% e 100% respectivamente à décima parte, quarta parte, metade, três quartos e um inteiro, para calcular porcentagens.",
  "Aula 22: Estratégias de cálculo com porcentagens – Parte 1":
    "• Representar a porcentagem como uma fração.\n• Representar números decimais como uma fração decimal.\n• Operações com frações para calcular porcentagens.",
  "Aula 23: Estratégias de cálculo com porcentagens – Parte 2":
    "• Estratégias de cálculo de porcentagem envolvendo multiplicação de números decimais.",
  "Aula 24: Resolução de problemas – Estratégias de cálculo de porcentagem":
    "• Compreender e relacionar diferentes representações de porcentagem (fração e decimal).\n• Calcular a porcentagem de um todo utilizando diferentes estratégias.\n• Resolver e elaborar situações-problema envolvendo porcentagem em contextos do cotidiano.",
  "Aula 25: Revisão: Representações equivalentes e cálculo de porcentagem":
    "• Relacionar e interpretar diferentes formas de representação de um mesmo número (porcentagem, fração e decimal) em diferentes contextos.\n• Resolver situações-problema que envolvam porcentagem, mobilizando conhecimentos já estudados e diferentes estratégias de resolução.",
  "Aula 26: Acréscimos percentuais simples":
    "• Explorar o significado de acréscimo percentual simples, recaindo em operações com números decimais.",
  "Aula 27: Decréscimos percentuais simples":
    "• Explorar o significado de decréscimo percentual simples, recaindo em operações com números decimais.",
  "Aula 28: Resolução de problemas – Acréscimos e decréscimos percentuais simples":
    "• Identificar e diferenciar situações de acréscimo e decréscimo percentual em contextos cotidianos.\n• Aplicar estratégias de cálculo mental, escrito ou com calculadora.",
  "Aula 29: Aula de verificação - Porcentagem: acréscimos e decréscimos":
    "• Reconhecer o conceito de porcentagem.\n• Resolver problemas envolvendo porcentagens, inclusive com acréscimos e decréscimos simples, por meio de estratégias diversas.",
  "Aula 30: Revisão: Acréscimos e decréscimos percentuais":
    "• Resolver situações-problema que envolvam acréscimos e decréscimos percentuais, mobilizando conhecimentos já estudados e diferentes estratégias de resolução.",

  // Matemática - 8º Ano - 4º Bimestre
  "Aula 1: Analisando dados de pesquisas no cotidiano":
    "• Compreender a função dos gráficos e tabelas na comunicação de informações em diferentes contextos sociais.\n• Interpretar dados apresentados em diferentes formatos e identificar padrões, variações e tendências.\n• Produzir conclusões escritas com base na análise de dados, relacionando-os ao contexto apresentado.",
  "Aula 2: A amplitude e moda de um conjunto de dados":
    "• Identificar a moda em diferentes representações de dados e compreender seu significado em contextos reais.\n• Calcular a amplitude de um conjunto de dados e relacioná-la à dispersão das informações.\n• Interpretar dados apresentados em gráficos e tabelas e redigir conclusões com base na análise realizada.",
  "Aula 3: Média aritmética simples":
    "• Compreender a média aritmética como uma forma de representar um conjunto de dados.\n• Calcular a média aritmética de um grupo de valores apresentados em gráficos e tabelas.\n• Analisar dados apresentados em gráficos e tabelas e redigir conclusões com base na média observada.",
  "Aula 4: Resolução de problemas envolvendo amplitude, média aritmética e moda de um conjunto de dados – Parte 1":
    "• Identificar a moda em diferentes representações de dados e compreender seu significado em contextos reais.\n• Determinar a média aritmética simples de um conjunto de dados organizados, compreendendo seu significado.\n• Analisar dados apresentados em gráficos e tabelas e redigir conclusões com base na média e moda observadas.",
  "Aula 5: Revisão: gráficos, tabelas, moda e média aritmética":
    "• Interpretar dados apresentados em diferentes formatos.\n• Identificar a moda em diferentes representações de dados e compreender seu significado em contextos reais.\n• Determinar a média aritmética simples de um conjunto de dados organizados, compreendendo seu significado como valor central.",
  "Aula 6: Resolução de problemas envolvendo amplitude, média aritmética e moda de um conjunto de dados – Parte 2":
    "• Calcular a média aritmética de um grupo de valores apresentados em gráficos e tabelas.\n• Resolver situações-problemas contextualizadas que envolvam o cálculo e a interpretação da média aritmética simples e moda.\n• Empregar, inclusive, conhecimento algébrico para resolver problemas envolvendo as noções de média aritmética, amplitude e moda.",
  "Aula 7: Práticas de pesquisa – Parte 1":
    "• Planejar e realizar pesquisa envolvendo tema de interesse dos estudantes e/ou da realidade social, identificando a necessidade de ser censitária ou de usar amostra.\n• Elaborar formulários de coleta para uma pesquisa na esfera local.",
  "Aula 8: Práticas de pesquisa – Parte 2":
    "• Organizar os dados de uma pesquisa por meio de tabelas e gráficos, com ou sem o apoio de planilhas eletrônicas.\n• Determinar a amplitude, média e moda dos dados de uma pesquisa organizados em tabelas e gráficos.\n• Interpretar os dados de uma pesquisa para comunicá-los oralmente e/ou por meio de relatório escrito.",
  "Aula 9: Aula de verificação – Média aritmética e moda utilizando gráficos e tabelas":
    "• Identificar a moda em diferentes representações de dados e compreender seu significado em contextos reais.\n• Calcular a média aritmética simples de um grupo de valores apresentados em gráficos e tabelas.\n• Interpretar e resolver situações-problema envolvendo os conceitos de amplitude, média aritmética e moda.",
  "Aula 10: Revisão: situações-problema envolvendo média aritmética e moda":
    "• Resolver situações-problemas contextualizadas que envolvam o cálculo e a interpretação da média aritmética simples e moda.\n• Empregar, inclusive, conhecimento algébrico para resolver problemas envolvendo as noções de média aritmética, amplitude e moda.",
  "Aula 11: A linguagem algébrica para relacionar grandezas":
    "• Compreender o uso da linguagem algébrica para representar relações entre grandezas.\n• Identificar padrões em tabelas e construir sentenças algébricas que expressam essas relações.",
  "Aula 12: Formas de representar a variação de proporcionalidade direta":
    "• Compreender a proporcionalidade direta como uma relação constante entre duas grandezas.\n• Representar a variação proporcional por meio de sentença algébrica e gráfico no plano cartesiano.\n• Resolver e interpretar situações-problema que envolvam ou não proporcionalidade direta.",
  "Aula 13: Formas de representar a variação de proporcionalidade inversa":
    "• Compreender a proporcionalidade inversa como uma relação em que o produto entre duas grandezas é constante.\n• Representar a variação inversa por meio de sentença algébrica e gráfico no plano cartesiano.\n• Resolver e interpretar situações-problema que envolvam ou não proporcionalidade inversa.",
  "Aula 14: Resolução de problemas – Representações da variação proporcional":
    "• Representar a variação proporcional por meio de sentença algébrica e gráfico no plano cartesiano.\n• Representar a variação inversa por meio de sentença algébrica e gráfico no plano cartesiano.",
  "Aula 15: Revisão: Expressões algébricas e relações proporcionais":
    "• Representar a variação proporcional direta e inversa por meio de sentença algébrica.",
  "Aula 16: Grandezas diretamente proporcionais":
    "• Aplicar diferentes estratégias para resolver problemas com grandezas diretamente proporcionais.\n• Representar a relação entre grandezas por meio de sentença algébrica.\n• Identificar situações com ou sem proporcionalidade direta e justificar a escolha da estratégia utilizada.",
  "Aula 17: Grandezas inversamente proporcionais":
    "• Compreender e aplicar diferentes estratégias para resolver problemas com grandezas inversamente proporcionais.\n• Representar a relação entre grandezas por meio de sentença algébrica.\n• Identificar situações com ou sem proporcionalidade inversa e justificar a escolha da estratégia utilizada.",
  "Aula 18: Resolução de problemas – Grandezas diretamente e inversamente proporcionais":
    "• Resolver problemas envolvendo grandezas diretamente e inversamente proporcionais.\n• Resolver problemas envolvendo divisões em partes proporcionais.",
  "Aula 19: Aula de verificação – Grandezas diretamente e inversamente proporcionais":
    "• Aplicar diferentes estratégias para resolver problemas com grandezas inversamente proporcionais.\n• Aplicar diferentes estratégias para resolver problemas com grandezas diretamente proporcionais.",
  "Aula 20: Revisão: Regra de três simples e grandezas diretamente e inversamente proporcionais":
    "• Aplicar diferentes estratégias para resolver problemas com grandezas diretamente proporcionais.\n• Aplicar diferentes estratégias para resolver problemas com grandezas inversamente proporcionais.",
  "Aula 21: Explorando o conceito de porcentagem":
    "• Compreender o conceito de porcentagem como uma forma de representar partes de um todo dividido em 100.\n• Relacionar porcentagem com frações e números decimais em contextos reais.\n• Identificar e interpretar o uso da porcentagem em diferentes situações do cotidiano.",
  "Aula 22: Estratégias de cálculo de porcentagem – Parte 1":
    "• Compreender diferentes estratégias para calcular porcentagens simples, sem o uso de regra de três.\n• Utilizar cálculo mental, estimativas e tecnologias digitais para apoiar o raciocínio matemático.",
  "Aula 23: Estratégias de cálculo de porcentagem – Parte 2":
    "• Resolver problemas envolvendo acréscimos e decréscimos percentuais simples, utilizando a regra de três.\n• Compreender e aplicar diferentes estratégias para o cálculo de porcentagens em contextos reais.\n• Utilizar tecnologias digitais como apoio ao raciocínio matemático e à resolução de problemas.",
  "Aula 24: Resolução de problemas envolvendo o cálculo de porcentagens":
    "• Aplicar estratégias pessoais e cálculo mental para resolver problemas envolvendo porcentagens simples.\n• Utilizar a regra de três simples como ferramenta para calcular porcentagens em diferentes contextos.\n• Resolver problemas reais que envolvam acréscimos e decréscimos percentuais, interpretando os resultados e justificando as estratégias utilizadas.",
  "Aula 25: Revisão: Porcentagem e frações equivalentes":
    "• Compreender diferentes estratégias para calcular porcentagens simples, sem o uso da regra de três.\n• Utilizar cálculo mental, estimativas e tecnologias digitais para apoiar o raciocínio matemático.",
  "Aula 26: Acréscimos percentuais simples e sucessivos":
    "• Resolver problemas envolvendo acréscimos percentuais simples e sucessivos, utilizando cálculo mental, estratégias pessoais e calculadora.\n• Compreender que acréscimos sucessivos não devem ser somados diretamente, e aplicar o cálculo de forma sequencial.\n• Justificar e comparar diferentes estratégias de resolução, reconhecendo a validade de múltiplas abordagens para o mesmo problema.",
  "Aula 27: Decréscimos percentuais simples e sucessivos":
    "• Compreender o conceito de decréscimo percentual simples e sucessivo e sua aplicação em contextos reais, como promoções e liquidações.\n• Resolver problemas envolvendo reduções percentuais utilizando estratégias pessoais, cálculo mental e tecnologias digitais.\n• Justificar e comparar diferentes abordagens de resolução, reconhecendo que há mais de uma forma válida de calcular descontos sucessivos.",
  "Aula 28: Resolução de problemas envolvendo acréscimos e decréscimos percentuais":
    "• Resolver problemas envolvendo acréscimos e decréscimos percentuais simples e sucessivos, utilizando cálculo mental, estratégias pessoais e calculadora.",
  "Aula 29: Aula de verificação – Cálculos envolvendo porcentagens":
    "• Resolver problemas envolvendo acréscimos e decréscimos percentuais simples e sucessivos, utilizando a regra de três.\n• Compreender e aplicar diferentes estratégias para o cálculo de porcentagens em contextos reais.",
  "Aula 30: Revisão: Acréscimos e decréscimos percentuais sucessivos":
    "• Compreender que acréscimos sucessivos não devem ser somados diretamente, e aplicar o cálculo de forma sequencial.\n• Compreender que descontos sucessivos não devem ser subtraídos diretamente, e aplicar o cálculo de forma sequencial.",

  // Matemática - 9º Ano - 4º Bimestre
  "Aula 1: Diferenciando área e perímetro":
    "• Diferenciar os conceitos de área e perímetro.\n• Estimar medidas de área e perímetro de figuras geométricas planas.\n• Calcular área de triângulos e quadriláteros, por meio de estratégias diversas.",
  "Aula 2: Área de triângulos e quadriláteros":
    "• Reconhecer expressões de cálculo para a área de triângulos e quadriláteros.\n• Diferenciar a área e o perímetro de triângulos e quadriláteros em contextos diversos.",
  "Aula 3: Área de figuras geométricas planas por decomposição em triângulos e quadriláteros":
    "• Reconhecer expressões de cálculo para a área de triângulos e quadriláteros.\n• Calcular a área de figuras geométricas que possam ser decompostas por triângulos e quadriláteros, por meio de estratégias diversas.",
  "Aula 4: Resolução de problemas envolvendo cálculo de área de figuras que possam ser decompostas em triângulos e quadriláteros":
    "• Resolver problemas envolvendo cálculo de área e perímetro de figuras geométricas planas que possam ser decompostas em triângulos e quadriláteros.",
  "Aula 5: Revisão: Área de figuras planas por decomposição":
    "• Reconhecer expressões de cálculo para a área de triângulos e quadriláteros.\n• Calcular a área de figuras geométricas planas que possam ser decompostas por triângulos e quadriláteros, por meio de estratégias diversas.",
  "Aula 6: O número π":
    "• Reconhecer o número π a partir do seu contexto histórico.\n• Obter, experimentalmente, aproximações para o número π a partir da relação entre o comprimento e o diâmetro da circunferência.\n• Reconhecer expressões de cálculo para o comprimento de circunferências.",
  "Aula 7: Cálculo de área e comprimento de círculos e setores circulares":
    "• Reconhecer expressões de cálculo para a área e o comprimento de círculos.\n• Reconhecer ângulos centrais na circunferência.\n• Reconhecer, a partir das noções de proporcionalidade, expressões de cálculo de área e comprimento para setores circulares.",
  "Aula 8: Resolução de problemas envolvendo cálculo de área e perímetro de círculos e setores circulares":
    "• Resolver problemas que envolvam o cálculo de área e perímetro de círculos e setores circulares, por meio de estratégias diversas.",
  "Aula 9: Aula de verificação – Área e perímetro de figuras geométricas planas":
    "• Resolver problemas que envolvam o cálculo de área e perímetro de círculos e de figuras geométricas planas que possam ser decompostas em triângulos e quadriláteros.",
  "Aula 10: Revisão: Área do círculo e do setor circular":
    "• Resolver problemas que envolvam o cálculo de área e perímetro de círculos e setores circulares, por meio de estratégias diversas.",
  "Aula 11: Sorte ou azar?":
    "• Realizar experimentos aleatórios ou simulações que envolvam cálculo de probabilidade.\n• Fazer estimativas acerca dos resultados em um experimento aleatório, identificando quais eventos têm maior, menor ou mesma chance de ocorrerem.\n• Estimar, em uma simulação, a chance de ocorrências por meio de estimativas a partir da análise de frequência.",
  "Aula 12: Conceito de probabilidade":
    "• Reconhecer probabilidade como a razão entre o número de resultados favoráveis e o total de resultados possíveis.\n• Reconhecer o conceito de espaço amostral, a partir de espaços amostrais equiprováveis.",
  "Aula 13: Cálculo de probabilidade com espaços amostrais equiprováveis":
    "• Calcular a probabilidade de ocorrência de eventos em espaços amostrais equiprováveis, por meio da razão entre o número de resultados favoráveis e o total de resultados possíveis.\n• Reconhecer, por meio de investigações em espaços amostrais equiprováveis, que a soma das probabilidades de todos os elementos do espaço amostral é igual a 1.",
  "Aula 14: Resolução de problemas envolvendo noções de probabilidade":
    "• Resolver problemas que envolvam noções elementares de probabilidade.",
  "Aula 15: Revisão: Probabilidade em espaços equiprováveis":
    "• Calcular a probabilidade de ocorrência de eventos em espaços amostrais equiprováveis, por meio da razão entre o número de resultados favoráveis e o total de resultados possíveis.\n• Reconhecer, por meio de investigações em espaços amostrais equiprováveis, que a soma das probabilidades de todos os elementos do espaço amostral é igual a 1.",
  "Aula 16: Cálculo de probabilidade a partir da construção do espaço amostral":
    "• Reconhecer espaços amostrais não equiprováveis.\n• Construir o espaço amostral de diferentes experimentos aleatórios, utilizando, inclusive, o princípio multiplicativo.\n• Calcular probabilidades a partir da razão entre o número de resultados favoráveis e o total de resultados possíveis em um espaço amostral não equiprovável.\n• Reconhecer que a soma das probabilidades de todos os elementos do espaço amostral é igual a 1.",
  "Aula 17: Reconhecimento de eventos dependentes e independentes":
    "• Reconhecer, em contextos do cotidiano, eventos dependentes e independentes, diferenciando-os.",
  "Aula 18: Resolução de problemas envolvendo cálculo de probabilidade por meio de estratégias diversas":
    "• Calcular a probabilidade de ocorrência de eventos independentes a partir da construção do espaço amostral de eventos não-equiprováveis.\n• Reconhecer que a soma das probabilidades de todos os elementos do espaço amostral é igual a 1.",
  "Aula 19: Aula de verificação – Cálculo de probabilidades":
    "• Calcular a probabilidade de ocorrência de eventos independentes a partir da construção do espaço amostral (seja ele equiprovável ou não).\n• Reconhecer que a soma das probabilidades de todos os elementos do espaço amostral é igual a 1.",
  "Aula 20: Revisão: Probabilidades":
    "• Calcular a probabilidade de ocorrência de eventos independentes a partir da construção do espaço amostral de eventos não-equiprováveis.",
  "Aula 21: O que é proporcionalidade?":
    "• Reconhecer a proporcionalidade em contextos cotidianos, percebendo grandezas que apresentam relações de proporcionalidade.\n• Investigar a razão entre grandezas diretamente proporcionais, fazendo inferências.",
  "Aula 22: Grandezas diretamente proporcionais":
    "• Reconhecer grandezas diretamente proporcionais.\n• Expressar a relação entre duas grandezas diretamente proporcionais por meio de uma sentença algébrica.\n• Resolver problemas envolvendo grandezas diretamente proporcionais por meio de estratégias diversas.",
  "Aula 23: Problemas envolvendo escala":
    "• Reconhecer o conceito de escala, percebendo as noções de proporcionalidade direta.\n• Resolver problemas envolvendo escalas por meio de estratégias pessoais diversas.",
  "Aula 24: Resolução de problemas envolvendo grandezas diretamente proporcionais":
    "• Resolver problemas envolvendo grandezas diretamente proporcionais, incluindo escala, por meio de estratégias pessoais diversas.",
  "Aula 25: Revisão: Grandezas diretamente proporcionais e escala":
    "• Resolver problemas envolvendo grandezas diretamente proporcionais, incluindo escala, por meio de estratégias pessoais diversas.",
  "Aula 26: Grandezas inversamente proporcionais":
    "• Reconhecer grandezas inversamente proporcionais.\n• Expressar a relação entre duas grandezas inversamente proporcionais por meio de uma sentença algébrica.\n• Resolver problemas envolvendo grandezas inversamente proporcionais por meio de estratégias diversas.",
  "Aula 27: Problemas envolvendo divisão em partes proporcionais e proporcionalidade direta ou inversa entre mais de duas grandezas":
    "• Resolver problemas que envolvam divisão em partes proporcionais.\n• Resolver problemas envolvendo proporcionalidade direta ou inversa entre mais de duas grandezas (regra de três composta).",
  "Aula 28: Resolução de problemas envolvendo proporcionalidade":
    "• Resolver problemas que envolvam grandezas inversamente proporcionais.\n• Resolver problemas que envolvam divisão em partes proporcionais.\n• Resolver problemas envolvendo proporcionalidade direta ou inversa entre mais de duas grandezas (regra de três composta).",
  "Aula 29: Aula de verificação – Proporcionalidade":
    "• Resolver problemas que envolvam grandezas diretamente ou inversamente proporcionais, incluindo escalas.\n• Resolver problemas que envolvam divisão em partes proporcionais.",
  "Aula 30: Revisão: Proporcionalidade inversa e divisão proporcional":
    "• Resolver problemas que envolvam grandezas inversamente proporcionais.\n• Resolver problemas que envolvam divisão em partes proporcionais.",

  // Matemática - 2º Ano - 4º Bimestre
  "Aula 1: Medindo superfícies.":
    "• Retomar o conceito de área como medida de superfície.\n• Retomar unidades de áreas.\n• Resolver problemas envolvendo transformações de unidades de áreas.",
  "Aula 2: Áreas de figuras geométricas planas – Parte 1.":
    "• Compreender a relação matemática para o cálculo da área de um quadrado.\n• Compreender a relação matemática para o cálculo da área de um retângulo.\n• Compreender a relação matemática para o cálculo da área de um paralelogramo.\n• Resolver problemas relacionados ao cálculo de áreas de quadrados, de retângulos e de paralelogramos.",
  "Aula 3: Áreas de figuras geométricas planas – Parte 2.":
    "• Compreender as relações matemáticas para o cálculo da área de um triângulo.\n• Retomar o Teorema de Pitágoras no contexto de resolução de problemas envolvendo áreas de triângulos.\n• Resolver problemas envolvendo o cálculo de áreas de triângulos.",
  "Aula 4: Revisão: área de figuras geométricas planas":
    "• Resolver problemas envolvendo as áreas das seguintes figuras planas: quadrado, retângulo, paralelogramo e triângulo.",
  "Aula 5: Áreas de figuras geométricas planas – Parte 3.":
    "• Compreender a relação matemática para o cálculo da área de um trapézio.\n• Compreender a relação matemática para o cálculo da área de um losango.\n• Resolver problemas envolvendo as áreas de trapézios e losangos.",
  "Aula 6: Áreas de figuras geométricas planas – Parte 4.":
    "• Compreender a relação matemática para o cálculo da área de superfície em forma de círculo.\n• Compreender a relação matemática para o cálculo da área de superfície em forma de setor circular.\n• Resolver problemas relacionados ao cálculo de área de círculo, de setor circular.",
  "Aula 7: Resolução de problemas relacionados ao cálculo de áreas de figuras geométricas planas.":
    "• Resolver problemas relacionados ao cálculo de áreas de figuras planas: quadrado, retângulo, paralelogramo, triângulo, trapézio, losango e círculo.\n• Resolver problemas relacionados ao cálculo de áreas de figuras não regulares por meio de aproximações e reconfigurações.",
  "Aula 8: Aula de verificação: Áreas de figuras geométricas planas.":
    "• Resolver problemas envolvendo o cálculo de áreas de figuras geométricas planas: quadrado, retângulo, paralelogramo, triângulo, trapézio, losango e círculo.",
  "Aula 9: Poliedros e seus elementos.":
    "• Conceituar poliedro convexo, diferenciando-o de poliedros não convexos.\n• Identificar elementos de um poliedro: faces, vértices e arestas.\n• Identificar os poliedros regulares.\n• Compreender a relação de Euler para os poliedros convexos.\n• Resolver problemas relacionados aos poliedros convexos.",
  "Aula 10: Sólidos geométricos e suas planificações.":
    "• Identificar e associar prismas com suas planificações.\n• Identificar e associar pirâmides com suas planificações.\n• Obter a relação métrica entre o apótema, o lado da base e a aresta lateral de uma pirâmide.",
  "Aula 11: Áreas de prismas e pirâmides.":
    "• Compreender a relação matemática para o cálculo da área lateral e a área total de prismas.\n• Compreender a relação matemática para o cálculo da área lateral e a área total de pirâmides.",
  "Aula 12: Revisão: poliedros":
    "• Resolver problemas relacionados aos elementos em poliedros.\n• Resolver problemas sobre o cálculo de áreas de prismas e pirâmides regulares.",
  "Aula 13: Estratégias de cálculo do volume de um prisma.":
    "• Retomar o procedimento para o cálculo do volume de um bloco retangular.\n• Compreender o princípio de Cavalieri para o cálculo de volume de sólidos geométricos.\n• Compreender e aplicar estratégias para o cálculo do volume de um prisma.",
  "Aula 14: Estratégias de cálculo do volume de uma pirâmide.":
    "• Compreender a relação matemática para o cálculo de uma pirâmide.\n• Resolver problemas relacionados a determinação de volumes de pirâmides.",
  "Aula 15: Resolução de problemas: volume de prismas e volume de pirâmides.":
    "• Resolver problemas do cálculo de volumes de prismas e de pirâmides.",
  "Aula 16: Aula de verificação: Áreas e volumes de prismas e pirâmides.":
    "• Resolver problemas relacionados ao cálculo de áreas e de volume de prismas e pirâmides.",
  "Aula 17: Unidades de volume e capacidade.":
    "• Retomar os conceitos de volume e de capacidade.\n• Retomar unidades de volume e capacidade.\n• Resolver problemas envolvendo volumes e capacidade de blocos retangulares.",
  "Aula 18: Cálculo de áreas de um cilindro circular reto.":
    "• Compreender as relações matemáticas para o cálculo da área lateral e a área total de cilindro circular reto.\n• Resolver problemas relacionados ao cálculo da área lateral e da área total de cilindro circular reto.",
  "Aula 19: O volume de um cilindro circular reto.":
    "• Compreender relação matemática para o cálculo do volume de um cilindro circular reto.\n• Resolver problemas relacionados ao cálculo do volume de cilindro circular reto.",
  "Aula 20: Revisão: volume e capacidade de sólidos geométricos":
    "• Resolver problemas envolvendo o cálculo de volume e capacidade de prismas e cilindros.",
  "Aula 21: Cálculo de áreas de um cone circular reto.":
    "• Compreender as relações matemática para o cálculo da área lateral e da área total de cone circular reto.",
  "Aula 22: Volume de um cone circular reto.":
    "• Compreender relação matemática para o cálculo do volume de um cone circular reto.\n• Resolver problemas relativos ao cálculo do volume de um cone circular reto.",
  "Aula 23: Resolução de problemas: áreas e volume de cone circular reto.":
    "• Resolver problemas relacionados ao cálculo de áreas e de volume de cone circular reto.",
  "Aula 24: Aula de verificação: Cálculo de áreas e volumes de cone circular reto.":
    "• Resolver problemas envolvendo o cálculo de volume e/ou capacidade de cilindros e cones.",

  // Matemática - 3º Ano - 4º Bimestre
  "Aula 1: Explorando e cálculo de velocidade média.":
    "• Compreender o conceito de velocidade média.\n• Compreender que a velocidade e o deslocamento são grandezas diretamente proporcionais.\n• Compreender que a velocidade e o tempo são grandezas inversamente proporcionais.\n• Resolver problemas envolvendo a velocidade média.",
  "Aula 2: Grandezas determinadas pela razão ou pelo produto de outras – Parte 1.":
    "• Compreender relações entre grandezas de espécies diferentes.\n• Analisar proporcionalidades nessas relações.",
  "Aula 3: Grandezas determinadas pela razão ou pelo produto de outras – Parte 2.":
    "• Identificar grandezas que são dadas a partir do produto de outras duas.\n• Identificar grandezas que são dadas pelo quociente de outras duas.\n• Resolver problemas envolvendo relações entre grandezas de espécies diferentes.",
  "Aula 4: Revisão: grandezas determinadas pela razão ou pelo produto de outras.":
    "• Resolver problemas envolvendo a relação entre grandezas de espécies diferentes.",
  "Aula 5: A regra de três simples.":
    "• Conceituar e identificar grandezas diretamente proporcionais.\n• Conceituar e identificar grandezas inversamente proporcionais.\n• Resolver problemas envolvendo a regra de três simples.",
  "Aula 6: A regra de três composta.":
    "• Analisar e identificar a relação de proporcionalidade entre grandezas.\n• Resolver problemas envolvendo a regra de três composta.",
  "Aula 7: Resolução de problemas envolvendo relação entre grandezas.":
    "• Resolver problemas envolvendo grandezas de espécies diferentes.\n• Resolver problemas envolvendo grandezas diretamente e inversamente proporcionais.",
  "Aula 8: Aula de verificação: Relação entre grandezas.":
    "• Resolver problemas envolvendo grandezas de espécies diferentes.\n• Resolver problemas envolvendo grandezas diretamente e inversamente proporcionais.",
  "Aula 9: Média aritmética.":
    "• Conceituar a média aritmética simples de um conjunto de valores.\n• Resolver problemas relacionados ao cálculo de média aritmética.",
  "Aula 10: Média aritmética e média ponderada.":
    "• Conceituar média ponderada a partir de média aritmética simples.\n• Resolver problemas relacionados ao cálculo de média ponderada.",
  "Aula 11: Mediana e moda.":
    "• Conceituar mediana e moda como medidas de tendência central.\n• Resolver problemas envolvendo média, mediana e moda.",
  "Aula 12: Revisão: medidas de tendência central.":
    "• Calcular a média aritmética e/ou a média ponderada.\n• Resolver problemas relacionados ao cálculo de média aritmética simples ou média ponderada.",
  "Aula 13: Amplitude e variância.":
    "• Conceituar e calcular amplitude de um conjunto de valores.\n• Conceituar e calcular variância de um conjunto de valores.",
  "Aula 14: Desvio médio e desvio padrão.":
    "• Conceituar desvio médio como medida de dispersão.\n• Conceituar desvio padrão como medida de dispersão.\n• Resolver situações-problema relacionadas ao cálculo de desvio médio e desvio padrão.",
  "Aula 15: Resolução de problemas – Desvio médio e desvio padrão.":
    "• Resolver problemas envolvendo o desvio médio de um conjunto de valores.\n• Resolver problemas envolvendo o desvio padrão de um conjunto de valores.",
  "Aula 16: Aula de verificação: Medidas de tendência central e medidas de dispersão.":
    "• Resolver problemas relacionados às medidas de tendência central e às medidas de dispersão.",
  "Aula 17: Proporcionalidade com perímetro e área de polígonos.":
    "• Identificar a proporcionalidade ou não entre a medida do lado de um quadrado e o perímetro, entre o lado do quadrado e sua área.\n• Resolver problemas relacionados à análise de variações entre áreas, perímetros e medidas do lado de um quadrado.",
  "Aula 18: Polígonos convexos regulares.":
    "• Retomar o conceito de polígonos convexos diferenciando-os de polígonos não convexos.\n• Retomar o concept polígonos convexos regulares.\n• Resolver situações-problema sobre soma das medidas dos ângulos internos e dos ângulos externos de um polígono convexo.",
  "Aula 19: Áreas de polígonos regulares – Parte 1.":
    "• Compreender as relações matemáticas para o cálculo da área dos polígonos regulares: quadrado, triângulo equilátero e hexágono regular.\n• Resolver problemas relativos ao cálculo das áreas do quadrado, do triângulo equilátero e do hexágono regular.",
  "Aula 20: Revisão: polígonos convexos e cálculos de área.":
    "• Resolver problemas envolvendo conceitos e cálculo de áreas de polígonos convexos.",
  "Aula 21: Áreas de polígonos regulares – Parte 2.":
    "• Resolver problemas sobre áreas de polígonos regulares: triângulo equilátero, quadrado e hexágono regular.",
  "Aula 22: Área do círculo e do setor circular.":
    "• Compreender como calcular o comprimento de uma circunferência e de um arco de circunferência.\n• Compreender como calcular a área de um círculo e de um setor circular.",
  "Aula 23: Resolução de problemas envolvendo áreas de figuras planas.":
    "• Empregar diferentes métodos para obter a medida da área de uma superfície em contextos do mundo real.",
  "Aula 24: Aula de verificação: Áreas de figuras planas.":
    "• Resolver problemas relacionados ao cálculo de áreas de figuras planas: polígonos regulares, círculo e setor circular.",

  // Inglês - 6º Ano - 4º Bimestre
  "Aula 1: Describing pictures - Part 1":
    "• Utilizar vocabulário específico para descrever ações em progresso.",
  "Aula 2: Describing pictures - Part 2":
    "• Descrever uma cena utilizando o presente contínuo.",
  "Aula 3: My place":
    "• Utilizar vocabulário específico para descrever uma casa.",
  "Aula 4: Blueprints":
    "• Descrever uma casa a partir de uma planta baixa.",
  "Aula 5: The house of my dreams - Part 1":
    "• Planejar a descrição oral de uma casa imaginária em inglês.",
  "Aula 6: The house of my dreams - Part 2":
    "• Descrever uma casa imaginária em inglês utilizando linguagem escrita.",
  "Aula 7: How is your dream house?":
    "• Trocar informações com um interlocutor, perguntando e respondendo sobre uma casa imaginária.",
  "Aula 8: Addresses in English":
    "• Reconhecer e identificar características de um endereço em língua inglesa.\n• Utilizar diferentes preposições para falar de lugares.",
  "Aula 9: Numbers and addresses - Part 1":
    "• Identificar, em endereços, informações pontuais e explícitas.\n• Comunicar números em inglês de 100 a 999.",
  "Aula 10: Numbers and addresses - Part 2":
    "• Comunicar números na casa dos milhares em inglês.",
  "Aula 11: Nationalities and languages":
    "• Compreender o que é língua materna e língua adicional.",
  "Aula 12: We all speak English":
    "• Identificar países no mundo que falam inglês como língua materna e/ou língua adicional.",

  // Inglês - 7º Ano - 4º Bimestre
  "Aula 1: Birth dates":
    "• Compreender e comunicar datas de nascimento em inglês.",
  "Aula 2: Dates in history":
    "• Comunicar e compreender o ano em que acontecimentos importantes do passado ocorreram.",
  "Aula 3: Life story timeline - Part 1":
    "• Compreender uma linha do tempo pessoal.",
  "Aula 5: Life story timeline - Part 2":
    "• Planejar e produzir uma linha do tempo pessoal com datas e breve descrição de fatos.",
  "Aula 6: Biographies - Part 1":
    "• Identificar informações gerais e específicas em biografias em inglês.\n• Reconhecer e utilizar o verbo to be em biografias.",
  "Aula 8: Biographies - Part 2":
    "• Identificar informações gerais e específicas em biografias em inglês.\n• Reconhecer e utilizar formas negativas na comunicação de fatos biográficos.",
  "Aula 9: Bold women in history - Part 1":
    "• Identificar informações gerais e específicas em biografias em inglês.\n• Reconhecer e utilizar formas interrogativas para perguntar sobre fatos biográficos.",
  "Aula 11: Bold women in history - Part 2":
    "• Compreender diálogos em inglês, identificando informações específicas.\n• Utilizar did para expressar formas interrogativas no passado.",
  "Aula 12: Say it your way":
    "• Reconhecer a variação linguística como fenômeno natural das línguas, identificando e refutando preconceitos linguísticos.",
  "Aula 13: Aula Desafio: What can we do with our electronic waste?":
    "• Utilizar a língua inglesa para desenvolver consciência crítica sobre descarte de lixo eletrônico no contexto escolar.",

  // Inglês - 8º Ano - 4º Bimestre
  "Aula 1: Are robots better than humans? - Part 1":
    "• Compreender e utilizar formas comparativas da língua inglesa.",
  "Aula 3: Are robots better than humans? - Part 2":
    "• Compreender e utilizar formas comparativas da língua inglesa.",
  "Aula 5: The coolest gadgets - Part 1":
    "• Compreender e utilizar formas superlativas da língua inglesa.\n• Diferenciar a forma comparativa da forma superlativa.",
  "Aula 7: The coolest gadgets - Part 2":
    "• Compreender e utilizar formas superlativas da língua inglesa.\n• Diferenciar a forma comparativa da forma superlativa.",
  "Aula 9: Narrative texts - Part 1":
    "• Desenvolver estratégias para leitura de textos narrativos em língua inglesa.",
  "Aula 11: Narrative texts - Part 2":
    "• Desenvolver estratégias para leitura de textos narrativos em língua inglesa.",

  // Inglês - 9º Ano - 4º Bimestre
  "Aula 1: Reporting facts - Part 1":
    "• Identificar elementos de um fato.",
  "Aula 3: Reporting facts - Part 2":
    "• Identificar elementos de um fato.",
  "Aula 5: Fact or opinion? - Part 1":
    "• Distinguir fato de opinião.",
  "Aula 7: Fact or opinion? - Part 2":
    "• Distinguir fato de opinião.",
  "Aula 9: Reading News - Part 1":
    "• Ler e compreender notícias em língua inglesa.",
  "Aula 11: Reading News - Part 2":
    "• Ler e compreender notícias em língua inglesa.",

  // Inglês - 2º Ano - 4º Bimestre
  "Aula 1: The world of work - Part 1":
    "• Ler e compreender textos de circulação social em inglês sobre o mundo do trabalho.\n• Identificar a função do \"past perfect\" na construção textual.",
  "Aula 3: The world of work - Part 2":
    "• Ler e compreender textos de circulação social em inglês sobre o mundo do trabalho.\n• Identificar a função do \"future perfect\" na construção textual.",
  "Aula 5: The world of work - Part 3":
    "• Ler e compreender textos de circulação social em inglês sobre o mundo do trabalho.\n• Identificar a função de \"real conditionals\" na construção textual.",
  "Aula 7: The world of work - Part 4":
    "• Ler e compreender textos de circulação social em inglês sobre o mundo do trabalho.\n• Identificar a função de \"unreal conditionals\" na construção textual.",
  "Aula 9: The world of work - Part 5":
    "• Utilizar diferentes recursos linguísticos para compreender e produzir textos em língua inglesa.\n• Posicionar-se diante de questões polêmicas sobre o mundo do trabalho, utilizando a língua inglesa.",
  "Aula 11: The world of work - Part 6":
    "• Utilizar diferentes recursos linguísticos para compreender e produzir textos em língua inglesa.\n• Posicionar-se diante de questões polêmicas sobre o mundo do trabalho, utilizando a língua inglesa.",

  // Inglês - 3º Ano - 4º Bimestre
  "Aula 1: Environmental issues - Part 1":
    "• Ler e compreender textos de circulação social em inglês sobre questões ambientais.\n• Identificar a referência de pronomes possessivos na construção textual.",
  "Aula 3: Environmental issues - Part 2":
    "• Ler e compreender textos de circulação social em inglês sobre questões ambientais.\n• Identificar a referência de pronomes relativos na construção textual.",
  "Aula 5: Environmental issues - Part 3":
    "• Ler e compreender textos de circulação social em inglês sobre questões ambientais.\n• Utilizar estratégias de leitura para compreensão de textos em inglês.",
  "Aula 7: Environmental issues - Part 4":
    "• Utilizar diferentes recursos linguísticos para compreender e produzir textos em inglês.\n• Posicionar-se diante de questões polêmicas sobre o questões ambientais, utilizando a língua inglesa.",
  "Aula 9: Environmental issues - Part 5":
    "• Mobilizar conhecimentos prévios para compreensão e produção de textos sobre meio ambiente.\n• Identificar e utilizar elementos linguísticos específicos compreendendo sua função na construção textual.",
  "Aula 11: Aula Desafio: How can we reduce the impact of fast fashion in our community?":
    "• Utilizar a língua inglesa para desenvolver a consciência crítica sobre os impactos ambientais da indústria da fast fashion.",

  // Common titles
  "Aula 10: Plataforma EF":
    "• Trilha de estudos individual na sala de aula.",
  "Plataforma EF":
    "• Aprimorar a proficiência em língua inglesa.",

  // Educação Física - 6º Ano - 4º Bimestre
  "Aula 1: Jogos de Tabuleiro":
    "• Compreender o conceito de jogos de tabuleiro, sua origem e importância cultural.\n• Conhecer diferentes jogos de tabuleiro.",
  "Aula 2: Damas e Xadrez":
    "• Vivenciar jogos de tabuleiro tradicionais",
  "Aula 3: Trilha":
    "• Adaptar e experimentar um jogo de tabuleiro tradicional",
  "Aula 4: Pong Hau Ki":
    "• Adaptar e experimentar jogos de tabuleiro do mundo",
  "Aula 5: Labirinto e Shisima":
    "• Adaptar e experimentar jogos de tabuleiro africano",
  "Aula 6: Jogo da onça":
    "• Adaptar e experimentar jogos de tabuleiro indígena",
  "Aula 7: Jogos de casa":
    "• Vivenciar diferentes jogos de tabuleiro",
  "Aula 8: Lutas do Brasil: Tarracá, Huka-Huka e Luta Marajoara":
    "• Identificar a definição e as características culturais das Lutas do Brasil;\n• Conhecer a origem e as características culturais das lutas: Tarracá, Huka-Huka e Luta Marajoara.",
  "Aula 9: Os jogos de oposição nas lutas do Brasil":
    "• Experimentar jogos de oposição",
  "Aula 10: O Huka-Huka":
    "• Vivenciar o Huka-Huka de maneira adaptada à realidade escolar",
  "Aula 11: A Luta Marajoara":
    "• Vivenciar a luta Marajoara adaptada à realidade escolar",
  "Aula 12: O Tarracá":
    "• Vivenciar a luta Tarracá adaptada à realidade escolar",
  "Aula 13: Recriando as lutas do Brasil":
    "• Recriar as lutas do Brasil",
  "Aula 14: Apresentando as criações":
    "• Apresentar e vivenciar produções que recriaram as lutas do Brasil",

  // Educação Física - 7º Ano - 4º Bimestre
  "Aula 1: Jogos Eletrônicos: Realidade Virtual e Realidade Aumentada":
    "• Conhecer a origem e a evolução dos jogos eletrônicos;\n• Comparar e analisar as diferenças e relações das diversas modalidades e tipos de jogos.",
  "Aula 2: Just Dance":
    "• Vivenciar o Just Dance",
  "Aula 3: Free Fire adaptado":
    "• Vivenciar o Free Fire adaptado",
  "Aula 4: Pokemon Go":
    "• Vivenciar um ou mais jogos eletrônicos em RA",
  "Aula 5: Damas e xadrez virtual":
    "• Vivenciar uma ou mais partidas de damas e xadrez online.",
  "Aula 6: Agora é a hora da sua sugestão":
    "• Vivenciar um ou mais jogos eletrônicos a escolha dos estudantes",
  "Aula 7: Transformando o virtual em analógico":
    "• Vivenciar uma adaptação de um jogo eletrônico para uma versão analógica",
  "Aula 8: Jogos eletrônicos, captação de movimento e preparação física de Cyberatletas":
    "• Conhecer os jogos eletrônicos relacionados aos esportes convencionais;\n• Conhecer os jogos eletrônicos que mobilizam o jogador corporalmente e discutir os benefícios relacionados;\n• Identificar as exigências corporais para essas práticas específicas e relacioná-las às capacidades físicas.",
  "Aula 9: Jogos eletrônicos de esporte":
    "• Conhecer, experimentar e vivenciar jogos eletrônicos com temas esportivos",
  "Aula 10: Jogos eletrônicos com captação de movimento - dança":
    "• Conhecer, experimentar e vivenciar jogos eletrônicos com captação de movimento ou mobilização corporal",
  "Aula 11: Jogos eletrônicos com captação de movimento - esporte ou exercício físico":
    "• Conhecer, experimentar e vivenciar jogos eletrônicos com captação de movimento ou mobilização corporal",
  "Aula 12: Vivenciando modalidades dos e-sports":
    "• Conhecer, experimentar e vivenciar modalidades de e-sports",
  "Aula 13: A preparação física dos Cyberatletas":
    "• Identificar as práticas corporais necessárias para ser cyberatleta e relacionar essas práticas de preparação física às capacidades físicas e às habilidades motoras.\n• Criar um programa de preparação física para cyberatletas",
  "Aula 14: Programas de preparação física dos atletas de e-sports":
    "• Apresentar e vivenciar programas de preparação física para atletas de e-sports, desenvolvidos pelos estudantes",

  // Educação Física - 8º Ano - 4º Bimestre
  "Aula 1: Trilha e Trekking":
    "• Compreender as características e fundamentos das práticas de trilha e trekking;\n• Valorizar a preservação ambiental e o comportamento responsável na natureza;\n• Reconhecer os riscos e cuidados necessários para a prática segura.",
  "Aula 2: Planejando a trilha escolar":
    "• Planejar uma trilha simulada no espaço escolar, compreendendo a importância do preparo e da segurança.",
  "Aula 3: Técnicas de caminhada":
    "• Vivenciar técnicas básicas de deslocamento, ritmo e orientação, adaptadas ao ambiente escolar.",
  "Aula 4: Trilha simulada e cooperação":
    "• Vivenciar uma prática de trilha simulada dentro da escola, exercitando cooperação, atenção e segurança.",
  "Aula 5: Riscos e Estratégias de Segurança":
    "• Identificar riscos e desenvolver estratégias de prevenção e enfrentamento durante atividades de trilha ou trekking.",
  "Aula 6: Preparação de um informe multimídia sobre Trilhas e Trekking":
    "• Pesquisar, planejar e produzir um material de divulgação sobre trilhas e trekking, explorando diferentes linguagens midiáticas.",
  "Aula 7: Apresentando a Trilha e o Trekking":
    "• Apresentar à comunidade escolar as produções sobre trilhas e trekking, promovendo troca de saberes, protagonismo e valorização das práticas corporais de aventura.",
  "Aula 8: Exercício físico, dismorfia corporal e medicamentos":
    "• Conhecer e discutir os malefícios do excesso de exercício e atividade física;\n• Conhecer os tipos de dismorfia corporal;\n• Problematizar o uso excessivo de medicamentos para melhorar a performance durante o exercício físico.",
  "Aula 9: Planejamento de campanha para uma vida saudável":
    "• Planejar uma campanha para discutir e refletir sobre as questões relevantes e a divulgação e abordagem dos temas: Atividade e Exercício Físico, Dismorfia Corporal, Medicamentos, Ginástica de conscientização corporal e prática saudável.",
  "Aula 10: Produção de campanha":
    "• Produzir a campanha que visa discutir e refletir sobre as questões relevantes e a divulgação e abordagem dos temas: Atividade e Exercício Físico, Dismorfia Corporal, Medicamentos, Ginástica de conscientização e prática saudável.",
  "Aula 11: Apresentação de campanha - cartazes":
    "• Apresentar e exibi os cartazes da campanha que visa discutir e refletir sobre as questões relevantes e abordagem dos temas: Atividade e Exercício Físico, Dismorfia Corporal, Medicamentos, Ginástica de conscientização e prática saudável.",
  "Aula 12: Apresentação de campanha - Podcasts e videoasts":
    "• Apresentar os podcasts e/ou videocasts da campanha que visa discutir e refletir sobre as questões relevantes e a abordagem dos temas: Atividade e Exercício Físico, Dismorfia Corporal, Medicamentos, Ginástica de conscientização e prática saudável.",
  "Aula 13: Apresentação de campanha - atividade e exercícios físicos":
    "• Apresentar as sequências de atividade e os exercícios físicos da campanha que visa discutir e refletir sobre as questões relevantes e a divulgação e abordagem dos temas: Atividade e Exercício Físico, Dismorfia Corporal, Medicamentos, Ginástica de conscientização e prática saudável.",
  "Aula 14: Apresentação de campanha - atividades diversificadas":
    "• Apresentar as atividades diversificadas da campanha que visa discutir e refletir sobre as questões relevantes e a abordagem dos temas: Atividade e Exercício Físico, Dismorfia Corporal, Medicamentos, Ginástica de conscientização e prática saudável.",

  // Educação Física - 9º Ano - 4º Bimestre
  "Aula 1: Introdução à Corrida de Orientação":
    "• Compreender o que é a corrida de orientação, sua origem, características, materiais e importância ambiental.",
  "Aula 2: Conhecendo o território da escola":
    "• Mapear e reconhecer o espaço escolar como ambiente de prática e exploração segura.",
  "Aula 3: Aprendendo a usar mapas e bússolas":
    "• Compreender e experimentar os princípios de orientação com mapas e bússolas.",
  "Aula 4: Mini-circuito de orientação na escola":
    "• Vivenciar uma prática inicial de corrida de orientação em circuito curto e controlado.",
  "Aula 5: Estratégias e tomada de decisão":
    "• Aprimorar o raciocínio e a tomada de decisão durante percursos de orientação.",
  "Aula 6: Corrida de Orientação Escolar":
    "• Realizar uma corrida de orientação completa e segura, aplicando conhecimentos e atitudes desenvolvidas.",
  "Aula 7: Reflexão e divulgação da experiência":
    "• Refletir sobre as aprendizagens e produzir um material de divulgação sobre a corrida de orientação vivenciada.",
  "Aula 8: Padrões de beleza e composição corporal":
    "• Conhecer a história do padrão de beleza ao longo do tempo e refletir sobre o que a cerca.\n• Definir o protocolo de índice de massa corporal e suas funções.\n• Definir o protocolo relação cintura-quadril e suas funções.",
  "Aula 9: Índice de Massa Corporal - IMC":
    "• Experimentar os protocolos de mensuração de composição corporal - IMC",
  "Aula 10: Relação Cintura Quadril - RCQ":
    "• Experimentar os protocolos de mensuração de composição corporal - RCQ",
  "Aula 11: Exercícios para o condicionamento físico":
    "• Vivenciar exercícios físicos ainda não experimentados no ambiente escolar.",
  "Aula 12: Jogando com a composição corporal":
    "• Vivenciar um jogo que discute as questões de composição corporal e as relativisa.",
  "Aula 13: Planejamento de um programa de exercício físico":
    "• Planejar um programa de exercícios físicos",
  "Aula 14: Experimentação do programa de exercício físico":
    "• Experimentar exercícios físicos de um programa criado pelos próprios estudantes",

  // Educação Física - 2º Ano - 4º Bimestre
  "Aula 1: Jogos Cooperativos":
    "• Compreender o concept de jogo cooperativo, seus valores e diferenças em relação aos jogos competitivos.\n• Compreender e valorizar os jogos cooperativos como práticas corporais que desenvolvem solidariedade, empatia, comunicação e senso de coletividade, fortalecendo o protagonismo e a convivência ética.",
  "Aula 2: Jogos de confiança":
    "• Desenvolver confiança e empatia por meio de jogos em duplas e pequenos grupos.",
  "Aula 3: Jogos de comunicação e sintonia":
    "• Desenvolver a escuta, o diálogo e a sincronia nas ações coletivas.",
  "Aula 4: Jogos de superação coletiva":
    "• Vivenciar desafios em que todos precisam se ajudar para atingir o objetivo comum.",
  "Aula 5: Desafio cooperativo com pontuação coletiva":
    "• Compreender que competição e cooperação podem coexistir de forma equilibrada.",
  "Aula 6: Recriando jogos competitivos de modo cooperativo":
    "• Transformar jogos competitivos em cooperativos, desenvolvendo criatividade e protagonismo.",
  "Aula 7: Cooperar é transformar":
    "• Reconhecer as aprendizagens e valores vivenciados ao longo das práticas cooperativas.",

  // Educação Física - 3º Ano - 4º Bimestre
  "Aula 1: Swordplay - uma luta do mundo ou entretenimento?":
    "• Compreender o significado do respeito na prática das lutas e na coletividade;\n• Conhecer sobre o Swordplay, as regras da modalidade e as possíveis adaptações para a escola;\n• Conhecer os implementos e as possibilidades de materiais para sua confecção;\n• Refletir sobre as competições e a preparação de atleta buscando, a partir disso, compreender o Swordplay como um fenômeno da cultura corporal de movimento.",
  "Aula 2: Confeccionando seus implementos":
    "• Confeccionar os implementos do Swordplay",
  "Aula 3: Se familiarizando com suas próprias criações":
    "• Vivenciar e criar golpes com os implementos criados",
  "Aula 4: Regras na prática":
    "• Experimentar o Swordplay aprendendo as regras",
  "Aula 5: Combate 1x1":
    "• Realizar lutas individuais",
  "Aula 6: Ampliando a escala da batalha":
    "• Experimentar um confronto coletivo",
  "Aula 7: Hora do torneio":
    "• Criar, estabelecer regras e vivenciar uma mini competição de Swordplay",

  // Arte - 6º Ano - 4º Bimestre
  "Aula 1: Fugindo com o circo: Memórias do circo paulista":
    "• Apreciar performances circenses de diferentes épocas, reconhecendo diversidade cultural;\n• Investigar a história do circo paulista, conhecendo artistas, grupos e modos de produção;\n• Vivenciar jogos inspirados na preparação de ator circense, exercitando atenção e expressividade corporal.",
  "Aula 2: O poder do riso":
    "• Debater a função social do riso;\n• Reconhecer artistas e grupos de circo-teatro;\n• Vivenciar jogos de improvisação em grupo.",
  "Aula 3: O Augusto e o Branco":
    "• Analisar dinâmicas circenses na palhaçaria, entendendo a relação Augusto/Branco;\n• Investigar modos de criação/produção em grupos circenses, percebendo colaboração e divisão de funções;\n• Explorar números clássicos de palhaçaria (cenas curtas), desenvolvendo expressão cômica e interação entre pares.",
  "Aula 4: A trupe chega: funções e organização":
    "• Explorar a integração de funções (ator, figurinista, maquiador etc.) na construção de um espetáculo;\n• Explorar a divulgação, circulação e organização de espetáculos circenses, entendendo aspectos logísticos;\n• Vivenciar pequenas criações coletivas, reforçando cooperação e comunicação cênica.",
  "Aula 5: Teatro e circo: velhos companheiros":
    "• Apreciar performances circenses de diferentes épocas, expandindo repertório;\n• Identificar a relação entre teatro e circo em diferentes épocas, percebendo trocas e influências;\n• Vivenciar jogos teatrais que integram elementos do circo e do teatro.",
  "Aula 6: A comédia e a farsa no circo":
    "• Debater a função social do riso e seu papel inclusivo/transformador;\n• Investigar a comédia e a farsa como gêneros, reconhecendo elementos centrais (exagero, caricatura);\n• Explorar números clássicos de palhaçaria (gags), desenvolvendo timing cômico e interações.",
  "Aula 7: Meu palhaço pessoal":
    "• Investigar modos de criação e produção dos coletivos e grupos de circo;\n• Investigar os elementos de cena que fazem parte do espetáculo circense;\n• Apresentar um número circense de forma coletiva ou individual.",
  "Aula 8: O nariz de palhaço":
    "• Investigar modos de criação e produção dos coletivos e grupos de circo.\n• Investigar os elementos de cena que fazem parte do espetáculo circense.\n• Apresentar um número circense de forma coletiva ou individual.",
  "Aula 9: Levantando a lona do circo":
    "• Debater a função social do riso, percebendo como ele aproxima ou questiona comportamentos.\n• Investigar os elementos de cena (figurinos, objetos, iluminação) que contribuem ao humor.\n• Explorar números clássicos de palhaçaria usando objetos simples, treinando timing cômico e expressão corporal.",
  "Aula 10: Confusão nos bastidores?":
    "• Analisar dinâmicas do circo relacionando à vida social.\n• Investigar modos de criação de grupos circenses (bastidores, ensaios, organização).\n• Vivenciar jogos de confiança/cooperação, reforçando a preparação em grupo.",
  "Aula 11: Criando e ensaiando cenas cômicas":
    "• Explorar a integração de funções e a colaboração na construção de uma cena.\n• Investigar comédia e farsa como gêneros, reconhecendo elementos centrais.\n• Ensaiar um número circense, com foco cômico, definindo papéis e testando ideias.",
  "Aula 12: O grande dia: o circo-teatro chegou!":
    "• Refletir sobre o processo coletivo de criação, compartilhando avanços e desafios.\n• Reconhecer elementos cênicos (figurinos, som, objetos) aplicados nas cenas cênicas.\n• Apresentar número circense, concluindo o processo criativo em interação com o público.",

  // Arte - 7º Ano - 4º Bimestre
  "Aula 1: Fundamentos do teatro de animação":
    "• Explorar diferentes mecanismos e técnicas de manipulação de formas animadas.\n• Explorar diferentes gêneros de teatro de animação como máscaras, objetos e sombras.\n• Criar esquetes e improvisações baseadas em situações disparadoras.",
  "Aula 2: Fantoche de luva e o despertar da voz!":
    "• Explorar os mecanismos e técnicas de manipulação de formas animadas.\n• Criar esquetes e improvisações baseadas em situações disparadoras.",
  "Aula 3: Fantoche de luva: criando pequenas cenas!":
    "• Explorar dramaturgias escritas para teatro de animação.\n• Elaborar dramaturgias a partir da improvisação com formas animadas.\n• Considerar a relação com o espectador nas performances teatrais.",
  "Aula 4: Explorando o teatro de sombras: Luz, recorte e distorção":
    "• Apreciar performances de teatro de animação de grupos de teatro contemporâneo.\n• Explorar a construção de personagens no teatro de animação.\n• Explorar diferentes mecanismos e técnicas de manipulação de formas animadas.",
  "Aula 5: Animando os objetos do mundo":
    "• Apreciar performances de teatro de animação de grupos de teatro contemporâneo.\n• Explorar diferentes gêneros de teatro de animação como máscaras, objetos e sombras.",
  "Aula 6: Combinando formas animadas":
    "• Investigar modos de criação e produção no teatro de animação.\n• Investigar diferentes elementos e práticas de teatro de animação.\n• Compor cenas e performances no teatro de animação.",
  "Aula 7: Improvisação em grupos":
    "• Investigar modos de criação e produção no teatro de animação.\n• Elaborar dramaturgias a partir da improvisação com formas animadas.\n• Criar esquetes e improvisações baseadas em situações disparadoras.",
  "Aula 8: Dramaturgia de formas animadas":
    "• Investigar modos de criação e produção no teatro de animação.\n• Criar dramaturgias a partir de fatos cotidianos em diálogo com o teatro contemporâneo.\n• Compor cenas e performances no teatro de animação.",
  "Aula 9: Ensaiando a cena":
    "• Investigar modos de criação e produção no teatro de animação.\n• Criar dramaturgias a partir de fatos cotidianos em diálogo com o teatro contemporâneo.\n• Compor cenas e performances no teatro de animação.",
  "Aula 10: Ensaio geral":
    "• Investigar modos de criação e produção no teatro de animação.\n• Criar dramaturgias a partir de fatos cotidianos em diálogo com o teatro contemporâneo.\n• Compor cenas e performances no teatro de animação.",
  "Aula 11: Apresentações Finais":
    "• Investigar modos de criação e produção no teatro de animação.\n• Criar dramaturgias a partir de fatos cotidianos em diálogo com o teatro contemporâneo.\n• Compor cenas e performances no teatro de animação.",
  "Aula 12: Retrospectiva e reflexão":
    "• Refletir sobre modos de criação e produção no teatro de animação.\n• Investigar diferentes elementos e práticas do teatro de animação.\n• Compor cenas e performances no teatro de animação.",

  // Arte - 8º Ano - 4º Bimestre
  "Aula 1: O teatro e (á) a nossa história":
    "• Relacionar o teatro às diferentes dimensões da vida em sociedade.\n• Investigar a relação entre teatro e vida através da construção de cenas.\n• Explorar técnicas de contação de histórias identitárias.",
  "Aula 1: O teatro e a nossa história":
    "• Relacionar o teatro às diferentes dimensões da vida em sociedade.\n• Investigar a relação entre teatro e vida através da construção de cenas.\n• Explorar técnicas de contação de histórias identitárias.",
  "Aula 2: Teatro e ancestralidade":
    "• Investigar os elementos de cena que expressam identidade.\n• Investigar a relação entre teatro e vida através da construção de cenas.\n• Vivenciar jogos teatrais como parte da preparação do ator.",
  "Aula 3: Os elementos que fazem o teatro":
    "• Apreciar artistas e coletivos de teatro de matriz afro-brasileira.\n• Investigar a relação entre teatro e vida através da construção de cenas.\n• Explorar a integração de diferentes funções teatrais na construção de um espetáculo.",
  "Aula 4: Escalando e refinando":
    "• Investigar a relação entre teatro e vida através da construção de cenas.\n• Investigar os elementos de cena que expressam identidade.\n• Explorar a integração de diferentes funções teatrais na construção de uma cena.",
  "Aula 5: Apresentação das cenas":
    "• Investigar a relação entre teatro e vida através da construção de cenas.\n• Investigar os elementos de cena que expressam identidade.\n• Apresentar uma cena que apresente uma pesquisa pessoal.",
  "Aula 6: Minhas raízes teatrais":
    "• Relacionar o teatro às diferentes dimensões da vida em sociedade.\n• Reconhecer vocabulários técnicos e próprios do teatro contemporâneo.\n• Avaliar o processo coletivo de criação teatral.",

  // Arte - 9º Ano - 4º Bimestre
  "Aula 1: A Vida dos atores: Do tablado ao tapete vermelho":
    "• Reconhecer artistas e grupos de teatro e cinema contemporâneo.\n• Investigar a história do drama como gênero teatral.\n• Investigar-se enquanto ator na construção de um personagem.",
  "Aula 2: Romeu no palco, Julieta na tela":
    "• Aprimorar a apreciação estética através da análise das linguagens teatral e cinematográfica.\n• Analisar os elementos que constituem a preparação do ator.\n• Interpretar personagens com motivações e desejos.",
  "Aula 3: Caminhos de construção de personagem":
    "• Investigar-se como ator na construção de personagens.\n• Analisar os elementos que constituem a preparação do ator.\n• Explorar técnicas de interpretação e construção dramatúrgica enquanto ator- propositor.",
  "Aula 4: Para além da interpretação":
    "• Analisar o uso de tecnologias digitais no teatro e cinema.\n• Reconhecer vocabulários técnicos e próprios do processo de criação teatral.\n• Explorar a integração de diferentes funções teatrais na construção de um espetáculo.",
  "Aula 5: A construção da cena":
    "• Discutir os limites e desafios do trabalho artístico coletivo e colaborativo.\n• Aprimorar a apreciação estética através da análise das linguagens teatral e cinematográfica.\n• Explorar técnicas de interpretação e construção dramatúrgica enquanto ator- propositor.",
  "Aula 6: Luz, câmera e ação!":
    "• Vivenciar um processo de construção de cena como parte de um coletivo.\n• Aprimorar a apreciação estética através da análise das linguagens teatral e cinematográfica.\n• Interpretar um personagem sustentando diálogos, gestos, motivações e desejos.",

  // Língua Portuguesa - 6º Ano - 4º Bimestre
  "Aula 7: No tapete vermelho!":
    "• Reconhecer artistas e grupos de teatro e cinema contemporâneo.\n• Discutir os limites e desafios do trabalho artístico coletivo e colaborativo.\n• Investigar-se enquanto ator na construção de um personagem.",
  "Aula 8: Um espaço de respeito e combinados – Parte 2":
    "• Ler e compreender outros trechos de um regimento escolar.\n• Relembrar o uso de crase.",
  "Aula 9: Uma história clássica – Parte 1":
    "• Ler um mito, identificando efeitos de sentido, nuances e ideias subentendidas.\n• Reconhecer algumas estratégias para evitar repetição de palavras em textos.",
  "Aula 10: Uma história clássica – Parte 2":
    "• Relembrar trechos do texto analisado na aula anterior, identificando efeitos de sentido de palavras ou expressões.\n• Aplicar a grafia correta de palavras de acordo com a norma padrão da língua portuguesa.",
  "Aula 11: Rindo e aprendendo – Parte 1":
    "• Ler tirinhas, identificando efeitos de sentido geral pelas linguagem verbal e não verbal, nuances e ideias subentendidas.\n• Analisar o uso de interjeições nesse gênero.",
  "Aula 12: Rindo e aprendendo – Parte 2":
    "• Ler e compreender memes, identificando efeitos de sentido gerados pelo uso da linguagem mista.\n• Identificar a função social dos memes e seu contexto de produção e circulação.\n• Analisar a formação de palavras a partir dos textos lidos.",
  "Aula 13: Consum ou criativo? – Parte 1":
    "• Ler textos que contenham clichês, identificando efeitos de sentido e meios de veiculação.\n• Analisar a hifenização de palavras que contenham o prefixo \"auto-\".",
  "Aula 14: Consum ou criativo? – Parte 2":
    "• Distinguir a diferença entre as palavras \"mas\" e \"mais\".\n• Usar adequadamente essas palavras em contextos diversos.",
  "Aula 15: Histórias de mistério – Parte 1":
    "• Ler conto de mistério, identificando efeitos de sentido, nuances e ideias subentendidas.\n• Analisar a construção do mistério em textos narrativos.\n• Utilizar estratégias de interpretação textual para a compreender o texto.",
  "Aula 16: Histórias de mistério – Parte 2":
    "• Identificar o sujeito e o predicado em orações.\n• Analisar a diferença entre sujeito simples e composto.",
  "Aula 17: O povo conta – Parte 1":
    "• Ler conto, identificando efeitos de sentido, nuances e ideias subentendidas.\n• Identificar semelhanças e diferenças entre conto popular e contos de mistério e humor.",
  "Aula 18: O povo conta – Parte 2":
    "• Diferenciar frase de oração.\n• Localizar orações em trechos de textos lidos.",
  "Aula 19: A sabedoria das lendas indígenas – Parte 1":
    "• Ler lenda indígena, identificando efeitos de sentido, nuances e ideias subentendidas.\n• Compreender diferentes visões de mundo a partir de textos literários.",
  "Aula 20: A sabedoria das lendas indígenas – Parte 2":
    "• Identificar ocorrências de separação de orações com uso de vírgula.",
  "Aula 21: O mundo dos mitos – Parte 1":
    "• Ler mito africano, identificando efeitos de sentido, nuances e ideias subentendidas.\n• Compreender diferentes visões de mundo a partir de textos literários.",
  "Aula 22: O mundo dos mitos – Parte 2":
    "• Identificar formas de de evitar repetição de palavras em textos.\n• Usar substantivos e pronomes para estabelecer coesão textual.",
  "Aula 23: Arrepios literários – Parte 1":
    "• Ler conto de terror, identificando efeitos de sentido, nuances e ideias subentendidas.\n• Identificar semelhanças e diferenças entre conto de terror e conto de mistério.",
  "Aula 24: Arrepios literários – Parte 2":
    "• Identificar ocorrência de ditongos e hiatos em palavras.\n• Usar adequadamente a acentuação em casos de palavras que contenham ditongos e hiatos.",

  // Língua Portuguesa - 7º Ano - 4º Bimestre
  "Aula 1: Entre o verbal e o não verbal: construção de sentidos – Parte 1":
    "• Ler trecho de romance multimodal, reconhecendo suas características.\n• Analisar efeitos de sentido decorrentes do uso de palavras e expressões.\n• Analisar a relação entre as linguagens verbal e não verbal no texto.\n• Examinar recursos utilizados para a construção do humor.",
  "Aula 2: Entre o verbal e o não verbal: construção de sentidos – Parte 2":
    "• Identificar o papel da letra H na formação de palavras e seus efeitos sonoros.\n• Analisar o uso das letras J e G em diferentes contextos linguísticos e suas regras ortográficas.",
  "Aula 3: Real ou imaginário? – Parte 1":
    "• Ler e compreender conto fantástico, reconhecendo suas características principais.\n• Analisar efeitos de sentido e ideias subentendidas presentes no texto, relacionando-as ao contexto e à intenção comunicativa.",
  "Aula 4: Real ou imaginário? – Parte 2":
    "• Identificar os diferentes tipos de transitividade verbal em trechos de conto fantástico.\n• Analisar como a transitividade verbal contribui para a construção da ação e do ritmo narrativo no conto fantástico.",
  "Aula 5: Histórias que marcaram – Parte 1":
    "• Ler trechos de texto biográfico, identificando efeitos de sentido decorrentes do uso de palavras e expressões.\n• Inferir valores sociais, culturais e humanos, bem como diferentes visões de mundo presentes no texto biográfico.",
  "Aula 6: Histórias que marcaram – Parte 2":
    "• Identificar casos de concordância nominal em trechos de texto biográfico.\n• Analisar o uso dos quatro porquês, distinguindo suas funções e aplicações.\n• Utilizar adequadamente regras de concordância nominal ao produzir trecho biográfico sobre uma personalidade.",
  "Aula 7: Uma história em vários ângulos – Parte 1":
    "• Comparar trechos de livro e filme, identificando semelhanças e diferenças na narrativa.\n• Analisar os recursos utilizados em cada mídia e os efeitos de sentido decorrentes das escolhas textuais.\n• Interpretar as intencionalidades, os efeitos de sentido, as nuances e as ideias subentendidas presentes nos textos.",
  "Aula 8: Uma história em vários ângulos – Parte 2":
    "• Identificar a estrutura básica da oração em trechos selecionados de filme e livro.\n• Analisar a função dos elementos da oração em contextos dos trechos estudados.",
  "Aula 9: A língua que falamos – Parte 1":
    "• Identificar e compreender diferentes variedades linguísticas em textos de gêneros variados.\n• Analisar efeitos de sentido produzidos pelas variedades linguísticas.\n• Analisar o papel social e cultural das diferenças linguísticas, refletindo sobre suas implicações no convívio e na comunicação.",
  "Aula 10: A língua que falamos – Parte 2":
    "• Identificar e compreender diferentes variedades linguísticas em textos de diversos gêneros.\n• Avaliar a adequação do uso de determinadas variantes linguísticas em contextos específicos.\n• Debater criticamente o conceito de erro linguístico, considerando a situação comunicativa.",
  "Aula 11: Escrita digital – Parte 1":
    "• Identificar características de internetês em textos digitais.\n• Comparar o internetês com a norma-padrão da língua portuguesa.\n• Analisar a adequação de usos linguísticos em diferentes contextos.",
  "Aula 12: Escrita digital – Parte 2":
    "• Localizar sujeito e predicado em orações de período simples, reconhecendo os elementos essenciais que os compõem.\n• Analisar a função de cada elemento na estrutura básica da oração.\n• Examinar a adequação os usos linguísticos em diferentes contextos.",
  "Aula 13: A voz da notícia – Parte 1":
    "• Identificar as características do jornalismo radiofônico, refletindo sobre o impacto do rádio como meio de comunicação.\n• Analisar a linguagem e o formato das notícias veiculadas no rádio.\n• Analisar texto-base para produção radiofônica.",
  "Aula 14: A voz da notícia – Parte 2":
    "• Reconhecer os elementos essenciais de um texto-base voltado para a produção radiofônica.\n• Analisar efeitos de sentido gerados pelo uso de prefixos e sufixos.\n• Selecionar adequadamente prefixos e sufixos conforme a intenção comunicativa.",
  "Aula 15: Por trás das câmeras do telejornalismo – Parte 1":
    "• Identificar as características do jornalismo televisivo, refletindo sobre o impacto da televisão como meio de comunicação.\n• Analisar relação entre linguagem verbal e não verbal nos telejornais.\n• Examinar elementos característicos da linguagem falada, como entonação, ritmo, pausas e gestualidade na construção do sentido dos jornais televisivos.",
  "Aula 16: Por trás das câmeras do telejornalismo – Parte 2":
    "• Produzir uma breve notícia adequada ao formato televisivo, articulando linguagem verbal e não verbal de acordo com os critérios do gênero jornalístico.\n• Simular a apresentação de uma notícia em formato de telejornal, aplicando estratégias de expressão oral e recursos da linguagem corporal para construção do sentido.",
  "Aula 17: Autores indígenas – Parte 1":
    "• Ler e compreender textos de autores indígenas, identificando elementos de cultura indígena.\n• Analisar e criticar a escolha de palavras, assim como as diferentes visões de mundo presentes na literatura indígena.",
  "Aula 18: Autores indígenas – Parte 2":
    "• Identificar e analisar o uso de adjetivos e locuções adjetivas em textos de autoria indígena.\n• Analisar o papel de advérbios e locuções adverbiais na organização das ideias.\n• Avaliar como esses elementos contribuem para a construção de sentidos, valorizando a expressividade e a visão de mundo presentes no texto.",
  "Aula 19: Proteção por escrito – Parte 1":
    "• Interpretar trecho de um estatuto, reconhecendo seu propósito comunicativo e suas características linguísticas e estruturais.\n• Analisar efeitos de sentido gerados pelas escolhas linguísticas nos textos normativos.\n• Justificar o papel social dos textos normativos na regulamentação de direitos e deveres, com base em sua função na vida coletiva.",
  "Aula 20: Proteção por escrito – Parte 2":
    "• Selecionar adequadamente prefixos e sufixos para formar palavras conforme a intenção comunicativa.\n• Analisar como diferentes linguagens podem dialogar entre si e prefixos em texto normativo.",
  "Aula 21: Mesclando gêneros – Parte 1":
    "• Associar o conceito de intertextualidade a partir da leitura e discussão de exemplos diversos.\n• Interpretar relações intertextuais em textos multimodais, reconhecendo efeitos de sentido produzidos pelo uso de diferentes linguagens.\n• Analisar como diferentes linguagens podem dialogar entre si na construção de sentidos.",
  "Aula 22: Mesclando gêneros – Parte 2":
    "• Analisar diferentes tipos de intertextualidade em textos variados, identificando suas características e funções.\n• Comparar e analisar as formas de intertextualidade presentes em diversos gêneros textuais, valorizando as relações entre os textos.\n• Inferir efeitos de sentido provocados por relações intertextuais.",
  "Aula 23: Páginas de aventura – Parte 1":
    "• Ler e compreender trecho de narrativa de aventura, identificando elementos da narrativa no texto lido.\n• Analisar temas e marcas textuais que indicam a qual público o texto se destina, avaliando a adequação ao público-alvo.\n• Interpretar efeitos de sentido provocados pelo uso de palavras e expressões específicas.",
  "Aula 24: Páginas de aventura – Parte 2":
    "• Localizar exemplos de substantivos e pronomes que promovem a coesão em diferentes trechos textuais.\n• Analisar o uso de substantivos e pronomes como recursos de coesão textual em narrativa de aventura.\n• Interpretar como substantivos e pronomes contribuem para a continuidade e clareza do texto.",

  // Língua Portuguesa - 8º Ano - 4º Bimestre
  "Aula 1: Narrativas cotidianas – Parte 1":
    "• Ler e compreender crônica, identificando efeitos de sentido, nuances e ideias subentendidas presentes no texto.\n• Analisar a relação entre o texto e seu contexto sociocultural.",
  "Aula 2: Narrativas cotidianas – Parte 2":
    "• Reconhecer regras de regência verbal, observando usos na leitura de crônica.\n• Analisar efeitos de sentido gerados por diferentes regências verbais.\n• Empregar regência verbal conforme norma-padrão da língua portuguesa.",
  "Aula 3: Narrativas populares – Parte 1":
    "• Ler e compreender conto popular, identificando elementos culturais presentes na narrativa.\n• Reconhecer efeitos de sentido, nuances e ideias subentendidas presentes no texto.\n• Analisar elementos da narrativa.",
  "Aula 4: Narrativas populares – Parte 2":
    "• Relembrar trechos de crônica, observando características linguísticas do texto.\n• Reexaminar trechos do texto, reconhecendo encontros vocálicos e identificando regras básicas de acentuação.",
  "Aula 5: Mundos fantásticos – Parte 1":
    "• Ler e interpretar conto fantástico, identificando elementos culturais presentes na narrativa.\n• Analisar efeitos do fantástico na construção narrativa.",
  "Aula 6: Mundos fantásticos – Parte 2":
    "• Relembrar trechos de conto fantástico, observando características linguísticas nos excertos.\n• Revisar regras de acentuação de monossílabos tônicos e de palavras oxítonas.\n• Analisar casos de acentuação de palavras paroxítonas que geram dúvidas.",
  "Aula 7: Versos com intenções – Parte 1":
    "• Ler e interpretar um poema, identificando o uso denotativo e conotativo de palavras.\n• Analisar recursos expressivos, escolhas estilísticas do autor e efeitos de sentido gerados.\n• Relacionar forma ao conteúdo na construção poética.",
  "Aula 8: Versos com intenções – Parte 2":
    "• Ler e interpretar um poema, identificando o uso denotativo e conotativo de palavras.\n• Analisar a anáfora como recurso expressivo de poema.\n• Reconhecer palavras proparoxítonas, identificando a necessidade de acentuá-las.",
  "Aula 9: Pensar e argumentar – Parte 1":
    "• Ler e interpretar um artigo de opinião, analisando argumentos e pontos de vista.\n• Posicionar-se de forma crítica e fundamentada, ética e respeitosa frente a fatos e opiniões relacionados ao texto.",
  "Aula 10: Pensar e argumentar – Parte 2":
    "• Compreender o uso de regência verbal em artigo de opinião.\n• Empregar regência verbal conforme norma-padrão da língua portuguesa.",
  "Aula 11: Brincar com sentidos – Parte 1":
    "• Ler e compreender uma paródia, identificando sua composição, intencionalidade, função social e relação com outros textos.\n• Analisar efeitos de sentido gerados por elementos linguísticos e culturais.",
  "Aula 12: Brincar com sentidos – Parte 2":
    "• Ler e compreender uma paródia, identificando sua composição, intencionalidade, função social e relação com outros textos.\n• Localizar palavras compostas no texto, identificando formação por justaposição e aglutinação.\n• Apropriar-se de regras básicas de uso do hífen em palavras compostas.",
  "Aula 13: Histórias que encantam – Parte 1":
    "• Ler e interpretar um trecho de narrativa, identificando efeitos de sentido, nuances e ideias subentendidas presentes no texto.\n• Relacionar as escolhas linguísticas às características de textos narrativos.",
  "Aula 14: Histórias que encantam – Parte 2":
    "• Analisar partes do texto narrativo, identificando elementos constitutivos da oração.\n• Relacionar a estrutura sintática à construção de sentidos no texto.",
  "Aula 15: Nas entrelinhas da melodia – Parte 1":
    "• Ler e interpretar letra de canção, identificando linguagem denotativa e conotativa presente no texto.\n• Inferir a presença de valores sociais, culturais e humanos e de diferentes visões de mundo em letras de canção.\n• Analisar efeitos de sentido gerados por escolhas lexicais.",
  "Aula 16: Nas entrelinhas da melodia – Parte 2":
    "• Identificar e analisar casos de concordância nominal ou verbal em letras de canção.\n• Empregar concordância nominal e verbal conforme norma-padrão da língua portuguesa.",
  "Aula 17: Vozes que transformam – Parte 1":
    "• Ler e analisar um manifesto, identificando as características, intencionalidade e função social do gênero.\n• Analisar pontos de vista e reivindicações, levando em conta o contexto de produção e as características do texto manifesto.",
  "Aula 18: Vozes que transformam – Parte 2":
    "• Ler e analisar um manifesto, identificando as características linguísticas do texto.\n• Analisar os usos das vozes ativa, passiva e reflexiva no texto, identificando efeitos de sentido que elas geram.\n• Reescrever trechos do texto, modificando as vozes verbais.",
  "Aula 19: Cartazes que impactam e convencem – Parte 1":
    "• Ler e interpretar cartaz de campanha de conscientização, identificando características, intencionalidade e função do texto.\n• Analisar elementos persuasivos e efeitos de sentido gerados no texto.\n• Relacionar o uso de imagens aos argumentos apresentados no texto.",
  "Aula 20: Cartazes que impactam e convencem – Parte 2":
    "• Ler e interpretar cartaz de campanha de conscientização, identificando os efeitos de sentido gerados pelo uso de adjetivos, locuções e expressões adjetivas no texto.\n• Examinar a função das escolhas lexicais para reforçar argumentos.",
  "Aula 21: Palavras de incentivo e reflexão – Parte 1":
    "• Ler e interpretar trechos de relato em primeira pessoa, identificando a intenção comunicativa e características linguísticas e textuais.\n• Analisar efeitos que histórias reais podem gerar nos leitores.",
  "Aula 22: Palavras de incentivo e reflexão – Parte 2":
    "• Ler e interpretar trechos de relato em primeira pessoa, identificando a intenção comunicativa e características linguísticas e textuais.\n• Analisar o uso de advérbios e locuções adverbiais no texto, reconhecendo efeitos de sentido gerados no texto.",
  "Aula 23: Falar e ouvir: discutir para construir – Parte 1":
    "• Reconhecer a estrutura e a função de um debate regrado.\n• Desenvolver argumentos claros e baseados em evidências para uma discussão formal pautada no respeito ao outro.\n• Planejar coletivamente a realização de um debate sobre tema previamente definido, de interesse coletivo.",
  "Aula 24: Falar e ouvir: discutir para construir – Parte 2":
    "• Participar de um debate, respeitando opiniões divergentes e aprimorando habilidades de oratória e escuta ativa.",

  // Língua Portuguesa - 9º Ano - 4º Bimestre
  "Aula 1: Regras também fazem arte – Parte 1":
    "• Ler e apreciar poemas de forma fixa, identificando efeitos de sentido de palavras ou expressões.\n• Inferir significado de palavras desconhecidas empregadas no texto.",
  "Aula 2: Regras também fazem arte – Parte 2":
    "• Ler e apreciar poemas de forma fixa, identificando efeitos de sentido de palavras ou expressões.\n• Revisar divisão silábica para compreender como ocorre a escansão poética.\n• Analisar efeitos de sentido decorrentes da métrica de poemas.",
  "Aula 3: Poemas para ver – Parte 1":
    "• Ler e apreciar poemas visuais, relacionando linguagem verbal ao uso de recursos gráficos.\n• Analisar efeitos de sentido gerados por imagens e outros recursos gráficos em poemas visuais.",
  "Aula 4: Poemas para ver – Parte 2":
    "• Ler e apreciar poemas visuais, relacionando linguagem verbal ao uso de recursos gráficos.\n• Analisar efeitos de sentido gerados por imagens e outros recursos gráficos em poemas visuais.\n• Reconhecer e apropriar-se da regra de uso do Ç após consoante e dígrafos.",
  "Aula 5: A arte da representação – Parte 1":
    "• Ler texto dramático, reconhecendo a função de rubricas em textos dramáticos.\n• Identificar a diferença entre narração e encenação.\n• Analisar efeitos de sentido decorrentes do uso de palavras, expressões e ideias subentendidas.",
  "Aula 6: A arte da representação – Parte 2":
    "• Reconhecer variação linguística em texto dramático, analisando como ela contribui para a caracterização de personagem.\n• Analisar efeitos de sentido decorrentes do uso da variação linguística no texto.\n• Combater preconceitos linguísticos, reconhecendo-os como forma de exclusão social.",
  "Aula 7: Desafios da juventude em histórias marcantes – Parte 1":
    "• Ler e interpretar trecho(s) de romance juvenil, identificando características do gênero.\n• Analisar efeitos de sentido decorrentes de palavras, expressões e ideias subentendidas.",
  "Aula 8: Desafios da juventude em histórias marcantes – Parte 2":
    "• Ler e interpretar trecho(s) de romance juvenil, identificando características do gênero.\n• Reconhecer, no texto, o uso de diferentes tipos de porquês, observando o sentido das frases ou orações nos quais são usados.\n• Diferenciar e empregar os tipos de porquês de acordo com a norma-padrão da língua portuguesa.",
  "Aula 9: Capítulos que fazem história – Parte 1":
    "• Ler e interpretar trecho(s) de romance clássico, identificando elementos da narrativa.\n• Analisar efeitos de sentido decorrentes do uso de palavras, expressões e ideias subentendidas.\n• Comparar a linguagem de trechos de romance clássico aos trechos de romance juvenil lidos nas aulas anteriores, identificando semelhanças ou diferenças.",
  "Aula 10: Capítulos que fazem história – Parte 2":
    "• Reconhecer a função do uso de crase em textos escritos, identificando ocorrências em trechos de romance clássico.\n• Apropriar-se de regras de uso de crase, empregando o acento indicativo em textos.",
  "Aula 11: Quem disse o quê? – Parte 1":
    "• Ler e compreender notícia, refletindo sobre o papel do jornalista na curadoria de informações e na elaboração do texto.\n• Utilizar checadores de informações para verificar a confiabilidade de informações.\n• Analisar os impactos negativos da disseminação de notícias falsas.",
  "Aula 12: Quem disse o quê? – Parte 2":
    "• Ler e compreender notícia, identificando trechos de citações no texto como forma de construção do gênero.\n• Analisar citações diretas e indiretas no texto.",
  "Aula 13: Diálogos sob atenção – Parte 1":
    "• Ler e compreender entrevista, refletindo sobre o papel do entrevistador na condução da conversa e na seleção de perguntas.\n• Analisar elementos composicionais do texto, função social das entrevistas e efeitos de sentido gerados pelo uso de palavras ou expressões.",
  "Aula 14: Diálogos sob atenção – Parte 2":
    "• Ler e compreender entrevista, analisando as opiniões do entrevistado sobre o tema da entrevista.\n• Reconhecer e justificar a função dos discursos direto e indireto no texto.",
  "Aula 15: Diálogos que geram histórias – Parte 1":
    "• Reconhecer a importância dos turnos de fala e da formulação de perguntas claras e objetivas em entrevistas.\n• Discutir como a oralidade contribui para a expressão de ideias e sentimentos em entrevistas.\n• Analisar os posicionamentos da pessoa entrevista, identificando ideias defendidas e refutadas.",
  "Aula 16: Diálogos que geram histórias – Parte 2":
    "• Identificar marcas de oralidade em trechos transcritos de entrevista;\n• Analisar as diferenças entre língua fala e língua escrita a partir da transcrição de entrevista lida\n• Refletir e posicionar-se sobre as ideias apresentadas pela pessoa entrevistada.",
  "Aula 17: Pensar e compartilhar – Parte 1":
    "• Ler e compreender resenha, identificando elementos composicionais e função social.\n• Analisar resenha, observando argumentos e contra-argumentos apresentados.\n• Posicionar-se de forma ética e respeitosa sobre o texto lido.",
  "Aula 18: Pensar e compartilhar – Parte 2":
    "• Analisar casos de concordância verbal e nominal no texto, reconhecendo sua função de garantir clareza e a correção do texto.\n• Empregar concordância verbal e nominal ao escrever textos.",
  "Aula 19: Entre direitos e deveres – Parte 1":
    "• Ler e compreender trechos do Estatuto da Pessoa Idosa, identificando direitos e deveres fundamentais.\n• Analisar a organização e a linguagem formal utilizada no texto legal.\n• Refletir e posicionar-se sobre a importância do estatuto na garantia dos direitos de pessoas idosas.",
  "Aula 20: Entre direitos e deveres – Parte 2":
    "• Identificar, no texto, palavras paroxítonas e proparoxítonas, apropriando-se de regras de acentuação.\n• Empregar regras de acentuação ao escrever textos.",
  "Aula 21: Palavras que humanizan, textos que protegem – Parte 1":
    "• Ler e compreender trechos da Declaração dos Direitos Humanos, reconhecendo sua relevância histórica e social.\n• Analisar os direitos apresentados na declaração, observando elementos que colaboram para a construção de humanização.\n• Refletir e posicionar-se sobre a função da declaração, observando os impactos negativos da falta de acesso aos direitos apresentados.",
  "Aula 21: Palavras que humanizam, textos que protegem – Parte 1":
    "• Ler e compreender trechos da Declaração dos Direitos Humanos, reconhecendo sua relevância histórica e social.\n• Analisar os direitos apresentados na declaração, observando elementos que colaboram para a construção de humanização.\n• Refletir e posicionar-se sobre a função da declaração, observando os impactos negativos da falta de acesso aos direitos apresentados.",
  "Aula 22: Palavras que humanizam, textos que protegem – Parte 2":
    "• Analisar, na Declaração de Direitos Humanos, a organização textual, diferenciando direitos apresentados no documento.\n• Reconhecer a função de vírgula e ponto e vírgula em textos normativos.",
  "Aula 23: Estruturando o pensamento":
    "• Ler e compreender a estrutura do mapa conceitual em estudo, identificando as conexões entre ideias, características gráficas e função nas práticas de estudo e pesquisa.\n• Analisar a organização e a hierarquia das informações presentes no mapa conceitual.",
  "Aula 24: Desafio do mundo real":
    "• Ler e compreender infográficos e esquemas, analisando a relação entre a linguagem verbal e não verbal.\n• Debater e elaborar, coletivamente, resolução de problemas com base em princípios éticos, sustentáveis e solidários.",

  // Língua Portuguesa - 2º Ano - 4º Bimestre
  "Aula 1: Simbolismo em diálogo: Baudelaire e Cruz e Sousa":
    "• Ler e interpretar poemas do Simbolismo, analisando elementos composicionais, linguagem e temas abordados.\n• Comparar textos do Simbolismo francês e brasileiro por meio da leitura de Charles Baudelaire e Cruz e Sousa.\n• Analisar efeitos de sentido decorrentes do uso de figuras de linguagem na poesia simbolista.",
  "Aula 2: Simbolismo no Brasil":
    "• Ler e interpretar poemas do Simbolismo brasileiro, analisando elementos composicionais, linguagem e temas abordados.\n• Reconhecer, no Simbolismo, a presença de elementos metafísicos nos textos.\n• Examinar efeitos de sentido decorrentes do uso de antítese em textos.",
  "Aula 3: Produzindo poemas, despertando os sentidos!":
    "• Produzir poema, expressando-se por meio de diferentes recursos linguísticos.\n• Aplicar os conceitos do Simbolismo na produção de textos autorais, utilizando figuras de linguagem ao criar texto poético.",
  "Aula 4: Simbolistas na Vibe!: mostra de poemas!":
    "• Apresentar poema escrito inspirado no movimento simbolista, utilizando-se de elementos cinésicos como forma de se expressar (tom de voz, gestos etc.).\n• Apreciar a apresentação dos colegas de forma ética e respeitosa.\n• Analisar a própria apresentação, identificando pontos fortes e possibilidades de melhorias.",
  "Aula 5: A prosa regionalista romântica: pais e filhos em Inocência":
    "• Ler e interpretar trechos do romance Inocência, analisando características da prosa regionalista no contexto do Romantismo brasileiro.\n• Analisar os excertos de texto, relacionando os temas abordados na obra Inocência às dinâmicas familiares e às visões de mundo do século XIX.\n• Examinar os efeitos de sentido decorrentes do uso de pontuação (reticências, ponto e vírgula e ponto final).",
  "Aula 6: Perfis femininos no romance urbano: Lucíola":
    "• Ler e compreender trechos de Lucíola, de José de Alencar, analisando as características do romance urbano.\n• Analisar criticamente o perfil de Lúcia, reconhecendo representações do papel feminino no século XIX, críticas sociais e elementos distintivos dessa protagonista.",
  "Aula 7: Perfis femininos no romance urbano: Senhora":
    "• Ler e compreender trechos de Senhora, de José de Alencar, analisando as características do romance urbano.\n• Analisar criticamente o perfil de Aurélia, reconhecendo representações do papel feminino no século XIX, críticas sociais e elementos distintivos dessa protagonista.\n• Justificar o uso do aposto e do vocativo em trechos do livro.",
  "Aula 8: Traição ou não traição? Dom Casmurro, de Machado de Assis":
    "• Ler e compreender trechos do livro Dom Casmurro, de Machado de Assis, analisando o contexto de produção do Realismo no Brasil.\n• Reconhecer a metalinguagem no livro de Machado de Assis, examinando o nível da confiabilidade do narrador e refletindo sobre a polêmica acerca da traição, considerando o modo como a sociedade do século XIX via as mulheres.",
  "Aula 9: Capitu e Desdêmona: entre vozes e narrativas":
    "• Comparar trechos de Dom Casmurro, de Machado de Assis, com Othello, de Shakespeare, analisando semelhanças e diferenças.\n• Analisar como Capitu e Desdêmona são representadas nos textos, destacando a influência da percepção e do contexto social em seus destinos.\n• Examinar os efeitos de sentido decorrentes do uso de adjetivos ou de orações subordinadas adjetivas para caracterizar os personagens.",
  "Aula 10: Júlia Lopes de Almeida: uma escritora à frente de seu tempo":
    "• Ler e compreender trechos de obra de Júlia Lopes de Almeida, analisando linguagem, estrutura e temas abordados.\n• Reconhecer a importância da autora no contexto literário brasileiro do Realismo, examinando a crítica social que permeia suas obras, especialmente sobre a condição da escrita feminina.\n• Analisar os efeitos de sentido decorrentes do uso de advérbios ou de orações subordinadas adverbiais no texto.",
  "Aula 11: Fanzine literário: palavras, arte e ação!":
    "• Ler e compreender o gênero fanzine, analisando características, linguagem e função social.\n• Selecionar tema literário de preferência e realizar pesquisa para criar um fanzine.",
  "Aula 12: Compartilhando fanzines literários: palavras, arte e ação!":
    "• Produzir um fanzine de acordo com as características do gênero, utilizando diferentes recursos linguísticos.",
  "Aula 13: O texto dissertativo-argumentativo e sua importância no Enem – Parte 1":
    "• Reconhecer a importância do Exame Nacional do Ensino Médio (Enem), apropriando-se das características da prova de redação.\n• Examinar as competências de redação avaliadas no Enem.\n• Analisar exemplo de redação nota mil, considerando sua estrutura, linguagem, abordagem temática e desenvolvimento argumentativo.",
  "Aula 14: O texto dissertativo-argumentativo e sua importância no Enem – Parte 2":
    "• Identificar a estrutura do texto dissertativo-argumentativo, apropriando-se das características para o desenvolvimento estruturado de redação no modelo Enem.\n• Utilizar sinônimos ao escrever textos como forma de gerar coesão e evitar repetição de palavras.",
  "Aula 15: Texto dissertativo-argumentativo – Parte 3":
    "• Reconhecer o percurso argumentativo, analisando a conexão entre as ideias e os parágrafos no texto.\n• Distinguir os elementos coesivos (intraparágrafo e interparágrafo).",
  "Aula 16: Texto dissertativo-argumentativo – Parte 4":
    "• Examinar processos de preparação para a escrita de texto dissertativo-argumentativo, como leitura de temas contemporâneos, escuta de análises de notícias e elaboração de rascunho.",
  "Aula 17: Para que servem as leis?":
    "• Analisar o propósito dos textos legais, identificando suas funções e características.\n• Relacionar os textos legais aos seus contextos de produção, circulação e recepção.\n• Examinar elementos de coesão referencial: anáfora, catáfora e elipse.",
  "Aula 18: Se liga: seus direitos no Estatuto da Juventude":
    "• Analisar trechos selecionados do Estatuto da Juventude, identificando sua finalidade e impacto para os jovens e relacionando o texto à própria realidade.\n• Identificar modalizadores discursivos de opinião, obrigação, possibilidade e permissão no texto.\n• Refletir e posicionar-se sobre as motivações por trás dos direitos e deveres apresentados no Estatuto.",
  "Aula 19: Vozes da periferia: A revolução dos saraus e slams":
    "• Reconhecer algumas temáticas abordadas pela literatura periférica, apreciando manifestações artísticas.\n• Analisar efeitos de sentido decorrentes do uso de anáfora em textos literários.\n• Criar produção literária própria e engajar-se em práticas culturais contemporâneas.",
  "Aula 20: Vozes da periferia: o slam, a batalha de versos":
    "• Ler e compreender poemas pertencentes à literatura periférica, analisando estrutura, linguagem e temas abordados.\n• Examinar críticas sociais presentes nos textos.\n• Reconhecer diferentes variedades linguísticas, analisando adequação ao contexto de uso.",
  "Aula 21: Vozes da periferia: produzindo slams":
    "• Expressar-se por meio da linguagem literária, utilizando diferentes recursos linguísticos ao produzir textos.\n• Selecionar tema de relevância social para produzir slam.",
  "Aula 22: Vozes da periferia: a batalha de versos":
    "• Participar de eventos culturais, como saraus e slams, para socializar obras de autoria própria e interpretar obras de outros.\n• Estimular a sensibilidade, a imaginação e a criatividade ao fruir e apreciar esteticamente diversas manifestações artísticas e culturais.",
  "Aula 23: Playlist literária – Parte 1":
    "• Reconhecer as características de playlist comentada, explorando exemplos literários e critérios para elaboração.",
  "Aula 24: Playlist literária – Parte 2":
    "• Planejar e organizar playlists comentadas, considerando critérios de seleção, contexto literário e recursos expressivos.",

  // Língua Portuguesa - 3º Ano - 4º Bimestre
  "Aula 1: Textos contemporâneos africanos: Moçambique – Parte 1":
    "• Ler e compreender textos dos autores moçambicanos contemporâneos Mia Couto e José Craveirinha, analisando estrutura composicional, linguagem, estilo e temas abordados.\n• Examinar efeitos de sentido decorrentes do uso de palavras, expressões e figuras de linguagem.",
  "Aula 2: Textos contemporâneos africanos: Moçambique – Parte 2":
    "• Ler e compreender texto de autora moçambicana contemporânea Paulina Chiziane, analisando estrutura composicional, linguagem, estilo e temas abordados.\n• Analisar efeitos de sentido presentes no texto.\n• Analisar casos de concordância verbal e nominal, apropriando-se de regras da norma-padrão da língua portuguesa.",
  "Aula 3: Textos contemporâneos africanos: Angola":
    "• Ler e compreender textos de autor angolano contemporâneo Ondjaki, analisando estrutura composicional, linguagem, estilo e temas abordados.\n• Refletir e posicionar-se sobre os textos lidos, examinando como dialogam com o tempo presente no contexto brasileiro.",
  "Aula 4: Textos contemporâneos africanos: Cabo Verde":
    "• Ler e compreender texto da autora cabo-verdiana contemporânea Dina Salústio, analisando estrutura composicional, linguagem, estilo e temas abordados.\n• Examinar elementos da matriz cultural no texto lido, identificando particularidades.\n• Analisar casos de regência verbal e nominal no texto, apropriando-se de regras da norma-padrão da língua portuguesa.",
  "Aula 5: Textos contemporâneos portugueses – Parte 1":
    "• Ler e compreender trechos do livro Ensaio sobre a cegueira, de José Saramago, analisando linguagem, estilo e tema abordado.\n• Analisar efeitos de sentido decorrentes do uso de palavras ou expressões.\n• Refletir e posicionar-se sobre a crítica social apresentada na obra.",
  "Aula 6: Textos contemporâneos portugueses – Parte 2":
    "• Ler e compreender trechos do livro Ensaio sobre a cegueira, de José Saramago, analisando linguagem, estilo e tema abordado.\n• Analisar casos de colocação pronominal no texto, apropriando-se de regras da norma-padrão da língua portuguesa.",
  "Aula 7: Textos contemporâneos indígenas – Parte 1":
    "• Ler e compreender texto do autor indígena contemporâneo Daniel Munduruku, analisando estrutura composicional, linguagem e tema abordados.\n• Examinar visões de mundo expressas no texto, considerando a história dos povos indígenas no Brasil.\n• Refletir e posicionar-se sobre a necessidade de preservação da cultura dos povos indígenas.",
  "Aula 8: Textos contemporâneos indígenas – Parte 2":
    "• Ler e compreender texto da autora indígena contemporânea Márcia Kambeba, analisando estrutura composicional, linguagem e tema abordados.\n• Refletir e posicionar-se sobre a desigualdade de gênero na história da literatura, reconhecendo a importância da produção literária indígena feminina.\n• Examinar casos de uso de crase no texto, apropriando-se de regras da norma-padrão da língua portuguesa.",
  "Aula 9: Texto dissertativo-argumentativo – Parte 1":
    "• Ler e compreender artigo de opinião, analisando tema abordado, estrutura composicional e linguagem.\n• Analisar estratégias argumentativas utilizadas para defender ou refutar ideias.",
  "Aula 10: Texto dissertativo-argumentativo – Parte 2":
    "• Examinar e diferenciar tipos de argumento em texto dissertativo-argumentativo.\n• Reconhecer e analisar as funções da partícula \"se\" no texto.",
  "Aula 11: Literatura brasileira e a poesia de Ferreira Gullar":
    "• Analisar poemas de Ferreira Gullar, examinando linguagem, estilo e temas abordados.\n• Examinar efeitos de sentido decorrentes do uso de palavras, expressões e figuras de linguagem.",
  "Aula 12: Literatura brasileira e a poesia de Paulo Leminski":
    "• Analisar poemas de Paulo Leminski, examinando linguagem, estilo e temas abordados.\n• Examinar efeitos de sentido decorrentes do uso de diferentes sinais de pontuação no texto.",
  "Aula 13: Literatura brasileira e a prosa de Rubem Braga":
    "• Ler e compreender crônica de Rubem Braga, analisando estrutura composicional, linguagem, estilo e tema abordado.\n• Examinar a apreensão pessoal do cotidiano na crônica analisada.",
  "Aula 14: Literatura brasileira e a prosa de Fernando Sabino":
    "• Ler e compreender crônica de Fernando Sabino, analisando estrutura composicional, linguagem, estilo e tema abordado.\n• Comparar crônica de Fernando Sabino ao texto de Rubem Braga, examinando semelhanças e diferenças.\n• Reconhecer e utilizar paralelismo sintático como recurso de coesão textual.",
  "Aula 15: Redação de vestibular como gênero – Parte 1":
    "• Analisar redação nota mil no Enem, examinando tese, argumentação, estrutura composicional e abordagem de tema.\n• Relacionar o texto às competências avaliadas no Enem, identificando pontos fortes desenvolvidos pelo autor do texto.",
  "Aula 16: Redação de vestibular como gênero – Parte 2":
    "• Estabelecer relação entre as partes do texto, analisando a função dos operadores argumentativos para apresentar ideias.",
  "Aula 17: Literatura brasileira contemporânea: Milton Hatoum – Parte 1":
    "• Ler e compreender trecho de romance de Milton Hatoum, analisando estilo, linguagem e tema abordados.\n• Analisar efeitos de sentido decorrentes do uso de palavras e expressões no texto.",
  "Aula 18: Literatura brasileira contemporânea: Milton Hatoum – Parte 2":
    "• Reconhecer termos anafóricos e catafóricos, analisando sua função na construção coesiva de textos.",
  "Aula 19: Literatura brasileira contemporânea: Conceição Evaristo – Parte 1":
    "• Ler e compreender conto de Conceição Evaristo, analisando estilo, linguagem, tema abordado e estrutura composicional.\n• Refletir e posicionar-se criticamente sobre a importância da representatividade de autorias negras na literatura.",
  "Aula 20: Literatura brasileira contemporânea: Conceição Evaristo – Parte 2":
    "• Analisar, a partir da leitura de conto de Conceição Evaristo, o conceito de escrevivência.\n• Refletir e posicionar-se criticamente sobre o texto lido, reconhecendo a importância da autora na literatura brasileira contemporânea.",
  "Aula 21: Literatura nas redes sociais – Parte 1":
    "• Analisar características de ciberpoemas, reconhecendo a função da multissemiose na construção do texto.\n• Examinar efeitos de sentido decorrentes do uso de cores, animações, efeitos sonoros e outros recursos em ciberpoemas.\n• Reconhecer uso de palavras sinônimas e antônimas em ciberpoemas, analisando a construção de efeitos de sentido no texto.",
  "Aula 22: Literatura nas redes sociais – Parte 2":
    "• Analisar características de literatura digital, ciberpoesia e hipertextos.\n• Reconhecer e utilizar adequadamente palavras homônimas e parônimas.",
  "Aula 23: Vozes das mulheres na literatura contemporânea brasileira – Parte 1":
    "• Reconhecer a invisibilidade das mulheres ao longo da história da literatura, refletindo e posicionando-se de forma crítica.\n• Ampliar repertório literário, conhecendo escritoras de destaque na literatura brasileira contemporânea.\n• Ler e compreender trechos do livro A cabeça do santo, de Socorro Acioli, analisando estilo, tema abordado e influência do realismo mágico na obra.",
  "Aula 24: Vozes das mulheres na literatura contemporânea brasileira – Parte 2":
    "• Ler e compreender trechos do livro A cabeça do santo, de Socorro Acioli, analisando estilo, tema abordado e influência do realismo mágico na obra.\n• Reconhecer pronomes relativos no texto, analisando sua função coesiva.",

  // Química - 2º Ano - 4º Bimestre
  "Aula 1: A história e evolução das pilhas e baterias.":
    "• Investigar e analisar o histórico, a formação, o funcionamento e a evolução de pilhas e baterias.",
  "Aula 1: A história e evolução das pilhas e baterias":
    "• Investigar e analisar o histórico, a formação, o funcionamento e a evolução de pilhas e baterias.",
  "Aula 2: Processos eletroquímicos.":
    "• Analisar e realizar previsões qualitativas e quantitativas sobre o funcionamento de pilhas e baterias.",
  "Aula 2: Processos eletroquímicos":
    "• Analisar e realizar previsões qualitativas e quantitativas sobre o funcionamento de pilhas e baterias.",
  "Aula 3: Oxirredução e condução de energia.":
    "• Analisar e realizar previsões qualitativas e quantitativas sobre o funcionamento de pilhas e baterias.",
  "Aula 3: Oxirredução e condução de energia":
    "• Analisar e realizar previsões qualitativas e quantitativas sobre o funcionamento de pilhas e baterias.",
  "Aula 4: Funcionamento de pilhas e baterias.":
    "• Avaliar o funcionamento de pilhas e baterias.",
  "Aula 4: Funcionamento de pilhas e baterias":
    "• Avaliar o funcionamento de pilhas e baterias.",
  "Aula 5: Avaliando a diferença de potencial de uma pilha.":
    "• Avaliar o funcionamento de pilhas e baterias.",
  "Aula 5: Avaliando a diferença de potencial de uma pilha":
    "• Avaliar o funcionamento de pilhas e baterias.",
  "Aula 6: Construindo uma pilha ou bateria.":
    "• Investigar o funcionamento de pilhas e baterias.\n• Realizar previsões qualitativas e quantitativas sobre o seu funcionamento.",
  "Aula 6: Construindo uma pilha ou bateria":
    "• Investigar o funcionamento de pilhas e baterias.\n• Realizar previsões qualitativas e quantitativas sobre o seu funcionamento.",
  "Aula 7: Células voltaicas.":
    "• Interpretar modelos explicativos, dados e/ou resultados.\n• Avaliar o processo de enferrujamento e técnicas utilizadas para impedir ou desacelerar sua ocorrência.",
  "Aula 7: Células voltaicas":
    "• Interpretar modelos explicativos, dados e/ou resultados.\n• Avaliar o processo de enferrujamento e técnicas utilizadas para impedir ou desacelerar sua ocorrência.",
  "Aula 8: Eletrólise ígnea e aquosa.":
    "• Investigar situações que envolvam eletrólise ígnea e aquosa.",
  "Aula 8: Eletrólise ígnea e aquosa":
    "• Investigar situações que envolvam eletrólise ígnea e aquosa.",
  "Aula 9: Galvanoplastia.":
    "• Avaliar o processo de enferrujamento e técnicas utilizadas para impedir ou desacelerar sua ocorrência.",
  "Aula 9: Galvanoplastia":
    "• Avaliar o processo de enferrujamento e técnicas utilizadas para impedir ou desacelerar sua ocorrência.",
  "Aula 10: Galvanoplastia: uma aplicação da eletrólise.":
    "• Avaliar processos físico-químicos que utilizam energia elétrica para a ocorrência de uma reação química.\n• Analisar a técnica de galvanoplastia e suas aplicações.",
  "Aula 10: Galvanoplastia: uma aplicação da eletrólise":
    "• Avaliar processos físico-químicos que utilizam energia elétrica para a ocorrência de uma reação química.\n• Analisar a técnica de galvanoplastia e suas aplicações.",
  "Aula 11: Primeira lei da eletrólise.":
    "• Investigar que a quantidade de substância produzida em cada eletrodo é diretamente proporcional à quantidade de carga que flui através da célula eletrolítica.",
  "Aula 11: Primeira lei da eletrólise":
    "• Investigar que a quantidade de substância produzida em cada eletrodo é diretamente proporcional à quantidade de carga que flui através da célula eletrolítica.",
  "Aula 12: Lixo eletrônico: descarte e impactos ambientais.":
    "• Avaliar os impactos ambientais provenientes do elevado consumo e descarte inadequado de pilhas e baterias.",
  "Aula 12: Lixo eletrônico: descarte e impactos ambientais":
    "• Avaliar os impactos ambientais provenientes do elevado consumo e descarte inadequado de pilhas e baterias.",

  // Ciências - 6º Ano - 4º Bimestre
  "Aula 1 Organização dos órgãos em sistemas do corpo humano":
    "• Compreender que o corpo humano é formado por vários órgãos que trabalham juntos, organizando-se em sistemas.",
  "Aula 1: Organização dos órgãos em sistemas do corpo humano":
    "• Compreender que o corpo humano é formado por vários órgãos que trabalham juntos, organizando-se em sistemas.",
  "Aula 2 Sistema nervoso":
    "• Identificar os órgãos e estruturas que compõem o sistema nervoso humano a partir do uso de esquemas e ilustrações.",
  "Aula 2: Sistema nervoso":
    "• Identificar os órgãos e estruturas que compõem o sistema nervoso humano a partir do uso de esquemas e ilustrações.",
  "Aula 3 Estrutura do neurônio":
    "• Compreender a estrutura geral do neurônio humano, destacando o sentido do pulso nervoso na célula neuronal.",
  "Aula 3: Estrutura do neurônio":
    "• Compreender a estrutura geral do neurônio humano, destacando o sentido do pulso nervoso na célula neuronal.",
  "Aula 4 Sistema nervoso central":
    "• Reconhecer as principais estruturas que compõem o sistema nervoso e suas respectivas funções.",
  "Aula 4: Sistema nervoso central":
    "• Reconhecer as principais estruturas que compõem o sistema nervoso e suas respectivas funções.",
  "Aula 5 Sistema nervoso periférico":
    "• Reconhecer as principais funções das estruturas que compõem o sistema nervoso periférico.",
  "Aula 5: Sistema nervoso periférico":
    "• Reconhecer as principais funções das estruturas que compõem o sistema nervoso periférico.",
  "Aula 6 Sentido da visão":
    "• Explicar a estrutura do olho humano e o processo de formação da imagem, destacando a percepção de luz e das cores, utilizando esquemas simplificados.",
  "Aula 6: Sentido da visão":
    "• Explicar a estrutura do olho humano e o processo de formação da imagem, destacando a percepção de luz e das cores, utilizando esquemas simplificados.",
  "Aula 7 Simulador: funcionamento do olho humano":
    "• Justificar por meio de uso de simuladores a resposta fisiológica do olho humano à exposição a luz em diferentes comprimentos de onda.",
  "Aula 7: Simulador: funcionamento do olho humano":
    "• Justificar por meio de uso de simuladores a resposta fisiológica do olho humano à exposição a luz em diferentes comprimentos de onda.",
  "Aula 8 Sentidos do paladar e do olfato":
    "• Descrever o papel dos quimiorreceptores na percepção dos odores e sabores, apresentando as principais categorias de sabores e como essas informações chegam ao sistema nervoso central.",
  "Aula 8: Sentidos do paladar e do olfato":
    "• Descrever o papel dos quimiorreceptores na percepção dos odores e sabores, apresentando as principais categorias de sabores e como essas informações chegam ao sistema nervoso central.",
  "Aula 9 Sentido do tato":
    "• Descrever o papel da pele e de outros órgãos no sentido do tato, destacando os diferentes tipos de receptores.",
  "Aula 9: Sentido do tato":
    "• Descrever o papel da pele e de outros órgãos no sentido do tato, destacando os diferentes tipos de receptores.",
  "Aula 10 Sentido da audição e equilíbrio":
    "• Explicar os mecanismos fisiológicos envolvidos com os sentidos da audição e equilíbrio.",
  "Aula 10: Sentido da audição e equilíbrio":
    "• Explicar os mecanismos fisiológicos envolvidos com os sentidos da audição e equilíbrio.",
  "Aula 11 Sistema esquelético":
    "• Descrever o papel dos ossos como reserva de cálcio e como parte do sistema locomotor.",
  "Aula 11: Sistema esquelético":
    "• Descrever o papel dos ossos como reserva de cálcio e como parte do sistema locomotor.",
  "Aula 12 Sistema muscular":
    "• Relacionar os diferentes tipos de músculos com suas principais características.",
  "Aula 12: Sistema muscular":
    "• Relacionar os diferentes tipos de músculos com suas principais características.",
  "Aula 13 Mão biônica: acessibilidade":
    "• Elaborar uma mão biônica seguindo um roteiro ilustrado, relacionando o processo à importância da acessibilidade.",
  "Aula 13: Mão biônica: acessibilidade":
    "• Elaborar uma mão biônica seguindo um roteiro ilustrado, relacionando o processo à importância da acessibilidade.",
  "Aula 14 Mão biônica: finalização":
    "• Elaborar uma mão biônica seguindo um roteiro ilustrado, relacionando o processo à importância da acessibilidade.",
  "Aula 14: Mão biônica: finalização":
    "• Elaborar uma mão biônica seguindo um roteiro ilustrado, relacionando o processo à importância da acessibilidade.",
  "Aula 15 Efeitos das drogas no organismo":
    "• Associar o consumo de drogas a danos severos à saúde e à qualidade de vida.",
  "Aula 15: Efeitos das drogas no organismo":
    "• Associar o consumo de drogas a danos severos à saúde e à qualidade de vida.",
  "Aula 16 Conscientização sobre o enfrentamento ao uso de drogas":
    "• Produzir material midiático sobre os riscos à saúde e ao bem-estar relacionados ao abuso de substâncias psicoativas.",
  "Aula 16: Conscientização sobre o enfrentamento ao uso de drogas":
    "• Produzir material midiático sobre os riscos à saúde e ao bem-estar relacionados ao abuso de substâncias psicoativas.",
  "Aula 17 Retomada: Sistema nervoso":
    "• Relembrar os conteúdos apresentados ao longo do bimestre.",
  "Aula 17: Retomada: Sistema nervoso":
    "• Relembrar os conteúdos apresentados ao longo do bimestre.",
  "Aula 18 Retomada: Sistema locomotor":
    "• Relembrar os conteúdos apresentados ao longo do bimestre.",
  "Aula 18: Retomada: Sistema locomotor":
    "• Relembrar os conteúdos apresentados ao longo do bimestre.",

  // Ciências - 7º Ano - 4º Bimestre
  "Aula 1 Saúde":
    "• Utilizar o conceito de saúde segundo a OMS e órgãos nacionais, relacionando-o ao direito à saúde (ambiental, individual e coletiva), às políticas públicas e à qualidade de vida, destacando o papel do SUS e de outras instituições.",
  "Aula 1: Saúde":
    "• Utilizar o conceito de saúde segundo a OMS e órgãos nacionais, relacionando-o ao direito à saúde (ambiental, individual e coletiva), às políticas públicas e à qualidade de vida, destacando o papel do SUS e de outras instituições.",
  "Aula 2 Vírus":
    "• Identificar os vírus, suas principais características, formas de replicação e problematizando as discussões acerca de serem ou não considerados seres vivos à luz da teoria celular.",
  "Aula 2: Vírus":
    "• Identificar os vírus, suas principais características, formas de replicação e problematizando as discussões acerca de serem ou não considerados seres vivos à luz da teoria celular.",
  "Aula 3 Doenças causadas por vírus":
    "• Explicar e diferenciar as principais doenças causadas por vírus, com destaque para doenças tropicais e ISTs, indicando formas de prevenção.",
  "Aula 3: Doenças causadas por vírus":
    "• Explicar e diferenciar as principais doenças causadas por vírus, com destaque para doenças tropicais e ISTs, indicando formas de prevenção.",
  "Aula 4 Bactérias":
    "• Explicar sobre a constituição geral das bactérias e suas principais características, especialmente enquanto seres procariotos.",
  "Aula 4: Bactérias":
    "• Explicar sobre a constituição geral das bactérias e suas principais características, especialmente enquanto seres procariotos.",
  "Aula 5 Doenças causadas por bactérias":
    "• Investigar e comparar as principais características de algumas doenças bacterianas indicando formas de prevenção.",
  "Aula 5: Doenças causadas por bactérias":
    "• Investigar e comparar as principais características de algumas doenças bacterianas indicando formas de prevenção.",
  "Aula 6 Pandemia, endemia, epidemia e surto":
    "• Comparar e diferenciar as características de uma pandemia, epidemia, endemia e surto.",
  "Aula 6: Pandemia, endemia, epidemia e surto":
    "• Comparar e diferenciar as características de uma pandemia, epidemia, endemia e surto.",
  "Aula 7 Como as pandemias se espalham?":
    "• Investigar e comparar a partir de modelos o processo de transmissão de doenças.",
  "Aula 7: Como as pandemias se espalham?":
    "• Investigar e comparar a partir de modelos o processo de transmissão de doenças.",
  "Aula 8 Sistema imune humano: principais características":
    "• Explicar a importância do papel do sistema imune para a garantia da saúde física nos seres vivos, problematizando impactos de sua ausência.",
  "Aula 8: Sistema imune humano: principais características":
    "• Explicar a importância do papel do sistema imune para a garantia da saúde física nos seres vivos, problematizando impactos de sua ausência.",
  "Aula 9 Sistema imune humano: resposta imune":
    "• Justificar a importância do papel do sistema imune para a garantia da saúde física nos seres vivos, problematizando impactos de sua ausência.",
  "Aula 9: Sistema imune humano: resposta imune":
    "• Justificar a importância do papel do sistema imune para a garantia da saúde física nos seres vivos, problematizando impactos de sua ausência.",
  "Aula 10 Vacinas":
    "• Reconhecer o papel da vacinação como uma importância ação para a promoção da saúde individual e coletiva, contextualizando também o histórico de seu desenvolvimento.",
  "Aula 10: Vacinas":
    "• Reconhecer o papel da vacinação como uma importância ação para a promoção da saúde individual e coletiva, contextualizando também o histórico de seu desenvolvimento.",
  "Aula 11 Processo de fabricação de vacinas":
    "• Investigar o processo de fabricação e desenvolvimento de vacinas como importantes mecanismos para promoção das saúdes individual, coletiva e ambiental.",
  "Aula 11: Processo de fabricação de vacinas":
    "• Investigar o processo de fabricação e desenvolvimento de vacinas como importantes mecanismos para promoção das saúdes individual, coletiva e ambiental.",
  "Aula 12 A importância da vacinação: um estudo de caso":
    "• Explicar a importância da vacinação como uma ação de saúde individual, coletiva e ambiental.",
  "Aula 12: A importância da vacinação: um estudo de caso":
    "• Explicar a importância da vacinação como uma ação de saúde individual, coletiva e ambiental.",
  "Aula 13 A importância da vacinação: reflexão":
    "• Defender a importância da vacinação como uma ação de saúde individual, coletiva e ambiental.",
  "Aula 13: A importância da vacinação: reflexão":
    "• Defender a importância da vacinação como uma ação de saúde individual, coletiva e ambiental.",
  "Aula 14 Saneamento básico: impactos na vida cotidiana":
    "• Comparar e associar conceitos referentes a programas de saúde pública e indicadores de saúde, destacando a importância do saneamento básico.",
  "Aula 14: Saneamento básico: impactos na vida cotidiana":
    "• Comparar e associar conceitos referentes a programas de saúde pública e indicadores de saúde, destacando a importância do saneamento básico.",
  "Aula 15 Saneamento básico: papel na sustentabilidade":
    "• Apresentar as principais características dos serviços que estão incluídos no conceito de saneamento básico, destacando a desigualdade no acesso e os riscos à saúde em caso de ausência e/ou precariedade no fornecimento.",
  "Aula 15: Saneamento básico: papel na sustentabilidade":
    "• Apresentar as principais características dos serviços que estão incluídos no conceito de saneamento básico, destacando a desigualdade no acesso e os riscos à saúde em caso de ausência e/ou precariedade no fornecimento.",
  "Aula 16 Indicadores de saúde":
    "• Investigar e comparar os índices que compõem os diferentes indicadores de saúde pública.",
  "Aula 16: Indicadores de saúde":
    "• Investigar e comparar os índices que compõem os diferentes indicadores de saúde pública.",
  "Aula 17 Retomada: Epidemiologia":
    "• Relembrar os conteúdos apresentados ao longo do bimestre.",
  "Aula 17: Retomada: Epidemiologia":
    "• Relembrar os conteúdos apresentados ao longo do bimestre.",
  "Aula 18 Retomada: Saúde":
    "• Relembrar os conteúdos apresentados ao longo do bimestre.",
  "Aula 18: Retomada: Saúde":
    "• Relembrar os conteúdos apresentados ao longo do bimestre.",

  // Ciências - 8º Ano - 4º Bimestre
  "Aula 1 Energia no cotidiano":
    "• Compreender o conceito de energia e suas diferentes manifestações.",
  "Aula 1: Energia no cotidiano":
    "• Compreender o conceito de energia e suas diferentes manifestações.",
  "Aula 2 Fontes de energia":
    "• Distinguir, dentre as formas de energia presentes no cotidiano, fontes renováveis e não renováveis, enfatizando suas diferenças, relevância, importância estratégica da exploração das fontes não renováveis e necessidade da transição energética.",
  "Aula 2: Fontes de energia":
    "• Distinguir, dentre as formas de energia presentes no cotidiano, fontes renováveis e não renováveis, enfatizando suas diferenças, relevância, importância estratégica da exploração das fontes não renováveis e necessidade da transição energética.",
  "Aula 3 Transformação de energia":
    "• Explicar e discutir o processo de transformação de energia em diferentes contextos do cotidiano.",
  "Aula 3: Transformação de energia":
    "• Explicar e discutir o processo de transformação de energia em diferentes contextos do cotidiano.",
  "Aula 4 Energias renováveis":
    "• Analisar os desafios e possibilidades da transição energética, relacionando o ODS 7 às diferentes formas de geração de energia renovável e às iniciativas brasileiras de pesquisa e inovação, especialmente no contexto paulista.",
  "Aula 4: Energias renováveis":
    "• Analisar os desafios e possibilidades da transição energética, relacionando o ODS 7 às diferentes formas de geração de energia renovável e às iniciativas brasileiras de pesquisa e inovação, especialmente no contexto paulista.",
  "Aula 5 Magnetismo":
    "• Compreender o conceito de magnetismo, relacionando-o ao processo de transformação de energia, a partir de uma perspectiva histórica e física.",
  "Aula 5: Magnetismo":
    "• Compreender o conceito de magnetismo, relacionando-o ao processo de transformação de energia, a partir de uma perspectiva histórica e física.",
  "Aula 6 Cargas elétricas e eletrização - Parte 1":
    "• Compreender os conceitos fundamentais relacionados à energia elétrica, reconhecendo sua importância no campo da Física e estabelecendo conexões com a estrutura do átomo.",
  "Aula 6: Cargas elétricas e eletrização - Parte 1":
    "• Compreender os conceitos fundamentais relacionados à energia elétrica, reconhecendo sua importância no campo da Física e estabelecendo conexões com a estrutura do átomo.",
  "Aula 7 Cargas elétricas e eletrização - Parte 2":
    "• Compreender os conceitos fundamentais relacionados à energia elétrica, reconhecendo sua importância no campo da Física e estabelecendo conexões com a estrutura do átomo.",
  "Aula 7: Cargas elétricas e eletrização - Parte 2":
    "• Compreender os conceitos fundamentais relacionados à energia elétrica, reconhecendo sua importância no campo da Física e estabelecendo conexões com a estrutura do átomo.",
  "Aula 8 Corrente elétrica":
    "• Explicar a corrente elétrica, sua relação com a tensão e a Lei de Ohm.",
  "Aula 8: Corrente elétrica":
    "• Explicar a corrente elétrica, sua relação com a tensão e a Lei de Ohm.",
  "Aula 9 Corrente alternada e corrente contínua":
    "• Analisar os conceitos de corrente alternada e contínua, os modelos de transmissão de energia e o papel dos geradores.",
  "Aula 9: Corrente alternada e corrente contínua":
    "• Analisar os conceitos de corrente alternada e contínua, os modelos de transmissão de energia e o papel dos geradores.",
  "Aula 10 Condutores e isolantes":
    "• Explicar os conceitos de materiais condutores e isolantes, diferenciando o comportamento dos elétrons e contextualizando seus usos no cotidiano.",
  "Aula 10: Condutores e isolantes":
    "• Explicar os conceitos de materiais condutores e isolantes, diferenciando o comportamento dos elétrons e contextualizando seus usos no cotidiano.",
  "Aula 11 Distribuição de energia":
    "• Correlacionar a matriz energética brasileira, sua relação com a geração e distribuição de energia elétrica, exemplificando usinas em São Paulo e esclarecendo diferentes tensões de distribuição.",
  "Aula 11: Distribuição de energia":
    "• Correlacionar a matriz energética brasileira, sua relação com a geração e distribuição de energia elétrica, exemplificando usinas em São Paulo e esclarecendo diferentes tensões de distribuição.",
  "Aula 12 Circuitos elétricos":
    "• Identificar os principais componentes de um circuito elétrico e suas funções.",
  "Aula 12: Circuitos elétricos":
    "• Identificar os principais componentes de um circuito elétrico e suas funções.",
  "Aula 13 Circuito em série e circuito em paralelo":
    "• Aplicar a Lei de Kirchhoff para compreender o cálculo de resistores e comparar o comportamento da corrente elétrica e da tensão em diferentes situações.",
  "Aula 13: Circuito em série e circuito em paralelo":
    "• Aplicar a Lei de Kirchhoff para compreender o cálculo de resistores e comparar o comportamento da corrente elétrica e da tensão em diferentes situações.",
  "Aula 14 Cuidados em relação à eletricidade":
    "• Compreender sobre os perigos da eletricidade, exemplificando acidentes e promovendo boas práticas de segurança.",
  "Aula 14: Cuidados em relação à eletricidade":
    "• Compreender sobre os perigos da eletricidade, exemplificando acidentes e promovendo boas práticas de segurança.",
  "Aula 15 Simulador de um circuito elétrico - Parte 1":
    "• Compreender a função dos componentes de um circuito elétrico.",
  "Aula 15: Simulador de um circuito elétrico - Parte 1":
    "• Compreender a função dos componentes de um circuito elétrico.",
  "Aula 16 Simulador de um circuito elétrico - Parte 2":
    "• Compreender a função dos componentes de um circuito elétrico.",
  "Aula 16: Simulador de um circuito elétrico - Parte 2":
    "• Compreender a função dos componentes de um circuito elétrico.",
  "Aula 17 Classificação dos aparelhos eletrônicos":
    "• Explicar os conceitos de corrente, tensão e potência elétricas no contexto do consumo de diferentes eletrodomésticos.",
  "Aula 17: Classificação dos aparelhos eletrônicos":
    "• Explicar os conceitos de corrente, tensão e potência elétricas no contexto do consumo de diferentes eletrodomésticos.",
  "Aula 18 Consumo dos aparelhos eletrônicos":
    "• Avaliar o gasto mensal de eletrodomésticos do cotidiano, relacionando-o ao selo de eficiência energética.",
  "Aula 18: Consumo dos aparelhos eletrônicos":
    "• Avaliar o gasto mensal de eletrodomésticos do cotidiano, relacionando-o ao selo de eficiência energética.",
  "Aula 19 Ações de economia de eletricidade":
    "• Interpretar uma conta de consumo de eletricidade, problematizando as bandeiras tarifárias e conscientizando sobre práticas sustentáveis de economia de energia.",
  "Aula 19: Ações de economia de eletricidade":
    "• Interpretar uma conta de consumo de eletricidade, problematizando as bandeiras tarifárias e conscientizando sobre práticas sustentáveis de economia de energia.",
  "Aula 20 Simulador: ações de economia de eletricidade":
    "• Analisar o consumo de energia elétrica através do uso de um simulador.",
  "Aula 20: Simulador: ações de economia de eletricidade":
    "• Analisar o consumo de energia elétrica através do uso de um simulador.",
  "Aula 21 Consumo e desenvolvimento sustentável":
    "• Analisar a relação entre desenvolvimento ambiental, consumo sustentável e desenvolvimento social, destacando o papel das ações coletivas para a construção do desenvolvimento sustentável.",
  "Aula 21: Consumo e desenvolvimento sustentável":
    "• Analisar a relação entre desenvolvimento ambiental, consumo sustentável e desenvolvimento social, destacando o papel das ações coletivas para a construção do desenvolvimento sustentável.",
  "Aula 22 Retomada: Energia":
    "• Reconhecer diferentes características e fenômenos relacionados à energia.",
  "Aula 22: Retomada: Energia":
    "• Reconhecer diferentes características e fenômenos relacionados à energia.",
  "Aula 23 Retomada: Fenômenos elétricos e magnéticos":
    "• Reconhecer e compreender os fenômenos elétricos e magnéticos e suas aplicações.",
  "Aula 23: Retomada: Fenômenos elétricos e magnéticos":
    "• Reconhecer e compreender os fenômenos elétricos e magnéticos e suas aplicações.",
  "Aula 24 Retomada: Distribuição de energia":
    "• Discutir os principais processos e fenômenos relacionados à distribuição de energia elétrica.",
  "Aula 24: Retomada: Distribuição de energia":
    "• Discutir os principais processos e fenômenos relacionados à distribuição de energia elétrica.",

  // Ciências - 9º Ano - 4º Bimestre
  "Aula 1 História do estudo dos movimentos":
    "• Explicar historicamente os estudos sobre os movimentos, destacando as ideias de Ptolomeu, Aristóteles e Jean Buridan, e comparando-as à superação científica promovida por Galileu.",
  "Aula 1: História do estudo dos movimentos":
    "• Explicar historicamente os estudos sobre os movimentos, destacando as ideias de Ptolomeu, Aristóteles e Jean Buridan, e comparando-as à superação científica promovida por Galileu.",
  "Aula 2 Introdução à cinemática e Primeira Lei de Newton":
    "• Explicar e utilizar os conceitos de trajetória, posição, ponto material, corpo extenso e referencial a partir do uso de ilustrações e esquemas.",
  "Aula 2: Introdução à cinemática e Primeira Lei de Newton":
    "• Explicar e utilizar os conceitos de trajetória, posição, ponto material, corpo extenso e referencial a partir do uso de ilustrações e esquemas.",
  "Aula 3 Posição, distância e espaço percorrido":
    "• Explicar e utilizar os conceitos de posição, distância percorrida e espaço percorrido, exemplificando origem e deslocamento em segmentos de reta.",
  "Aula 3: Posição, distância e espaço percorrido":
    "• Explicar e utilizar os conceitos de posição, distância percorrida e espaço percorrido, exemplificando origem e deslocamento em segmentos de reta.",
  "Aula 4 Velocidade - Parte 1":
    "• Descrever e calcular a velocidade, apresentando a equação da velocidade média e diferenciando-a da velocidade escalar instantânea.",
  "Aula 4: Velocidade - Parte 1":
    "• Descrever e calcular a velocidade, apresentando a equação da velocidade média e diferenciando-a da velocidade escalar instantânea.",
  "Aula 5 Velocidade - Parte 2":
    "• Descrever e calcular a velocidade, apresentando a equação da velocidade média e diferenciando-a da velocidade escalar instantânea.",
  "Aula 5: Velocidade - Parte 2":
    "• Descrever e calcular a velocidade, apresentando a equação da velocidade média e diferenciando-a da velocidade escalar instantânea.",
  "Aula 6 Aceleração, força e leis de Newton - Parte 1":
    "• Calcular o valor da aceleração média usando a equação e demonstrar como o conceito de aceleração está presente na segunda e terceira leis de Newton.",
  "Aula 6: Aceleração, força e leis de Newton - Parte 1":
    "• Calcular o valor da aceleração média usando a equação e demonstrar como o conceito de aceleração está presente na segunda e terceira leis de Newton.",
  "Aula 7 Aceleração, força e leis de Newton - Parte 2":
    "• Calcular o valor da aceleração média usando a equação e demonstrar como o conceito de aceleração está presente na segunda e terceira leis de Newton.",
  "Aula 7: Aceleração, força e leis de Newton - Parte 2":
    "• Calcular o valor da aceleração média usando a equação e demonstrar como o conceito de aceleração está presente na segunda e terceira leis de Newton.",
  "Aula 8 Aula desafio: Cálculo da velocidade escalar média":
    "• Explicar o uso das equações para cálculo de velocidade escalar média e de aceleração escalar média.",
  "Aula 8: Aula desafio: Cálculo da velocidade escalar média":
    "• Explicar o uso das equações para cálculo de velocidade escalar média e de aceleração escalar média.",
  "Aula 9 Aula desafio: Cálculo da aceleração escalar média":
    "• Explicar o uso das equações para cálculo de velocidade escalar média e de aceleração escalar média.",
  "Aula 9: Aula desafio: Cálculo da aceleração escalar média":
    "• Explicar o uso das equações para cálculo de velocidade escalar média e de aceleração escalar média.",
  "Aula 10 Modelos geocêntrico e heliocêntrico: a construção do conhecimento científico ao longo do tempo":
    "• Explicar e comparar a transição entre os modelos geocêntrico e heliocêntrico, destacando a construção coletiva do conhecimento científico e a importância das evidências para o aceite de hipóteses pela comunidade científica.",
  "Aula 10: Modelos geocêntrico e heliocêntrico: a construção do conhecimento científico ao longo do tempo":
    "• Explicar e comparar a transição entre os modelos geocêntrico e heliocêntrico, destacando a construção coletiva do conhecimento científico e a importância das evidências para o aceite de hipóteses pela comunidade científica.",
  "Aula 11 Origem do Sistema Solar e de seus astros":
    "• Listar e explicar as principais hipóteses de origem do Universo e do Sistema Solar, com destaque às características dos corpos celestes que compõem o sistema.",
  "Aula 11: Origem do Sistema Solar e de seus astros":
    "• Listar e explicar as principais hipóteses de origem do Universo e do Sistema Solar, com destaque às características dos corpos celestes que compõem o sistema.",
  "Aula 12 Planetas do Sistema Solar":
    "• Categorizar as características dos planetas rochosos e gasosos, desde sua constituição física, distância média do Sol, entre outras características.",
  "Aula 12: Planetas do Sistema Solar":
    "• Categorizar as características dos planetas rochosos e gasosos, desde sua constituição física, distância média do Sol, entre outras características.",
  "Aula 13 Ciclo de vida das estrelas":
    "• Explicar as principais etapas que caracterizam o ciclo de vida de uma estrela.",
  "Aula 13: Ciclo de vida das estrelas":
    "• Explicar as principais etapas que caracterizam o ciclo de vida de uma estrela.",
  "Aula 14 Observação do céu":
    "• Justificar o conceito de constelações como convenções culturais dependentes de ponto de vista do observador, comparando diferentes formas de interpretação do céu em distintas culturas e o desenvolvimento histórico dos instrumentos de observação astronômica.",
  "Aula 14: Observação do céu":
    "• Justificar o conceito de constelações como convenções culturais dependentes de ponto de vista do observador, comparando diferentes formas de interpretação do céu em distintas culturas e o desenvolvimento histórico dos instrumentos de observação astronômica.",
  "Aula 15 Constelações indígenas":
    "• Defender a relevância das constelações e da observação do céu para os povos originários.",
  "Aula 15: Constelações indígenas":
    "• Defender a relevância das constelações e da observação do céu para os povos originários.",
  "Aula 16 Planetário virtual":
    "• Comparar os conhecimentos relacionados à observação do céu.",
  "Aula 16: Planetário virtual":
    "• Comparar os conhecimentos relacionados à observação do céu.",
  "Aula 17 Força gravitacional":
    "• Comparar a massa dos corpos celestes, associando-as à atração gravitacional e à Lei de Gravitação Universal, ao comportamento dos planetas no Sistema Solar e à influência da Lua sobre as marés.",
  "Aula 17: Força gravitacional":
    "• Comparar a massa dos corpos celestes, associando-as à atração gravitacional e à Lei de Gravitação Universal, ao comportamento dos planetas no Sistema Solar e à influência da Lua sobre as marés.",
  "Aula 18 Movimentos da Terra e da Lua":
    "• Explicar os principais movimentos descritos pela Terra e pela Lua no sistema Terra-Sol-Lua.",
  "Aula 18: Movimentos da Terra e da Lua":
    "• Explicar os principais movimentos descritos pela Terra e pela Lua no sistema Terra-Sol-Lua.",
  "Aula 19 Vida fora da Terra":
    "• Idear a viabilidade de vida fora do planeta Terra.",
  "Aula 19: Vida fora da Terra":
    "• Idear a viabilidade de vida fora do planeta Terra.",
  "Aula 20 Exploração espacial":
    "• Traçar o histórico e a atualidade da exploração espacial.",
  "Aula 20: Exploração espacial":
    "• Traçar o histórico e a atualidade da exploração espacial.",
  "Aula 21 Retomada: Movimento":
    "• Relembrar os conteúdos apresentados ao longo do bimestre.",
  "Aula 21: Retomada: Movimento":
    "• Relembrar os conteúdos apresentados ao longo do bimestre.",
  "Aula 22 Retomada: Sistema Solar":
    "• Relembrar os conteúdos apresentados ao longo do bimestre.",
  "Aula 22: Retomada: Sistema Solar":
    "• Relembrar os conteúdos apresentados ao longo do bimestre.",
  "Aula 23 Retomada: Observação do céu":
    "• Relembrar os conteúdos apresentados ao longo do bimestre.",
  "Aula 23: Retomada: Observação do céu":
    "• Relembrar os conteúdos apresentados ao longo do bimestre.",
  "Aula 24 Retomada: Exploração espacial":
    "• Relembrar os conteúdos apresentados ao longo do bimestre.",
  "Aula 24: Retomada: Exploração espacial":
    "• Relembrar os conteúdos apresentados ao longo do bimestre.",

  // Sociologia - 2º Ano - 4º Bimestre
  "Aula 1 Mudanças sociais: como as sociedades se transformam":
    "• Compreender a perspectiva sociológica de mudança social, reconhecendo-a como parte constitutiva da dinâmica das sociedades.\n• Analisar a mudança enquanto transformação e desenvolvimento das sociedades, diferenciando evolução linear, rupturas e processos de modernização.\n• Identificar fatores que provocam mudanças nas sociedades e nas culturas, como economia, política, tecnologia, cultura e movimentos sociais.",
  "Aula 1: Mudanças sociais: como as sociedades se transformam":
    "• Compreender a perspectiva sociológica de mudança social, reconhecendo-a como parte constitutiva da dinâmica das sociedades.\n• Analisar a mudança enquanto transformação e desenvolvimento das sociedades, diferenciando evolução linear, rupturas e processos de modernização.\n• Identificar fatores que provocam mudanças nas sociedades e nas culturas, como economia, política, tecnologia, cultura e movimentos sociais.",
  "Aula 2 Globalização, tecnologias e mudanças sociais":
    "• Compreender o que é a globalização e como esse processo intensificou as relações econômicas, políticas e culturais entre diferentes sociedades.\n• Analisar como as inovações tecnológicas influenciam as mudanças sociais e as formas de comunicação, trabalho, consumo e participação política na sociedade globalizada.\n• Refletir criticamente sobre os impactos da globalização e das tecnologias digitais nas desigualdades sociais, na cultura e na cidadania, identificando exemplos concretos de mudanças sociais provocadas pela globalização e pelas tecnologias no cotidiano, reconhecendo seus efeitos na vida local e global.",
  "Aula 2: Globalização, tecnologias e mudanças sociais":
    "• Compreender o que é a globalização e como esse processo intensificou as relações econômicas, políticas e culturais entre diferentes sociedades.\n• Analisar como as inovações tecnológicas influenciam as mudanças sociais e as formas de comunicação, trabalho, consumo e participação política na sociedade globalizada.\n• Refletir criticamente sobre os impactos da globalização e das tecnologias digitais nas desigualdades sociais, na cultura e na cidadania, identificando exemplos concretos de mudanças sociais provocadas pela globalização e pelas tecnologias no cotidiano, reconhecendo seus efeitos na vida local e global.",
  "Aula 3 Mudanças sociais e contemporaneidade":
    "• Compreender os conceitos de modernidade sólida e modernidade líquida, segundo Zygmunt Bauman, identificando as transformações nos modos de vida, nas relações sociais e nas instituições.\n• Analisar a manifestação da modernidade líquida em contextos cotidianos (consumo, trabalho, vínculos afetivos e redes sociais), relacionando a aos conceitos de liquidez e fluidez social de Bauman.\n• Refletir criticamente sobre os desafios e as consequências da fluidez das relações sociais na atualidade, avaliando seus impactos na segurança, na liberdade e na sensação de pertencimento social.",
  "Aula 3: Mudanças sociais e contemporaneidade":
    "• Compreender os conceitos de modernidade sólida e modernidade líquida, segundo Zygmunt Bauman, identificando as transformações nos modos de vida, nas relações sociais e nas instituições.\n• Analisar a manifestação da modernidade líquida em contextos cotidianos (consumo, trabalho, vínculos afetivos e redes sociais), relacionando a aos conceitos de liquidez e fluidez social de Bauman.\n• Refletir criticamente sobre os desafios e as consequências da fluidez das relações sociais na atualidade, avaliando seus impactos na segurança, na liberdade e na sensação de pertencimento social.",
  "Aula 4 A sociedade de risco":
    "• Compreender o conceito de \"sociedade de risco\", formulado por Ulrich Beck, identificando suas origens e características no contexto da modernidade reflexiva.\n• Analisar como os riscos produzidos pela ação humana — como desastres ambientais, crises sanitárias, mudanças climáticas, uso de IA e pandemias — afetam a vida social, ampliam desigualdades e se relacionam com as ideias de Beck.\n• Refletir sobre os desafios éticos e políticos colocados pela sociedade de risco, considerando o papel do Estado, da ciência e da cidadania na prevenção e gestão dos riscos globais.",
  "Aula 4: A sociedade de risco":
    "• Compreender o conceito de \"sociedade de risco\", formulado por Ulrich Beck, identificando suas origens e características no contexto da modernidade reflexiva.\n• Analisar como os riscos produzidos pela ação humana — como desastres ambientais, crises sanitárias, mudanças climáticas, uso de IA e pandemias — afetam a vida social, ampliam desigualdades e se relacionam com as ideias de Beck.\n• Refletir sobre os desafios éticos e políticos colocados pela sociedade de risco, considerando o papel do Estado, da ciência e da cidadania na prevenção e gestão dos riscos globais.",
  "Aula 5 Mundo do trabalho e capitalismo":
    "• Compreender o papel do trabalho no desenvolvimento do capitalismo, reconhecendo suas transformações históricas desde a Revolução Industrial até a atualidade.\n• Analisar a centralidade do trabalho assentado na organização do capitalismo como sistema social e nas relações entre capital e trabalho.\n• Refletir sobre o trabalho como direito humano e condição da cidadania, relacionando-o à luta por direitos sociais, à dignidade e à justiça social.",
  "Aula 5: Mundo do trabalho e capitalismo":
    "• Compreender o papel do trabalho no desenvolvimento do capitalismo, reconhecendo suas transformações históricas desde a Revolução Industrial até a atualidade.\n• Analisar a centralidade do trabalho assentado na organização do capitalismo como sistema social e nas relações entre capital e trabalho.\n• Refletir sobre o trabalho como direito humano e condição da cidadania, relacionando-o à luta por direitos sociais, à dignidade e à justiça social.",
  "Aula 6 Tecnologias e mundo do trabalho":
    "• Compreender a relação entre tecnologia e trabalho, reconhecendo que o desenvolvimento técnico-científico é um fator permanente de transformação das formas de produção e das relações laborais.\n• Analisar os impactos do desenvolvimento técnico, científico, tecnológico e informacional sobre o mundo do trabalho, identificando transformações nas ocupações, na organização produtiva e na vida do trabalhador.",
  "Aula 6: Tecnologias e mundo do trabalho":
    "• Compreender a relação entre tecnologia e trabalho, reconhecendo que o desenvolvimento técnico-científico é um fator permanente de transformação das formas de produção e das relações laborais.\n• Analisar os impactos do desenvolvimento técnico, científico, tecnológico e informacional sobre o mundo do trabalho, identificando transformações nas ocupações, na organização produtiva e na vida do trabalhador.",
  "Aula 7 Mudanças no mundo do trabalho":
    "• Compreender os conceitos de emprego, ocupação, mercado e relações de trabalho, reconhecendo seu papel na organização econômica e social. Analisar as causas e características do desemprego estrutural (avanço tecnológico, globalização e reestruturação produtiva) nas sociedades contemporâneas.\n• Refletir sobre o processo de precarização das relações de trabalho e o surgimento do \"precariado\", discutindo seus efeitos sobre a cidadania, os direitos sociais e a dignidade do trabalhador. Relacionar situações do cotidiano (uso de aplicativos, trabalho remoto e IA) a esses processos de reestruturação produtiva e aos desafios de garantia de direitos.\n• Reconhecer o trabalho análogo à escravidão como forma extrema de precarização e violação dos direitos humanos, discutindo sua persistência e as políticas de combate a essa prática.",
  "Aula 7: Mudanças no mundo do trabalho":
    "• Compreender os conceitos de emprego, ocupação, mercado e relações de trabalho, reconhecendo seu papel na organização econômica e social. Analisar as causas e características do desemprego estrutural (avanço tecnológico, globalização e reestruturação produtiva) nas sociedades contemporâneas.\n• Refletir sobre o processo de precarização das relações de trabalho e o surgimento do \"precariado\", discutindo seus efeitos sobre a cidadania, os direitos sociais e a dignidade do trabalhador. Relacionar situações do cotidiano (uso de aplicativos, trabalho remoto e IA) a esses processos de reestruturação produtiva e aos desafios de garantia de direitos.\n• Reconhecer o trabalho análogo à escravidão como forma extrema de precarização e violação dos direitos humanos, discutindo sua persistência e as políticas de combate a essa prática.",
  "Aula 8 Trabalho e riscos na contemporaneidade":
    "• Analisar os impasses ético-políticos decorrentes da automação, da inteligência artificial e do envelhecimento populacional no contexto da insegurança social, considerando questões de precarização, desigualdade e necessidade de (re)qualificação constante.\n• Reconhecer a importância das políticas públicas e da solidariedade e social na proteção de grupos vulneráveis, especialmente trabalhadores idosos e desempregados por causas tecnológicas.\n• Relacionar situações contemporâneas – como a aposentadoria, a informalidade e o uso da inteligência artificial – aos desafios éticos e políticos do trabalho e da cidadania no século XXI.",
  "Aula 8: Trabalho e riscos na contemporaneidade":
    "• Analisar os impasses ético-políticos decorrentes da automação, da inteligência artificial e do envelhecimento populacional no contexto da insegurança social, considerando questões de precarização, desigualdade e necessidade de (re)qualificação constante.\n• Reconhecer a importância das políticas públicas e da solidariedade e social na proteção de grupos vulneráveis, especialmente trabalhadores idosos e desempregados por causas tecnológicas.\n• Relacionar situações contemporâneas – como a aposentadoria, a informalidade e o uso da inteligência artificial – aos desafios éticos e políticos do trabalho e da cidadania no século XXI.",
  "Aula 9 Sociedade de consumidores":
    "• Compreender a dimensão do consumo na organização da sociedade contemporânea, reconhecendo seu papel na economia, na cultura e na construção das identidades individuais.\n• Analisar a sociedade de consumidores na perspectiva de Zygmunt Bauman, identificando como o consumo molda relações sociais, valores e comportamentos na modernidade líquida.\n• Relacionar práticas cotidianas de consumo – moda, tecnologia, redes sociais, entretenimento – aos conceitos sociológicos de Bauman sobre liquidez e sociedade de consumo.",
  "Aula 9: Sociedade de consumidores":
    "• Compreender a dimensão do consumo na organização da sociedade contemporânea, reconhecendo seu papel na economia, na cultura e na construção das identidades individuais.\n• Analisar a sociedade de consumidores na perspectiva de Zygmunt Bauman, identificando como o consumo molda relações sociais, valores e comportamentos na modernidade líquida.\n• Relacionar práticas cotidianas de consumo – moda, tecnologia, redes sociais, entretenimento – aos conceitos sociológicos de Bauman sobre liquidez e sociedade de consumo.",
  "Aula 10 Indústria cultural, consumismo e identidade":
    "• Compreender o que é o consumismo e como se diferencia do consumo, reconhecendo o papel central dessa prática na sociedade contemporânea.\n• Analisar como o indivíduo é socializado como consumidor, identificando os mecanismos (publicidade, redes sociais, moda e tecnologia) que associam o consumo a status, felicidade e pertencimento social.\n• Refletir sobre os impactos do consumismo na construção das identidades, valores e relações sociais, relacionando-o às práticas cotidianas de consumo e uso das redes sociais na contemporaneidade.",
  "Aula 10: Indústria cultural, consumismo e identidade":
    "• Compreender o que é o consumismo e como se diferencia do consumo, reconhecendo o papel central dessa prática na sociedade contemporânea.\n• Analisar como o indivíduo é socializado como consumidor, identificando os mecanismos (publicidade, redes sociais, moda e tecnologia) que associam o consumo a status, felicidade e pertencimento social.\n• Refletir sobre os impactos do consumismo na construção das identidades, valores e relações sociais, relacionando-o às práticas cotidianas de consumo e uso das redes sociais na contemporaneidade.",
  "Aula 11 A vida digital e seus riscos":
    "• Compreender como as tecnologias digitais transformam as formas de interação social, comunicação e construção das identidades na contemporaneidade.\n• Analisar os principais riscos e dilemas da vida digital (vigilância, manipulação de informações, discursos de ódio e dependência) e refletir sobre as implicações éticas e políticas do uso dessas tecnologias, considerando a privacidade, a liberdade de expressão e a responsabilidade social online.\n• Identificar e aplicar estratégias de uso consciente, seguro e responsável das tecnologias digitais nas práticas cotidianas.",
  "Aula 11: A vida digital e seus riscos":
    "• Compreender como as tecnologias digitais transformam as formas de interação social, comunicação e construção das identidades na contemporaneidade.\n• Analisar os principais riscos e dilemas da vida digital (vigilância, manipulação de informações, discursos de ódio e dependência) e refletir sobre as implicações éticas e políticas do uso dessas tecnologias, considerando a privacidade, a liberdade de expressão e a responsabilidade social online.\n• Identificar e aplicar estratégias de uso consciente, seguro e responsável das tecnologias digitais nas práticas cotidianas.",
  "Aula 12 Viver para o consumismo?":
    "• Analisar os impasses ético-políticos da sociedade digital e de consumidores, destacando como ela produz desigualdades e a figura do trabalhador-consumidor \"falho\".\n• Examinar as relações entre o imperativo de produzir e consumir a qualquer custo e seus impactos sobre a saúde humana, o bem-estar social e o meio ambiente.\n• Refletir sobre alternativas éticas e sustentáveis ao modelo consumista, reconhecendo o papel do cidadão na construção de práticas de consumo consciente.",
  "Aula 12: Viver para o consumismo?":
    "• Analisar os impasses ético-políticos da sociedade digital e de consumidores, destacando como ela produz desigualdades e a figura do trabalhador-consumidor \"falho\".\n• Examinar as relações entre o imperativo de produzir e consumir a qualquer custo e seus impactos sobre a saúde humana, o bem-estar social e o meio ambiente.\n• Refletir sobre alternativas éticas e sustentáveis ao modelo consumista, reconhecendo o papel do cidadão na construção de práticas de consumo consciente.",

  // Física - 2º Ano - 4º Bimestre
  "Aula 1 Propagação retilínea da luz":
    "• Identificar os princípios da independência dos raios de luz e da propagação retilínea da luz.\n• Diferenciar sombra e penumbra.\n• Analisar o funcionamento de uma câmara escura de orifício.",
  "Aula 1: Propagação retilínea da luz":
    "• Identificar os princípios da independência dos raios de luz e da propagação retilínea da luz.\n• Diferenciar sombra e penumbra.\n• Analisar o funcionamento de uma câmara escura de orifício.",
  "Aula 2 Exercícios sobre propagação da luz, sombras e câmara escura":
    "• Resolver exercícios que envolvam a independência dos raios de luz e a propagação retilínea.\n• Diferenciar os conceitos de sombra e penumbra em situações práticas.\n• Analisar o funcionamento de uma câmara escura de orifício por meio da interpretação e construção de diagramas.",
  "Aula 2: Exercícios sobre propagação da luz, sombras e câmara escura":
    "• Resolver exercícios que envolvam a independência dos raios de luz e a propagação retilínea.\n• Diferenciar os conceitos de sombra e penumbra em situações práticas.\n• Analisar o funcionamento de uma câmara escura de orifício por meio da interpretação e construção de diagramas.",
  "Aula 3 Da reflexão à formação de imagens em espelhos planos":
    "• Discutir sobre o fenômeno da reflexão da luz.\n• Analisar as leis da reflexão da luz no contexto do funcionamento de um espelho plano.\n• Criar representações gráficas de imagens em espelho plano.",
  "Aula 3: Da reflexão à formação de imagens em espelhos planos":
    "• Discutir sobre o fenômeno da reflexão da luz.\n• Analisar as leis da reflexão da luz no contexto do funcionamento de um espelho plano.\n• Criar representações gráficas de imagens em espelho plano.",
  "Aula 4 Leis da reflexão e formação de imagens em espelhos planos":
    "• Resolver exercícios que envolvam a aplicação das leis da reflexão da luz em espelhos planos.\n• Identificar o comportamento dos raios refletidos e a formação da imagem a partir da análise do fenômeno da reflexão.\n• Construir representações gráficas da formação de imagens em espelhos planos, com base na trajetória dos raios incidentes e refletidos.",
  "Aula 4: Leis da reflexão e formação de imagens em espelhos planos":
    "• Resolver exercícios que envolvam a aplicação das leis da reflexão da luz em espelhos planos.\n• Identificar o comportamento dos raios refletidos e a formação da imagem a partir da análise do fenômeno da reflexão.\n• Construir representações gráficas da formação de imagens em espelhos planos, com base na trajetória dos raios incidentes e refletidos.",
  "Aula 5 Elementos geométricos e características dos espelhos esféricos gaussianos":
    "• Classificar elementos geométricos de espelhos esféricos.\n• Analisar características de espelhos esféricos gaussianos.",
  "Aula 5: Elementos geométricos e características dos espelhos esféricos gaussianos":
    "• Classificar elementos geométricos de espelhos esféricos.\n• Analisar características de espelhos esféricos gaussianos.",
  "Aula 6 Raios particulares e representações gráficas em espelhos esféricos":
    "• Identificar e compreender a trajetória de raios luminosos particulares.\n• Criar representações gráficas de imagens em espelhos esféricos.",
  "Aula 6: Raios particulares e representações gráficas em espelhos esféricos":
    "• Identificar e compreender a trajetória de raios luminosos particulares.\n• Criar representações gráficas de imagens em espelhos esféricos.",
  "Aula 7 Exercícios propostos: Raios luminosos e imagens em espelhos esféricos":
    "• Reconhecer a trajetória de raios luminosos notáveis na formação de imagens em espelhos esféricos.\n• Construir representações gráficas da formação de imagens utilizando de espelhos côncavos e convexos.\n• Resolver exercícios que envolvam a determinação da posição, natureza e orientação das imagens formadas por espelhos esféricos.",
  "Aula 7: Exercícios propostos: Raios luminosos e imagens em espelhos esféricos":
    "• Reconhecer a trajetória de raios luminosos notáveis na formação de imagens em espelhos esféricos.\n• Construir representações gráficas da formação de imagens utilizando de espelhos côncavos e convexos.\n• Resolver exercícios que envolvam a determinação da posição, natureza e orientação das imagens formadas por espelhos esféricos.",
  "Aula 8 Equação de Gauss e aumento linear":
    "• Descrever o referencial gaussiano.\n• Analisar a equação de Gauss e a expressão do aumento linear transversal.",
  "Aula 8: Equação de Gauss e aumento linear":
    "• Descrever o referencial gaussiano.\n• Analisar a equação de Gauss e a expressão do aumento linear transversal.",
  "Aula 9 Exercícios sobre referencial Gaussiano e equação de Gauss":
    "• Identificar o referencial gaussiano como sistema de referência adotado para a aplicação da equação de Gauss em óptica geométrica.\n• Analisar a equação de Gauss e a expressão do aumento linear transversal, relacionando-as às posições e características das imagens formadas por espelhos esféricos.\n• Resolver exercícios que envolvem a aplicação da equação de Gauss e de aumento linear para determinar posição, tamanho e orientação das imagens.",
  "Aula 9: Exercícios sobre referencial Gaussiano e equação de Gauss":
    "• Identificar o referencial gaussiano como sistema de referência adotado para a aplicação da equação de Gauss em óptica geométrica.\n• Analisar a equação de Gauss e a expressão do aumento linear transversal, relacionando-as às posições e características das imagens formadas por espelhos esféricos.\n• Resolver exercícios que envolvem a aplicação da equação de Gauss e de aumento linear para determinar posição, tamanho e orientação das imagens.",
  "Aula 10 Índices de refração e Leis da refração da luz":
    "• Interpretar o significado dos índices de refração e refringência.\n• Analisar as leis da refração.",
  "Aula 10: Índices de refração e Leis da refração da luz":
    "• Interpretar o significado dos índices de refração e refringência.\n• Analisar as leis da refração.",
  "Aula 11 Comportamento óptico em lentes delgadas":
    "• Identificar o comportamento óptico de lentes delgadas.\n• Descrever a trajetória de raios luminosos particulares para o estudo das lentes delgadas.\n• Criar representações gráficas de imagens em lentes delgadas.",
  "Aula 11: Comportamento óptico em lentes delgadas":
    "• Identificar o comportamento óptico de lentes delgadas.\n• Descrever a trajetória de raios luminosos particulares para o estudo das lentes delgadas.\n• Criar representações gráficas de imagens em lentes delgadas.",
  "Aula 12 Resolvendo problemas com equação de Gauss e aumento linear em lentes":
    "• Aplicar a equação de Gauss e a expressão do aumento linear na resolução de problemas envolvendo lentes delgadas.\n• Analisar as características das imagens formadas (posição, orientação e tamanho), com base nos sinais e valores das grandezas envolvidas.",
  "Aula 12: Resolvendo problemas com equação de Gauss e aumento linear em lentes":
    "• Aplicar a equação de Gauss e a expressão do aumento linear na resolução de problemas envolvendo lentes delgadas.\n• Analisar as características das imagens formadas (posição, orientação e tamanho), com base nos sinais e valores das grandezas envolvidas.",

  // Física - 3º Ano - 4º Bimestre
  "Aula 1 Lei de Faraday-Neumann":
    "• Analisar o fenômeno da indução eletromagnética por meio da Lei de Faraday-Neumann.",
  "Aula 1: Lei de Faraday-Neumann":
    "• Analisar o fenômeno da indução eletromagnética por meio da Lei de Faraday-Neumann.",
  "Aula 2 O nascimento da física quântica: como o calor mudou a física":
    "• Identificar a quantização da energia no contexto de radiação do corpo negro.\n• Discutir sobre a hipótese de Planck e a ideia de \"quanta\" como pacotes discretos de energia.\n• Resolver problemas simples envolvendo a energia dos quanta e a frequência da radiação.",
  "Aula 2: O nascimento da física quântica: como o calor mudou a física":
    "• Identificar a quantização da energia no contexto de radiação do corpo negro.\n• Discutir sobre a hipótese de Planck e a ideia de \"quanta\" como pacotes discretos de energia.\n• Resolver problemas simples envolvendo a energia dos quanta e a frequência da radiação.",
  "Aula 3 A luz em pacotes: quando Einstein inventou os fótons":
    "• Interpretar o efeito fotoelétrico e compreender sua importância para a física quântica.\n• Analisar como a frequência da luz influencia a emissão de elétrons de uma superfície metálica.\n• Aplicar a equação de Einstein para calcular a energia cinética dos fotoelétrons.",
  "Aula 3: A luz em pacotes: quando Einstein inventou os fótons":
    "• Interpretar o efeito fotoelétrico e compreender sua importância para a física quântica.\n• Analisar como a frequência da luz influencia a emissão de elétrons de uma superfície metálica.\n• Aplicar a equação de Einstein para calcular a energia cinética dos fotoelétrons.",
  "Aula 4 Matéria que ondula: a estranha dualidade onda-partícula":
    "• Explicar o conceito de dualidade onda-partícula, mostrando como luz e matéria podem apresentar comportamentos complementares.\n• Aplicar a equação de De Broglie para calcular o comprimento de onda associado a partículas em movimento.\n• Analisar a diferença entre partículas microscópicas e macroscópicas, compreendendo que o comprimento de onda das primeiras é relevante para os fenômenos quânticos, enquanto nas segundas é desprezível, o que justifica o domínio da física clássica no mundo cotidiano.",
  "Aula 4: Matéria que ondula: a estranha dualidade onda-partícula":
    "• Explicar o conceito de dualidade onda-partícula, mostrando como luz e matéria podem apresentar comportamentos complementares.\n• Aplicar a equação de De Broglie para calcular o comprimento de onda associado a partículas em movimento.\n• Analisar a diferença entre partículas microscópicas e macroscópicas, compreendendo que o comprimento de onda das primeiras é relevante para os fenômenos quânticos, enquanto nas segundas é desprezível, o que justifica o domínio da física clássica no mundo cotidiano.",
  "Aula 5 Entre dois mundos: onde a física clássica encontra a quântica":
    "• Reconhecer que a física quântica incorpora a física clássica como um caso limite, reproduzindo seus resultados em situações de grande escala ou altas energias.\n• Compreender que, em sistemas macroscópicos, as previsões da teoria quântica convergem para as leis da física clássica, justificando a validade desta no cotidiano.\n• Distinguir os contextos em que a física clássica é suficiente daqueles em que apenas a física quântica pode explicar adequadamente os fenômenos.",
  "Aula 5: Entre dois mundos: onde a física clássica encontra a quântica":
    "• Reconhecer que a física quântica incorpora a física clássica como um caso limite, reproduzindo seus resultados em situações de grande escala ou altas energias.\n• Compreender que, em sistemas macroscópicos, as previsões da teoria quântica convergem para as leis da física clássica, justificando a validade desta no cotidiano.\n• Distinguir os contextos em que a física clássica é suficiente daqueles em que apenas a física quântica pode explicar adequadamente os fenômenos.",
  "Aula 6 O limite do conhecimento: a incerteza como lei da natureza":
    "• Analisar o princípio da incerteza e suas implicações para a medida de partículas subatômicas.\n• Diferenciar os conceitos de posição e momento no contexto de incerteza.\n• Discutir as limitações impostas pelo princípio para a física clássica.",
  "Aula 6: O limite do conhecimento: a incerteza como lei da natureza":
    "• Analisar o princípio da incerteza e suas implicações para a medida de partículas subatômicas.\n• Diferenciar os conceitos de posição e momento no contexto de incerteza.\n• Discutir as limitações impostas pelo princípio para a física clássica.",
  "Aula 7 Exercícios propostos sobre trocas de calor entre corpos":
    "• Resolver problemas envolvendo troca de calor e calorimetria em sistemas diversos.\n• Diferenciar calor sensível de calor latente.",
  "Aula 7: Exercícios propostos sobre trocas de calor entre corpos":
    "• Resolver problemas envolvendo troca de calor e calorimetria em sistemas diversos.\n• Diferenciar calor sensível de calor latente.",
  "Aula 8 Exercícios sobre Leis de Ohm, Kirchhoff e associação de resistores.":
    "• Resolver circuitos elétricos simples e complexos utilizando as Leis de Ohm e Kirchhoff.\n• Analisar associações de resistores em série e paralelo em exercícios.\n• Calcular potência elétrica e energia consumida em circuitos elétricos.",
  "Aula 8: Exercícios sobre Leis de Ohm, Kirchhoff e associação de resistores.":
    "• Resolver circuitos elétricos simples e complexos utilizando as Leis de Ohm e Kirchhoff.\n• Analisar associações de resistores em série e paralelo em exercícios.\n• Calcular potência elétrica e energia consumida em circuitos elétricos.",
  "Aula 8 Exercícios sobre Leis de Ohm, Kirchhoff e associação de resistores":
    "• Resolver circuitos elétricos simples e complexos utilizando as Leis de Ohm e Kirchhoff.\n• Analisar associações de resistores em série e paralelo em exercícios.\n• Calcular potência elétrica e energia consumida em circuitos elétricos.",
  "Aula 8: Exercícios sobre Leis de Ohm, Kirchhoff e associação de resistores":
    "• Resolver circuitos elétricos simples e complexos utilizando as Leis de Ohm e Kirchhoff.\n• Analisar associações de resistores em série e paralelo em exercícios.\n• Calcular potência elétrica e energia consumida em circuitos elétricos.",
  "Aula 9 Aprendendo a calcular campo e potencial elétrico gerado por cargas pontuais.":
    "• Resolver problemas sobre campo elétrico gerado por cargas pontuais e sistemas de cargas.\n• Calcular potencial elétrico e diferença de potencial em situações práticas.",
  "Aula 9: Aprendendo a calcular campo e potencial elétrico gerado por cargas pontuais.":
    "• Resolver problemas sobre campo elétrico gerado por cargas pontuais e sistemas de cargas.\n• Calcular potencial elétrico e diferença de potencial em situações práticas.",
  "Aula 9 Aprendendo a calcular campo e potencial elétrico gerado por cargas pontuais":
    "• Resolver problemas sobre campo elétrico gerado por cargas pontuais e sistemas de cargas.\n• Calcular potencial elétrico e diferença de potencial em situações práticas.",
  "Aula 9: Aprendendo a calcular campo e potencial elétrico gerado por cargas pontuais":
    "• Resolver problemas sobre campo elétrico gerado por cargas pontuais e sistemas de cargas.\n• Calcular potencial elétrico e diferença de potencial em situações práticas.",
  "Aula 10 Exercícios sobre equação dos gases ideais e processos termodinâmicos.":
    "• Resolver problemas envolvendo a equação dos gases ideais.\n• Analisar transformações isotérmicas, isobáricas, isocóricas e adiabáticas.\n• Calcular trabalho e calor em processos gasosos.",
  "Aula 10: Exercícios sobre equação dos gases ideais e processos termodinâmicos.":
    "• Resolver problemas envolvendo a equação dos gases ideais.\n• Analisar transformações isotérmicas, isobáricas, isocóricas e adiabáticas.\n• Calcular trabalho e calor em processos gasosos.",
  "Aula 10 Exercícios sobre equação dos gases ideais e processos termodinâmicos":
    "• Resolver problemas envolvendo a equação dos gases ideais.\n• Analisar transformações isotérmicas, isobáricas, isocóricas e adiabáticas.\n• Calcular trabalho e calor em processos gasosos.",
  "Aula 10: Exercícios sobre equação dos gases ideais e processos termodinâmicos":
    "• Resolver problemas envolvendo a equação dos gases ideais.\n• Analisar transformações isotérmicas, isobáricas, isocóricas e adiabáticas.\n• Calcular trabalho e calor em processos gasosos.",
  "Aula 11 Exercícios sobre segunda e terceira Lei da termodinâmica.":
    "• Identificar os limites de eficiência das máquinas térmicas impostos pela segunda Lei da termodinâmica.\n• Discutir sobre por que não é possível transformar todo o calor absorvido em trabalho útil nas máquinas térmicas.\n• Resolver problemas relacionados ao funcionamento e eficiência das máquinas térmicas com base na segunda e terceira Leis da termodinâmica.",
  "Aula 11: Exercícios sobre segunda e terceira Lei da termodinâmica.":
    "• Identificar os limites de eficiência das máquinas térmicas impostos pela segunda Lei da termodinâmica.\n• Discutir sobre por que não é possível transformar todo o calor absorvido em trabalho útil nas máquinas térmicas.\n• Resolver problemas relacionados ao funcionamento e eficiência das máquinas térmicas com base na segunda e terceira Leis da termodinâmica.",
  "Aula 11 Exercícios sobre segunda e terceira Lei da termodinâmica":
    "• Identificar os limites de eficiência das máquinas térmicas impostos pela segunda Lei da termodinâmica.\n• Discutir sobre por que não é possível transformar todo o calor absorvido em trabalho útil nas máquinas térmicas.\n• Resolver problemas relacionados ao funcionamento e eficiência das máquinas térmicas com base na segunda e terceira Leis da termodinâmica.",
  "Aula 11: Exercícios sobre segunda e terceira Lei da termodinâmica":
    "• Identificar os limites de eficiência das máquinas térmicas impostos pela segunda Lei da termodinâmica.\n• Discutir sobre por que não é possível transformar todo o calor absorvido em trabalho útil nas máquinas térmicas.\n• Resolver problemas relacionados ao funcionamento e eficiência das máquinas térmicas com base na segunda e terceira Leis da termodinâmica.",
  "Aula 12 Problemas de empuxo e equilíbrio em corpos imersos.":
    "• Resolver problemas sobre cálculo do empuxo em corpos imersos total ou parcialmente em fluidos.\n• Analisar flutuabilidade e equilíbrio de corpos em líquidos.\n• Aplicar o princípio de Arquimedes em situações práticas, como barcos e balões.",
  "Aula 12: Problemas de empuxo e equilíbrio em corpos imersos.":
    "• Resolver problemas sobre cálculo do empuxo em corpos imersos total ou parcialmente em fluidos.\n• Analisar flutuabilidade e equilíbrio de corpos em líquidos.\n• Aplicar o princípio de Arquimedes em situações práticas, como barcos e balões.",
  "Aula 12 Problemas de empuxo e equilíbrio em corpos imersos":
    "• Resolver problemas sobre cálculo do empuxo em corpos imersos total ou parcialmente em fluidos.\n• Analisar flutuabilidade e equilíbrio de corpos em líquidos.\n• Aplicar o princípio de Arquimedes em situações práticas, como barcos e balões.",
  "Aula 12: Problemas de empuxo e equilíbrio em corpos imersos":
    "• Resolver problemas sobre cálculo do empuxo em corpos imersos total ou parcialmente em fluidos.\n• Analisar flutuabilidade e equilíbrio de corpos em líquidos.\n• Aplicar o princípio de Arquimedes em situações práticas, como barcos e balões.",

  // Biologia - 2º Ano - 4º Bimestre
  "Aula 1 Saúde e bem-estar dos adolescentes":
    "• Identificar vulnerabilidades vinculadas aos desafios contemporâneos aos quais as juventudes estão expostas;\n• Reconhecer as principais Infecções Sexualmente Transmissíveis (IST).",
  "Aula 1: Saúde e bem-estar dos adolescentes":
    "• Identificar vulnerabilidades vinculadas aos desafios contemporâneos aos quais as juventudes estão expostas;\n• Reconhecer as principais Infecções Sexualmente Transmissíveis (IST).",
  "Aula 2 Infecções sexualmente transmissíveis":
    "• Desenvolver ações de prevenção de IST.",
  "Aula 2: Infecções sexualmente transmissíveis":
    "• Desenvolver ações de prevenção de IST.",
  "Aula 3 Sistema endócrino e contraceptivos hormonais":
    "• Reconhecer a importância de compreender a fisiologia humana para promoção da saúde;\n• Analisar a relação entre sistema endócrino e ciclo ovariano.",
  "Aula 3: Sistema endócrino e contraceptivos hormonais":
    "• Reconhecer a importância de compreender a fisiologia humana para promoção da saúde;\n• Analisar a relação entre sistema endócrino e ciclo ovariano.",
  "Aula 4 Sistema reprodutor e outros métodos contraceptivos":
    "• Reconhecer a importância de compreender a fisiologia humana para promover o autocuidado e prevenir uma gravidez não planejada;\n• Analisar a relação entre sistema reprodutor, fecundação e métodos contraceptivos.",
  "Aula 4: Sistema reprodutor e outros métodos contraceptivos":
    "• Reconhecer a importância de compreender a fisiologia humana para promover o autocuidado e prevenir uma gravidez não planejada;\n• Analisar a relação entre sistema reprodutor, fecundação e métodos contraceptivos.",
  "Aula 5 Sistema Nervoso":
    "• Reconhecer as estruturas do sistema nervoso;\n• Identificar as divisões e funções do sistema nervoso.",
  "Aula 5: Sistema Nervoso":
    "• Reconhecer as estruturas do sistema nervoso;\n• Identificar as divisões e funções do sistema nervoso.",
  "Aula 6 Como as drogas podem impactar o sistema nervoso":
    "• Identificar como as drogas podem impactar o sistema nervoso;\n• Reconhecer os principais tipos de drogas psicoativas;\n• Relacionar vulnerabilidades vinculadas ao uso de drogas psicoativas;\n• Reconhecer a dependência química como questão de saúde pública.",
  "Aula 6: Como as drogas podem impactar o sistema nervoso":
    "• Identificar como as drogas podem impactar o sistema nervoso;\n• Reconhecer os principais tipos de drogas psicoativas;\n• Relacionar vulnerabilidades vinculadas ao uso de drogas psicoativas;\n• Reconhecer a dependência química como questão de saúde pública.",
  "Aula 7 Drogas lícitas: tabaco e nicotina":
    "• Identificar as variações de tabaco;\n• Reconhecer os perigos do tabagismo e por que é um problema de saúde pública;\n• Relacionar a vulnerabilidade dos jovens e modismos e novidades ao contato com drogas lícitas.",
  "Aula 7: Drogas lícitas: tabaco e nicotina":
    "• Identificar as variações de tabaco;\n• Reconhecer os perigos do tabagismo e por que é um problema de saúde pública;\n• Relacionar a vulnerabilidade dos jovens e modismos e novidades ao contato com drogas lícitas.",
  "Aula 8 Vulnerabilidade dos jovens à desinformação":
    "• Reconhecer os efeitos de estimulantes no Sistema Nervoso;\n• Relacionar a vulnerabilidade dos jovens à desinformação com hábitos prejudiciais como a ingestão da mistura álcool e energético e/ou o consumo de cigarro eletrônico e narguilé.",
  "Aula 8: Vulnerabilidade dos jovens à desinformação":
    "• Reconhecer os efeitos de estimulantes no Sistema Nervoso;\n• Relacionar a vulnerabilidade dos jovens à desinformação com hábitos prejudiciais como a ingestão da mistura álcool e energético e/ou o consumo de cigarro eletrônico e narguilé.",
  "Aula 9 Obesidade e desnutrição":
    "• Definir obesidade e desnutrição;\n• Reconhecer a importância dos cuidados com a alimentação e seus impactos na saúde;\n• Relacionar obesidade a outros problemas de saúde.",
  "Aula 9: Obesidade e desnutrição":
    "• Definir obesidade e desnutrição;\n• Reconhecer a importância dos cuidados com a alimentação e seus impactos na saúde;\n• Relacionar obesidade a outros problemas de saúde.",
  "Aula 10 Sistema endócrino e diabetes":
    "• Identificar os principais tipos e função dos carboidratos;\n• Reconhecer os perigos do consumo em excesso de carboidratos;\n• Relacionar hábitos alimentares a atuação de hormônios, como a insulina, com desenvolvimento de diabetes tipo 2.",
  "Aula 10: Sistema endócrino e diabetes":
    "• Identificar os principais tipos e função dos carboidratos;\n• Reconhecer os perigos do consumo em excesso de carboidratos;\n• Relacionar hábitos alimentares a atuação de hormônios, como a insulina, com desenvolvimento de diabetes tipo 2.",
  "Aula 11 Higiene dos alimentos":
    "• Reconhecer a importância da higiene e cuidados ao armazenar alimentos;\n• Identificar necessidades locais, a fim de compartilhar conhecimentos que contribuam para a melhoria na qualidade de vida e nas condições de saúde da população.",
  "Aula 11: Higiene dos alimentos":
    "• Reconhecer a importância da higiene e cuidados ao armazenar alimentos;\n• Identificar necessidades locais, a fim de compartilhar conhecimentos que contribuam para a melhoria na qualidade de vida e nas condições de saúde da população.",
  "Aula 12 Protozooses e saneamento básico: giardíase e amebíase":
    "• Apontar as principais causas, sintomas e profilaxia das protozooses giardíase e amebíase;\n• Reconhecer a importância do acesso ao saneamento básico no combate a doenças infecciosas e parasitárias;\n• Identificar como promover ações que contribuam para a melhoria na qualidade de vida e nas condições de saúde da população.",
  "Aula 12: Protozooses e saneamento básico: giardíase e amebíase":
    "• Apontar as principais causas, sintomas e profilaxia das protozooses giardíase e amebíase;\n• Reconhecer a importância do acesso ao saneamento básico no combate a doenças infecciosas e parasitárias;\n• Identificar como promover ações que contribuam para a melhoria na qualidade de vida e nas condições de saúde da população.",
};

export function getLessonObjectives(
  lessonTitle: string,
  gradeLevel?: string,
  subject?: string
): string {
  if (!lessonTitle) return "";
  const cleanTitle = lessonTitle.trim();
  if (LESSON_OBJECTIVES_MAP[cleanTitle]) {
    return LESSON_OBJECTIVES_MAP[cleanTitle];
  }

  const normalizeStr = (str: string) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "");

  const normInput = normalizeStr(cleanTitle);

  // 1. Exact normalized match in predefined map
  for (const [key, val] of Object.entries(LESSON_OBJECTIVES_MAP)) {
    if (normalizeStr(key) === normInput) {
      return val;
    }
  }

  // 2. Contains match in predefined map
  const matchKey = Object.keys(LESSON_OBJECTIVES_MAP).find((key) => {
    const normKey = normalizeStr(key);
    return (
      normKey.length > 5 &&
      (normInput.includes(normKey) || normKey.includes(normInput))
    );
  });

  if (matchKey && LESSON_OBJECTIVES_MAP[matchKey]) {
    return LESSON_OBJECTIVES_MAP[matchKey];
  }

  // 3. Extract clean topic (removing "Aula XX: " / "Aula XX - ")
  const topicOnly = cleanTitle
    .replace(/^aula\s*\d+[:\s\-\–]*/i, "")
    .replace(/^[0-9]+[:\s\-\–]*/, "")
    .trim();

  const effectiveTopic = topicOnly || cleanTitle;
  const subj = (subject || "").toLowerCase();

  // 4. Intelligent pedagogical objectives generator by subject / theme
  if (subj.includes("história") || subj.includes("historia")) {
    return (
      `• Compreender os principais conceitos, contextos históricos e causas de: ${effectiveTopic};\n` +
      `• Analisar as transformações sociais, políticas e culturais relacionadas ao tema;\n` +
      `• Identificar fontes, sujeitos históricos e permanências no mundo contemporâneo.`
    );
  }

  if (subj.includes("ciência") || subj.includes("ciencia") || subj.includes("física") || subj.includes("química") || subj.includes("biologia")) {
    return (
      `• Investigar e descrever os processos, fenômenos e propriedades de: ${effectiveTopic};\n` +
      `• Relacionar os conceitos científicos a aplicações práticas, saúde e sustentabilidade socioambiental;\n` +
      `• Analisar evidências e dados experimentais para fundamentar conclusões científicas.`
    );
  }

  if (subj.includes("geografia")) {
    return (
      `• Analisar a espacialidade, dinâmicas territoriais e características de: ${effectiveTopic};\n` +
      `• Compreender as relações entre sociedade, natureza e as transformações da paisagem;\n` +
      `• Interpretar representações cartográficas, gráficos e dados socioeconômicos sobre o tema.`
    );
  }

  if (subj.includes("matemática") || subj.includes("matematica")) {
    return (
      `• Compreender os conceitos, propriedades e representações matemáticas de: ${effectiveTopic};\n` +
      `• Resolver e elaborar problemas práticos e teóricos aplicando procedimentos e algoritmos adequados;\n` +
      `• Desenvolver o raciocínio lógico, argumentação e a validação de estratégias de resolução.`
    );
  }

  if (subj.includes("língua portuguesa") || subj.includes("português") || subj.includes("portugues") || subj.includes("redação")) {
    return (
      `• Identificar e analisar a estrutura composicional e os efeitos de sentido em: ${effectiveTopic};\n` +
      `• Desenvolver estratégias de leitura crítica, interpretação e produção textual adequadas à situação comunicativa;\n` +
      `• Aplicar conhecimentos gramaticais, coesão e coerência na construção do sentido do texto.`
    );
  }

  if (subj.includes("arte")) {
    return (
      `• Explorar e reconhecer os elementos constitutivos, técnicas e contextos de: ${effectiveTopic};\n` +
      `• Experimentar processos criativos individuais e coletivos valorizando a diversidade estética e cultural;\n` +
      `• Desenvolver a fruição estética e o pensamento crítico na apreciação de produções artísticas.`
    );
  }

  if (subj.includes("inglês") || subj.includes("ingles") || subj.includes("língua inglesa")) {
    return (
      `• Compreender o vocabulário, estruturas linguísticas e funções comunicativas relacionadas a: ${effectiveTopic};\n` +
      `• Praticar a leitura, compreensão auditiva e produção oral/escrita em língua inglesa no contexto trabalhado;\n` +
      `• Valorizar a comunicação intercultural e o uso autêntico da língua em situações cotidianas.`
    );
  }

  if (subj.includes("educação física") || subj.includes("educacao fisica")) {
    return (
      `• Vivenciar, experimentar e recriar práticas corporais relacionadas a: ${effectiveTopic};\n` +
      `• Compreender as regras, princípios éticos e valores de cooperação e inclusão nas atividades propostas;\n` +
      `• Refletir sobre a importância da atividade física para a saúde, bem-estar e convivência coletiva.`
    );
  }

  // Universal fallback for any custom subject/topic
  return (
    `• Compreender os conceitos centrais, fundamentos e relevância de: ${effectiveTopic};\n` +
    `• Analisar e aplicar os conhecimentos em situações-problema e contextos práticos;\n` +
    `• Estimular a reflexão crítica, a autonomia e o trabalho colaborativo durante as atividades.`
  );
}

export interface BnccSkillDetail {
  code: string;
  fullText: string;
  verb?: string;
  content?: string;
  context?: string;
}

export const LESSON_BNCC_MAP: Record<string, BnccSkillDetail[]> = {
  // História - 7º Ano - 4º Bimestre
  "Aula 1: A escravidão e a servidão ao longo da história": [
    {
      code: "EF07HI15",
      fullText: "EF07HI15 - Discutir o conceito de escravidão moderna e suas distinções em relação ao escravismo antigo e à servidão medieval.",
      verb: "Discutir",
      content: "o conceito de escravidão moderna",
      context: "e suas distinções em relação ao escravismo antigo e à servidão medieval.",
    },
  ],
  "Aula 1 A escravidão e a servidão ao longo da história": [
    {
      code: "EF07HI15",
      fullText: "EF07HI15 - Discutir o conceito de escravidão moderna e suas distinções em relação ao escravismo antigo e à servidão medieval.",
      verb: "Discutir",
      content: "o conceito de escravidão moderna",
      context: "e suas distinções em relação ao escravismo antigo e à servidão medieval.",
    },
  ],
  "Aula 1: A escravidão moderna": [
    {
      code: "EF07HI15",
      fullText: "EF07HI15 - Discutir o conceito de escravidão moderna e suas distinções em relação ao escravismo antigo e à servidão medieval.",
      verb: "Discutir",
      content: "o conceito de escravidão moderna",
      context: "e suas distinções em relação ao escravismo antigo e à servidão medieval.",
    },
  ],
  "Aula 1 A escravidão moderna": [
    {
      code: "EF07HI15",
      fullText: "EF07HI15 - Discutir o conceito de escravidão moderna e suas distinções em relação ao escravismo antigo e à servidão medieval.",
      verb: "Discutir",
      content: "o conceito de escravidão moderna",
      context: "e suas distinções em relação ao escravismo antigo e à servidão medieval.",
    },
  ],
  "Aula 2: As dinâmicas de comércio de escravizados": [
    {
      code: "EF07HI16",
      fullText: "EF07HI16 - Analisar os mecanismos e as dinâmicas de comércio de escravizados em suas diferentes fases, identificando os agentes responsáveis pelo tráfico.",
      verb: "Analisar",
      content: "os mecanismos e as dinâmicas de comércio de escravizados em suas diferentes fases",
      context: ", identificando os agentes responsáveis pelo tráfico.",
    },
  ],
  "Aula 2 As dinâmicas de comércio de escravizados": [
    {
      code: "EF07HI16",
      fullText: "EF07HI16 - Analisar os mecanismos e as dinâmicas de comércio de escravizados em suas diferentes fases, identificando os agentes responsáveis pelo tráfico.",
      verb: "Analisar",
      content: "os mecanismos e as dinâmicas de comércio de escravizados em suas diferentes fases",
      context: ", identificando os agentes responsáveis pelo tráfico.",
    },
  ],
  "Aula 2: Escravidão na África": [
    {
      code: "EF07HI16",
      fullText: "EF07HI16 - Analisar os mecanismos e as dinâmicas de comércio de escravizados em suas diferentes fases, identificando os agentes responsáveis pelo tráfico.",
      verb: "Analisar",
      content: "os mecanismos e as dinâmicas de comércio de escravizados em suas diferentes fases",
      context: ", identificando os agentes responsáveis pelo tráfico.",
    },
  ],
  "Aula 2 Escravidão na África": [
    {
      code: "EF07HI16",
      fullText: "EF07HI16 - Analisar os mecanismos e as dinâmicas de comércio de escravizados em suas diferentes fases, identificando os agentes responsáveis pelo tráfico.",
      verb: "Analisar",
      content: "os mecanismos e as dinâmicas de comércio de escravizados em suas diferentes fases",
      context: ", identificando os agentes responsáveis pelo tráfico.",
    },
  ],
  // História - 8º Ano - 4º Bimestre
  "Aula 1: O legado da luta negra contra a escravidão": [
    {
      code: "EF08HI19A",
      fullText: "EF08HI19A - Formular questionamentos sobre a tutela da população indígena, a escravidão dos negros e a tutela dos egressos da escravidão.",
      verb: "Formular",
      content: "questionamentos",
      context: "sobre a tutela da população indígena, a escravidão dos negros e a tutela dos egressos da escravidão.",
    },
  ],
  "Aula 2: As políticas de imigração e o abolicionismo no Brasil Imperial": [
    {
      code: "EF08HI27",
      fullText: "EF08HI27 - Identificar, com base na seleção e consulta de fontes de diferentes naturezas, as tensões e os significados dos discursos civilizatórios, avaliando seus impactos negativos para os povos indígenas originários e para as populações negras nas Américas.",
      verb: "Identificar",
      content: ", com base na seleção e consulta de fontes de diferentes naturezas, as tensões e os significados dos discursos civilizatórios",
      context: ", avaliando seus impactos negativos para os povos indígenas originários e para as populações negras nas Américas.",
    },
  ],
  "Aula 3: Pensamento e cultura no século XIX: darwinismo social e racismo": [
    {
      code: "EF08HI27",
      fullText: "EF08HI27 - Identificar, com base na seleção e consulta de fontes de diferentes naturezas, as tensões e os significados dos discursos civilizatórios, avaliando seus impactos negativos para os povos indígenas originários e para as populações negras nas Américas.",
      verb: "Identificar",
      content: ", com base na seleção e consulta de fontes de diferentes naturezas, as tensões e os significados dos discursos civilizatórios",
      context: ", avaliando seus impactos negativos para os povos indígenas originários e para as populações negras nas Américas.",
    },
  ],
  "Aula 4: A resistência dos povos indígenas e o discurso civilizatório nas Américas": [
    {
      code: "EF08HI27",
      fullText: "EF08HI27 - Identificar, com base na seleção e consulta de fontes de diferentes naturezas, as tensões e os significados dos discursos civilizatórios, avaliando seus impactos negativos para os povos indígenas originários e para as populações negras nas Américas.",
      verb: "Identificar",
      content: ", com base na seleção e consulta de fontes de diferentes naturezas, as tensões e os significados dos discursos civilizatórios",
      context: ", avaliando seus impactos negativos para os povos indígenas originários e para as populações negras nas Américas.",
    },
  ],
  "Aula 5: O Estado brasileiro e sua relação com os indígenas na construção do Império": [
    {
      code: "EF08HI21",
      fullText: "EF08HI21 - Identificar e analisar as políticas oficiais com relação ao indígena durante o Império.",
      verb: "Identificar",
      content: "e analisar as políticas oficiais",
      context: "com relação ao indígena durante o Império.",
    },
  ],
  "Aula 6: Vozes da literatura negra no Brasil do século XIX": [
    {
      code: "EF08HI20",
      fullText: "EF08HI20 - Identificar e relacionar aspectos das estruturas sociais da atualidade com os legados da escravidão no Brasil e discutir a importância de ações afirmativas.",
      verb: "Identificar",
      content: "e relacionar aspectos das estruturas sociais da atualidade",
      context: "com os legados da escravidão no Brasil e discutir a importância de ações afirmativas.",
    },
  ],
  "Aula 7: Cultura letrada e não letrada no Brasil durante o século XIX": [
    {
      code: "EF08HI22",
      fullText: "EF08HI22 - Discutir o papel das culturas letradas, não letradas e das artes na produção das identidades no Brasil do século XIX.",
      verb: "Discutir",
      content: "o papel das culturas letradas, não letradas e das artes",
      context: "na produção das identidades no Brasil do século XIX.",
    },
  ],
  "Aula 8: Romantismo no Brasil do século XIX": [
    {
      code: "EF08HI22",
      fullText: "EF08HI22 - Discutir o papel das culturas letradas, não letradas e das artes na produção das identidades no Brasil do século XIX.",
      verb: "Discutir",
      content: "o papel das culturas letradas, não letradas e das artes",
      context: "na produção das identidades no Brasil do século XIX.",
    },
  ],
  "Aula 9: Relações entre os Estados Unidos da América e a América Latina no século XIX": [
    {
      code: "EF08HI25",
      fullText: "EF08HI25 - Caracterizar e contextualizar aspectos das relações entre os Estados Unidos da América e a América Latina no século XIX.",
      verb: "Caracterizar",
      content: "e contextualizar aspectos das relações",
      context: "entre os Estados Unidos da América e a América Latina no século XIX.",
    },
  ],
  "Aula 10: Da Doutrina Monroe ao intervencionismo: as influências dos EUA na América Latina": [
    {
      code: "EF08HI25",
      fullText: "EF08HI25 - Caracterizar e contextualizar aspectos das relações entre os Estados Unidos da América e a América Latina no século XIX.",
      verb: "Caracterizar",
      content: "e contextualizar aspectos das relações",
      context: "entre os Estados Unidos da América e a América Latina no século XIX.",
    },
  ],
  "Aula 11: Determinismo e imperialismo europeu": [
    {
      code: "EF08HI23",
      fullText: "EF08HI23 - Estabelecer relações causais entre as ideologias raciais e o determinismo no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
      verb: "Estabelecer",
      content: "relações causais entre as ideologias raciais e o determinismo",
      context: "no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
    },
  ],
  "Aula 12: Nacionalismo e as novas nações europeias: o início do imperialismo": [
    {
      code: "EF08HI23",
      fullText: "EF08HI23 - Estabelecer relações causais entre as ideologias raciais e o determinismo no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
      verb: "Estabelecer",
      content: "relações causais entre as ideologias raciais e o determinismo",
      context: "no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
    },
  ],
  "Aula 13: Teorias raciais e o imperialismo na África": [
    {
      code: "EF08HI23",
      fullText: "EF08HI23 - Estabelecer relações causais entre as ideologias raciais e o determinismo no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
      verb: "Estabelecer",
      content: "relações causais entre as ideologias raciais e o determinismo",
      context: "no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
    },
  ],
  "Aula 14: O imperialismo europeu e a partilha da África": [
    {
      code: "EF08HI23",
      fullText: "EF08HI23 - Estabelecer relações causais entre as ideologias raciais e o determinismo no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
      verb: "Estabelecer",
      content: "relações causais entre as ideologias raciais e o determinismo",
      context: "no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
    },
  ],
  "Aula 15: Resistência à partilha da África": [
    {
      code: "EF08HI24",
      fullText: "EF08HI24 - Reconhecer os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
      verb: "Reconhecer",
      content: "os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo",
      context: "e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
    },
  ],
  "Aula 16: A África e o capitalismo industrial europeu": [
    {
      code: "EF08HI24",
      fullText: "EF08HI24 - Reconhecer os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
      verb: "Reconhecer",
      content: "os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo",
      context: "e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
    },
  ],
  "Aula 17: Recursos africanos e os interesses da Europa: histórias por trás do colonialismo": [
    {
      code: "EF08HI24",
      fullText: "EF08HI24 - Reconhecer os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
      verb: "Reconhecer",
      content: "os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo",
      context: "e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
    },
  ],
  "Aula 18: Colonialismo ontem e hoje: consequências do colonialismo no mundo atual": [
    {
      code: "EF08HI24",
      fullText: "EF08HI24 - Reconhecer os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
      verb: "Reconhecer",
      content: "os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo",
      context: "e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
    },
  ],
  "Aula 6 Estruturas sociais da atualidade e legados da escravidão": [
    {
      code: "EF08HI20",
      fullText: "EF08HI20 - Identificar e relacionar aspectos das estruturas sociais da atualidade com os legados da escravidão no Brasil e discutir a importância de ações afirmativas.",
      verb: "Identificar",
      content: "e relacionar aspectos das estruturas sociais da atualidade",
      context: "com os legados da escravidão no Brasil e discutir a importância de ações afirmativas.",
    },
  ],
  "Aula 7: Culturas letradas, não letradas e artes no Brasil do século XIX": [
    {
      code: "EF08HI22",
      fullText: "EF08HI22 - Discutir o papel das culturas letradas, não letradas e das artes na produção das identidades no Brasil do século XIX.",
      verb: "Discutir",
      content: "o papel das culturas letradas, não letradas e das artes",
      context: "na produção das identidades no Brasil do século XIX.",
    },
  ],
  "Aula 7 Culturas letradas, não letradas e artes no Brasil do século XIX": [
    {
      code: "EF08HI22",
      fullText: "EF08HI22 - Discutir o papel das culturas letradas, não letradas e das artes na produção das identidades no Brasil do século XIX.",
      verb: "Discutir",
      content: "o papel das culturas letradas, não letradas e das artes",
      context: "na produção das identidades no Brasil do século XIX.",
    },
  ],
  "Aula 8: Produção das identidades no Brasil do século XIX": [
    {
      code: "EF08HI22",
      fullText: "EF08HI22 - Discutir o papel das culturas letradas, não letradas e das artes na produção das identidades no Brasil do século XIX.",
      verb: "Discutir",
      content: "o papel das culturas letradas, não letradas e das artes",
      context: "na produção das identidades no Brasil do século XIX.",
    },
  ],
  "Aula 8 Produção das identidades no Brasil do século XIX": [
    {
      code: "EF08HI22",
      fullText: "EF08HI22 - Discutir o papel das culturas letradas, não letradas e das artes na produção das identidades no Brasil do século XIX.",
      verb: "Discutir",
      content: "o papel das culturas letradas, não letradas e das artes",
      context: "na produção das identidades no Brasil do século XIX.",
    },
  ],
  "Aula 9: Relações entre Estados Unidos e América Latina no século XIX": [
    {
      code: "EF08HI25",
      fullText: "EF08HI25 - Caracterizar e contextualizar aspectos das relações entre os Estados Unidos da América e a América Latina no século XIX.",
      verb: "Caracterizar",
      content: "e contextualizar aspectos das relações",
      context: "entre os Estados Unidos da América e a América Latina no século XIX.",
    },
  ],
  "Aula 9 Relações entre Estados Unidos e América Latina no século XIX": [
    {
      code: "EF08HI25",
      fullText: "EF08HI25 - Caracterizar e contextualizar aspectos das relações entre os Estados Unidos da América e a América Latina no século XIX.",
      verb: "Caracterizar",
      content: "e contextualizar aspectos das relações",
      context: "entre os Estados Unidos da América e a América Latina no século XIX.",
    },
  ],
  "Aula 10: Aspectos das relações EUA-América Latina no século XIX": [
    {
      code: "EF08HI25",
      fullText: "EF08HI25 - Caracterizar e contextualizar aspectos das relações entre os Estados Unidos da América e a América Latina no século XIX.",
      verb: "Caracterizar",
      content: "e contextualizar aspectos das relações",
      context: "entre os Estados Unidos da América e a América Latina no século XIX.",
    },
  ],
  "Aula 10 Aspectos das relações EUA-América Latina no século XIX": [
    {
      code: "EF08HI25",
      fullText: "EF08HI25 - Caracterizar e contextualizar aspectos das relações entre os Estados Unidos da América e a América Latina no século XIX.",
      verb: "Caracterizar",
      content: "e contextualizar aspectos das relações",
      context: "entre os Estados Unidos da América e a América Latina no século XIX.",
    },
  ],
  "Aula 11: Ideologias raciais e determinismo no imperialismo europeu": [
    {
      code: "EF08HI23",
      fullText: "EF08HI23 - Estabelecer relações causais entre as ideologias raciais e o determinismo no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
      verb: "Estabelecer",
      content: "relações causais entre as ideologias raciais e o determinismo",
      context: "no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
    },
  ],
  "Aula 11 Ideologias raciais e determinismo no imperialismo europeu": [
    {
      code: "EF08HI23",
      fullText: "EF08HI23 - Estabelecer relações causais entre as ideologias raciais e o determinismo no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
      verb: "Estabelecer",
      content: "relações causais entre as ideologias raciais e o determinismo",
      context: "no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
    },
  ],
  "Aula 12: O imperialismo europeu e seus impactos na África e Ásia": [
    {
      code: "EF08HI23",
      fullText: "EF08HI23 - Estabelecer relações causais entre as ideologias raciais e o determinismo no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
      verb: "Estabelecer",
      content: "relações causais entre as ideologias raciais e o determinismo",
      context: "no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
    },
  ],
  "Aula 12 O imperialismo europeu e seus impactos na África e Ásia": [
    {
      code: "EF08HI23",
      fullText: "EF08HI23 - Estabelecer relações causais entre as ideologias raciais e o determinismo no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
      verb: "Estabelecer",
      content: "relações causais entre as ideologias raciais e o determinismo",
      context: "no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
    },
  ],
  "Aula 13: Relações causais entre determinismo e imperialismo": [
    {
      code: "EF08HI23",
      fullText: "EF08HI23 - Estabelecer relações causais entre as ideologias raciais e o determinismo no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
      verb: "Estabelecer",
      content: "relações causais entre as ideologias raciais e o determinismo",
      context: "no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
    },
  ],
  "Aula 13 Relações causais entre determinismo e imperialismo": [
    {
      code: "EF08HI23",
      fullText: "EF08HI23 - Estabelecer relações causais entre as ideologias raciais e o determinismo no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
      verb: "Estabelecer",
      content: "relações causais entre as ideologias raciais e o determinismo",
      context: "no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
    },
  ],
  "Aula 14: Impactos do imperialismo no continente africano e asiático": [
    {
      code: "EF08HI23",
      fullText: "EF08HI23 - Estabelecer relações causais entre as ideologias raciais e o determinismo no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
      verb: "Estabelecer",
      content: "relações causais entre as ideologias raciais e o determinismo",
      context: "no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
    },
  ],
  "Aula 14 Impactos do imperialismo no continente africano e asiático": [
    {
      code: "EF08HI23",
      fullText: "EF08HI23 - Estabelecer relações causais entre as ideologias raciais e o determinismo no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
      verb: "Estabelecer",
      content: "relações causais entre as ideologias raciais e o determinismo",
      context: "no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
    },
  ],
  "Aula 15: Produtos do continente africano durante o imperialismo": [
    {
      code: "EF08HI24",
      fullText: "EF08HI24 - Reconhecer os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
      verb: "Reconhecer",
      content: "os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo",
      context: "e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
    },
  ],
  "Aula 15 Produtos do continente africano durante o imperialismo": [
    {
      code: "EF08HI24",
      fullText: "EF08HI24 - Reconhecer os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
      verb: "Reconhecer",
      content: "os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo",
      context: "e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
    },
  ],
  "Aula 16: Organização e exploração econômica na África": [
    {
      code: "EF08HI24",
      fullText: "EF08HI24 - Reconhecer os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
      verb: "Reconhecer",
      content: "os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo",
      context: "e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
    },
  ],
  "Aula 16 Organização e exploração econômica na África": [
    {
      code: "EF08HI24",
      fullText: "EF08HI24 - Reconhecer os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
      verb: "Reconhecer",
      content: "os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo",
      context: "e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
    },
  ],
  "Aula 17: Impactos do imperialismo sobre as comunidades locais africanas": [
    {
      code: "EF08HI24",
      fullText: "EF08HI24 - Reconhecer os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
      verb: "Reconhecer",
      content: "os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo",
      context: "e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
    },
  ],
  "Aula 17 Impactos do imperialismo sobre as comunidades locais africanas": [
    {
      code: "EF08HI24",
      fullText: "EF08HI24 - Reconhecer os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
      verb: "Reconhecer",
      content: "os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo",
      context: "e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
    },
  ],
  "Aula 18: Formas de organização e exploração econômica no imperialismo": [
    {
      code: "EF08HI24",
      fullText: "EF08HI24 - Reconhecer os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
      verb: "Reconhecer",
      content: "os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo",
      context: "e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
    },
  ],
  "Aula 18 Formas de organização e exploração econômica no imperialismo": [
    {
      code: "EF08HI24",
      fullText: "EF08HI24 - Reconhecer os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
      verb: "Reconhecer",
      content: "os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo",
      context: "e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
    },
  ],
  // História - 6º Ano - 4º Bimestre
  "Aula 1: A mulher na transição da Antiguidade para a Idade Média": [
    {
      code: "EF06HI14",
      fullText: "EF06HI14 - Identificar e analisar diferentes formas de contato, adaptação ou exclusão entre os povos em diferentes tempos e espaços",
      verb: "Identificar e analisar",
      content: "Diferentes formas de contato, adaptação ou exclusão entre os povos",
      context: "Em diferentes tempos e espaços",
    },
  ],
  "Aula 1 A mulher na transição da Antiguidade para a Idade Média": [
    {
      code: "EF06HI14",
      fullText: "EF06HI14 - Identificar e analisar diferentes formas de contato, adaptação ou exclusão entre os povos em diferentes tempos e espaços",
      verb: "Identificar e analisar",
      content: "Diferentes formas de contato, adaptação ou exclusão entre os povos",
      context: "Em diferentes tempos e espaços",
    },
  ],
  "Aula 2: Os povos germânicos": [
    {
      code: "EF06HI16",
      fullText: "EF06HI16 - Caracterizar e comparar as dinâmicas de abastecimento e as formas de organização do trabalho e da vida social em diferentes sociedades e períodos, com destaque para as relações entre senhores e servos",
      verb: "Caracterizar e comparar",
      content: "As dinâmicas de abastecimento e as formas de organização do trabalho e da vida social",
      context: "Em diferentes sociedades e períodos, com destaque para as relações entre senhores e servos",
    },
  ],
  "Aula 2 Os povos germânicos": [
    {
      code: "EF06HI16",
      fullText: "EF06HI16 - Caracterizar e comparar as dinâmicas de abastecimento e as formas de organização do trabalho e da vida social em diferentes sociedades e períodos, com destaque para as relações entre senhores e servos",
      verb: "Caracterizar e comparar",
      content: "As dinâmicas de abastecimento e as formas de organização do trabalho e da vida social",
      context: "Em diferentes sociedades e períodos, com destaque para as relações entre senhores e servos",
    },
  ],
  "Aula 3: Reino Franco: dinastias Merovíngia e Carolíngia": [
    {
      code: "EF06HI18",
      fullText: "EF06HI18 - Analisar o papel do cristianismo na cultura, na política e na sociedade durante o período medieval",
      verb: "Analisar",
      content: "O papel do cristianismo na cultura, na política e na sociedade",
      context: "Durante o período medieval",
    },
  ],
  "Aula 3 Reino Franco: dinastias Merovíngia e Carolíngia": [
    {
      code: "EF06HI18",
      fullText: "EF06HI18 - Analisar o papel do cristianismo na cultura, na política e na sociedade durante o período medieval",
      verb: "Analisar",
      content: "O papel do cristianismo na cultura, na política e na sociedade",
      context: "Durante o período medieval",
    },
  ],
  "Aula 4: O papel da religião cristã na Idade Média": [
    {
      code: "EF06HI18",
      fullText: "EF06HI18 - Analisar o papel do cristianismo na cultura, na política e na sociedade durante o período medieval",
      verb: "Analisar",
      content: "O papel do cristianismo na cultura, na política e na sociedade",
      context: "Durante o período medieval",
    },
  ],
  "Aula 4 O papel da religião cristã na Idade Média": [
    {
      code: "EF06HI18",
      fullText: "EF06HI18 - Analisar o papel do cristianismo na cultura, na política e na sociedade durante o período medieval",
      verb: "Analisar",
      content: "O papel do cristianismo na cultura, na política e na sociedade",
      context: "Durante o período medieval",
    },
  ],
  "Aula 5: O trabalho e a vida social na Idade Média": [
    {
      code: "EF06HI16",
      fullText: "EF06HI16 - Caracterizar e comparar as dinâmicas de abastecimento e as formas de organização do trabalho e da vida social em diferentes sociedades e períodos, com destaque para as relações entre senhores e servos",
      verb: "Caracterizar e comparar",
      content: "As dinâmicas de abastecimento e as formas de organização do trabalho e da vida social",
      context: "Em diferentes sociedades e períodos, com destaque para as relações entre senhores e servos",
    },
  ],
  "Aula 5 O trabalho e a vida social na Idade Média": [
    {
      code: "EF06HI16",
      fullText: "EF06HI16 - Caracterizar e comparar as dinâmicas de abastecimento e as formas de organização do trabalho e da vida social em diferentes sociedades e períodos, com destaque para as relações entre senhores e servos",
      verb: "Caracterizar e comparar",
      content: "As dinâmicas de abastecimento e as formas de organização do trabalho e da vida social",
      context: "Em diferentes sociedades e períodos, com destaque para as relações entre senhores e servos",
    },
  ],
  "Aula 6: O feudalismo europeu": [
    {
      code: "EF06HI16",
      fullText: "EF06HI16 - Caracterizar e comparar as dinâmicas de abastecimento e as formas de organização do trabalho e da vida social em diferentes sociedades e períodos, com destaque para as relações entre senhores e servos",
      verb: "Caracterizar e comparar",
      content: "As dinâmicas de abastecimento e as formas de organização do trabalho e da vida social",
      context: "Em diferentes sociedades e períodos, com destaque para as relações entre senhores e servos",
    },
  ],
  "Aula 6 O feudalismo europeu": [
    {
      code: "EF06HI16",
      fullText: "EF06HI16 - Caracterizar e comparar as dinâmicas de abastecimento e as formas de organização do trabalho e da vida social em diferentes sociedades e períodos, com destaque para as relações entre senhores e servos",
      verb: "Caracterizar e comparar",
      content: "As dinâmicas de abastecimento e as formas de organização do trabalho e da vida social",
      context: "Em diferentes sociedades e períodos, com destaque para as relações entre senhores e servos",
    },
  ],
  "Aula 7: Lógicas comerciais no mundo medieval": [
    {
      code: "EF06HI16",
      fullText: "EF06HI16 - Caracterizar e comparar as dinâmicas de abastecimento e as formas de organização do trabalho e da vida social em diferentes sociedades e períodos, com destaque para as relações entre senhores e servos",
      verb: "Caracterizar e comparar",
      content: "As dinâmicas de abastecimento e as formas de organização do trabalho e da vida social",
      context: "Em diferentes sociedades e períodos, com destaque para as relações entre senhores e servos",
    },
  ],
  "Aula 7 Lógicas comerciais no mundo medieval": [
    {
      code: "EF06HI16",
      fullText: "EF06HI16 - Caracterizar e comparar as dinâmicas de abastecimento e as formas de organização do trabalho e da vida social em diferentes sociedades e períodos, com destaque para as relações entre senhores e servos",
      verb: "Caracterizar e comparar",
      content: "As dinâmicas de abastecimento e as formas de organização do trabalho e da vida social",
      context: "Em diferentes sociedades e períodos, com destaque para as relações entre senhores e servos",
    },
  ],
  "Aula 8: Mundo árabe e o nascimento do islamismo": [
    {
      code: "EF06HI21*",
      fullText: "EF06HI21* - Identificar as características e trajetórias do Cristianismo, do povo hebreu e do povo árabe estabelecendo as relações do mundo medieval cristão com o mundo árabe, com o Império Otomano e com as populações judaicas",
      verb: "Identificar",
      content: "As características e trajetórias do Cristianismo, do povo hebreu e do povo árabe",
      context: "Estabelecendo as relações do mundo medieval cristão com o mundo árabe, com o Império Otomano e com as populações judaicas",
    },
  ],
  "Aula 8 Mundo árabe e o nascimento do islamismo": [
    {
      code: "EF06HI21*",
      fullText: "EF06HI21* - Identificar as características e trajetórias do Cristianismo, do povo hebreu e do povo árabe estabelecendo as relações do mundo medieval cristão com o mundo árabe, com o Império Otomano e com as populações judaicas",
      verb: "Identificar",
      content: "As características e trajetórias do Cristianismo, do povo hebreu e do povo árabe",
      context: "Estabelecendo as relações do mundo medieval cristão com o mundo árabe, com o Império Otomano e com as populações judaicas",
    },
  ],
  "Aula 9: Império Otomano": [
    {
      code: "EF06HI21*",
      fullText: "EF06HI21* - Identificar as características e trajetórias do Cristianismo, do povo hebreu e do povo árabe estabelecendo as relações do mundo medieval cristão com o mundo árabe, com o Império Otomano e com as populações judaicas",
      verb: "Identificar",
      content: "As características e trajetórias do Cristianismo, do povo hebreu e do povo árabe",
      context: "Estabelecendo as relações do mundo medieval cristão com o mundo árabe, com o Império Otomano e com as populações judaicas",
    },
  ],
  "Aula 9 Império Otomano": [
    {
      code: "EF06HI21*",
      fullText: "EF06HI21* - Identificar as características e trajetórias do Cristianismo, do povo hebreu e do povo árabe estabelecendo as relações do mundo medieval cristão com o mundo árabe, com o Império Otomano e com as populações judaicas",
      verb: "Identificar",
      content: "As características e trajetórias do Cristianismo, do povo hebreu e do povo árabe",
      context: "Estabelecendo as relações do mundo medieval cristão com o mundo árabe, com o Império Otomano e com as populações judaicas",
    },
  ],
  "Aula 10: O povo judeu e suas relações no mundo medieval": [
    {
      code: "EF06HI21*",
      fullText: "EF06HI21* - Identificar as características e trajetórias do Cristianismo, do povo hebreu e do povo árabe estabelecendo as relações do mundo medieval cristão com o mundo árabe, com o Império Otomano e com as populações judaicas",
      verb: "Identificar",
      content: "As características e trajetórias do Cristianismo, do povo hebreu e do povo árabe",
      context: "Estabelecendo as relações do mundo medieval cristão com o mundo árabe, com o Império Otomano e com as populações judaicas",
    },
  ],
  "Aula 10 O povo judeu e suas relações no mundo medieval": [
    {
      code: "EF06HI21*",
      fullText: "EF06HI21* - Identificar as características e trajetórias do Cristianismo, do povo hebreu e do povo árabe estabelecendo as relações do mundo medieval cristão com o mundo árabe, com o Império Otomano e com as populações judaicas",
      verb: "Identificar",
      content: "As características e trajetórias do Cristianismo, do povo hebreu e do povo árabe",
      context: "Estabelecendo as relações do mundo medieval cristão com o mundo árabe, com o Império Otomano e com as populações judaicas",
    },
  ],
  "Aula 11: Em nome de Deus: as Cruzadas": [
    {
      code: "EF06HI21*",
      fullText: "EF06HI21* - Identificar as características e trajetórias do Cristianismo, do povo hebreu e do povo árabe estabelecendo as relações do mundo medieval cristão com o mundo árabe, com o Império Otomano e com as populações judaicas",
      verb: "Identificar",
      content: "As características e trajetórias do Cristianismo, do povo hebreu e do povo árabe",
      context: "Estabelecendo as relações do mundo medieval cristão com o mundo árabe, com o Império Otomano e com as populações judaicas",
    },
  ],
  "Aula 11 Em nome de Deus: as Cruzadas": [
    {
      code: "EF06HI21*",
      fullText: "EF06HI21* - Identificar as características e trajetórias do Cristianismo, do povo hebreu e do povo árabe estabelecendo as relações do mundo medieval cristão com o mundo árabe, com o Império Otomano e com as populações judaicas",
      verb: "Identificar",
      content: "As características e trajetórias do Cristianismo, do povo hebreu e do povo árabe",
      context: "Estabelecendo as relações do mundo medieval cristão com o mundo árabe, com o Império Otomano e com as populações judaicas",
    },
  ],
  "Aula 12: A crise do sistema feudal": [
    {
      code: "EF06HI21*",
      fullText: "EF06HI21* - Identificar as características e trajetórias do Cristianismo, do povo hebreu e do povo árabe estabelecendo as relações do mundo medieval cristão com o mundo árabe, com o Império Otomano e com as populações judaicas",
      verb: "Identificar",
      content: "As características e trajetórias do Cristianismo, do povo hebreu e do povo árabe",
      context: "Estabelecendo as relações do mundo medieval cristão com o mundo árabe, com o Império Otomano e com as populações judaicas",
    },
  ],
  "Aula 12 A crise do sistema feudal": [
    {
      code: "EF06HI21*",
      fullText: "EF06HI21* - Identificar as características e trajetórias do Cristianismo, do povo hebreu e do povo árabe estabelecendo as relações do mundo medieval cristão com o mundo árabe, com o Império Otomano e com as populações judaicas",
      verb: "Identificar",
      content: "As características e trajetórias do Cristianismo, do povo hebreu e do povo árabe",
      context: "Estabelecendo as relações do mundo medieval cristão com o mundo árabe, com o Império Otomano e com as populações judaicas",
    },
  ],
  // História - 9º Ano - 4º Bimestre
  "Aula 1: A Constituição de 1988: a chamada \"Constituição Cidadã\"": [
    {
      code: "EF09HI24",
      fullText: "EF09HI24 - Analisar as transformações políticas, econômicas, sociais e culturais de 1989 aos dias atuais, identificando questões relevantes.",
      verb: "Analisar",
      content: "as transformações políticas, econômicas, sociais e culturais",
      context: "de 1989 aos dias atuais, identificando questões relevantes.",
    },
  ],
  "Aula 1 A Constituição de 1988: a chamada \"Constituição Cidadã\"": [
    {
      code: "EF09HI24",
      fullText: "EF09HI24 - Analisar as transformações políticas, econômicas, sociais e culturais de 1989 aos dias atuais, identificando questões relevantes.",
      verb: "Analisar",
      content: "as transformações políticas, econômicas, sociais e culturais",
      context: "de 1989 aos dias atuais, identificando questões relevantes.",
    },
  ],
  "Aula 2: A eleição de Tancredo Neves e o Governo José Sarney": [
    {
      code: "EF09HI22",
      fullText: "EF09HI22 - Discutir o papel da mobilização da sociedade brasileira do final do período ditatorial até a Constituição de 1988.",
      verb: "Discutir",
      content: "o papel da mobilização da sociedade brasileira",
      context: "do final do período ditatorial até a Constituição de 1988.",
    },
  ],
  "Aula 2 A eleição de Tancredo Neves e o Governo José Sarney": [
    {
      code: "EF09HI22",
      fullText: "EF09HI22 - Discutir o papel da mobilização da sociedade brasileira do final do período ditatorial até a Constituição de 1988.",
      verb: "Discutir",
      content: "o papel da mobilização da sociedade brasileira",
      context: "do final do período ditatorial até a Constituição de 1988.",
    },
  ],
  "Aula 3: As manifestações culturais no processo de redemocratização": [
    {
      code: "EF09HI24",
      fullText: "EF09HI24 - Analisar as transformações políticas, econômicas, sociais e culturais de 1989 aos dias atuais, identificando questões relevantes.",
      verb: "Analisar",
      content: "as transformações políticas, econômicas, sociais e culturais",
      context: "de 1989 aos dias atuais, identificando questões relevantes.",
    },
  ],
  "Aula 3 As manifestações culturais no processo de redemocratização": [
    {
      code: "EF09HI24",
      fullText: "EF09HI24 - Analisar as transformações políticas, econômicas, sociais e culturais de 1989 aos dias atuais, identificando questões relevantes.",
      verb: "Analisar",
      content: "as transformações políticas, econômicas, sociais e culturais",
      context: "de 1989 aos dias atuais, identificando questões relevantes.",
    },
  ],
  "Aula 4: A luta pelos direitos civis no Brasil": [
    {
      code: "EF09HI24",
      fullText: "EF09HI24 - Analisar as transformações políticas, econômicas, sociais e culturais de 1989 aos dias atuais, identificando questões relevantes.",
      verb: "Analisar",
      content: "as transformações políticas, econômicas, sociais e culturais",
      context: "de 1989 aos dias atuais, identificando questões relevantes.",
    },
  ],
  "Aula 4 A luta pelos direitos civis no Brasil": [
    {
      code: "EF09HI24",
      fullText: "EF09HI24 - Analisar as transformações políticas, econômicas, sociais e culturais de 1989 aos dias atuais, identificando questões relevantes.",
      verb: "Analisar",
      content: "as transformações políticas, econômicas, sociais e culturais",
      context: "de 1989 aos dias atuais, identificando questões relevantes.",
    },
  ],
  "Aula 5: Processos de descolonização na África": [
    {
      code: "EF09HI31",
      fullText: "EF09HI31 - Identificar e analisar os impactos da globalização nas relações políticas, econômicas e culturais.",
      verb: "Identificar",
      content: "e analisar os impactos da globalização",
      context: "nas relações políticas, econômicas e culturais.",
    },
  ],
  "Aula 5 Processos de descolonização na África": [
    {
      code: "EF09HI31",
      fullText: "EF09HI31 - Identificar e analisar os impactos da globalização nas relações políticas, econômicas e culturais.",
      verb: "Identificar",
      content: "e analisar os impactos da globalização",
      context: "nas relações políticas, econômicas e culturais.",
    },
  ],
  "Aula 6: Líderes e movimentos de independência na África": [
    {
      code: "EF09HI31",
      fullText: "EF09HI31 - Identificar e analisar os impactos da globalização nas relações políticas, econômicas e culturais.",
      verb: "Identificar",
      content: "e analisar os impactos da globalização",
      context: "nas relações políticas, econômicas e culturais.",
    },
  ],
  "Aula 6 Líderes e movimentos de independência na África": [
    {
      code: "EF09HI31",
      fullText: "EF09HI31 - Identificar e analisar os impactos da globalização nas relações políticas, econômicas e culturais.",
      verb: "Identificar",
      content: "e analisar os impactos da globalização",
      context: "nas relações políticas, econômicas e culturais.",
    },
  ],
  "Aula 7: Processos de descolonização na Ásia: independências e lideranças": [
    {
      code: "EF09HI31",
      fullText: "EF09HI31 - Identificar e analisar os impactos da globalização nas relações políticas, econômicas e culturais.",
      verb: "Identificar",
      content: "e analisar os impactos da globalização",
      context: "nas relações políticas, econômicas e culturais.",
    },
  ],
  "Aula 7 Processos de descolonização na Ásia: independências e lideranças": [
    {
      code: "EF09HI31",
      fullText: "EF09HI31 - Identificar e analisar os impactos da globalização nas relações políticas, econômicas e culturais.",
      verb: "Identificar",
      content: "e analisar os impactos da globalização",
      context: "nas relações políticas, econômicas e culturais.",
    },
  ],
  "Aula 8: O fim da Guerra Fria": [
    {
      code: "EF09HI32",
      fullText: "EF09HI32 - Analisar as consequências da globalização para as diferentes populações e regiões do mundo.",
      verb: "Analisar",
      content: "as consequências da globalização",
      context: "para as diferentes populações e regiões do mundo.",
    },
  ],
  "Aula 8 O fim da Guerra Fria": [
    {
      code: "EF09HI32",
      fullText: "EF09HI32 - Analisar as consequências da globalização para as diferentes populações e regiões do mundo.",
      verb: "Analisar",
      content: "as consequências da globalização",
      context: "para as diferentes populações e regiões do mundo.",
    },
  ],
  "Aula 9: Globalização em debate: movimentos críticos e seus desafios às políticas globais": [
    {
      code: "EF09HI32",
      fullText: "EF09HI32 - Analisar as consequências da globalização para as diferentes populações e regiões do mundo.",
      verb: "Analisar",
      content: "as consequências da globalização",
      context: "para as diferentes populações e regiões do mundo.",
    },
  ],
  "Aula 9 Globalização em debate: movimentos críticos e seus desafios às políticas globais": [
    {
      code: "EF09HI32",
      fullText: "EF09HI32 - Analisar as consequências da globalização para as diferentes populações e regiões do mundo.",
      verb: "Analisar",
      content: "as consequências da globalização",
      context: "para as diferentes populações e regiões do mundo.",
    },
  ],
  "Aula 10: Tecnologias digitais e as transformações da globalização": [
    {
      code: "EF09HI33",
      fullText: "EF09HI33 - Analisar as transformações nas relações políticas locais e globais geradas pelo desenvolvimento das tecnologias digitais de informação e comunicação.",
      verb: "Analisar",
      content: "as transformações nas relações políticas locais e globais",
      context: "geradas pelo desenvolvimento das tecnologias digitais de informação e comunicação.",
    },
  ],
  "Aula 10 Tecnologias digitais e as transformações da globalização": [
    {
      code: "EF09HI33",
      fullText: "EF09HI33 - Analisar as transformações nas relações políticas locais e globais geradas pelo desenvolvimento das tecnologias digitais de informação e comunicação.",
      verb: "Analisar",
      content: "as transformações nas relações políticas locais e globais",
      context: "geradas pelo desenvolvimento das tecnologias digitais de informação e comunicação.",
    },
  ],
  "Aula 11: Nacionalismo e neoliberalismo na América Latina: o papel das organizações internacionais na dinâmica regional": [
    {
      code: "EF09HI34",
      fullText: "EF09HI34 - Identificar e analisar os processos de integração regional e seus impactos nas sociedades contemporâneas.",
      verb: "Identificar",
      content: "e analisar os processos de integração regional",
      context: "e seus impactos nas sociedades contemporâneas.",
    },
  ],
  "Aula 11 Nacionalismo e neoliberalismo na América Latina: o papel das organizações internacionais na dinâmica regional": [
    {
      code: "EF09HI34",
      fullText: "EF09HI34 - Identificar e analisar os processos de integração regional e seus impactos nas sociedades contemporâneas.",
      verb: "Identificar",
      content: "e analisar os processos de integração regional",
      context: "e seus impactos nas sociedades contemporâneas.",
    },
  ],
  "Aula 12: O Plano Real e as transformações econômicas no Brasil nos anos 1990": [
    {
      code: "EF09HI27",
      fullText: "EF09HI27 - Relacionar aspectos das mudanças econômicas, culturais e sociais ocorridas no Brasil a partir da década de 1990 ao papel do Estado, mercado e sociedade civil.",
      verb: "Relacionar",
      content: "aspectos das mudanças econômicas, culturais e sociais ocorridas no Brasil",
      context: "a partir da década de 1990 ao papel do Estado, mercado e sociedade civil.",
    },
  ],
  "Aula 12 O Plano Real e as transformações econômicas no Brasil nos anos 1990": [
    {
      code: "EF09HI27",
      fullText: "EF09HI27 - Relacionar aspectos das mudanças econômicas, culturais e sociais ocorridas no Brasil a partir da década de 1990 ao papel do Estado, mercado e sociedade civil.",
      verb: "Relacionar",
      content: "aspectos das mudanças econômicas, culturais e sociais ocorridas no Brasil",
      context: "a partir da década de 1990 ao papel do Estado, mercado e sociedade civil.",
    },
  ],
  "Aula 13: O Brasil nos anos 1990: o governo de Fernando Henrique Cardoso e as transformações no país": [
    {
      code: "EF09HI24",
      fullText: "EF09HI24 - Analisar as transformações políticas, econômicas, sociais e culturais de 1989 aos dias atuais, identificando questões relevantes.",
      verb: "Analisar",
      content: "as transformações políticas, econômicas, sociais e culturais",
      context: "de 1989 aos dias atuais, identificando questões relevantes.",
    },
  ],
  "Aula 13 O Brasil nos anos 1990: o governo de Fernando Henrique Cardoso e as transformações no país": [
    {
      code: "EF09HI24",
      fullText: "EF09HI24 - Analisar as transformações políticas, econômicas, sociais e culturais de 1989 aos dias atuais, identificando questões relevantes.",
      verb: "Analisar",
      content: "as transformações políticas, econômicas, sociais e culturais",
      context: "de 1989 aos dias atuais, identificando questões relevantes.",
    },
  ],
  "Aula 14: Fronteiras em movimento: crise de refugiados e migrações na Era da Globalização": [
    {
      code: "EF09HI35",
      fullText: "EF09HI35 - Discutir e analisar as demandas por direitos sociais e políticos de diferentes grupos na atualidade.",
      verb: "Discutir",
      content: "e analisar as demandas por direitos sociais",
      context: "e políticos de diferentes grupos na atualidade.",
    },
  ],
  "Aula 14 Fronteiras em movimento: crise de refugiados e migrações na Era da Globalização": [
    {
      code: "EF09HI35",
      fullText: "EF09HI35 - Discutir e analisar as demandas por direitos sociais e políticos de diferentes grupos na atualidade.",
      verb: "Discutir",
      content: "e analisar as demandas por direitos sociais",
      context: "e políticos de diferentes grupos na atualidade.",
    },
  ],
  "Aula 15: Grupos terroristas contemporâneos": [
    {
      code: "EF09HI35",
      fullText: "EF09HI35 - Discutir e analisar as demandas por direitos sociais e políticos de diferentes grupos na atualidade.",
      verb: "Discutir",
      content: "e analisar as demandas por direitos sociais",
      context: "e políticos de diferentes grupos na atualidade.",
    },
  ],
  "Aula 15 Grupos terroristas contemporâneos": [
    {
      code: "EF09HI35",
      fullText: "EF09HI35 - Discutir e analisar as demandas por direitos sociais e políticos de diferentes grupos na atualidade.",
      verb: "Discutir",
      content: "e analisar as demandas por direitos sociais",
      context: "e políticos de diferentes grupos na atualidade.",
    },
  ],
  "Aula 16: Conflitos no século XXI": [
    {
      code: "EF09HI35",
      fullText: "EF09HI35 - Discutir e analisar as demandas por direitos sociais e políticos de diferentes grupos na atualidade.",
      verb: "Discutir",
      content: "e analisar as demandas por direitos sociais",
      context: "e políticos de diferentes grupos na atualidade.",
    },
  ],
  "Aula 16 Conflitos no século XXI": [
    {
      code: "EF09HI35",
      fullText: "EF09HI35 - Discutir e analisar as demandas por direitos sociais e políticos de diferentes grupos na atualidade.",
      verb: "Discutir",
      content: "e analisar as demandas por direitos sociais",
      context: "e políticos de diferentes grupos na atualidade.",
    },
  ],
  "Aula 17: Aula Desafio: defesa das minorias": [
    {
      code: "EF09HI36",
      fullText: "EF09HI36 - Identificar e analisar as transformações nas relações de trabalho e nas formas de organização social contemporâneas.",
      verb: "Identificar",
      content: "e analisar as transformações",
      context: "nas relações de trabalho e nas formas de organização social contemporâneas.",
    },
  ],
  "Aula 17 Aula Desafio: defesa das minorias": [
    {
      code: "EF09HI36",
      fullText: "EF09HI36 - Identificar e analisar as transformações nas relações de trabalho e nas formas de organização social contemporâneas.",
      verb: "Identificar",
      content: "e analisar as transformações",
      context: "nas relações de trabalho e nas formas de organização social contemporâneas.",
    },
  ],
  "Aula 18: Transformações políticas, sociais e culturais no Brasil de 1989 aos dias atuais": [
    {
      code: "EF09HI08",
      fullText: "EF09HI08 - Identificar as transformações ocorridas no debate político-social durante a transição entre o século XIX e XX.",
      verb: "Identificar",
      content: "as transformações ocorridas",
      context: "no debate político-social durante a transição entre o século XIX e XX.",
    },
  ],
  "Aula 18 Transformações políticas, sociais e culturais no Brasil de 1989 aos dias atuais": [
    {
      code: "EF09HI08",
      fullText: "EF09HI08 - Identificar as transformações ocorridas no debate político-social durante a transição entre o século XIX e XX.",
      verb: "Identificar",
      content: "as transformações ocorridas",
      context: "no debate político-social durante a transição entre o século XIX e XX.",
    },
  ],
  // História - 2º Ano - 4º Bimestre
  "Aula 1: Relações entre sujeitos, grupos e classes sociais diante de transformações técnicas": [
    {
      code: "EM13CHS401",
      fullText: "EM13CHS401 - Identificar e analisar as relações entre sujeitos, grupos, classes sociais e sociedades com culturas distintas diante das transformações técnicas, tecnológicas e informacionais.",
      verb: "Identificar",
      content: "e analisar as relações entre sujeitos, grupos, classes sociais e sociedades",
      context: "com culturas distintas diante das transformações técnicas, tecnológicas e informacionais.",
    },
  ],
  "Aula 1 Relações entre sujeitos, grupos e classes sociais diante de transformações técnicas": [
    {
      code: "EM13CHS401",
      fullText: "EM13CHS401 - Identificar e analisar as relações entre sujeitos, grupos, classes sociais e sociedades com culturas distintas diante das transformações técnicas, tecnológicas e informacionais.",
      verb: "Identificar",
      content: "e analisar as relações entre sujeitos, grupos, classes sociais e sociedades",
      context: "com culturas distintas diante das transformações técnicas, tecnológicas e informacionais.",
    },
  ],
  "Aula 2: Formação de diferentes países, povos e nações - Parte 1": [
    {
      code: "EM13CHS603",
      fullText: "EM13CHS603 - Analisar a formação de diferentes países, povos e nações e de suas experiências políticas e de exercício da cidadania.",
      verb: "Analisar",
      content: "a formação de diferentes países, povos e nações",
      context: "e de suas experiências políticas e de exercício da cidadania.",
    },
  ],
  "Aula 2 Formação de diferentes países, povos e nações - Parte 1": [
    {
      code: "EM13CHS603",
      fullText: "EM13CHS603 - Analisar a formação de diferentes países, povos e nações e de suas experiências políticas e de exercício da cidadania.",
      verb: "Analisar",
      content: "a formação de diferentes países, povos e nações",
      context: "e de suas experiências políticas e de exercício da cidadania.",
    },
  ],
  "Aula 3: Formação de diferentes países, povos e nações - Parte 2": [
    {
      code: "EM13CHS603",
      fullText: "EM13CHS603 - Analisar a formação de diferentes países, povos e nações e de suas experiências políticas e de exercício da cidadania.",
      verb: "Analisar",
      content: "a formação de diferentes países, povos e nações",
      context: "e de suas experiências políticas e de exercício da cidadania.",
    },
  ],
  "Aula 3 Formação de diferentes países, povos e nações - Parte 2": [
    {
      code: "EM13CHS603",
      fullText: "EM13CHS603 - Analisar a formação de diferentes países, povos e nações e de suas experiências políticas e de exercício da cidadania.",
      verb: "Analisar",
      content: "a formação de diferentes países, povos e nações",
      context: "e de suas experiências políticas e de exercício da cidadania.",
    },
  ],
  "Aula 4: Formação de diferentes países, povos e nações - Parte 3": [
    {
      code: "EM13CHS603",
      fullText: "EM13CHS603 - Analisar a formação de diferentes países, povos e nações e de suas experiências políticas e de exercício da cidadania.",
      verb: "Analisar",
      content: "a formação de diferentes países, povos e nações",
      context: "e de suas experiências políticas e de exercício da cidadania.",
    },
  ],
  "Aula 4 Formação de diferentes países, povos e nações - Parte 3": [
    {
      code: "EM13CHS603",
      fullText: "EM13CHS603 - Analisar a formação de diferentes países, povos e nações e de suas experiências políticas e de exercício da cidadania.",
      verb: "Analisar",
      content: "a formação de diferentes países, povos e nações",
      context: "e de suas experiências políticas e de exercício da cidadania.",
    },
  ],
  "Aula 5: Formação de diferentes países, povos e nações - Parte 4": [
    {
      code: "EM13CHS603",
      fullText: "EM13CHS603 - Analisar a formação de diferentes países, povos e nações e de suas experiências políticas e de exercício da cidadania.",
      verb: "Analisar",
      content: "a formação de diferentes países, povos e nações",
      context: "e de suas experiências políticas e de exercício da cidadania.",
    },
  ],
  "Aula 5 Formação de diferentes países, povos e nações - Parte 4": [
    {
      code: "EM13CHS603",
      fullText: "EM13CHS603 - Analisar a formação de diferentes países, povos e nações e de suas experiências políticas e de exercício da cidadania.",
      verb: "Analisar",
      content: "a formação de diferentes países, povos e nações",
      context: "e de suas experiências políticas e de exercício da cidadania.",
    },
  ],
  "Aula 6: Formação de diferentes países, povos e nações - Parte 5": [
    {
      code: "EM13CHS603",
      fullText: "EM13CHS603 - Analisar a formação de diferentes países, povos e nações e de suas experiências políticas e de exercício da cidadania.",
      verb: "Analisar",
      content: "a formação de diferentes países, povos e nações",
      context: "e de suas experiências políticas e de exercício da cidadania.",
    },
  ],
  "Aula 6 Formação de diferentes países, povos e nações - Parte 5": [
    {
      code: "EM13CHS603",
      fullText: "EM13CHS603 - Analisar a formação de diferentes países, povos e nações e de suas experiências políticas e de exercício da cidadania.",
      verb: "Analisar",
      content: "a formação de diferentes países, povos e nações",
      context: "e de suas experiências políticas e de exercício da cidadania.",
    },
  ],
  "Aula 7: Desafios ambientais contemporâneos e princípios éticos - Parte 1": [
    {
      code: "EM13CHS204",
      fullText: "EM13CHS204 - Posicionar-se com base em princípios éticos frente aos desafios ambientais contemporâneos.",
      verb: "Posicionar-se",
      content: "com base em princípios éticos",
      context: "frente aos desafios ambientais contemporâneos.",
    },
  ],
  "Aula 7 Desafios ambientais contemporâneos e princípios éticos - Parte 1": [
    {
      code: "EM13CHS204",
      fullText: "EM13CHS204 - Posicionar-se com base em princípios éticos frente aos desafios ambientais contemporâneos.",
      verb: "Posicionar-se",
      content: "com base em princípios éticos",
      context: "frente aos desafios ambientais contemporâneos.",
    },
  ],
  "Aula 8: Desafios ambientais contemporâneos e princípios éticos - Parte 2": [
    {
      code: "EM13CHS204",
      fullText: "EM13CHS204 - Posicionar-se com base em princípios éticos frente aos desafios ambientais contemporâneos.",
      verb: "Posicionar-se",
      content: "com base em princípios éticos",
      context: "frente aos desafios ambientais contemporâneos.",
    },
  ],
  "Aula 8 Desafios ambientais contemporâneos e princípios éticos - Parte 2": [
    {
      code: "EM13CHS204",
      fullText: "EM13CHS204 - Posicionar-se com base em princípios éticos frente aos desafios ambientais contemporâneos.",
      verb: "Posicionar-se",
      content: "com base em princípios éticos",
      context: "frente aos desafios ambientais contemporâneos.",
    },
  ],
  "Aula 9: Desafios ambientais contemporâneos e princípios éticos - Parte 3": [
    {
      code: "EM13CHS204",
      fullText: "EM13CHS204 - Posicionar-se com base em princípios éticos frente aos desafios ambientais contemporâneos.",
      verb: "Posicionar-se",
      content: "com base em princípios éticos",
      context: "frente aos desafios ambientais contemporâneos.",
    },
  ],
  "Aula 9 Desafios ambientais contemporâneos e princípios éticos - Parte 3": [
    {
      code: "EM13CHS204",
      fullText: "EM13CHS204 - Posicionar-se com base em princípios éticos frente aos desafios ambientais contemporâneos.",
      verb: "Posicionar-se",
      content: "com base em princípios éticos",
      context: "frente aos desafios ambientais contemporâneos.",
    },
  ],
  "Aula 10: Desafios ambientais contemporâneos e princípios éticos - Parte 4": [
    {
      code: "EM13CHS204",
      fullText: "EM13CHS204 - Posicionar-se com base em princípios éticos frente aos desafios ambientais contemporâneos.",
      verb: "Posicionar-se",
      content: "com base em princípios éticos",
      context: "frente aos desafios ambientais contemporâneos.",
    },
  ],
  "Aula 10 Desafios ambientais contemporâneos e princípios éticos - Parte 4": [
    {
      code: "EM13CHS204",
      fullText: "EM13CHS204 - Posicionar-se com base em princípios éticos frente aos desafios ambientais contemporâneos.",
      verb: "Posicionar-se",
      content: "com base em princípios éticos",
      context: "frente aos desafios ambientais contemporâneos.",
    },
  ],
  "Aula 11: Indicadores de emprego, trabalho e renda - Parte 1": [
    {
      code: "EM13CHS402",
      fullText: "EM13CHS402 - Analisar e comparar indicadores de emprego, trabalho e renda em diferentes espaços, escalas e tempos, associando-os a processos de estratificação social.",
      verb: "Analisar",
      content: "e comparar indicadores de emprego, trabalho e renda",
      context: "em diferentes espaços, escalas e tempos, associando-os a processos de estratificação social.",
    },
  ],
  "Aula 11 Indicadores de emprego, trabalho e renda - Parte 1": [
    {
      code: "EM13CHS402",
      fullText: "EM13CHS402 - Analisar e comparar indicadores de emprego, trabalho e renda em diferentes espaços, escalas e tempos, associando-os a processos de estratificação social.",
      verb: "Analisar",
      content: "e comparar indicadores de emprego, trabalho e renda",
      context: "em diferentes espaços, escalas e tempos, associando-os a processos de estratificação social.",
    },
  ],
  "Aula 12: Indicadores de emprego, trabalho e renda - Parte 2": [
    {
      code: "EM13CHS402",
      fullText: "EM13CHS402 - Analisar e comparar indicadores de emprego, trabalho e renda em diferentes espaços, escalas e tempos, associando-os a processos de estratificação social.",
      verb: "Analisar",
      content: "e comparar indicadores de emprego, trabalho e renda",
      context: "em diferentes espaços, escalas e tempos, associando-os a processos de estratificação social.",
    },
  ],
  "Aula 12 Indicadores de emprego, trabalho e renda - Parte 2": [
    {
      code: "EM13CHS402",
      fullText: "EM13CHS402 - Analisar e comparar indicadores de emprego, trabalho e renda em diferentes espaços, escalas e tempos, associando-os a processos de estratificação social.",
      verb: "Analisar",
      content: "e comparar indicadores de emprego, trabalho e renda",
      context: "em diferentes espaços, escalas e tempos, associando-os a processos de estratificação social.",
    },
  ],
  // História - 3º Ano - 4º Bimestre
  "Aula 1: Formas de atuação social para redução da desigualdade, preconceito e violência": [
    {
      code: "EM13CHS503",
      fullText: "EM13CHS503 - Identificar formas de atuação social que contribuam para a redução da desigualdade, do preconceito e da violência.",
      verb: "Identificar",
      content: "formas de atuação social",
      context: "que contribuam para a redução da desigualdade, do preconceito e da violência.",
    },
  ],
  "Aula 1 Formas de atuação social para redução da desigualdade, preconceito e violência": [
    {
      code: "EM13CHS503",
      fullText: "EM13CHS503 - Identificar formas de atuação social que contribuam para a redução da desigualdade, do preconceito e da violência.",
      verb: "Identificar",
      content: "formas de atuação social",
      context: "que contribuam para a redução da desigualdade, do preconceito e da violência.",
    },
  ],
  "Aula 2: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 1": [
    {
      code: "EM13CHS501",
      fullText: "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
      verb: "Analisar",
      content: "os fundamentos da ética nas diferentes culturas",
      context: "tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
    },
  ],
  "Aula 2 Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 1": [
    {
      code: "EM13CHS501",
      fullText: "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
      verb: "Analisar",
      content: "os fundamentos da ética nas diferentes culturas",
      context: "tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
    },
  ],
  "Aula 3: Pretensões de universalidade do conhecimento: ciência, tecnologia e sociedade": [
    {
      code: "EM13CHS306",
      fullText: "EM13CHS306 - Avaliar as pretensões de universalidade do conhecimento de modo a compreender as relações entre ciência, tecnologia e sociedade.",
      verb: "Avaliar",
      content: "as pretensões de universalidade do conhecimento",
      context: "de modo a compreender as relações entre ciência, tecnologia e sociedade.",
    },
  ],
  "Aula 3 Pretensões de universalidade do conhecimento: ciência, tecnologia e sociedade": [
    {
      code: "EM13CHS306",
      fullText: "EM13CHS306 - Avaliar as pretensões de universalidade do conhecimento de modo a compreender as relações entre ciência, tecnologia e sociedade.",
      verb: "Avaliar",
      content: "as pretensões de universalidade do conhecimento",
      context: "de modo a compreender as relações entre ciência, tecnologia e sociedade.",
    },
  ],
  "Aula 4: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 2": [
    {
      code: "EM13CHS501",
      fullText: "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
      verb: "Analisar",
      content: "os fundamentos da ética nas diferentes culturas",
      context: "tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
    },
  ],
  "Aula 4 Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 2": [
    {
      code: "EM13CHS501",
      fullText: "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
      verb: "Analisar",
      content: "os fundamentos da ética nas diferentes culturas",
      context: "tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
    },
  ],
  "Aula 5: Formas de atuação social para redução da desigualdade - Parte 2": [
    {
      code: "EM13CHS503",
      fullText: "EM13CHS503 - Identificar formas de atuação social que contribuam para a redução da desigualdade, do preconceito e da violência.",
      verb: "Identificar",
      content: "formas de atuação social",
      context: "que contribuam para a redução da desigualdade, do preconceito e da violência.",
    },
  ],
  "Aula 5 Formas de atuação social para redução da desigualdade - Parte 2": [
    {
      code: "EM13CHS503",
      fullText: "EM13CHS503 - Identificar formas de atuação social que contribuam para a redução da desigualdade, do preconceito e da violência.",
      verb: "Identificar",
      content: "formas de atuação social",
      context: "que contribuam para a redução da desigualdade, do preconceito e da violência.",
    },
  ],
  "Aula 6: Formas de atuação social para redução da desigualdade - Parte 3": [
    {
      code: "EM13CHS503",
      fullText: "EM13CHS503 - Identificar formas de atuação social que contribuam para a redução da desigualdade, do preconceito e da violência.",
      verb: "Identificar",
      content: "formas de atuação social",
      context: "que contribuam para a redução da desigualdade, do preconceito e da violência.",
    },
  ],
  "Aula 6 Formas de atuação social para redução da desigualdade - Parte 3": [
    {
      code: "EM13CHS503",
      fullText: "EM13CHS503 - Identificar formas de atuação social que contribuam para a redução da desigualdade, do preconceito e da violência.",
      verb: "Identificar",
      content: "formas de atuação social",
      context: "que contribuam para a redução da desigualdade, do preconceito e da violência.",
    },
  ],
  "Aula 7: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 3": [
    {
      code: "EM13CHS501",
      fullText: "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
      verb: "Analisar",
      content: "os fundamentos da ética nas diferentes culturas",
      context: "tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
    },
  ],
  "Aula 7 Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 3": [
    {
      code: "EM13CHS501",
      fullText: "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
      verb: "Analisar",
      content: "os fundamentos da ética nas diferentes culturas",
      context: "tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
    },
  ],
  "Aula 8: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 4": [
    {
      code: "EM13CHS501",
      fullText: "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
      verb: "Analisar",
      content: "os fundamentos da ética nas diferentes culturas",
      context: "tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
    },
  ],
  "Aula 8 Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 4": [
    {
      code: "EM13CHS501",
      fullText: "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
      verb: "Analisar",
      content: "os fundamentos da ética nas diferentes culturas",
      context: "tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
    },
  ],
  "Aula 9: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 5": [
    {
      code: "EM13CHS501",
      fullText: "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
      verb: "Analisar",
      content: "os fundamentos da ética nas diferentes culturas",
      context: "tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
    },
  ],
  "Aula 9 Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 5": [
    {
      code: "EM13CHS501",
      fullText: "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
      verb: "Analisar",
      content: "os fundamentos da ética nas diferentes culturas",
      context: "tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
    },
  ],
  "Aula 10: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 6": [
    {
      code: "EM13CHS501",
      fullText: "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
      verb: "Analisar",
      content: "os fundamentos da ética nas diferentes culturas",
      context: "tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
    },
  ],
  "Aula 10 Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 6": [
    {
      code: "EM13CHS501",
      fullText: "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
      verb: "Analisar",
      content: "os fundamentos da ética nas diferentes culturas",
      context: "tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
    },
  ],
  "Aula 11: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 7": [
    {
      code: "EM13CHS501",
      fullText: "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
      verb: "Analisar",
      content: "os fundamentos da ética nas diferentes culturas",
      context: "tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
    },
  ],
  "Aula 11 Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 7": [
    {
      code: "EM13CHS501",
      fullText: "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
      verb: "Analisar",
      content: "os fundamentos da ética nas diferentes culturas",
      context: "tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
    },
  ],
  "Aula 12: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 8": [
    {
      code: "EM13CHS501",
      fullText: "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
      verb: "Analisar",
      content: "os fundamentos da ética nas diferentes culturas",
      context: "tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
    },
  ],
  "Aula 12 Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 8": [
    {
      code: "EM13CHS501",
      fullText: "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
      verb: "Analisar",
      content: "os fundamentos da ética nas diferentes culturas",
      context: "tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
    },
  ],
  // Geografia - 6º Ano - 4º Bimestre
  "Aula 1: Características das paisagens dos lugares de vivência e fatores de transformação - Parte 1": [
    {
      code: "EF06GE16*",
      fullText: "EF06GE16* - Descrever as características das paisagens dos lugares de vivência e os fatores de sua transformação",
      verb: "Descrever",
      content: "as características das paisagens",
      context: "dos lugares de vivência e os fatores de sua transformação",
    },
  ],
  "Aula 2: Características das paisagens dos lugares de vivência - Parte 2": [
    {
      code: "EF06GE16*",
      fullText: "EF06GE16* - Descrever as características das paisagens dos lugares de vivência e os fatores de sua transformação",
      verb: "Descrever",
      content: "as características das paisagens",
      context: "dos lugares de vivência e os fatores de sua transformação",
    },
  ],
  "Aula 3: Características das paisagens dos lugares de vivência - Parte 3": [
    {
      code: "EF06GE16*",
      fullText: "EF06GE16* - Descrever as características das paisagens dos lugares de vivência e os fatores de sua transformação",
      verb: "Descrever",
      content: "as características das paisagens",
      context: "dos lugares de vivência e os fatores de sua transformação",
    },
  ],
  "Aula 4: Características das paisagens dos lugares de vivência - Parte 4": [
    {
      code: "EF06GE16*",
      fullText: "EF06GE16* - Descrever as características das paisagens dos lugares de vivência e os fatores de sua transformação",
      verb: "Descrever",
      content: "as características das paisagens",
      context: "dos lugares de vivência e os fatores de sua transformação",
    },
  ],
  "Aula 5: Características das paisagens dos lugares de vivência - Parte 5": [
    {
      code: "EF06GE16*",
      fullText: "EF06GE16* - Descrever as características das paisagens dos lugares de vivência e os fatores de sua transformação",
      verb: "Descrever",
      content: "as características das paisagens",
      context: "dos lugares de vivência e os fatores de sua transformação",
    },
  ],
  "Aula 6: Distintas interações das sociedades com a natureza e impactos socioambientais": [
    {
      code: "EF06GE11",
      fullText: "EF06GE11 - Analisar distintas interações das sociedades com a natureza, com base na identificação de impactos econômicos e socioambientais",
      verb: "Analisar",
      content: "distintas interações das sociedades",
      context: "com a natureza, com base na identificação de impactos econômicos e socioambientais",
    },
  ],
  "Aula 7: Formação de grandes domínios morfoclimáticos no Brasil e intervenções humanas - Parte 1": [
    {
      code: "EF06GE10",
      fullText: "EF06GE10 - Explicar a formação de grandes domínios morfoclimáticos no Brasil, sua importância para a biodiversidade e as intervenções humanas",
      verb: "Explicar",
      content: "a formação de grandes domínios morfoclimáticos",
      context: "no Brasil, sua importância para a biodiversidade e as intervenções humanas",
    },
  ],
  "Aula 8: Formação de grandes domínios morfoclimáticos no Brasil - Parte 2": [
    {
      code: "EF06GE10",
      fullText: "EF06GE10 - Explicar a formação de grandes domínios morfoclimáticos no Brasil, sua importância para a biodiversidade e as intervenções humanas",
      verb: "Explicar",
      content: "a formação de grandes domínios morfoclimáticos",
      context: "no Brasil, sua importância para a biodiversidade e as intervenções humanas",
    },
  ],
  "Aula 9: Formação de grandes domínios morfoclimáticos no Brasil - Parte 3": [
    {
      code: "EF06GE10",
      fullText: "EF06GE10 - Explicar a formação de grandes domínios morfoclimáticos no Brasil, sua importância para a biodiversidade e as intervenções humanas",
      verb: "Explicar",
      content: "a formação de grandes domínios morfoclimáticos",
      context: "no Brasil, sua importância para a biodiversidade e as intervenções humanas",
    },
  ],
  "Aula 10: Padrões climáticos, vegetação e atividades econômicas - Parte 1": [
    {
      code: "EF06GE05",
      fullText: "EF06GE05 - Relacionar padrões climáticos aos tipos de vegetação e às atividades econômicas em diferentes regiões",
      verb: "Relacionar",
      content: "padrões climáticos",
      context: "aos tipos de vegetação e às atividades econômicas em diferentes regiões",
    },
  ],
  "Aula 11: Padrões climáticos, vegetação e atividades econômicas - Parte 2": [
    {
      code: "EF06GE05",
      fullText: "EF06GE05 - Relacionar padrões climáticos aos tipos de vegetação e às atividades econômicas em diferentes regiões",
      verb: "Relacionar",
      content: "padrões climáticos",
      context: "aos tipos de vegetação e às atividades econômicas em diferentes regiões",
    },
  ],
  "Aula 12: Padrões climáticos, vegetação e atividades econômicas - Parte 3": [
    {
      code: "EF06GE05",
      fullText: "EF06GE05 - Relacionar padrões climáticos aos tipos de vegetação e às atividades econômicas em diferentes regiões",
      verb: "Relacionar",
      content: "padrões climáticos",
      context: "aos tipos de vegetação e às atividades econômicas em diferentes regiões",
    },
  ],
  "Aula 13: Padrões climáticos, vegetação e atividades econômicas - Parte 4": [
    {
      code: "EF06GE05",
      fullText: "EF06GE05 - Relacionar padrões climáticos aos tipos de vegetação e às atividades econômicas em diferentes regiões",
      verb: "Relacionar",
      content: "padrões climáticos",
      context: "aos tipos de vegetação e às atividades econômicas em diferentes regiões",
    },
  ],
  "Aula 14: Padrões climáticos, vegetação e atividades econômicas - Parte 5": [
    {
      code: "EF06GE05",
      fullText: "EF06GE05 - Relacionar padrões climáticos aos tipos de vegetação e às atividades econômicas em diferentes regiões",
      verb: "Relacionar",
      content: "padrões climáticos",
      context: "aos tipos de vegetação e às atividades econômicas em diferentes regiões",
    },
  ],
  "Aula 15: Padrões climáticos, vegetação e atividades econômicas - Parte 6": [
    {
      code: "EF06GE05",
      fullText: "EF06GE05 - Relacionar padrões climáticos aos tipos de vegetação e às atividades econômicas em diferentes regiões",
      verb: "Relacionar",
      content: "padrões climáticos",
      context: "aos tipos de vegetação e às atividades econômicas em diferentes regiões",
    },
  ],
  "Aula 16: Padrões climáticos, vegetação e atividades econômicas - Parte 7": [
    {
      code: "EF06GE05",
      fullText: "EF06GE05 - Relacionar padrões climáticos aos tipos de vegetação e às atividades econômicas em diferentes regiões",
      verb: "Relacionar",
      content: "padrões climáticos",
      context: "aos tipos de vegetação e às atividades econômicas em diferentes regiões",
    },
  ],
  "Aula 17: Padrões climáticos, vegetação e atividades econômicas - Parte 8": [
    {
      code: "EF06GE05",
      fullText: "EF06GE05 - Relacionar padrões climáticos aos tipos de vegetação e às atividades econômicas em diferentes regiões",
      verb: "Relacionar",
      content: "padrões climáticos",
      context: "aos tipos de vegetação e às atividades econômicas em diferentes regiões",
    },
  ],
  "Aula 18: Padrões climáticos, vegetação e atividades econômicas - Parte 9": [
    {
      code: "EF06GE05",
      fullText: "EF06GE05 - Relacionar padrões climáticos aos tipos de vegetação e às atividades econômicas em diferentes regiões",
      verb: "Relacionar",
      content: "padrões climáticos",
      context: "aos tipos de vegetação e às atividades econômicas em diferentes regiões",
    },
  ],
  // Geografia - 7º Ano - 4º Bimestre
  "Aula 1: Integração entre os lugares e a vida cotidiana das populações - Parte 1": [
    {
      code: "EF07GE05",
      fullText: "EF07GE05 - Analisar fatos e situações para compreender a integração entre os lugares e a vida cotidiana das populações",
      verb: "Analisar",
      content: "fatos e situações para compreender a integração",
      context: "entre os lugares e a vida cotidiana das populações",
    },
  ],
  "Aula 2: Integração entre os lugares e a vida cotidiana das populações - Parte 2": [
    {
      code: "EF07GE05",
      fullText: "EF07GE05 - Analisar fatos e situações para compreender a integração entre os lugares e a vida cotidiana das populações",
      verb: "Analisar",
      content: "fatos e situações para compreender a integração",
      context: "entre os lugares e a vida cotidiana das populações",
    },
  ],
  "Aula 3: Integração entre os lugares e a vida cotidiana das populações - Parte 3": [
    {
      code: "EF07GE05",
      fullText: "EF07GE05 - Analisar fatos e situações para compreender a integração entre os lugares e a vida cotidiana das populações",
      verb: "Analisar",
      content: "fatos e situações para compreender a integração",
      context: "entre os lugares e a vida cotidiana das populações",
    },
  ],
  "Aula 4: Integração entre os lugares e a vida cotidiana das populações - Parte 4": [
    {
      code: "EF07GE05",
      fullText: "EF07GE05 - Analisar fatos e situações para compreender a integração entre os lugares e a vida cotidiana das populações",
      verb: "Analisar",
      content: "fatos e situações para compreender a integração",
      context: "entre os lugares e a vida cotidiana das populações",
    },
  ],
  "Aula 5: Transformações dos espaços geográficos e integração entre os lugares - Parte 1": [
    {
      code: "EF07GE05",
      fullText: "EF07GE05 - Analisar fatos e situações para compreender a integração entre os lugares e a vida cotidiana das populações",
      verb: "Analisar",
      content: "fatos e situações para compreender a integração",
      context: "entre os lugares e a vida cotidiana das populações",
    },
    {
      code: "EF07GE06",
      fullText: "EF07GE06 - Discutir as transformações dos espaços geográficos como produto das relações socioeconômicas e culturais",
      verb: "Discutir",
      content: "as transformações dos espaços geográficos",
      context: "como produto das relações socioeconômicas e culturais",
    },
  ],
  "Aula 6: Transformações dos espaços geográficos, paisagens e integração entre lugares - Parte 2": [
    {
      code: "EF07GE05",
      fullText: "EF07GE05 - Analisar fatos e situações para compreender a integração entre os lugares e a vida cotidiana das populações",
      verb: "Analisar",
      content: "fatos e situações para compreender a integração",
      context: "entre os lugares e a vida cotidiana das populações",
    },
    {
      code: "EF07GE06",
      fullText: "EF07GE06 - Discutir as transformações dos espaços geográficos como produto das relações socioeconômicas e culturais",
      verb: "Discutir",
      content: "as transformações dos espaços geográficos",
      context: "como produto das relações socioeconômicas e culturais",
    },
    {
      code: "EF07GE08",
      fullText: "EF07GE08 - Analisar a transformação das paisagens naturais e antrópicas em função das dinâmicas populacionais",
      verb: "Analisar",
      content: "a transformação das paisagens naturais",
      context: "e antrópicas em função das dinâmicas populacionais",
    },
  ],
  "Aula 7: Transformação das paisagens naturais e antrópicas e dinâmicas populacionais - Parte 1": [
    {
      code: "EF07GE08",
      fullText: "EF07GE08 - Analisar a transformação das paisagens naturais e antrópicas em função das dinâmicas populacionais",
      verb: "Analisar",
      content: "a transformação das paisagens naturais",
      context: "e antrópicas em função das dinâmicas populacionais",
    },
  ],
  "Aula 8: Transformação das paisagens naturais e antrópicas e dinâmicas populacionais - Parte 2": [
    {
      code: "EF07GE08",
      fullText: "EF07GE08 - Analisar a transformação das paisagens naturais e antrópicas em função das dinâmicas populacionais",
      verb: "Analisar",
      content: "a transformação das paisagens naturais",
      context: "e antrópicas em função das dinâmicas populacionais",
    },
  ],
  "Aula 9: Transformação das paisagens e representações cartográficas - Parte 1": [
    {
      code: "EF07GE08",
      fullText: "EF07GE08 - Analisar a transformação das paisagens naturais e antrópicas em função das dinâmicas populacionais",
      verb: "Analisar",
      content: "a transformação das paisagens naturais",
      context: "e antrópicas em função das dinâmicas populacionais",
    },
    {
      code: "EF07GE09A",
      fullText: "EF07GE09A - Interpretar fenômenos geográficos a partir de representações cartográficas variadas",
      verb: "Interpretar",
      content: "fenômenos geográficos",
      context: "a partir de representações cartográficas variadas",
    },
  ],
  "Aula 10: Transformação das paisagens e representações cartográficas - Parte 2": [
    {
      code: "EF07GE08",
      fullText: "EF07GE08 - Analisar a transformação das paisagens naturais e antrópicas em função das dinâmicas populacionais",
      verb: "Analisar",
      content: "a transformação das paisagens naturais",
      context: "e antrópicas em função das dinâmicas populacionais",
    },
    {
      code: "EF07GE09A",
      fullText: "EF07GE09A - Interpretar fenômenos geográficos a partir de representações cartográficas variadas",
      verb: "Interpretar",
      content: "fenômenos geográficos",
      context: "a partir de representações cartográficas variadas",
    },
  ],
  "Aula 11: Transformação das paisagens naturais e antrópicas - Parte 3": [
    {
      code: "EF07GE08",
      fullText: "EF07GE08 - Analisar a transformação das paisagens naturais e antrópicas em função das dinâmicas populacionais",
      verb: "Analisar",
      content: "a transformação das paisagens naturais",
      context: "e antrópicas em função das dinâmicas populacionais",
    },
  ],
  "Aula 12: Transformação das paisagens naturais e antrópicas - Parte 4": [
    {
      code: "EF07GE08",
      fullText: "EF07GE08 - Analisar a transformação das paisagens naturais e antrópicas em função das dinâmicas populacionais",
      verb: "Analisar",
      content: "a transformação das paisagens naturais",
      context: "e antrópicas em função das dinâmicas populacionais",
    },
  ],
  "Aula 14: Transformações dos espaços geográficos e representações cartográficas": [
    {
      code: "EF07GE06",
      fullText: "EF07GE06 - Discutir as transformações dos espaços geográficos como produto das relações socioeconômicas e culturais",
      verb: "Discutir",
      content: "as transformações dos espaços geográficos",
      context: "como produto das relações socioeconômicas e culturais",
    },
    {
      code: "EF07GE09A",
      fullText: "EF07GE09A - Interpretar fenômenos geográficos a partir de representações cartográficas variadas",
      verb: "Interpretar",
      content: "fenômenos geográficos",
      context: "a partir de representações cartográficas variadas",
    },
  ],
  "Aula 16: Contradições do processo de urbanização em diferentes escalas": [
    {
      code: "EF07GE21*",
      fullText: "EF07GE21* - Identificar as contradições do processo de urbanização em diferentes escalas",
      verb: "Identificar",
      content: "as contradições do processo de urbanização",
      context: "em diferentes escalas",
    },
  ],
  "Aula 17: Processos de urbanização no território brasileiro, contradições e representações cartográficas": [
    {
      code: "EF07GE20*",
      fullText: "EF07GE20* - Caracterizar os processos de urbanização no território brasileiro",
      verb: "Caracterizar",
      content: "os processos de urbanização",
      context: "no território brasileiro",
    },
    {
      code: "EF07GE21*",
      fullText: "EF07GE21* - Identificar as contradições do processo de urbanização em diferentes escalas",
      verb: "Identificar",
      content: "as contradições do processo de urbanização",
      context: "em diferentes escalas",
    },
    {
      code: "EF07GE09A",
      fullText: "EF07GE09A - Interpretar fenômenos geográficos a partir de representações cartográficas variadas",
      verb: "Interpretar",
      content: "fenômenos geográficos",
      context: "a partir de representações cartográficas variadas",
    },
  ],
  "Aula 18: Processos de urbanização no território brasileiro e suas contradições": [
    {
      code: "EF07GE20*",
      fullText: "EF07GE20* - Caracterizar os processos de urbanização no território brasileiro",
      verb: "Caracterizar",
      content: "os processos de urbanização",
      context: "no território brasileiro",
    },
    {
      code: "EF07GE21*",
      fullText: "EF07GE21* - Identificar as contradições do processo de urbanização em diferentes escalas",
      verb: "Identificar",
      content: "as contradições do processo de urbanização",
      context: "em diferentes escalas",
    },
  ],
  // Geografia - 8º Ano - 4º Bimestre
  "Aula 1: Papel dos países desenvolvidos na economia global e fluxos de capitais": [
    {
      code: "EF08GE16A",
      fullText: "EF08GE16A - Identificar o papel dos países desenvolvidos na economia global e nos fluxos de capitais",
      verb: "Identificar",
      content: "o papel dos países desenvolvidos",
      context: "na economia global e nos fluxos de capitais",
    },
  ],
  "Aula 2: Dinâmicas de migração contemporâneas e seus impactos socioeconômicos - Parte 1": [
    {
      code: "EF08GE20B",
      fullText: "EF08GE20B - Analisar as dinâmicas de migração contemporâneas e seus impactos socioeconômicos",
      verb: "Analisar",
      content: "as dinâmicas de migração",
      context: "contemporâneas e seus impactos socioeconômicos",
    },
  ],
  "Aula 3: Atuação das empresas transnacionais e importância dos recursos hídricos": [
    {
      code: "EF08GE16B",
      fullText: "EF08GE16B - Analisar a atuação das empresas transnacionais na organização do espaço geográfico mundial",
      verb: "Analisar",
      content: "a atuação das empresas transnacionais",
      context: "na organização do espaço geográfico mundial",
    },
    {
      code: "EF08GE10",
      fullText: "EF08GE10 - Analisar a importância dos recursos hídricos para o desenvolvimento humano e econômico",
      verb: "Analisar",
      content: "a importância dos recursos hídricos",
      context: "para o desenvolvimento humano e econômico",
    },
  ],
  "Aula 4: Impactos ambientais decorrentes das atividades produtivas em nível global": [
    {
      code: "EF08GE17",
      fullText: "EF08GE17 - Avaliar os impactos ambientais decorrentes das atividades produtivas em nível global",
      verb: "Avaliar",
      content: "os impactos ambientais",
      context: "decorrentes das atividades produtivas em nível global",
    },
  ],
  "Aula 5: Papel dos países desenvolvidos e atuação das empresas transnacionais": [
    {
      code: "EF08GE16A",
      fullText: "EF08GE16A - Identificar o papel dos países desenvolvidos na economia global e nos fluxos de capitais",
      verb: "Identificar",
      content: "o papel dos países desenvolvidos",
      context: "na economia global e nos fluxos de capitais",
    },
    {
      code: "EF08GE16B",
      fullText: "EF08GE16B - Analisar a atuação das empresas transnacionais na organização do espaço geográfico mundial",
      verb: "Analisar",
      content: "a atuação das empresas transnacionais",
      context: "na organização do espaço geográfico mundial",
    },
  ],
  "Aula 6: Atuação das empresas transnacionais e principais problemas ambientais globais": [
    {
      code: "EF08GE16B",
      fullText: "EF08GE16B - Analisar a atuação das empresas transnacionais na organização do espaço geográfico mundial",
      verb: "Analisar",
      content: "a atuação das empresas transnacionais",
      context: "na organização do espaço geográfico mundial",
    },
    {
      code: "EF08GE18",
      fullText: "EF08GE18 - Reconhecer os principais problemas ambientais globais e suas possíveis soluções",
      verb: "Reconhecer",
      content: "os principais problemas ambientais",
      context: "globais e suas possíveis soluções",
    },
  ],
  "Aula 7: Dinâmicas de migração contemporâneas e seus impactos socioeconômicos - Parte 2": [
    {
      code: "EF08GE20B",
      fullText: "EF08GE20B - Analisar as dinâmicas de migração contemporâneas e seus impactos socioeconômicos",
      verb: "Analisar",
      content: "as dinâmicas de migração",
      context: "contemporâneas e seus impactos socioeconômicos",
    },
  ],
  "Aula 8: Dinâmicas de migração contemporâneas e seus impactos socioeconômicos - Parte 3": [
    {
      code: "EF08GE20B",
      fullText: "EF08GE20B - Analisar as dinâmicas de migração contemporâneas e seus impactos socioeconômicos",
      verb: "Analisar",
      content: "as dinâmicas de migração",
      context: "contemporâneas e seus impactos socioeconômicos",
    },
  ],
  "Aula 9: Fluxos de mercadorias e pessoas no contexto da globalização": [
    {
      code: "EF08GE15",
      fullText: "EF08GE15 - Analisar os fluxos de mercadorias e pessoas no contexto da globalização",
      verb: "Analisar",
      content: "os fluxos de mercadorias",
      context: "e pessoas no contexto da globalização",
    },
  ],
  "Aula 10: Desigualdades regionais e processos de desenvolvimento econômico": [
    {
      code: "EF08GE22",
      fullText: "EF08GE22 - Relacionar as desigualdades regionais aos processos de desenvolvimento econômico",
      verb: "Relacionar",
      content: "as desigualdades regionais",
      context: "aos processos de desenvolvimento econômico",
    },
  ],
  "Aula 11: Dinâmicas de migração contemporâneas e seus impactos socioeconômicos - Parte 4": [
    {
      code: "EF08GE20B",
      fullText: "EF08GE20B - Analisar as dinâmicas de migração contemporâneas e seus impactos socioeconômicos",
      verb: "Analisar",
      content: "as dinâmicas de migração",
      context: "contemporâneas e seus impactos socioeconômicos",
    },
  ],
  "Aula 12: Papel das organizações internacionais na governança global e resolução de conflitos": [
    {
      code: "EF08GE21",
      fullText: "EF08GE21 - Discutir o papel das organizações internacionais na governança global e resolução de conflitos",
      verb: "Discutir",
      content: "o papel das organizações internacionais",
      context: "na governança global e resolução de conflitos",
    },
  ],
  // Geografia - 9º Ano - 4º Bimestre
  "Aula 1: Organismos internacionais e fluxos migratórios na globalização - Parte 1": [
    {
      code: "EF09GE10",
      fullText: "EF09GE10 - Analisar a importância dos organismos internacionais na governança global e na solução de conflitos geopolíticos",
      verb: "Analisar",
      content: "a importância dos organismos internacionais",
      context: "na governança global e na solução de conflitos geopolíticos",
    },
    {
      code: "EF09GE11",
      fullText: "EF09GE11 - Relacionar os fluxos migratórios às crises humanitárias e aos processos de globalização",
      verb: "Relacionar",
      content: "os fluxos migratórios",
      context: "às crises humanitárias e aos processos de globalização",
    },
  ],
  "Aula 2: Organismos internacionais e fluxos migratórios na globalização - Parte 2": [
    {
      code: "EF09GE10",
      fullText: "EF09GE10 - Analisar a importância dos organismos internacionais na governança global e na solução de conflitos geopolíticos",
      verb: "Analisar",
      content: "a importância dos organismos internacionais",
      context: "na governança global e na solução de conflitos geopolíticos",
    },
    {
      code: "EF09GE11",
      fullText: "EF09GE11 - Relacionar os fluxos migratórios às crises humanitárias e aos processos de globalização",
      verb: "Relacionar",
      content: "os fluxos migratórios",
      context: "às crises humanitárias e aos processos de globalização",
    },
  ],
  "Aula 3: Organismos internacionais e fluxos migratórios na globalização - Parte 3": [
    {
      code: "EF09GE10",
      fullText: "EF09GE10 - Analisar a importância dos organismos internacionais na governança global e na solução de conflitos geopolíticos",
      verb: "Analisar",
      content: "a importância dos organismos internacionais",
      context: "na governança global e na solução de conflitos geopolíticos",
    },
    {
      code: "EF09GE11",
      fullText: "EF09GE11 - Relacionar os fluxos migratórios às crises humanitárias e aos processos de globalização",
      verb: "Relacionar",
      content: "os fluxos migratórios",
      context: "às crises humanitárias e aos processos de globalização",
    },
  ],
  "Aula 4: Organismos internacionais e fluxos migratórios na globalização - Parte 4": [
    {
      code: "EF09GE10",
      fullText: "EF09GE10 - Analisar a importância dos organismos internacionais na governança global e na solução de conflitos geopolíticos",
      verb: "Analisar",
      content: "a importância dos organismos internacionais",
      context: "na governança global e na solução de conflitos geopolíticos",
    },
    {
      code: "EF09GE11",
      fullText: "EF09GE11 - Relacionar os fluxos migratórios às crises humanitárias e aos processos de globalização",
      verb: "Relacionar",
      content: "os fluxos migratórios",
      context: "às crises humanitárias e aos processos de globalização",
    },
  ],
  "Aula 5: Organismos internacionais, governança global e crises humanitárias - Parte 1": [
    {
      code: "EF09GE10",
      fullText: "EF09GE10 - Analisar a importância dos organismos internacionais na governança global e na solução de conflitos geopolíticos",
      verb: "Analisar",
      content: "a importância dos organismos internacionais",
      context: "na governança global e na solução de conflitos geopolíticos",
    },
    {
      code: "EF09GE11",
      fullText: "EF09GE11 - Relacionar os fluxos migratórios às crises humanitárias e aos processos de globalização",
      verb: "Relacionar",
      content: "os fluxos migratórios",
      context: "às crises humanitárias e aos processos de globalização",
    },
  ],
  "Aula 6: Organismos internacionais, governança global e crises humanitárias - Parte 2": [
    {
      code: "EF09GE10",
      fullText: "EF09GE10 - Analisar a importância dos organismos internacionais na governança global e na solução de conflitos geopolíticos",
      verb: "Analisar",
      content: "a importância dos organismos internacionais",
      context: "na governança global e na solução de conflitos geopolíticos",
    },
    {
      code: "EF09GE11",
      fullText: "EF09GE11 - Relacionar os fluxos migratórios às crises humanitárias e aos processos de globalização",
      verb: "Relacionar",
      content: "os fluxos migratórios",
      context: "às crises humanitárias e aos processos de globalização",
    },
  ],
  "Aula 7: Organismos internacionais, governança global e crises humanitárias - Parte 3": [
    {
      code: "EF09GE10",
      fullText: "EF09GE10 - Analisar a importância dos organismos internacionais na governança global e na solução de conflitos geopolíticos",
      verb: "Analisar",
      content: "a importância dos organismos internacionais",
      context: "na governança global e na solução de conflitos geopolíticos",
    },
    {
      code: "EF09GE11",
      fullText: "EF09GE11 - Relacionar os fluxos migratórios às crises humanitárias e aos processos de globalização",
      verb: "Relacionar",
      content: "os fluxos migratórios",
      context: "às crises humanitárias e aos processos de globalização",
    },
  ],
  "Aula 8: Aspectos culturais e demográficos do mundo contemporâneo - Parte 1": [
    {
      code: "EF09GE18",
      fullText: "EF09GE18 - Identificar os aspectos culturais e demográficos das diferentes regiões do mundo contemporâneo",
      verb: "Identificar",
      content: "os aspectos culturais e demográficos",
      context: "das diferentes regiões do mundo contemporâneo",
    },
  ],
  "Aula 9: Aspectos culturais e demográficos do mundo contemporâneo - Parte 2": [
    {
      code: "EF09GE18",
      fullText: "EF09GE18 - Identificar os aspectos culturais e demográficos das diferentes regiões do mundo contemporâneo",
      verb: "Identificar",
      content: "os aspectos culturais e demográficos",
      context: "das diferentes regiões do mundo contemporâneo",
    },
  ],
  "Aula 10: Aspectos culturais e demográficos do mundo contemporâneo - Parte 3": [
    {
      code: "EF09GE18",
      fullText: "EF09GE18 - Identificar os aspectos culturais e demográficos das diferentes regiões do mundo contemporâneo",
      verb: "Identificar",
      content: "os aspectos culturais e demográficos",
      context: "das diferentes regiões do mundo contemporâneo",
    },
  ],
  "Aula 11: Aspectos culturais e demográficos do mundo contemporâneo - Parte 4": [
    {
      code: "EF09GE18",
      fullText: "EF09GE18 - Identificar os aspectos culturais e demográficos das diferentes regiões do mundo contemporâneo",
      verb: "Identificar",
      content: "os aspectos culturais e demográficos",
      context: "das diferentes regiões do mundo contemporâneo",
    },
  ],
  "Aula 12: Aspectos culturais e demográficos do mundo contemporâneo - Parte 5": [
    {
      code: "EF09GE18",
      fullText: "EF09GE18 - Identificar os aspectos culturais e demográficos das diferentes regiões do mundo contemporâneo",
      verb: "Identificar",
      content: "os aspectos culturais e demográficos",
      context: "das diferentes regiões do mundo contemporâneo",
    },
  ],
  // Geografia - 2º Ano - 4º Bimestre
  "Aula 1: Atuação das sociedades na transformação de diferentes lugares e regiões": [
    {
      code: "EM13CHS401",
      fullText: "EM13CHS401 - Interpretar a atuação das sociedades na transformação de diferentes lugares e regiões",
      verb: "Interpretar",
      content: "a atuação das sociedades",
      context: "na transformação de diferentes lugares e regiões",
    },
  ],
  "Aula 2: Formação de diferentes populações e suas relações com o meio ambiente - Parte 1": [
    {
      code: "EM13CHS603",
      fullText: "EM13CHS603 - Analisar a formação de diferentes populações e suas relações com o meio ambiente e o espaço geográfico",
      verb: "Analisar",
      content: "a formação de diferentes populações",
      context: "e suas relações com o meio ambiente e o espaço geográfico",
    },
  ],
  "Aula 3: Formação de diferentes populações e suas relações com o meio ambiente - Parte 2": [
    {
      code: "EM13CHS603",
      fullText: "EM13CHS603 - Analisar a formação de diferentes populações e suas relações com o meio ambiente e o espaço geográfico",
      verb: "Analisar",
      content: "a formação de diferentes populações",
      context: "e suas relações com o meio ambiente e o espaço geográfico",
    },
  ],
  "Aula 4: Formação de diferentes populações e suas relações com o meio ambiente - Parte 3": [
    {
      code: "EM13CHS603",
      fullText: "EM13CHS603 - Analisar a formação de diferentes populações e suas relações com o meio ambiente e o espaço geográfico",
      verb: "Analisar",
      content: "a formação de diferentes populações",
      context: "e suas relações com o meio ambiente e o espaço geográfico",
    },
  ],
  "Aula 5: Formação de diferentes populações e suas relações com o meio ambiente - Parte 4": [
    {
      code: "EM13CHS603",
      fullText: "EM13CHS603 - Analisar a formação de diferentes populações e suas relações com o meio ambiente e o espaço geográfico",
      verb: "Analisar",
      content: "a formação de diferentes populações",
      context: "e suas relações com o meio ambiente e o espaço geográfico",
    },
  ],
  "Aula 6: Formação de diferentes populações e suas relações com o meio ambiente - Parte 5": [
    {
      code: "EM13CHS603",
      fullText: "EM13CHS603 - Analisar a formação de diferentes populações e suas relações com o meio ambiente e o espaço geográfico",
      verb: "Analisar",
      content: "a formação de diferentes populações",
      context: "e suas relações com o meio ambiente e o espaço geográfico",
    },
  ],
  "Aula 7: Processos de ocupação do espaço geográfico e consequências socioambientais - Parte 1": [
    {
      code: "EM13CHS204",
      fullText: "EM13CHS204 - Comparar diferentes processos de ocupação do espaço geográfico e suas consequências socioambientais",
      verb: "Comparar",
      content: "diferentes processos de ocupação",
      context: "do espaço geográfico e suas consequências socioambientais",
    },
  ],
  "Aula 8: Processos de ocupação do espaço geográfico e consequências socioambientais - Parte 2": [
    {
      code: "EM13CHS204",
      fullText: "EM13CHS204 - Comparar diferentes processos de ocupação do espaço geográfico e suas consequências socioambientais",
      verb: "Comparar",
      content: "diferentes processos de ocupação",
      context: "do espaço geográfico e suas consequências socioambientais",
    },
  ],
  "Aula 9: Processos de ocupação do espaço geográfico e consequências socioambientais - Parte 3": [
    {
      code: "EM13CHS204",
      fullText: "EM13CHS204 - Comparar diferentes processos de ocupação do espaço geográfico e suas consequências socioambientais",
      verb: "Comparar",
      content: "diferentes processos de ocupação",
      context: "do espaço geográfico e suas consequências socioambientais",
    },
  ],
  "Aula 10: Processos de ocupação do espaço geográfico e consequências socioambientais - Parte 4": [
    {
      code: "EM13CHS204",
      fullText: "EM13CHS204 - Comparar diferentes processos de ocupação do espaço geográfico e suas consequências socioambientais",
      verb: "Comparar",
      content: "diferentes processos de ocupação",
      context: "do espaço geográfico e suas consequências socioambientais",
    },
  ],
  "Aula 11: Transformações sociais e econômicas decorrentes da globalização - Parte 1": [
    {
      code: "EM13CHS402",
      fullText: "EM13CHS402 - Analisar as transformações sociais e econômicas decorrentes da globalização",
      verb: "Analisar",
      content: "as transformações sociais",
      context: "e econômicas decorrentes da globalização",
    },
  ],
  "Aula 12: Transformações sociais e econômicas decorrentes da globalização - Parte 2": [
    {
      code: "EM13CHS402",
      fullText: "EM13CHS402 - Analisar as transformações sociais e econômicas decorrentes da globalização",
      verb: "Analisar",
      content: "as transformações sociais",
      context: "e econômicas decorrentes da globalização",
    },
  ],
  "Aula 13: Transformações sociais e econômicas decorrentes da globalização - Parte 3": [
    {
      code: "EM13CHS402",
      fullText: "EM13CHS402 - Analisar as transformações sociais e econômicas decorrentes da globalização",
      verb: "Analisar",
      content: "as transformações sociais",
      context: "e econômicas decorrentes da globalização",
    },
  ],
  // Geografia - 3º Ano - 4º Bimestre
  "Aula 1: Formas de atuação social para redução da desigualdade, preconceito e violência - Parte 1": [
    {
      code: "EM13CHS503",
      fullText: "EM13CHS503 - Identificar formas de atuação social que contribuam para a redução da desigualdade, do preconceito e da violência",
      verb: "Identificar",
      content: "formas de atuação social",
      context: "que contribuam para a redução da desigualdade, do preconceito e da violência",
    },
  ],
  "Aula 2: Processos de produção e circulação de riquezas, mercadorias e pessoas - Parte 1": [
    {
      code: "EM13CHS601",
      fullText: "EM13CHS601 - Identificar os processos de produção e circulação de riquezas, mercadorias e pessoas",
      verb: "Identificar",
      content: "os processos de produção",
      context: "e circulação de riquezas, mercadorias e pessoas",
    },
  ],
  "Aula 3: Universalidade do conhecimento e relações entre ciência, tecnologia e sociedade": [
    {
      code: "EM13CHS306",
      fullText: "EM13CHS306 - Avaliar as pretensões de universalidade do conhecimento de modo a compreender as relações entre ciência, tecnologia e sociedade",
      verb: "Avaliar",
      content: "as pretensões de universalidade do conhecimento",
      context: "de modo a compreender as relações entre ciência, tecnologia e sociedade",
    },
  ],
  "Aula 4: Processos de produção e circulação de riquezas, mercadorias e pessoas - Parte 2": [
    {
      code: "EM13CHS601",
      fullText: "EM13CHS601 - Identificar os processos de produção e circulação de riquezas, mercadorias e pessoas",
      verb: "Identificar",
      content: "os processos de produção",
      context: "e circulação de riquezas, mercadorias e pessoas",
    },
  ],
  "Aula 5: Formas de atuação social para redução da desigualdade, preconceito e violência - Parte 2": [
    {
      code: "EM13CHS503",
      fullText: "EM13CHS503 - Identificar formas de atuação social que contribuam para a redução da desigualdade, do preconceito e da violência",
      verb: "Identificar",
      content: "formas de atuação social",
      context: "que contribuam para a redução da desigualdade, do preconceito e da violência",
    },
  ],
  "Aula 6: Formas de atuação social para redução da desigualdade, preconceito e violência - Parte 3": [
    {
      code: "EM13CHS503",
      fullText: "EM13CHS503 - Identificar formas de atuação social que contribuam para a redução da desigualdade, do preconceito e da violência",
      verb: "Identificar",
      content: "formas de atuação social",
      context: "que contribuam para a redução da desigualdade, do preconceito e da violência",
    },
  ],
  "Aula 7: Processos de produção e circulação de riquezas, mercadorias e pessoas - Parte 3": [
    {
      code: "EM13CHS601",
      fullText: "EM13CHS601 - Identificar os processos de produção e circulação de riquezas, mercadorias e pessoas",
      verb: "Identificar",
      content: "os processos de produção",
      context: "e circulação de riquezas, mercadorias e pessoas",
    },
  ],
  "Aula 8: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 1": [
    {
      code: "EM13CHS501",
      fullText: "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço",
      verb: "Analisar",
      content: "os fundamentos da ética",
      context: "nas diferentes culturas, tempo e espaço",
    },
  ],
  "Aula 9: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 2": [
    {
      code: "EM13CHS501",
      fullText: "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço",
      verb: "Analisar",
      content: "os fundamentos da ética",
      context: "nas diferentes culturas, tempo e espaço",
    },
  ],
  "Aula 10: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 3": [
    {
      code: "EM13CHS501",
      fullText: "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço",
      verb: "Analisar",
      content: "os fundamentos da ética",
      context: "nas diferentes culturas, tempo e espaço",
    },
  ],
  "Aula 11: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 4": [
    {
      code: "EM13CHS501",
      fullText: "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço",
      verb: "Analisar",
      content: "os fundamentos da ética",
      context: "nas diferentes culturas, tempo e espaço",
    },
  ],
  "Aula 12: Fundamentos da ética nas diferentes culturas, tempo e espaço - Parte 5": [
    {
      code: "EM13CHS501",
      fullText: "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço",
      verb: "Analisar",
      content: "os fundamentos da ética",
      context: "nas diferentes culturas, tempo e espaço",
    },
  ],
  // Matemática - 6º Ano - 4º Bimestre (Aulas 1 a 30)
  "Aula 1: Localização de pontos no plano cartesiano - Parte 1": [
    {
      code: "EF06MA16",
      fullText: "EF06MA16 - Associar pares ordenados de números à localização de pontos em um plano cartesiano",
      verb: "Associar",
      content: "pares ordenados de números",
      context: "à localização de pontos em um plano cartesiano",
    },
  ],
  "Aula 2: Localização de pontos no plano cartesiano - Parte 2": [
    {
      code: "EF06MA16",
      fullText: "EF06MA16 - Associar pares ordenados de números à localização de pontos em um plano cartesiano",
      verb: "Associar",
      content: "pares ordenados de números",
      context: "à localização de pontos em um plano cartesiano",
    },
  ],
  "Aula 3: Relações entre vértices, faces e arestas de prismas e pirâmides - Parte 1": [
    {
      code: "EF06MA17",
      fullText: "EF06MA17 - Quantificar e estabelecer relações entre o número de vértices, faces e arestas de prismas e pirâmides",
      verb: "Quantificar e estabelecer relações",
      content: "entre o número de vértices, faces e arestas de prismas e pirâmides",
      context: "em figuras geométricas espaciais",
    },
  ],
  "Aula 4: Relações entre vértices, faces e arestas de prismas e pirâmides - Parte 2": [
    {
      code: "EF06MA17",
      fullText: "EF06MA17 - Quantificar e estabelecer relações entre o número de vértices, faces e arestas de prismas e pirâmides",
      verb: "Quantificar e estabelecer relações",
      content: "entre o número de vértices, faces e arestas de prismas e pirâmides",
      context: "em figuras geométricas espaciais",
    },
  ],
  "Aula 5: Relações entre vértices, faces e arestas de prismas e pirâmides - Parte 3": [
    {
      code: "EF06MA17",
      fullText: "EF06MA17 - Quantificar e estabelecer relações entre o número de vértices, faces e arestas de prismas e pirâmides",
      verb: "Quantificar e estabelecer relações",
      content: "entre o número de vértices, faces e arestas de prismas e pirâmides",
      context: "em figuras geométricas espaciais",
    },
  ],
  "Aula 6: Relações entre vértices, faces e arestas de prismas e pirâmides - Parte 4": [
    {
      code: "EF06MA17",
      fullText: "EF06MA17 - Quantificar e estabelecer relações entre o número de vértices, faces e arestas de prismas e pirâmides",
      verb: "Quantificar e estabelecer relações",
      content: "entre o número de vértices, faces e arestas de prismas e pirâmides",
      context: "em figuras geométricas espaciais",
    },
  ],
  "Aula 7: Localização de pontos no plano cartesiano - Parte 3": [
    {
      code: "EF06MA16",
      fullText: "EF06MA16 - Associar pares ordenados de números à localização de pontos em um plano cartesiano",
      verb: "Associar",
      content: "pares ordenados de números",
      context: "à localização de pontos em um plano cartesiano",
    },
  ],
  "Aula 8: Plano cartesiano e relações em prismas e pirâmides - Parte 1": [
    {
      code: "EF06MA16",
      fullText: "EF06MA16 - Associar pares ordenados de números à localização de pontos em um plano cartesiano",
      verb: "Associar",
      content: "pares ordenados de números",
      context: "à localização de pontos em um plano cartesiano",
    },
    {
      code: "EF06MA17",
      fullText: "EF06MA17 - Quantificar e estabelecer relações entre o número de vértices, faces e arestas de prismas e pirâmides",
      verb: "Quantificar e estabelecer relações",
      content: "entre o número de vértices, faces e arestas de prismas e pirâmides",
      context: "em figuras geométricas espaciais",
    },
  ],
  "Aula 9: Plano cartesiano e relações em prismas e pirâmides - Parte 2": [
    {
      code: "EF06MA16",
      fullText: "EF06MA16 - Associar pares ordenados de números à localização de pontos em um plano cartesiano",
      verb: "Associar",
      content: "pares ordenados de números",
      context: "à localização de pontos em um plano cartesiano",
    },
    {
      code: "EF06MA17",
      fullText: "EF06MA17 - Quantificar e estabelecer relações entre o número de vértices, faces e arestas de prismas e pirâmides",
      verb: "Quantificar e estabelecer relações",
      content: "entre o número de vértices, faces e arestas de prismas e pirâmides",
      context: "em figuras geométricas espaciais",
    },
  ],
  "Aula 10: Plano cartesiano e relações em prismas e pirâmides - Parte 3": [
    {
      code: "EF06MA16",
      fullText: "EF06MA16 - Associar pares ordenados de números à localização de pontos em um plano cartesiano",
      verb: "Associar",
      content: "pares ordenados de números",
      context: "à localização de pontos em um plano cartesiano",
    },
    {
      code: "EF06MA17",
      fullText: "EF06MA17 - Quantificar e estabelecer relações entre o número de vértices, faces e arestas de prismas e pirâmides",
      verb: "Quantificar e estabelecer relações",
      content: "entre o número de vértices, faces e arestas de prismas e pirâmides",
      context: "em figuras geométricas espaciais",
    },
  ],
  "Aula 11: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 1": [
    {
      code: "EF06MA24",
      fullText: "EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo grandezas como comprimento, massa, tempo e temperatura",
    },
  ],
  "Aula 12: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 2": [
    {
      code: "EF06MA24",
      fullText: "EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo grandezas como comprimento, massa, tempo e temperatura",
    },
  ],
  "Aula 13: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 3": [
    {
      code: "EF06MA24",
      fullText: "EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo grandezas como comprimento, massa, tempo e temperatura",
    },
  ],
  "Aula 14: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 4": [
    {
      code: "EF06MA24",
      fullText: "EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo grandezas como comprimento, massa, tempo e temperatura",
    },
  ],
  "Aula 15: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 5": [
    {
      code: "EF06MA24",
      fullText: "EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo grandezas como comprimento, massa, tempo e temperatura",
    },
  ],
  "Aula 16: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 6": [
    {
      code: "EF06MA24",
      fullText: "EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo grandezas como comprimento, massa, tempo e temperatura",
    },
  ],
  "Aula 17: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 7": [
    {
      code: "EF06MA24",
      fullText: "EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo grandezas como comprimento, massa, tempo e temperatura",
    },
  ],
  "Aula 18: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 8": [
    {
      code: "EF06MA24",
      fullText: "EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo grandezas como comprimento, massa, tempo e temperatura",
    },
  ],
  "Aula 19: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 9": [
    {
      code: "EF06MA24",
      fullText: "EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo grandezas como comprimento, massa, tempo e temperatura",
    },
  ],
  "Aula 20: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 10": [
    {
      code: "EF06MA24",
      fullText: "EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo grandezas como comprimento, massa, tempo e temperatura",
    },
  ],
  "Aula 21: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 11": [
    {
      code: "EF06MA24",
      fullText: "EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo grandezas como comprimento, massa, tempo e temperatura",
    },
  ],
  "Aula 22: MDC, MMC e problemas envolvendo grandezas - Parte 1": [
    {
      code: "EF06MA03",
      fullText: "EF06MA03 - Resolver problemas envolvendo o cálculo do máximo divisor comum ou do mínimo múltiplo comum",
      verb: "Resolver",
      content: "problemas",
      context: "envolvendo o cálculo do máximo divisor comum ou do mínimo múltiplo comum",
    },
    {
      code: "EF06MA24",
      fullText: "EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo grandezas como comprimento, massa, tempo e temperatura",
    },
  ],
  "Aula 23: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 12": [
    {
      code: "EF06MA24",
      fullText: "EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo grandezas como comprimento, massa, tempo e temperatura",
    },
  ],
  "Aula 24: MDC, MMC e problemas envolvendo grandezas - Parte 2": [
    {
      code: "EF06MA03",
      fullText: "EF06MA03 - Resolver problemas envolvendo o cálculo do máximo divisor comum ou do mínimo múltiplo comum",
      verb: "Resolver",
      content: "problemas",
      context: "envolvendo o cálculo do máximo divisor comum ou do mínimo múltiplo comum",
    },
    {
      code: "EF06MA24",
      fullText: "EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo grandezas como comprimento, massa, tempo e temperatura",
    },
  ],
  "Aula 25: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 13": [
    {
      code: "EF06MA24",
      fullText: "EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo grandezas como comprimento, massa, tempo e temperatura",
    },
  ],
  "Aula 26: MDC, MMC e problemas envolvendo grandezas - Parte 3": [
    {
      code: "EF06MA03",
      fullText: "EF06MA03 - Resolver problemas envolvendo o cálculo do máximo divisor comum ou do mínimo múltiplo comum",
      verb: "Resolver",
      content: "problemas",
      context: "envolvendo o cálculo do máximo divisor comum ou do mínimo múltiplo comum",
    },
    {
      code: "EF06MA24",
      fullText: "EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo grandezas como comprimento, massa, tempo e temperatura",
    },
  ],
  "Aula 27: MDC, MMC e problemas envolvendo grandezas - Parte 4": [
    {
      code: "EF06MA03",
      fullText: "EF06MA03 - Resolver problemas envolvendo o cálculo do máximo divisor comum ou do mínimo múltiplo comum",
      verb: "Resolver",
      content: "problemas",
      context: "envolvendo o cálculo do máximo divisor comum ou do mínimo múltiplo comum",
    },
    {
      code: "EF06MA24",
      fullText: "EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo grandezas como comprimento, massa, tempo e temperatura",
    },
  ],
  "Aula 28: MDC, MMC e problemas envolvendo grandezas - Parte 5": [
    {
      code: "EF06MA03",
      fullText: "EF06MA03 - Resolver problemas envolvendo o cálculo do máximo divisor comum ou do mínimo múltiplo comum",
      verb: "Resolver",
      content: "problemas",
      context: "envolvendo o cálculo do máximo divisor comum ou do mínimo múltiplo comum",
    },
    {
      code: "EF06MA24",
      fullText: "EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo grandezas como comprimento, massa, tempo e temperatura",
    },
  ],
  "Aula 29: MDC, MMC e problemas envolvendo grandezas - Parte 6": [
    {
      code: "EF06MA03",
      fullText: "EF06MA03 - Resolver problemas envolvendo o cálculo do máximo divisor comum ou do mínimo múltiplo comum",
      verb: "Resolver",
      content: "problemas",
      context: "envolvendo o cálculo do máximo divisor comum ou do mínimo múltiplo comum",
    },
    {
      code: "EF06MA24",
      fullText: "EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo grandezas como comprimento, massa, tempo e temperatura",
    },
  ],
  "Aula 30: Problemas envolvendo grandezas de comprimento, massa, tempo e temperatura - Parte 14": [
    {
      code: "EF06MA24",
      fullText: "EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo grandezas como comprimento, massa, tempo e temperatura",
    },
  ],
  // Matemática - 7º Ano - 4º Bimestre (Aulas 1 a 30)
  "Aula 1: Medida da área de figuras geométricas utilizando expressões de cálculo - Parte 1": [
    {
      code: "EF07MA27",
      fullText: "EF07MA27 - Resolver e elaborar problemas envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo",
    },
  ],
  "Aula 2: Medida da área de figuras geométricas utilizando expressões de cálculo - Parte 2": [
    {
      code: "EF07MA27",
      fullText: "EF07MA27 - Resolver e elaborar problemas envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo",
    },
  ],
  "Aula 3: Medida da área de figuras geométricas utilizando expressões de cálculo - Parte 3": [
    {
      code: "EF07MA27",
      fullText: "EF07MA27 - Resolver e elaborar problemas envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo",
    },
  ],
  "Aula 4: Medida da área de figuras geométricas utilizando expressões de cálculo - Parte 4": [
    {
      code: "EF07MA27",
      fullText: "EF07MA27 - Resolver e elaborar problemas envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo",
    },
  ],
  "Aula 5: Medida da área de figuras geométricas utilizando expressões de cálculo - Parte 5": [
    {
      code: "EF07MA27",
      fullText: "EF07MA27 - Resolver e elaborar problemas envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo",
    },
  ],
  "Aula 6: Medida da área de figuras geométricas utilizando expressões de cálculo - Parte 6": [
    {
      code: "EF07MA27",
      fullText: "EF07MA27 - Resolver e elaborar problemas envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo",
    },
  ],
  "Aula 7: Medida da área de figuras geométricas utilizando expressões de cálculo - Parte 7": [
    {
      code: "EF07MA27",
      fullText: "EF07MA27 - Resolver e elaborar problemas envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo",
    },
  ],
  "Aula 8: Medida da área de figuras geométricas utilizando expressões de cálculo - Parte 8": [
    {
      code: "EF07MA27",
      fullText: "EF07MA27 - Resolver e elaborar problemas envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo",
    },
  ],
  "Aula 9: Medida da área de figuras geométricas utilizando expressões de cálculo - Parte 9": [
    {
      code: "EF07MA27",
      fullText: "EF07MA27 - Resolver e elaborar problemas envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo",
    },
  ],
  "Aula 10: Medida da área de figuras geométricas utilizando expressões de cálculo - Parte 10": [
    {
      code: "EF07MA27",
      fullText: "EF07MA27 - Resolver e elaborar problemas envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo",
    },
  ],
  "Aula 11: Variação de grandezas diretamente e inversamente proporcionais - Parte 1": [
    {
      code: "EF07MA17",
      fullText: "EF07MA17 - Resolver e elaborar problemas que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
    },
  ],
  "Aula 12: Variação de grandezas diretamente e inversamente proporcionais - Parte 2": [
    {
      code: "EF07MA17",
      fullText: "EF07MA17 - Resolver e elaborar problemas que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
    },
  ],
  "Aula 13: Variação de grandezas diretamente e inversamente proporcionais - Parte 3": [
    {
      code: "EF07MA17",
      fullText: "EF07MA17 - Resolver e elaborar problemas que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
    },
  ],
  "Aula 14: Variação de grandezas diretamente e inversamente proporcionais - Parte 4": [
    {
      code: "EF07MA17",
      fullText: "EF07MA17 - Resolver e elaborar problemas que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
    },
  ],
  "Aula 15: Variação de grandezas diretamente e inversamente proporcionais - Parte 5": [
    {
      code: "EF07MA17",
      fullText: "EF07MA17 - Resolver e elaborar problemas que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
    },
  ],
  "Aula 16: Variação de grandezas diretamente e inversamente proporcionais - Parte 6": [
    {
      code: "EF07MA17",
      fullText: "EF07MA17 - Resolver e elaborar problemas que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
    },
  ],
  "Aula 17: Variação de grandezas diretamente e inversamente proporcionais - Parte 7": [
    {
      code: "EF07MA17",
      fullText: "EF07MA17 - Resolver e elaborar problemas que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
    },
  ],
  "Aula 18: Variação de grandezas diretamente e inversamente proporcionais - Parte 8": [
    {
      code: "EF07MA17",
      fullText: "EF07MA17 - Resolver e elaborar problemas que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
    },
  ],
  "Aula 19: Variação de grandezas diretamente e inversamente proporcionais - Parte 9": [
    {
      code: "EF07MA17",
      fullText: "EF07MA17 - Resolver e elaborar problemas que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
    },
  ],
  "Aula 20: Variação de grandezas diretamente e inversamente proporcionais - Parte 10": [
    {
      code: "EF07MA17",
      fullText: "EF07MA17 - Resolver e elaborar problemas que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
    },
  ],
  "Aula 21: Problemas com números inteiros e operações fundamentais - Parte 1": [
    {
      code: "EF07MA02",
      fullText: "EF07MA02 - Resolver e elaborar problemas com números inteiros, envolvendo as operações fundamentais",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "com números inteiros, envolvendo as operações fundamentais",
    },
  ],
  "Aula 22: Problemas com números inteiros e operações fundamentais - Parte 2": [
    {
      code: "EF07MA02",
      fullText: "EF07MA02 - Resolver e elaborar problemas com números inteiros, envolvendo as operações fundamentais",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "com números inteiros, envolvendo as operações fundamentais",
    },
  ],
  "Aula 23: Problemas com números inteiros e operações fundamentais - Parte 3": [
    {
      code: "EF07MA02",
      fullText: "EF07MA02 - Resolver e elaborar problemas com números inteiros, envolvendo as operações fundamentais",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "com números inteiros, envolvendo as operações fundamentais",
    },
  ],
  "Aula 24: Problemas com números inteiros e operações fundamentais - Parte 4": [
    {
      code: "EF07MA02",
      fullText: "EF07MA02 - Resolver e elaborar problemas com números inteiros, envolvendo as operações fundamentais",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "com números inteiros, envolvendo as operações fundamentais",
    },
  ],
  "Aula 25: Problemas com números inteiros e operações fundamentais - Parte 5": [
    {
      code: "EF07MA02",
      fullText: "EF07MA02 - Resolver e elaborar problemas com números inteiros, envolvendo as operações fundamentais",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "com números inteiros, envolvendo as operações fundamentais",
    },
  ],
  "Aula 26: Problemas com números inteiros e operações fundamentais - Parte 6": [
    {
      code: "EF07MA02",
      fullText: "EF07MA02 - Resolver e elaborar problemas com números inteiros, envolvendo as operações fundamentais",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "com números inteiros, envolvendo as operações fundamentais",
    },
  ],
  "Aula 27: Problemas com números inteiros e operações fundamentais - Parte 7": [
    {
      code: "EF07MA02",
      fullText: "EF07MA02 - Resolver e elaborar problemas com números inteiros, envolvendo as operações fundamentais",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "com números inteiros, envolvendo as operações fundamentais",
    },
  ],
  "Aula 28: Problemas com números inteiros e operações fundamentais - Parte 8": [
    {
      code: "EF07MA02",
      fullText: "EF07MA02 - Resolver e elaborar problemas com números inteiros, envolvendo as operações fundamentais",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "com números inteiros, envolvendo as operações fundamentais",
    },
  ],
  "Aula 29: Problemas com números inteiros e operações fundamentais - Parte 9": [
    {
      code: "EF07MA02",
      fullText: "EF07MA02 - Resolver e elaborar problemas com números inteiros, envolvendo as operações fundamentais",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "com números inteiros, envolvendo as operações fundamentais",
    },
  ],
  "Aula 30: Problemas com números inteiros e operações fundamentais - Parte 10": [
    {
      code: "EF07MA02",
      fullText: "EF07MA02 - Resolver e elaborar problemas com números inteiros, envolvendo as operações fundamentais",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "com números inteiros, envolvendo as operações fundamentais",
    },
  ],
  // Matemática - 8º Ano - 4º Bimestre (Aulas 1 a 30)
  "Aula 1: Probabilidade de eventos e contagem de casos possíveis - Parte 1": [
    {
      code: "EF08MA22",
      fullText: "EF08MA22 - Calcular a probabilidade de eventos, com base na construção do espaço amostral, utilizando o princípio multiplicativo, e reconhecer que a soma das probabilidades de todos os elementos do espaço amostral é igual a 1.",
      verb: "Calcular",
      content: "a probabilidade de eventos",
      context: "com base em experimentos aleatórios ou na contagem dos casos possíveis",
    },
  ],
  "Aula 2: Medidas de tendência central e dispersão - Parte 1": [
    {
      code: "EF08MA25",
      fullText: "EF08MA25 - Obter os valores de medidas de tendência central e de dispersão em um conjunto de dados estatísticos",
      verb: "Obter",
      content: "os valores de medidas de tendência central",
      context: "e de dispersão em um conjunto de dados estatísticos",
    },
  ],
  "Aula 3: Conceito de frequência e tabelas e gráficos estatísticos - Parte 1": [
    {
      code: "EF07MA35",
      fullText: "EF07MA35 - Compreender o conceito de frequência e sua representação em tabelas e gráficos estatísticos",
      verb: "Compreender",
      content: "o conceito de frequência",
      context: "e sua representação em tabelas e gráficos estatísticos",
    },
  ],
  "Aula 4: Medidas de tendência central e dispersão - Parte 2": [
    {
      code: "EF08MA25",
      fullText: "EF08MA25 - Obter os valores de medidas de tendência central e de dispersão em um conjunto de dados estatísticos",
      verb: "Obter",
      content: "os valores de medidas de tendência central",
      context: "e de dispersão em um conjunto de dados estatísticos",
    },
  ],
  "Aula 5: Medidas de tendência central e dispersão - Parte 3": [
    {
      code: "EF08MA25",
      fullText: "EF08MA25 - Obter os valores de medidas de tendência central e de dispersão em um conjunto de dados estatísticos",
      verb: "Obter",
      content: "os valores de medidas de tendência central",
      context: "e de dispersão em um conjunto de dados estatísticos",
    },
  ],
  "Aula 6: Medidas de tendência central e dispersão - Parte 4": [
    {
      code: "EF08MA25",
      fullText: "EF08MA25 - Obter os valores de medidas de tendência central e de dispersão em um conjunto de dados estatísticos",
      verb: "Obter",
      content: "os valores de medidas de tendência central",
      context: "e de dispersão em um conjunto de dados estatísticos",
    },
  ],
  "Aula 7: Cálculo de probabilidade em experimentos aleatórios - Parte 1": [
    {
      code: "EF07MA36",
      fullText: "EF07MA36 - Resolver e elaborar problemas envolvendo o cálculo de probabilidade de eventos em experimentos aleatórios",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo o cálculo de probabilidade de eventos em experimentos aleatórios",
    },
  ],
  "Aula 8: Cálculo de probabilidade em experimentos aleatórios - Parte 2": [
    {
      code: "EF07MA36",
      fullText: "EF07MA36 - Resolver e elaborar problemas envolvendo o cálculo de probabilidade de eventos em experimentos aleatórios",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo o cálculo de probabilidade de eventos em experimentos aleatórios",
    },
  ],
  "Aula 9: Medidas de tendência central e dispersão - Parte 5": [
    {
      code: "EF08MA25",
      fullText: "EF08MA25 - Obter os valores de medidas de tendência central e de dispersão em um conjunto de dados estatísticos",
      verb: "Obter",
      content: "os valores de medidas de tendência central",
      context: "e de dispersão em um conjunto de dados estatísticos",
    },
  ],
  "Aula 10: Medidas de tendência central e dispersão - Parte 6": [
    {
      code: "EF08MA25",
      fullText: "EF08MA25 - Obter os valores de medidas de tendência central e de dispersão em um conjunto de dados estatísticos",
      verb: "Obter",
      content: "os valores de medidas de tendência central",
      context: "e de dispersão em um conjunto de dados estatísticos",
    },
  ],
  "Aula 11: Variação de grandezas diretamente e inversamente proporcionais - Parte 11": [
    {
      code: "EF07MA17",
      fullText: "EF07MA17 - Resolver e elaborar problemas que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
    },
  ],
  "Aula 12: Simetria de reflexão, rotação e translação - Parte 1": [
    {
      code: "EF08MA12",
      fullText: "EF08MA12 - Identificar a simetria de reflexão, rotação e translação em figuras planas e no plano cartesiano",
      verb: "Identificar",
      content: "a simetria de reflexão",
      context: "rotação e translação em figuras planas e no plano cartesiano",
    },
  ],
  "Aula 13: Simetria de reflexão, rotação e translação - Parte 2": [
    {
      code: "EF08MA12",
      fullText: "EF08MA12 - Identificar a simetria de reflexão, rotação e translação em figuras planas e no plano cartesiano",
      verb: "Identificar",
      content: "a simetria de reflexão",
      context: "rotação e translação em figuras planas e no plano cartesiano",
    },
  ],
  "Aula 14: Simetria de reflexão, rotação e translação - Parte 3": [
    {
      code: "EF08MA12",
      fullText: "EF08MA12 - Identificar a simetria de reflexão, rotação e translação em figuras planas e no plano cartesiano",
      verb: "Identificar",
      content: "a simetria de reflexão",
      context: "rotação e translação em figuras planas e no plano cartesiano",
    },
  ],
  "Aula 15: Simetria de reflexão, rotação e translação - Parte 4": [
    {
      code: "EF08MA12",
      fullText: "EF08MA12 - Identificar a simetria de reflexão, rotação e translação em figuras planas e no plano cartesiano",
      verb: "Identificar",
      content: "a simetria de reflexão",
      context: "rotação e translação em figuras planas e no plano cartesiano",
    },
  ],
  "Aula 16: Transformações geométricas e propriedades de figuras planas - Parte 1": [
    {
      code: "EF08MA13",
      fullText: "EF08MA13 - Demonstrar propriedades de figuras geométricas planas, utilizando transformações geométricas",
      verb: "Demonstrar",
      content: "propriedades de figuras geométricas",
      context: "planas, utilizando transformações geométricas",
    },
  ],
  "Aula 17: Transformações geométricas e propriedades de figuras planas - Parte 2": [
    {
      code: "EF08MA13",
      fullText: "EF08MA13 - Demonstrar propriedades de figuras geométricas planas, utilizando transformações geométricas",
      verb: "Demonstrar",
      content: "propriedades de figuras geométricas",
      context: "planas, utilizando transformações geométricas",
    },
  ],
  "Aula 18: Transformações geométricas e propriedades de figuras planas - Parte 3": [
    {
      code: "EF08MA13",
      fullText: "EF08MA13 - Demonstrar propriedades de figuras geométricas planas, utilizando transformações geométricas",
      verb: "Demonstrar",
      content: "propriedades de figuras geométricas",
      context: "planas, utilizando transformações geométricas",
    },
  ],
  "Aula 19: Transformações geométricas e propriedades de figuras planas - Parte 4": [
    {
      code: "EF08MA13",
      fullText: "EF08MA13 - Demonstrar propriedades de figuras geométricas planas, utilizando transformações geométricas",
      verb: "Demonstrar",
      content: "propriedades de figuras geométricas",
      context: "planas, utilizando transformações geométricas",
    },
  ],
  "Aula 20: Transformações geométricas e propriedades de figuras planas - Parte 5": [
    {
      code: "EF08MA13",
      fullText: "EF08MA13 - Demonstrar propriedades de figuras geométricas planas, utilizando transformações geométricas",
      verb: "Demonstrar",
      content: "propriedades de figuras geométricas",
      context: "planas, utilizando transformações geométricas",
    },
  ],
  "Aula 21: Transformações geométricas e propriedades de figuras planas - Parte 6": [
    {
      code: "EF08MA13",
      fullText: "EF08MA13 - Demonstrar propriedades de figuras geométricas planas, utilizando transformações geométricas",
      verb: "Demonstrar",
      content: "propriedades de figuras geométricas",
      context: "planas, utilizando transformações geométricas",
    },
  ],
  "Aula 22: Operações fundamentais com números inteiros - Parte 1": [
    {
      code: "EF07MA02",
      fullText: "EF07MA02 - Resolver e elaborar problemas com números inteiros, envolvendo as operações fundamentais",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "com números inteiros, envolvendo as operações fundamentais",
    },
  ],
  "Aula 23: Operações com números racionais fracionários e decimais - Parte 1": [
    {
      code: "EF08MA04",
      fullText: "EF08MA04 - Resolver e elaborar problemas com números racionais na representação fracionária e decimal",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "com números racionais na representação fracionária e decimal",
    },
  ],
  "Aula 24: Operações com números racionais fracionários e decimais - Parte 2": [
    {
      code: "EF08MA04",
      fullText: "EF08MA04 - Resolver e elaborar problemas com números racionais na representação fracionária e decimal",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "com números racionais na representação fracionária e decimal",
    },
  ],
  "Aula 25: Operações com números racionais fracionários e decimais - Parte 3": [
    {
      code: "EF08MA04",
      fullText: "EF08MA04 - Resolver e elaborar problemas com números racionais na representação fracionária e decimal",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "com números racionais na representação fracionária e decimal",
    },
  ],
  "Aula 26: Operações com números racionais fracionários e decimais - Parte 4": [
    {
      code: "EF08MA04",
      fullText: "EF08MA04 - Resolver e elaborar problemas com números racionais na representação fracionária e decimal",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "com números racionais na representação fracionária e decimal",
    },
  ],
  "Aula 27: Operações com números racionais fracionários e decimais - Parte 5": [
    {
      code: "EF08MA04",
      fullText: "EF08MA04 - Resolver e elaborar problemas com números racionais na representação fracionária e decimal",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "com números racionais na representação fracionária e decimal",
    },
  ],
  "Aula 28: Operações com números racionais fracionários e decimais - Parte 6": [
    {
      code: "EF08MA04",
      fullText: "EF08MA04 - Resolver e elaborar problemas com números racionais na representação fracionária e decimal",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "com números racionais na representação fracionária e decimal",
    },
  ],
  "Aula 29: Operações com números racionais fracionários e decimais - Parte 7": [
    {
      code: "EF08MA04",
      fullText: "EF08MA04 - Resolver e elaborar problemas com números racionais na representação fracionária e decimal",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "com números racionais na representação fracionária e decimal",
    },
  ],
  "Aula 30: Operações com números racionais fracionários e decimais - Parte 8": [
    {
      code: "EF08MA04",
      fullText: "EF08MA04 - Resolver e elaborar problemas com números racionais na representação fracionária e decimal",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "com números racionais na representação fracionária e decimal",
    },
  ],
  // Matemática - 9º Ano - 4º Bimestre (Aulas 1 a 30)
  "Aula 1: Volume de prismas retos e decomposição - Parte 1": [
    {
      code: "EF08MA19",
      fullText: "EF08MA19 - Resolver e elaborar problemas envolvendo medidas de volume de prismas retos, por meio de composições e decomposições",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo medidas de volume de prismas retos, por meio de composições e decomposições",
    },
  ],
  "Aula 2: Volume de prismas retos e decomposição - Parte 2": [
    {
      code: "EF08MA19",
      fullText: "EF08MA19 - Resolver e elaborar problemas envolvendo medidas de volume de prismas retos, por meio de composições e decomposições",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo medidas de volume de prismas retos, por meio de composições e decomposições",
    },
  ],
  "Aula 3: Volume de prismas retos e decomposição - Parte 3": [
    {
      code: "EF08MA19",
      fullText: "EF08MA19 - Resolver e elaborar problemas envolvendo medidas de volume de prismas retos, por meio de composições e decomposições",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo medidas de volume de prismas retos, por meio de composições e decomposições",
    },
  ],
  "Aula 4: Volume de prismas retos e decomposição - Parte 4": [
    {
      code: "EF08MA19",
      fullText: "EF08MA19 - Resolver e elaborar problemas envolvendo medidas de volume de prismas retos, por meio de composições e decomposições",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo medidas de volume de prismas retos, por meio de composições e decomposições",
    },
  ],
  "Aula 5: Volume de prismas retos e decomposição - Parte 5": [
    {
      code: "EF08MA19",
      fullText: "EF08MA19 - Resolver e elaborar problemas envolvendo medidas de volume de prismas retos, por meio de composições e decomposições",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo medidas de volume de prismas retos, por meio de composições e decomposições",
    },
  ],
  "Aula 6: Relação entre volume e capacidade de recipientes - Parte 1": [
    {
      code: "EF07MA33",
      fullText: "EF07MA33 - Estabelecer a relação entre o volume e a capacidade de recipientes por meio de transformações de unidades",
      verb: "Estabelecer",
      content: "a relação entre o volume",
      context: "e a capacidade de recipientes por meio de transformações de unidades",
    },
  ],
  "Aula 7: Medidas de volume de corpos e recipientes complexos - Parte 1": [
    {
      code: "EF09MA11",
      fullText: "EF09MA11 - Resolver e elaborar problemas envolvendo medidas de volume de corpos e recipientes complexos",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo medidas de volume de corpos e recipientes complexos",
    },
  ],
  "Aula 8: Medidas de volume de corpos e recipientes complexos - Parte 2": [
    {
      code: "EF09MA11",
      fullText: "EF09MA11 - Resolver e elaborar problemas envolvendo medidas de volume de corpos e recipientes complexos",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo medidas de volume de corpos e recipientes complexos",
    },
  ],
  "Aula 9: Volume de prismas retos e decomposição - Parte 6": [
    {
      code: "EF08MA19",
      fullText: "EF08MA19 - Resolver e elaborar problemas envolvendo medidas de volume de prismas retos, por meio de composições e decomposições",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "envolvendo medidas de volume de prismas retos, por meio de composições e decomposições",
    },
  ],
  "Aula 10: Relação entre volume e capacidade de recipientes - Parte 2": [
    {
      code: "EF07MA33",
      fullText: "EF07MA33 - Estabelecer a relação entre o volume e a capacidade de recipientes por meio de transformações de unidades",
      verb: "Estabelecer",
      content: "a relação entre o volume",
      context: "e a capacidade de recipientes por meio de transformações de unidades",
    },
  ],
  "Aula 11: Coleta de dados estatísticos em diferentes contextos - Parte 1": [
    {
      code: "EF07MA34",
      fullText: "EF07MA34 - Planejar e realizar pesquisa envolvendo a coleta de dados estatísticos em diferentes contextos",
      verb: "Planejar",
      content: "e realizar pesquisa",
      context: "envolvendo a coleta de dados estatísticos em diferentes contextos",
    },
  ],
  "Aula 12: Estimar e medir volumes de prismas e cilindros - Parte 1": [
    {
      code: "EF08MA30",
      fullText: "EF08MA30 - Estimar e medir volumes de prismas e cilindros por meio de aproximações",
      verb: "Estimar",
      content: "e medir volumes",
      context: "de prismas e cilindros por meio de aproximações",
    },
  ],
  "Aula 13: Probabilidade de eventos compostos e princípio multiplicativo - Parte 1": [
    {
      code: "EF09MA20",
      fullText: "EF09MA20 - Analisar e estabelecer a probabilidade de eventos compostos utilizando o princípio multiplicativo",
      verb: "Analisar",
      content: "e estabelecer a probabilidade",
      context: "de eventos compostos utilizando o princípio multiplicativo",
    },
  ],
  "Aula 14: Probabilidade de eventos compostos e princípio multiplicativo - Parte 2": [
    {
      code: "EF09MA20",
      fullText: "EF09MA20 - Analisar e estabelecer a probabilidade de eventos compostos utilizando o princípio multiplicativo",
      verb: "Analisar",
      content: "e estabelecer a probabilidade",
      context: "de eventos compostos utilizando o princípio multiplicativo",
    },
  ],
  "Aula 15: Probabilidade de eventos compostos e princípio multiplicativo - Parte 3": [
    {
      code: "EF09MA20",
      fullText: "EF09MA20 - Analisar e estabelecer a probabilidade de eventos compostos utilizando o princípio multiplicativo",
      verb: "Analisar",
      content: "e estabelecer a probabilidade",
      context: "de eventos compostos utilizando o princípio multiplicativo",
    },
  ],
  "Aula 16: Probabilidade de eventos compostos e princípio multiplicativo - Parte 4": [
    {
      code: "EF09MA20",
      fullText: "EF09MA20 - Analisar e estabelecer a probabilidade de eventos compostos utilizando o princípio multiplicativo",
      verb: "Analisar",
      content: "e estabelecer a probabilidade",
      context: "de eventos compostos utilizando o princípio multiplicativo",
    },
  ],
  "Aula 17: Probabilidade de eventos compostos e princípio multiplicativo - Parte 5": [
    {
      code: "EF09MA20",
      fullText: "EF09MA20 - Analisar e estabelecer a probabilidade de eventos compostos utilizando o princípio multiplicativo",
      verb: "Analisar",
      content: "e estabelecer a probabilidade",
      context: "de eventos compostos utilizando o princípio multiplicativo",
    },
  ],
  "Aula 18: Probabilidade de eventos compostos e princípio multiplicativo - Parte 6": [
    {
      code: "EF09MA20",
      fullText: "EF09MA20 - Analisar e estabelecer a probabilidade de eventos compostos utilizando o princípio multiplicativo",
      verb: "Analisar",
      content: "e estabelecer a probabilidade",
      context: "de eventos compostos utilizando o princípio multiplicativo",
    },
  ],
  "Aula 19: Probabilidade de eventos simples e compostos - Parte 1": [
    {
      code: "EF08MA22",
      fullText: "EF08MA22 - Calcular a probabilidade de eventos, com base na construção do espaço amostral, utilizando o princípio multiplicativo, e reconhecer que a soma das probabilidades de todos os elementos do espaço amostral é igual a 1.",
      verb: "Calcular",
      content: "a probabilidade de eventos",
      context: "com base em experimentos aleatórios ou na contagem dos casos possíveis",
    },
    {
      code: "EF09MA20",
      fullText: "EF09MA20 - Analisar e estabelecer a probabilidade de eventos compostos utilizando o princípio multiplicativo",
      verb: "Analisar",
      content: "e estabelecer a probabilidade",
      context: "de eventos compostos utilizando o princípio multiplicativo",
    },
  ],
  "Aula 20: Probabilidade de eventos e contagem de casos - Parte 2": [
    {
      code: "EF08MA22",
      fullText: "EF08MA22 - Calcular a probabilidade de eventos, com base na construção do espaço amostral, utilizando o princípio multiplicativo, e reconhecer que a soma das probabilidades de todos os elementos do espaço amostral é igual a 1.",
      verb: "Calcular",
      content: "a probabilidade de eventos",
      context: "com base em experimentos aleatórios ou na contagem dos casos possíveis",
    },
  ],
  "Aula 21: Simetria de reflexão, rotação e translação - Parte 5": [
    {
      code: "EF08MA12",
      fullText: "EF08MA12 - Identificar a simetria de reflexão, rotação e translação em figuras planas e no plano cartesiano",
      verb: "Identificar",
      content: "a simetria de reflexão",
      context: "rotação e translação em figuras planas e no plano cartesiano",
    },
  ],
  "Aula 22: Simetria de reflexão, rotação e translação - Parte 6": [
    {
      code: "EF08MA12",
      fullText: "EF08MA12 - Identificar a simetria de reflexão, rotação e translação em figuras planas e no plano cartesiano",
      verb: "Identificar",
      content: "a simetria de reflexão",
      context: "rotação e translação em figuras planas e no plano cartesiano",
    },
  ],
  "Aula 23: Razão de semelhança em figuras planas e homotetias - Parte 1": [
    {
      code: "EF09MA08",
      fullText: "EF09MA08 - Resolver e elaborar problemas que envolvam a razão de semelhança em figuras geométricas planas e homotetias",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "que envolvam a razão de semelhança em figuras geométricas planas e homotetias",
    },
  ],
  "Aula 24: Razão de semelhança em figuras planas e homotetias - Parte 2": [
    {
      code: "EF09MA08",
      fullText: "EF09MA08 - Resolver e elaborar problemas que envolvam a razão de semelhança em figuras geométricas planas e homotetias",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "que envolvam a razão de semelhança em figuras geométricas planas e homotetias",
    },
  ],
  "Aula 25: Razão de semelhança em figuras planas e homotetias - Parte 3": [
    {
      code: "EF09MA08",
      fullText: "EF09MA08 - Resolver e elaborar problemas que envolvam a razão de semelhança em figuras geométricas planas e homotetias",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "que envolvam a razão de semelhança em figuras geométricas planas e homotetias",
    },
  ],
  "Aula 26: Simetria de reflexão, rotação e translação - Parte 7": [
    {
      code: "EF08MA12",
      fullText: "EF08MA12 - Identificar a simetria de reflexão, rotação e translação em figuras planas e no plano cartesiano",
      verb: "Identificar",
      content: "a simetria de reflexão",
      context: "rotação e translação em figuras planas e no plano cartesiano",
    },
  ],
  "Aula 27: Razão de semelhança em figuras planas e homotetias - Parte 4": [
    {
      code: "EF09MA08",
      fullText: "EF09MA08 - Resolver e elaborar problemas que envolvam a razão de semelhança em figuras geométricas planas e homotetias",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "que envolvam a razão de semelhança em figuras geométricas planas e homotetias",
    },
  ],
  "Aula 28: Razão de semelhança em figuras planas e homotetias - Parte 5": [
    {
      code: "EF09MA08",
      fullText: "EF09MA08 - Resolver e elaborar problemas que envolvam a razão de semelhança em figuras geométricas planas e homotetias",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "que envolvam a razão de semelhança em figuras geométricas planas e homotetias",
    },
  ],
  "Aula 29: Razão de semelhança em figuras planas e homotetias - Parte 6": [
    {
      code: "EF09MA08",
      fullText: "EF09MA08 - Resolver e elaborar problemas que envolvam a razão de semelhança em figuras geométricas planas e homotetias",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "que envolvam a razão de semelhança em figuras geométricas planas e homotetias",
    },
  ],
  "Aula 30: Razão de semelhança em figuras planas e homotetias - Parte 7": [
    {
      code: "EF09MA08",
      fullText: "EF09MA08 - Resolver e elaborar problemas que envolvam a razão de semelhança em figuras geométricas planas e homotetias",
      verb: "Resolver",
      content: "e elaborar problemas",
      context: "que envolvam a razão de semelhança em figuras geométricas planas e homotetias",
    },
  ],
  // Matemática - 2º Ano - 4º Bimestre (Aulas 1 a 24)
  "Aula 1: Trigonometria no triângulo retângulo - Parte 1": [
    {
      code: "EM13MAT307",
      fullText: "EM13MAT307 - Identificar e analisar a presença de grandezas em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
      verb: "Identificar e analisar",
      content: "a presença de grandezas",
      context: "em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
    },
  ],
  "Aula 2: Trigonometria no triângulo retângulo - Parte 2": [
    {
      code: "EM13MAT307",
      fullText: "EM13MAT307 - Identificar e analisar a presença de grandezas em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
      verb: "Identificar e analisar",
      content: "a presença de grandezas",
      context: "em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
    },
  ],
  "Aula 3: Trigonometria no triângulo retângulo - Parte 3": [
    {
      code: "EM13MAT307",
      fullText: "EM13MAT307 - Identificar e analisar a presença de grandezas em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
      verb: "Identificar e analisar",
      content: "a presença de grandezas",
      context: "em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
    },
  ],
  "Aula 4: Trigonometria no triângulo retângulo - Parte 4": [
    {
      code: "EM13MAT307",
      fullText: "EM13MAT307 - Identificar e analisar a presença de grandezas em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
      verb: "Identificar e analisar",
      content: "a presença de grandezas",
      context: "em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
    },
  ],
  "Aula 5: Trigonometria no triângulo retângulo - Parte 5": [
    {
      code: "EM13MAT307",
      fullText: "EM13MAT307 - Identificar e analisar a presença de grandezas em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
      verb: "Identificar e analisar",
      content: "a presença de grandezas",
      context: "em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
    },
  ],
  "Aula 6: Trigonometria no triângulo retângulo - Parte 6": [
    {
      code: "EM13MAT307",
      fullText: "EM13MAT307 - Identificar e analisar a presença de grandezas em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
      verb: "Identificar e analisar",
      content: "a presença de grandezas",
      context: "em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
    },
  ],
  "Aula 7: Trigonometria no triângulo retângulo - Parte 7": [
    {
      code: "EM13MAT307",
      fullText: "EM13MAT307 - Identificar e analisar a presença de grandezas em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
      verb: "Identificar e analisar",
      content: "a presença de grandezas",
      context: "em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
    },
  ],
  "Aula 8: Trigonometria no triângulo retângulo - Parte 8": [
    {
      code: "EM13MAT307",
      fullText: "EM13MAT307 - Identificar e analisar a presença de grandezas em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
      verb: "Identificar e analisar",
      content: "a presença de grandezas",
      context: "em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
    },
  ],
  "Aula 9: Relações entre vértices, faces e arestas de prismas e pirâmides - Parte 1": [
    {
      code: "EF06MA17",
      fullText: "EF06MA17 - Quantificar e estabelecer relações entre o número de vértices, faces e arestas de prismas e pirâmides",
      verb: "Quantificar e estabelecer relações",
      content: "entre o número de vértices, faces e arestas de prismas e pirâmides",
      context: "em figuras geométricas espaciais",
    },
  ],
  "Aula 10: Vértices, faces e arestas e áreas de superfícies - Parte 1": [
    {
      code: "EF06MA17",
      fullText: "EF06MA17 - Quantificar e estabelecer relações entre o número de vértices, faces e arestas de prismas e pirâmides",
      verb: "Quantificar e estabelecer relações",
      content: "entre o número de vértices, faces e arestas de prismas e pirâmides",
      context: "em figuras geométricas espaciais",
    },
    {
      code: "EM13MAT309",
      fullText: "EM13MAT309 - Resolver e elaborar problemas envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      verb: "Resolver e elaborar problemas",
      content: "envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      context: "em contextos geométricos e do cotidiano",
    },
  ],
  "Aula 11: Cálculo de áreas de superfícies planas e corpos redondos - Parte 1": [
    {
      code: "EM13MAT309",
      fullText: "EM13MAT309 - Resolver e elaborar problemas envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      verb: "Resolver e elaborar problemas",
      content: "envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      context: "em contextos geométricos e do cotidiano",
    },
  ],
  "Aula 12: Cálculo de áreas de superfícies planas e corpos redondos - Parte 2": [
    {
      code: "EM13MAT309",
      fullText: "EM13MAT309 - Resolver e elaborar problemas envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      verb: "Resolver e elaborar problemas",
      content: "envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      context: "em contextos geométricos e do cotidiano",
    },
  ],
  "Aula 13: Cálculo de áreas de superfícies planas e corpos redondos - Parte 3": [
    {
      code: "EM13MAT309",
      fullText: "EM13MAT309 - Resolver e elaborar problemas envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      verb: "Resolver e elaborar problemas",
      content: "envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      context: "em contextos geométricos e do cotidiano",
    },
  ],
  "Aula 14: Cálculo de áreas de superfícies planas e corpos redondos - Parte 4": [
    {
      code: "EM13MAT309",
      fullText: "EM13MAT309 - Resolver e elaborar problemas envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      verb: "Resolver e elaborar problemas",
      content: "envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      context: "em contextos geométricos e do cotidiano",
    },
  ],
  "Aula 15: Cálculo de áreas de superfícies planas e corpos redondos - Parte 5": [
    {
      code: "EM13MAT309",
      fullText: "EM13MAT309 - Resolver e elaborar problemas envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      verb: "Resolver e elaborar problemas",
      content: "envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      context: "em contextos geométricos e do cotidiano",
    },
  ],
  "Aula 16: Cálculo de áreas de superfícies planas e corpos redondos - Parte 6": [
    {
      code: "EM13MAT309",
      fullText: "EM13MAT309 - Resolver e elaborar problemas envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      verb: "Resolver e elaborar problemas",
      content: "envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      context: "em contextos geométricos e do cotidiano",
    },
  ],
  "Aula 17: Cálculo de áreas de superfícies planas e corpos redondos - Parte 7": [
    {
      code: "EM13MAT309",
      fullText: "EM13MAT309 - Resolver e elaborar problemas envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      verb: "Resolver e elaborar problemas",
      content: "envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      context: "em contextos geométricos e do cotidiano",
    },
  ],
  "Aula 18: Cálculo de áreas de superfícies planas e corpos redondos - Parte 8": [
    {
      code: "EM13MAT309",
      fullText: "EM13MAT309 - Resolver e elaborar problemas envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      verb: "Resolver e elaborar problemas",
      content: "envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      context: "em contextos geométricos e do cotidiano",
    },
  ],
  "Aula 19: Cálculo de áreas de superfícies planas e corpos redondos - Parte 9": [
    {
      code: "EM13MAT309",
      fullText: "EM13MAT309 - Resolver e elaborar problemas envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      verb: "Resolver e elaborar problemas",
      content: "envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      context: "em contextos geométricos e do cotidiano",
    },
  ],
  "Aula 20: Cálculo de áreas de superfícies planas e corpos redondos - Parte 10": [
    {
      code: "EM13MAT309",
      fullText: "EM13MAT309 - Resolver e elaborar problemas envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      verb: "Resolver e elaborar problemas",
      content: "envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      context: "em contextos geométricos e do cotidiano",
    },
  ],
  "Aula 21: Cálculo de áreas de superfícies planas e corpos redondos - Parte 11": [
    {
      code: "EM13MAT309",
      fullText: "EM13MAT309 - Resolver e elaborar problemas envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      verb: "Resolver e elaborar problemas",
      content: "envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      context: "em contextos geométricos e do cotidiano",
    },
  ],
  "Aula 22: Cálculo de áreas de superfícies planas e corpos redondos - Parte 12": [
    {
      code: "EM13MAT309",
      fullText: "EM13MAT309 - Resolver e elaborar problemas envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      verb: "Resolver e elaborar problemas",
      content: "envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      context: "em contextos geométricos e do cotidiano",
    },
  ],
  "Aula 23: Cálculo de áreas de superfícies planas e corpos redondos - Parte 13": [
    {
      code: "EM13MAT309",
      fullText: "EM13MAT309 - Resolver e elaborar problemas envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      verb: "Resolver e elaborar problemas",
      content: "envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      context: "em contextos geométricos e do cotidiano",
    },
  ],
  "Aula 24: Cálculo de áreas de superfícies planas e corpos redondos - Parte 14": [
    {
      code: "EM13MAT309",
      fullText: "EM13MAT309 - Resolver e elaborar problemas envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      verb: "Resolver e elaborar problemas",
      content: "envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      context: "em contextos geométricos e do cotidiano",
    },
  ],
  // Matemática - 3º Ano - 4º Bimestre (Aulas 1 a 24)
  "Aula 1: Fenômenos estatísticos e distribuições probabilísticas - Parte 1": [
    {
      code: "EM13MAT314",
      fullText: "EM13MAT314 - Investigar e analisar a ocorrência de fenômenos estatísticos por meio de distribuições probabilísticas",
      verb: "Investigar e analisar",
      content: "a ocorrência de fenômenos estatísticos",
      context: "por meio de distribuições probabilísticas",
    },
  ],
  "Aula 2: Fenômenos estatísticos e distribuições probabilísticas - Parte 2": [
    {
      code: "EM13MAT314",
      fullText: "EM13MAT314 - Investigar e analisar a ocorrência de fenômenos estatísticos por meio de distribuições probabilísticas",
      verb: "Investigar e analisar",
      content: "a ocorrência de fenômenos estatísticos",
      context: "por meio de distribuições probabilísticas",
    },
  ],
  "Aula 3: Fenômenos estatísticos e distribuições probabilísticas - Parte 3": [
    {
      code: "EM13MAT314",
      fullText: "EM13MAT314 - Investigar e analisar a ocorrência de fenômenos estatísticos por meio de distribuições probabilísticas",
      verb: "Investigar e analisar",
      content: "a ocorrência de fenômenos estatísticos",
      context: "por meio de distribuições probabilísticas",
    },
  ],
  "Aula 4: Fenômenos estatísticos e distribuições probabilísticas - Parte 4": [
    {
      code: "EM13MAT314",
      fullText: "EM13MAT314 - Investigar e analisar a ocorrência de fenômenos estatísticos por meio de distribuições probabilísticas",
      verb: "Investigar e analisar",
      content: "a ocorrência de fenômenos estatísticos",
      context: "por meio de distribuições probabilísticas",
    },
  ],
  "Aula 5: Fenômenos estatísticos e distribuições probabilísticas - Parte 5": [
    {
      code: "EM13MAT314",
      fullText: "EM13MAT314 - Investigar e analisar a ocorrência de fenômenos estatísticos por meio de distribuições probabilísticas",
      verb: "Investigar e analisar",
      content: "a ocorrência de fenômenos estatísticos",
      context: "por meio de distribuições probabilísticas",
    },
  ],
  "Aula 6: Fenômenos estatísticos e distribuições probabilísticas - Parte 6": [
    {
      code: "EM13MAT314",
      fullText: "EM13MAT314 - Investigar e analisar a ocorrência de fenômenos estatísticos por meio de distribuições probabilísticas",
      verb: "Investigar e analisar",
      content: "a ocorrência de fenômenos estatísticos",
      context: "por meio de distribuições probabilísticas",
    },
  ],
  "Aula 7: Fenômenos estatísticos e distribuições probabilísticas - Parte 7": [
    {
      code: "EM13MAT314",
      fullText: "EM13MAT314 - Investigar e analisar a ocorrência de fenômenos estatísticos por meio de distribuições probabilísticas",
      verb: "Investigar e analisar",
      content: "a ocorrência de fenômenos estatísticos",
      context: "por meio de distribuições probabilísticas",
    },
  ],
  "Aula 8: Fenômenos estatísticos e distribuições probabilísticas - Parte 8": [
    {
      code: "EM13MAT314",
      fullText: "EM13MAT314 - Investigar e analisar a ocorrência de fenômenos estatísticos por meio de distribuições probabilísticas",
      verb: "Investigar e analisar",
      content: "a ocorrência de fenômenos estatísticos",
      context: "por meio de distribuições probabilísticas",
    },
  ],
  "Aula 9: Análise de dados estatísticos em diferentes contextos - Parte 1": [
    {
      code: "EM13MAT316",
      fullText: "EM13MAT316 - Resolver e elaborar problemas envolvendo a análise de dados estatísticos em diferentes contextos",
      verb: "Resolver e elaborar problemas",
      content: "envolvendo a análise de dados estatísticos",
      context: "em diferentes contextos",
    },
  ],
  "Aula 10: Análise de dados estatísticos em diferentes contextos - Parte 2": [
    {
      code: "EM13MAT316",
      fullText: "EM13MAT316 - Resolver e elaborar problemas envolvendo a análise de dados estatísticos em diferentes contextos",
      verb: "Resolver e elaborar problemas",
      content: "envolvendo a análise de dados estatísticos",
      context: "em diferentes contextos",
    },
  ],
  "Aula 11: Análise de dados estatísticos em diferentes contextos - Parte 3": [
    {
      code: "EM13MAT316",
      fullText: "EM13MAT316 - Resolver e elaborar problemas envolvendo a análise de dados estatísticos em diferentes contextos",
      verb: "Resolver e elaborar problemas",
      content: "envolvendo a análise de dados estatísticos",
      context: "em diferentes contextos",
    },
  ],
  "Aula 12: Análise de dados estatísticos em diferentes contextos - Parte 4": [
    {
      code: "EM13MAT316",
      fullText: "EM13MAT316 - Resolver e elaborar problemas envolvendo a análise de dados estatísticos em diferentes contextos",
      verb: "Resolver e elaborar problemas",
      content: "envolvendo a análise de dados estatísticos",
      context: "em diferentes contextos",
    },
  ],
  "Aula 13: Análise de dados estatísticos em diferentes contextos - Parte 5": [
    {
      code: "EM13MAT316",
      fullText: "EM13MAT316 - Resolver e elaborar problemas envolvendo a análise de dados estatísticos em diferentes contextos",
      verb: "Resolver e elaborar problemas",
      content: "envolvendo a análise de dados estatísticos",
      context: "em diferentes contextos",
    },
  ],
  "Aula 14: Análise de dados estatísticos em diferentes contextos - Parte 6": [
    {
      code: "EM13MAT316",
      fullText: "EM13MAT316 - Resolver e elaborar problemas envolvendo a análise de dados estatísticos em diferentes contextos",
      verb: "Resolver e elaborar problemas",
      content: "envolvendo a análise de dados estatísticos",
      context: "em diferentes contextos",
    },
  ],
  "Aula 15: Análise de dados estatísticos em diferentes contextos - Parte 7": [
    {
      code: "EM13MAT316",
      fullText: "EM13MAT316 - Resolver e elaborar problemas envolvendo a análise de dados estatísticos em diferentes contextos",
      verb: "Resolver e elaborar problemas",
      content: "envolvendo a análise de dados estatísticos",
      context: "em diferentes contextos",
    },
  ],
  "Aula 16: Análise de dados estatísticos em diferentes contextos - Parte 8": [
    {
      code: "EM13MAT316",
      fullText: "EM13MAT316 - Resolver e elaborar problemas envolvendo a análise de dados estatísticos em diferentes contextos",
      verb: "Resolver e elaborar problemas",
      content: "envolvendo a análise de dados estatísticos",
      context: "em diferentes contextos",
    },
  ],
  "Aula 17: Interpretação de gráficos estatísticos, tendências e padrões - Parte 1": [
    {
      code: "EM13MAT506",
      fullText: "EM13MAT506 - Interpretar informações contidas em textos e gráficos estatísticos, identificando tendências e padrões",
      verb: "Interpretar",
      content: "informações contidas em textos e gráficos estatísticos",
      context: "identificando tendências e padrões",
    },
  ],
  "Aula 18: Trigonometria no triângulo retângulo - Parte 9": [
    {
      code: "EM13MAT307",
      fullText: "EM13MAT307 - Identificar e analisar a presença de grandezas em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
      verb: "Identificar e analisar",
      content: "a presença de grandezas",
      context: "em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
    },
  ],
  "Aula 19: Trigonometria no triângulo retângulo - Parte 10": [
    {
      code: "EM13MAT307",
      fullText: "EM13MAT307 - Identificar e analisar a presença de grandezas em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
      verb: "Identificar e analisar",
      content: "a presença de grandezas",
      context: "em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
    },
  ],
  "Aula 20: Trigonometria no triângulo retângulo - Parte 11": [
    {
      code: "EM13MAT307",
      fullText: "EM13MAT307 - Identificar e analisar a presença de grandezas em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
      verb: "Identificar e analisar",
      content: "a presença de grandezas",
      context: "em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
    },
  ],
  "Aula 21: Trigonometria no triângulo retângulo - Parte 12": [
    {
      code: "EM13MAT307",
      fullText: "EM13MAT307 - Identificar e analisar a presença de grandezas em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
      verb: "Identificar e analisar",
      content: "a presença de grandezas",
      context: "em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
    },
  ],
  "Aula 22: Trigonometria no triângulo retângulo - Parte 13": [
    {
      code: "EM13MAT307",
      fullText: "EM13MAT307 - Identificar e analisar a presença de grandezas em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
      verb: "Identificar e analisar",
      content: "a presença de grandezas",
      context: "em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
    },
  ],
  "Aula 23: Trigonometria no triângulo retângulo - Parte 14": [
    {
      code: "EM13MAT307",
      fullText: "EM13MAT307 - Identificar e analisar a presença de grandezas em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
      verb: "Identificar e analisar",
      content: "a presença de grandezas",
      context: "em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
    },
  ],
  "Aula 24: Trigonometria no triângulo retângulo - Parte 15": [
    {
      code: "EM13MAT307",
      fullText: "EM13MAT307 - Identificar e analisar a presença de grandezas em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
      verb: "Identificar e analisar",
      content: "a presença de grandezas",
      context: "em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
    },
  ],
};

export const ENGLISH_SKILLS_TABLE: Record<string, Record<number, string[]>> = {
  "6": {
    1: ["EF06LI04", "EF06LI05", "EF06LI06"],
    2: ["EF06LI15", "EF06LI20"],
    3: ["EF06LI17"],
    4: ["EF06LI15", "EF06LI17"],
    5: ["EF06LI04", "EF06LI13"],
    6: ["EF06LI15", "EF06LI17"],
    7: ["EF06LI01", "EF06LI17"],
    8: ["EF06LI12", "EF06LI17"],
    9: ["EF06LI07", "EF06LI09", "EF06LI12", "EF06LI17"],
    10: ["EF06LI17"],
    11: ["EF06LI04", "EF06LI24", "EF06LI25", "EF06LI26"],
    12: ["EF06LI04", "EF06LI24", "EF06LI25", "EF06LI26"],
  },
  "7": {
    1: ["EF07LI02", "EF07LI03", "EF07LI15"],
    2: ["EF07LI02", "EF07LI05", "EF07LI06", "EF07LI08", "EF07LI15"],
    3: ["EF07LI06", "EF07LI07", "EF07LI08", "EF07LI09", "EF07LI11"],
    4: ["EF07LI06", "EF07LI07", "EF07LI08", "EF07LI09", "EF07LI11"],
    5: ["EF07LI02", "EF07LI03", "EF07LI04"],
    6: ["EF07LI06", "EF07LI07", "EF07LI08", "EF07LI09", "EF07LI11"],
    7: ["EF07LI06", "EF07LI07", "EF07LI08", "EF07LI09", "EF07LI11"],
    8: ["EF07LI06", "EF07LI07", "EF07LI08", "EF07LI09", "EF07LI11"],
    9: ["EF07LI03", "EF07LI04", "EF07LI05"],
    10: ["EF07LI03", "EF07LI04", "EF07LI05"],
    11: ["EF07LI03", "EF07LI04", "EF07LI05"],
    12: ["EF07LI22"],
    13: ["EF07LI01", "EF07LI07", "EF07LI08", "EF07LI11", "EF07LI12"],
  },
  "8": {
    1: ["EF08LI03", "EF08LI15"],
    2: ["EF08LI03", "EF08LI15"],
    3: ["EF08LI03", "EF08LI15"],
    4: ["EF08LI03", "EF08LI15"],
    5: ["EF08LI03", "EF08LI15"],
    6: ["EF08LI03", "EF08LI15"],
    7: ["EF08LI03", "EF08LI15"],
    8: ["EF08LI03", "EF08LI15"],
    9: ["EF08LI05", "EF08LI06", "EF08LI08"],
    10: ["EF08LI05", "EF08LI06", "EF08LI08"],
    11: ["EF08LI05", "EF08LI06", "EF08LI08"],
  },
  "9": {
    1: ["EF09LI07", "EF09LI14"],
    2: ["EF09LI07", "EF09LI14"],
    3: ["EF09LI07", "EF09LI14"],
    4: ["EF09LI07", "EF09LI14"],
    5: ["EF09LI06", "EF09LI14"],
    6: ["EF09LI06", "EF09LI14"],
    7: ["EF09LI06", "EF09LI14"],
    8: ["EF09LI06", "EF09LI14"],
    9: ["EF09LI06"],
    10: ["EF09LI06"],
    11: ["EF09LI06"],
  },
  "2": {
    1: ["EM13LGG102", "EM13LGG302", "EM13LGG401", "EM13LGG402"],
    2: ["EM13LGG102", "EM13LGG302", "EM13LGG401", "EM13LGG402"],
    3: ["EM13LGG102", "EM13LGG302", "EM13LGG401", "EM13LGG402"],
    4: ["EM13LGG102", "EM13LGG302", "EM13LGG401", "EM13LGG402"],
    5: ["EM13LGG102", "EM13LGG302", "EM13LGG401", "EM13LGG402"],
    6: ["EM13LGG102", "EM13LGG302", "EM13LGG401", "EM13LGG402"],
    7: ["EM13LGG102", "EM13LGG302", "EM13LGG401", "EM13LGG402"],
    8: ["EM13LGG102", "EM13LGG302", "EM13LGG401", "EM13LGG402"],
    9: ["EM13LGG103", "EM13LGG104", "EM13LGG403"],
    10: ["EM13LGG103", "EM13LGG104", "EM13LGG403"],
    11: ["EM13LGG103", "EM13LGG104", "EM13LGG403"],
  },
  "3": {
    1: ["EM13LGG102", "EM13LGG302", "EM13LGG401", "EM13LGG402"],
    2: ["EM13LGG102", "EM13LGG302", "EM13LGG401", "EM13LGG402"],
    3: ["EM13LGG102", "EM13LGG302", "EM13LGG401", "EM13LGG402"],
    4: ["EM13LGG102", "EM13LGG302", "EM13LGG401", "EM13LGG402"],
    5: ["EM13LGG102", "EM13LGG302", "EM13LGG401", "EM13LGG402"],
    6: ["EM13LGG102", "EM13LGG302", "EM13LGG401", "EM13LGG402"],
    7: ["EM13LGG103", "EM13LGG104", "EM13LGG403"],
    8: ["EM13LGG103", "EM13LGG104", "EM13LGG403"],
    9: ["EM13LGG103", "EM13LGG104", "EM13LGG403"],
    10: ["EM13LGG103", "EM13LGG104", "EM13LGG403"],
    11: ["EM13LGG103", "EM13LGG104", "EM13LGG403"],
  },
};

export const PHYSICAL_EDUCATION_SKILLS_TABLE: Record<string, Record<number, string[]>> = {
  "6": {
    1: ["EF06EF24*"],
    2: ["EF06EF24*"],
    3: ["EF06EF24*"],
    4: ["EF06EF24*"],
    5: ["EF06EF24*"],
    6: ["EF06EF24*"],
    7: ["EF06EF24*"],
    8: ["EF06EF14", "EF06EF15", "EF06EF16"],
    9: ["EF06EF14", "EF06EF15", "EF06EF16"],
    10: ["EF06EF14", "EF06EF15", "EF06EF16"],
    11: ["EF06EF14", "EF06EF15", "EF06EF16"],
    12: ["EF06EF14", "EF06EF15", "EF06EF16"],
    13: ["EF06EF14", "EF06EF15", "EF06EF16"],
    14: ["EF06EF14", "EF06EF15", "EF06EF16"],
  },
  "7": {
    1: ["EF07EF02"],
    2: ["EF07EF02"],
    3: ["EF07EF02"],
    4: ["EF07EF05"],
    5: ["EF07EF02"],
    6: ["EF07EF02"],
    7: ["EF07EF02"],
    8: ["EF07EF24*", "EF07EF25*"],
    9: ["EF07EF24*"],
    10: ["EF07EF24*", "EF07EF25*"],
    11: ["EF07EF24*", "EF07EF25*"],
    12: ["EF07EF24*", "EF07EF25*"],
    13: ["EF07EF24*", "EF07EF25*"],
    14: ["EF07EF24*", "EF07EF25*"],
  },
  "8": {
    1: ["EF08EF19", "EF08EF20"],
    2: ["EF08EF19", "EF08EF20"],
    3: ["EF08EF19", "EF08EF20"],
    4: ["EF08EF19", "EF08EF20"],
    5: ["EF08EF19", "EF08EF20"],
    6: ["EF08EF19", "EF08EF20"],
    7: ["EF08EF19", "EF08EF20"],
    8: ["EF08EF09", "EF08EF22*"],
    9: ["EF08EF09", "EF08EF22*"],
    10: ["EF08EF09", "EF08EF22*"],
    11: ["EF08EF09", "EF08EF22*"],
    12: ["EF08EF09", "EF08EF22*"],
    13: ["EF08EF09", "EF08EF22*"],
    14: ["EF08EF09", "EF08EF22*"],
  },
  "9": {
    1: ["EF09EF19", "EF09EF21"],
    2: ["EF09EF19", "EF09EF20", "EF09EF21"],
    3: ["EF09EF19", "EF09EF21"],
    4: ["EF09EF19", "EF09EF21"],
    5: ["EF09EF19", "EF09EF21"],
    6: ["EF09EF19", "EF09EF20", "EF09EF21"],
    7: ["EF09EF19", "EF09EF21"],
    8: ["EF09EF23*", "EF09EF24*", "EF09EF25*"],
    9: ["EF09EF23*", "EF09EF24*", "EF09EF25*"],
    10: ["EF09EF23*", "EF09EF24*", "EF09EF25*"],
    11: ["EF09EF23*", "EF09EF24*", "EF09EF25*"],
    12: ["EF09EF23*", "EF09EF24*", "EF09EF25*"],
    13: ["EF09EF23*", "EF09EF24*", "EF09EF25*"],
    14: ["EF09EF23*", "EF09EF24*", "EF09EF25*"],
  },
  "2": {
    1: ["EM13LGG305", "EM13LGG503"],
    2: ["EM13LGG305", "EM13LGG503"],
    3: ["EM13LGG305", "EM13LGG503"],
    4: ["EM13LGG305", "EM13LGG503"],
    5: ["EM13LGG305", "EM13LGG503"],
    6: ["EM13LGG305", "EM13LGG503"],
    7: ["EM13LGG305", "EM13LGG503"],
  },
  "3": {
    1: ["EM13LGG102", "EM13LGG202", "EM13LGG401", "EM13LGG403"],
    2: ["EM13LGG102", "EM13LGG202", "EM13LGG401", "EM13LGG403"],
    3: ["EM13LGG102", "EM13LGG202", "EM13LGG401", "EM13LGG403"],
    4: ["EM13LGG102", "EM13LGG202", "EM13LGG401", "EM13LGG403"],
    5: ["EM13LGG102", "EM13LGG202", "EM13LGG401", "EM13LGG403"],
    6: ["EM13LGG102", "EM13LGG202", "EM13LGG401", "EM13LGG403"],
    7: ["EM13LGG102", "EM13LGG202", "EM13LGG401", "EM13LGG403"],
  },
};

export const PORTUGUES_SKILLS_TABLE: Record<string, Record<number, string[]>> = {
  "6": {
    1: ["EF04LP15A", "EF06LP16A", "EF06LP16B"],
    2: ["EF04LP15A", "EF06LP16A", "EF06LP16B"],
    3: ["EF69LP03A", "EF69LP23"],
    4: ["EF06LP04A", "EF06LP04B", "EF06LP05A"],
    5: ["EF69LP03A"],
    6: ["EF06LP32"],
    7: ["EF06LP27", "EF06LP28"],
    8: ["EF69LP33A"],
    9: ["EF67LP28"],
    10: ["EF67LP29"],
    11: ["EF69LP05A"],
    12: ["EF69LP05A"],
    13: ["EF69LP05A"],
    14: ["EF69LP05A"],
    15: ["EF67LP28"],
    16: ["EF06LP11"],
    17: ["EF67LP28"],
    18: ["EF06LP11"],
    19: ["EF67LP28"],
    20: ["EF06LP07A"],
    21: ["EF67LP28"],
    22: ["EF06LP11"],
    23: ["EF67LP28"],
    24: ["EF06LP11"],
  },
  "7": {
    1: ["EF69LP44"],
    2: ["EF07LP10"],
    3: ["EF69LP44"],
    4: ["EF07LP05A", "EF07LP05B", "EF07LP05C"],
    5: ["EF69LP44"],
    6: ["EF07LP10"],
    7: ["EF67LP27"],
    8: ["EF07LP07"],
    9: ["EF69LP55"],
    10: ["EF69LP55"],
    11: ["EF69LP05A"],
    12: ["EF07LP07"],
    13: ["EF69LP19"],
    14: ["EF69LP19", "EF07LP03"],
    15: ["EF69LP19"],
    16: ["EF69LP19"],
    17: ["EF69LP44"],
    18: ["EF07LP03"],
    19: ["EF69LP22A"],
    20: ["EF07LP03"],
    21: ["EF67LP27"],
    22: ["EF67LP27"],
    23: ["EF07LP28"],
    24: ["EF07LP12"],
  },
  "8": {
    1: ["EF69LP44"],
    2: ["EF08LP04"],
    3: ["EF69LP44"],
    4: ["EF08LP04"],
    5: ["EF69LP44"],
    6: ["EF08LP04"],
    7: ["EF69LP44"],
    8: ["EF08LP04"],
    9: ["EF69LP25"],
    10: ["EF08LP04A"],
    11: ["EF69LP32"],
    12: ["EF08LP08", "EF08LP05B", "EF08LP05C"],
    13: ["EF69LP47"],
    14: ["EF08LP09"],
    15: ["EF69LP44"],
    16: ["EF08LP04A"],
    17: ["EF69LP22A"],
    18: ["EF08LP08A", "EF08LP08B"],
    19: ["EF69LP06A", "EF69LP06B"],
    20: ["EF08LP09A"],
    21: ["EF69LP33A", "EF69LP33B"],
    22: ["EF08LP10A"],
    23: ["EF69LP12"],
    24: ["EF69LP12"],
  },
  "9": {
    1: ["EF69LP33A", "EF69LP33B", "EF69LP33C"],
    2: ["EF69LP33A", "EF69LP33B", "EF69LP33C"],
    3: ["EF69LP33A", "EF69LP33B", "EF69LP33C"],
    4: ["EF69LP33A", "EF69LP33B", "EF69LP33C"],
    5: ["EF69LP33A", "EF69LP33B", "EF69LP33C"],
    6: ["EF69LP56"],
    7: ["EF69LP33A", "EF69LP33B", "EF69LP33C"],
    8: ["EF69LP50"],
    9: ["EF69LP33A", "EF69LP33B", "EF69LP33C"],
    10: ["EF69LP50"],
    11: ["EF09LP01A", "EF09LP01B"],
    12: ["EF89LP05"],
    13: ["EF89LP04A", "EF89LP04B"],
    14: ["EF89LP05"],
    15: ["EF69LP11"],
    16: ["EF69LP11"],
    17: ["EF89LP03", "EF89LP04A", "EF89LP04B"],
    18: ["EF69LP56"],
    19: ["EF89LP17"],
    20: ["EF69LP56"],
    21: ["EF89LP17"],
    22: ["EF69LP56"],
    23: ["EF69LP23"],
    24: ["EF69LP06"],
  },
  "2": {
    1: ["EM13LP48"],
    2: ["EM13LP48"],
    3: ["EM13LP54"],
    4: ["EM13LP54"],
    5: ["EM13LGG204", "EM13LP01"],
    6: ["EM13LGG202", "EM13LP01"],
    7: ["EM13LGG202", "EM13LP01"],
    8: ["EM13LP52"],
    9: ["EM13LGG202", "EM13LGG2001", "EM13LP50"],
    10: ["EM13LP52"],
    11: ["EM13LP53"],
    12: ["EM13LP53"],
    13: ["EM13LGG303", "EM13LP05"],
    14: ["EM13LGG303", "EM13LP05"],
    15: ["EM13LP15"],
    16: ["EM13LGG303", "EM13LP05"],
    17: ["EM13LP26A"],
    18: ["EM13LP26B"],
    19: ["EM13LP46"],
    20: ["EM13LP46"],
    21: ["EM13LP46", "EM13LP47"],
    22: ["EM13LP46", "EM13LP47"],
    23: ["EM13LP21"],
    24: ["EM13LP21"],
  },
  "3": {
    1: ["EM13LP52"],
    2: ["EM13LP52"],
    3: ["EM13LP52"],
    4: ["EM13LP52"],
    5: ["EM13LP40"],
    6: ["EM13LP49"],
    7: ["EM13LP52"],
    8: ["EM13LP52"],
    9: ["EM13LP05"],
    10: ["EM13LP09"],
    11: ["EM13LP49"],
    12: ["EM13LP49"],
    13: ["EM13LP49"],
    14: ["EM13LP49"],
    15: ["EM13LGG104", "EM13LP02C"],
    16: ["EM13LGG104", "EM13LP02A"],
    17: ["EM13LP49"],
    18: ["EM13LP02B"],
    19: ["EM13LP52"],
    20: ["EM13LP52"],
    21: ["EM13LP49"],
    22: ["EM13LP09"],
    23: ["EM13LP49"],
    24: ["EM13LP02B"],
  },
};

export const CIENCIAS_SKILLS_TABLE: Record<string, Record<number, string[]>> = {
  "6": {
    1: ["EF06CI06"],
    2: ["EF06CI07"],
    3: ["EF06CI07"],
    4: ["EF06CI07"],
    5: ["EF06CI07"],
    6: ["EF06CI08"],
    7: ["EF06CI08"],
    8: ["EF06CI07"],
    9: ["EF06CI07"],
    10: ["EF06CI07"],
    11: ["EF06CI09"],
    12: ["EF06CI09"],
    13: ["EF06CI09"],
    14: ["EF06CI09"],
    15: ["EF06CI10"],
    16: ["EF06CI10"],
    17: ["EF06CI07"],
    18: ["EF06CI09"],
  },
  "7": {
    1: ["EF07CI10B", "EF07CI11"],
    2: ["EF07CI10A"],
    3: ["EF07CI10A", "EF07CI10B"],
    4: ["EF07CI10A"],
    5: ["EF07CI10A", "EF07CI10B"],
    6: ["EF07CI09", "EF07CI11"],
    7: ["EF07CI09", "EF07CI10B"],
    8: ["EF07CI11B"],
    9: ["EF07CI11B"],
    10: ["EF07CI09"],
    11: ["EF07CI09", "EF07CI11B"],
    12: ["EF07CI09", "EF07CI11B"],
    13: ["EF07CI09", "EF07CI11B"],
    14: ["EF07CI09"],
    15: ["EF07CI09", "EF07CI11"],
    16: ["EF07CI09", "EF07CI11"],
    17: ["EF07CI09"],
    18: ["EF07CI10B", "EF07CI09", "EF07CI11"],
  },
  "8": {
    1: ["EF08CI03"],
    2: ["EF08CI01", "EF08CI08"],
    3: ["EF08CI03", "EF08CI08B"],
    4: ["EF08CI01", "EF08CI10*"],
    5: ["EF08CI10*"],
    6: ["EF08CI11*"],
    7: ["EF08CI10*"],
    8: ["EF08CI11*"],
    9: ["EF08CI10*"],
    10: ["EF08CI10*"],
    11: ["EF08CI05A", "EF08CI05C"],
    12: ["EF08CI04"],
    13: ["EF08CI04"],
    14: ["EF08CI04"],
    15: ["EF08CI03"],
    16: ["EF08CI03"],
    17: ["EF08CI03"],
    18: ["EF08CI04"],
    19: ["EF08CI17*"],
    20: ["EF08CI03", "EF08CI10*"],
    21: ["EF08CI17*"],
    22: ["EF08CI03", "EF08CI01", "EF08CI18*"],
    23: ["EF08CI18*"],
    24: ["EF08CI06A", "EF08CI18*", "EF08CI02"],
  },
  "9": {
    1: ["EF09CI14"],
    2: ["EF09CI14"],
    3: ["EF09CI14"],
    4: ["EF09CI14"],
    5: ["EF09CI14"],
    6: ["EF09CI14"],
    7: ["EF09CI14"],
    8: ["EF09CI14"],
    9: ["EF09CI14"],
    10: ["EF09CI14"],
    11: ["EF09CI14"],
    12: ["EF09CI14"],
    13: ["EF09CI17"],
    14: ["EF09CI15"],
    15: ["EF09CI15"],
    16: ["EF09CI15"],
    17: ["EF09CI14"],
    18: ["EF09CI14"],
    19: ["EF09CI16"],
    20: ["EF09CI20*"],
    21: ["EF09CI14"],
    22: ["EF09CI14"],
    23: ["EF09CI15"],
    24: ["EF09CI20*"],
  },
};

export const QUIMICA_SKILLS_TABLE: Record<string, Record<number, string[]>> = {
  "2": {
    1: ["EM13CNT107"],
    2: ["EM13CNT107", "EM13CNT308"],
    3: ["EM13CNT107", "EM13CNT308"],
    4: ["EM13CNT107", "EM13CNT308"],
    5: ["EM13CNT107", "EM13CNT308"],
    6: ["EM13CNT107", "EM13CNT308"],
    7: ["EM13CNT107", "EM13CNT308"],
    8: ["EM13CNT107", "EM13CNT308"],
    9: ["EM13CNT107", "EM13CNT308"],
    10: ["EM13CNT107", "EM13CNT308"],
    11: ["EM13CNT107", "EM13CNT308"],
    12: ["EM13CNT107", "EM13CNT308"],
  },
};

export const FISICA_SKILLS_TABLE: Record<string, Record<number, string[]>> = {
  "2": {
    1: ["EM13CNT306"],
    2: ["EM13CNT306"],
    3: ["EM13CNT306"],
    4: ["EM13CNT306"],
    5: ["EM13CNT306"],
    6: ["EM13CNT306"],
    7: ["EM13CNT306"],
    8: ["EM13CNT306"],
    9: ["EM13CNT306"],
    10: ["EM13CNT306"],
    11: ["EM13CNT306"],
    12: ["EM13CNT306"],
  },
  "3": {
    1: ["EM13CNT107"],
    2: ["EM13CNT103"],
    3: ["EM13CNT103"],
    4: ["EM13CNT103"],
    5: ["EM13CNT103"],
    6: ["EM13CNT103"],
    7: ["EM13CNT102"],
    8: ["EM13CNT107"],
    9: ["EM13CNT107"],
    10: ["EM13CNT309"],
    11: ["EM13CNT309"],
    12: ["EM13CNT310"],
  },
};

export const BIOLOGIA_SKILLS_TABLE: Record<string, Record<number, string[]>> = {
  "2": {
    1: ["EM13CNT207"],
    2: ["EM13CNT207"],
    3: ["EM13CNT207"],
    4: ["EM13CNT207"],
    5: ["EM13CNT207"],
    6: ["EM13CNT207"],
    7: ["EM13CNT207"],
    8: ["EM13CNT207"],
    9: ["EM13CNT207"],
    10: ["EM13CNT207"],
    11: ["EM13CNT310"],
    12: ["EM13CNT310"],
  },
};

export const SOCIOLOGIA_SKILLS_TABLE: Record<string, Record<number, string[]>> = {
  "2": {
    1: ["EM13CHS202"],
    2: ["EM13CHS202"],
    3: ["EM13CHS202"],
    4: ["EM13CHS504"],
    5: ["EM13CHS404"],
    6: ["EM13CHS404"],
    7: ["EM13CHS404"],
    8: ["EM13CHS504"],
    9: ["EM13CHS303"],
    10: ["EM13CHS303"],
    11: ["EM13CHS504"],
    12: ["EM13CHS504"],
  },
};

export const ARTE_SKILLS_TABLE: Record<string, Record<number, string[]>> = {
  "6": {
    1: ["EF06AR24"],
    2: ["EF06AR24", "EF06AR25", "EF06AR26"],
    3: ["EF06AR24", "EF06AR26"],
    4: ["EF06AR24", "EF06AR26"],
    5: ["EF06AR24", "EF06AR25", "EF06AR26"],
    6: ["EF06AR24", "EF06AR25", "EF06AR26"],
    7: ["EF06AR24", "EF06AR25", "EF06AR26"],
    8: ["EF06AR24", "EF06AR28"],
    9: ["EF06AR25", "EF06AR28"],
    10: ["EF06AR24", "EF06AR25", "EF06AR28"],
    11: ["EF06AR25", "EF06AR28"],
    12: ["EF06AR26", "EF06AR28"],
  },
  "7": {
    1: ["EF07AR26", "EF07AR30"],
    2: ["EF07AR26", "EF07AR30"],
    3: ["EF07AR27", "EF07AR30"],
    4: ["EF07AR24", "EF07AR26"],
    5: ["EF07AR24", "EF07AR27", "EF07AR28"],
    6: ["EF07AR26", "EF07AR27"],
    7: ["EF07AR26", "EF07AR27", "EF07AR30"],
    8: ["EF07AR24", "EF07AR27", "EF07AR30"],
    9: ["EF07AR24", "EF07AR27", "EF07AR30"],
    10: ["EF07AR24", "EF07AR27", "EF07AR30"],
    11: ["EF07AR24", "EF07AR27", "EF07AR30"],
    12: ["EF07AR24", "EF07AR26", "EF07AR30"],
  },
  "8": {
    1: ["EF08AR25", "EF08AR26", "EF08AR28"],
    2: ["EF08AR25", "EF08AR26", "EF08AR28"],
    3: ["EF08AR24", "EF08AR26", "EF08AR28"],
    4: ["EF08AR25", "EF08AR26", "EF08AR28"],
    5: ["EF08AR25", "EF08AR26", "EF08AR28"],
    6: ["EF08AR25", "EF08AR26", "EF08AR28"],
  },
  "9": {
    1: ["EF09AR24", "EF09AR25", "EF09AR28"],
    2: ["EF09AR24", "EF09AR25", "EF09AR28"],
    3: ["EF09AR26"],
    4: ["EF09AR24", "EF09AR25", "EF09AR28"],
    5: ["EF09AR24", "EF09AR25", "EF09AR28"],
    6: ["EF09AR24", "EF09AR25", "EF09AR28"],
  },
};

export function getLessonBNCC(lessonTitle: string, gradeLevel?: string, subject?: string): string {
  if (!lessonTitle) return "";
  const cleanTitle = lessonTitle.trim();

  // 0. Handler específico para Ciências
  const isCiencias = subject
    ? subject.toLowerCase().includes("ciência") ||
      subject.toLowerCase().includes("ciencia")
    : cleanTitle.toLowerCase().includes("sistema digestório") ||
      cleanTitle.toLowerCase().includes("vacinação") ||
      cleanTitle.toLowerCase().includes("placas tectônicas") ||
      cleanTitle.toLowerCase().includes("sistema solar") ||
      cleanTitle.toLowerCase().includes("puberdade") ||
      cleanTitle.toLowerCase().includes("ondas eletromagnéticas") ||
      cleanTitle.toLowerCase().includes("camada de ozônio");

  if (isCiencias) {
    let gradeKey = "6";
    if (gradeLevel) {
      if (gradeLevel.includes("9º") || gradeLevel.includes("9ª") || gradeLevel.includes("9")) gradeKey = "9";
      else if (gradeLevel.includes("8º") || gradeLevel.includes("8ª") || gradeLevel.includes("8")) gradeKey = "8";
      else if (gradeLevel.includes("7º") || gradeLevel.includes("7ª") || gradeLevel.includes("7")) gradeKey = "7";
      else if (gradeLevel.includes("6º") || gradeLevel.includes("6ª") || gradeLevel.includes("6")) gradeKey = "6";
    }
    const match = cleanTitle.match(/aula\s*(\d+)/i) || cleanTitle.match(/^(\d+)/);
    const num = match ? parseInt(match[1], 10) : 1;
    const skillCodes =
      CIENCIAS_SKILLS_TABLE[gradeKey]?.[num] ||
      CIENCIAS_SKILLS_TABLE[gradeKey]?.[1] ||
      ["EF06CI06"];

    return skillCodes
      .map((code) => {
        const cleanCode = code.replace(/\*/g, "");
        const known = KNOWN_CURRICULUM_SKILLS[code] || KNOWN_CURRICULUM_SKILLS[cleanCode];
        if (known) {
          return `${code} - ${known.verb} ${known.content} ${known.context}`;
        }
        return code;
      })
      .join("\n");
  }

  // 0. Handler específico para Biologia
  const isBiologia = subject
    ? subject.toLowerCase().includes("biologia")
    : cleanTitle.toLowerCase().includes("saúde e bem-estar dos adolescentes") ||
      cleanTitle.toLowerCase().includes("infecções sexualmente transmissíveis") ||
      cleanTitle.toLowerCase().includes("contraceptivos hormonais") ||
      cleanTitle.toLowerCase().includes("sistema reprodutor") ||
      cleanTitle.toLowerCase().includes("como as drogas podem impactar") ||
      cleanTitle.toLowerCase().includes("obesidade e desnutrição") ||
      cleanTitle.toLowerCase().includes("higiene dos alimentos") ||
      cleanTitle.toLowerCase().includes("protozooses e saneamento básico");

  if (isBiologia) {
    let gradeKey = "2";
    if (gradeLevel) {
      if (gradeLevel.includes("3º") || gradeLevel.includes("3ª") || gradeLevel.includes("3")) gradeKey = "3";
      else if (gradeLevel.includes("2º") || gradeLevel.includes("2ª") || gradeLevel.includes("2")) gradeKey = "2";
      else if (gradeLevel.includes("1º") || gradeLevel.includes("1ª") || gradeLevel.includes("1")) gradeKey = "1";
    }
    const match = cleanTitle.match(/aula\s*(\d+)/i) || cleanTitle.match(/^(\d+)/);
    const num = match ? parseInt(match[1], 10) : 1;
    const skillCodes =
      BIOLOGIA_SKILLS_TABLE[gradeKey]?.[num] ||
      BIOLOGIA_SKILLS_TABLE[gradeKey]?.[1] ||
      ["EM13CNT207"];

    return skillCodes
      .map((code) => {
        const cleanCode = code.replace(/\*/g, "");
        const known = KNOWN_CURRICULUM_SKILLS[code] || KNOWN_CURRICULUM_SKILLS[cleanCode];
        if (known) {
          return `${code} - ${known.verb} ${known.content} ${known.context}`;
        }
        return code;
      })
      .join("\n");
  }

  // 0. Handler específico para Física
  const isFisica = subject
    ? subject.toLowerCase().includes("física") ||
      subject.toLowerCase().includes("fisica")
    : cleanTitle.toLowerCase().includes("propagação retilínea") ||
      cleanTitle.toLowerCase().includes("espelhos planos") ||
      cleanTitle.toLowerCase().includes("espelhos esféricos") ||
      cleanTitle.toLowerCase().includes("equação de gauss") ||
      cleanTitle.toLowerCase().includes("lentes delgadas") ||
      cleanTitle.toLowerCase().includes("faraday-neumann") ||
      cleanTitle.toLowerCase().includes("física quântica") ||
      cleanTitle.toLowerCase().includes("dualidade onda-partícula") ||
      cleanTitle.toLowerCase().includes("leis de ohm") ||
      cleanTitle.toLowerCase().includes("termodinâmica");

  if (isFisica) {
    let gradeKey = "2";
    if (gradeLevel) {
      if (gradeLevel.includes("3º") || gradeLevel.includes("3ª") || gradeLevel.includes("3")) gradeKey = "3";
      else if (gradeLevel.includes("2º") || gradeLevel.includes("2ª") || gradeLevel.includes("2")) gradeKey = "2";
      else if (gradeLevel.includes("1º") || gradeLevel.includes("1ª") || gradeLevel.includes("1")) gradeKey = "1";
    }
    const match = cleanTitle.match(/aula\s*(\d+)/i) || cleanTitle.match(/^(\d+)/);
    const num = match ? parseInt(match[1], 10) : 1;
    const skillCodes =
      FISICA_SKILLS_TABLE[gradeKey]?.[num] ||
      FISICA_SKILLS_TABLE[gradeKey]?.[1] ||
      (gradeKey === "3" ? ["EM13CNT107"] : ["EM13CNT306"]);

    return skillCodes
      .map((code) => {
        const cleanCode = code.replace(/\*/g, "");
        const known = KNOWN_CURRICULUM_SKILLS[code] || KNOWN_CURRICULUM_SKILLS[cleanCode];
        if (known) {
          return `${code} - ${known.verb} ${known.content} ${known.context}`;
        }
        return code;
      })
      .join("\n");
  }

  // 0. Handler específico para Sociologia
  const isSociologia = subject
    ? subject.toLowerCase().includes("sociologia")
    : cleanTitle.toLowerCase().includes("mudanças sociais") ||
      cleanTitle.toLowerCase().includes("sociedade de risco") ||
      cleanTitle.toLowerCase().includes("mundo do trabalho e capitalismo") ||
      cleanTitle.toLowerCase().includes("sociedade de consumidores") ||
      cleanTitle.toLowerCase().includes("indústria cultural, consumismo");

  if (isSociologia) {
    let gradeKey = "2";
    if (gradeLevel) {
      if (gradeLevel.includes("3º") || gradeLevel.includes("3ª") || gradeLevel.includes("3")) gradeKey = "3";
      else if (gradeLevel.includes("2º") || gradeLevel.includes("2ª") || gradeLevel.includes("2")) gradeKey = "2";
      else if (gradeLevel.includes("1º") || gradeLevel.includes("1ª") || gradeLevel.includes("1")) gradeKey = "1";
    }
    const match = cleanTitle.match(/aula\s*(\d+)/i) || cleanTitle.match(/^(\d+)/);
    const num = match ? parseInt(match[1], 10) : 1;
    const skillCodes =
      SOCIOLOGIA_SKILLS_TABLE[gradeKey]?.[num] ||
      SOCIOLOGIA_SKILLS_TABLE[gradeKey]?.[1] ||
      ["EM13CHS202"];

    return skillCodes
      .map((code) => {
        const cleanCode = code.replace(/\*/g, "");
        const known = KNOWN_CURRICULUM_SKILLS[code] || KNOWN_CURRICULUM_SKILLS[cleanCode];
        if (known) {
          return `${code} - ${known.verb} ${known.content} ${known.context}`;
        }
        return code;
      })
      .join("\n");
  }

  // 0. Handler específico para Química
  const isQuimica = subject
    ? subject.toLowerCase().includes("química") ||
      subject.toLowerCase().includes("quimica")
    : cleanTitle.toLowerCase().includes("pilha") ||
      cleanTitle.toLowerCase().includes("bateria") ||
      cleanTitle.toLowerCase().includes("eletroquímic") ||
      cleanTitle.toLowerCase().includes("oxirredução") ||
      cleanTitle.toLowerCase().includes("eletrólise") ||
      cleanTitle.toLowerCase().includes("galvanoplastia");

  if (isQuimica) {
    let gradeKey = "2";
    if (gradeLevel) {
      if (gradeLevel.includes("3º") || gradeLevel.includes("3ª") || gradeLevel.includes("3")) gradeKey = "3";
      else if (gradeLevel.includes("2º") || gradeLevel.includes("2ª") || gradeLevel.includes("2")) gradeKey = "2";
      else if (gradeLevel.includes("1º") || gradeLevel.includes("1ª") || gradeLevel.includes("1")) gradeKey = "1";
    }
    const match = cleanTitle.match(/aula\s*(\d+)/i) || cleanTitle.match(/^(\d+)/);
    const num = match ? parseInt(match[1], 10) : 1;
    const skillCodes =
      QUIMICA_SKILLS_TABLE[gradeKey]?.[num] ||
      QUIMICA_SKILLS_TABLE[gradeKey]?.[1] ||
      ["EM13CNT107"];

    return skillCodes
      .map((code) => {
        const cleanCode = code.replace(/\*/g, "");
        const known = KNOWN_CURRICULUM_SKILLS[code] || KNOWN_CURRICULUM_SKILLS[cleanCode];
        if (known) {
          return `${code} - ${known.verb} ${known.content} ${known.context}`;
        }
        return code;
      })
      .join("\n");
  }

  // 0. Handler específico para Português / Língua Portuguesa
  const isPortugues = subject
    ? subject.toLowerCase().includes("português") ||
      subject.toLowerCase().includes("portugues") ||
      subject.toLowerCase().includes("língua portuguesa") ||
      subject.toLowerCase().includes("lingua portuguesa") ||
      subject.toLowerCase().includes("redação") ||
      subject.toLowerCase().includes("redacao") ||
      subject.toLowerCase().includes("literatura")
    : false;

  if (isPortugues) {
    let gradeKey = "6";
    if (gradeLevel) {
      if (gradeLevel.includes("3º") || gradeLevel.includes("3ª") || gradeLevel.includes("3")) gradeKey = "3";
      else if (gradeLevel.includes("2º") || gradeLevel.includes("2ª") || gradeLevel.includes("2")) gradeKey = "2";
      else if (gradeLevel.includes("9º") || gradeLevel.includes("9ª") || gradeLevel.includes("9")) gradeKey = "9";
      else if (gradeLevel.includes("8º") || gradeLevel.includes("8ª") || gradeLevel.includes("8")) gradeKey = "8";
      else if (gradeLevel.includes("7º") || gradeLevel.includes("7ª") || gradeLevel.includes("7")) gradeKey = "7";
      else if (gradeLevel.includes("6º") || gradeLevel.includes("6ª") || gradeLevel.includes("6")) gradeKey = "6";
    }
    const match = cleanTitle.match(/aula\s*(\d+)/i) || cleanTitle.match(/^(\d+)/);
    const num = match ? parseInt(match[1], 10) : 1;
    const skillCodes =
      PORTUGUES_SKILLS_TABLE[gradeKey]?.[num] ||
      PORTUGUES_SKILLS_TABLE[gradeKey]?.[1] ||
      ["EF06LP01"];

    return skillCodes
      .map((code) => {
        const cleanCode = code.replace(/\*/g, "");
        const known = KNOWN_CURRICULUM_SKILLS[code] || KNOWN_CURRICULUM_SKILLS[cleanCode];
        if (known) {
          return `${code} - ${known.verb} ${known.content} ${known.context}`;
        }
        return code;
      })
      .join("\n");
  }

  // 0. Handler específico para Arte
  const isArte = subject
    ? subject.toLowerCase().includes("arte") ||
      subject.toLowerCase().includes("artes")
    : cleanTitle.toLowerCase().includes("circo") ||
      cleanTitle.toLowerCase().includes("palhaço") ||
      cleanTitle.toLowerCase().includes("fantoche") ||
      cleanTitle.toLowerCase().includes("teatro") ||
      cleanTitle.toLowerCase().includes("tablado") ||
      cleanTitle.toLowerCase().includes("câmera e ação");

  if (isArte) {
    let gradeKey = "6";
    if (gradeLevel) {
      if (gradeLevel.includes("9º") || gradeLevel.includes("9ª") || gradeLevel.includes("9")) gradeKey = "9";
      else if (gradeLevel.includes("8º") || gradeLevel.includes("8ª") || gradeLevel.includes("8")) gradeKey = "8";
      else if (gradeLevel.includes("7º") || gradeLevel.includes("7ª") || gradeLevel.includes("7")) gradeKey = "7";
      else if (gradeLevel.includes("6º") || gradeLevel.includes("6ª") || gradeLevel.includes("6")) gradeKey = "6";
    }
    const match = cleanTitle.match(/aula\s*(\d+)/i) || cleanTitle.match(/^(\d+)/);
    const num = match ? parseInt(match[1], 10) : 1;
    const skillCodes =
      ARTE_SKILLS_TABLE[gradeKey]?.[num] ||
      ARTE_SKILLS_TABLE[gradeKey]?.[1] ||
      ["EF06AR24"];

    return skillCodes
      .map((code) => {
        const cleanCode = code.replace(/\*/g, "");
        const known = KNOWN_CURRICULUM_SKILLS[code] || KNOWN_CURRICULUM_SKILLS[cleanCode];
        if (known) {
          return `${code} - ${known.verb} ${known.content} ${known.context}`;
        }
        return code;
      })
      .join("\n");
  }

  // 0. Handler específico para Educação Física
  const isEdFisica = subject
    ? subject.toLowerCase().includes("educação física") ||
      subject.toLowerCase().includes("educacao fisica") ||
      subject.toLowerCase().includes("ed. física") ||
      subject.toLowerCase().includes("ed física") ||
      subject.toLowerCase().includes("ed. fisica") ||
      subject.toLowerCase().includes("ed fisica") ||
      subject.toLowerCase().includes("educação fisica")
    : cleanTitle.toLowerCase().includes("damas e xadrez") ||
      cleanTitle.toLowerCase().includes("pong hau ki") ||
      cleanTitle.toLowerCase().includes("tarracá") ||
      cleanTitle.toLowerCase().includes("huka-huka") ||
      cleanTitle.toLowerCase().includes("swordplay") ||
      cleanTitle.toLowerCase().includes("trekking");

  if (isEdFisica) {
    let gradeKey = "6";
    if (gradeLevel) {
      if (gradeLevel.includes("3º") || gradeLevel.includes("3ª") || gradeLevel.includes("3")) gradeKey = "3";
      else if (gradeLevel.includes("2º") || gradeLevel.includes("2ª") || gradeLevel.includes("2")) gradeKey = "2";
      else if (gradeLevel.includes("9º") || gradeLevel.includes("9")) gradeKey = "9";
      else if (gradeLevel.includes("8º") || gradeLevel.includes("8")) gradeKey = "8";
      else if (gradeLevel.includes("7º") || gradeLevel.includes("7")) gradeKey = "7";
      else if (gradeLevel.includes("6º") || gradeLevel.includes("6")) gradeKey = "6";
    }
    const match = cleanTitle.match(/aula\s*(\d+)/i) || cleanTitle.match(/^(\d+)/);
    const num = match ? parseInt(match[1], 10) : 1;
    const skillCodes =
      PHYSICAL_EDUCATION_SKILLS_TABLE[gradeKey]?.[num] ||
      PHYSICAL_EDUCATION_SKILLS_TABLE[gradeKey]?.[1] ||
      ["EF06EF24*"];

    return skillCodes
      .map((code) => {
        const cleanCode = code.replace(/\*/g, "");
        const known = KNOWN_CURRICULUM_SKILLS[code] || KNOWN_CURRICULUM_SKILLS[cleanCode];
        if (known) {
          return `${code} - ${known.verb} ${known.content} ${known.context}`;
        }
        return code;
      })
      .join("\n");
  }

  // 1. Handler específico para Inglês
  const isIngles = subject
    ? subject.toLowerCase().includes("inglês") ||
      subject.toLowerCase().includes("ingles") ||
      subject.toLowerCase().includes("língua inglesa") ||
      subject.toLowerCase().includes("lingua inglesa")
    : cleanTitle.toLowerCase().includes("english") || cleanTitle.toLowerCase().includes("inglês");

  if (isIngles) {
    let gradeKey = "6";
    if (gradeLevel) {
      if (gradeLevel.includes("3º") || gradeLevel.includes("3ª") || gradeLevel.includes("3")) gradeKey = "3";
      else if (gradeLevel.includes("2º") || gradeLevel.includes("2ª") || gradeLevel.includes("2")) gradeKey = "2";
      else if (gradeLevel.includes("9º") || gradeLevel.includes("9")) gradeKey = "9";
      else if (gradeLevel.includes("8º") || gradeLevel.includes("8")) gradeKey = "8";
      else if (gradeLevel.includes("7º") || gradeLevel.includes("7")) gradeKey = "7";
      else if (gradeLevel.includes("6º") || gradeLevel.includes("6")) gradeKey = "6";
    }
    const match = cleanTitle.match(/aula\s*(\d+)/i) || cleanTitle.match(/^(\d+)/);
    const num = match ? parseInt(match[1], 10) : 1;
    const skillCodes =
      ENGLISH_SKILLS_TABLE[gradeKey]?.[num] ||
      ENGLISH_SKILLS_TABLE[gradeKey]?.[1] ||
      ["EF06LI04", "EF06LI05", "EF06LI06"];

    return skillCodes
      .map((code) => {
        const cleanCode = code.replace(/\*/g, "");
        const known = KNOWN_CURRICULUM_SKILLS[code] || KNOWN_CURRICULUM_SKILLS[cleanCode];
        if (known) {
          return `${code} - ${known.verb} ${known.content} ${known.context}`;
        }
        return code;
      })
      .join("\n");
  }

  if (LESSON_BNCC_MAP[cleanTitle] && LESSON_BNCC_MAP[cleanTitle].length > 0) {
    return LESSON_BNCC_MAP[cleanTitle].map((s) => s.fullText).join("\n");
  }

  const is3rdGradeGeo = gradeLevel ? (gradeLevel.includes("3º") || gradeLevel.toLowerCase().includes("3 ano") || gradeLevel.includes("3ª")) : false;
  const is2ndGrade = gradeLevel ? (gradeLevel.includes("2º") || gradeLevel.toLowerCase().includes("2 ano") || gradeLevel.includes("2ª")) : false;
  const is9thGrade = gradeLevel ? (gradeLevel.includes("9º") || gradeLevel.toLowerCase().includes("9 ano") || gradeLevel.includes("9")) : false;
  const is8thGrade = gradeLevel ? (gradeLevel.includes("8º") || gradeLevel.toLowerCase().includes("8 ano") || gradeLevel.includes("8")) : false;
  const is7thGrade = gradeLevel ? (gradeLevel.includes("7º") || gradeLevel.toLowerCase().includes("7 ano") || gradeLevel.includes("7")) : false;
  const is6thGrade = gradeLevel ? (gradeLevel.includes("6º") || gradeLevel.toLowerCase().includes("6 ano") || gradeLevel.includes("6")) : false;
  const isGeografia = subject ? (subject.toLowerCase().includes("geografia")) : false;

  if (is3rdGradeGeo && isGeografia) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*(1|5|6)\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm)) {
      return "EM13CHS503 - Identificar formas de atuação social que contribuam para a redução da desigualdade, do preconceito e da violência";
    }
    if (/aula\s*(2|4|7)\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm) && !/aula\s*2[0-9]/i.test(norm)) {
      return "EM13CHS601 - Identificar os processos de produção e circulação de riquezas, mercadorias e pessoas";
    }
    if (/aula\s*3\b/i.test(norm) && !/aula\s*13/i.test(norm) && !/aula\s*23/i.test(norm)) {
      return "EM13CHS306 - Avaliar as pretensões de universalidade do conhecimento de modo a compreender as relações entre ciência, tecnologia e sociedade";
    }
    if (/aula\s*(8|9|10|11|12)\b/i.test(norm) && !/aula\s*18/i.test(norm) && !/aula\s*19/i.test(norm)) {
      return "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço";
    }
  }

  if (is2ndGrade && isGeografia) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*1\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm)) {
      return "EM13CHS401 - Interpretar a atuação das sociedades na transformação de diferentes lugares e regiões";
    }
    if (/aula\s*(2|3|4|5|6)\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm) && !/aula\s*2[0-9]/i.test(norm)) {
      return "EM13CHS603 - Analisar a formação de diferentes populações e suas relações com o meio ambiente e o espaço geográfico";
    }
    if (/aula\s*(7|8|9|10)\b/i.test(norm) && !/aula\s*17/i.test(norm) && !/aula\s*18/i.test(norm) && !/aula\s*19/i.test(norm)) {
      return "EM13CHS204 - Comparar diferentes processos de ocupação do espaço geográfico e suas consequências socioambientais";
    }
    if (/aula\s*(11|12|13)\b/i.test(norm)) {
      return "EM13CHS402 - Analisar as transformações sociais e econômicas decorrentes da globalização";
    }
  }

  if (is9thGrade && isGeografia) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*(1|2|3|4|5|6|7)\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm)) {
      return "EF09GE10 - Analisar a importância dos organismos internacionais na governança global e na solução de conflitos geopolíticos\nEF09GE11 - Relacionar os fluxos migratórios às crises humanitárias e aos processos de globalização";
    }
    if (/aula\s*(8|9|10|11|12)\b/i.test(norm) && !/aula\s*18/i.test(norm) && !/aula\s*19/i.test(norm)) {
      return "EF09GE18 - Identificar os aspectos culturais e demográficos das diferentes regiões do mundo contemporâneo";
    }
  }

  if (is8thGrade && isGeografia) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*12\b/i.test(norm)) {
      return "EF08GE21 - Discutir o papel das organizações internacionais na governança global e resolução de conflitos";
    }
    if (/aula\s*(2|7|8|11)\b/i.test(norm) && !/aula\s*12/i.test(norm) && !/aula\s*17/i.test(norm) && !/aula\s*18/i.test(norm)) {
      return "EF08GE20B - Analisar as dinâmicas de migração contemporâneas e seus impactos socioeconômicos";
    }
    if (/aula\s*10\b/i.test(norm)) {
      return "EF08GE22 - Relacionar as desigualdades regionais aos processos de desenvolvimento econômico";
    }
    if (/aula\s*9\b/i.test(norm) && !/aula\s*19/i.test(norm)) {
      return "EF08GE15 - Analisar os fluxos de mercadorias e pessoas no contexto da globalização";
    }
    if (/aula\s*6\b/i.test(norm) && !/aula\s*16/i.test(norm) && !/aula\s*26/i.test(norm)) {
      return "EF08GE16B - Analisar a atuação das empresas transnacionais na organização do espaço geográfico mundial\nEF08GE18 - Reconhecer os principais problemas ambientais globais e suas possíveis soluções";
    }
    if (/aula\s*5\b/i.test(norm) && !/aula\s*15/i.test(norm) && !/aula\s*25/i.test(norm)) {
      return "EF08GE16A - Identificar o papel dos países desenvolvidos na economia global e nos fluxos de capitais\nEF08GE16B - Analisar a atuação das empresas transnacionais na organização do espaço geográfico mundial";
    }
    if (/aula\s*4\b/i.test(norm) && !/aula\s*14/i.test(norm) && !/aula\s*24/i.test(norm)) {
      return "EF08GE17 - Avaliar os impactos ambientais decorrentes das atividades produtivas em nível global";
    }
    if (/aula\s*3\b/i.test(norm) && !/aula\s*13/i.test(norm) && !/aula\s*23/i.test(norm)) {
      return "EF08GE16B - Analisar a atuação das empresas transnacionais na organização do espaço geográfico mundial\nEF08GE10 - Analisar a importância dos recursos hídricos para o desenvolvimento humano e econômico";
    }
    if (/aula\s*1\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm) && !/aula\s*21/i.test(norm)) {
      return "EF08GE16A - Identificar o papel dos países desenvolvidos na economia global e nos fluxos de capitais";
    }
  }

  if (is7thGrade && isGeografia) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*17\b/i.test(norm)) {
      return "EF07GE20* - Caracterizar os processos de urbanização no território brasileiro\nEF07GE21* - Identificar as contradições do processo de urbanização em diferentes escalas\nEF07GE09A - Interpretar fenômenos geográficos a partir de representações cartográficas variadas";
    }
    if (/aula\s*18\b/i.test(norm)) {
      return "EF07GE20* - Caracterizar os processos de urbanização no território brasileiro\nEF07GE21* - Identificar as contradições do processo de urbanização em diferentes escalas";
    }
    if (/aula\s*16\b/i.test(norm)) {
      return "EF07GE21* - Identificar as contradições do processo de urbanização em diferentes escalas";
    }
    if (/aula\s*14\b/i.test(norm)) {
      return "EF07GE06 - Discutir as transformações dos espaços geográficos como produto das relações socioeconômicas e culturais\nEF07GE09A - Interpretar fenômenos geográficos a partir de representações cartográficas variadas";
    }
    if (/aula\s*(9|10)\b/i.test(norm) && !/aula\s*19/i.test(norm)) {
      return "EF07GE08 - Analisar a transformação das paisagens naturais e antrópicas em função das dinâmicas populacionais\nEF07GE09A - Interpretar fenômenos geográficos a partir de representações cartográficas variadas";
    }
    if (/aula\s*6\b/i.test(norm) && !/aula\s*16/i.test(norm) && !/aula\s*26/i.test(norm)) {
      return "EF07GE05 - Analisar fatos e situações para compreender a integração entre os lugares e a vida cotidiana das populações\nEF07GE06 - Discutir as transformações dos espaços geográficos como produto das relações socioeconômicas e culturais\nEF07GE08 - Analisar a transformação das paisagens naturais e antrópicas em função das dinâmicas populacionais";
    }
    if (/aula\s*5\b/i.test(norm) && !/aula\s*15/i.test(norm) && !/aula\s*25/i.test(norm)) {
      return "EF07GE05 - Analisar fatos e situações para compreender a integração entre os lugares e a vida cotidiana das populações\nEF07GE06 - Discutir as transformações dos espaços geográficos como produto das relações socioeconômicas e culturais";
    }
    if (/aula\s*(1|2|3|4)\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm) && !/aula\s*2[0-9]/i.test(norm)) {
      return "EF07GE05 - Analisar fatos e situações para compreender a integração entre os lugares e a vida cotidiana das populações";
    }
    if (/aula\s*(7|8|11|12)\b/i.test(norm) && !/aula\s*17/i.test(norm) && !/aula\s*18/i.test(norm)) {
      return "EF07GE08 - Analisar a transformação das paisagens naturais e antrópicas em função das dinâmicas populacionais";
    }
  }

  if (is6thGrade && isGeografia) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*(1|2|3|4|5)\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm) && !/aula\s*2[0-9]/i.test(norm)) {
      return "EF06GE16* - Descrever as características das paisagens dos lugares de vivência e os fatores de sua transformação";
    }
    if (/aula\s*6\b/i.test(norm) && !/aula\s*16/i.test(norm) && !/aula\s*26/i.test(norm)) {
      return "EF06GE11 - Analisar distintas interações das sociedades com a natureza, com base na identificação de impactos econômicos e socioambientais";
    }
    if (/aula\s*(7|8|9)\b/i.test(norm) && !/aula\s*1[7-9]/i.test(norm)) {
      return "EF06GE10 - Explicar a formação de grandes domínios morfoclimáticos no Brasil, sua importância para a biodiversidade e as intervenções humanas";
    }
    if (/aula\s*(10|11|12|13|14|15|16|17|18)\b/i.test(norm)) {
      return "EF06GE05 - Relacionar padrões climáticos aos tipos de vegetação e às atividades econômicas em diferentes regiões";
    }
  }

  const isMatematica = subject ? (subject.toLowerCase().includes("matemática") || subject.toLowerCase().includes("matematica")) : false;

  if (is6thGrade && isMatematica) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*0*(22|24|26|27|28|29)\b/i.test(norm)) {
      return "EF06MA03 - Resolver problemas envolvendo o cálculo do máximo divisor comum ou do mínimo múltiplo comum\nEF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura";
    }
    if (/aula\s*0*(11|12|13|14|15|16|17|18|19|20|21|23|25|30)\b/i.test(norm)) {
      return "EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura";
    }
    if (/aula\s*0*(8|9|10)\b/i.test(norm) && !/aula\s*18/i.test(norm) && !/aula\s*19/i.test(norm) && !/aula\s*28/i.test(norm) && !/aula\s*29/i.test(norm)) {
      return "EF06MA16 - Associar pares ordenados de números à localização de pontos em um plano cartesiano\nEF06MA17 - Quantificar e estabelecer relações entre o número de vértices, faces e arestas de prismas e pirâmides";
    }
    if (/aula\s*0*(3|4|5|6)\b/i.test(norm) && !/aula\s*1[3-6]/i.test(norm) && !/aula\s*2[3-6]/i.test(norm) && !/aula\s*30/i.test(norm)) {
      return "EF06MA17 - Quantificar e estabelecer relações entre o número de vértices, faces e arestas de prismas e pirâmides";
    }
    if (/aula\s*0*(1|2|7)\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm) && !/aula\s*2[0-9]/i.test(norm) && !/aula\s*30/i.test(norm)) {
      return "EF06MA16 - Associar pares ordenados de números à localização de pontos em um plano cartesiano";
    }
  }

  if (is7thGrade && isMatematica) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*0*(21|22|23|24|25|26|27|28|29|30)\b/i.test(norm)) {
      return "EF07MA02 - Resolver e elaborar problemas com números inteiros, envolvendo as operações fundamentais";
    }
    if (/aula\s*0*(11|12|13|14|15|16|17|18|19|20)\b/i.test(norm)) {
      return "EF07MA17 - Resolver e elaborar problemas que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais";
    }
    if (/aula\s*0*(1|2|3|4|5|6|7|8|9|10)\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm) && !/aula\s*2[0-9]/i.test(norm) && !/aula\s*30/i.test(norm)) {
      return "EF07MA27 - Resolver e elaborar problemas envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo";
    }
  }

  if (is8thGrade && isMatematica) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*0*(23|24|25|26|27|28|29|30)\b/i.test(norm)) {
      return "EF08MA04 - Resolver e elaborar problemas com números racionais na representação fracionária e decimal";
    }
    if (/aula\s*0*22\b/i.test(norm)) {
      return "EF07MA02 - Resolver e elaborar problemas com números inteiros, envolvendo as operações fundamentais";
    }
    if (/aula\s*0*(16|17|18|19|20|21)\b/i.test(norm)) {
      return "EF08MA13 - Demonstrar propriedades de figuras geométricas planas, utilizando transformações geométricas";
    }
    if (/aula\s*0*(12|13|14|15)\b/i.test(norm)) {
      return "EF08MA12 - Identificar a simetria de reflexão, rotação e translação em figuras planas e no plano cartesiano";
    }
    if (/aula\s*0*11\b/i.test(norm)) {
      return "EF07MA17 - Resolver e elaborar problemas que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais";
    }
    if (/aula\s*0*(7|8)\b/i.test(norm) && !/aula\s*1[7-8]/i.test(norm) && !/aula\s*2[7-8]/i.test(norm)) {
      return "EF07MA36 - Resolver e elaborar problemas envolvendo o cálculo de probabilidade de eventos em experimentos aleatórios";
    }
    if (/aula\s*0*(2|4|5|6|9|10)\b/i.test(norm) && !/aula\s*12/i.test(norm) && !/aula\s*14/i.test(norm) && !/aula\s*15/i.test(norm) && !/aula\s*16/i.test(norm) && !/aula\s*19/i.test(norm) && !/aula\s*20/i.test(norm) && !/aula\s*22/i.test(norm) && !/aula\s*24/i.test(norm) && !/aula\s*25/i.test(norm) && !/aula\s*26/i.test(norm) && !/aula\s*29/i.test(norm)) {
      return "EF08MA25 - Obter os valores de medidas de tendência central e de dispersão em um conjunto de dados estatísticos";
    }
    if (/aula\s*0*3\b/i.test(norm) && !/aula\s*13/i.test(norm) && !/aula\s*23/i.test(norm)) {
      return "EF07MA35 - Compreender o conceito de frequência e sua representação em tabelas e gráficos estatísticos";
    }
    if (/aula\s*0*1\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm) && !/aula\s*2[0-9]/i.test(norm) && !/aula\s*30/i.test(norm)) {
      return "EF08MA22 - Calcular a probabilidade de eventos, com base na construção do espaço amostral, utilizando o princípio multiplicativo, e reconhecer que a soma das probabilidades de todos os elementos do espaço amostral é igual a 1.";
    }
  }

  if (is9thGrade && isMatematica) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*0*19\b/i.test(norm)) {
      return "EF08MA22 - Calcular a probabilidade de eventos, com base na construção do espaço amostral, utilizando o princípio multiplicativo, e reconhecer que a soma das probabilidades de todos os elementos do espaço amostral é igual a 1.\nEF09MA20 - Analisar e estabelecer a probabilidade de eventos compostos utilizando o princípio multiplicativo";
    }
    if (/aula\s*0*(23|24|25|27|28|29|30)\b/i.test(norm)) {
      return "EF09MA08 - Resolver e elaborar problemas que envolvam a razão de semelhança em figuras geométricas planas e homotetias";
    }
    if (/aula\s*0*(21|22|26)\b/i.test(norm)) {
      return "EF08MA12 - Identificar a simetria de reflexão, rotação e translação em figuras planas e no plano cartesiano";
    }
    if (/aula\s*0*20\b/i.test(norm)) {
      return "EF08MA22 - Calcular a probabilidade de eventos, com base na construção do espaço amostral, utilizando o princípio multiplicativo, e reconhecer que a soma das probabilidades de todos os elementos do espaço amostral é igual a 1.";
    }
    if (/aula\s*0*(13|14|15|16|17|18)\b/i.test(norm)) {
      return "EF09MA20 - Analisar e estabelecer a probabilidade de eventos compostos utilizando o princípio multiplicativo";
    }
    if (/aula\s*0*12\b/i.test(norm)) {
      return "EF08MA30 - Estimar e medir volumes de prismas e cilindros por meio de aproximações";
    }
    if (/aula\s*0*11\b/i.test(norm)) {
      return "EF07MA34 - Planejar e realizar pesquisa envolvendo a coleta de dados estatísticos em diferentes contextos";
    }
    if (/aula\s*0*10\b/i.test(norm)) {
      return "EF07MA33 - Estabelecer a relação entre o volume e a capacidade de recipientes por meio de transformações de unidades";
    }
    if (/aula\s*0*(7|8)\b/i.test(norm) && !/aula\s*1[7-8]/i.test(norm) && !/aula\s*2[7-8]/i.test(norm)) {
      return "EF09MA11 - Resolver e elaborar problemas envolvendo medidas de volume de corpos e recipientes complexos";
    }
    if (/aula\s*0*6\b/i.test(norm) && !/aula\s*16/i.test(norm) && !/aula\s*26/i.test(norm)) {
      return "EF07MA33 - Estabelecer a relação entre o volume e a capacidade de recipientes por meio de transformações de unidades";
    }
    if (/aula\s*0*(1|2|3|4|5|9)\b/i.test(norm) && !/aula\s*1[1-59]/i.test(norm) && !/aula\s*2[1-59]/i.test(norm)) {
      return "EF08MA19 - Resolver e elaborar problemas envolvendo medidas de volume de prismas retos, por meio de composições e decomposições";
    }
  }

  if (is2ndGrade && isMatematica) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*0*10\b/i.test(norm)) {
      return "EF06MA17 - Quantificar e estabelecer relações entre o número de vértices, faces e arestas de prismas e pirâmides\nEM13MAT309 - Resolver e elaborar problemas envolvendo o cálculo de áreas de superfícies planas e de corpos redondos";
    }
    if (/aula\s*0*9\b/i.test(norm)) {
      return "EF06MA17 - Quantificar e estabelecer relações entre o número de vértices, faces e arestas de prismas e pirâmides";
    }
    if (/aula\s*0*(11|12|13|14|15|16|17|18|19|20|21|22|23|24)\b/i.test(norm)) {
      return "EM13MAT309 - Resolver e elaborar problemas envolvendo o cálculo de áreas de superfícies planas e de corpos redondos";
    }
    if (/aula\s*0*(1|2|3|4|5|6|7|8)\b/i.test(norm) && !/aula\s*1[0-8]/i.test(norm) && !/aula\s*2[0-4]/i.test(norm)) {
      return "EM13MAT307 - Identificar e analisar a presença de grandezas em situações reais e geométricas envolvendo trigonometria no triângulo retângulo";
    }
  }

  const is3rdGrade = gradeLevel ? (gradeLevel.includes("3º") || gradeLevel.toLowerCase().includes("3 ano") || gradeLevel.includes("3ª")) : false;

  if (is3rdGrade && isMatematica) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*0*(18|19|20|21|22|23|24)\b/i.test(norm)) {
      return "EM13MAT307 - Identificar e analisar a presença de grandezas em situações reais e geométricas envolvendo trigonometria no triângulo retângulo";
    }
    if (/aula\s*0*17\b/i.test(norm)) {
      return "EM13MAT506 - Interpretar informações contidas em textos e gráficos estatísticos, identificando tendências e padrões";
    }
    if (/aula\s*0*(9|10|11|12|13|14|15|16)\b/i.test(norm)) {
      return "EM13MAT316 - Resolver e elaborar problemas envolvendo a análise de dados estatísticos em diferentes contextos";
    }
    if (/aula\s*0*(1|2|3|4|5|6|7|8)\b/i.test(norm) && !/aula\s*1[0-8]/i.test(norm) && !/aula\s*2[0-4]/i.test(norm)) {
      return "EM13MAT314 - Investigar e analisar a ocorrência de fenômenos estatísticos por meio de distribuições probabilísticas";
    }
  }

  const is2ndGradeHist = gradeLevel ? (gradeLevel.includes("2º") || gradeLevel.toLowerCase().includes("3 ano")) : (!is3rdGrade && !is6thGrade && !is7thGrade);
  const isHistoria = subject ? (subject.toLowerCase().includes("história") || subject.toLowerCase().includes("historia")) : false;

  if (is3rdGrade && isHistoria) {
    const norm = cleanTitle.toLowerCase();
    if ((/aula\s*1\b/i.test(norm) || /aula\s*5\b/i.test(norm) || /aula\s*6\b/i.test(norm)) && !/aula\s*1[0-9]/i.test(norm) && !/aula\s*2[0-9]/i.test(norm)) {
      return "EM13CHS503 - Identificar formas de atuação social que contribuam para a redução da desigualdade, do preconceito e da violência.";
    }
    if (/aula\s*3\b/i.test(norm) && !/aula\s*13/i.test(norm) && !/aula\s*23/i.test(norm)) {
      return "EM13CHS306 - Avaliar as pretensões de universalidade do conhecimento de modo a compreender as relações entre ciência, tecnologia e sociedade.";
    }
    if (/aula\s*(2|4|7|8|9|10|11|12)\b/i.test(norm) && !/aula\s*1[3-9]/i.test(norm) && !/aula\s*2[0-9]/i.test(norm)) {
      return "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.";
    }
  }

  if (is2ndGradeHist && isHistoria) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*1\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm)) {
      return "EM13CHS401 - Identificar e analisar as relações entre sujeitos, grupos, classes sociais e sociedades com culturas distintas diante das transformações técnicas, tecnológicas e informacionais.";
    }
    if (/aula\s*[2-6]\b/i.test(norm) && !/aula\s*1[2-6]/i.test(norm) && !/aula\s*2[0-9]/i.test(norm)) {
      return "EM13CHS603 - Analisar a formação de diferentes países, povos e nações e de suas experiências políticas e de exercício da cidadania.";
    }
    if (/aula\s*(7|8|9|10)\b/i.test(norm) && !/aula\s*17/i.test(norm) && !/aula\s*18/i.test(norm) && !/aula\s*19/i.test(norm)) {
      return "EM13CHS204 - Posicionar-se com base em princípios éticos frente aos desafios ambientais contemporâneos.";
    }
    if (/aula\s*(11|12)\b/i.test(norm)) {
      return "EM13CHS402 - Analisar e comparar indicadores de emprego, trabalho e renda em diferentes espaços, escalas e tempos, associando-os a processos de estratificação social.";
    }
  }

  const normalizeStr = (str: string) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "");

  const normInput = normalizeStr(cleanTitle);

  for (const [key, val] of Object.entries(LESSON_BNCC_MAP)) {
    if (normalizeStr(key) === normInput && val.length > 0) {
      return val.map((s) => s.fullText).join("\n");
    }
  }

  const matchKey = Object.keys(LESSON_BNCC_MAP).find((key) => {
    const normKey = normalizeStr(key);
    return normInput.includes(normKey) || normKey.includes(normInput);
  });

  return matchKey && LESSON_BNCC_MAP[matchKey]?.length > 0
    ? LESSON_BNCC_MAP[matchKey].map((s) => s.fullText).join("\n")
    : "";
}

export function getLessonBNCCList(lessonTitle: string, gradeLevel?: string, subject?: string): BnccSkillDetail[] {
  if (!lessonTitle) return [];
  const cleanTitle = lessonTitle.trim();

  // 0. Handler específico para Ciências
  const isCiencias = subject
    ? subject.toLowerCase().includes("ciência") ||
      subject.toLowerCase().includes("ciencia")
    : cleanTitle.toLowerCase().includes("sistema digestório") ||
      cleanTitle.toLowerCase().includes("vacinação") ||
      cleanTitle.toLowerCase().includes("placas tectônicas") ||
      cleanTitle.toLowerCase().includes("sistema solar") ||
      cleanTitle.toLowerCase().includes("puberdade") ||
      cleanTitle.toLowerCase().includes("ondas eletromagnéticas") ||
      cleanTitle.toLowerCase().includes("camada de ozônio");

  if (isCiencias) {
    let gradeKey = "6";
    if (gradeLevel) {
      if (gradeLevel.includes("9º") || gradeLevel.includes("9ª") || gradeLevel.includes("9")) gradeKey = "9";
      else if (gradeLevel.includes("8º") || gradeLevel.includes("8ª") || gradeLevel.includes("8")) gradeKey = "8";
      else if (gradeLevel.includes("7º") || gradeLevel.includes("7ª") || gradeLevel.includes("7")) gradeKey = "7";
      else if (gradeLevel.includes("6º") || gradeLevel.includes("6ª") || gradeLevel.includes("6")) gradeKey = "6";
    }
    const match = cleanTitle.match(/aula\s*(\d+)/i) || cleanTitle.match(/^(\d+)/);
    const num = match ? parseInt(match[1], 10) : 1;
    const skillCodes =
      CIENCIAS_SKILLS_TABLE[gradeKey]?.[num] ||
      CIENCIAS_SKILLS_TABLE[gradeKey]?.[1] ||
      ["EF06CI06"];

    return skillCodes.map((code) => {
      const cleanCode = code.replace(/\*/g, "");
      const known = KNOWN_CURRICULUM_SKILLS[code] || KNOWN_CURRICULUM_SKILLS[cleanCode];
      if (known) {
        return {
          code: code,
          fullText: `${code} - ${known.verb} ${known.content} ${known.context}`,
          verb: known.verb,
          content: known.content,
          context: known.context,
        };
      }
      return {
        code: code,
        fullText: code,
        verb: "Investigar e compreender",
        content: "fenômenos naturais, sistemas biológicos e científicos",
        context: "em contextos socioambientais e cotidianos",
      };
    });
  }

  // 0. Handler específico para Biologia
  const isBiologia = subject
    ? subject.toLowerCase().includes("biologia")
    : cleanTitle.toLowerCase().includes("saúde e bem-estar dos adolescentes") ||
      cleanTitle.toLowerCase().includes("infecções sexualmente transmissíveis") ||
      cleanTitle.toLowerCase().includes("contraceptivos hormonais") ||
      cleanTitle.toLowerCase().includes("sistema reprodutor") ||
      cleanTitle.toLowerCase().includes("como as drogas podem impactar") ||
      cleanTitle.toLowerCase().includes("obesidade e desnutrição") ||
      cleanTitle.toLowerCase().includes("higiene dos alimentos") ||
      cleanTitle.toLowerCase().includes("protozooses e saneamento básico");

  if (isBiologia) {
    let gradeKey = "2";
    if (gradeLevel) {
      if (gradeLevel.includes("3º") || gradeLevel.includes("3ª") || gradeLevel.includes("3")) gradeKey = "3";
      else if (gradeLevel.includes("2º") || gradeLevel.includes("2ª") || gradeLevel.includes("2")) gradeKey = "2";
      else if (gradeLevel.includes("1º") || gradeLevel.includes("1ª") || gradeLevel.includes("1")) gradeKey = "1";
    }
    const match = cleanTitle.match(/aula\s*(\d+)/i) || cleanTitle.match(/^(\d+)/);
    const num = match ? parseInt(match[1], 10) : 1;
    const skillCodes =
      BIOLOGIA_SKILLS_TABLE[gradeKey]?.[num] ||
      BIOLOGIA_SKILLS_TABLE[gradeKey]?.[1] ||
      ["EM13CNT207"];

    return skillCodes.map((code) => {
      const cleanCode = code.replace(/\*/g, "");
      const known = KNOWN_CURRICULUM_SKILLS[code] || KNOWN_CURRICULUM_SKILLS[cleanCode];
      if (known) {
        return {
          code: code,
          fullText: `${code} - ${known.verb} ${known.content} ${known.context}`,
          verb: known.verb,
          content: known.content,
          context: known.context,
        };
      }
      return {
        code: code,
        fullText: code,
        verb: "Analisar e compreender",
        content: "processos biológicos, funcionamento do corpo humano e saúde coletiva",
        context: "em contextos socioambientais e preventivos",
      };
    });
  }

  // 0. Handler específico para Física
  const isFisica = subject
    ? subject.toLowerCase().includes("física") ||
      subject.toLowerCase().includes("fisica")
    : cleanTitle.toLowerCase().includes("propagação retilínea") ||
      cleanTitle.toLowerCase().includes("espelhos planos") ||
      cleanTitle.toLowerCase().includes("espelhos esféricos") ||
      cleanTitle.toLowerCase().includes("equação de gauss") ||
      cleanTitle.toLowerCase().includes("lentes delgadas") ||
      cleanTitle.toLowerCase().includes("faraday-neumann") ||
      cleanTitle.toLowerCase().includes("física quântica") ||
      cleanTitle.toLowerCase().includes("dualidade onda-partícula") ||
      cleanTitle.toLowerCase().includes("leis de ohm") ||
      cleanTitle.toLowerCase().includes("termodinâmica");

  if (isFisica) {
    let gradeKey = "2";
    if (gradeLevel) {
      if (gradeLevel.includes("3º") || gradeLevel.includes("3ª") || gradeLevel.includes("3")) gradeKey = "3";
      else if (gradeLevel.includes("2º") || gradeLevel.includes("2ª") || gradeLevel.includes("2")) gradeKey = "2";
      else if (gradeLevel.includes("1º") || gradeLevel.includes("1ª") || gradeLevel.includes("1")) gradeKey = "1";
    }
    const match = cleanTitle.match(/aula\s*(\d+)/i) || cleanTitle.match(/^(\d+)/);
    const num = match ? parseInt(match[1], 10) : 1;
    const skillCodes =
      FISICA_SKILLS_TABLE[gradeKey]?.[num] ||
      FISICA_SKILLS_TABLE[gradeKey]?.[1] ||
      (gradeKey === "3" ? ["EM13CNT107"] : ["EM13CNT306"]);

    return skillCodes.map((code) => {
      const cleanCode = code.replace(/\*/g, "");
      const known = KNOWN_CURRICULUM_SKILLS[code] || KNOWN_CURRICULUM_SKILLS[cleanCode];
      if (known) {
        return {
          code: code,
          fullText: `${code} - ${known.verb} ${known.content} ${known.context}`,
          verb: known.verb,
          content: known.content,
          context: known.context,
        };
      }
      return {
        code: code,
        fullText: code,
        verb: "Investigar e analisar",
        content: "fenômenos físicos, térmicos, eletromagnéticos e tecnológicos",
        context: "em contextos práticos, industriais e cotidianos",
      };
    });
  }

  // 0. Handler específico para Sociologia
  const isSociologia = subject
    ? subject.toLowerCase().includes("sociologia")
    : cleanTitle.toLowerCase().includes("mudanças sociais") ||
      cleanTitle.toLowerCase().includes("sociedade de risco") ||
      cleanTitle.toLowerCase().includes("mundo do trabalho e capitalismo") ||
      cleanTitle.toLowerCase().includes("sociedade de consumidores") ||
      cleanTitle.toLowerCase().includes("indústria cultural, consumismo");

  if (isSociologia) {
    let gradeKey = "2";
    if (gradeLevel) {
      if (gradeLevel.includes("3º") || gradeLevel.includes("3ª") || gradeLevel.includes("3")) gradeKey = "3";
      else if (gradeLevel.includes("2º") || gradeLevel.includes("2ª") || gradeLevel.includes("2")) gradeKey = "2";
      else if (gradeLevel.includes("1º") || gradeLevel.includes("1ª") || gradeLevel.includes("1")) gradeKey = "1";
    }
    const match = cleanTitle.match(/aula\s*(\d+)/i) || cleanTitle.match(/^(\d+)/);
    const num = match ? parseInt(match[1], 10) : 1;
    const skillCodes =
      SOCIOLOGIA_SKILLS_TABLE[gradeKey]?.[num] ||
      SOCIOLOGIA_SKILLS_TABLE[gradeKey]?.[1] ||
      ["EM13CHS202"];

    return skillCodes.map((code) => {
      const cleanCode = code.replace(/\*/g, "");
      const known = KNOWN_CURRICULUM_SKILLS[code] || KNOWN_CURRICULUM_SKILLS[cleanCode];
      if (known) {
        return {
          code: code,
          fullText: `${code} - ${known.verb} ${known.content} ${known.context}`,
          verb: known.verb,
          content: known.content,
          context: known.context,
        };
      }
      return {
        code: code,
        fullText: code,
        verb: "Analisar e avaliar",
        content: "processos sociais, transformações no mundo do trabalho e dinâmicas culturais",
        context: "na sociedade contemporânea",
      };
    });
  }

  // 0. Handler específico para Química
  const isQuimica = subject
    ? subject.toLowerCase().includes("química") ||
      subject.toLowerCase().includes("quimica")
    : cleanTitle.toLowerCase().includes("pilha") ||
      cleanTitle.toLowerCase().includes("bateria") ||
      cleanTitle.toLowerCase().includes("eletroquímic") ||
      cleanTitle.toLowerCase().includes("oxirredução") ||
      cleanTitle.toLowerCase().includes("eletrólise") ||
      cleanTitle.toLowerCase().includes("galvanoplastia");

  if (isQuimica) {
    let gradeKey = "2";
    if (gradeLevel) {
      if (gradeLevel.includes("3º") || gradeLevel.includes("3ª") || gradeLevel.includes("3")) gradeKey = "3";
      else if (gradeLevel.includes("2º") || gradeLevel.includes("2ª") || gradeLevel.includes("2")) gradeKey = "2";
      else if (gradeLevel.includes("1º") || gradeLevel.includes("1ª") || gradeLevel.includes("1")) gradeKey = "1";
    }
    const match = cleanTitle.match(/aula\s*(\d+)/i) || cleanTitle.match(/^(\d+)/);
    const num = match ? parseInt(match[1], 10) : 1;
    const skillCodes =
      QUIMICA_SKILLS_TABLE[gradeKey]?.[num] ||
      QUIMICA_SKILLS_TABLE[gradeKey]?.[1] ||
      ["EM13CNT107"];

    return skillCodes.map((code) => {
      const cleanCode = code.replace(/\*/g, "");
      const known = KNOWN_CURRICULUM_SKILLS[code] || KNOWN_CURRICULUM_SKILLS[cleanCode];
      if (known) {
        return {
          code: code,
          fullText: `${code} - ${known.verb} ${known.content} ${known.context}`,
          verb: known.verb,
          content: known.content,
          context: known.context,
        };
      }
      return {
        code: code,
        fullText: code,
        verb: "Investigar e analisar",
        content: "processos químicos, transformações eletroquímicas e sustentabilidade",
        context: "em contextos tecnológicos e socioambientais",
      };
    });
  }

  // 0. Handler específico para Português / Língua Portuguesa
  const isPortugues = subject
    ? subject.toLowerCase().includes("português") ||
      subject.toLowerCase().includes("portugues") ||
      subject.toLowerCase().includes("língua portuguesa") ||
      subject.toLowerCase().includes("lingua portuguesa") ||
      subject.toLowerCase().includes("redação") ||
      subject.toLowerCase().includes("redacao") ||
      subject.toLowerCase().includes("literatura")
    : false;

  if (isPortugues) {
    let gradeKey = "6";
    if (gradeLevel) {
      if (gradeLevel.includes("3º") || gradeLevel.includes("3ª") || gradeLevel.includes("3")) gradeKey = "3";
      else if (gradeLevel.includes("2º") || gradeLevel.includes("2ª") || gradeLevel.includes("2")) gradeKey = "2";
      else if (gradeLevel.includes("9º") || gradeLevel.includes("9ª") || gradeLevel.includes("9")) gradeKey = "9";
      else if (gradeLevel.includes("8º") || gradeLevel.includes("8ª") || gradeLevel.includes("8")) gradeKey = "8";
      else if (gradeLevel.includes("7º") || gradeLevel.includes("7ª") || gradeLevel.includes("7")) gradeKey = "7";
      else if (gradeLevel.includes("6º") || gradeLevel.includes("6ª") || gradeLevel.includes("6")) gradeKey = "6";
    }
    const match = cleanTitle.match(/aula\s*(\d+)/i) || cleanTitle.match(/^(\d+)/);
    const num = match ? parseInt(match[1], 10) : 1;
    const skillCodes =
      PORTUGUES_SKILLS_TABLE[gradeKey]?.[num] ||
      PORTUGUES_SKILLS_TABLE[gradeKey]?.[1] ||
      ["EF06LP01"];

    return skillCodes.map((code) => {
      const cleanCode = code.replace(/\*/g, "");
      const known = KNOWN_CURRICULUM_SKILLS[code] || KNOWN_CURRICULUM_SKILLS[cleanCode];
      if (known) {
        return {
          code: code,
          fullText: `${code} - ${known.verb} ${known.content} ${known.context}`,
          verb: known.verb,
          content: known.content,
          context: known.context,
        };
      }
      return {
        code: code,
        fullText: code,
        verb: "Analisar, produzir e interpretar",
        content: "gêneros discursivos e textuais da língua portuguesa",
        context: "em contextos de uso e circulação social",
      };
    });
  }

  // 0. Handler específico para Arte
  const isArte = subject
    ? subject.toLowerCase().includes("arte") ||
      subject.toLowerCase().includes("artes")
    : cleanTitle.toLowerCase().includes("circo") ||
      cleanTitle.toLowerCase().includes("palhaço") ||
      cleanTitle.toLowerCase().includes("fantoche") ||
      cleanTitle.toLowerCase().includes("teatro") ||
      cleanTitle.toLowerCase().includes("tablado") ||
      cleanTitle.toLowerCase().includes("câmera e ação");

  if (isArte) {
    let gradeKey = "6";
    if (gradeLevel) {
      if (gradeLevel.includes("9º") || gradeLevel.includes("9ª") || gradeLevel.includes("9")) gradeKey = "9";
      else if (gradeLevel.includes("8º") || gradeLevel.includes("8ª") || gradeLevel.includes("8")) gradeKey = "8";
      else if (gradeLevel.includes("7º") || gradeLevel.includes("7ª") || gradeLevel.includes("7")) gradeKey = "7";
      else if (gradeLevel.includes("6º") || gradeLevel.includes("6ª") || gradeLevel.includes("6")) gradeKey = "6";
    }
    const match = cleanTitle.match(/aula\s*(\d+)/i) || cleanTitle.match(/^(\d+)/);
    const num = match ? parseInt(match[1], 10) : 1;
    const skillCodes =
      ARTE_SKILLS_TABLE[gradeKey]?.[num] ||
      ARTE_SKILLS_TABLE[gradeKey]?.[1] ||
      ["EF06AR24"];

    return skillCodes.map((code) => {
      const cleanCode = code.replace(/\*/g, "");
      const known = KNOWN_CURRICULUM_SKILLS[code] || KNOWN_CURRICULUM_SKILLS[cleanCode];
      if (known) {
        return {
          code: code,
          fullText: `${code} - ${known.verb} ${known.content} ${known.context}`,
          verb: known.verb,
          content: known.content,
          context: known.context,
        };
      }
      return {
        code: code,
        fullText: code,
        verb: "Reconhecer e apreciar",
        content: "processos artísticos e linguagens cênicas",
        context: "em diferentes épocas e contextos",
      };
    });
  }

  // 0. Handler específico para Educação Física
  const isEdFisica = subject
    ? subject.toLowerCase().includes("educação física") ||
      subject.toLowerCase().includes("educacao fisica") ||
      subject.toLowerCase().includes("ed. física") ||
      subject.toLowerCase().includes("ed física") ||
      subject.toLowerCase().includes("ed. fisica") ||
      subject.toLowerCase().includes("ed fisica") ||
      subject.toLowerCase().includes("educação fisica")
    : cleanTitle.toLowerCase().includes("damas e xadrez") ||
      cleanTitle.toLowerCase().includes("pong hau ki") ||
      cleanTitle.toLowerCase().includes("tarracá") ||
      cleanTitle.toLowerCase().includes("huka-huka") ||
      cleanTitle.toLowerCase().includes("swordplay") ||
      cleanTitle.toLowerCase().includes("trekking");

  if (isEdFisica) {
    let gradeKey = "6";
    if (gradeLevel) {
      if (gradeLevel.includes("3º") || gradeLevel.includes("3ª") || gradeLevel.includes("3")) gradeKey = "3";
      else if (gradeLevel.includes("2º") || gradeLevel.includes("2ª") || gradeLevel.includes("2")) gradeKey = "2";
      else if (gradeLevel.includes("9º") || gradeLevel.includes("9")) gradeKey = "9";
      else if (gradeLevel.includes("8º") || gradeLevel.includes("8")) gradeKey = "8";
      else if (gradeLevel.includes("7º") || gradeLevel.includes("7")) gradeKey = "7";
      else if (gradeLevel.includes("6º") || gradeLevel.includes("6")) gradeKey = "6";
    }
    const match = cleanTitle.match(/aula\s*(\d+)/i) || cleanTitle.match(/^(\d+)/);
    const num = match ? parseInt(match[1], 10) : 1;
    const skillCodes =
      PHYSICAL_EDUCATION_SKILLS_TABLE[gradeKey]?.[num] ||
      PHYSICAL_EDUCATION_SKILLS_TABLE[gradeKey]?.[1] ||
      ["EF06EF24*"];

    return skillCodes.map((code) => {
      const cleanCode = code.replace(/\*/g, "");
      const known = KNOWN_CURRICULUM_SKILLS[code] || KNOWN_CURRICULUM_SKILLS[cleanCode];
      if (known) {
        return {
          code: code,
          fullText: `${code} - ${known.verb} ${known.content} ${known.context}`,
          verb: known.verb,
          content: known.content,
          context: known.context,
        };
      }
      return {
        code: code,
        fullText: code,
        verb: "Experimentar e fruir",
        content: "práticas corporais e temas de Educação Física",
        context: "em situações escolares",
      };
    });
  }

  // 1. Handler específico para Inglês
  const isIngles = subject
    ? subject.toLowerCase().includes("inglês") ||
      subject.toLowerCase().includes("ingles") ||
      subject.toLowerCase().includes("língua inglesa") ||
      subject.toLowerCase().includes("lingua inglesa")
    : cleanTitle.toLowerCase().includes("english") || cleanTitle.toLowerCase().includes("inglês");

  if (isIngles) {
    let gradeKey = "6";
    if (gradeLevel) {
      if (gradeLevel.includes("3º") || gradeLevel.includes("3ª") || gradeLevel.includes("3")) gradeKey = "3";
      else if (gradeLevel.includes("2º") || gradeLevel.includes("2ª") || gradeLevel.includes("2")) gradeKey = "2";
      else if (gradeLevel.includes("9º") || gradeLevel.includes("9")) gradeKey = "9";
      else if (gradeLevel.includes("8º") || gradeLevel.includes("8")) gradeKey = "8";
      else if (gradeLevel.includes("7º") || gradeLevel.includes("7")) gradeKey = "7";
      else if (gradeLevel.includes("6º") || gradeLevel.includes("6")) gradeKey = "6";
    }
    const match = cleanTitle.match(/aula\s*(\d+)/i) || cleanTitle.match(/^(\d+)/);
    const num = match ? parseInt(match[1], 10) : 1;
    const skillCodes =
      ENGLISH_SKILLS_TABLE[gradeKey]?.[num] ||
      ENGLISH_SKILLS_TABLE[gradeKey]?.[1] ||
      ["EF06LI04", "EF06LI05", "EF06LI06"];

    return skillCodes.map((code) => {
      const cleanCode = code.replace(/\*/g, "");
      const known = KNOWN_CURRICULUM_SKILLS[code] || KNOWN_CURRICULUM_SKILLS[cleanCode];
      if (known) {
        return {
          code: code,
          fullText: `${code} - ${known.verb} ${known.content} ${known.context}`,
          verb: known.verb,
          content: known.content,
          context: known.context,
        };
      }
      return {
        code: code,
        fullText: code,
        verb: "Desenvolver e aplicar",
        content: "habilidades de língua inglesa",
        context: "em situações comunicativas",
      };
    });
  }

  if (LESSON_BNCC_MAP[cleanTitle]) {
    return LESSON_BNCC_MAP[cleanTitle];
  }

  const is3rdGradeGeo = gradeLevel ? (gradeLevel.includes("3º") || gradeLevel.toLowerCase().includes("3 ano") || gradeLevel.includes("3ª")) : false;
  const is2ndGrade = gradeLevel ? (gradeLevel.includes("2º") || gradeLevel.toLowerCase().includes("2 ano") || gradeLevel.includes("2ª")) : false;
  const is9thGrade = gradeLevel ? (gradeLevel.includes("9º") || gradeLevel.toLowerCase().includes("9 ano") || gradeLevel.includes("9")) : false;
  const is8thGrade = gradeLevel ? (gradeLevel.includes("8º") || gradeLevel.toLowerCase().includes("8 ano") || gradeLevel.includes("8")) : false;
  const is7thGrade = gradeLevel ? (gradeLevel.includes("7º") || gradeLevel.toLowerCase().includes("7 ano") || gradeLevel.includes("7")) : false;
  const is6thGrade = gradeLevel ? (gradeLevel.includes("6º") || gradeLevel.toLowerCase().includes("6 ano") || gradeLevel.includes("6")) : false;
  const isGeografia = subject ? (subject.toLowerCase().includes("geografia")) : false;

  if (is3rdGradeGeo && isGeografia) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*(1|5|6)\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm)) {
      return [
        {
          code: "EM13CHS503",
          fullText: "EM13CHS503 - Identificar formas de atuação social que contribuam para a redução da desigualdade, do preconceito e da violência",
          verb: "Identificar",
          content: "formas de atuação social",
          context: "que contribuam para a redução da desigualdade, do preconceito e da violência",
        },
      ];
    }
    if (/aula\s*(2|4|7)\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm) && !/aula\s*2[0-9]/i.test(norm)) {
      return [
        {
          code: "EM13CHS601",
          fullText: "EM13CHS601 - Identificar os processos de produção e circulação de riquezas, mercadorias e pessoas",
          verb: "Identificar",
          content: "os processos de produção",
          context: "e circulação de riquezas, mercadorias e pessoas",
        },
      ];
    }
    if (/aula\s*3\b/i.test(norm) && !/aula\s*13/i.test(norm) && !/aula\s*23/i.test(norm)) {
      return [
        {
          code: "EM13CHS306",
          fullText: "EM13CHS306 - Avaliar as pretensões de universalidade do conhecimento de modo a compreender as relações entre ciência, tecnologia e sociedade",
          verb: "Avaliar",
          content: "as pretensões de universalidade do conhecimento",
          context: "de modo a compreender as relações entre ciência, tecnologia e sociedade",
        },
      ];
    }
    if (/aula\s*(8|9|10|11|12)\b/i.test(norm) && !/aula\s*18/i.test(norm) && !/aula\s*19/i.test(norm)) {
      return [
        {
          code: "EM13CHS501",
          fullText: "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço",
          verb: "Analisar",
          content: "os fundamentos da ética",
          context: "nas diferentes culturas, tempo e espaço",
        },
      ];
    }
  }

  if (is2ndGrade && isGeografia) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*1\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm)) {
      return [
        {
          code: "EM13CHS401",
          fullText: "EM13CHS401 - Interpretar a atuação das sociedades na transformação de diferentes lugares e regiões",
          verb: "Interpretar",
          content: "a atuação das sociedades",
          context: "na transformação de diferentes lugares e regiões",
        },
      ];
    }
    if (/aula\s*(2|3|4|5|6)\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm) && !/aula\s*2[0-9]/i.test(norm)) {
      return [
        {
          code: "EM13CHS603",
          fullText: "EM13CHS603 - Analisar a formação de diferentes populações e suas relações com o meio ambiente e o espaço geográfico",
          verb: "Analisar",
          content: "a formação de diferentes populações",
          context: "e suas relações com o meio ambiente e o espaço geográfico",
        },
      ];
    }
    if (/aula\s*(7|8|9|10)\b/i.test(norm) && !/aula\s*17/i.test(norm) && !/aula\s*18/i.test(norm) && !/aula\s*19/i.test(norm)) {
      return [
        {
          code: "EM13CHS204",
          fullText: "EM13CHS204 - Comparar diferentes processos de ocupação do espaço geográfico e suas consequências socioambientais",
          verb: "Comparar",
          content: "diferentes processos de ocupação",
          context: "do espaço geográfico e suas consequências socioambientais",
        },
      ];
    }
    if (/aula\s*(11|12|13)\b/i.test(norm)) {
      return [
        {
          code: "EM13CHS402",
          fullText: "EM13CHS402 - Analisar as transformações sociais e econômicas decorrentes da globalização",
          verb: "Analisar",
          content: "as transformações sociais",
          context: "e econômicas decorrentes da globalização",
        },
      ];
    }
  }

  if (is9thGrade && isGeografia) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*(1|2|3|4|5|6|7)\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm)) {
      return [
        {
          code: "EF09GE10",
          fullText: "EF09GE10 - Analisar a importância dos organismos internacionais na governança global e na solução de conflitos geopolíticos",
          verb: "Analisar",
          content: "a importância dos organismos internacionais",
          context: "na governança global e na solução de conflitos geopolíticos",
        },
        {
          code: "EF09GE11",
          fullText: "EF09GE11 - Relacionar os fluxos migratórios às crises humanitárias e aos processos de globalização",
          verb: "Relacionar",
          content: "os fluxos migratórios",
          context: "às crises humanitárias e aos processos de globalização",
        },
      ];
    }
    if (/aula\s*(8|9|10|11|12)\b/i.test(norm) && !/aula\s*18/i.test(norm) && !/aula\s*19/i.test(norm)) {
      return [
        {
          code: "EF09GE18",
          fullText: "EF09GE18 - Identificar os aspectos culturais e demográficos das diferentes regiões do mundo contemporâneo",
          verb: "Identificar",
          content: "os aspectos culturais e demográficos",
          context: "das diferentes regiões do mundo contemporâneo",
        },
      ];
    }
  }

  if (is8thGrade && isGeografia) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*12\b/i.test(norm)) {
      return [
        {
          code: "EF08GE21",
          fullText: "EF08GE21 - Discutir o papel das organizações internacionais na governança global e resolução de conflitos",
          verb: "Discutir",
          content: "o papel das organizações internacionais",
          context: "na governança global e resolução de conflitos",
        },
      ];
    }
    if (/aula\s*(2|7|8|11)\b/i.test(norm) && !/aula\s*12/i.test(norm) && !/aula\s*17/i.test(norm) && !/aula\s*18/i.test(norm)) {
      return [
        {
          code: "EF08GE20B",
          fullText: "EF08GE20B - Analisar as dinâmicas de migração contemporâneas e seus impactos socioeconômicos",
          verb: "Analisar",
          content: "as dinâmicas de migração",
          context: "contemporâneas e seus impactos socioeconômicos",
        },
      ];
    }
    if (/aula\s*10\b/i.test(norm)) {
      return [
        {
          code: "EF08GE22",
          fullText: "EF08GE22 - Relacionar as desigualdades regionais aos processos de desenvolvimento econômico",
          verb: "Relacionar",
          content: "as desigualdades regionais",
          context: "aos processos de desenvolvimento econômico",
        },
      ];
    }
    if (/aula\s*9\b/i.test(norm) && !/aula\s*19/i.test(norm)) {
      return [
        {
          code: "EF08GE15",
          fullText: "EF08GE15 - Analisar os fluxos de mercadorias e pessoas no contexto da globalização",
          verb: "Analisar",
          content: "os fluxos de mercadorias",
          context: "e pessoas no contexto da globalização",
        },
      ];
    }
    if (/aula\s*6\b/i.test(norm) && !/aula\s*16/i.test(norm) && !/aula\s*26/i.test(norm)) {
      return [
        {
          code: "EF08GE16B",
          fullText: "EF08GE16B - Analisar a atuação das empresas transnacionais na organização do espaço geográfico mundial",
          verb: "Analisar",
          content: "a atuação das empresas transnacionais",
          context: "na organização do espaço geográfico mundial",
        },
        {
          code: "EF08GE18",
          fullText: "EF08GE18 - Reconhecer os principais problemas ambientais globais e suas possíveis soluções",
          verb: "Reconhecer",
          content: "os principais problemas ambientais",
          context: "globais e suas possíveis soluções",
        },
      ];
    }
    if (/aula\s*5\b/i.test(norm) && !/aula\s*15/i.test(norm) && !/aula\s*25/i.test(norm)) {
      return [
        {
          code: "EF08GE16A",
          fullText: "EF08GE16A - Identificar o papel dos países desenvolvidos na economia global e nos fluxos de capitais",
          verb: "Identificar",
          content: "o papel dos países desenvolvidos",
          context: "na economia global e nos fluxos de capitais",
        },
        {
          code: "EF08GE16B",
          fullText: "EF08GE16B - Analisar a atuação das empresas transnacionais na organização do espaço geográfico mundial",
          verb: "Analisar",
          content: "a atuação das empresas transnacionais",
          context: "na organização do espaço geográfico mundial",
        },
      ];
    }
    if (/aula\s*4\b/i.test(norm) && !/aula\s*14/i.test(norm) && !/aula\s*24/i.test(norm)) {
      return [
        {
          code: "EF08GE17",
          fullText: "EF08GE17 - Avaliar os impactos ambientais decorrentes das atividades produtivas em nível global",
          verb: "Avaliar",
          content: "os impactos ambientais",
          context: "decorrentes das atividades produtivas em nível global",
        },
      ];
    }
    if (/aula\s*3\b/i.test(norm) && !/aula\s*13/i.test(norm) && !/aula\s*23/i.test(norm)) {
      return [
        {
          code: "EF08GE16B",
          fullText: "EF08GE16B - Analisar a atuação das empresas transnacionais na organização do espaço geográfico mundial",
          verb: "Analisar",
          content: "a atuação das empresas transnacionais",
          context: "na organização do espaço geográfico mundial",
        },
        {
          code: "EF08GE10",
          fullText: "EF08GE10 - Analisar a importância dos recursos hídricos para o desenvolvimento humano e econômico",
          verb: "Analisar",
          content: "a importância dos recursos hídricos",
          context: "para o desenvolvimento humano e econômico",
        },
      ];
    }
    if (/aula\s*1\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm) && !/aula\s*21/i.test(norm)) {
      return [
        {
          code: "EF08GE16A",
          fullText: "EF08GE16A - Identificar o papel dos países desenvolvidos na economia global e nos fluxos de capitais",
          verb: "Identificar",
          content: "o papel dos países desenvolvidos",
          context: "na economia global e nos fluxos de capitais",
        },
      ];
    }
  }

  if (is7thGrade && isGeografia) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*17\b/i.test(norm)) {
      return [
        {
          code: "EF07GE20*",
          fullText: "EF07GE20* - Caracterizar os processos de urbanização no território brasileiro",
          verb: "Caracterizar",
          content: "os processos de urbanização",
          context: "no território brasileiro",
        },
        {
          code: "EF07GE21*",
          fullText: "EF07GE21* - Identificar as contradições do processo de urbanização em diferentes escalas",
          verb: "Identificar",
          content: "as contradições do processo de urbanização",
          context: "em diferentes escalas",
        },
        {
          code: "EF07GE09A",
          fullText: "EF07GE09A - Interpretar fenômenos geográficos a partir de representações cartográficas variadas",
          verb: "Interpretar",
          content: "fenômenos geográficos",
          context: "a partir de representações cartográficas variadas",
        },
      ];
    }
    if (/aula\s*18\b/i.test(norm)) {
      return [
        {
          code: "EF07GE20*",
          fullText: "EF07GE20* - Caracterizar os processos de urbanização no território brasileiro",
          verb: "Caracterizar",
          content: "os processos de urbanização",
          context: "no território brasileiro",
        },
        {
          code: "EF07GE21*",
          fullText: "EF07GE21* - Identificar as contradições do processo de urbanização em diferentes escalas",
          verb: "Identificar",
          content: "as contradições do processo de urbanização",
          context: "em diferentes escalas",
        },
      ];
    }
    if (/aula\s*16\b/i.test(norm)) {
      return [
        {
          code: "EF07GE21*",
          fullText: "EF07GE21* - Identificar as contradições do processo de urbanização em diferentes escalas",
          verb: "Identificar",
          content: "as contradições do processo de urbanização",
          context: "em diferentes escalas",
        },
      ];
    }
    if (/aula\s*14\b/i.test(norm)) {
      return [
        {
          code: "EF07GE06",
          fullText: "EF07GE06 - Discutir as transformações dos espaços geográficos como produto das relações socioeconômicas e culturais",
          verb: "Discutir",
          content: "as transformações dos espaços geográficos",
          context: "como produto das relações socioeconômicas e culturais",
        },
        {
          code: "EF07GE09A",
          fullText: "EF07GE09A - Interpretar fenômenos geográficos a partir de representações cartográficas variadas",
          verb: "Interpretar",
          content: "fenômenos geográficos",
          context: "a partir de representações cartográficas variadas",
        },
      ];
    }
    if (/aula\s*(9|10)\b/i.test(norm) && !/aula\s*19/i.test(norm)) {
      return [
        {
          code: "EF07GE08",
          fullText: "EF07GE08 - Analisar a transformação das paisagens naturais e antrópicas em função das dinâmicas populacionais",
          verb: "Analisar",
          content: "a transformação das paisagens naturais",
          context: "e antrópicas em função das dinâmicas populacionais",
        },
        {
          code: "EF07GE09A",
          fullText: "EF07GE09A - Interpretar fenômenos geográficos a partir de representações cartográficas variadas",
          verb: "Interpretar",
          content: "fenômenos geográficos",
          context: "a partir de representações cartográficas variadas",
        },
      ];
    }
    if (/aula\s*6\b/i.test(norm) && !/aula\s*16/i.test(norm) && !/aula\s*26/i.test(norm)) {
      return [
        {
          code: "EF07GE05",
          fullText: "EF07GE05 - Analisar fatos e situações para compreender a integração entre os lugares e a vida cotidiana das populações",
          verb: "Analisar",
          content: "fatos e situações para compreender a integração",
          context: "entre os lugares e a vida cotidiana das populações",
        },
        {
          code: "EF07GE06",
          fullText: "EF07GE06 - Discutir as transformações dos espaços geográficos como produto das relações socioeconômicas e culturais",
          verb: "Discutir",
          content: "as transformações dos espaços geográficos",
          context: "como produto das relações socioeconômicas e culturais",
        },
        {
          code: "EF07GE08",
          fullText: "EF07GE08 - Analisar a transformação das paisagens naturais e antrópicas em função das dinâmicas populacionais",
          verb: "Analisar",
          content: "a transformação das paisagens naturais",
          context: "e antrópicas em função das dinâmicas populacionais",
        },
      ];
    }
    if (/aula\s*5\b/i.test(norm) && !/aula\s*15/i.test(norm) && !/aula\s*25/i.test(norm)) {
      return [
        {
          code: "EF07GE05",
          fullText: "EF07GE05 - Analisar fatos e situações para compreender a integração entre os lugares e a vida cotidiana das populações",
          verb: "Analisar",
          content: "fatos e situações para compreender a integração",
          context: "entre os lugares e a vida cotidiana das populações",
        },
        {
          code: "EF07GE06",
          fullText: "EF07GE06 - Discutir as transformações dos espaços geográficos como produto das relações socioeconômicas e culturais",
          verb: "Discutir",
          content: "as transformações dos espaços geográficos",
          context: "como produto das relações socioeconômicas e culturais",
        },
      ];
    }
    if (/aula\s*(1|2|3|4)\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm) && !/aula\s*2[0-9]/i.test(norm)) {
      return [
        {
          code: "EF07GE05",
          fullText: "EF07GE05 - Analisar fatos e situações para compreender a integração entre os lugares e a vida cotidiana das populações",
          verb: "Analisar",
          content: "fatos e situações para compreender a integração",
          context: "entre os lugares e a vida cotidiana das populações",
        },
      ];
    }
    if (/aula\s*(7|8|11|12)\b/i.test(norm) && !/aula\s*17/i.test(norm) && !/aula\s*18/i.test(norm)) {
      return [
        {
          code: "EF07GE08",
          fullText: "EF07GE08 - Analisar a transformação das paisagens naturais e antrópicas em função das dinâmicas populacionais",
          verb: "Analisar",
          content: "a transformação das paisagens naturais",
          context: "e antrópicas em função das dinâmicas populacionais",
        },
      ];
    }
  }

  if (is6thGrade && isGeografia) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*(1|2|3|4|5)\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm) && !/aula\s*2[0-9]/i.test(norm)) {
      return [
        {
          code: "EF06GE16*",
          fullText: "EF06GE16* - Descrever as características das paisagens dos lugares de vivência e os fatores de sua transformação",
          verb: "Descrever",
          content: "as características das paisagens",
          context: "dos lugares de vivência e os fatores de sua transformação",
        },
      ];
    }
    if (/aula\s*6\b/i.test(norm) && !/aula\s*16/i.test(norm) && !/aula\s*26/i.test(norm)) {
      return [
        {
          code: "EF06GE11",
          fullText: "EF06GE11 - Analisar distintas interações das sociedades com a natureza, com base na identificação de impactos econômicos e socioambientais",
          verb: "Analisar",
          content: "distintas interações das sociedades",
          context: "com a natureza, com base na identificação de impactos econômicos e socioambientais",
        },
      ];
    }
    if (/aula\s*(7|8|9)\b/i.test(norm) && !/aula\s*1[7-9]/i.test(norm)) {
      return [
        {
          code: "EF06GE10",
          fullText: "EF06GE10 - Explicar a formação de grandes domínios morfoclimáticos no Brasil, sua importância para a biodiversidade e as intervenções humanas",
          verb: "Explicar",
          content: "a formação de grandes domínios morfoclimáticos",
          context: "no Brasil, sua importância para a biodiversidade e as intervenções humanas",
        },
      ];
    }
    if (/aula\s*(10|11|12|13|14|15|16|17|18)\b/i.test(norm)) {
      return [
        {
          code: "EF06GE05",
          fullText: "EF06GE05 - Relacionar padrões climáticos aos tipos de vegetação e às atividades econômicas em diferentes regiões",
          verb: "Relacionar",
          content: "padrões climáticos",
          context: "aos tipos de vegetação e às atividades econômicas em diferentes regiões",
        },
      ];
    }
  }

  const isMatematica = subject ? (subject.toLowerCase().includes("matemática") || subject.toLowerCase().includes("matematica")) : false;

  if (is6thGrade && isMatematica) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*0*(22|24|26|27|28|29)\b/i.test(norm)) {
      return [
        {
          code: "EF06MA03",
          fullText: "EF06MA03 - Resolver problemas envolvendo o cálculo do máximo divisor comum ou do mínimo múltiplo comum",
          verb: "Resolver",
          content: "problemas",
          context: "envolvendo o cálculo do máximo divisor comum ou do mínimo múltiplo comum",
        },
        {
          code: "EF06MA24",
          fullText: "EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura",
          verb: "Resolver",
          content: "e elaborar problemas",
          context: "envolvendo grandezas como comprimento, massa, tempo e temperatura",
        },
      ];
    }
    if (/aula\s*0*(11|12|13|14|15|16|17|18|19|20|21|23|25|30)\b/i.test(norm)) {
      return [
        {
          code: "EF06MA24",
          fullText: "EF06MA24 - Resolver e elaborar problemas envolvendo grandezas como comprimento, massa, tempo e temperatura",
          verb: "Resolver",
          content: "e elaborar problemas",
          context: "envolvendo grandezas como comprimento, massa, tempo e temperatura",
        },
      ];
    }
    if (/aula\s*0*(8|9|10)\b/i.test(norm) && !/aula\s*18/i.test(norm) && !/aula\s*19/i.test(norm) && !/aula\s*28/i.test(norm) && !/aula\s*29/i.test(norm)) {
      return [
        {
          code: "EF06MA16",
          fullText: "EF06MA16 - Associar pares ordenados de números à localização de pontos em um plano cartesiano",
          verb: "Associar",
          content: "pares ordenados de números",
          context: "à localização de pontos em um plano cartesiano",
        },
        {
          code: "EF06MA17",
          fullText: "EF06MA17 - Quantificar e estabelecer relações entre o número de vértices, faces e arestas de prismas e pirâmides",
          verb: "Quantificar e estabelecer relações",
      content: "entre o número de vértices, faces e arestas de prismas e pirâmides",
      context: "em figuras geométricas espaciais",
        },
      ];
    }
    if (/aula\s*0*(3|4|5|6)\b/i.test(norm) && !/aula\s*1[3-6]/i.test(norm) && !/aula\s*2[3-6]/i.test(norm) && !/aula\s*30/i.test(norm)) {
      return [
        {
          code: "EF06MA17",
          fullText: "EF06MA17 - Quantificar e estabelecer relações entre o número de vértices, faces e arestas de prismas e pirâmides",
          verb: "Quantificar e estabelecer relações",
      content: "entre o número de vértices, faces e arestas de prismas e pirâmides",
      context: "em figuras geométricas espaciais",
        },
      ];
    }
    if (/aula\s*0*(1|2|7)\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm) && !/aula\s*2[0-9]/i.test(norm) && !/aula\s*30/i.test(norm)) {
      return [
        {
          code: "EF06MA16",
          fullText: "EF06MA16 - Associar pares ordenados de números à localização de pontos em um plano cartesiano",
          verb: "Associar",
          content: "pares ordenados de números",
          context: "à localização de pontos em um plano cartesiano",
        },
      ];
    }
  }

  if (is7thGrade && isMatematica) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*0*(21|22|23|24|25|26|27|28|29|30)\b/i.test(norm)) {
      return [
        {
          code: "EF07MA02",
          fullText: "EF07MA02 - Resolver e elaborar problemas com números inteiros, envolvendo as operações fundamentais",
          verb: "Resolver",
          content: "e elaborar problemas",
          context: "com números inteiros, envolvendo as operações fundamentais",
        },
      ];
    }
    if (/aula\s*0*(11|12|13|14|15|16|17|18|19|20)\b/i.test(norm)) {
      return [
        {
          code: "EF07MA17",
          fullText: "EF07MA17 - Resolver e elaborar problemas que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
          verb: "Resolver",
          content: "e elaborar problemas",
          context: "que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
        },
      ];
    }
    if (/aula\s*0*(1|2|3|4|5|6|7|8|9|10)\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm) && !/aula\s*2[0-9]/i.test(norm) && !/aula\s*30/i.test(norm)) {
      return [
        {
          code: "EF07MA27",
          fullText: "EF07MA27 - Resolver e elaborar problemas envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo",
          verb: "Resolver",
          content: "e elaborar problemas",
          context: "envolvendo a medida da área de figuras geométricas, utilizando expressões de cálculo",
        },
      ];
    }
  }

  if (is8thGrade && isMatematica) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*0*(23|24|25|26|27|28|29|30)\b/i.test(norm)) {
      return [
        {
          code: "EF08MA04",
          fullText: "EF08MA04 - Resolver e elaborar problemas com números racionais na representação fracionária e decimal",
          verb: "Resolver",
          content: "e elaborar problemas",
          context: "com números racionais na representação fracionária e decimal",
        },
      ];
    }
    if (/aula\s*0*22\b/i.test(norm)) {
      return [
        {
          code: "EF07MA02",
          fullText: "EF07MA02 - Resolver e elaborar problemas com números inteiros, envolvendo as operações fundamentais",
          verb: "Resolver",
          content: "e elaborar problemas",
          context: "com números inteiros, envolvendo as operações fundamentais",
        },
      ];
    }
    if (/aula\s*0*(16|17|18|19|20|21)\b/i.test(norm)) {
      return [
        {
          code: "EF08MA13",
          fullText: "EF08MA13 - Demonstrar propriedades de figuras geométricas planas, utilizando transformações geométricas",
          verb: "Demonstrar",
          content: "propriedades de figuras geométricas",
          context: "planas, utilizando transformações geométricas",
        },
      ];
    }
    if (/aula\s*0*(12|13|14|15)\b/i.test(norm)) {
      return [
        {
          code: "EF08MA12",
          fullText: "EF08MA12 - Identificar a simetria de reflexão, rotação e translação em figuras planas e no plano cartesiano",
          verb: "Identificar",
          content: "a simetria de reflexão",
          context: "rotação e translação em figuras planas e no plano cartesiano",
        },
      ];
    }
    if (/aula\s*0*11\b/i.test(norm)) {
      return [
        {
          code: "EF07MA17",
          fullText: "EF07MA17 - Resolver e elaborar problemas que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
          verb: "Resolver",
          content: "e elaborar problemas",
          context: "que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
        },
      ];
    }
    if (/aula\s*0*(7|8)\b/i.test(norm) && !/aula\s*1[7-8]/i.test(norm) && !/aula\s*2[7-8]/i.test(norm)) {
      return [
        {
          code: "EF07MA36",
          fullText: "EF07MA36 - Resolver e elaborar problemas envolvendo o cálculo de probabilidade de eventos em experimentos aleatórios",
          verb: "Resolver",
          content: "e elaborar problemas",
          context: "envolvendo o cálculo de probabilidade de eventos em experimentos aleatórios",
        },
      ];
    }
    if (/aula\s*0*(2|4|5|6|9|10)\b/i.test(norm) && !/aula\s*12/i.test(norm) && !/aula\s*14/i.test(norm) && !/aula\s*15/i.test(norm) && !/aula\s*16/i.test(norm) && !/aula\s*19/i.test(norm) && !/aula\s*20/i.test(norm) && !/aula\s*22/i.test(norm) && !/aula\s*24/i.test(norm) && !/aula\s*25/i.test(norm) && !/aula\s*26/i.test(norm) && !/aula\s*29/i.test(norm)) {
      return [
        {
          code: "EF08MA25",
          fullText: "EF08MA25 - Obter os valores de medidas de tendência central e de dispersão em um conjunto de dados estatísticos",
          verb: "Obter",
          content: "os valores de medidas de tendência central",
          context: "e de dispersão em um conjunto de dados estatísticos",
        },
      ];
    }
    if (/aula\s*0*3\b/i.test(norm) && !/aula\s*13/i.test(norm) && !/aula\s*23/i.test(norm)) {
      return [
        {
          code: "EF07MA35",
          fullText: "EF07MA35 - Compreender o conceito de frequência e sua representação em tabelas e gráficos estatísticos",
          verb: "Compreender",
          content: "o conceito de frequência",
          context: "e sua representação em tabelas e gráficos estatísticos",
        },
      ];
    }
    if (/aula\s*0*1\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm) && !/aula\s*2[0-9]/i.test(norm) && !/aula\s*30/i.test(norm)) {
      return [
        {
          code: "EF08MA22",
          fullText: "EF08MA22 - Calcular a probabilidade de eventos, com base na construção do espaço amostral, utilizando o princípio multiplicativo, e reconhecer que a soma das probabilidades de todos os elementos do espaço amostral é igual a 1.",
          verb: "Calcular",
          content: "a probabilidade de eventos",
          context: "com base em experimentos aleatórios ou na contagem dos casos possíveis",
        },
      ];
    }
  }

  if (is9thGrade && isMatematica) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*0*19\b/i.test(norm)) {
      return [
        {
          code: "EF08MA22",
          fullText: "EF08MA22 - Calcular a probabilidade de eventos, com base na construção do espaço amostral, utilizando o princípio multiplicativo, e reconhecer que a soma das probabilidades de todos os elementos do espaço amostral é igual a 1.",
          verb: "Calcular",
          content: "a probabilidade de eventos",
          context: "com base em experimentos aleatórios ou na contagem dos casos possíveis",
        },
        {
          code: "EF09MA20",
          fullText: "EF09MA20 - Analisar e estabelecer a probabilidade de eventos compostos utilizando o princípio multiplicativo",
          verb: "Analisar",
          content: "e estabelecer a probabilidade",
          context: "de eventos compostos utilizando o princípio multiplicativo",
        },
      ];
    }
    if (/aula\s*0*(23|24|25|27|28|29|30)\b/i.test(norm)) {
      return [
        {
          code: "EF09MA08",
          fullText: "EF09MA08 - Resolver e elaborar problemas que envolvam a razão de semelhança em figuras geométricas planas e homotetias",
          verb: "Resolver",
          content: "e elaborar problemas",
          context: "que envolvam a razão de semelhança em figuras geométricas planas e homotetias",
        },
      ];
    }
    if (/aula\s*0*(21|22|26)\b/i.test(norm)) {
      return [
        {
          code: "EF08MA12",
          fullText: "EF08MA12 - Identificar a simetria de reflexão, rotação e translação em figuras planas e no plano cartesiano",
          verb: "Identificar",
          content: "a simetria de reflexão",
          context: "rotação e translação em figuras planas e no plano cartesiano",
        },
      ];
    }
    if (/aula\s*0*20\b/i.test(norm)) {
      return [
        {
          code: "EF08MA22",
          fullText: "EF08MA22 - Calcular a probabilidade de eventos, com base na construção do espaço amostral, utilizando o princípio multiplicativo, e reconhecer que a soma das probabilidades de todos os elementos do espaço amostral é igual a 1.",
          verb: "Calcular",
          content: "a probabilidade de eventos",
          context: "com base em experimentos aleatórios ou na contagem dos casos possíveis",
        },
      ];
    }
    if (/aula\s*0*(13|14|15|16|17|18)\b/i.test(norm)) {
      return [
        {
          code: "EF09MA20",
          fullText: "EF09MA20 - Analisar e estabelecer a probabilidade de eventos compostos utilizando o princípio multiplicativo",
          verb: "Analisar",
          content: "e estabelecer a probabilidade",
          context: "de eventos compostos utilizando o princípio multiplicativo",
        },
      ];
    }
    if (/aula\s*0*12\b/i.test(norm)) {
      return [
        {
          code: "EF08MA30",
          fullText: "EF08MA30 - Estimar e medir volumes de prismas e cilindros por meio de aproximações",
          verb: "Estimar",
          content: "e medir volumes",
          context: "de prismas e cilindros por meio de aproximações",
        },
      ];
    }
    if (/aula\s*0*11\b/i.test(norm)) {
      return [
        {
          code: "EF07MA34",
          fullText: "EF07MA34 - Planejar e realizar pesquisa envolvendo a coleta de dados estatísticos em diferentes contextos",
          verb: "Planejar",
          content: "e realizar pesquisa",
          context: "envolvendo a coleta de dados estatísticos em diferentes contextos",
        },
      ];
    }
    if (/aula\s*0*10\b/i.test(norm)) {
      return [
        {
          code: "EF07MA33",
          fullText: "EF07MA33 - Estabelecer a relação entre o volume e a capacidade de recipientes por meio de transformações de unidades",
          verb: "Estabelecer",
          content: "a relação entre o volume",
          context: "e a capacidade de recipientes por meio de transformações de unidades",
        },
      ];
    }
    if (/aula\s*0*(7|8)\b/i.test(norm) && !/aula\s*1[7-8]/i.test(norm) && !/aula\s*2[7-8]/i.test(norm)) {
      return [
        {
          code: "EF09MA11",
          fullText: "EF09MA11 - Resolver e elaborar problemas envolvendo medidas de volume de corpos e recipientes complexos",
          verb: "Resolver",
          content: "e elaborar problemas",
          context: "envolvendo medidas de volume de corpos e recipientes complexos",
        },
      ];
    }
    if (/aula\s*0*6\b/i.test(norm) && !/aula\s*16/i.test(norm) && !/aula\s*26/i.test(norm)) {
      return [
        {
          code: "EF07MA33",
          fullText: "EF07MA33 - Estabelecer a relação entre o volume e a capacidade de recipientes por meio de transformações de unidades",
          verb: "Estabelecer",
          content: "a relação entre o volume",
          context: "e a capacidade de recipientes por meio de transformações de unidades",
        },
      ];
    }
    if (/aula\s*0*(1|2|3|4|5|9)\b/i.test(norm) && !/aula\s*1[1-59]/i.test(norm) && !/aula\s*2[1-59]/i.test(norm)) {
      return [
        {
          code: "EF08MA19",
          fullText: "EF08MA19 - Resolver e elaborar problemas envolvendo medidas de volume de prismas retos, por meio de composições e decomposições",
          verb: "Resolver",
          content: "e elaborar problemas",
          context: "envolvendo medidas de volume de prismas retos, por meio de composições e decomposições",
        },
      ];
    }
  }

  if (is2ndGrade && isMatematica) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*0*10\b/i.test(norm)) {
      return [
        {
          code: "EF06MA17",
          fullText: "EF06MA17 - Quantificar e estabelecer relações entre o número de vértices, faces e arestas de prismas e pirâmides",
          verb: "Quantificar e estabelecer relações",
      content: "entre o número de vértices, faces e arestas de prismas e pirâmides",
      context: "em figuras geométricas espaciais",
        },
        {
          code: "EM13MAT309",
          fullText: "EM13MAT309 - Resolver e elaborar problemas envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
          verb: "Resolver e elaborar problemas",
      content: "envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      context: "em contextos geométricos e do cotidiano",
        },
      ];
    }
    if (/aula\s*0*9\b/i.test(norm)) {
      return [
        {
          code: "EF06MA17",
          fullText: "EF06MA17 - Quantificar e estabelecer relações entre o número de vértices, faces e arestas de prismas e pirâmides",
          verb: "Quantificar e estabelecer relações",
      content: "entre o número de vértices, faces e arestas de prismas e pirâmides",
      context: "em figuras geométricas espaciais",
        },
      ];
    }
    if (/aula\s*0*(11|12|13|14|15|16|17|18|19|20|21|22|23|24)\b/i.test(norm)) {
      return [
        {
          code: "EM13MAT309",
          fullText: "EM13MAT309 - Resolver e elaborar problemas envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
          verb: "Resolver e elaborar problemas",
      content: "envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
      context: "em contextos geométricos e do cotidiano",
        },
      ];
    }
    if (/aula\s*0*(1|2|3|4|5|6|7|8)\b/i.test(norm) && !/aula\s*1[0-8]/i.test(norm) && !/aula\s*2[0-4]/i.test(norm)) {
      return [
        {
          code: "EM13MAT307",
          fullText: "EM13MAT307 - Identificar e analisar a presença de grandezas em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
          verb: "Identificar e analisar",
      content: "a presença de grandezas",
      context: "em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
        },
      ];
    }
  }

  const is3rdGrade = gradeLevel ? (gradeLevel.includes("3º") || gradeLevel.toLowerCase().includes("3 ano") || gradeLevel.includes("3ª")) : false;

  if (is3rdGrade && isMatematica) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*0*(18|19|20|21|22|23|24)\b/i.test(norm)) {
      return [
        {
          code: "EM13MAT307",
          fullText: "EM13MAT307 - Identificar e analisar a presença de grandezas em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
          verb: "Identificar e analisar",
      content: "a presença de grandezas",
      context: "em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
        },
      ];
    }
    if (/aula\s*0*17\b/i.test(norm)) {
      return [
        {
          code: "EM13MAT506",
          fullText: "EM13MAT506 - Interpretar informações contidas em textos e gráficos estatísticos, identificando tendências e padrões",
          verb: "Interpretar",
      content: "informações contidas em textos e gráficos estatísticos",
      context: "identificando tendências e padrões",
        },
      ];
    }
    if (/aula\s*0*(9|10|11|12|13|14|15|16)\b/i.test(norm)) {
      return [
        {
          code: "EM13MAT316",
          fullText: "EM13MAT316 - Resolver e elaborar problemas envolvendo a análise de dados estatísticos em diferentes contextos",
          verb: "Resolver e elaborar problemas",
      content: "envolvendo a análise de dados estatísticos",
      context: "em diferentes contextos",
        },
      ];
    }
    if (/aula\s*0*(1|2|3|4|5|6|7|8)\b/i.test(norm) && !/aula\s*1[0-8]/i.test(norm) && !/aula\s*2[0-4]/i.test(norm)) {
      return [
        {
          code: "EM13MAT314",
          fullText: "EM13MAT314 - Investigar e analisar a ocorrência de fenômenos estatísticos por meio de distribuições probabilísticas",
          verb: "Investigar e analisar",
      content: "a ocorrência de fenômenos estatísticos",
      context: "por meio de distribuições probabilísticas",
        },
      ];
    }
  }

  const is2ndGradeHist = gradeLevel ? (gradeLevel.includes("2º") || gradeLevel.toLowerCase().includes("2 ano")) : (!is3rdGrade && !is6thGrade);
  const isHistoria = subject ? (subject.toLowerCase().includes("história") || subject.toLowerCase().includes("historia")) : false;

  if (is3rdGrade && isHistoria) {
    const norm = cleanTitle.toLowerCase();
    if ((/aula\s*1\b/i.test(norm) || /aula\s*5\b/i.test(norm) || /aula\s*6\b/i.test(norm)) && !/aula\s*1[0-9]/i.test(norm) && !/aula\s*2[0-9]/i.test(norm)) {
      return [
        {
          code: "EM13CHS503",
          fullText: "EM13CHS503 - Identificar formas de atuação social que contribuam para a redução da desigualdade, do preconceito e da violência.",
          verb: "Identificar",
          content: "formas de atuação social",
          context: "que contribuam para a redução da desigualdade, do preconceito e da violência.",
        },
      ];
    }
    if (/aula\s*3\b/i.test(norm) && !/aula\s*13/i.test(norm) && !/aula\s*23/i.test(norm)) {
      return [
        {
          code: "EM13CHS306",
          fullText: "EM13CHS306 - Avaliar as pretensões de universalidade do conhecimento de modo a compreender as relações entre ciência, tecnologia e sociedade.",
          verb: "Avaliar",
          content: "as pretensões de universalidade do conhecimento",
          context: "de modo a compreender as relações entre ciência, tecnologia e sociedade.",
        },
      ];
    }
    if (/aula\s*(2|4|7|8|9|10|11|12)\b/i.test(norm) && !/aula\s*1[3-9]/i.test(norm) && !/aula\s*2[0-9]/i.test(norm)) {
      return [
        {
          code: "EM13CHS501",
          fullText: "EM13CHS501 - Analisar os fundamentos da ética nas diferentes culturas, tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
          verb: "Analisar",
          content: "os fundamentos da ética nas diferentes culturas",
          context: "tempo e espaço, identificando processos que contribuem para a formação de sujeitos, valores e normas.",
        },
      ];
    }
  }

  if (is2ndGradeHist && isHistoria) {
    const norm = cleanTitle.toLowerCase();
    if (/aula\s*1\b/i.test(norm) && !/aula\s*1[0-9]/i.test(norm)) {
      return [
        {
          code: "EM13CHS401",
          fullText: "EM13CHS401 - Identificar e analisar as relações entre sujeitos, grupos, classes sociais e sociedades com culturas distintas diante das transformações técnicas, tecnológicas e informacionais.",
          verb: "Identificar",
          content: "e analisar as relações entre sujeitos, grupos, classes sociais e sociedades",
          context: "com culturas distintas diante das transformações técnicas, tecnológicas e informacionais.",
        },
      ];
    }
    if (/aula\s*[2-6]\b/i.test(norm) && !/aula\s*1[2-6]/i.test(norm) && !/aula\s*2[0-9]/i.test(norm)) {
      return [
        {
          code: "EM13CHS603",
          fullText: "EM13CHS603 - Analisar a formação de diferentes países, povos e nações e de suas experiências políticas e de exercício da cidadania.",
          verb: "Analisar",
          content: "a formação de diferentes países, povos e nações",
          context: "e de suas experiências políticas e de exercício da cidadania.",
        },
      ];
    }
    if (/aula\s*(7|8|9|10)\b/i.test(norm) && !/aula\s*17/i.test(norm) && !/aula\s*18/i.test(norm) && !/aula\s*19/i.test(norm)) {
      return [
        {
          code: "EM13CHS204",
          fullText: "EM13CHS204 - Posicionar-se com base em princípios éticos frente aos desafios ambientais contemporâneos.",
          verb: "Posicionar-se",
          content: "com base em princípios éticos",
          context: "frente aos desafios ambientais contemporâneos.",
        },
      ];
    }
    if (/aula\s*(11|12)\b/i.test(norm)) {
      return [
        {
          code: "EM13CHS402",
          fullText: "EM13CHS402 - Analisar e comparar indicadores de emprego, trabalho e renda em diferentes espaços, escalas e tempos, associando-os a processos de estratificação social.",
          verb: "Analisar",
          content: "e comparar indicadores de emprego, trabalho e renda",
          context: "em diferentes espaços, escalas e tempos, associando-os a processos de estratificação social.",
        },
      ];
    }
  }

  const normalizeStr = (str: string) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "");

  const normInput = normalizeStr(cleanTitle);

  for (const [key, val] of Object.entries(LESSON_BNCC_MAP)) {
    if (normalizeStr(key) === normInput) {
      return val;
    }
  }

  const matchKey = Object.keys(LESSON_BNCC_MAP).find((key) => {
    const normKey = normalizeStr(key);
    return normInput.includes(normKey) || normKey.includes(normInput);
  });

  return matchKey ? LESSON_BNCC_MAP[matchKey] : [];
}

export const KNOWN_CURRICULUM_SKILLS: Record<string, { code: string; verb: string; content: string; context: string }> = {
  EF06MA01: {
    code: "EF06MA01",
    verb: "Comparar, ordenar, ler e escrever",
    content: "números naturais e números racionais cuja representação decimal é finita",
    context: "fazendo uso da reta numérica",
  },
  EF06MA02: {
    code: "EF06MA02",
    verb: "Reconhecer",
    content: "o sistema de numeração decimal como o que prevaleceu no mundo ocidental",
    context: "com base no estudo de outros sistemas de numeração",
  },
  EF06MA03: {
    code: "EF06MA03",
    verb: "Resolver e elaborar problemas",
    content: "que envolvam cálculos com números naturais",
    context: "por meio de estratégias pessoais, cálculo mental ou algoritmos",
  },
  EF06MA04: {
    code: "EF06MA04",
    verb: "Construir",
    content: "algoritmo em linguagem natural e representá-lo por fluxograma",
    context: "para indicar a resolução de problemas",
  },
  EF06MA05: {
    code: "EF06MA05",
    verb: "Classificar",
    content: "números naturais em primos e compostos",
    context: "estabelecendo relações de divisibilidade",
  },
  EF06MA06: {
    code: "EF06MA06",
    verb: "Resolver e elaborar problemas",
    content: "que envolvam as ideias de múltiplo e divisor",
    context: "em contextos práticos e cotidianos",
  },
  EF06MA07: {
    code: "EF06MA07",
    verb: "Compreender, comparar e ordenar",
    content: "frações associadas às ideias de parte de inteiros e resultado de divisão",
    context: "identificando frações equivalentes",
  },
  EF06MA08: {
    code: "EF06MA08",
    verb: "Reconhecer",
    content: "que os números racionais positivos podem ser expressos nas formas fracionária e decimal",
    context: "estabelecendo relações entre essas representações",
  },
  EF06MA09: {
    code: "EF06MA09",
    verb: "Resolver e elaborar problemas",
    content: "que envolvam o cálculo da fração de uma quantidade",
    context: "e cujo resultado seja um número natural",
  },
  EF06MA10: {
    code: "EF06MA10",
    verb: "Resolver e elaborar problemas",
    content: "que envolvam adição ou subtração com números racionais positivos na representação fracionária",
    context: "em diferentes contextos",
  },
  EF06MA11: {
    code: "EF06MA11",
    verb: "Resolver e elaborar problemas",
    content: "com números racionais positivos na representação decimal",
    context: "envolvendo as quatro operações fundamentais",
  },
  EF06MA16: {
    code: "EF06MA16",
    verb: "Associar",
    content: "pares ordenados de números à localização de pontos",
    context: "no primeiro quadrante do plano cartesiano",
  },
  EF06MA17: {
    code: "EF06MA17",
    verb: "Quantificar e estabelecer relações",
    content: "entre o número de vértices, faces e arestas de prismas e pirâmides",
    context: "em esquemas, representações e figuras geométricas espaciais",
  },
  EF06MA18: {
    code: "EF06MA18",
    verb: "Reconhecer",
    content: "figuras geométricas espaciais a partir de suas planificações",
    context: "analisando seus atributos e elementos",
  },
  EF06MA24: {
    code: "EF06MA24",
    verb: "Resolver e elaborar problemas",
    content: "envolvendo grandezas como comprimento, massa, tempo, temperatura, área e capacidade",
    context: "com ou sem uso de tecnologias digitais",
  },
  EF06MA29: {
    code: "EF06MA29",
    verb: "Calcular",
    content: "a probabilidade de um evento aleatório",
    context: "expressando-a por número racional na forma fracionária, decimal e percentual",
  },
  EF07MA01: {
    code: "EF07MA01",
    verb: "Resolver e elaborar problemas",
    content: "com números naturais",
    context: "envolvendo as noções de divisor e múltiplo",
  },
  EF07MA02: {
    code: "EF07MA02",
    verb: "Resolver e elaborar problemas",
    content: "com números inteiros",
    context: "envolvendo as operações de adição, subtração, multiplicação, divisão e potenciação",
  },
  EF07MA03: {
    code: "EF07MA03",
    verb: "Comparar e ordenar",
    content: "números inteiros",
    context: "em diferentes contextos, incluindo a reta numérica",
  },
  EF07MA17: {
    code: "EF07MA17",
    verb: "Resolver e elaborar problemas",
    content: "que envolvam variação de grandezas diretamente proporcionais e inversamente proporcionais",
    context: "por meio de estratégias variadas",
  },
  EF07MA18: {
    code: "EF07MA18",
    verb: "Resolver e elaborar problemas",
    content: "que possam ser representados por equações polinomiais de 1º grau",
    context: "reduzíveis à forma ax + b = c",
  },
  EF07MA27: {
    code: "EF07MA27",
    verb: "Resolver e elaborar problemas",
    content: "envolvendo a medida da área de figuras geométricas planas",
    context: "como triângulos, quadriláteros e polígonos regulares",
  },
  EF07MA33: {
    code: "EF07MA33",
    verb: "Estabelecer a relação",
    content: "entre o volume e a capacidade de recipientes",
    context: "por meio de transformações de unidades usuais",
  },
  EF07MA34: {
    code: "EF07MA34",
    verb: "Planejar e realizar pesquisa",
    content: "amostral sobre questões relevantes",
    context: "organizando dados em tabelas e gráficos",
  },
  EF07MA35: {
    code: "EF07MA35",
    verb: "Compreender",
    content: "o conceito de frequência e sua representação",
    context: "em tabelas e gráficos estatísticos de diferentes tipos",
  },
  EF07MA36: {
    code: "EF07MA36",
    verb: "Resolver e elaborar problemas",
    content: "envolvendo o cálculo de probabilidade de eventos aleatórios",
    context: "com base na razão entre casos favoráveis e casos possíveis",
  },
  EF08MA01: {
    code: "EF08MA01",
    verb: "Efetuar cálculos",
    content: "com potências de expoentes inteiros e aplicar as propriedades da potenciação",
    context: "na resolução de problemas",
  },
  EF08MA02: {
    code: "EF08MA02",
    verb: "Resolver e elaborar problemas",
    content: "usando a notação científica",
    context: "para representar números muito grandes ou muito pequenos",
  },
  EF08MA04: {
    code: "EF08MA04",
    verb: "Resolver e elaborar problemas",
    content: "com números racionais",
    context: "nas suas diferentes representações fracionária e decimal",
  },
  EF08MA12: {
    code: "EF08MA12",
    verb: "Identificar",
    content: "a simetria de reflexão, rotação e translação",
    context: "em figuras planas e no plano cartesiano",
  },
  EF08MA13: {
    code: "EF08MA13",
    verb: "Demonstrar",
    content: "propriedades de figuras geométricas planas",
    context: "utilizando transformações geométricas e deduções lógicas",
  },
  EF08MA19: {
    code: "EF08MA19",
    verb: "Resolver e elaborar problemas",
    content: "envolvendo medidas de volume de prismas retos",
    context: "por meio de composições e decomposições de sólidos",
  },
  EF08MA22: {
    code: "EF08MA22",
    verb: "Calcular e Reconhecer",
    content: "A probabilidade de eventos e a soma das probabilidades dos elementos do espaço amostral",
    context: "Com base na construção do espaço amostral e utilizando o princípio multiplicativo",
  },
  EF08MA25: {
    code: "EF08MA25",
    verb: "Obter",
    content: "os valores de medidas de tendência central (média, moda e mediana) e de dispersão",
    context: "em um conjunto de dados estatísticos",
  },
  EF08MA30: {
    code: "EF08MA30",
    verb: "Estimar e medir",
    content: "volumes de prismas e cilindros",
    context: "por meio de aproximações e expressões de cálculo",
  },
  EF09MA01: {
    code: "EF09MA01",
    verb: "Reconhecer",
    content: "a necessidade dos números reais para medir qualquer segmento de reta",
    context: "e posicioná-los na reta numérica",
  },
  EF09MA06: {
    code: "EF09MA06",
    verb: "Resolver e elaborar problemas",
    content: "que envolvam relações de proporcionalidade direta e inversa entre grandezas",
    context: "representadas por funções afins ou gráficos",
  },
  EF09MA08: {
    code: "EF09MA08",
    verb: "Resolver e elaborar problemas",
    content: "que envolvam a razão de semelhança em figuras geométricas planas",
    context: "e homotetias",
  },
  EF09MA11: {
    code: "EF09MA11",
    verb: "Resolver e elaborar problemas",
    content: "envolvendo medidas de volume de corpos e recipientes complexos",
    context: "em diferentes aplicações práticas do cotidiano e da engenharia",
  },
  EF09MA20: {
    code: "EF09MA20",
    verb: "Analisar e estabelecer",
    content: "a probabilidade de eventos compostos",
    context: "utilizando o princípio multiplicativo e diagramas de árvore",
  },
  EF06HI01: {
    code: "EF06HI01",
    verb: "Identificar",
    content: "diferentes formas de registro da história (fontes visuais, escritas, orais, materiais)",
    context: "compreendendo que elas expressam visões de diferentes grupos humanos em diferentes tempos e espaços",
  },
  EF06HI02: {
    code: "EF06HI02",
    verb: "Identificar",
    content: "a gênese da produção da história e a importância de questionar a origem e a autoria",
    context: "de narrativas, discursos e fontes históricas",
  },
  EF06HI14: {
    code: "EF06HI14",
    verb: "Identificar e analisar",
    content: "características das culturas pré-colombianas (maias, astecas e incas)",
    context: "analisando suas organizações sociais, econômicas, políticas e religiosas antes da chegada dos europeus",
  },
  EF06HI16: {
    code: "EF06HI16",
    verb: "Caracterizar e comparar",
    content: "as dinâmicas de abastecimento e as formas de organização do trabalho e da vida social",
    context: "em diferentes sociedades e períodos, com destaque para as relações entre senhores e servos",
  },
  EF07HI01: {
    code: "EF07HI01",
    verb: "Explicar",
    content: "o processo de formação e consolidação dos estados nacionais modernos na Europa",
    context: "com ênfase nas monarquias absolutas em Portugal, Espanha, França e Inglaterra",
  },
  EF07HI15: {
    code: "EF07HI15",
    verb: "Discutir",
    content: "o conceito de escravidão moderna e suas distinções",
    context: "em relação ao escravismo antigo e à servidão medieval",
  },
  EF07HI16: {
    code: "EF07HI16",
    verb: "Analisar",
    content: "os mecanismos e as dinâmicas de comércio de escravizados em suas diferentes fases",
    context: "identificando os agentes responsáveis pelo tráfico",
  },
  EF07HI17: {
    code: "EF07HI17",
    verb: "Discutir",
    content: "as razões da passagem do mercantilismo para o capitalismo",
    context: "no contexto das transformações europeias",
  },
  EF07HI19: {
    code: "EF07HI19*",
    verb: "Analisar e identificar",
    content: "as condições das pessoas escravizadas e as formas de resistência à escravidão",
    context: "na América Portuguesa",
  },
  EF07HI20: {
    code: "EF07HI20*",
    verb: "Relacionar",
    content: "o racismo da contemporaneidade ao processo de escravização das populações africanas e afrodescendentes",
    context: "no período colonial e na atualidade",
  },
  EF08HI01: {
    code: "EF08HI01",
    verb: "Analisar e identificar",
    content: "o processo de expansão imperialista europeia na Ásia e na África no século XIX",
    context: "identificando justificativas ideológicas e interesses econômicos",
  },
  EF08HI03: {
    code: "EF08HI03",
    verb: "Analisar e compreender",
    content: "os antecedentes, as causas e os desdobramentos da Primeira Guerra Mundial",
    context: "compreendendo o impacto geopolítico e humano do conflito",
  },
  EF08HI04: {
    code: "EF08HI04",
    verb: "Analisar",
    content: "os impactos da Primeira Guerra Mundial e a emergência de regimes totalitários (fascismo e nazismo)",
    context: "na Europa entreguerras",
  },
  EF08HI19A: {
    code: "EF08HI19A",
    verb: "Formular questionamentos sobre",
    content: "a tutela da população indígena, a escravidão dos negros e a tutela dos egressos da escravidão",
    context: "no Brasil do século XIX",
  },
  EF08HI20: {
    code: "EF08HI20",
    verb: "Identificar e relacionar",
    content: "aspectos das estruturas sociais da atualidade com os legados da escravidão no Brasil",
    context: "e discutir a importância de ações afirmativas",
  },
  EF08HI21: {
    code: "EF08HI21",
    verb: "Identificar e analisar",
    content: "as políticas oficiais com relação ao indígena",
    context: "durante o Império",
  },
  EF08HI22: {
    code: "EF08HI22",
    verb: "Discutir",
    content: "o papel das culturas letradas, não letradas e das artes na produção das identidades",
    context: "no Brasil do século XIX",
  },
  EF08HI23: {
    code: "EF08HI23",
    verb: "Estabelecer relações causais entre",
    content: "as ideologias raciais e o determinismo",
    context: "no contexto do imperialismo europeu e seus impactos na África e na Ásia",
  },
  EF08HI24: {
    code: "EF08HI24",
    verb: "Reconhecer e analisar",
    content: "os principais produtos procedentes do continente africano e os impactos sobre as comunidades locais",
    context: "durante o imperialismo europeu na forma de organização e exploração econômica",
  },
  EF08HI25: {
    code: "EF08HI25",
    verb: "Caracterizar e contextualizar",
    content: "aspectos das relações entre os Estados Unidos da América e a América Latina",
    context: "no século XIX",
  },
  EF08HI27: {
    code: "EF08HI27",
    verb: "Identificar e avaliar",
    content: "as tensões e os significados dos discursos civilizatórios e seus impactos negativos para os povos indígenas e populações negras",
    context: "com base na seleção e consulta de fontes de diferentes naturezas nas Américas",
  },
  EF09HI01: {
    code: "EF09HI01",
    verb: "Analisar",
    content: "os antecedentes, o desenvolvimento e os desdobramentos da Guerra Fria",
    context: "com foco na consolidação do bloco capitalista e socialista",
  },
  EF09HI08: {
    code: "EF09HI08",
    verb: "Identificar",
    content: "as transformações ocorridas no debate político-social",
    context: "durante a transição entre o século XIX e XX",
  },
  EF09HI22: {
    code: "EF09HI22",
    verb: "Discutir",
    content: "o papel da mobilização da sociedade brasileira",
    context: "do final do período ditatorial até a Constituição de 1988",
  },
  EF09HI24: {
    code: "EF09HI24",
    verb: "Analisar",
    content: "as transformações políticas, econômicas, sociais e culturais",
    context: "de 1989 aos dias atuais, identificando questões relevantes",
  },
  EF09HI27: {
    code: "EF09HI27",
    verb: "Relacionar",
    content: "aspectos das mudanças econômicas, culturais e sociais ocorridas no Brasil a partir da década de 1990",
    context: "ao papel do Estado, mercado e sociedade civil",
  },
  EF09HI31: {
    code: "EF09HI31",
    verb: "Identificar e analisar",
    content: "os impactos da globalização",
    context: "nas relações políticas, econômicas e culturais",
  },
  EF09HI32: {
    code: "EF09HI32",
    verb: "Analisar",
    content: "as consequências da globalização",
    context: "para as diferentes populações e regiões do mundo",
  },
  EF09HI33: {
    code: "EF09HI33",
    verb: "Analisar",
    content: "as transformações nas relações políticas locais e globais",
    context: "geradas pelo desenvolvimento das tecnologias digitais de informação e comunicação",
  },
  EF09HI34: {
    code: "EF09HI34",
    verb: "Identificar e analisar",
    content: "os processos de integração regional",
    context: "e seus impactos nas sociedades contemporâneas",
  },
  EF09HI35: {
    code: "EF09HI35",
    verb: "Discutir e analisar",
    content: "as demandas por direitos sociais e políticos de diferentes grupos",
    context: "na atualidade",
  },
  EF09HI36: {
    code: "EF09HI36",
    verb: "Identificar e analisar",
    content: "as transformações nas relações de trabalho e nas formas de organização social",
    context: "contemporâneas",
  },
  EF06GE01: {
    code: "EF06GE01",
    verb: "Comparar",
    content: "modificações do trabalho e do uso do espaço em diferentes lugares",
    context: "a partir de imagens, relatos e mapas",
  },
  EF06GE05: {
    code: "EF06GE05",
    verb: "Relacionar",
    content: "padrões climáticos aos tipos de vegetação",
    context: "e às atividades econômicas em diferentes regiões",
  },
  EF06GE10: {
    code: "EF06GE10",
    verb: "Explicar",
    content: "a formação de grandes domínios morfoclimáticos no Brasil",
    context: "sua importância para a biodiversidade e as intervenções humanas",
  },
  EF06GE11: {
    code: "EF06GE11",
    verb: "Analisar",
    content: "distintas interações das sociedades com a natureza",
    context: "com base na identificação de impactos econômicos e socioambientais",
  },
  EF06GE16: {
    code: "EF06GE16*",
    verb: "Descrever",
    content: "as características das paisagens dos lugares de vivência",
    context: "e os fatores de sua transformação",
  },
  EF07GE01: {
    code: "EF07GE01",
    verb: "Avaliar",
    content: "a estrutura e a dinâmica da população brasileira",
    context: "a partir de dados estatísticos e pirâmides etárias",
  },
  EF07GE05: {
    code: "EF07GE05",
    verb: "Analisar",
    content: "fatos e situações para compreender a integração",
    context: "entre os lugares e a vida cotidiana das populações",
  },
  EF07GE06: {
    code: "EF07GE06",
    verb: "Discutir",
    content: "as transformações dos espaços geográficos",
    context: "como produto das relações socioeconômicas e culturais",
  },
  EF07GE08: {
    code: "EF07GE08",
    verb: "Analisar",
    content: "a transformação das paisagens naturais e antrópicas",
    context: "em função das dinâmicas populacionais",
  },
  EF07GE09A: {
    code: "EF07GE09A",
    verb: "Interpretar",
    content: "fenômenos geográficos",
    context: "a partir de representações cartográficas variadas",
  },
  EF07GE20: {
    code: "EF07GE20*",
    verb: "Caracterizar",
    content: "os processos de urbanização",
    context: "no território brasileiro",
  },
  EF07GE21: {
    code: "EF07GE21*",
    verb: "Identificar",
    content: "as contradições do processo de urbanização",
    context: "em diferentes escalas",
  },
  EF08GE10: {
    code: "EF08GE10",
    verb: "Analisar",
    content: "a importância dos recursos hídricos",
    context: "para o desenvolvimento humano e econômico",
  },
  EF08GE15: {
    code: "EF08GE15",
    verb: "Analisar",
    content: "os fluxos de mercadorias e pessoas",
    context: "no contexto da globalização",
  },
  EF08GE16A: {
    code: "EF08GE16A",
    verb: "Identificar",
    content: "o papel dos países desenvolvidos",
    context: "na economia global e nos fluxos de capitais",
  },
  EF08GE16B: {
    code: "EF08GE16B",
    verb: "Analisar",
    content: "a atuação das empresas transnacionais",
    context: "na organização do espaço geográfico mundial",
  },
  EF08GE17: {
    code: "EF08GE17",
    verb: "Avaliar",
    content: "os impactos ambientais decorrentes das atividades produtivas",
    context: "em nível global",
  },
  EF08GE18: {
    code: "EF08GE18",
    verb: "Reconhecer",
    content: "os principais problemas ambientais globais",
    context: "e suas possíveis soluções",
  },
  EF08GE20B: {
    code: "EF08GE20B",
    verb: "Analisar",
    content: "as dinâmicas de migração contemporâneas",
    context: "e seus impactos socioeconômicos",
  },
  EF08GE21: {
    code: "EF08GE21",
    verb: "Discutir",
    content: "o papel das organizações internacionais",
    context: "na governança global e resolução de conflitos",
  },
  EF08GE22: {
    code: "EF08GE22",
    verb: "Relacionar",
    content: "as desigualdades regionais",
    context: "aos processos de desenvolvimento econômico",
  },
  EF09GE10: {
    code: "EF09GE10",
    verb: "Analisar",
    content: "a importância dos organismos internacionais",
    context: "na governança global e na solução de conflitos geopolíticos",
  },
  EF09GE11: {
    code: "EF09GE11",
    verb: "Relacionar",
    content: "os fluxos migratórios",
    context: "às crises humanitárias e aos processos de globalização",
  },
  EF09GE18: {
    code: "EF09GE18",
    verb: "Identificar",
    content: "os aspectos culturais e demográficos",
    context: "das diferentes regiões do mundo contemporâneo",
  },
  EF06LP01: {
    code: "EF06LP01",
    verb: "Reconhecer",
    content: "a impossibilidade de uma neutralidade absoluta no discurso jornalístico",
    context: "e posicionar-se de forma crítica diante dos fatos noticiados",
  },
  EF06LP04: {
    code: "EF06LP04",
    verb: "Analisar",
    content: "a função e o efeito de sentido do uso de figuras de linguagem",
    context: "em textos poéticos e publicitários",
  },
  EF07LP02: {
    code: "EF07LP02",
    verb: "Comparar",
    content: "notícias e reportagens sobre um mesmo fato veiculadas em diferentes mídias",
    context: "analisando os processos de edição e os efeitos de sentido",
  },
  EF08LP03: {
    code: "EF08LP03",
    verb: "Produzir",
    content: "artigos de opinião e textos argumentativos",
    context: "posicionando-se de forma fundamentada sobre temas controversos",
  },
  EF09LP04: {
    code: "EF09LP04",
    verb: "Escrever",
    content: "textos argumentativos e dissertativos",
    context: "utilizando operadores argumentativos e conectivos coesivos adequados",
  },
  EF69LP05: {
    code: "EF69LP05",
    verb: "Inferir e justificar",
    content: "em textos multissemióticos, o efeito de sentido do uso de recursos persuasivos",
    context: "em peças publicitárias e de propaganda",
  },
  EF69LP44: {
    code: "EF69LP44",
    verb: "Inferir",
    content: "a presença de valores sociais, culturais e humanos e a diferente visão de mundo",
    context: "em textos literários de diferentes épocas",
  },
  EF89LP14: {
    code: "EF89LP14",
    verb: "Analisar",
    content: "o papel da crítica e da resenha na circulação de produções culturais",
    context: "em diferentes esferas de circulação",
  },
  EM13LP01: {
    code: "EM13LP01",
    verb: "Relacionar",
    content: "o texto, tanto na produção como na recepção, a suas condições de produção e a seu contexto sócio-histórico",
    context: "de circulação",
  },
  EM13LP05: {
    code: "EM13LP05",
    verb: "Analisar",
    content: "em textos de diferentes gêneros, as marcas textuais e discursivas de persuasão",
    context: "avaliando sua força argumentativa",
  },
  EM13LP12: {
    code: "EM13LP12",
    verb: "Selecionar e utilizar",
    content: "estratégias de planejamento, elaboração, revisão, edição e reescrita de textos",
    context: "considerando a situação comunicativa e os objetivos propostos",
  },
  EF06CI01: {
    code: "EF06CI01",
    verb: "Classificar",
    content: "como homogênea ou heterogênea a mistura de dois ou mais materiais",
    context: "a partir da observação direta ou experimental",
  },
  EF06CI02: {
    code: "EF06CI02",
    verb: "Identificar",
    content: "evidências de transformações químicas a partir do resultado de misturas de materiais",
    context: "em situações cotidianas e experimentais",
  },
  EF07CI08: {
    code: "EF07CI08",
    verb: "Avaliar",
    content: "como os impactos provocados por catástrofes naturais ou ações humanas",
    context: "podem alterar os ecossistemas e a dinâmica populacional",
  },
  EF08CI05: {
    code: "EF08CI05",
    verb: "Propor",
    content: "ações coletivas para otimizar o uso de energia elétrica",
    context: "em sua escola e comunidade",
  },
  EF09CI01: {
    code: "EF09CI01",
    verb: "Investigar",
    content: "as mudanças de estado físico da matéria e as propriedades térmicas",
    context: "com base no modelo de constituição corpuscular",
  },
  EM13CNT101: {
    code: "EM13CNT101",
    verb: "Analisar e representar",
    content: "as transformações e conservações em sistemas que envolvam quantidade de matéria, de energia e de movimento",
    context: "para realizar previsões sobre seus comportamentos em situações cotidianas",
  },
  EM13CNT301: {
    code: "EM13CNT301",
    verb: "Construir",
    content: "questões, elaborar hipóteses, previsões e estimativas",
    context: "empregando instrumentos e processos de medição e técnicas de coleta de dados",
  },
  EM13MAT307: {
    code: "EM13MAT307",
    verb: "Identificar e analisar",
    content: "a presença de grandezas",
    context: "em situações reais e geométricas envolvendo trigonometria no triângulo retângulo",
  },
  EM13MAT309: {
    code: "EM13MAT309",
    verb: "Resolver e elaborar problemas",
    content: "envolvendo o cálculo de áreas de superfícies planas e de corpos redondos",
    context: "em contextos geométricos e do cotidiano",
  },
  EM13MAT314: {
    code: "EM13MAT314",
    verb: "Investigar e analisar",
    content: "a ocorrência de fenômenos estatísticos",
    context: "por meio de distribuições probabilísticas",
  },
  EM13MAT316: {
    code: "EM13MAT316",
    verb: "Resolver e elaborar problemas",
    content: "envolvendo a análise de dados estatísticos",
    context: "em diferentes contextos",
  },
  EM13MAT506: {
    code: "EM13MAT506",
    verb: "Interpretar",
    content: "informações contidas em textos e gráficos estatísticos",
    context: "identificando tendências e padrões",
  },
  EM13CHS204: {
    code: "EM13CHS204",
    verb: "Posicionar-se criticamente",
    content: "com base em princípios éticos",
    context: "frente aos desafios ambientais contemporâneos",
  },
  EM13CHS306: {
    code: "EM13CHS306",
    verb: "Avaliar",
    content: "as pretensões de universalidade do conhecimento",
    context: "de modo a compreender as relações entre ciência, tecnologia e sociedade",
  },
  EM13CHS401: {
    code: "EM13CHS401",
    verb: "Identificar e analisar",
    content: "as relações entre sujeitos, grupos, classes sociais e sociedades com culturas distintas",
    context: "diante das transformações técnicas, tecnológicas e informacionais",
  },
  EM13CHS402: {
    code: "EM13CHS402",
    verb: "Analisar e comparar",
    content: "indicadores de emprego, trabalho e renda em diferentes espaços, escalas e tempos",
    context: "associando-os a processos de estratificação social",
  },
  EM13CHS501: {
    code: "EM13CHS501",
    verb: "Analisar",
    content: "os fundamentos da ética nas diferentes culturas, tempo e espaço",
    context: "identificando processos que contribuem para a formação de sujeitos, valores e normas",
  },
  EM13CHS503: {
    code: "EM13CHS503",
    verb: "Identificar",
    content: "formas de atuação social",
    context: "que contribuam para a redução da desigualdade, do preconceito e da violência",
  },
  EM13CHS601: {
    code: "EM13CHS601",
    verb: "Identificar e analisar",
    content: "os processos de produção e circulação de riquezas, mercadorias e pessoas",
    context: "em escala regional e global",
  },
  EM13CHS603: {
    code: "EM13CHS603",
    verb: "Analisar",
    content: "a formação de diferentes países, povos e nações e de suas experiências políticas",
    context: "e de exercício da cidadania",
  },
  EF06HI03: {
    code: "EF06HI03",
    verb: "Identificar",
    content: "as hipóteses científicas sobre o surgimento da espécie humana e sua dispersão pelo planeta",
    context: "a partir do estudo de fósseis, vestígios materiais e artefatos",
  },
  EF06HI04: {
    code: "EF06HI04",
    verb: "Conhecer e analisar",
    content: "teorias científicas e mitos sobre o surgimento da espécie humana",
    context: "compreendendo as diferentes visões de mundo presentes nas sociedades tradicionais e contemporâneas",
  },
  EF06HI05: {
    code: "EF06HI05",
    verb: "Descrever",
    content: "as origens e as características das primeiras civilizações e sociedades da Antiguidade (Egito, Mesopotâmia, China, Índia, Fenícia, etc.)",
    context: "destacando as semelhanças e diferenças entre elas",
  },
  EF06HI06: {
    code: "EF06HI06",
    verb: "Analisar",
    content: "o papel da religião, da escrita, das leis e do Estado nas sociedades da Antiguidade",
    context: "compreendendo os processos de dominação e organização social da época",
  },
  EF06HI07: {
    code: "EF06HI07",
    verb: "Identificar e analisar",
    content: "as características das sociedades da Antiguidade Clássica (Grécia e Roma)",
    context: "analisando suas estruturas políticas, econômicas, sociais e culturais, bem como o legado deixado para o mundo ocidental",
  },
  EF06HI08: {
    code: "EF06HI08",
    verb: "Descrever e identificar",
    content: "o processo de formação da cidadania e da democracia na Grécia Antiga (especialmente em Atenas)",
    context: "identificando limites, exclusões e permanências em relação aos dias atuais",
  },
  EF06HI09: {
    code: "EF06HI09",
    verb: "Descrever e analisar",
    content: "o processo de expansão territorial e militar de Roma",
    context: "analisando as transformações políticas, econômicas e sociais decorrentes da formação do Império Romano",
  },
  EF06HI11: {
    code: "EF06HI11",
    verb: "Caracterizar e compreender",
    content: "o processo de consolidação do cristianismo no Império Romano",
    context: "compreendendo as transformações culturais e políticas associadas a esse fenômeno histórico",
  },
  EF06HI12: {
    code: "EF06HI12",
    verb: "Descrever e identificar",
    content: "o processo de crise e fragmentação do Império Romano do Ocidente",
    context: "identificando as bases da transição para a sociedade feudal na Europa medieval",
  },
  EF06HI13: {
    code: "EF06HI13",
    verb: "Analisar e compreender",
    content: "a organização política, econômica e social do feudalismo na Idade Média europeia",
    context: "compreendendo as relações de suserania, vassalagem, servidão e o papel da Igreja Católica",
  },
  EF07HI02: {
    code: "EF07HI02",
    verb: "Analisar",
    content: "a política mercantilista adotada pelas monarquias europeias e sua relação com a exploração colonial",
    context: "na América e na África",
  },
  EF07HI03: {
    code: "EF07HI03",
    verb: "Identificar e destacar",
    content: "as motivações e os desdobramentos das Grandes Navegações e dos descobrimentos marítimos dos séculos XV e XVI",
    context: "destacando o pioneirismo ibérico",
  },
  EF07HI04: {
    code: "EF07HI04",
    verb: "Explicar",
    content: "os impactos da expansão marítima e colonial europeia sobre as populações nativas da América",
    context: "com foco nas violências, extermínios e resistências",
  },
  EF07HI05: {
    code: "EF07HI05",
    verb: "Descrever",
    content: "o sistema de colonização portuguesa no Brasil",
    context: "(capitanias hereditárias, governos-gerais, economia açucareira e escravidão indígena e africana)",
  },
  EF07HI06: {
    code: "EF07HI06",
    verb: "Analisar e destacar",
    content: "a organização da sociedade colonial brasileira",
    context: "destacando a economia do açúcar, o papel da Igreja, o trabalho escravo e as formas de resistência negra e indígena",
  },
  EF07HI07: {
    code: "EF07HI07",
    verb: "Descrever e analisar",
    content: "a expansão territorial do Brasil colonial para o interior",
    context: "analisando as expedições de bandeirantes, as missões jesuíticas e a pecuária no sertão",
  },
  EF07HI08: {
    code: "EF07HI08",
    verb: "Analisar",
    content: "o processo de descoberta e exploração do ouro nas regiões de Minas Gerais, Goiás e Mato Grosso",
    context: "e suas consequências urbanas, econômicas e demográficas",
  },
  EF07HI09: {
    code: "EF07HI09",
    verb: "Analisar",
    content: "as transformações econômicas, sociais e culturais decorrentes do ciclo do ouro no Brasil colonial",
    context: "com ênfase no surgimento de cidades e do barroco mineiro",
  },
  EF07HI10: {
    code: "EF07HI10",
    verb: "Analisar",
    content: "as revoltas nativistas e emancipatórias no Brasil colonial",
    context: "(como a Guerra dos Emboabas, Revolta de Beckman, Inconfidência Mineira e Conjuntura Baiana)",
  },
  EF07HI11: {
    code: "EF07HI11",
    verb: "Analisar e contextualizar",
    content: "os antecedentes e os desdobramentos da Inconfidência Mineira",
    context: "contextualizando os ideais iluministas e a crise do sistema colonial português",
  },
  EF07HI12: {
    code: "EF07HI12",
    verb: "Analisar",
    content: "as características do Iluminismo e sua influência nas revoluções burguesas, na independência dos Estados Unidos e nas ideias de liberdade e igualdade",
    context: "na Europa e América",
  },
  EF07HI13: {
    code: "EF07HI13",
    verb: "Analisar e compreender",
    content: "os antecedentes, o desenvolvimento e os impactos da Revolução Francesa",
    context: "compreendendo a queda do Antigo Regime e a formulação dos direitos universais",
  },
  EF07HI14: {
    code: "EF07HI14",
    verb: "Analisar e identificar",
    content: "o processo de independência das colônias espanholas na América",
    context: "identificando lideranças, conflitos regionais e os projetos políticos predominantes",
  },
  EF08HI02: {
    code: "EF08HI02",
    verb: "Analisar e destacar",
    content: "os desdobramentos do imperialismo na África e na Ásia",
    context: "destacando os conflitos, a divisão territorial arbitrária e a exploração de recursos",
  },
  EF08HI05: {
    code: "EF08HI05",
    verb: "Analisar",
    content: "o processo de crise econômica mundial de 1929 e seus reflexos",
    context: "no cenário internacional e na economia brasileira (Era Vargas)",
  },
  EF08HI06: {
    code: "EF08HI06",
    verb: "Identificar, analisar e compreender",
    content: "as características da Era Vargas no Brasil (1930-1945)",
    context: "compreendendo a centralização política, as leis trabalhistas e o populismo",
  },
  EF08HI07: {
    code: "EF08HI07",
    verb: "Analisar",
    content: "as origens, os desdobramentos e o impacto histórico da Segunda Guerra Mundial",
    context: "com ênfase no Holocausto e no uso de armas nucleares",
  },
  EF08HI08: {
    code: "EF08HI08",
    verb: "Analisar",
    content: "a participação do Brasil na Segunda Guerra Mundial e o impacto dessa experiência",
    context: "no processo de redemocratização interna pós-1945",
  },
  EF08HI09: {
    code: "EF08HI09",
    verb: "Analisar e compreender",
    content: "as origens e a dinâmica da Guerra Fria",
    context: "compreendendo a bipolaridade mundial, a corrida armamentista e espacial, e os conflitos regionais",
  },
  EF08HI10: {
    code: "EF08HI10",
    verb: "Identificar, analisar e compreender",
    content: "o processo de descolonização da Ásia e da África",
    context: "compreendendo as lutas pela independência e os desafios geopolíticos subsequentes",
  },
  EF08HI12: {
    code: "EF08HI12",
    verb: "Analisar",
    content: "as transformações sociais, econômicas e culturais ocorridas no Brasil pós-Segunda Guerra Mundial",
    context: "com ênfase na urbanização e industrialização",
  },
  EF09HI02: {
    code: "EF09HI02",
    verb: "Analisar",
    content: "o processo de redemocratização do Brasil",
    context: "com ênfase no fim da ditadura militar, nas Diretas Já e na Constituição de 1988",
  },
  EF09HI03: {
    code: "EF09HI03",
    verb: "Identificar e analisar",
    content: "as características do populismo e da industrialização no Brasil",
    context: "do período JK ao regime militar (1945-1985)",
  },
  EF09HI04: {
    code: "EF09HI04",
    verb: "Analisar",
    content: "as características dos regimes militares na América Latina e as lutas pela redemocratização e defesa dos direitos humanos",
    context: "no contexto das lutas por democracia e direitos humanos",
  },
  EF09HI05: {
    code: "EF09HI05",
    verb: "Analisar e compreender",
    content: "os principais conflitos do Oriente Médio após a Segunda Guerra Mundial",
    context: "compreendendo os fatores políticos, religiosos e territoriais",
  },
  EF09HI06: {
    code: "EF09HI06",
    verb: "Analisar e identificar",
    content: "o processo de globalização e a formação de blocos econômicos",
    context: "identificando os impactos na economia, cultura e geopolítica mundial",
  },
  EF09HI07: {
    code: "EF09HI07",
    verb: "Analisar",
    content: "os desafios sociais, econômicos e políticos do mundo contemporâneo",
    context: "com ênfase nas desigualdades globais e migrações",
  },
  // Inglês - Ensino Fundamental e Ensino Médio
  EF06LI01: {
    code: "EF06LI01",
    verb: "Interagir e demonstrar",
    content: "em situações de intercâmbio oral",
    context: "demonstrando iniciativa para utilizar a língua inglesa",
  },
  EF06LI04: {
    code: "EF06LI04",
    verb: "Reconhecer",
    content: "o assunto e as informações principais em textos orais da língua inglesa",
    context: "com o apoio de palavras cognatas e pistas do contexto discursivo",
  },
  EF06LI05: {
    code: "EF06LI05",
    verb: "Aplicar e falar",
    content: "os conhecimentos da língua inglesa para falar de si e de outras pessoas",
    context: "explicitando informações pessoais e características da família, da comunidade e da escola",
  },
  EF06LI06: {
    code: "EF06LI06",
    verb: "Planejar e compartilhar",
    content: "apresentação sobre a família, a comunidade e a escola",
    context: "compartilhando-a oralmente com o grupo em língua inglesa",
  },
  EF06LI07: {
    code: "EF06LI07",
    verb: "Formular",
    content: "perguntas e respostas orais sobre si mesmo, sua família e sua rotina diária",
    context: "em língua inglesa em interações orais cotidianas",
  },
  EF06LI09: {
    code: "EF06LI09",
    verb: "Localizar",
    content: "informações específicas em textos escritos de diferentes gêneros e suportes",
    context: "na língua inglesa",
  },
  EF06LI12: {
    code: "EF06LI12",
    verb: "Interessar-se e compartilhar",
    content: "ideias sobre o que o texto lido informa ou comunica",
    context: "em interações orais e discussões de leitura em língua inglesa",
  },
  EF06LI13: {
    code: "EF06LI13",
    verb: "Listar e planejar",
    content: "ideias para a produção de textos em língua inglesa",
    context: "levando em conta o tema e o assunto proposto",
  },
  EF06LI15: {
    code: "EF06LI15",
    verb: "Produzir",
    content: "textos escritos em língua inglesa (histórias em quadrinhos, cartazes, chats, blogues, agendas, fotolegendas, entre outros)",
    context: "sobre si mesmo, sua família, seus amigos, preferências e rotinas",
  },
  EF06LI17: {
    code: "EF06LI17",
    verb: "Construir",
    content: "repertório lexical relativo a temas familiares (escola, família, rotina diária, atividades de lazer, esportes, entre outros)",
    context: "em situações de uso e comunicação em língua inglesa",
  },
  EF06LI20: {
    code: "EF06LI20",
    verb: "Utilizar e descrever",
    content: "o presente simples (verbo to be e verbos de ação cotidiana)",
    context: "para identificar pessoas e descrever rotinas diárias",
  },
  EF06LI24: {
    code: "EF06LI24",
    verb: "Investigar",
    content: "o alcance da língua inglesa no mundo como língua materna e/ou oficial (primeira ou segunda língua)",
    context: "reconhecendo sua presença em diferentes países e culturas",
  },
  EF06LI25: {
    code: "EF06LI25",
    verb: "Reconhecer",
    content: "a presença da língua inglesa na sociedade brasileira e na comunidade",
    context: "em palavras, expressões e suportes da publicidade, entretenimento e cultura digital",
  },
  EF06LI26: {
    code: "EF06LI26",
    verb: "Avaliar",
    content: "a presença da língua inglesa no cotidiano e a influência de palavras de outras línguas",
    context: "de forma crítica na comunicação e na cultura contemporânea",
  },
  EF07LI01: {
    code: "EF07LI01",
    verb: "Interagir, trocar e engajar-se",
    content: "em situações de intercâmbio oral para realizar atividades em sala de aula",
    context: "de forma respeitosa e colaborativa, trocando ideias em jogos e atividades",
  },
  EF07LI02: {
    code: "EF07LI02",
    verb: "Entrevistar",
    content: "colegas para conhecer suas histórias de vida, preferências e rotinas",
    context: "utilizando perguntas e respostas estruturadas em língua inglesa",
  },
  EF07LI03: {
    code: "EF07LI03",
    verb: "Mobilizar e compreender",
    content: "conhecimentos prévios para compreender texto oral em língua inglesa",
    context: "em diferentes situações de escuta e comunicação",
  },
  EF07LI04: {
    code: "EF07LI04",
    verb: "Reconhecer",
    content: "o assunto e as informações principais em textos orais da língua inglesa",
    context: "com o apoio de palavras cognatas e pistas do contexto discursivo",
  },
  EF07LI05: {
    code: "EF07LI05",
    verb: "Compor",
    content: "narrativas de ficção ou baseadas em fatos reais em língua inglesa",
    context: "sobre a vida cotidiana e eventos passados",
  },
  EF07LI06: {
    code: "EF07LI06",
    verb: "Antecipar e inferir",
    content: "o sentido global de textos em língua inglesa",
    context: "por inferências, com base em títulos, frases de abertura/fecho e palavras-chave",
  },
  EF07LI07: {
    code: "EF07LI07",
    verb: "Identificar",
    content: "a informação-chave de partes de um texto em língua inglesa (parágrafos)",
    context: "na leitura e interpretação textual",
  },
  EF07LI08: {
    code: "EF07LI08",
    verb: "Relacionar e construir",
    content: "as partes de um texto (parágrafos) para construir seu sentido global",
    context: "em textos de diferentes gêneros em língua inglesa",
  },
  EF07LI09: {
    code: "EF07LI09",
    verb: "Selecionar",
    content: "a informação desejada como objetivo de leitura em textos em língua inglesa",
    context: "aplicando técnicas de scanning e skimming",
  },
  EF07LI11: {
    code: "EF07LI11",
    verb: "Participar e trocar",
    content: "opiniões e informações sobre textos lidos na sala de aula ou em outros ambientes",
    context: "em práticas de leitura e discussão em língua inglesa",
  },
  EF07LI12: {
    code: "EF07LI12",
    verb: "Planejar",
    content: "a escrita de textos em língua inglesa",
    context: "em função do contexto (público, finalidade, layout e suporte)",
  },
  EF07LI15: {
    code: "EF07LI15",
    verb: "Construir",
    content: "repertório lexical relativo ao passado simples (verbos regulares e irregulares), preposições e conectores",
    context: "em narrativas e produções orais e escritas em língua inglesa",
  },
  EF07LI22: {
    code: "EF07LI22",
    verb: "Reconhecer",
    content: "a variação linguística na língua inglesa (sotaques, léxico, regionalismos)",
    context: "em diferentes países e contextos sociolinguísticos globais",
  },
  EF08LI03: {
    code: "EF08LI03",
    verb: "Construir e relacionar",
    content: "o sentido global de textos orais em língua inglesa",
    context: "relacionando suas partes, o assunto principal e informações relevantes",
  },
  EF08LI05: {
    code: "EF08LI05",
    verb: "Inferir e construir",
    content: "informações e relações implícitas em textos em língua inglesa",
    context: "para a construção do sentido global do texto",
  },
  EF08LI06: {
    code: "EF08LI06",
    verb: "Apreciar e analisar",
    content: "textos narrativos em língua inglesa (contos, fábulas, crônicas, romances, etc.)",
    context: "em versão original ou adaptada, valorizando o patrimônio literário",
  },
  EF08LI08: {
    code: "EF08LI08",
    verb: "Analisar e comparar",
    content: "o conteúdo de textos em língua inglesa, comparando diferentes perspectivas",
    context: "sobre temas contemporâneos e de relevância social",
  },
  EF08LI15: {
    code: "EF08LI15",
    verb: "Utilizar e relatar",
    content: "as formas do passado contínuo (past continuous) e passado simples",
    context: "para relatar ações e acontecimentos passados de modo inteligível",
  },
  EF09LI06: {
    code: "EF09LI06",
    verb: "Distinguir",
    content: "fatos de opiniões em textos argumentativos em língua inglesa",
    context: "na esfera jornalística, publicitária e midiática contemporânea",
  },
  EF09LI07: {
    code: "EF09LI07",
    verb: "Identificar e analisar",
    content: "argumentos principais e as evidências que os sustentam em textos argumentativos em língua inglesa",
    context: "em debates, artigos de opinião e manifestos",
  },
  EF09LI14: {
    code: "EF09LI14",
    verb: "Utilizar",
    content: "conectores indicadores de adição, condição, oposição, contraste, conclusão e causa",
    context: "na estruturação e coesão de textos argumentativos em língua inglesa",
  },
  EM13LGG102: {
    code: "EM13LGG102",
    verb: "Analisar e interpretar",
    content: "visões de mundo, conflitos de interesse, preconceitos e ideologias presentes nos discursos veiculados nas diferentes mídias",
    context: "ampliando possibilidades de explicação, interpretação e intervenção crítica da realidade",
  },
  EM13LGG103: {
    code: "EM13LGG103",
    verb: "Analisar, interpretar e produzir",
    content: "o funcionamento das linguagens para interpretar e produzir criticamente discursos em textos de diversas semioses (visuais, verbais, sonoras)",
    context: "em práticas de linguagem situadas em língua inglesa e linguagens contemporâneas",
  },
  EM13LGG104: {
    code: "EM13LGG104",
    verb: "Utilizar e produzir",
    content: "as diferentes linguagens, levando em conta seus funcionamentos, para a compreensão e produção de textos e discursos",
    context: "em diversos campos de atuação social",
  },
  EM13LGG302: {
    code: "EM13LGG302",
    verb: "Posicionar-se criticamente",
    content: "diante de conteúdos veiculados em diferentes mídias e plataformas digitais em língua inglesa",
    context: "valorizando a diversidade cultural e os direitos humanos",
  },
  EM13LGG401: {
    code: "EM13LGG401",
    verb: "Analisar e problematizar",
    content: "textos de modo a identificar e problematizar preconceitos, estereótipos e relações de poder na língua inglesa e na cultura global",
    context: "em práticas discursivas e produções culturais",
  },
  EM13LGG402: {
    code: "EM13LGG402",
    verb: "Produzir",
    content: "textos orais e escritos em língua inglesa com base em temas de relevância sociocultural",
    context: "exercendo a cidadania e o protagonismo juvenil",
  },
  EM13LGG403: {
    code: "EM13LGG403",
    verb: "Fazer uso e reconhecer",
    content: "o inglês como língua franca em contextos multiculturais",
    context: "reconhecendo a diversidade linguística e recusando preconceitos sociolinguísticos",
  },
  // Educação Física - 6º ao 9º Ano e Ensino Médio
  "EF06EF24*": {
    code: "EF06EF24*",
    verb: "Experimentar, recriar e fruir",
    content: "diferentes jogos de tabuleiro e jogos de matriz indígena e africana (como jogos de salão, damas, xadrez, trilha, pong hau ki, mancala e shisima)",
    context: "valorizando sua importância cultural, estratégica e histórica",
  },
  EF06EF24: {
    code: "EF06EF24*",
    verb: "Experimentar, recriar e fruir",
    content: "diferentes jogos de tabuleiro e jogos de matriz indígena e africana (como jogos de salão, damas, xadrez, trilha, pong hau ki, mancala e shisima)",
    context: "valorizando sua importância cultural, estratégica e histórica",
  },
  EF06EF14: {
    code: "EF06EF14",
    verb: "Experimentar, desfrutar e recriar",
    content: "diferentes lutas presentes no contexto comunitário e regional (como lutas de matriz indígena e africana, Luta Marajoara, Huka-Huka e Tarracá)",
    context: "reconhecendo e respeitando as diferenças corporais e o desempenho de si e dos colegas",
  },
  EF06EF15: {
    code: "EF06EF15",
    verb: "Planejar e utilizar",
    content: "estratégias básicas das lutas do contexto comunitário e regional",
    context: "respeitando as regras e a segurança dos participantes",
  },
  EF06EF16: {
    code: "EF06EF16",
    verb: "Identificar",
    content: "as características (códigos, rituais, elementos técnico-táticos, indumentária, materiais, instalações e instituições) das lutas do contexto comunitário e regional",
    context: "reconhecendo suas origens e transformações históricas",
  },
  EF07EF02: {
    code: "EF07EF02",
    verb: "Praticar e recriar",
    content: "jogos eletrônicos diversos, reconhecendo seus sentidos e significados",
    context: "valorizando o trabalho coletivo, a ética e o protagonismo",
  },
  EF07EF05: {
    code: "EF07EF05",
    verb: "Propor e produzir",
    content: "alternativas para a experimentação de jogos eletrônicos e práticas corporais digitais",
    context: "na escola e em outros contextos sociais e de lazer",
  },
  "EF07EF24*": {
    code: "EF07EF24*",
    verb: "Experimentar, fruir e recriar",
    content: "jogos eletrônicos com captação de movimento (exergames) e modalidades de e-sports",
    context: "discutindo suas regras, dinâmicas e transformações",
  },
  EF07EF24: {
    code: "EF07EF24*",
    verb: "Experimentar, fruir e recriar",
    content: "jogos eletrônicos com captação de movimento (exergames) e modalidades de e-sports",
    context: "discutindo suas regras, dinâmicas e transformações",
  },
  "EF07EF25*": {
    code: "EF07EF25*",
    verb: "Identificar e analisar",
    content: "as exigências corporais e a preparação física dos cyberatletas e praticantes de jogos eletrônicos",
    context: "discutindo os impactos na saúde, postura e condicionamento físico",
  },
  EF07EF25: {
    code: "EF07EF25*",
    verb: "Identificar e analisar",
    content: "as exigências corporais e a preparação física dos cyberatletas e praticantes de jogos eletrônicos",
    context: "discutindo os impactos na saúde, postura e condicionamento físico",
  },
  EF08EF19: {
    code: "EF08EF19",
    verb: "Experimentar e fruir",
    content: "diferentes práticas corporais de aventura na natureza (como trilha, trekking e caminhada ecológica)",
    context: "valorizando a própria segurança e a dos demais, e o respeito ao meio ambiente",
  },
  EF08EF20: {
    code: "EF08EF20",
    verb: "Identificar e planejar",
    content: "os riscos, as normas de segurança e os equipamentos necessários para a prática de práticas corporais de aventura na natureza",
    context: "propondo alternativas para sua realização segura na escola e em outros espaços",
  },
  EF08EF09: {
    code: "EF08EF09",
    verb: "Problematizar",
    content: "a prática excessiva de exercícios físicos e o uso de medicamentos/suplementos para a alteração da composição corporal (dismorfia corporal, vigorexia)",
    context: "discutindo padrões de beleza corporais e saúde",
  },
  "EF08EF22*": {
    code: "EF08EF22*",
    verb: "Planejar e realizar",
    content: "campanhas de conscientização sobre a importância da atividade física e os riscos do culto excessivo ao corpo",
    context: "utilizando diferentes mídias e linguagens na comunidade escolar",
  },
  EF08EF22: {
    code: "EF08EF22*",
    verb: "Planejar e realizar",
    content: "campanhas de conscientização sobre a importância da atividade física e os riscos do culto excessivo ao corpo",
    context: "utilizando diferentes mídias e linguagens na comunidade escolar",
  },
  EF09EF19: {
    code: "EF09EF19",
    verb: "Experimentar e fruir",
    content: "diferentes práticas corporais de aventura na natureza e no contexto urbano (corrida de orientação e percursos)",
    context: "respeitando o patrimônio público e o meio ambiente",
  },
  EF09EF20: {
    code: "EF09EF20",
    verb: "Identificar e utilizar",
    content: "recursos de localização e orientação (mapas, bússolas, pontos cardeais e tecnologias digitais)",
    context: "em percursos e corridas de orientação escolar",
  },
  EF09EF21: {
    code: "EF09EF21",
    verb: "Propor e planejar",
    content: "estratégias para a realização de práticas corporais de aventura com segurança e autonomia",
    context: "avaliando tomadas de decisão e superação de desafios",
  },
  "EF09EF23*": {
    code: "EF09EF23*",
    verb: "Analisar e relacionar",
    content: "os conceitos de aptidão física, saúde, composição corporal, IMC e RCQ",
    context: "com a qualidade de vida e a adoção de hábitos saudáveis",
  },
  EF09EF23: {
    code: "EF09EF23*",
    verb: "Analisar e relacionar",
    content: "os conceitos de aptidão física, saúde, composição corporal, IMC e RCQ",
    context: "com a qualidade de vida e a adoção de hábitos saudáveis",
  },
  "EF09EF24*": {
    code: "EF09EF24*",
    verb: "Planejar, executar e avaliar",
    content: "programas básicos de exercícios físicos voltados para a melhoria da saúde e do condicionamento físico",
    context: "respeitando as características e limites individuais",
  },
  EF09EF24: {
    code: "EF09EF24*",
    verb: "Planejar, executar e avaliar",
    content: "programas básicos de exercícios físicos voltados para a melhoria da saúde e do condicionamento físico",
    context: "respeitando as características e limites individuais",
  },
  "EF09EF25*": {
    code: "EF09EF25*",
    verb: "Discutir e avaliar",
    content: "a influência da mídia e dos padrões estéticos na autoimagem corporal e nas práticas de exercícios físicos",
    context: "desenvolvendo uma postura crítica frente aos apelos do consumo",
  },
  EF09EF25: {
    code: "EF09EF25*",
    verb: "Discutir e avaliar",
    content: "a influência da mídia e dos padrões estéticos na autoimagem corporal e nas práticas de exercícios físicos",
    context: "desenvolvendo uma postura crítica frente aos apelos do consumo",
  },
  EM13LGG305: {
    code: "EM13LGG305",
    verb: "Mapear, vivenciar e recriar",
    content: "práticas corporais de diferentes matrizes culturais (como jogos cooperativos e práticas comunitárias)",
    context: "reconhecendo seu potencial de integração social, empatia e transformação coletiva",
  },
  EM13LGG503: {
    code: "EM13LGG503",
    verb: "Vivenciar, refletir e transformar",
    content: "valores de cooperação, solidariedade e inclusão nas práticas corporais",
    context: "superando atitudes competitivas e excludentes em prol do bem comum",
  },
  EM13LGG202: {
    code: "EM13LGG202",
    verb: "Analisar e confeccionar",
    content: "implementos, regras e dinâmicas de práticas corporais alternativas e de entretenimento (swordplay e combates lúdicos)",
    context: "promovendo a experimentação segura, a cooperação e a expressão corporal",
  },
  // Arte - 6º ao 9º Ano
  EF06AR24: {
    code: "EF06AR24",
    verb: "Reconhecer, Apreciar e Investigar",
    content: "artistas, grupos e coletivos cênicos de circo-teatro (teatro circense e circo paulistas, brasileiros e estrangeiros de diferentes épocas)",
    context: "investigando os modos de criação, produção, divulgação, circulação e organização da atuação profissional",
  },
  EF06AR25: {
    code: "EF06AR25",
    verb: "Investigar, Identificar, Analisar e Aprimorar",
    content: "a comédia e a farsa como gêneros teatrais e a relação entre as linguagens teatral e circense em diferentes tempos e espaços",
    context: "aprimorando a capacidade de apreciação estética teatral",
  },
  EF06AR26: {
    code: "EF06AR26",
    verb: "Explorar e Reconhecer",
    content: "diferentes elementos envolvidos na composição de acontecimentos cênicos da comédia e da farsa, do circo teatro (teatro circense) e do circo (figurinos, adereços, maquiagem/visagismo, cenário, iluminação e sonoplastia)",
    context: "e reconhecer seus vocabulários",
  },
  EF06AR28: {
    code: "EF06AR28",
    verb: "Investigar, Experimentar e Compreender",
    content: "diferentes funções teatrais (ator, figurinista, aderecista e maquiador/visagista etc.)",
    context: "e compreender a relação entre elas nos processos de criação de personagem",
  },
  EF07AR24: {
    code: "EF07AR24",
    verb: "Reconhecer, apreciar e investigar",
    content: "artistas, grupos e coletivos cênicos de teatro de animação (bonecos, sombras e objetos) de diferentes matrizes estéticas e culturais",
    context: "investigando os modos de criação, produção, divulgação e circulação",
  },
  EF07AR26: {
    code: "EF07AR26",
    verb: "Explorar e reconhecer",
    content: "diferentes elementos envolvidos na composição dos acontecimentos cênicos do teatro de animação e de sombras (figurinos, adereços, cenários, iluminação e sonoplastia)",
    context: "reconhecendo seus vocabulários na criação artística",
  },
  EF07AR27: {
    code: "EF07AR27",
    verb: "Pesquisar, criar e dramatizar",
    content: "histórias e formas de dramaturgia para o teatro de animação e de formas animadas",
    context: "considerando a expressividade dos bonecos, máscaras e objetos",
  },
  EF07AR28: {
    code: "EF07AR28",
    verb: "Investigar e experimentar",
    content: "diferentes processos de criação cênica, manipulação e atuação no teatro de formas animadas",
    context: "explorando a expressividade corporal, a voz e a atuação teatral em situações coletivas",
  },
  EF07AR30: {
    code: "EF07AR30",
    verb: "Compor, improvisar e encenar",
    content: "acontecimentos cênicos e espetáculos de teatro de animação e formas animadas",
    context: "integrando som, luz, espaço, dramaturgia e manipulação cênica",
  },
  EF08AR24: {
    code: "EF08AR24",
    verb: "Reconhecer, apreciar e investigar",
    content: "artistas, grupos e coletivos cênicos de teatro e suas relações com a ancestralidade e a história cultural brasileira",
    context: "investigando seus modos de criação, representatividade e relevância social",
  },
  EF08AR25: {
    code: "EF08AR25",
    verb: "Investigar e experimentar",
    content: "a construção de personagens e narrativas teatrais que valorizem matrizes culturais, a ancestralidade e a história",
    context: "em processos de criação teatral individual e coletiva",
  },
  EF08AR26: {
    code: "EF08AR26",
    verb: "Explorar e reconhecer",
    content: "diferentes elementos envolvidos na composição de acontecimentos cênicos teatrais (espaço cênico, figurino, iluminação, sonoplastia e adereços)",
    context: "na encenação de narrativas históricas e ancestrais",
  },
  EF08AR28: {
    code: "EF08AR28",
    verb: "Investigar, experimentar e compreender",
    content: "diferentes funções teatrais (ator, diretor, figurinista, cenógrafo, iluminador e sonoplasta)",
    context: "nos processos de criação e montagens cênicas coletivas sobre raízes teatrais",
  },
  EF09AR24: {
    code: "EF09AR24",
    verb: "Reconhecer, apreciar e investigar",
    content: "artistas, grupos, coletivos cênicos e produções audiovisuais do teatro e do cinema em diferentes tempos e espaços",
    context: "analisando linguagens, estéticas, convenções e atuações profissionais",
  },
  EF09AR25: {
    code: "EF09AR25",
    verb: "Investigar e experimentar",
    content: "processos de construção de personagens para o teatro e para o cinema/audiovisual",
    context: "explorando expressividade vocal, corporal e recursos cênicos em diferentes mídias",
  },
  EF09AR26: {
    code: "EF09AR26",
    verb: "Explorar e reconhecer",
    content: "diferentes elementos envolvidos na composição cinematográfica e cênica (enquadramento, iluminação, som, roteiro, direção de arte e edição)",
    context: "na criação e análise crítica de obras teatrais e audiovisuais",
  },
  EF09AR28: {
    code: "EF09AR28",
    verb: "Investigar, experimentar e compreender",
    content: "diferentes funções teatrais e audiovisuais (atuação, roteiro, direção, cenografia, figurino, sonoplastia e edição)",
    context: "compreendendo a integração dessas funções em produções cênicas e cinematográficas coletivas",
  },
  // Língua Portuguesa - 6º ao 9º Ano e Ensino Médio (2ª e 3ª Séries)
  EF04LP15A: {
    code: "EF04LP15A",
    verb: "Distinguir e analisar",
    content: "fatos de opiniões e sugestões em textos",
    context: "informativos, jornalísticos e publicitários do campo da vida pública",
  },
  EF06LP16A: {
    code: "EF06LP16A",
    verb: "Analisar",
    content: "as características de textos jornalísticos e publicitários",
    context: "identificando estratégias de persuasão e recursos multissemióticos",
  },
  EF06LP16B: {
    code: "EF06LP16B",
    verb: "Produzir e diagramar",
    content: "textos jornalísticos e publicitários",
    context: "considerando o público-alvo, o suporte e o canal de circulação",
  },
  EF69LP03A: {
    code: "EF69LP03A",
    verb: "Identificar e analisar",
    content: "em notícias e reportagens os fatos relatados e seus desdobramentos",
    context: "avaliando impactos éticos e sociais na vida cotidiana",
  },
  EF69LP23: {
    code: "EF69LP23",
    verb: "Contribuir",
    content: "com a realização de projetos e pesquisas coletivas",
    context: "respeitando turnos de fala, posicionamentos e opiniões divergentes",
  },
  EF06LP04A: {
    code: "EF06LP04A",
    verb: "Identificar",
    content: "os mecanismos de coesão referencial (pronomes, sinônimos, hiperônimos)",
    context: "em textos narrativos, informativos e expositivos",
  },
  EF06LP04B: {
    code: "EF06LP04B",
    verb: "Utilizar",
    content: "recursos de coesão sequencial (conjunções e marcadores temporais)",
    context: "na articulação de ideias e na estruturação de parágrafos",
  },
  EF06LP05A: {
    code: "EF06LP05A",
    verb: "Identificar",
    content: "a função sintática e os efeitos de sentido dos termos constitutivos da oração",
    context: "em textos de diferentes gêneros discursivos",
  },
  EF06LP32: {
    code: "EF06LP32",
    verb: "Analisar",
    content: "a estrutura composicional e o funcionamento de textos dramáticos e poéticos",
    context: "valorizando a expressividade artística e os recursos cênicos",
  },
  EF06LP27: {
    code: "EF06LP27",
    verb: "Identificar e analisar",
    content: "recursos sonoros, visuais e semânticos (ritmo, aliteração, metáfora)",
    context: "em textos poéticos, cancioneiros e manifestações da cultura popular",
  },
  EF06LP28: {
    code: "EF06LP28",
    verb: "Planejar e produzir",
    content: "poemas, composições verbo-visuais e textos líricos",
    context: "explorando recursos expressivos, rítmicos e imagéticos",
  },
  EF69LP33A: {
    code: "EF69LP33A",
    verb: "Articular",
    content: "posicionamentos críticos em debates regrados e assembleias escolares",
    context: "fundamentando argumentos com base em dados, evidências e critérios éticos",
  },
  EF67LP28: {
    code: "EF67LP28",
    verb: "Ler e compreender",
    content: "textos do campo artístico-literário de diferentes tradições culturais e estéticas",
    context: "desenvolvendo a apreciação estética e a fruição leitora",
  },
  EF67LP29: {
    code: "EF67LP29",
    verb: "Identificar",
    content: "os elementos da narrativa (foco narrativo, espaço, tempo, personagens, enredo e conflito gerador)",
    context: "em contos, crônicas, fábulas e romances",
  },
  EF69LP05A: {
    code: "EF69LP05A",
    verb: "Posicionar-se criticamente",
    content: "sobre fatos e notícias veiculados na mídia digital e tradicional",
    context: "distinguindo fatos de boatos, preconceitos e desinformação",
  },
  EF06LP11: {
    code: "EF06LP11",
    verb: "Utilizar",
    content: "a norma-padrão da língua portuguesa em concordâncias verbal e nominal e regência",
    context: "em produções textuais de circulação escolar e social",
  },
  EF06LP07A: {
    code: "EF06LP07A",
    verb: "Identificar e analisar",
    content: "o uso de figuras de linguagem e efeitos de sentido",
    context: "em textos literários, charges e anúncios publicitários",
  },
  EF07LP10: {
    code: "EF07LP10",
    verb: "Analisar",
    content: "os efeitos de sentido causados pelo uso de tempos e modos verbais",
    context: "na construção da temporalidade em sequências narrativas e relatos",
  },
  EF07LP05A: {
    code: "EF07LP05A",
    verb: "Identificar",
    content: "a estrutura e o funcionamento de orações subordinadas",
    context: "compreendendo suas funções sintáticas em textos argumentativos e expositivos",
  },
  EF07LP05B: {
    code: "EF07LP05B",
    verb: "Utilizar",
    content: "orações coordenadas e subordinadas",
    context: "na progressão temática e na coesão de artigos de opinião e dissertações",
  },
  EF07LP05C: {
    code: "EF07LP05C",
    verb: "Analisar",
    content: "os efeitos de sentido de conjunções e conectivos",
    context: "na argumentação e articulação entre orações e parágrafos",
  },
  EF67LP27: {
    code: "EF67LP27",
    verb: "Analisar",
    content: "o impacto de recursos expressivos (pontuação expressiva, rima, métrica e aliterações)",
    context: "em textos poéticos e cancioneiros",
  },
  EF07LP07: {
    code: "EF07LP07",
    verb: "Identificar e analisar",
    content: "o funcionamento de orações subordinadas adjetivas explicativas e restritivas",
    context: "compreendendo a pontuação e os efeitos de sentido em textos variados",
  },
  EF69LP55: {
    code: "EF69LP55",
    verb: "Reconhecer",
    content: "em textos de divulgação científica as estratégias de apresentação de conceitos e dados de pesquisa",
    context: "valorizando o conhecimento científico e a metodologia de investigação",
  },
  EF69LP19: {
    code: "EF69LP19",
    verb: "Analisar e produzir",
    content: "textos de divulgação científica, verbetes e infográficos",
    context: "utilizando linguagem clara, precisa e rigor conceitual",
  },
  EF07LP03: {
    code: "EF07LP03",
    verb: "Formular",
    content: "perguntas e respostas em seminários, debates e apresentações orais",
    context: "respeitando as convenções da linguagem acadêmica e da norma-padrão",
  },
  EF69LP22A: {
    code: "EF69LP22A",
    verb: "Produzir",
    content: "textos informativos e de conscientização sobre temas socioculturais relevantes",
    context: "para divulgação na comunidade escolar e em mídias locais",
  },
  EF07LP28: {
    code: "EF07LP28",
    verb: "Analisar",
    content: "a representação de identidades, conflitos e diversidade cultural",
    context: "na literatura infanto-juvenil contemporânea",
  },
  EF07LP12: {
    code: "EF07LP12",
    verb: "Planejar, redigir e revisar",
    content: "resenhas críticas, comentários e textos avaliativos de obras culturais",
    context: "sustentando juízos de valor com critérios e argumentos fundamentados",
  },
  EF08LP04: {
    code: "EF08LP04",
    verb: "Utilizar",
    content: "os conhecimentos sobre regência verbal e nominal",
    context: "para assegurar a clareza e a adequação da linguagem em textos próprios",
  },
  EF69LP25: {
    code: "EF69LP25",
    verb: "Posicionar-se criticamente",
    content: "em discussões, júris simulados e assembleias sobre temas cidadãos",
    context: "com base em direitos humanos, empatia e ética democrática",
  },
  EF08LP04A: {
    code: "EF08LP04A",
    verb: "Identificar",
    content: "complementos verbais (objeto direto e indireto) e complementos nominais",
    context: "analisando suas funções sintáticas em enunciados complexos",
  },
  EF08LP08: {
    code: "EF08LP08",
    verb: "Identificar e analisar",
    content: "a função das orações subordinadas substantivas",
    context: "na estruturação de argumentos e explicações em textos opinativos",
  },
  EF08LP05B: {
    code: "EF08LP05B",
    verb: "Empregar",
    content: "recursos de modalização e operadores argumentativos",
    context: "para matizar posicionamentos e fortalecer teses em redações",
  },
  EF08LP05C: {
    code: "EF08LP05C",
    verb: "Analisar",
    content: "estratégias argumentativas e persuasivas em textos de opinião",
    context: "avaliando a consistência das premissas e conclusões",
  },
  EF69LP47: {
    code: "EF69LP47",
    verb: "Analisar",
    content: "em peças teatrais e textos dramáticos a construção de conflitos e a ação dramática",
    context: "relacionando-os aos contextos socioculturais de produção",
  },
  EF08LP09: {
    code: "EF08LP09",
    verb: "Analisar",
    content: "o uso da voz passiva e da voz ativa em textos jornalísticos",
    context: "compreendendo os efeitos de ênfase ou ocultação do agente da ação",
  },
  EF08LP08A: {
    code: "EF08LP08A",
    verb: "Compreender",
    content: "a estrutura e o papel sintático das orações subordinadas substantivas subjetivas, objetivas e predicativas",
    context: "na produção e interpretação de períodos compostos",
  },
  EF08LP08B: {
    code: "EF08LP08B",
    verb: "Aplicar",
    content: "regras de concordância, regência e pontuação",
    context: "em períodos compostos por subordinação substantiva",
  },
  EF69LP06A: {
    code: "EF69LP06A",
    verb: "Produzir e publicar",
    content: "notícias, podcasts e reportagens digitais",
    context: "utilizando recursos hipermidiáticos e canais de circulação estudantil",
  },
  EF69LP06B: {
    code: "EF69LP06B",
    verb: "Revisar criticamente",
    content: "informações e postagens nas redes sociais e mídias informativas",
    context: "verificando fontes e combatendo notícias falsas (fake news)",
  },
  EF08LP09A: {
    code: "EF08LP09A",
    verb: "Identificar e empregar",
    content: "a concordância verbal com a partícula 'se' apassivadora e indeterminadora do sujeito",
    context: "em textos formais e acadêmicos",
  },
  EF69LP33B: {
    code: "EF69LP33B",
    verb: "Organizar e conduzir",
    content: "mesas-redondas, fóruns e debates regrados sobre temas polêmicos da atualidade",
    context: "respeitando o tempo de fala e a mediação democrática",
  },
  EF08LP10A: {
    code: "EF08LP10A",
    verb: "Analisar",
    content: "a função semântica e discursiva de adjuntos adverbiais e conectores circunstanciais",
    context: "na construção da argumentação e da progressão textual",
  },
  EF69LP12: {
    code: "EF69LP12",
    verb: "Desenvolver",
    content: "projetos de pesquisa científica e curadoria de fontes digitais e impressas",
    context: "organizando dados, citações e referências bibliográficas",
  },
  EF69LP33C: {
    code: "EF69LP33C",
    verb: "Sustentar",
    content: "teses e refutar contra-argumentos de forma ética e consistente",
    context: "em debates públicos e produções textuais argumentativas",
  },
  EF69LP56: {
    code: "EF69LP56",
    verb: "Fazer uso",
    content: "crítico, ético e reflexivo das tecnologias digitais de informação e comunicação",
    context: "em práticas de leitura, escrita, pesquisa e produção cultural",
  },
  EF69LP50: {
    code: "EF69LP50",
    verb: "Elaborar",
    content: "textos de divulgação científica e materiais explicativos",
    context: "tornando conceitos complexos acessíveis ao público geral e escolar",
  },
  EF09LP01A: {
    code: "EF09LP01A",
    verb: "Analisar e comparar",
    content: "a abordagem de temas sociais complexos em editoriais e artigos de opinião",
    context: "identificando linhas editoriais, posicionamentos e intencionalidades",
  },
  EF09LP01B: {
    code: "EF09LP01B",
    verb: "Identificar",
    content: "estratégias persuasivas explícitas e implícitas e recursos retóricos",
    context: "em discursos políticos, peças publicitárias e manifestos",
  },
  EF89LP05: {
    code: "EF89LP05",
    verb: "Analisar",
    content: "a estrutura composicional e o estilo de cartas abertas, manifestos e propostas de intervenção social",
    context: "avaliando o impacto e a relevância cidadã de suas reivindicações",
  },
  EF89LP04A: {
    code: "EF89LP04A",
    verb: "Planejar e redigir",
    content: "artigos de opinião, redações dissertativas e manifestos",
    context: "sustentando a tese com dados estatísticos, citações e argumentos de autoridade",
  },
  EF89LP04B: {
    code: "EF89LP04B",
    verb: "Revisar e aprimorar",
    content: "a coesão interparágrafos, a coerência argumentativa e a adequação vocabular",
    context: "em textos dissertativo-argumentativos",
  },
  EF69LP11: {
    code: "EF69LP11",
    verb: "Identificar e analisar",
    content: "recursos de persuasão, figuras de retórica e estratégias de convencimento",
    context: "em textos normativos, jurídicos, publicitários e do debate público",
  },
  EF89LP03: {
    code: "EF89LP03",
    verb: "Analisar",
    content: "os efeitos de sentido decorrentes do uso de citações diretas, indiretas e notas de rodapé",
    context: "em textos acadêmicos, reportagens e artigos",
  },
  EF89LP17: {
    code: "EF89LP17",
    verb: "Produzir e analisar",
    content: "textos de crítica cultural (cinema, teatro, artes visuais, música e literatura)",
    context: "fundamentando apreciações estéticas com vocabulário técnico específico",
  },
  EF69LP06: {
    code: "EF69LP06",
    verb: "Produzir e divulgar",
    content: "notícias, reportagens multimídia e infográficos interativos",
    context: "sobre acontecimentos locais, nacionais e internacionais de interesse coletivo",
  },
  EM13LP48: {
    code: "EM13LP48",
    verb: "Analisar e valorizar",
    content: "obras literárias do cânone brasileiro e universal em diálogo com o contexto histórico, social e estético",
    context: "compreendendo representações de identidade, gênero e etnia",
  },
  EM13LP54: {
    code: "EM13LP54",
    verb: "Planejar, produzir e avaliar",
    content: "projetos de intervenção social e cultural",
    context: "a partir de leituras críticas da realidade e das necessidades comunitárias",
  },
  EM13LGG204: {
    code: "EM13LGG204",
    verb: "Dialogar e interagir",
    content: "em diferentes linguagens e plataformas digitais com autonomia crítica, responsabilidade e ética",
    context: "no enfrentamento aos discursos de ódio e à desinformação",
  },
  EM13LP52: {
    code: "EM13LP52",
    verb: "Analisar",
    content: "obras e manifestações artísticas e literárias contemporâneas",
    context: "compreendendo os diálogos intertextuais, intermidiáticos e a crítica cultural",
  },
  EM13LGG201: {
    code: "EM13LGG201",
    verb: "Compreender e analisar",
    content: "as dinâmicas das mídias digitais e das indústrias culturais nas sociedades contemporâneas",
    context: "avaliando impactos nos comportamentos, identidades e direitos humanos",
  },
  EM13LP50: {
    code: "EM13LP50",
    verb: "Produzir",
    content: "resenhas críticas, ensaios teóricos e ensaios fotográficos/audiovisuais",
    context: "articulando repertório cultural, reflexão crítica e fundamentação teórica",
  },
  EM13LP53: {
    code: "EM13LP53",
    verb: "Produzir",
    content: "textos autorais de caráter literário e ensaístico",
    context: "experimentando procedimentos estéticos, estilísticos e novas linguagens",
  },
  EM13LGG303: {
    code: "EM13LGG303",
    verb: "Debater e posicionar-se",
    content: "sobre questões sociopolíticas, científicas e culturais contemporâneas",
    context: "utilizando estratégias argumentativas sólidas, éticas e respeitosas",
  },
  EM13LP15: {
    code: "EM13LP15",
    verb: "Planejar e redigir",
    content: "redações dissertativo-argumentativas com tese consistente e repertório sociocultural produtivo",
    context: "elaborando propostas de intervenção social detalhadas e viáveis",
  },
  EM13LP26A: {
    code: "EM13LP26A",
    verb: "Identificar e analisar",
    content: "os procedimentos estilísticos e as convenções da prosa realista, naturalista e modernista brasileira",
    context: "compreendendo as visões de Brasil e os debates sociais de cada período",
  },
  EM13LP26B: {
    code: "EM13LP26B",
    verb: "Analisar",
    content: "os diálogos entre a poesia contemporânea e as vanguardas históricas",
    context: "na literatura e produção artística de língua portuguesa",
  },
  EM13LP46: {
    code: "EM13LP46",
    verb: "Analisar",
    content: "os recursos expressivos e as escolhas lexicais em grandes reportagens e ensaios jornalísticos",
    context: "avaliando as nuances de sentido e o compromisso ético com a verdade",
  },
  EM13LP47: {
    code: "EM13LP47",
    verb: "Produzir e editar",
    content: "podcasts investigativos, videocasts e grandes reportagens multimídia",
    context: "sobre temas de relevante interesse público e comunitário",
  },
  EM13LP21: {
    code: "EM13LP21",
    verb: "Investigar e valorizar",
    content: "as variações linguísticas históricas, regionais e sociais da língua portuguesa",
    context: "combatendo o preconceito linguístico e promovendo o respeito à diversidade",
  },
  EM13LP40: {
    code: "EM13LP40",
    verb: "Analisar",
    content: "os impactos das transformações tecnológicas na produção, circulação e recepção de discursos",
    context: "compreendendo os algoritmos, a economia da atenção e as novas mídias",
  },
  EM13LP49: {
    code: "EM13LP49",
    verb: "Compreender e interpretar",
    content: "obras literárias representativas de diferentes movimentos estéticos e contemporâneos",
    context: "estabelecendo relações com debates éticos, políticos e filosóficos",
  },
  EM13LP09: {
    code: "EM13LP09",
    verb: "Analisar e produzir",
    content: "textos de divulgação científica e artigos acadêmicos",
    context: "observando o rigor conceitual, metodológico e as normas da ABNT",
  },
  EM13LP02A: {
    code: "EM13LP02A",
    verb: "Planejar e estruturar",
    content: "redações no modelo do ENEM e vestibulares com coesão avançada e domínio da norma-padrão",
    context: "visando excelência na clareza argumentativa e correção gramatical",
  },
  EM13LP02B: {
    code: "EM13LP02B",
    verb: "Analisar",
    content: "a consistência dos argumentos e a viabilidade da proposta de intervenção social",
    context: "em redações argumentativas complexas de exames e concursos",
  },
  EM13LP02C: {
    code: "EM13LP02C",
    verb: "Desenvolver",
    content: "repertório sociocultural produtivo e legitimado",
    context: "na elaboração de artigos de opinião, dissertações e editoriais",
  },
  EM13CNT107: {
    code: "EM13CNT107",
    verb: "Realizar previsões, avaliar intervenções e construir protótipos",
    content: "de sistemas térmicos que visem à sustentabilidade, considerando sua composição e os efeitos das variáveis termodinâmicas sobre seu funcionamento",
    context: "considerando também o uso de tecnologias digitais de informação e comunicação",
  },
  EM13CNT308: {
    code: "EM13CNT308",
    verb: "Investigar e analisar",
    content: "o funcionamento de equipamentos elétricos, sistemas eletroquímicos, reações de oxirredução e processos de produção e descarte de materiais",
    context: "considerando suas especificações técnicas, circuitos, pilhas/baterias, eletrólise e os impactos socioambientais associados",
  },
  // Ciências - 6º ao 9º Ano
  EF06CI06: {
    code: "EF06CI06",
    verb: "Concluir",
    content: "que os organismos são um complexo arranjo de sistemas com diferentes níveis de organização",
    context: "com base na análise de ilustrações e/ou modelos físicos ou digitais",
  },
  EF06CI07: {
    code: "EF06CI07",
    verb: "Justificar e caracterizar",
    content: "a importância do corpo humano e a organização dos sistemas digestório, respiratório e circulatório, como integradores de suas funções",
    context: "com base no estudo do metabolismo de nutrientes",
  },
  EF06CI08: {
    code: "EF06CI08",
    verb: "Explicar",
    content: "a importância da caderneta de vacinação nos ciclos da vida e a imunização por vacinas, bem como o papel da proteção coletiva (imunidade de rebanho)",
    context: "na prevenção de doenças transmissíveis e na promoção da saúde",
  },
  EF06CI09: {
    code: "EF06CI09",
    verb: "Discutir e formular propostas",
    content: "a ocorrência de distúrbios nutricionais (como obesidade, desnutrição, etc.) entre crianças e jovens, associando-os a fatores alimentares e socioeconômicos",
    context: "para uma alimentação saudável",
  },
  EF06CI10: {
    code: "EF06CI10",
    verb: "Explicar",
    content: "a importância da higiene e do saneamento básico para a prevenção de doenças e promoção da saúde pública",
    context: "com base em evidências científicas e históricas sobre o tema e em dados epidemiológicos",
  },
  EF07CI09: {
    code: "EF07CI09",
    verb: "Analisar",
    content: "a importância da Astronomia e das explorações espaciais",
    context: "para o avanço do conhecimento científico e tecnológico, bem como para o cotidiano da sociedade",
  },
  EF07CI109: {
    code: "EF07CI09",
    verb: "Analisar",
    content: "a importância da Astronomia e das explorações espaciais",
    context: "para o avanço do conhecimento científico e tecnológico, bem como para o cotidiano da sociedade",
  },
  EF07CI10A: {
    code: "EF07CI10A",
    verb: "Descrever",
    content: "a estrutura interna da Terra (crosta, manto e núcleo) e suas propriedades",
    context: "com base em modelos geológicos e evidências científicas",
  },
  EF07CI10B: {
    code: "EF07CI10B",
    verb: "Relacionar e analisar",
    content: "a dinâmica das placas tectônicas com a ocorrência de terremotos, vulcanismo e tsunamis",
    context: "compreendendo as transformações da superfície terrestre",
  },
  EF07CI11: {
    code: "EF07CI11",
    verb: "Analisar e interpretar",
    content: "evidências científicas da deriva continental e da tectônica de placas",
    context: "compreendendo a movimentação contínua da superfície terrestre",
  },
  EF07CI11B: {
    code: "EF07CI11B",
    verb: "Identificar e analisar",
    content: "as evidências fósseis, geológicas e paleontológicas da deriva continental",
    context: "e da separação dos continentes",
  },
  EF08CI01: {
    code: "EF08CI01",
    verb: "Identificar e descrever",
    content: "os principais sistemas do corpo humano (nervoso, endócrino, reprodutor, imunológico)",
    context: "analisando a integração e o funcionamento integrado",
  },
  EF08CI02: {
    code: "EF08CI02",
    verb: "Discutir",
    content: "a atuação do sistema nervoso e do sistema endócrino na regulação das funções corporais, resposta a estímulos e coordenação motora",
    context: "compreendendo a homeostase corporal",
  },
  EF08CI03: {
    code: "EF08CI03",
    verb: "Discutir",
    content: "os mecanismos hormonais e fisiológicos envolvidos na puberdade e na adolescência",
    context: "compreendendo as transformações corporais e emocionais dessa fase",
  },
  EF08CI04: {
    code: "EF08CI04",
    verb: "Analisar e explicar",
    content: "as principais infecções sexualmente transmissíveis (ISTs), abordando formas de prevenção, tratamento",
    context: "e o impacto na saúde pública",
  },
  EF08CI05A: {
    code: "EF08CI05A",
    verb: "Discutir e valorizar",
    content: "a importância da vacinação, do autocuidado e do planejamento familiar",
    context: "na saúde reprodutiva e na prevenção de agravos",
  },
  EF08CI05C: {
    code: "EF08CI05C",
    verb: "Analisar e avaliar",
    content: "os diferentes métodos contraceptivos e a prevenção da gravidez precoce",
    context: "na adolescência e vida adulta",
  },
  EF08CI06A: {
    code: "EF08CI06A",
    verb: "Analisar e discutir",
    content: "as transformações corporais, fisiológicas e psicológicas",
    context: "durante a puberdade e juventude",
  },
  EF08CI08: {
    code: "EF08CI08",
    verb: "Discutir",
    content: "o uso de fontes de energia renováveis e não renováveis no Brasil e no mundo",
    context: "avaliando impactos socioambientais e viabilidade econômica",
  },
  EF08CI08B: {
    code: "EF08CI08B",
    verb: "Analisar e propor",
    content: "ações para a transição energética e o uso sustentável de fontes de energia renováveis",
    context: "na sociedade contemporânea",
  },
  "EF08CI10*": {
    code: "EF08CI10*",
    verb: "Identificar e analisar",
    content: "o funcionamento de circuitos elétricos e equipamentos de uso residencial",
    context: "discutindo segurança e consumo energético",
  },
  EF08CI10: {
    code: "EF08CI10*",
    verb: "Identificar e analisar",
    content: "o funcionamento de circuitos elétricos e equipamentos de uso residencial",
    context: "discutindo segurança e consumo energético",
  },
  "EF08CI11*": {
    code: "EF08CI11*",
    verb: "Identificar e caracterizar",
    content: "diferentes tipos de ondas mecânicas e eletromagnéticas (som, luz, micro-ondas, raios X)",
    context: "analisando suas aplicações tecnológicas",
  },
  EF08CI11: {
    code: "EF08CI11*",
    verb: "Identificar e caracterizar",
    content: "diferentes tipos de ondas mecânicas e eletromagnéticas (som, luz, micro-ondas, raios X)",
    context: "analisando suas aplicações tecnológicas",
  },
  "EF08CI17*": {
    code: "EF08CI17*",
    verb: "Reconhecer e analisar",
    content: "os fatores que afetam o clima, as correntes oceânicas e a circulação atmosférica",
    context: "no contexto das variações climáticas",
  },
  EF08CI17: {
    code: "EF08CI17*",
    verb: "Reconhecer e analisar",
    content: "os fatores que afetam o clima, as correntes oceânicas e a circulação atmosférica",
    context: "no contexto das variações climáticas",
  },
  "EF08CI18*": {
    code: "EF08CI18*",
    verb: "Avaliar e relacionar",
    content: "os processos reprodutivos, transmissão hereditária e diversidade biológica",
    context: "nas espécies e populações",
  },
  EF08CI18: {
    code: "EF08CI18*",
    verb: "Avaliar e relacionar",
    content: "os processos reprodutivos, transmissão hereditária e diversidade biológica",
    context: "nas espécies e populações",
  },
  EF09CI14: {
    code: "EF09CI14",
    verb: "Descrever",
    content: "a composição e a estrutura da atmosfera terrestre e a importância de suas camadas",
    context: "para a manutenção da vida e proteção do planeta",
  },
  EF09CI15: {
    code: "EF09CI15",
    verb: "Identificar e relacionar",
    content: "os fatores climáticos e meteorológicos que determinam o tempo e o clima regional e global",
    context: "analisando previsões meteorológicas e modelos climáticos",
  },
  EF09CI16: {
    code: "EF09CI16",
    verb: "Analisar",
    content: "a ocorrência de fenômenos astronômicos cíclicos e a influência da radiação solar",
    context: "na dinâmica climática terrestre",
  },
  EF09CI17: {
    code: "EF09CI17",
    verb: "Discutir",
    content: "a evolução estelar, a origem do universo (Teoria do Big Bang), a estrutura das galáxias e a formação do Sistema Solar",
    context: "com base em modelos astronômicos e evidências científicas",
  },
  "EF09CI20*": {
    code: "EF09CI20*",
    verb: "Investigar e discutir",
    content: "as evidências sobre a origem da vida e a evolução dos seres vivos na Terra",
    context: "ao longo do tempo geológico",
  },
  EF09CI20: {
    code: "EF09CI20*",
    verb: "Investigar e discutir",
    content: "as evidências sobre a origem da vida e a evolução dos seres vivos na Terra",
    context: "ao longo do tempo geológico",
  },
  // Biologia / Ciências da Natureza - Ensino Médio
  EM13CNT207: {
    code: "EM13CNT207",
    verb: "Identificar, analisar e discutir",
    content: "vulnerabilidades vinculadas às vivências e aos desafios contemporâneos aos quais as juventudes estão expostas, considerando os aspectos físico, psicoemocional e social",
    context: "a fim de desenvolver e divulgar ações de prevenção e de promoção da saúde e do bem-estar",
  },
  // Sociologia / Ciências Humanas - Ensino Médio
  EM13CHS202: {
    code: "EM13CHS202",
    verb: "Analisar e avaliar",
    content: "os impactos das tecnologias na estruturação e nas dinâmicas das sociedades contemporâneas (fluxos populacionais, financeiros, de mercadorias, de informações, de valores éticos e culturais etc.)",
    context: "bem como suas interferências nas decisões políticas, sociais, ambientais, econômicas e culturais",
  },
  EM13CHS303: {
    code: "EM13CHS303",
    verb: "Debater e posicionar-se criticamente",
    content: "sobre as transformações no mundo do trabalho, as novas formas de sociabilidade e as desigualdades sociais e econômicas",
    context: "na sociedade contemporânea",
  },
  EM13CHS404: {
    code: "EM13CHS404",
    verb: "Identificar e discutir",
    content: "os múltiplos aspectos do trabalho e as transformações no mundo do trabalho no Brasil e no mundo contemporâneo",
    context: "considerando as novas tecnologias, a precarização, o desemprego, a terceirização e os impactos socioeconômicos e culturais",
  },
  EM13CHS504: {
    code: "EM13CHS504",
    verb: "Analisar e avaliar",
    content: "os impasses ético-políticos decorrentes das transformações culturais, sociais, históricas, científicas e tecnológicas no mundo contemporâneo",
    context: "e seus desdobramentos nas atitudes e nos posicionamentos de indivíduos, grupos e sociedades",
  },
  // Física / Ciências da Natureza - Ensino Médio
  EM13CNT306: {
    code: "EM13CNT306",
    verb: "Avaliar os riscos",
    content: "envolvidos em atividades cotidianas, aplicando conhecimentos sobre radiações de diferentes frequências, suas interações com a matéria, os impactos na saúde humana e no ambiente",
    context: "propondo medidas individuais e coletivas de proteção",
  },
  EM13CNT102: {
    code: "EM13CNT102",
    verb: "Realizar previsões, avaliar intervenções e construir protótipos",
    content: "de sistemas térmicos, elétricos ou mecânicos com base na análise de transformações energéticas",
    context: "e na conservação de energia",
  },
  EM13CNT103: {
    code: "EM13CNT103",
    verb: "Utilizar",
    content: "o conhecimento sobre as radiações e suas origens para avaliar as potencialidades e os riscos de sua aplicação",
    context: "em equipamentos de uso cotidiano, na saúde, no ambiente, na indústria, na agricultura e na geração de energia elétrica",
  },
  EM13CNT309: {
    code: "EM13CNT309",
    verb: "Analisar",
    content: "o funcionamento de equipamentos elétricos e/ou eletrônicos e redes de computadores, considerando suas especificações técnicas e parâmetros de segurança",
    context: "consumo de energia e impactos socioambientais",
  },
  EM13CNT310: {
    code: "EM13CNT310",
    verb: "Investigar e analisar",
    content: "os efeitos de diferentes tipos de radiação e campos eletromagnéticos na saúde humana e no meio ambiente",
    context: "avaliando tecnologias associadas e normas de proteção",
  },
};

export function decomposeSkillSemantics(rawText: string, givenCode?: string): BnccSkillDetail {
  const text = rawText.trim();
  
  let code = givenCode || "";
  let cleanSentence = text;

  const codeMatch = text.match(/^[\(\[]?([A-Z]{2}[0-9]{2}[A-Z]{2,3}[0-9]{2,3}[A-Z]?\*?|[A-Z0-9*]{6,12})[\)\]]?\s*[-:–—]?\s*(.*)/i);
  if (codeMatch) {
    code = codeMatch[1].toUpperCase();
    cleanSentence = (codeMatch[2] || text).trim();
  }

  // Regex de verbos cognitivos BNCC (ordenados por maior especificidade)
  const COGNITIVE_VERBS_REGEX = /^(Identificar e analisar|Resolver e elaborar problemas|Resolver e elaborar|Quantificar e estabelecer relações|Quantificar e relacionar|Investigar e analisar|Investigar e propor|Investigar e discutir|Caracterizar e comparar|Caracterizar e contextualizar|Caracterizar e analisar|Estimar e medir|Planejar e realizar pesquisa|Planejar e realizar|Analisar e comparar|Analisar e estabelecer|Analisar e interpretar|Analisar e avaliar|Analisar e identificar|Discutir e analisar|Discutir e avaliar|Discutir e propor|Reconhecer e valorizar|Reconhecer e analisar|Reconhecer e aplicar|Compreender e aplicar|Compreender e relacionar|Formular questionamentos sobre|Formular questionamentos|Formular hipóteses sobre|Posicionar-se com base em princípios éticos|Posicionar-se criticamente|Posicionar-se|Identificar e relacionar|Identificar e discutir|Identificar e descrever|Identificar e avaliar|Identificar|Analisar|Interpretar|Comparar|Avaliar|Discutir|Reconhecer|Relacionar|Caracterizar|Descrever|Explicar|Calcular|Compreender|Demonstrar|Obter|Localizar|Classificar|Representar|Justificar|Aplicar|Diferenciar|Associar|Estruturar|Produzir|Ler|Escrever|Inferir|Pesquisar|Elaborar|Resolver|Investigar|Quantificar|Estimar|Planejar|Formular)/i;

  let verb = "Identificar e analisar";
  let restAfterVerb = cleanSentence;

  const verbMatch = cleanSentence.match(COGNITIVE_VERBS_REGEX);
  if (verbMatch) {
    verb = verbMatch[1];
    restAfterVerb = cleanSentence.substring(verbMatch[0].length).trim();
  }

  const CONTEXT_TRIGGERS_REGEX = /(,s*(?:por meio de|por intermédio de|a partir de|com base em|com destaque para|com o apoio de|utilizando|no contexto|no território|no plano|no triângulo|de modo a|a fim de|para compreender|visando a|identificando|associando-os|em diferentes|em situações|em nível)|(?:por meio de|utilizando o princípio multiplicativo|utilizando transformações|com base em fontes|em situações reais e geométricas|em diferentes tempos e espaços|em diferentes sociedades e períodos|em diferentes contextos|no território brasileiro|no plano cartesiano|no triângulo retângulo|identificando tendências e padrões))/i;

  let content = restAfterVerb;
  let context = "em diferentes contextos de aprendizagem";

  const contextMatch = restAfterVerb.match(CONTEXT_TRIGGERS_REGEX);
  if (contextMatch && contextMatch.index !== undefined && contextMatch.index > 4) {
    content = restAfterVerb.substring(0, contextMatch.index).trim();
    context = restAfterVerb.substring(contextMatch.index).replace(/^,s*/, "").trim();
  } else {
    const commaSplit = restAfterVerb.split(/,s*/);
    if (commaSplit.length >= 2 && commaSplit[0].length > 10) {
      content = commaSplit[0].trim();
      context = commaSplit.slice(1).join(", ").trim();
    }
  }

  content = content.replace(/^[-–—:s]+/, "").replace(/[,;.s]+$/, "").trim();
  context = context.replace(/^[-–—:s]+/, "").replace(/[,;.s]+$/, "").trim();

  if (!content) {
    content = restAfterVerb || "os conceitos e procedimentos centrais do tema";
  }
  if (!context) {
    context = "em situações de aprendizagem contextualizadas";
  }

  return {
    code: code || "BNCC",
    fullText: `${code ? code + " - " : ""}${verb} ${content} ${context}`.trim(),
    verb,
    content,
    context,
  };
}

export function parseBNCCDetails(text: string): BnccSkillDetail | null {
  if (!text || !text.trim()) return null;
  const clean = text.trim();

  // Verifica código exato normalizado
  const codeMatch = clean.match(/\b([A-Z]{2}[0-9]{2}[A-Z]{2,3}[0-9]{2,3}[A-Z]?\*?)\b/i) ||
                    clean.match(/^([A-Z0-9*]{6,12})/i);
  
  if (codeMatch) {
    const rawCode = codeMatch[1].toUpperCase().replace(/\*/g, "");
    if (KNOWN_CURRICULUM_SKILLS[rawCode]) {
      const known = KNOWN_CURRICULUM_SKILLS[rawCode];
      const officialFullText = rawCode === "EF08MA22"
        ? "EF08MA22 - Calcular a probabilidade de eventos, com base na construção do espaço amostral, utilizando o princípio multiplicativo, e reconhecer que a soma das probabilidades de todos os elementos do espaço amostral é igual a 1."
        : (clean.length > known.code.length + 10 ? clean : `${known.code} - ${known.verb} ${known.content} ${known.context}`);

      return {
        code: known.code,
        fullText: officialFullText,
        verb: known.verb,
        content: known.content,
        context: known.context,
      };
    }
  }

  return decomposeSkillSemantics(clean, codeMatch ? codeMatch[1].toUpperCase() : undefined);
}

export function parseAllBNCCDetails(text: string): BnccSkillDetail[] {
  if (!text) return [];
  const lines = text.split(/[\n;]/).map((l) => l.trim()).filter(Boolean);
  const results: BnccSkillDetail[] = [];
  const seenCodes = new Set<string>();

  for (const line of lines) {
    const detail = parseBNCCDetails(line);
    if (detail && !seenCodes.has(detail.code)) {
      seenCodes.add(detail.code);
      results.push(detail);
    }
  }

  if (results.length === 0) {
    const parts = text.split(',').map((p) => p.trim()).filter(Boolean);
    for (const part of parts) {
      const detail = parseBNCCDetails(part);
      if (detail && !seenCodes.has(detail.code)) {
        seenCodes.add(detail.code);
        results.push(detail);
      }
    }
  }

  if (results.length === 0) {
    const single = parseBNCCDetails(text);
    if (single) results.push(single);
  }

  return results;
}

export const DURATION_OPTIONS = [
  "1 aula - 50 minutos",
  "2 aulas - 100 minutos",
  "3 aulas - 150 minutos",
  "4 aulas - 200 minutos",
  "5 aulas - 250 minutos",
  "6 aulas - 300 minutos",
  "7 aulas - 350 minutos",
  "8 aulas - 400 minutos",
  "9 aulas - 450 minutos",
  "10 aulas - 500 minutos",
];

export const TEACHER_OPTIONS = [
  "ALISSON GUILHERME PRUDENCIO CHAVES",
  "CARLA MARIA GONCALVES SCHMIDT",
  "EDUARDO MUNIZ FILHO",
  "FABÍOLA ALVES DA SILVA LABBÉ",
  "FATIMA APARECIDA DA CONCEICAO COSTA",
  "JOSE LUIZ BISPO DA SILVA",
  "JOSIANE DE FATIMA MILANI",
  "KARINE DE OLIVEIRA",
  "KATHARINE OLIVEIRA RIBEIRO",
  "LUCCA MERARI MOURA DOURADO",
  "MARCIA CRISTINA DANTAS",
  "MATHEUS FELICIO DOS SANTOS",
  "OSWALDO JOSE FELICIANO",
  "ROGERIO ANDRADE DE JESUS",
  "STEPHANIE GASPAR",
  "VALDENISE VALDIRA SANTOS PEREIRA",
  "VALERIA SANTOS TORRES",
  "VANESSA BRAZERO FEITOZA",
];

export const METHODOLOGY_OPTIONS = [
  "Aprendizagem Baseada em Projetos (PBL)",
  "Sala de Aula Invertida (Flipped Classroom)",
  "Gamificação e Jogos Pedagógicos",
  "Expositiva Dialogada e Debates",
  "Aprendizagem Baseada em Problemas",
  "Metodologia STEAM / Mão na Massa",
  "Estudo de Caso e Análise Crítica",
  "Instrução por Pares (Peer Instruction)",
  "Rotação por Estações de Aprendizagem",
];

export const TEMPLATE_PRESETS: TemplatePreset[] = [
  {
    id: "mat-fra",
    title: "Matemática: Frações e Dízimas na Prática",
    subject: "Matemática",
    gradeLevel: "Ensino Fundamental II - 6º Ano A",
    duration: "2 aulas - 100 minutos",
    topic: "Compreensão de frações, equivalência e representação no cotidiano com pizzas e gráficos",
    methodology: "Gamificação e Jogos Pedagógicos",
    bnccCompetencies: "EF06MA07, EF06MA09",
    customNotes: "Incluir atividade prática com recortes de papéis e quiz em grupo no final.",
  },
  {
    id: "hist-rev",
    title: "História: A Revolução Industrial e os Impactos Sociais",
    subject: "História",
    gradeLevel: "Ensino Fundamental II - 8º Ano A",
    duration: "1 aula - 50 minutos",
    topic: "Transformações no mundo do trabalho, urbanização e surgimento das fábricas na Inglaterra",
    methodology: "Estudo de Caso e Análise Crítica",
    bnccCompetencies: "EF08HI03, EF08HI04",
    customNotes: "Utilizar imagens históricas de época e trechos de relatos de operários para debate.",
  },
  {
    id: "port-arg",
    title: "Língua Portuguesa: Produção de Texto Argumentativo",
    subject: "Português",
    gradeLevel: "Ensino Médio - 2º Ano A",
    duration: "2 aulas - 100 minutos",
    topic: "Tese, argumentos de autoridade e proposta de intervenção na redação estilo ENEM",
    methodology: "Instrução por Pares (Peer Instruction)",
    bnccCompetencies: "EM13LP05, EM13LP12",
    customNotes: "Realizar avaliação por pares (revisão mútua entre os alunos) antes do texto final.",
  },
  {
    id: "cie-eco",
    title: "Ciências: Ecossistemas e Biodiversidade Local",
    subject: "Ciências",
    gradeLevel: "Ensino Fundamental II - 6º Ano B",
    duration: "1 aula - 50 minutos",
    topic: "Cadeia alimentar, produtores, consumidores e a preservação do bioma brasileiro",
    methodology: "Metodologia STEAM / Mão na Massa",
    bnccCompetencies: "EF05CI02, EF05CI03",
    customNotes: "Pedir que os alunos tragam folhas ou desenhos de animais de sua região.",
  },
];
