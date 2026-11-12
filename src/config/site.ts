export interface SocialLink {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  url: string;
  isExternal: boolean;
  type: 'instagram' | 'youtube' | 'setup' | 'whatsapp' | 'generic';
}

export interface SetupEquipment {
  id: string;
  tag: string;
  name: string;
  category: string;
  description: string;
  url: string;
  isAvailable: boolean;
  isAffiliate: boolean;
  specs: string[];
}

export const siteConfig = {
  creator: {
    name: "Lucas Mendes",
    stageName: "LUSKERA",
    signature: "DIGITAL SPACE",
    handle: "@luskeraa",
    secondaryHandle: "@ocabadosvideos",
    role: "CRIADOR DIGITAL & AUDIOVISUAL",
    concept: "AFTER THE CUT",
    location: "Brasil",
    year: "2026",
    statusBadge: "AVAILABLE FOR SELECT PROJECTS",
  },
  meta: {
    title: "LUSKERA — DIGITAL SPACE | Lucas Mendes",
    description: "Entre câmeras, ideias e histórias que ainda vou contar. Espaço autoral de Lucas Mendes, criador de conteúdo digital e audiovisual.",
    keywords: ["Lucas Mendes", "Luskera", "Criador de Conteúdo", "Audiovisual", "Filmmaker", "Setup", "After The Cut"],
    siteUrl: "https://luskera.com.br",
  },
  hero: {
    kicker: "LUCAS MENDES / CRIADOR DIGITAL",
    edition: "FRAME 001 // DIGITAL SPACE",
    headlinePart1: "Entre câmeras, ideias e ",
    headlineEmphasized: "histórias",
    headlinePart2: " que ainda vou contar.",
    complement: "Um espaço para conhecer meu trabalho, minhas conexões e tudo que faz parte dessa jornada.",
    scrollIndicator: "EXPLORE O UNIVERSO",
    technicalMetadata: "REC 24FPS // 4K DCI // AFTER THE CUT",
  },
  connections: {
    label: "01 / CONNECTIONS",
    title: "Explore meu universo.",
    description: "Pontos de contato com minha produção criativa, bastidores e narrativas visuais.",
    links: [
      {
        id: "instagram",
        number: "01",
        title: "Instagram",
        subtitle: "Acompanhe os bastidores e novos capítulos em tempo real.",
        url: "https://www.instagram.com/luskeraa", // Linktree original do Lucas: @luskeraa (também @ocabadosvideos)
        isExternal: true,
        type: "instagram",
      },
      {
        id: "youtube",
        number: "02",
        title: "YouTube",
        subtitle: "Histórias, vídeos e novas experiências em profundidade.",
        url: "https://youtube.com/@lucasmendes4023?si=h99QhFCJOl7IlQm5", // Link extraído do Linktree
        isExternal: true,
        type: "youtube",
      },
      {
        id: "setup",
        number: "03",
        title: "Meu setup",
        subtitle: "Os equipamentos que fazem parte das minhas produções.",
        url: "#setup",
        isExternal: false,
        type: "setup",
      },
      {
        id: "contact",
        number: "04",
        title: "Vamos conversar?",
        subtitle: "Conexões, projetos comerciais e novas ideias.",
        url: "#contato",
        isExternal: false,
        type: "whatsapp",
      },
    ] as SocialLink[],
  },
  setup: {
    label: "02 / THE SETUP",
    title: "As ferramentas por trás das ideias.",
    complement: "Equipamentos que fazem parte do meu processo criativo diário.",
    affiliateNotice: "Curadoria pessoal. Links de parceiros para aquisição direta com desconto e suporte ao canal.",
    items: [
      {
        id: "ulanzi-j12",
        tag: "GEAR // 01",
        name: "Ulanzi J12",
        category: "Microfone Sem Fio Duplo",
        description: "Sistema sem fio compacto plug-and-play para smartphones com captação omnidirecional, redução de ruído ativa e estojo de recarga para gravações contínuas.",
        url: "https://s.click.aliexpress.com/e/_DFMYDvh", // Link real extraído do Linktree do Lucas
        isAvailable: true,
        isAffiliate: true,
        specs: ["Dual Mic Plug & Play", "Estojo de Carregamento", "Alcance de até 20m"],
      },
      {
        id: "ulanzi-vl49",
        tag: "GEAR // 02",
        name: "Ulanzi VL49 RGB",
        category: "Iluminação LED Compacta",
        description: "Painel de luz LED portátil recarregável com montagem de sapata fria, controle de temperatura de cor e modos RGB para preenchimento e luz de recorte.",
        url: "https://s.click.aliexpress.com/e/_DdvEZxd", // Link real extraído do Linktree do Lucas
        isAvailable: true,
        isAffiliate: true,
        specs: ["Bateria 2000mAh", "Sapata 3 Cold Shoes", "Controle RGB 360°"],
      },
    ] as SetupEquipment[],
  },
  contact: {
    label: "03 / NEXT CHAPTER",
    headlinePart1: "Toda boa história começa com uma ",
    headlineEmphasized: "conexão.",
    headlinePart2: "",
    complement: "Tem uma ideia, um projeto ou simplesmente quer trocar uma conversa? Vamos nos conectar.",
    ctaText: "Vamos conversar",
    ctaUrl: "https://wa.me/?text=Ol%C3%A1%20Lucas!%20Vim%20pelo%20seu%20Digital%20Space%20e%20gostaria%20de%20conversar.",
    secondaryCta: "Instagram Direct",
    secondaryUrl: "https://ig.me/m/luskeraa",
    email: "contato.luskera@gmail.com",
  },
  footer: {
    brand: "LUSKERA.",
    signature: "DIGITAL SPACE",
    copyright: "LUCAS MENDES © 2026",
    tagline: "Made for the next chapter.",
    socials: [
      { name: "Instagram", url: "https://www.instagram.com/luskeraa" },
      { name: "YouTube", url: "https://youtube.com/@lucasmendes4023?si=h99QhFCJOl7IlQm5" },
    ],
  },
};
