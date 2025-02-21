import { faPython } from "@fortawesome/free-brands-svg-icons";
import {
  faGraduationCap,
  faMusic,
  faClipboardCheck,
  faComments,
  faCheckCircle,
  faFileInvoice,
  faCloudSun,
  faSchool,
  faUser,
  faDove,
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";

export default [
  {
    icon: faPython,
    title: "CorrAut - 2022",
    description:
      "Criação de um sistema desktop para a correção automática de gabaritos baseado no método da Cascata de Haar. Projeto vencedor da área de TICs da XIII feira de ciências e cultura da EEEP Edson Queiroz.",
    tags: ["Python", "OpenCV", "Pillow", "PyQt6"],
    githubName: "CorrAut-Antigo",
  },
  {
    icon: faClipboardCheck,
    title: "CorrAut - 2023",
    linkedInURL:
      "https://www.linkedin.com/posts/marcos-sousa-39aaa6262_fala-rede-passando-para-apresentar-o-activity-7216497386196484096-oWKm",
    description:
      "Sistema que automatiza a correção de gabaritos e monitora a frequência dos estudantes por meio de um website e um aplicativo móvel. Vencedor da área de TICs da XIV feira de ciências e cultura da EEEP Edson Queiroz.",
    tags: [
      "HTML / CSS / JS",
      "React Native",
      "Firebase",
      "AWS",
      "Python",
      "Ultralytics",
      "Django",
    ],
  },
  {
    icon: faBoltLightning,
    title: "Spark IA",
    description:
      "Plataforma de aprendizado eficiente para o ENEM através de Inteligência Artificial. O app permite o uso de flashcards para reforço dos estudos.",
    tags: [
      "TS",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Supabase",
      "React Native",
      "AWS"
    ],
    linkedInURL:
      "https://www.linkedin.com/posts/marcos-sousa-39aaa6262_reactnative-ia-educaaexaeto-activity-7256298384947302400-kkDp",
  },
  {
    icon: faCheckCircle,
    title: "Corretor",
    description:
      "Corretor automatizado de gabaritos de 20 questões padronizados, versão otimizada do corretor do CorrAut. Configurado para capturar vídeo da webcam, reconhecer respostas marcadas e compará-las com um gabarito predefinido.",
    tags: ["Python", "Ultralytics"],
    githubName: "Corretor",
  },
  {
    icon: faDove,
    title: "TeToka!",
    description:
      "Uma plataforma que centraliza informações essenciais para quem está dando os primeiros passos na vida adulta.",
    tags: [
      "TS",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    githubName: "tetoka",
  },
  {
    icon: faSchool,
    title: "Escola Transparente",
    description:
      "Plataforma para a denúncia da infraestrutura precária de escolas. Os usuários podem criar reclamações que serão visualizadas no perfil da escola e na página inicial do site.",
    tags: ["TS", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubName: "escola-transparente",
  },
  {
    icon: faComments,
    title: "Chat Web",
    description:
      "Consiste em um site onde os usuários podem criar contas, fazer login e trocar mensagens, contando com confirmações de leitura e fotos de perfil.",
    tags: ["JS", "React", "Firebase", "Next.js", "Tailwind CSS"],
    githubName: "Chat-web",
  },
  {
    icon: faGraduationCap,
    title: "Jogo Educativo de Verbos em Espanhol",
    description:
      "Aplicação com interface interativa focada em verbos espanhóis terminados em AR, oferecendo explicações sobre conjugações, pronomes pessoais e questões para prática.",
    tags: ["HTML / CSS / JS", "Python", "Flask"],
    githubName: "Trabalho-de-Espanhol",
  },
  {
    icon: faMusic,
    title: "Projeto Cifra",
    description:
      "Jogo que auxilia no estudo de música através de uma aplicação de terminal e conexão com midi. Contém várias funções para trabalhar com conceitos de teoria musical e reconhecimento através de midi.",
    tags: ["Python", "Selenium", "Pygame Midi", "Colorama"],
    githubName: "ProjetoCifra",
  },
  {
    icon: faFileInvoice,
    title: "Formulário Automatizado para Prestação de Contas",
    description:
      "Sistema feito para automatizar a prestação de contas de uma rifa virtual. Gera cartelas e uma planilha de visualização atualizada em tempo real.",
    tags: ["Python", "Flask", "Pillow", "gspread", "Apps Script"],
    githubName: "RifasInfor",
  },
  {
    icon: faUser,
    title: "Página de Login e Registro",
    description:
      "Aplicação simples com páginas de login e registro, feita para um teste técnico.",
    tags: ["TS", "React", "Firebase", "Next.js", "Tailwind CSS"],
    githubName: "login-e-registro",
  },
];
