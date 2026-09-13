// BANCO DE DADOS DE HABILIDADES OFICIAL
// Texto canônico obrigatório das habilidades fornecidas.

export interface OfficialSkillItem {
  code: string;
  description: string;
  verb: string;
  content: string;
  context: string;
  subject: string;
  grade: string;
}

export const OFFICIAL_SKILLS_DATABASE: Record<string, OfficialSkillItem> = {
  "EF06AR24": {
    code: "EF06AR24",
    description: "Reconhecer, Apreciar e Investigar artistas, grupos e coletivos cênicos de circo -teatro(teatrocircense e circo paulistas, brasileiros e estrangeiros de diferentes épocas, investigando os modos de criação, produção, divulgação, circulação e organização da atuação profissional.",
    verb: "Reconhecer, Apreciar e Investigar",
    content: "artistas, grupos e coletivos cênicos de circo-teatro (teatro circense e circo paulistas, brasileiros e estrangeiros de diferentes épocas)",
    context: "investigando os modos de criação, produção, divulgação, circulação e organização da atuação profissional",
    subject: "Arte",
    grade: "6º ano"
  },
  "EF06AR25": {
    code: "EF06AR25",
    description: "Investigar, Identificar, Analisar e Aprimorar a comédia e a farsa como gêneros teatrais e a relação entre as linguagens teatral e circense em diferentes tempos e espaços aprimorando a capacidade de apreciação estética teatral.",
    verb: "Investigar, Identificar, Analisar e Aprimorar",
    content: "a comédia e a farsa como gêneros teatrais e a relação entre as linguagens teatral e circense em diferentes tempos e espaços",
    context: "aprimorando a capacidade de apreciação estética teatral",
    subject: "Arte",
    grade: "6º ano"
  },
  "EF06AR26": {
    code: "EF06AR26",
    description: "Explorar e Reconhecer diferentes elementos envolvidos na composição de acontecimentos cênicos da comédia e da farsa, do circo teatro (teatro circense e do circo (figurinos, adereços, maquiagem/visagismo, cenário, iluminação e sonoplastia e reconhecer seus vocabulários",
    verb: "Explorar e Reconhecer",
    content: "diferentes elementos envolvidos na composição de acontecimentos cênicos da comédia e da farsa, do circo-teatro (teatro circense) e do circo (figurinos, adereços, maquiagem/visagismo, cenário, iluminação e sonoplastia)",
    context: "reconhecendo seus vocabulários",
    subject: "Arte",
    grade: "6º ano"
  },
  "EF06AR28": {
    code: "EF06AR28",
    description: "Investigar,  Experimentar e Compreender diferentes funções teatrais (ator, figurinista, aderecista e maquiador/visagista etc. e compreender a relação entre elas nos processos de criação de personagem.",
    verb: "Investigar, Experimentar e Compreender",
    content: "diferentes funções teatrais (ator, figurinista, aderecista e maquiador/visagista etc.)",
    context: "compreendendo a relação entre elas nos processos de criação de personagem",
    subject: "Arte",
    grade: "6º ano"
  },
  "EF06CI06": {
    code: "EF06CI06",
    description: "Concluir com base na análise de ilustra - ções e ou modelos físicos ou digitais, que os orga - nismos são um complexo arranjo de sistemas com diferentes níveis de organização.",
    verb: "Concluir",
    content: "que os organismos são um complexo arranjo de sistemas com diferentes níveis de organização",
    context: "com base na análise de ilustrações e/ou modelos físicos ou digitais",
    subject: "Ciências",
    grade: "6º ano"
  },
  "EF06CI07": {
    code: "EF06CI07",
    description: "Justificar a importância do corpo humano e caracterizar a organização dos sistemas digestório, respiratório e circulatório, como integradores de suas funções, com base no estudo do metabolismo de nutrientes.",
    verb: "Justificar e Caracterizar",
    content: "a importância do corpo humano e a organização dos sistemas digestório, respiratório e circulatório, como integradores de suas funções",
    context: "com base no estudo do metabolismo de nutrientes",
    subject: "Ciências",
    grade: "6º ano"
  },
  "EF06CI08": {
    code: "EF06CI08",
    description: "Explicar a importância da caderneta de vacinação nos ciclos da vida e a imunização por vacinas, bem como o papel da proteção coletiva (imunidade de rebanho) na prevenção de doenças transmissíveis e na promoção da saúde.",
    verb: "Explicar",
    content: "a importância da caderneta de vacinação nos ciclos da vida, a imunização por vacinas e o papel da proteção coletiva (imunidade de rebanho)",
    context: "na prevenção de doenças transmissíveis e na promoção da saúde",
    subject: "Ciências",
    grade: "6º ano"
  },
  "EF06CI09": {
    code: "EF06CI09",
    description: "Discutir a ocorrência de distúrbios nutricionais (como obesidade, desnutrição, etc.) entre crianças e jovens, associando-os a fatores alimentares e socioeconômicos, e formular propostas para uma alimentação saudável.",
    verb: "Discutir e Formular",
    content: "a ocorrência de distúrbios nutricionais (como obesidade, desnutrição, etc.) entre crianças e jovens e propostas para uma alimentação saudável",
    context: "associando-os a fatores alimentares e socioeconômicos",
    subject: "Ciências",
    grade: "6º ano"
  },
  "EF06CI10": {
    code: "EF06CI10",
    description: "Explicar a importância da higiene e do saneamento básico para a prevenção de doenças e promoção da saúde pública, com base em evidências científicas e históricas sobre o tema e em dados epidemiológicos.",
    verb: "Explicar",
    content: "a importância da higiene e do saneamento básico para a prevenção de doenças e promoção da saúde pública",
    context: "com base em evidências científicas e históricas sobre o tema e em dados epidemiológicos",
    subject: "Ciências",
    grade: "6º ano"
  },
  "EF06CI11": {
    code: "EF06CI11",
    description: "Identificar as principais fontes de energia e as formas de transformação energética envolvidas na produção de eletricidade, nas usinas e em aparelhos de uso cotidiano, discutindo os impactos socioambientais associados.",
    verb: "Identificar e Discutir",
    content: "as principais fontes de energia e as formas de transformação energética envolvidas na produção de eletricidade, nas usinas e em aparelhos de uso cotidiano",
    context: "discutindo os impactos socioambientais associados",
    subject: "Ciências",
    grade: "6º ano"
  },
  "EF06CI13": {
    code: "EF06CI13",
    description: "Selecionar argumentos e evidências sobre a importância da preservação da biodiversidade e dos ecossistemas locais, bem como propor ações para a conservação e uso sustentável dos recursos naturais.",
    verb: "Selecionar e Propor",
    content: "argumentos e evidências sobre a importância da preservação da biodiversidade e dos ecossistemas locais, e ações para a conservação",
    context: "para o uso sustentável dos recursos naturais",
    subject: "Ciências",
    grade: "6º ano"
  },
  "EF06HI01": {
    code: "EF06HI01",
    description: "Identificar diferentes formas de registro da história (fontes visuais, escritas, orais, materiais), compreendendo que elas expressam visões de diferentes grupos humanos em diferentes tempos e espaços.",
    verb: "Identificar",
    content: "diferentes formas de registro da história (fontes visuais, escritas, orais, materiais)",
    context: "compreendendo que elas expressam visões de diferentes grupos humanos em diferentes tempos e espaços",
    subject: "História",
    grade: "6º ano"
  },
  "EF06HI02": {
    code: "EF06HI02",
    description: "Identificar a gênese da produção da história e a importância de questionar a origem e a autoria de narrativas, discursos e fontes históricas.",
    verb: "Identificar",
    content: "a gênese da produção da história e a importância de questionar a origem e a autoria de narrativas, discursos e fontes históricas",
    context: "na análise crítica da construção do conhecimento histórico",
    subject: "História",
    grade: "6º ano"
  },
  "EF06HI03": {
    code: "EF06HI03",
    description: "Identificar as hipóteses científicas sobre o surgimento da espécie humana e sua dispersão pelo planeta, a partir do estudo de fósseis, vestígios materiais e artefatos.",
    verb: "Identificar",
    content: "as hipóteses científicas sobre o surgimento da espécie humana e sua dispersão pelo planeta",
    context: "a partir do estudo de fósseis, vestígios materiais e artefatos",
    subject: "História",
    grade: "6º ano"
  },
  "EF06HI04": {
    code: "EF06HI04",
    description: "Conhecer e analisar teorias científicas e mitos sobre o surgimento da espécie humana, compreendendo as diferentes visões de mundo presentes nas sociedades tradicionais e contemporâneas.",
    verb: "Conhecer e Analisar",
    content: "teorias científicas e mitos sobre o surgimento da espécie humana",
    context: "compreendendo as diferentes visões de mundo presentes nas sociedades tradicionais e contemporâneas",
    subject: "História",
    grade: "6º ano"
  },
  "EF06HI05": {
    code: "EF06HI05",
    description: "Descrever as origens e as características das primeiras civilizações e sociedades da Antiguidade (Egito, Mesopotâmia, China, Índia, Fenícia, etc.), destacando as semelhanças e diferenças entre elas.",
    verb: "Descrever",
    content: "as origens e as características das primeiras civilizações e sociedades da Antiguidade (Egito, Mesopotâmia, China, Índia, Fenícia, etc.)",
    context: "destacando as semelhanças e diferenças entre elas",
    subject: "História",
    grade: "6º ano"
  },
  "EF06HI06": {
    code: "EF06HI06",
    description: "Analisar o papel da religião, da escrita, das leis e do Estado nas sociedades da Antiguidade, compreendendo os processos de dominação e organização social da época.",
    verb: "Analisar",
    content: "o papel da religião, da escrita, das leis e do Estado nas sociedades da Antiguidade",
    context: "compreendendo os processos de dominação e organização social da época",
    subject: "História",
    grade: "6º ano"
  },
  "EF06HI07": {
    code: "EF06HI07",
    description: "Identificar as características das sociedades da Antiguidade Clássica (Grécia e Roma), analisando suas estruturas políticas, econômicas, sociais e culturais, bem como o legado deixado para o mundo ocidental.",
    verb: "Identificar e Analisar",
    content: "as características das sociedades da Antiguidade Clássica (Grécia e Roma), suas estruturas políticas, econômicas, sociais e culturais",
    context: "bem como o legado deixado para o mundo ocidental",
    subject: "História",
    grade: "6º ano"
  },
  "EF06HI08": {
    code: "EF06HI08",
    description: "Descrever o processo de formação da cidadania e da democracia na Grécia Antiga (especialmente em Atenas), identificando limites, exclusões e permanências em relação aos dias atuais.",
    verb: "Descrever e Identificar",
    content: "o processo de formação da cidadania e da democracia na Grécia Antiga (especialmente em Atenas)",
    context: "identificando limites, exclusões e permanências em relação aos dias atuais",
    subject: "História",
    grade: "6º ano"
  },
  "EF06HI09": {
    code: "EF06HI09",
    description: "Descrever o processo de expansão territorial e militar de Roma, analisando as transformações políticas, econômicas e sociais decorrentes da formação do Império Romano.",
    verb: "Descrever e Analisar",
    content: "o processo de expansão territorial e militar de Roma e as transformações políticas, econômicas e sociais",
    context: "decorrentes da formação do Império Romano",
    subject: "História",
    grade: "6º ano"
  },
  "EF06HI11": {
    code: "EF06HI11",
    description: "Caracterizar o processo de consolidação do cristianismo no Império Romano, compreendendo as transformações culturais e políticas associadas a esse fenômeno histórico.",
    verb: "Caracterizar",
    content: "o processo de consolidação do cristianismo no Império Romano",
    context: "compreendendo as transformações culturais e políticas associadas a esse fenômeno histórico",
    subject: "História",
    grade: "6º ano"
  },
  "EF06HI12": {
    code: "EF06HI12",
    description: "Descrever o processo de crise e fragmentação do Império Romano do Ocidente, identificando as bases da transição para a sociedade feudal na Europa medieval.",
    verb: "Descrever e Identificar",
    content: "o processo de crise e fragmentação do Império Romano do Ocidente",
    context: "identificando as bases da transição para a sociedade feudal na Europa medieval",
    subject: "História",
    grade: "6º ano"
  },
  "EF06HI13": {
    code: "EF06HI13",
    description: "Analisar a organização política, econômica e social do feudalismo na Idade Média europeia, compreendendo as relações de suserania, vassalagem, servidão e o papel da Igreja Católica.",
    verb: "Analisar",
    content: "a organização política, econômica e social do feudalismo na Idade Média europeia (suserania, vassalagem, servidão e Igreja Católica)",
    context: "compreendendo as dinâmicas sociais da Europa medieval",
    subject: "História",
    grade: "6º ano"
  },
  "EF06HI14": {
    code: "EF06HI14",
    description: "Identificar características das culturas pré-colombianas (maias, astecas e incas), analisando suas organizações sociais, econômicas, políticas e religiosas antes da chegada dos europeus.",
    verb: "Identificar e Analisar",
    content: "características das culturas pré-colombianas (maias, astecas e incas), suas organizações sociais, econômicas, políticas e religiosas",
    context: "antes da chegada dos europeus",
    subject: "História",
    grade: "6º ano"
  },
  "EF06LP01": {
    code: "EF06LP01",
    description: "Compreender e analisar textos orais, escritos e multissemióticos, identificando seus propósitos comunicativos, os gêneros em que se realizam e a adequação à situação de comunicação.",
    verb: "Compreender, Analisar e Identificar",
    content: "textos orais, escritos e multissemióticos, seus propósitos comunicativos e os gêneros em que se realizam",
    context: "considerando a adequação à situação de comunicação",
    subject: "Língua Portuguesa",
    grade: "6º ano"
  },
  "EF06LP02": {
    code: "EF06LP02",
    description: "Analisar e comparar textos de diferentes gêneros, reconhecendo temas, pontos de vista, argumentos e estratégias argumentativas utilizadas pelos autores.",
    verb: "Analisar, Comparar e Reconhecer",
    content: "textos de diferentes gêneros, seus temas, pontos de vista, argumentos e estratégias argumentativas",
    context: "identificando as estratégias utilizadas pelos autores",
    subject: "Língua Portuguesa",
    grade: "6º ano"
  },
  "EF06LP03": {
    code: "EF06LP03",
    description: "Analisar os efeitos de sentido decorrentes da escolha de palavras, expressões, recursos gráficos, pontuação e figuras de linguagem em textos variados.",
    verb: "Analisar",
    content: "os efeitos de sentido decorrentes da escolha de palavras, expressões, recursos gráficos, pontuação e figuras de linguagem",
    context: "em textos variados",
    subject: "Língua Portuguesa",
    grade: "6º ano"
  },
  "EF06LP04": {
    code: "EF06LP04",
    description: "Analisar e utilizar os mecanismos de coesão textual (anáforas, catáforas, conectivos, substituições lexicais), garantindo a fluidez e a clareza na construção de textos.",
    verb: "Analisar e Utilizar",
    content: "os mecanismos de coesão textual (anáforas, catáforas, conectivos, substituições lexicais)",
    context: "garantindo a fluidez e a clareza na construção de textos",
    subject: "Língua Portuguesa",
    grade: "6º ano"
  },
  "EF06LP05": {
    code: "EF06LP05",
    description: "Identificar a estrutura composicional e o estilo de gêneros textuais narrativos, descritivos, argumentativos e expositivos, aplicando-os em produções textuais próprias.",
    verb: "Identificar e Aplicar",
    content: "a estrutura composicional e o estilo de gêneros textuais narrativos, descritivos, argumentativos e expositivos",
    context: "aplicando-os em produções textuais próprias",
    subject: "Língua Portuguesa",
    grade: "6º ano"
  },
  "EF06LP06": {
    code: "EF06LP06",
    description: "Analisar a norma-padrão da língua em textos de diferentes gêneros, distinguindo-a das variedades linguísticas regionais, sociais e informais, valorizando a diversidade linguística.",
    verb: "Analisar e Distinguir",
    content: "a norma-padrão da língua em textos de diferentes gêneros em relação às variedades linguísticas regionais, sociais e informais",
    context: "valorizando a diversidade linguística",
    subject: "Língua Portuguesa",
    grade: "6º ano"
  },
  "EF06LP07": {
    code: "EF06LP07",
    description: "Identificar e analisar o uso de recursos fonológicos, morfossintáticos e semânticos na construção de sentidos em textos poéticos e literários.",
    verb: "Identificar e Analisar",
    content: "o uso de recursos fonológicos, morfossintáticos e semânticos",
    context: "na construção de sentidos em textos poéticos e literários",
    subject: "Língua Portuguesa",
    grade: "6º ano"
  },
  "EF06LP08": {
    code: "EF06LP08",
    description: "Planejar, produzir, revisar e reescrever textos de diferentes gêneros da esfera jornalística, publicitária, literária e do cotidiano, considerando o público-alvo e o canal de circulação.",
    verb: "Planejar, Produzir, Revisar e Reescrever",
    content: "textos de diferentes gêneros da esfera jornalística, publicitária, literária e do cotidiano",
    context: "considerando o público-alvo e o canal de circulação",
    subject: "Língua Portuguesa",
    grade: "6º ano"
  },
  "EF06MA01": {
    code: "EF06MA01",
    description: "Comparar, ordenar, ler e escrever números naturais e racionais cuja representação decimal seja finita, fazendo uso da reta numérica e da compreensão do valor posicional.",
    verb: "Comparar, Ordenar, Ler e Escrever",
    content: "números naturais e racionais cuja representação decimal seja finita",
    context: "fazendo uso da reta numérica e da compreensão do valor posicional",
    subject: "Matemática",
    grade: "6º ano"
  },
  "EF06MA02": {
    code: "EF06MA02",
    description: "Reconhecer o sistema de numeração decimal, compreendendo as características do sistema (base dez, valor posicional) e realizando operações fundamentais com números naturais.",
    verb: "Reconhecer e Realizar",
    content: "o sistema de numeração decimal (base dez, valor posicional) e operações fundamentais com números naturais",
    context: "compreendendo as características do sistema e aplicando-as no cálculo",
    subject: "Matemática",
    grade: "6º ano"
  },
  "EF06MA03": {
    code: "EF06MA03",
    description: "Resolver e elaborar problemas que envolvam cálculos com números naturais, envolvendo as operações de adição, subtração, multiplicação, divisão e potenciação, com e sem uso de calculadora.",
    verb: "Resolver e Elaborar",
    content: "problemas com números naturais envolvendo as operações de adição, subtração, multiplicação, divisão e potenciação",
    context: "com e sem uso de calculadora",
    subject: "Matemática",
    grade: "6º ano"
  },
  "EF06MA04": {
    code: "EF06MA04",
    description: "Resolver e elaborar problemas que envolvam as operações com números racionais positivos na representação fracionária e decimal, utilizando estratégias pessoais e algoritmos.",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo operações com números racionais positivos na representação fracionária e decimal",
    context: "utilizando estratégias pessoais e algoritmos",
    subject: "Matemática",
    grade: "6º ano"
  },
  "EF06MA05": {
    code: "EF06MA05",
    description: "Resolver e elaborar problemas que envolvam porcentagens, com base na compreensão da ideia de razão e proporção, em contextos financeiros, cotidianos e sociais.",
    verb: "Resolver e Elaborar",
    content: "problemas que envolvam porcentagens, razão e proporção",
    context: "em contextos financeiros, cotidianos e sociais",
    subject: "Matemática",
    grade: "6º ano"
  },
  "EF06MA06": {
    code: "EF06MA06",
    description: "Resolver e elaborar problemas que envolvam a noção de grandezas diretamente e inversamente proporcionais, utilizando estratégias variadas, como a regra de três simples.",
    verb: "Resolver e Elaborar",
    content: "problemas que envolvam a noção de grandezas diretamente e inversamente proporcionais",
    context: "utilizando estratégias variadas, como a regra de três simples",
    subject: "Matemática",
    grade: "6º ano"
  },
  "EF06MA07": {
    code: "EF06MA07",
    description: "Compreender, comparar e ordenar frações associadas às ideias de partes de wholes, quociente e razão, identificando frações equivalentes e frações irredutíveis.",
    verb: "Compreender, Comparar e Ordenar",
    content: "frações associadas às ideias de partes de inteiros, quociente e razão, frações equivalentes e frações irredutíveis",
    context: "identificando representações equivalentes",
    subject: "Matemática",
    grade: "6º ano"
  },
  "EF06MA08": {
    code: "EF06MA08",
    description: "Resolver e elaborar problemas de contagem utilizando o princípio multiplicativo, como a determinação do número de agrupamentos possíveis sem a necessidade de listagem exata.",
    verb: "Resolver e Elaborar",
    content: "problemas de contagem e determinação do número de agrupamentos possíveis",
    context: "utilizando o princípio multiplicativo sem a necessidade de listagem exata",
    subject: "Matemática",
    grade: "6º ano"
  },
  "EF06MA09": {
    code: "EF06MA09",
    description: "Resolver e elaborar problemas simples de probabilidade em espaços amostrais finitos, utilizando a razão entre o número de resultados favoráveis e o total de resultados possíveis.",
    verb: "Resolver e Elaborar",
    content: "problemas simples de probabilidade em espaços amostrais finitos",
    context: "utilizando a razão entre o número de resultados favoráveis e o total de resultados possíveis",
    subject: "Matemática",
    grade: "6º ano"
  },
  "EF06MA11": {
    code: "EF06MA11",
    description: "Resolver e elaborar problemas com números racionais positivos envolvendo a conversão entre representações fracionárias e decimais, bem como a localização na reta numérica.",
    verb: "Resolver e Elaborar",
    content: "problemas com números racionais positivos envolvendo a conversão entre representações fracionárias e decimais",
    context: "bem como a localização na reta numérica",
    subject: "Matemática",
    grade: "6º ano"
  },
  "EF06MA12": {
    code: "EF06MA12",
    description: "Resolver e elaborar problemas que envolvam medidas de grandezas como comprimento, massa, capacidade, tempo, área e volume, utilizando unidades adequadas e conversões.",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo medidas de grandezas como comprimento, massa, capacidade, tempo, área e volume",
    context: "utilizando unidades adequadas e conversões",
    subject: "Matemática",
    grade: "6º ano"
  },
  "EF06MA13": {
    code: "EF06MA13",
    description: "Resolver e elaborar problemas que envolvam o cálculo da área de figuras planas (retângulos, triângulos e paralelogramos), decompondo-as ou compondo-as em figuras mais simples.",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo o cálculo da área de figuras planas (retângulos, triângulos e paralelogramos)",
    context: "decompondo-as ou compondo-as em figuras mais simples",
    subject: "Matemática",
    grade: "6º ano"
  },
  "EF06MA14": {
    code: "EF06MA14",
    description: "Resolver e elaborar problemas que envolvam o cálculo do perímetro de figuras planas, compreendendo a relação entre perímetro e área em diferentes contextos geométricos.",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo o cálculo do perímetro de figuras planas",
    context: "compreendendo a relação entre perímetro e área em diferentes contextos geométricos",
    subject: "Matemática",
    grade: "6º ano"
  },
  "EF06MA15": {
    code: "EF06MA15",
    description: "Resolver e elaborar problemas que envolvam o cálculo do volume de blocos retangulares, utilizando unidades de medida padronizadas e compreendendo a ideia de capacidade.",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo o cálculo do volume de blocos retangulares",
    context: "utilizando unidades de medida padronizadas e compreendendo a ideia de capacidade",
    subject: "Matemática",
    grade: "6º ano"
  },
  "EF06MA16": {
    code: "EF06MA16",
    description: "Associar pares ordenados de números a pontos no plano cartesiano do 1º quadrante, compreendendo a localização e o deslocamento de objetos no plano.",
    verb: "Associar",
    content: "pares ordenados de números a pontos no plano cartesiano do 1º quadrante",
    context: "compreendendo a localização e o deslocamento de objetos no plano",
    subject: "Matemática",
    grade: "6º ano"
  },
  "EF06MA17": {
    code: "EF06MA17",
    description: "Reconhecer, nomear e comparar polígonos, classificando-os quanto ao número de lados, às medidas de ângulos e à simetria, em malhas quadriculadas ou softwares de geometria.",
    verb: "Reconhecer, Nomear e Comparar",
    content: "polígonos, classificando-os quanto ao número de lados, às medidas de ângulos e à simetria",
    context: "em malhas quadriculadas ou softwares de geometria",
    subject: "Matemática",
    grade: "6º ano"
  },
  "EF06MA18": {
    code: "EF06MA18",
    description: "Reconhecer e construir figuras geométricas espaciais (prismas, pirâmides, cilindros, cones e esferas), identificando suas planificações, faces, arestas e vértices.",
    verb: "Reconhecer e Construir",
    content: "figuras geométricas espaciais (prismas, pirâmides, cilindros, cones e esferas), suas planificações, faces, arestas e vértices",
    context: "identificando elementos estruturais geométricos",
    subject: "Matemática",
    grade: "6º ano"
  },
  "EF06MA19": {
    code: "EF06MA19",
    description: "Resolver e elaborar problemas que envolvam a interpretação e a construção de gráficos de colunas, de barras, de setores e de linhas, analisando tendências e dados estatísticos.",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo a interpretação e a construção de gráficos de colunas, de barras, de setores e de linhas",
    context: "analisando tendências e dados estatísticos",
    subject: "Matemática",
    grade: "6º ano"
  },
  "EF06MA20": {
    code: "EF06MA20",
    description: "Identificar a média aritmética como indicador estatístico de tendência central, calculando-a em conjuntos de dados discretos apresentados em tabelas ou gráficos.",
    verb: "Identificar e Calcular",
    content: "a média aritmética como indicador estatístico de tendência central",
    context: "em conjuntos de dados discretos apresentados em tabelas ou gráficos",
    subject: "Matemática",
    grade: "6º ano"
  },
  "EF06MA21": {
    code: "EF06MA21",
    description: "Analisar e interpretar dados estatísticos apresentados em diferentes tipos de gráficos e tabelas veiculados em mídias variadas, avaliando a veracidade e a clareza das informações.",
    verb: "Analisar, Interpretar e Avaliar",
    content: "dados estatísticos apresentados em diferentes tipos de gráficos e tabelas veiculados em mídias variadas",
    context: "avaliando a veracidade e a clareza das informações",
    subject: "Matemática",
    grade: "6º ano"
  },
  "EF06MA22": {
    code: "EF06MA22",
    description: "Resolver e elaborar problemas de contagem e probabilidade utilizando diagramas de árvore, tabelas e o princípio fundamental da contagem.",
    verb: "Resolver e Elaborar",
    content: "problemas de contagem e probabilidade",
    context: "utilizando diagramas de árvore, tabelas e o princípio fundamental da contagem",
    subject: "Matemática",
    grade: "6º ano"
  },
  "EF06MA23": {
    code: "EF06MA23",
    description: "Resolver e elaborar problemas que envolvam a construção e interpretação de gráficos cartesianos para representar relações de dependência entre grandezas.",
    verb: "Resolver e Elaborar",
    content: "problemas que envolvam a construção e interpretação de gráficos cartesianos",
    context: "para representar relações de dependência entre grandezas",
    subject: "Matemática",
    grade: "6º ano"
  },
  "EF07AR01": {
    code: "EF07AR01",
    description: "Explorar e analisar elementos constitutivos das artes visuais (ponto, linha, cor, forma, espaço, movimento) em obras de diferentes artistas, épocas e culturas.",
    verb: "Explorar e Analisar",
    content: "elementos constitutivos das artes visuais (ponto, linha, cor, forma, espaço, movimento)",
    context: "em obras de diferentes artistas, épocas e culturas",
    subject: "Arte",
    grade: "7º ano"
  },
  "EF07AR02": {
    code: "EF07AR02",
    description: "Analisar e valorizar o patrimônio artístico nacional e internacional, material e imaterial, compreendendo sua importância para a preservação da identidade cultural.",
    verb: "Analisar e Valorizar",
    content: "o patrimônio artístico nacional e internacional, material e imaterial",
    context: "compreendendo sua importância para a preservação da identidade cultural",
    subject: "Arte",
    grade: "7º ano"
  },
  "EF07AR03": {
    code: "EF07AR03",
    description: "Analisar e experimentar diferentes processos de criação em artes visuais (desenho, pintura, colagem, gravura, modelagem), utilizando suportes, materiais e técnicas variados.",
    verb: "Analisar e Experimentar",
    content: "diferentes processos de criação em artes visuais (desenho, pintura, colagem, gravura, modelagem)",
    context: "utilizando suportes, materiais e técnicas variados",
    subject: "Arte",
    grade: "7º ano"
  },
  "EF07AR04": {
    code: "EF07AR04",
    description: "Analisar criticamente produções artísticas e visuais do cotidiano e da mídia, identificando estereótipos, mensagens implícitas e valores culturais e estéticos.",
    verb: "Analisar e Identificar",
    content: "produções artísticas e visuais do cotidiano e da mídia, estereótipos, mensagens implícitas e valores culturais e estéticos",
    context: "de forma crítica em contextos socioculturais",
    subject: "Arte",
    grade: "7º ano"
  },
  "EF07AR05": {
    code: "EF07AR05",
    description: "Explorar e experimentar tecnologias digitais e mídias interativas na criação e difusão de obras visuais e na experimentação de linguagens artísticas contemporâneas.",
    verb: "Explorar e Experimentar",
    content: "tecnologias digitais e mídias interativas",
    context: "na criação e difusão de obras visuais e na experimentação de linguagens artísticas contemporâneas",
    subject: "Arte",
    grade: "7º ano"
  },
  "EF07AR06": {
    code: "EF07AR06",
    description: "Analisar e experimentar a relação entre som e movimento na dança, compreendendo a expressividade do corpo em coreografias de diferentes estilos e matrizes culturais.",
    verb: "Analisar e Experimentar",
    content: "a relação entre som e movimento na dança e a expressividade do corpo",
    context: "em coreografias de diferentes estilos e matrizes culturais",
    subject: "Arte",
    grade: "7º ano"
  },
  "EF07AR08": {
    code: "EF07AR08",
    description: "Experimentar e improvisar movimentos corporais na dança, explorando a criatividade, a coordenação motora, o ritmo e a expressividade individual e coletiva.",
    verb: "Experimentar e Improvisar",
    content: "movimentos corporais na dança, explorando criatividade, coordenação motora e ritmo",
    context: "na expressividade individual e coletiva",
    subject: "Arte",
    grade: "7º ano"
  },
  "EF07AR09": {
    code: "EF07AR09",
    description: "Analisar criticamente espetáculos de dança de diferentes gêneros e épocas, reconhecendo os contextos sociais, históricos e estéticos de sua produção.",
    verb: "Analisar e Reconhecer",
    content: "espetáculos de dança de diferentes gêneros e épocas",
    context: "reconhecendo os contextos sociais, históricos e estéticos de sua produção",
    subject: "Arte",
    grade: "7º ano"
  },
  "EF07AR10": {
    code: "EF07AR10",
    description: "Analisar e experimentar diferentes gêneros musicais, identificando instrumentos, timbres, texturas, formas e estilos característicos de várias culturas.",
    verb: "Analisar, Experimentar e Identificar",
    content: "diferentes gêneros musicais, instrumentos, timbres, texturas, formas e estilos",
    context: "característicos de várias culturas",
    subject: "Arte",
    grade: "7º ano"
  },
  "EF07AR11": {
    code: "EF07AR11",
    description: "Experimentar e criar arranjos musicais utilizando instrumentos convencionais, não convencionais e recursos tecnológicos, valorizando a produção coletiva.",
    verb: "Experimentar e Criar",
    content: "arranjos musicais utilizando instrumentos convencionais, não convencionais e recursos tecnológicos",
    context: "valorizando a produção coletiva",
    subject: "Arte",
    grade: "7º ano"
  },
  "EF07AR12": {
    code: "EF07AR12",
    description: "Analisar criticamente produções musicais veiculadas em diferentes meios de comunicação, compreendendo os contextos de consumo e circulação da música.",
    verb: "Analisar",
    content: "produções musicais veiculadas em diferentes meios de comunicação",
    context: "compreendendo os contextos de consumo e circulação da música",
    subject: "Arte",
    grade: "7º ano"
  },
  "EF07AR13": {
    code: "EF07AR13",
    description: "Investigar e analisar a história e as manifestações do teatro em diferentes contextos e culturas, reconhecendo a diversidade das linguagens cênicas.",
    verb: "Investigar, Analisar e Reconhecer",
    content: "a história e as manifestações do teatro em diferentes contextos e culturas",
    context: "reconhecendo a diversidade das linguagens cênicas",
    subject: "Arte",
    grade: "7º ano"
  },
  "EF07AR14": {
    code: "EF07AR14",
    description: "Experimentar a criação e a improvisação cênica por meio de jogos teatrais, dramatizações e construção de personagens em situações variadas.",
    verb: "Experimentar",
    content: "a criação e a improvisação cênica por meio de jogos teatrais, dramatizações e construção de personagens",
    context: "em situações variadas",
    subject: "Arte",
    grade: "7º ano"
  },
  "EF07AR15": {
    code: "EF07AR15",
    description: "Analisar criticamente espetáculos teatrais, compreendendo os elementos da encenação (atuação, direção, figurino, cenário, iluminação e sonoplastia).",
    verb: "Analisar",
    content: "espetáculos teatrais e os elementos da encenação (atuação, direção, figurino, cenário, iluminação e sonoplastia)",
    context: "compreendendo criticamente a composição da cena teatral",
    subject: "Arte",
    grade: "7º ano"
  },
  "EF07CI01": {
    code: "EF07CI01",
    description: "Discutir a ocorrência de desequilíbrios ecológicos e antrópicos na biodiversidade local e global, analisando as causas, as consequências e as medidas de mitigação ou recuperação.",
    verb: "Discutir e Analisar",
    content: "a ocorrência de desequilíbrios ecológicos e antrópicos na biodiversidade local e global, causas e consequências",
    context: "analisando medidas de mitigação ou recuperação",
    subject: "Ciências",
    grade: "7º ano"
  },
  "EF07CI02": {
    code: "EF07CI02",
    description: "Diferenciar espécies nativas de espécies exóticas invasoras, analisando os impactos que essas últimas provocam nos ecossistemas e na economia regional.",
    verb: "Diferenciar e Analisar",
    content: "espécies nativas de espécies exóticas invasoras e os impactos nos ecossistemas e economia regional",
    context: "na análise do equilíbrio ambiental",
    subject: "Ciências",
    grade: "7º ano"
  },
  "EF07CI03": {
    code: "EF07CI03",
    description: "Avaliar o papel do fluxo de energia e da ciclagem de matéria nos ecossistemas, compreendendo a interdependência entre os seres vivos e os fatores abióticos.",
    verb: "Avaliar e Compreender",
    content: "o papel do fluxo de energia e da ciclagem de matéria nos ecossistemas",
    context: "compreendendo a interdependência entre os seres vivos e os fatores abióticos",
    subject: "Ciências",
    grade: "7º ano"
  },
  "EF07CI04": {
    code: "EF07CI04",
    description: "Analisar e interpretar dados sobre o consumo de água e energia em residências e escolas, propondo estratégias e hábitos voltados para a sustentabilidade.",
    verb: "Analisar, Interpretar e Propor",
    content: "dados sobre o consumo de água e energia em residências e escolas",
    context: "propondo estratégias e hábitos voltados para a sustentabilidade",
    subject: "Ciências",
    grade: "7º ano"
  },
  "EF07CI05": {
    code: "EF07CI05",
    description: "Discutir a importância da conservação dos recursos hídricos, analisando o ciclo da água, o tratamento de esgoto e a poluição dos mananciais no Brasil e no mundo.",
    verb: "Discutir e Analisar",
    content: "a importância da conservação dos recursos hídricos, o ciclo da água, o tratamento de esgoto e a poluição dos mananciais",
    context: "no Brasil e no mundo",
    subject: "Ciências",
    grade: "7º ano"
  },
  "EF07CI06": {
    code: "EF07CI06",
    description: "Discutir a importância da preservação das florestas e dos biomas brasileiros para a regulação do clima, o ciclo hidrológico e a manutenção da biodiversidade.",
    verb: "Discutir",
    content: "a importância da preservação das florestas e dos biomas brasileiros",
    context: "para a regulação do clima, o ciclo hidrológico e a manutenção da biodiversidade",
    subject: "Ciências",
    grade: "7º ano"
  },
  "EF07CI07": {
    code: "EF07CI07",
    description: "Caracterizar as principais camadas da atmosfera terrestre e discutir o papel do efeito serra e da camada de ozônio para a manutenção da vida na Terra.",
    verb: "Caracterizar e Discutir",
    content: "as principais camadas da atmosfera terrestre, o papel do efeito estufa e da camada de ozônio",
    context: "para a manutenção da vida na Terra",
    subject: "Ciências",
    grade: "7º ano"
  },
  "EF07CI08": {
    code: "EF07CI08",
    description: "Analisar a influência das atividades humanas na emissão de gases de efeito estufa e nas mudanças climáticas globais, discutindo medidas de mitigação.",
    verb: "Analisar e Discutir",
    content: "a influência das atividades humanas na emissão de gases de efeito estufa e nas mudanças climáticas globais",
    context: "discutindo medidas de mitigação",
    subject: "Ciências",
    grade: "7º ano"
  },
  "EF07CI09": {
    code: "EF07CI09",
    description: "Analisar a importância da Astronomia e das explorações espaciais para o avanço do conhecimento científico e tecnológico, bem como para o cotidiano da sociedade.",
    verb: "Analisar",
    content: "a importância da Astronomia e das explorações espaciais para o avanço científico e tecnológico",
    context: "bem como para o cotidiano da sociedade",
    subject: "Ciências",
    grade: "7º ano"
  },
  "EF07CI10": {
    code: "EF07CI10",
    description: "Descrever a estrutura da Terra (crosta, manto e núcleo), relacionando-a com a dinâmica das placas tectônicas, a ocorrência de terremotos e a formação de vulcões.",
    verb: "Descrever e Relacionar",
    content: "a estrutura da Terra (crosta, manto e núcleo) com a dinâmica das placas tectônicas",
    context: "relacionando à ocorrência de terremotos e à formação de vulcões",
    subject: "Ciências",
    grade: "7º ano"
  },
  "EF07CI11": {
    code: "EF07CI11",
    description: "Analisar e interpretar evidências científicas da deriva continental e da tectônica de placas, compreendendo a movimentação contínua da superfície terrestre.",
    verb: "Analisar e Interpretar",
    content: "evidências científicas da deriva continental e da tectônica de placas",
    context: "compreendendo a movimentação contínua da superfície terrestre",
    subject: "Ciências",
    grade: "7º ano"
  },
  "EF07CI12": {
    code: "EF07CI12",
    description: "Analisar as transformações que ocorrem nos materiais do dia a dia, distinguindo fenômenos físicos e químicos por meio de evidências experimentais.",
    verb: "Analisar e Distinguir",
    content: "as transformações nos materiais do dia a dia, diferenciando fenômenos físicos e químicos",
    context: "por meio de evidências experimentais",
    subject: "Ciências",
    grade: "7º ano"
  },
  "EF07CI13": {
    code: "EF07CI13",
    description: "Descrever o ciclo do carbono, do nitrogênio e da água na natureza, compreendendo a importância da manutenção desses ciclos para a vida no planeta.",
    verb: "Descrever e Compreender",
    content: "o ciclo do carbono, do nitrogênio e da água na natureza",
    context: "compreendendo a importância da manutenção desses ciclos para a vida no planeta",
    subject: "Ciências",
    grade: "7º ano"
  },
  "EF07CI14": {
    code: "EF07CI14",
    description: "Identificar e classificar diferentes tipos de combustíveis utilizados em meios de transporte e indústrias, discutindo impactos ambientais e eficiência energética.",
    verb: "Identificar, Classificar e Discutir",
    content: "diferentes tipos de combustíveis utilizados em meios de transporte e indústrias",
    context: "discutindo impactos ambientais e eficiência energética",
    subject: "Ciências",
    grade: "7º ano"
  },
  "EF07HI01": {
    code: "EF07HI01",
    description: "Explicar o processo de formação e consolidação dos estados nacionais modernos na Europa, com ênfase nas monarquias absolutas em Portugal, Espanha, França e Inglaterra.",
    verb: "Explicar",
    content: "o processo de formação e consolidação dos estados nacionais modernos na Europa",
    context: "com ênfase nas monarquias absolutas em Portugal, Espanha, França e Inglaterra",
    subject: "História",
    grade: "7º ano"
  },
  "EF07HI02": {
    code: "EF07HI02",
    description: "Analisar a política mercantilista adotada pelas monarquias europeias e sua relação com a exploração colonial na América e na África.",
    verb: "Analisar",
    content: "a política mercantilista adotada pelas monarquias europeias",
    context: "e sua relação com a exploração colonial na América e na África",
    subject: "História",
    grade: "7º ano"
  },
  "EF07HI03": {
    code: "EF07HI03",
    description: "Identificar as motivações e os desdobramentos das Grandes Navegações e dos descobrimentos marítimos dos séculos XV e XVI, destacando o pioneirismo ibérico.",
    verb: "Identificar",
    content: "as motivações e os desdobramentos das Grandes Navegações e dos descobrimentos marítimos dos séculos XV e XVI",
    context: "destacando o pioneirismo ibérico",
    subject: "História",
    grade: "7º ano"
  },
  "EF07HI04": {
    code: "EF07HI04",
    description: "Explicar os impactos da expansão marítima e colonial europeia sobre as populações nativas da América, com foco nas violências, extermínios e resistências.",
    verb: "Explicar",
    content: "os impactos da expansão marítima e colonial europeia sobre as populações nativas da América",
    context: "com foco nas violências, extermínios e resistências",
    subject: "História",
    grade: "7º ano"
  },
  "EF07HI05": {
    code: "EF07HI05",
    description: "Descrever o sistema de colonização portuguesa no Brasil (capitanias hereditárias, governos-gerais, economia açucareira e escravidão indígena e africana).",
    verb: "Descrever",
    content: "o sistema de colonização portuguesa no Brasil (capitanias hereditárias, governos-gerais, economia açucareira e escravidão)",
    context: "no contexto da formação socioeconômica colonial",
    subject: "História",
    grade: "7º ano"
  },
  "EF07HI06": {
    code: "EF07HI06",
    description: "Analisar a organização da sociedade colonial brasileira, destacando a economia do açúcar, o papel da Igreja, o trabalho escravo e as formas de resistência negra e indígena.",
    verb: "Analisar",
    content: "a organização da sociedade colonial brasileira (economia do açúcar, Igreja, escravidão)",
    context: "destacando as formas de resistência negra e indígena",
    subject: "História",
    grade: "7º ano"
  },
  "EF07HI07": {
    code: "EF07HI07",
    description: "Descrever a expansão territorial do Brasil colonial para o interior, analisando as expedições de bandeirantes, as missões jesuíticas e a pecuária no sertão.",
    verb: "Descrever e Analisar",
    content: "a expansão territorial do Brasil colonial para o interior (expedições bandeirantes, missões jesuíticas e pecuária)",
    context: "compreendendo a ocupação do sertão",
    subject: "História",
    grade: "7º ano"
  },
  "EF07HI08": {
    code: "EF07HI08",
    description: "Analisar o processo de descoberta e exploração do ouro nas regiões de Minas Gerais, Goiás e Mato Grosso, e suas consequências urbanas, econômicas e demográficas.",
    verb: "Analisar",
    content: "o processo de descoberta e exploração do ouro nas regiões de Minas Gerais, Goiás e Mato Grosso",
    context: "e suas consequências urbanas, econômicas e demográficas",
    subject: "História",
    grade: "7º ano"
  },
  "EF07HI09": {
    code: "EF07HI09",
    description: "Analisar as transformações econômicas, sociais e culturais decorrentes do ciclo do ouro no Brasil colonial, com ênfase no surgimento de cidades e do barroco mineiro.",
    verb: "Analisar",
    content: "as transformações econômicas, sociais e culturais decorrentes do ciclo do ouro no Brasil colonial",
    context: "com ênfase no surgimento de cidades e do barroco mineiro",
    subject: "História",
    grade: "7º ano"
  },
  "EF07HI10": {
    code: "EF07HI10",
    description: "Analisar as revoltas nativistas e emancipatórias no Brasil colonial (como a Guerra dos Emboabas, Revolta de Beckman, Inconfidência Mineira e Conjuntura Baiana).",
    verb: "Analisar",
    content: "as revoltas nativistas e emancipatórias no Brasil colonial (Guerra dos Emboabas, Revolta de Beckman, Inconfidência Mineira e Conjuração Baiana)",
    context: "compreendendo as tensões entre colônia e metrópole",
    subject: "História",
    grade: "7º ano"
  },
  "EF07HI11": {
    code: "EF07HI11",
    description: "Analisar os antecedentes e os desdobramentos da Inconfidência Mineira, contextualizando os ideais iluministas e a crise do sistema colonial português.",
    verb: "Analisar",
    content: "os antecedentes e os desdobramentos da Inconfidência Mineira",
    context: "contextualizando os ideais iluministas e a crise do sistema colonial português",
    subject: "História",
    grade: "7º ano"
  },
  "EF07HI12": {
    code: "EF07HI12",
    description: "Analisar as características do Iluminismo e sua influência nas revoluções burguesas, na independência dos Estados Unidos e nas ideias de liberdade e igualdade na Europa e América.",
    verb: "Analisar",
    content: "as características do Iluminismo e sua influência nas revoluções burguesas e independência dos Estados Unidos",
    context: "nas ideias de liberdade e igualdade na Europa e América",
    subject: "História",
    grade: "7º ano"
  },
  "EF07HI13": {
    code: "EF07HI13",
    description: "Analisar os antecedentes, o desenvolvimento e os impactos da Revolução Francesa, compreendendo a queda do Antigo Regime e a formulação dos direitos universais.",
    verb: "Analisar e Compreender",
    content: "os antecedentes, o desenvolvimento e os impactos da Revolução Francesa",
    context: "compreendendo a queda do Antigo Regime e a formulação dos direitos universais",
    subject: "História",
    grade: "7º ano"
  },
  "EF07HI14": {
    code: "EF07HI14",
    description: "Analisar o processo de independência das colônias espanholas na América, identificando lideranças, conflitos regionais e os projetos políticos predominantes.",
    verb: "Analisar e Identificar",
    content: "o processo de independência das colônias espanholas na América, lideranças e conflitos regionais",
    context: "identificando os projetos políticos predominantes",
    subject: "História",
    grade: "7º ano"
  },
  "EF07LP01": {
    code: "EF07LP01",
    description: "Analisar textos de diferentes gêneros da esfera jornalística, identificando a estrutura de notícias, reportagens, editoriais e cartas de leitor, avaliando o tom e o posicionamento.",
    verb: "Analisar, Identificar e Avaliar",
    content: "textos de diferentes gêneros da esfera jornalística (notícias, reportagens, editoriais, cartas de leitor)",
    context: "avaliando a estrutura, o tom e o posicionamento do enunciador",
    subject: "Língua Portuguesa",
    grade: "7º ano"
  },
  "EF07LP02": {
    code: "EF07LP02",
    description: "Comparar informações sobre um mesmo fato veiculadas em diferentes mídias e fontes, identificando divergências, vieses, omissões e intencionalidades discursivas.",
    verb: "Comparar e Identificar",
    content: "informações sobre um mesmo fato veiculadas em diferentes mídias e fontes",
    context: "identificando divergências, vieses, omissões e intencionalidades discursivas",
    subject: "Língua Portuguesa",
    grade: "7º ano"
  },
  "EF07LP03": {
    code: "EF07LP03",
    description: "Analisar e utilizar estratégias de leitura e compreensão de textos normativos e legais (estatutos, regimentos, códigos de conduta), compreendendo direitos e deveres.",
    verb: "Analisar, Utilizar e Compreender",
    content: "estratégias de leitura e compreensão de textos normativos e legais (estatutos, regimentos, códigos de conduta)",
    context: "compreendendo direitos e deveres cidadãos",
    subject: "Língua Portuguesa",
    grade: "7º ano"
  },
  "EF07LP04": {
    code: "EF07LP04",
    description: "Analisar os efeitos de sentido decorrentes do uso de recursos expressivos (pontuação, expressividade vocal na leitura oral, recursos gráficos) em textos poéticos e dramáticos.",
    verb: "Analisar",
    content: "os efeitos de sentido decorrentes do uso de recursos expressivos (pontuação, expressividade vocal, recursos gráficos)",
    context: "em textos poéticos e dramáticos",
    subject: "Língua Portuguesa",
    grade: "7º ano"
  },
  "EF07LP05": {
    code: "EF07LP05",
    description: "Identificar e analisar a estrutura e o funcionamento de orações subordinadas substantivas, adjetivas e adverbiais em textos variados, compreendendo sua função coesiva.",
    verb: "Identificar e Analisar",
    content: "a estrutura e o funcionamento de orações subordinadas substantivas, adjetivas e adverbiais",
    context: "compreendendo sua função coesiva em textos variados",
    subject: "Língua Portuguesa",
    grade: "7º ano"
  },
  "EF07LP06": {
    code: "EF07LP06",
    description: "Identificar e analisar o uso de pronomes relativos, demonstrativos e possessivos na coesão textual, compreendendo a construção de referências no interior do texto.",
    verb: "Identificar e Analisar",
    content: "o uso de pronomes relativos, demonstrativos e possessivos na coesão textual",
    context: "compreendendo a construção de referências no interior do texto",
    subject: "Língua Portuguesa",
    grade: "7º ano"
  },
  "EF07LP07": {
    code: "EF07LP07",
    description: "Analisar o uso de tempos e modos verbais em sequências narrativas e descritivas, compreendendo os efeitos de sentido na construção da temporalidade e da ação.",
    verb: "Analisar e Compreender",
    content: "o uso de tempos e modos verbais em sequências narrativas e descritivas",
    context: "compreendendo os efeitos de sentido na construção da temporalidade e da ação",
    subject: "Língua Portuguesa",
    grade: "7º ano"
  },
  "EF07LP08": {
    code: "EF07LP08",
    description: "Planejar, produzir, revisar e reescrever textos argumentativos (artigos de opinião, cartas de leitor, debates regrados), sustentando teses com argumentos consistentes.",
    verb: "Planejar, Produzir, Revisar e Reescrever",
    content: "textos argumentativos (artigos de opinião, cartas de leitor, debates regrados)",
    context: "sustentando teses com argumentos consistentes",
    subject: "Língua Portuguesa",
    grade: "7º ano"
  },
  "EF07LP09": {
    code: "EF07LP09",
    description: "Analisar e reescrever textos inadequados quanto à regência verbal e nominal, concordância e colocação pronominal, aplicando a norma-padrão da língua portuguesa.",
    verb: "Analisar, Reescrever e Aplicar",
    content: "textos inadequados quanto à regência verbal e nominal, concordância e colocação pronominal",
    context: "aplicando a norma-padrão da língua portuguesa",
    subject: "Língua Portuguesa",
    grade: "7º ano"
  },
  "EF07MA01": {
    code: "EF07MA01",
    description: "Resolver e elaborar problemas com números racionais positivos e negativos (envolvendo frações, decimais e inteiros), utilizando a reta numérica e regras operatórias.",
    verb: "Resolver e Elaborar",
    content: "problemas com números racionais positivos e negativos (frações, decimais e inteiros)",
    context: "utilizando a reta numérica e regras operatórias",
    subject: "Matemática",
    grade: "7º ano"
  },
  "EF07MA02": {
    code: "EF07MA02",
    description: "Resolver e elaborar problemas que envolvam porcentagens, acréscimos e descontos simples, juros simples e cálculos financeiros do cotidiano.",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo porcentagens, acréscimos, descontos simples e juros simples",
    context: "em cálculos financeiros do cotidiano",
    subject: "Matemática",
    grade: "7º ano"
  },
  "EF07MA03": {
    code: "EF07MA03",
    description: "Resolver e elaborar problemas que envolvam cálculo de potências com expoentes inteiros e raiz quadrada exata de números racionais.",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo cálculo de potências com expoentes inteiros e raiz quadrada exata de números racionais",
    context: "aplicando propriedades operatórias",
    subject: "Matemática",
    grade: "7º ano"
  },
  "EF07MA04": {
    code: "EF07MA04",
    description: "Resolver e elaborar problemas que envolvam proporções diretas e inversas, regra de três simples e composta em diferentes contextos socioeconômicos.",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo proporções diretas e inversas, regra de três simples e composta",
    context: "em diferentes contextos socioeconômicos",
    subject: "Matemática",
    grade: "7º ano"
  },
  "EF07MA05": {
    code: "EF07MA05",
    description: "Resolver e elaborar problemas que envolvam grandezas compostas (velocidade média, densidade demográfica, vazão), utilizando análise dimensional.",
    verb: "Resolver e Elaborar",
    content: "problemas que envolvam grandezas compostas (velocidade média, densidade demográfica, vazão)",
    context: "utilizando análise dimensional",
    subject: "Matemática",
    grade: "7º ano"
  },
  "EF07MA06": {
    code: "EF07MA06",
    description: "Reconhecer e expressar algebricamente regularidades em sequências numéricas ou figural, determinando termos gerais e resolvendo problemas práticos.",
    verb: "Reconhecer, Expressar e Resolver",
    content: "regularidades em sequências numéricas ou figurais e seus termos gerais",
    context: "resolvendo problemas práticos",
    subject: "Matemática",
    grade: "7º ano"
  },
  "EF07MA07": {
    code: "EF07MA07",
    description: "Representar algebricamente expressões algébricas, polinômios e equações de 1º grau com uma incógnita, resolvendo problemas cotidianos e geométricos.",
    verb: "Representar e Resolver",
    content: "expressões algébricas, polinômios e equações de 1º grau com uma incógnita",
    context: "resolvendo problemas cotidianos e geométricos",
    subject: "Matemática",
    grade: "7º ano"
  },
  "EF07MA08": {
    code: "EF07MA08",
    description: "Resolver e elaborar problemas que possam ser representados por equações polinomiais de 1º grau redutíveis a ax + b = c, utilizando propriedades daigualdade.",
    verb: "Resolver e Elaborar",
    content: "problemas representados por equações polinomiais de 1º grau redutíveis a ax + b = c",
    context: "utilizando propriedades da igualdade",
    subject: "Matemática",
    grade: "7º ano"
  },
  "EF07MA09": {
    code: "EF07MA09",
    description: "Resolver e elaborar problemas que envolvam inequações do 1º grau com uma incógnita em contextos reais e geométricos.",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo inequações do 1º grau com uma incógnita",
    context: "em contextos reais e geométricos",
    subject: "Matemática",
    grade: "7º ano"
  },
  "EF07MA10": {
    code: "EF07MA10",
    description: "Comparar e ordenar números inteiros na reta numérica, compreendendo o conceito de simetria (oposto ou simétrico) e módulo.",
    verb: "Comparar e Ordenar",
    content: "números inteiros na reta numérica, conceito de simetria (oposto) e módulo",
    context: "na representação geométrica da reta real",
    subject: "Matemática",
    grade: "7º ano"
  },
  "EF07MA11": {
    code: "EF07MA11",
    description: "Resolver e elaborar problemas de contagem utilizando o princípio multiplicativo e o diagrama de árvore em situações cotidianas complexas.",
    verb: "Resolver e Elaborar",
    content: "problemas de contagem",
    context: "utilizando o princípio multiplicativo e o diagrama de árvore em situações cotidianas complexas",
    subject: "Matemática",
    grade: "7º ano"
  },
  "EF07MA12": {
    code: "EF07MA12",
    description: "Resolver e elaborar problemas que envolvam a probabilidade de eventos em espaços amostrais equiprováveis e não equiprováveis.",
    verb: "Resolver e Elaborar",
    content: "problemas que envolvam a probabilidade de eventos",
    context: "em espaços amostrais equiprováveis e não equiprováveis",
    subject: "Matemática",
    grade: "7º ano"
  },
  "EF07MA13": {
    code: "EF07MA13",
    description: "Compreender a soma das medidas dos ângulos internos de um triângulo e de um quadrilátero, deduzindo propriedades geométricas em polígonos.",
    verb: "Compreender e Deduzir",
    content: "a soma das medidas dos ângulos internos de um triângulo e de um quadrilátero",
    context: "deduzindo propriedades geométricas em polígonos",
    subject: "Matemática",
    grade: "7º ano"
  },
  "EF07MA14": {
    code: "EF07MA14",
    description: "Reconhecer e construir figuras geométricas congruentes e semelhantes utilizando transformações geométricas (translação, rotação, reflexão e homotetia).",
    verb: "Reconhecer e Construir",
    content: "figuras geométricas congruentes e semelhantes",
    context: "utilizando transformações geométricas (translação, rotação, reflexão e homotetia)",
    subject: "Matemática",
    grade: "7º ano"
  },
  "EF07MA15": {
    code: "EF07MA15",
    description: "Resolver e elaborar problemas que envolvam o cálculo da área de círculos e setores circulares, compreendendo a relação com o número pi.",
    verb: "Resolver e Elaborar",
    content: "problemas que envolvam o cálculo da área de círculos e setores circulares",
    context: "compreendendo a relação com o número pi",
    subject: "Matemática",
    grade: "7º ano"
  },
  "EF07MA16": {
    code: "EF07MA16",
    description: "Resolver e elaborar problemas que envolvam o cálculo de perímetro e área de polígonos regulares e irregulares em malhas quadriculadas ou malhas geométricas.",
    verb: "Resolver e Elaborar",
    content: "problemas de cálculo de perímetro e área de polígonos regulares e irregulares",
    context: "em malhas quadriculadas ou malhas geométricas",
    subject: "Matemática",
    grade: "7º ano"
  },
  "EF07MA17": {
    code: "EF07MA17",
    description: "Resolver e elaborar problemas que envolvam o cálculo do volume de prismas retos e cilindros, utilizando unidades de medida adequadas.",
    verb: "Resolver e Elaborar",
    content: "problemas que envolvam o cálculo do volume de prismas retos e cilindros",
    context: "utilizando unidades de medida adequadas",
    subject: "Matemática",
    grade: "7º ano"
  },
  "EF07MA18": {
    code: "EF07MA18",
    description: "Identificar e descrever transformações geométricas em figuras planas no plano cartesiano (translação, reflexão, rotação e ampliação/redução).",
    verb: "Identificar e Descrever",
    content: "transformações geométricas em figuras planas no plano cartesiano (translação, reflexão, rotação e ampliação/redução)",
    context: "no plano cartesiano",
    subject: "Matemática",
    grade: "7º ano"
  },
  "EF07MA19": {
    code: "EF07MA19",
    description: "Resolver e elaborar problemas que envolvam a interpretação e a construção de gráficos de setores, gráficos de linhas e tabelas estatísticas complexas.",
    verb: "Resolver e Elaborar",
    content: "problemas que envolvam a interpretação e construção de gráficos de setores, linhas e tabelas estatísticas",
    context: "em análises de dados complexas",
    subject: "Matemática",
    grade: "7º ano"
  },
  "EF07MA20": {
    code: "EF07MA20",
    description: "Reconhecer a mediana e a moda como medidas de tendência central, calculando-as e interpretando-as em conjuntos de dados estatísticos.",
    verb: "Reconhecer, Calcular e Interpretar",
    content: "a mediana e a moda como medidas de tendência central",
    context: "em conjuntos de dados estatísticos",
    subject: "Matemática",
    grade: "7º ano"
  },
  "EF07MA21": {
    code: "EF07MA21",
    description: "Planejar e realizar pesquisas amostrais ou censitárias, construindo tabelas, gráficos adequados e calculando medidas de tendência central.",
    verb: "Planejar, Realizar e Calcular",
    content: "pesquisas amostrais ou censitárias, tabelas e gráficos adequados, e medidas de tendência central",
    context: "na investigação estatística de temas reais",
    subject: "Matemática",
    grade: "7º ano"
  },
  "EF07MA22": {
    code: "EF07MA22",
    description: "Resolver e elaborar problemas de contagem e probabilidade utilizando o princípio fundamental da contagem e o conceito de probabilidade condicional simples.",
    verb: "Resolver e Elaborar",
    content: "problemas de contagem e probabilidade",
    context: "utilizando o princípio fundamental da contagem e o conceito de probabilidade condicional simples",
    subject: "Matemática",
    grade: "7º ano"
  },
  "EF07MA23": {
    code: "EF07MA23",
    description: "Resolver e elaborar problemas que envolvam a interpretação de gráficos de variação de grandezas em função do tempo, em contextos científicos ou financeiros.",
    verb: "Resolver e Elaborar",
    content: "problemas que envolvam a interpretação de gráficos de variação de grandezas em função do tempo",
    context: "em contextos científicos ou financeiros",
    subject: "Matemática",
    grade: "7º ano"
  },
  "EF08AR01": {
    code: "EF08AR01",
    description: "Analisar e valorizar o patrimônio artístico e cultural das diferentes regiões brasileiras, compreendendo a pluralidade étnica e histórica do país.",
    verb: "Analisar e Valorizar",
    content: "o patrimônio artístico e cultural das diferentes regiões brasileiras",
    context: "compreendendo a pluralidade étnica e histórica do país",
    subject: "Arte",
    grade: "8º ano"
  },
  "EF08AR02": {
    code: "EF08AR02",
    description: "Explorar e analisar elementos constitutivos da música, artes visuais, dança e teatro em produções artísticas contemporâneas e tradicionais.",
    verb: "Explorar e Analisar",
    content: "elementos constitutivos da música, artes visuais, dança e teatro",
    context: "em produções artísticas contemporâneas e tradicionais",
    subject: "Arte",
    grade: "8º ano"
  },
  "EF08AR04": {
    code: "EF08AR04",
    description: "Analisar criticamente e experimentar diferentes técnicas e mídias nas artes visuais, comparando produções de artistas locais e internacionais.",
    verb: "Analisar e Experimentar",
    content: "diferentes técnicas e mídias nas artes visuais",
    context: "comparando produções de artistas locais e internacionais",
    subject: "Arte",
    grade: "8º ano"
  },
  "EF08AR05": {
    code: "EF08AR05",
    description: "Experimentar e criar composições artísticas utilizando recursos digitais, softwares de edição de imagem e inteligência artificial nas artes visuais.",
    verb: "Experimentar e Criar",
    content: "composições artísticas nas artes visuais",
    context: "utilizando recursos digitais, softwares de edição de imagem e inteligência artificial",
    subject: "Arte",
    grade: "8º ano"
  },
  "EF08AR06": {
    code: "EF08AR06",
    description: "Analisar criticamente produções de dança e teatro, relacionando-as com os contextos sociopolíticos, históricos e culturais de sua criação.",
    verb: "Analisar e Relacionar",
    content: "produções de dança e teatro",
    context: "relacionando-as com os contextos sociopolíticos, históricos e culturais de sua criação",
    subject: "Arte",
    grade: "8º ano"
  },
  "EF08CI01": {
    code: "EF08CI01",
    description: "Identificar e descrever os principais sistemas do corpo humano (nervoso, endócrino, reprodutor, imunológico), analisando a integração e o funcionamento integrado.",
    verb: "Identificar, Descrever e Analisar",
    content: "os principais sistemas do corpo humano (nervoso, endócrino, reprodutor, imunológico)",
    context: "analisando a integração e o funcionamento integrado",
    subject: "Ciências",
    grade: "8º ano"
  },
  "EF08CI02": {
    code: "EF08CI02",
    description: "Discutir a atuação do sistema nervoso e do sistema endócrino na regulação das funções corporais, resposta a estímulos e coordenação motora.",
    verb: "Discutir",
    content: "a atuação do sistema nervoso e do sistema endócrino na regulação das funções corporais",
    context: "na resposta a estímulos e coordenação motora",
    subject: "Ciências",
    grade: "8º ano"
  },
  "EF08CI03": {
    code: "EF08CI03",
    description: "Discutir os mecanismos hormonais e fisiológicos envolvidos na puberdade e na adolescência, compreendendo as transformações corporais e emocionais dessa fase.",
    verb: "Discutir e Compreender",
    content: "os mecanismos hormonais e fisiológicos envolvidos na puberdade e adolescência",
    context: "compreendendo as transformações corporais e emocionais dessa fase",
    subject: "Ciências",
    grade: "8º ano"
  },
  "EF08CI04": {
    code: "EF08CI04",
    description: "Analisar e explicar as principais infecções sexualmente transmissíveis (ISTs), abordando formas de prevenção, tratamento e o impacto na saúde pública.",
    verb: "Analisar e Explicar",
    content: "as principais infecções sexualmente transmissíveis (ISTs), formas de prevenção e tratamento",
    context: "analisando o impacto na saúde pública",
    subject: "Ciências",
    grade: "8º ano"
  },
  "EF08CI05": {
    code: "EF08CI05",
    description: "Discutir a importância da vacinação, do planejamento familiar e dos cuidados com a saúde reprodutiva e sexual na adolescência e na vida adulta.",
    verb: "Discutir",
    content: "a importância da vacinação, do planejamento familiar e dos cuidados com a saúde reprodutiva e sexual",
    context: "na adolescência e na vida adulta",
    subject: "Ciências",
    grade: "8º ano"
  },
  "EF08CI07": {
    code: "EF08CI07",
    description: "Comparar o consumo de energia elétrica de diferentes eletrodomésticos, calculando o gasto energético mensal e propondo medidas de economia residencial.",
    verb: "Comparar, Calcular e Propor",
    content: "o consumo de energia elétrica de diferentes eletrodomésticos e o gasto energético mensal",
    context: "propondo medidas de economia residencial",
    subject: "Ciências",
    grade: "8º ano"
  },
  "EF08CI08": {
    code: "EF08CI08",
    description: "Discutir o uso de fontes de energia renováveis e não renováveis no Brasil e no mundo, avaliando impactos socioambientais e viabilidade econômica.",
    verb: "Discutir e Avaliar",
    content: "o uso de fontes de energia renováveis e não renováveis no Brasil e no mundo",
    context: "avaliando impactos socioambientais e viabilidade econômica",
    subject: "Ciências",
    grade: "8º ano"
  },
  "EF08CI09": {
    code: "EF08CI09",
    description: "Analisar o funcionamento de circuitos elétricos residenciais, compreendendo o papel de disjuntores, fusíveis, interruptores e a importância da segurança elétrica.",
    verb: "Analisar e Compreender",
    content: "o funcionamento de circuitos elétricos residenciais (disjuntores, fusíveis, interruptores)",
    context: "compreendendo a importância da segurança elétrica",
    subject: "Ciências",
    grade: "8º ano"
  },
  "EF08CI11": {
    code: "EF08CI11",
    description: "Identificar e caracterizar diferentes tipos de ondas mecânicas e eletromagnéticas (som, luz, micro-ondas, raios X), analisando suas aplicações tecnológicas.",
    verb: "Identificar, Caracterizar e Analisar",
    content: "diferentes tipos de ondas mecânicas e eletromagnéticas (som, luz, micro-ondas, raios X)",
    context: "analisando suas aplicações tecnológicas",
    subject: "Ciências",
    grade: "8º ano"
  },
  "EF08CI12": {
    code: "EF08CI12",
    description: "Discutir as propriedades da luz (reflexão, refração, dispersão) e sua interação com materiais, explicando fenômenos ópticos do cotidiano e instrumentos ópticos.",
    verb: "Discutir e Explicar",
    content: "as propriedades da luz (reflexão, refração, dispersão) e sua interação com materiais",
    context: "explicando fenômenos ópticos do cotidiano e instrumentos ópticos",
    subject: "Ciências",
    grade: "8º ano"
  },
  "EF08CI13": {
    code: "EF08CI13",
    description: "Discutir a importância da camada de ozônio, do efeito estufa e das radiações ultravioleta para a preservação da vida e regulação climática do planeta.",
    verb: "Discutir",
    content: "a importância da camada de ozônio, do efeito estufa e das radiações ultravioleta",
    context: "para a preservação da vida e regulação climática do planeta",
    subject: "Ciências",
    grade: "8º ano"
  },
  "EF08HI01": {
    code: "EF08HI01",
    description: "Analisar o processo de expansão imperialista europeia na Ásia e na África no século XIX, identificando justificativas ideológicas e interesses econômicos.",
    verb: "Analisar e Identificar",
    content: "o processo de expansão imperialista europeia na Ásia e na África no século XIX",
    context: "identificando justificativas ideológicas e interesses econômicos",
    subject: "História",
    grade: "8º ano"
  },
  "EF08HI02": {
    code: "EF08HI02",
    description: "Analisar os desdobramentos do imperialismo na África e na Ásia, destacando os conflitos, a divisão territorial arbitrária e a exploração de recursos.",
    verb: "Analisar",
    content: "os desdobramentos do imperialismo na África e na Ásia (conflitos, divisão territorial e exploração)",
    context: "destacando os impactos sobre as populações locais",
    subject: "História",
    grade: "8º ano"
  },
  "EF08HI03": {
    code: "EF08HI03",
    description: "Analisar os antecedentes, as causas e os desdobramentos da Primeira Guerra Mundial, compreendendo o impacto geopolítico e humano do conflito.",
    verb: "Analisar e Compreender",
    content: "os antecedentes, as causas e os desdobramentos da Primeira Guerra Mundial",
    context: "compreendendo o impacto geopolítico e humano do conflito",
    subject: "História",
    grade: "8º ano"
  },
  "EF08HI04": {
    code: "EF08HI04",
    description: "Analisar os impactos da Primeira Guerra Mundial e a emergência de regimes totalitários (fascismo e nazismo) na Europa entreguerras.",
    verb: "Analisar",
    content: "os impactos da Primeira Guerra Mundial e a emergência de regimes totalitários (fascismo e nazismo)",
    context: "na Europa entreguerras",
    subject: "História",
    grade: "8º ano"
  },
  "EF08HI05": {
    code: "EF08HI05",
    description: "Analisar o processo de crise econômica mundial de 1929 e seus reflexos no cenário internacional e na economia brasileira (Era Vargas).",
    verb: "Analisar",
    content: "o processo de crise econômica mundial de 1929 e seus reflexos",
    context: "no cenário internacional e na economia brasileira (Era Vargas)",
    subject: "História",
    grade: "8º ano"
  },
  "EF08HI06": {
    code: "EF08HI06",
    description: "Identificar e analisar as características da Era Vargas no Brasil (1930-1945), compreendendo a centralização política, as leis trabalhistas e o populismo.",
    verb: "Identificar, Analisar e Compreender",
    content: "as características da Era Vargas no Brasil (1930-1945): centralização política, leis trabalhistas e populismo",
    context: "na modernização do Estado brasileiro",
    subject: "História",
    grade: "8º ano"
  },
  "EF08HI07": {
    code: "EF08HI07",
    description: "Analisar as origens, os desdobramentos e o impacto histórico da Segunda Guerra Mundial, com ênfase no Holocausto e no uso de armas nucleares.",
    verb: "Analisar",
    content: "as origens, os desdobramentos e o impacto histórico da Segunda Guerra Mundial",
    context: "com ênfase no Holocausto e no uso de armas nucleares",
    subject: "História",
    grade: "8º ano"
  },
  "EF08HI08": {
    code: "EF08HI08",
    description: "Analisar a participação do Brasil na Segunda Guerra Mundial e o impacto dessa experiência no processo de redemocratização interna pós-1945.",
    verb: "Analisar",
    content: "a participação do Brasil na Segunda Guerra Mundial",
    context: "e o impacto dessa experiência no processo de redemocratização interna pós-1945",
    subject: "História",
    grade: "8º ano"
  },
  "EF08HI09": {
    code: "EF08HI09",
    description: "Analisar as origens e a dinâmica da Guerra Fria, compreendendo a bipolaridade mundial, a corrida armamentista e espacial, e os conflitos regionais.",
    verb: "Analisar e Compreender",
    content: "as origens e a dinâmica da Guerra Fria (bipolaridade mundial, corrida armamentista e espacial, conflitos regionais)",
    context: "no cenário internacional pós-1945",
    subject: "História",
    grade: "8º ano"
  },
  "EF08HI10": {
    code: "EF08HI10",
    description: "Identificar e analisar o processo de descolonização da Ásia e da África, compreendendo as lutas pela independência e os desafios geopolíticos subsequentes.",
    verb: "Identificar, Analisar e Compreender",
    content: "o processo de descolonização da Ásia e da África e as lutas pela independência",
    context: "compreendendo os desafios geopolíticos subsequentes",
    subject: "História",
    grade: "8º ano"
  },
  "EF08HI12": {
    code: "EF08HI12",
    description: "Analisar as transformações sociais, econômicas e culturais ocorridas no Brasil pós-Segunda Guerra Mundial, com ênfase na urbanização e industrialização.",
    verb: "Analisar",
    content: "as transformações sociais, econômicas e culturais ocorridas no Brasil pós-Segunda Guerra Mundial",
    context: "com ênfase na urbanização e industrialização",
    subject: "História",
    grade: "8º ano"
  },
  "EF08LP01": {
    code: "EF08LP01",
    description: "Analisar textos de opinião, artigos de fundo e editoriais, identificando teses, argumentos, contra-argumentos e estratégias de persuasão retórica.",
    verb: "Analisar e Identificar",
    content: "textos de opinião, artigos de fundo e editoriais, teses, argumentos, contra-argumentos",
    context: "identificando estratégias de persuasão retórica",
    subject: "Língua Portuguesa",
    grade: "8º ano"
  },
  "EF08LP02": {
    code: "EF08LP02",
    description: "Comparar posições e argumentos divergentes sobre temas polêmicos de relevância social, avaliando a consistência das evidências apresentadas.",
    verb: "Comparar e Avaliar",
    content: "posições e argumentos divergentes sobre temas polêmicos de relevância social",
    context: "avaliando a consistência das evidências apresentadas",
    subject: "Língua Portuguesa",
    grade: "8º ano"
  },
  "EF08LP03": {
    code: "EF08LP03",
    description: "Analisar os efeitos de sentido decorrentes do uso de recursos de persuasão e manipulação linguística em textos publicitários e de propaganda política.",
    verb: "Analisar",
    content: "os efeitos de sentido decorrentes do uso de recursos de persuasão e manipulação linguística",
    context: "em textos publicitários e de propaganda política",
    subject: "Língua Portuguesa",
    grade: "8º ano"
  },
  "EF08LP04": {
    code: "EF08LP04",
    description: "Analisar a estrutura e o funcionamento de orações coordenadas e subordinadas adverbiais, compreendendo a coesão textual em textos complexos.",
    verb: "Analisar e Compreender",
    content: "a estrutura e o funcionamento de orações coordenadas e subordinadas adverbiais",
    context: "compreendendo a coesão textual em textos complexos",
    subject: "Língua Portuguesa",
    grade: "8º ano"
  },
  "EF08LP05": {
    code: "EF08LP05",
    description: "Identificar e analisar o uso de figuras de linguagem (metáfora, metonímia, hipérbole, ironia, personificação) em textos literários e midiáticos.",
    verb: "Identificar e Analisar",
    content: "o uso de figuras de linguagem (metáfora, metonímia, hipérbole, ironia, personificação)",
    context: "em textos literários e midiáticos",
    subject: "Língua Portuguesa",
    grade: "8º ano"
  },
  "EF08LP06": {
    code: "EF08LP06",
    description: "Analisar a concordância verbal e nominal em textos de alta complexidade argumentativa, aplicando regras da norma-padrão.",
    verb: "Analisar e Aplicar",
    content: "a concordância verbal e nominal",
    context: "em textos de alta complexidade argumentativa, aplicando regras da norma-padrão",
    subject: "Língua Portuguesa",
    grade: "8º ano"
  },
  "EF08LP07": {
    code: "EF08LP07",
    description: "Planejar, produzir, revisar e reescrever artigos de opinião, cartas abertas, manifestos e petições, fundamentando o ponto de vista em dados e evidências.",
    verb: "Planejar, Produzir, Revisar e Reescrever",
    content: "artigos de opinião, cartas abertas, manifestos e petições",
    context: "fundamentando o ponto de vista em dados e evidências",
    subject: "Língua Portuguesa",
    grade: "8º ano"
  },
  "EF08MA01": {
    code: "EF08MA01",
    description: "Resolver e elaborar problemas que envolvam cálculos com potências de expoente inteiro e aplicação da notação científica.",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo cálculos com potências de expoente inteiro",
    context: "e aplicação da notação científica",
    subject: "Matemática",
    grade: "8º ano"
  },
  "EF08MA02": {
    code: "EF08MA02",
    description: "Resolver e elaborar problemas que envolvam porcentagens, juros compostos, financiamentos e investimentos no contexto da educação financeira.",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo porcentagens, juros compostos, financiamentos e investimentos",
    context: "no contexto da educação financeira",
    subject: "Matemática",
    grade: "8º ano"
  },
  "EF08MA03": {
    code: "EF08MA03",
    description: "Resolver e elaborar problemas que envolvam cálculo de raízes inexatas por aproximação numérica na reta real.",
    verb: "Resolver e Elaborar",
    content: "problemas que envolvam cálculo de raízes inexatas",
    context: "por aproximação numérica na reta real",
    subject: "Matemática",
    grade: "8º ano"
  },
  "EF08MA04": {
    code: "EF08MA04",
    description: "Resolver e elaborar problemas que envolvam proporções e grandezas direta e inversamente proporcionais em contextos físicos e geométricos.",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo proporções e grandezas direta e inversamente proporcionais",
    context: "em contextos físicos e geométricos",
    subject: "Matemática",
    grade: "8º ano"
  },
  "EF08MA05": {
    code: "EF08MA05",
    description: "Reconhecer e expressar algebricamente propriedades de sequências numéricas e resolver equações polinomiais de 1º e 2º grau.",
    verb: "Reconhecer, Expressar e Resolver",
    content: "propriedades de sequências numéricas e equações polinomiais de 1º e 2º grau",
    context: "em representações algébricas",
    subject: "Matemática",
    grade: "8º ano"
  },
  "EF08MA06": {
    code: "EF08MA06",
    description: "Resolver e elaborar problemas que envolvam sistemas de equações polinomiais de 1º grau com duas incógnitas, utilizando o método da adição ou substituição.",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo sistemas de equações polinomiais de 1º grau com duas incógnitas",
    context: "utilizando o método da adição ou substituição",
    subject: "Matemática",
    grade: "8º ano"
  },
  "EF08MA07": {
    code: "EF08MA07",
    description: "Resolver e elaborar problemas que possam ser representados por equações do 2º grau do tipo ax² = b.",
    verb: "Resolver e Elaborar",
    content: "problemas representados por equações do 2º grau do tipo ax² = b",
    context: "em contextos práticos e algébricos",
    subject: "Matemática",
    grade: "8º ano"
  },
  "EF08MA08": {
    code: "EF08MA08",
    description: "Resolver e elaborar problemas que envolvam a aplicação do Teorema de Pitágoras no cálculo de distâncias e em figuras geométricas planas.",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo a aplicação do Teorema de Pitágoras",
    context: "no cálculo de distâncias e em figuras geométricas planas",
    subject: "Matemática",
    grade: "8º ano"
  },
  "EF08MA09": {
    code: "EF08MA09",
    description: "Resolver e elaborar problemas que envolvam o cálculo da área de superfícies e do volume de prismas, cilindros e pirâmides.",
    verb: "Resolver e Elaborar",
    content: "problemas de cálculo da área de superfícies e do volume de prismas, cilindros e pirâmides",
    context: "em contextos tridimensionais",
    subject: "Matemática",
    grade: "8º ano"
  },
  "EF08MA10": {
    code: "EF08MA10",
    description: "Identificar e descrever as propriedades de polígonos regulares e irregulares, calculando suas diagonais e ângulos internos e externos.",
    verb: "Identificar, Descrever e Calcular",
    content: "as propriedades de polígonos regulares e irregulares, suas diagonais e ângulos internos e externos",
    context: "em análises geométricas de polígonos",
    subject: "Matemática",
    grade: "8º ano"
  },
  "EF08MA11": {
    code: "EF08MA11",
    description: "Resolver e elaborar problemas que envolvam o cálculo de medidas de ângulos formados por retas paralelas cortadas por uma transversal.",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo o cálculo de medidas de ângulos",
    context: "formados por retas paralelas cortadas por uma transversal",
    subject: "Matemática",
    grade: "8º ano"
  },
  "EF08MA12": {
    code: "EF08MA12",
    description: "Resolver e elaborar problemas que envolvam simetrias de translação, rotação e reflexão em figuras geométricas planas.",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo simetrias de translação, rotação e reflexão",
    context: "em figuras geométricas planas",
    subject: "Matemática",
    grade: "8º ano"
  },
  "EF08MA13": {
    code: "EF08MA13",
    description: "Identificar e representar pontos, retas e planos no espaço tridimensional, compreendendo suas relações de paralelismo e perpendicularismo.",
    verb: "Identificar, Representar e Compreender",
    content: "pontos, retas e planos no espaço tridimensional",
    context: "compreendendo suas relações de paralelismo e perpendicularismo",
    subject: "Matemática",
    grade: "8º ano"
  },
  "EF08MA14": {
    code: "EF08MA14",
    description: "Resolver e elaborar problemas que envolvam a construção e interpretação de gráficos estatísticos e a análise crítica de pesquisas de opinião.",
    verb: "Resolver, Elaborar e Analisar",
    content: "problemas envolvendo a construção e interpretação de gráficos estatísticos",
    context: "e a análise crítica de pesquisas de opinião",
    subject: "Matemática",
    grade: "8º ano"
  },
  "EF08MA15": {
    code: "EF08MA15",
    description: "Calcular a probabilidade de eventos complementares, independentes e dependentes, utilizando o princípio multiplicativo da contagem.",
    verb: "Calcular",
    content: "a probabilidade de eventos complementares, independentes e dependentes",
    context: "utilizando o princípio multiplicativo da contagem",
    subject: "Matemática",
    grade: "8º ano"
  },
  "EF08MA16": {
    code: "EF08MA16",
    description: "Resolver e elaborar problemas que envolvam a interpretação de tabelas de frequência absoluta e relativa, calculando medidas estatísticas.",
    verb: "Resolver, Elaborar e Calcular",
    content: "problemas envolvendo a interpretação de tabelas de frequência absoluta e relativa",
    context: "calculando medidas estatísticas",
    subject: "Matemática",
    grade: "8º ano"
  },
  "EF08MA18": {
    code: "EF08MA18",
    description: "Resolver e elaborar problemas que envolvam o cálculo da área e do perímetro de figuras compostas por polígonos e círculos.",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo o cálculo da área e do perímetro de figuras compostas",
    context: "compostas por polígonos e círculos",
    subject: "Matemática",
    grade: "8º ano"
  },
  "EF08MA19": {
    code: "EF08MA19",
    description: "Resolver e elaborar problemas que envolvam grandezas compostas (como taxa de câmbio, densidade demográfica, velocidade e consumo específico).",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo grandezas compostas (taxa de câmbio, densidade demográfica, velocidade e consumo específico)",
    context: "em contextos reais e práticos",
    subject: "Matemática",
    grade: "8º ano"
  },
  "EF08MA22": {
    code: "EF08MA22",
    description: "Calcular a probabilidade de eventos, com base na construção do espaço amostral, utilizando o princípio multiplicativo.",
    verb: "Calcular",
    content: "a probabilidade de eventos com base na construção do espaço amostral",
    context: "utilizando o princípio multiplicativo",
    subject: "Matemática",
    grade: "8º ano"
  },
  "EF09AR01": {
    code: "EF09AR01",
    description: "Analisar e valorizar as manifestações artísticas das culturas globais e regionais, compreendendo o diálogo intercultural na arte contemporânea.",
    verb: "Analisar e Valorizar",
    content: "as manifestações artísticas das culturas globais e regionais",
    context: "compreendendo o diálogo intercultural na arte contemporânea",
    subject: "Arte",
    grade: "9º ano"
  },
  "EF09AR02": {
    code: "EF09AR02",
    description: "Analisar criticamente produções artísticas que dialogam com temas sociais, políticos, ambientais e tecnológicos da atualidade.",
    verb: "Analisar",
    content: "produções artísticas que dialogam com temas sociais, políticos, ambientais e tecnológicos",
    context: "de forma crítica na atualidade",
    subject: "Arte",
    grade: "9º ano"
  },
  "EF09AR03": {
    code: "EF09AR03",
    description: "Analisar e experimentar diferentes suportes, materiais e tecnologias digitais na produção e exposição de obras artísticas contemporâneas.",
    verb: "Analisar e Experimentar",
    content: "diferentes suportes, materiais e tecnologias digitais",
    context: "na produção e exposição de obras artísticas contemporâneas",
    subject: "Arte",
    grade: "9º ano"
  },
  "EF09CI01": {
    code: "EF09CI01",
    description: "Investigar as mudanças climáticas globais, discutindo causas naturais e antrópicas, efeitos ambientais e medidas de mitigação e adaptação.",
    verb: "Investigar e Discutir",
    content: "as mudanças climáticas globais, causas naturais e antrópicas, efeitos ambientais",
    context: "discutindo medidas de mitigação e adaptação",
    subject: "Ciências",
    grade: "9º ano"
  },
  "EF09CI02": {
    code: "EF09CI02",
    description: "Discutir a importância dos recursos energéticos e das tecnologias limpas para o desenvolvimento sustentável da sociedade contemporânea.",
    verb: "Discutir",
    content: "a importância dos recursos energéticos e das tecnologias limpas",
    context: "para o desenvolvimento sustentável da sociedade contemporânea",
    subject: "Ciências",
    grade: "9º ano"
  },
  "EF09CI03": {
    code: "EF09CI03",
    description: "Descrever a estrutura do átomo e da tabela periódica, compreendendo as propriedades dos elementos químicos e a formação de ligações químicas.",
    verb: "Descrever e Compreender",
    content: "a estrutura do átomo e da tabela periódica, propriedades dos elementos químicos",
    context: "compreendendo a formação de ligações químicas",
    subject: "Ciências",
    grade: "9º ano"
  },
  "EF09CI04": {
    code: "EF09CI04",
    description: "Analisar e classificar reações químicas cotidianas, identificando evidências de transformação química e conservação da massa.",
    verb: "Analisar, Classificar e Identificar",
    content: "reações químicas cotidianas e evidências de transformação química",
    context: "compreendendo a conservação da massa",
    subject: "Ciências",
    grade: "9º ano"
  },
  "EF09CI05": {
    code: "EF09CI05",
    description: "Investigar as leis de Newton (inércia, princípio fundamental da dinâmica e ação e reação), aplicando-as a situações cotidianas e esportivas.",
    verb: "Investigar e Aplicar",
    content: "as leis de Newton (inércia, princípio fundamental da dinâmica e ação e reação)",
    context: "aplicando-as a situações cotidianas e esportivas",
    subject: "Ciências",
    grade: "9º ano"
  },
  "EF09CI06": {
    code: "EF09CI06",
    description: "Discutir o conceito de trabalho, energia e potência mecânica em diferentes contextos cotidianos, tecnológicos e industriais.",
    verb: "Discutir",
    content: "o conceito de trabalho, energia e potência mecânica",
    context: "em diferentes contextos cotidianos, tecnológicos e industriais",
    subject: "Ciências",
    grade: "9º ano"
  },
  "EF09CI07": {
    code: "EF09CI07",
    description: "Discutir a evolução estelar, a origem do universo (Teoria do Big Bang), a estrutura das galáxias e a formação do Sistema Solar.",
    verb: "Discutir",
    content: "a evolução estelar, a origem do universo (Teoria do Big Bang), a estrutura das galáxias e a formação do Sistema Solar",
    context: "na perspectiva da astronomia moderna",
    subject: "Ciências",
    grade: "9º ano"
  },
  "EF09CI08": {
    code: "EF09CI08",
    description: "Discutir as teorias sobre a origem da vida na Terra e a evolução das espécies por meio da seleção natural (Darwin e Wallace).",
    verb: "Discutir",
    content: "as teorias sobre a origem da vida na Terra e a evolução das espécies por meio da seleção natural (Darwin e Wallace)",
    context: "compreendendo os fundamentos da biologia evolutiva",
    subject: "Ciências",
    grade: "9º ano"
  },
  "EF09CI09": {
    code: "EF09CI09",
    description: "Discutir os mecanismos da hereditariedade (leis de Mendel, DNA, RNA, mutações) e a importância da diversidade genética nas populações.",
    verb: "Discutir",
    content: "os mecanismos da hereditariedade (leis de Mendel, DNA, RNA, mutações)",
    context: "e a importância da diversidade genética nas populações",
    subject: "Ciências",
    grade: "9º ano"
  },
  "EF09HI01": {
    code: "EF09HI01",
    description: "Analisar os antecedentes, o desenvolvimento e os desdobramentos da Guerra Fria, com foco na consolidação do bloco capitalista e socialista.",
    verb: "Analisar",
    content: "os antecedentes, o desenvolvimento e os desdobramentos da Guerra Fria",
    context: "com foco na consolidação do bloco capitalista e socialista",
    subject: "História",
    grade: "9º ano"
  },
  "EF09HI02": {
    code: "EF09HI02",
    description: "Analisar o processo de redemocratização do Brasil, com ênfase no fim da ditadura militar, nas Diretas Já e na Constituição de 1988.",
    verb: "Analisar",
    content: "o processo de redemocratização do Brasil (fim da ditadura militar, Diretas Já)",
    context: "com ênfase na promulgação da Constituição de 1988",
    subject: "História",
    grade: "9º ano"
  },
  "EF09HI03": {
    code: "EF09HI03",
    description: "Identificar e analisar as características do populismo e da industrialização no Brasil do período JK ao regime militar (1945-1985).",
    verb: "Identificar e Analisar",
    content: "as características do populismo e da industrialização no Brasil",
    context: "do período JK ao regime militar (1945-1985)",
    subject: "História",
    grade: "9º ano"
  },
  "EF09HI04": {
    code: "EF09HI04",
    description: "Analisar as características dos regimes militares na América Latina e as lutas pela redemocratização e defesa dos direitos humanos.",
    verb: "Analisar",
    content: "as características dos regimes militares na América Latina",
    context: "e as lutas pela redemocratização e defesa dos direitos humanos",
    subject: "História",
    grade: "9º ano"
  },
  "EF09HI05": {
    code: "EF09HI05",
    description: "Analisar os principais conflitos do Oriente Médio após a Segunda Guerra Mundial, compreendendo os fatores políticos, religiosos e territoriais.",
    verb: "Analisar e Compreender",
    content: "os principais conflitos do Oriente Médio após a Segunda Guerra Mundial",
    context: "compreendendo os fatores políticos, religiosos e territoriais",
    subject: "História",
    grade: "9º ano"
  },
  "EF09HI06": {
    code: "EF09HI06",
    description: "Analisar o processo de globalização e a formação de blocos econômicos, identificando os impactos na economia, cultura e geopolítica mundial.",
    verb: "Analisar e Identificar",
    content: "o processo de globalização e a formação de blocos econômicos",
    context: "identificando os impactos na economia, cultura e geopolítica mundial",
    subject: "História",
    grade: "9º ano"
  },
  "EF09HI07": {
    code: "EF09HI07",
    description: "Analisar os desafios sociais, econômicos e políticos do mundo contemporâneo, com ênfase nas desigualdades globais e migrações.",
    verb: "Analisar",
    content: "os desafios sociais, econômicos e políticos do mundo contemporâneo",
    context: "com ênfase nas desigualdades globais e migrações",
    subject: "História",
    grade: "9º ano"
  },
  "EF09LP01": {
    code: "EF09LP01",
    description: "Analisar textos argumentativos de grande alcance social (manifestos, petições, abaixo-assinados), avaliando o tom, a coesão e o impacto político.",
    verb: "Analisar e Avaliar",
    content: "textos argumentativos de grande alcance social (manifestos, petições, abaixo-assinados)",
    context: "avaliando o tom, a coesão e o impacto político",
    subject: "Língua Portuguesa",
    grade: "9º ano"
  },
  "EF09LP02": {
    code: "EF09LP02",
    description: "Analisar e debater temas polêmicos de relevância social, sustentando argumentos consistentes com respeito à diversidade de opiniões.",
    verb: "Analisar e Debater",
    content: "temas polêmicos de relevância social sustentando argumentos consistentes",
    context: "com respeito à diversidade de opiniões",
    subject: "Língua Portuguesa",
    grade: "9º ano"
  },
  "EF09LP03": {
    code: "EF09LP03",
    description: "Analisar a estrutura sintática de períodos compostos por coordenação e subordinação em textos narrativos e argumentativos complexos.",
    verb: "Analisar",
    content: "a estrutura sintática de períodos compostos por coordenação e subordinação",
    context: "em textos narrativos e argumentativos complexos",
    subject: "Língua Portuguesa",
    grade: "9º ano"
  },
  "EF09LP04": {
    code: "EF09LP04",
    description: "Identificar e analisar o uso de recursos coesivos interparágrafos em textos dissertativo-argumentativos de nível avançado.",
    verb: "Identificar e Analisar",
    content: "o uso de recursos coesivos interparágrafos",
    context: "em textos dissertativo-argumentativos de nível avançado",
    subject: "Língua Portuguesa",
    grade: "9º ano"
  },
  "EF09LP05": {
    code: "EF09LP05",
    description: "Analisar as variações linguísticas históricas, regionais e sociais na literatura e nos meios de comunicação, combatendo preconceitos linguísticos.",
    verb: "Analisar",
    content: "as variações linguísticas históricas, regionais e sociais na literatura e nos meios de comunicação",
    context: "combatendo preconceitos linguísticos",
    subject: "Língua Portuguesa",
    grade: "9º ano"
  },
  "EF09LP06": {
    code: "EF09LP06",
    description: "Planejar, produzir, revisar e reescrever artigos de opinião e propostas de intervenção social alinhadas aos critérios de coesão e coerência.",
    verb: "Planejar, Produzir, Revisar e Reescrever",
    content: "artigos de opinião e propostas de intervenção social",
    context: "alinhadas aos critérios de coesão e coerência",
    subject: "Língua Portuguesa",
    grade: "9º ano"
  },
  "EF09MA01": {
    code: "EF09MA01",
    description: "Resolver e elaborar problemas com potências de expoentes negativos e fracionários, aplicando propriedades operatórias na reta real.",
    verb: "Resolver e Elaborar",
    content: "problemas com potências de expoentes negativos e fracionários",
    context: "aplicando propriedades operatórias na reta real",
    subject: "Matemática",
    grade: "9º ano"
  },
  "EF09MA02": {
    code: "EF09MA02",
    description: "Resolver e elaborar problemas envolvendo operações com números reais em notação científica e radiciação.",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo operações com números reais em notação científica e radiciação",
    context: "em cálculos algébricos e numéricos",
    subject: "Matemática",
    grade: "9º ano"
  },
  "EF09MA03": {
    code: "EF09MA03",
    description: "Resolver e elaborar problemas que envolvam equações polinomiais de 2º grau completas e incompletas por meio da fórmula de Bhaskara.",
    verb: "Resolver e Elaborar",
    content: "problemas que envolvam equações polinomiais de 2º grau completas e incompletas",
    context: "por meio da fórmula de Bhaskara",
    subject: "Matemática",
    grade: "9º ano"
  },
  "EF09MA04": {
    code: "EF09MA04",
    description: "Resolver e elaborar problemas que envolvam sistemas de equações lineares de 2º grau e interpretação gráfica no plano cartesiano.",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo sistemas de equações lineares e de 2º grau",
    context: "e interpretação gráfica no plano cartesiano",
    subject: "Matemática",
    grade: "9º ano"
  },
  "EF09MA05": {
    code: "EF09MA05",
    description: "Resolver e elaborar problemas envolvendo funções polinomiais de 1º e 2º grau, analisando seus coeficientes, gráficos e raízes.",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo funções polinomiais de 1º e 2º grau",
    context: "analisando seus coeficientes, gráficos e raízes",
    subject: "Matemática",
    grade: "9º ano"
  },
  "EF09MA06": {
    code: "EF09MA06",
    description: "Compreender as funções como relações de dependência unívoca entre grandezas, construindo gráficos e tabelas explicativas.",
    verb: "Compreender e Construir",
    content: "as funções como relações de dependência unívoca entre grandezas",
    context: "construindo gráficos e tabelas explicativas",
    subject: "Matemática",
    grade: "9º ano"
  },
  "EF09MA07": {
    code: "EF09MA07",
    description: "Resolver e elaborar problemas que envolvam razões trigonométricas no triângulo retângulo (seno, cosseno e tangente).",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo razões trigonométricas no triângulo retângulo (seno, cosseno e tangente)",
    context: "em contextos geométricos e medição de alturas/distâncias",
    subject: "Matemática",
    grade: "9º ano"
  },
  "EF09MA08": {
    code: "EF09MA08",
    description: "Resolver e elaborar problemas utilizando o Teorema de Tales e as propriedades dos triângulos semelhantes em contextos geométricos.",
    verb: "Resolver e Elaborar",
    content: "problemas utilizando o Teorema de Tales e as propriedades dos triângulos semelhantes",
    context: "em contextos geométricos",
    subject: "Matemática",
    grade: "9º ano"
  },
  "EF09MA09": {
    code: "EF09MA09",
    description: "Resolver e elaborar problemas que envolvam o cálculo do comprimento da circunferência e da área de círculos e setores em contextos reais.",
    verb: "Resolver e Elaborar",
    content: "problemas que envolvam o cálculo do comprimento da circunferência e da área de círculos e setores",
    context: "em contextos reais",
    subject: "Matemática",
    grade: "9º ano"
  },
  "EF09MA10": {
    code: "EF09MA10",
    description: "Resolver e elaborar problemas que envolvam a área total e o volume de prismas, cilindros, pirâmides, cones e esferas.",
    verb: "Resolver e Elaborar",
    content: "problemas que envolvam a área total e o volume de prismas, cilindros, pirâmides, cones e esferas",
    context: "em corpos geométricos tridimensionais",
    subject: "Matemática",
    grade: "9º ano"
  },
  "EF09MA11": {
    code: "EF09MA11",
    description: "Resolver e elaborar problemas que envolvam grandezas geométricas tridimensionais, com foco na arquitetura e no design.",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo grandezas geométricas tridimensionais",
    context: "com foco na arquitetura e no design",
    subject: "Matemática",
    grade: "9º ano"
  },
  "EF09MA12": {
    code: "EF09MA12",
    description: "Resolver e elaborar problemas que envolvam a construção e interpretação de gráficos estatísticos avançados, histogramas e polígonos de frequência.",
    verb: "Resolver e Elaborar",
    content: "problemas envolvendo a construção e interpretação de gráficos estatísticos avançados, histogramas e polígonos de frequência",
    context: "em estudos estatísticos",
    subject: "Matemática",
    grade: "9º ano"
  },
  "EF09MA13": {
    code: "EF09MA13",
    description: "Analisar informações estatísticas veiculadas em relatórios de pesquisa, avaliando vieses, margens de erro e conclusões.",
    verb: "Analisar e Avaliar",
    content: "informações estatísticas veiculadas em relatórios de pesquisa",
    context: "avaliando vieses, margens de erro e conclusões",
    subject: "Matemática",
    grade: "9º ano"
  },
  "EF09MA14": {
    code: "EF09MA14",
    description: "Resolver e elaborar problemas de contagem e probabilidade utilizando o princípio fundamental da contagem, probabilidade binomial e probabilidade condicional.",
    verb: "Resolver e Elaborar",
    content: "problemas de contagem e probabilidade",
    context: "utilizando o princípio fundamental da contagem, probabilidade binomial e probabilidade condicional",
    subject: "Matemática",
    grade: "9º ano"
  }
};

export function getOfficialSkill(code: string): OfficialSkillItem | undefined {
  if (!code) return undefined;
  const clean = code.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
  return OFFICIAL_SKILLS_DATABASE[clean];
}
