export type Language = 'es' | 'en' | 'pt' | 'fr' | 'it' | 'de' | 'jp' | 'zh';

export interface Translation {
  nav: {
    home: string;
    about: string;
    projects: string;
    tech: string;
    services: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    metrics: {
      projects: string;
      tech: string;
      sectors: string;
    };
  };
  about: {
    title: string;
    description: string;
    focus: string;
    innovation: string;
  };
  portfolio: {
    title: string;
    viewProject: string;
    details: string;
    problem: string;
    solution: string;
    projects: {
      fugas: {
        name: string;
        desc: string;
        problem: string;
        solution: string;
      };
      fitness: {
        name: string;
        desc: string;
        problem: string;
        solution: string;
      };
    };
  };
  tech: {
    title: string;
    frontend: string;
    backend: string;
    ai: string;
  };
  sectors: {
    title: string;
    ecommerce: string;
    services: string;
    construction: string;
    health: string;
    education: string;
    startups: string;
    tech: string;
  };
  solutions: {
    title: string;
    web: string;
    landing: string;
    custom: string;
    automation: string;
    dashboards: string;
    ai: string;
    portals: string;
  };
  process: {
    title: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    step5: string;
  };
  recruiters: {
    title: string;
    downloadCV: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    company: string;
    projectType: string;
    message: string;
    button: string;
  };
}

export const translations: Record<Language, Translation> = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      projects: "Proyectos",
      tech: "Tecnologías",
      services: "Soluciones",
      contact: "Contacto",
    },
    hero: {
      title: "Desarrollo soluciones digitales inteligentes que impulsan negocios.",
      subtitle: "Creación de sitios web modernos, automatización de procesos y experiencias digitales de alto impacto.",
      cta1: "Ver proyectos",
      cta2: "Contactar ahora",
      metrics: {
        projects: "Proyectos Reales",
        tech: "Tecnologías",
        sectors: "Sectores Atendidos",
      },
    },
    about: {
      title: "Sobre Mí",
      description: "Experto en desarrollo web con enfoque en soluciones tecnológicas de alto impacto. Mi visión es transformar ideas en plataformas digitales optimizadas.",
      focus: "Optimización de procesos con tecnología de vanguardia.",
      innovation: "Visión de innovación constante y capacidad técnica probada.",
    },
    portfolio: {
      title: "Portafolio de Proyectos",
      viewProject: "Ver proyecto",
      details: "Detalles técnicos",
      problem: "Problema del cliente",
      solution: "Solución desarrollada",
      projects: {
        fugas: {
          name: "Detección de Fugas de Agua",
          desc: "Sitio web diseñado para empresas de detección de fugas utilizando herramientas especializadas.",
          problem: "Necesidad de una presencia digital profesional para captar clientes en un sector técnico.",
          solution: "Plataforma interactiva con presentación de servicios y herramientas de contacto rápido.",
        },
        fitness: {
          name: "Outlet Fitness",
          desc: "Plataforma web moderna para presentación de productos deportivos con diseño atractivo.",
          problem: "Falta de una vitrina digital optimizada para la conversión de productos fitness.",
          solution: "E-commerce visualmente impactante con navegación fluida y enfoque en ventas.",
        },
      },
    },
    tech: {
      title: "Tecnologías",
      frontend: "Frontend",
      backend: "Backend & APIs",
      ai: "Inteligencia Aplicada",
    },
    sectors: {
      title: "Sectores a los que ayudo",
      ecommerce: "Comercio Electrónico",
      services: "Empresas de Servicios",
      construction: "Construcción",
      health: "Salud",
      education: "Educación",
      startups: "Startups",
      tech: "Tecnología",
    },
    solutions: {
      title: "Soluciones que Desarrollo",
      web: "Sitios Web Profesionales",
      landing: "Landing Pages de Alta Conversión",
      custom: "Sistemas Web Personalizados",
      automation: "Automatización Digital",
      dashboards: "Dashboards de Datos",
      ai: "Integración de IA",
      portals: "Portales Empresariales",
    },
    process: {
      title: "Proceso de Trabajo",
      step1: "Análisis del proyecto",
      step2: "Diseño de la solución",
      step3: "Desarrollo tecnológico",
      step4: "Pruebas de calidad",
      step5: "Implementación final",
    },
    recruiters: {
      title: "Sección para Reclutadores",
      downloadCV: "Descargar CV",
    },
    contact: {
      title: "Contacto",
      name: "Nombre",
      email: "Email",
      company: "Empresa",
      projectType: "Tipo de proyecto",
      message: "Mensaje",
      button: "Iniciar proyecto",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      projects: "Projects",
      tech: "Technologies",
      services: "Solutions",
      contact: "Contact",
    },
    hero: {
      title: "Developing intelligent digital solutions that drive business.",
      subtitle: "Creation of modern websites, process automation, and high-impact digital experiences.",
      cta1: "View projects",
      cta2: "Contact now",
      metrics: {
        projects: "Real Projects",
        tech: "Technologies",
        sectors: "Sectors Served",
      },
    },
    about: {
      title: "About Me",
      description: "Web development expert focused on high-impact technological solutions. My vision is to transform ideas into optimized digital platforms.",
      focus: "Process optimization with cutting-edge technology.",
      innovation: "Constant innovation vision and proven technical capability.",
    },
    portfolio: {
      title: "Project Portfolio",
      viewProject: "View project",
      details: "Technical details",
      problem: "Client problem",
      solution: "Developed solution",
      projects: {
        fugas: {
          name: "Water Leak Detection",
          desc: "Website designed for leak detection companies using specialized tools.",
          problem: "Need for a professional digital presence to attract clients in a technical sector.",
          solution: "Interactive platform with service presentation and quick contact tools.",
        },
        fitness: {
          name: "Outlet Fitness",
          desc: "Modern web platform for presenting sports products with attractive design.",
          problem: "Lack of an optimized digital showcase for fitness product conversion.",
          solution: "Visually impactful e-commerce with smooth navigation and sales focus.",
        },
      },
    },
    tech: {
      title: "Technologies",
      frontend: "Frontend",
      backend: "Backend & APIs",
      ai: "Applied Intelligence",
    },
    sectors: {
      title: "Sectors I Help",
      ecommerce: "E-commerce",
      services: "Service Companies",
      construction: "Construction",
      health: "Health",
      education: "Education",
      startups: "Startups",
      tech: "Technology",
    },
    solutions: {
      title: "Solutions I Develop",
      web: "Professional Websites",
      landing: "High-Conversion Landing Pages",
      custom: "Custom Web Systems",
      automation: "Digital Automation",
      dashboards: "Data Dashboards",
      ai: "AI Integration",
      portals: "Business Portals",
    },
    process: {
      title: "Work Process",
      step1: "Project analysis",
      step2: "Solution design",
      step3: "Technological development",
      step4: "Quality testing",
      step5: "Final implementation",
    },
    recruiters: {
      title: "Recruiter Section",
      downloadCV: "Download CV",
    },
    contact: {
      title: "Contact",
      name: "Name",
      email: "Email",
      company: "Company",
      projectType: "Project type",
      message: "Message",
      button: "Start project",
    },
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre Mim",
      projects: "Projetos",
      tech: "Tecnologias",
      services: "Soluções",
      contact: "Contato",
    },
    hero: {
      title: "Desenvolvendo soluções digitais inteligentes que impulsionam negócios.",
      subtitle: "Criação de sites modernos, automação de processos e experiências digitais de alto impacto.",
      cta1: "Ver projetos",
      cta2: "Contato agora",
      metrics: {
        projects: "Projetos Reais",
        tech: "Tecnologias",
        sectors: "Setores Atendidos",
      },
    },
    about: {
      title: "Sobre Mim",
      description: "Especialista em desenvolvimento web focado em soluções tecnológicas de alto impacto. Minha visão é transformar ideias em plataformas digitais otimizadas.",
      focus: "Otimização de processos com tecnologia de ponta.",
      innovation: "Visão de inovação constante e capacidade técnica comprovada.",
    },
    portfolio: {
      title: "Portfólio de Projetos",
      viewProject: "Ver projeto",
      details: "Detalhes técnicos",
      problem: "Problema do cliente",
      solution: "Solução desenvolvida",
      projects: {
        fugas: {
          name: "Detecção de Vazamentos de Água",
          desc: "Site desenvolvido para empresas de detecção de vazamentos usando ferramentas especializadas.",
          problem: "Necessidade de uma presença digital profesional para atrair clientes em um setor técnico.",
          solution: "Plataforma interativa com apresentação de serviços e ferramentas de contato rápido.",
        },
        fitness: {
          name: "Outlet Fitness",
          desc: "Plataforma web moderna para apresentação de produtos esportivos com design atraente.",
          problem: "Falta de uma vitrine digital otimizada para a conversão de produtos fitness.",
          solution: "E-commerce visualmente impactante com navegação fluida e foco em vendas.",
        },
      },
    },
    tech: {
      title: "Tecnologias",
      frontend: "Frontend",
      backend: "Backend & APIs",
      ai: "Inteligência Aplicada",
    },
    sectors: {
      title: "Setores que Ajudamos",
      ecommerce: "E-commerce",
      services: "Empresas de Serviços",
      construction: "Construção",
      health: "Saúde",
      education: "Educação",
      startups: "Startups",
      tech: "Tecnologia",
    },
    solutions: {
      title: "Soluções que Desenvolvo",
      web: "Sites Profissionais",
      landing: "Landing Pages de Alta Conversión",
      custom: "Sistemas Web Personalizados",
      automation: "Automação Digital",
      dashboards: "Dashboards de Dados",
      ai: "Integração de IA",
      portals: "Portais Empresariais",
    },
    process: {
      title: "Processo de Trabalho",
      step1: "Análise do projeto",
      step2: "Design da solução",
      step3: "Desenvolvimento tecnológico",
      step4: "Testes de qualidade",
      step5: "Implementação final",
    },
    recruiters: {
      title: "Seção para Recrutadores",
      downloadCV: "Baixar CV",
    },
    contact: {
      title: "Contato",
      name: "Nome",
      email: "Email",
      company: "Empresa",
      projectType: "Tipo de projeto",
      message: "Mensaje",
      button: "Iniciar projeto",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      tech: "Technologies",
      services: "Solutions",
      contact: "Contact",
    },
    hero: {
      title: "Développement de solutions numériques intelligentes qui stimulent les entreprises.",
      subtitle: "Création de sites web modernes, automatisation des processus et expériences numériques à fort impact.",
      cta1: "Voir les projets",
      cta2: "Contactez-nous",
      metrics: {
        projects: "Projets Réels",
        tech: "Technologies",
        sectors: "Secteurs Desservis",
      },
    },
    about: {
      title: "À propos de moi",
      description: "Expert en développement web axé sur des solutions technologiques à fort impact. Ma vision est de transformer les idées en plateformes numériques optimisées.",
      focus: "Optimisation des processus avec une technologie de pointe.",
      innovation: "Vision d'innovation constante et capacité technique prouvée.",
    },
    portfolio: {
      title: "Portefeuille de Projets",
      viewProject: "Voir le projet",
      details: "Détails techniques",
      problem: "Problème client",
      solution: "Solution développée",
      projects: {
        fugas: {
          name: "Détection de Fuites d'Eau",
          desc: "Site web conçu pour les entreprises de détection de fuites utilisant des outils spécialisés.",
          problem: "Besoin d'une présence numérique professionnelle pour attirer des clients dans un secteur technique.",
          solution: "Plateforme interactive avec présentation des services et outils de contact rapide.",
        },
        fitness: {
          name: "Outlet Fitness",
          desc: "Plateforme web moderne pour la présentation de produits sportifs avec un design attrayant.",
          problem: "Manque d'une vitrine numérique optimisée pour la conversion des produits de fitness.",
          solution: "E-commerce visuellement percutant avec une navigation fluide et un focus sur les ventes.",
        },
      },
    },
    tech: {
      title: "Technologies",
      frontend: "Frontend",
      backend: "Backend & APIs",
      ai: "Intelligence Appliquée",
    },
    sectors: {
      title: "Secteurs que j'aide",
      ecommerce: "E-commerce",
      services: "Entreprises de Services",
      construction: "Construction",
      health: "Santé",
      education: "Éducation",
      startups: "Startups",
      tech: "Technologie",
    },
    solutions: {
      title: "Solutions que je développe",
      web: "Sites Web Professionnels",
      landing: "Landing Pages à Haute Conversion",
      custom: "Systèmes Web Personnalisés",
      automation: "Automatisation Numérique",
      dashboards: "Tableaux de Bord de Données",
      ai: "Intégration de l'IA",
      portals: "Portails d'Entreprise",
    },
    process: {
      title: "Processus de Travail",
      step1: "Analyse du projet",
      step2: "Conception de la solution",
      step3: "Développement technologique",
      step4: "Tests de qualité",
      step5: "Mise en œuvre finale",
    },
    recruiters: {
      title: "Section Recruteurs",
      downloadCV: "Télécharger le CV",
    },
    contact: {
      title: "Contact",
      name: "Nom",
      email: "Email",
      company: "Entreprise",
      projectType: "Type de projet",
      message: "Message",
      button: "Démarrer le projet",
    },
  },
  it: {
    nav: {
      home: "Inizio",
      about: "Su di me",
      projects: "Progetti",
      tech: "Tecnologie",
      services: "Soluzioni",
      contact: "Contatto",
    },
    hero: {
      title: "Sviluppo soluzioni digitali intelligenti che guidano il business.",
      subtitle: "Creazione di siti web moderni, automazione dei processi ed esperienze digitali ad alto impatto.",
      cta1: "Vedi progetti",
      cta2: "Contatta ora",
      metrics: {
        projects: "Progetti Reali",
        tech: "Tecnologie",
        sectors: "Settori Serviti",
      },
    },
    about: {
      title: "Su di me",
      description: "Esperto di sviluppo web focalizzato su soluzioni tecnologiche ad alto impatto. La mia visione è trasformare le idee in piattaforme digitali ottimizzate.",
      focus: "Ottimizzazione dei processi con tecnologia all'avanguardia.",
      innovation: "Visione di innovazione costante e comprovata capacità tecnica.",
    },
    portfolio: {
      title: "Portafoglio Progetti",
      viewProject: "Vedi progetto",
      details: "Dettagli tecnici",
      problem: "Problema del cliente",
      solution: "Soluzione sviluppata",
      projects: {
        fugas: {
          name: "Rilevamento Perdite d'Acqua",
          desc: "Sito web progettato per aziende di rilevamento perdite utilizzando strumenti specializzati.",
          problem: "Necessità di una presenza digitale professionale per attirare clienti in un settore tecnico.",
          solution: "Piattaforma interattiva con presentazione dei servizi e strumenti di contatto rapido.",
        },
        fitness: {
          name: "Outlet Fitness",
          desc: "Moderna piattaforma web per la presentazione di prodotti sportivi con un design accattivante.",
          problem: "Mancanza di una vetrina digitale ottimizzata per la conversione dei prodotti fitness.",
          solution: "E-commerce visivamente impattante con navigazione fluida e focus sulle vendite.",
        },
      },
    },
    tech: {
      title: "Tecnologie",
      frontend: "Frontend",
      backend: "Backend & API",
      ai: "Intelligenza Applicata",
    },
    sectors: {
      title: "Settori che aiuto",
      ecommerce: "E-commerce",
      services: "Aziende di Servizi",
      construction: "Costruzione",
      health: "Salute",
      education: "Istruzione",
      startups: "Startup",
      tech: "Tecnologia",
    },
    solutions: {
      title: "Soluzioni che Sviluppo",
      web: "Siti Web Professionali",
      landing: "Landing Page ad Alta Conversione",
      custom: "Sistemi Web Personalizzati",
      automation: "Automazione Digitale",
      dashboards: "Dashboard Dati",
      ai: "Integrazione IA",
      portals: "Portali Aziendali",
    },
    process: {
      title: "Processo di Lavoro",
      step1: "Analisi del progetto",
      step2: "Design della soluzione",
      step3: "Sviluppo tecnologico",
      step4: "Test di qualità",
      step5: "Implementazione finale",
    },
    recruiters: {
      title: "Sezione Reclutatori",
      downloadCV: "Scarica CV",
    },
    contact: {
      title: "Contatto",
      name: "Nome",
      email: "Email",
      company: "Azienda",
      projectType: "Tipo di progetto",
      message: "Messaggio",
      button: "Inizia progetto",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      about: "Über mich",
      projects: "Projekte",
      tech: "Technologien",
      services: "Lösungen",
      contact: "Kontakt",
    },
    hero: {
      title: "Entwicklung intelligenter digitaler Lösungen, die das Geschäft vorantreiben.",
      subtitle: "Erstellung moderner Websites, Prozessautomatisierung und wirkungsvoller digitaler Erlebnisse.",
      cta1: "Projekte ansehen",
      cta2: "Jetzt kontaktieren",
      metrics: {
        projects: "Echte Projekte",
        tech: "Technologien",
        sectors: "Bediente Sektoren",
      },
    },
    about: {
      title: "Über mich",
      description: "Experte für Webentwicklung mit Fokus auf wirkungsvolle technologische Lösungen. Meine Vision ist es, Ideen in optimierte digitale Plattformen zu verwandeln.",
      focus: "Prozessoptimierung mit modernster Technologie.",
      innovation: "Ständige Innovationsvision und bewährte technische Fähigkeiten.",
    },
    portfolio: {
      title: "Projektportfolio",
      viewProject: "Projekt ansehen",
      details: "Technische Details",
      problem: "Kundenproblem",
      solution: "Entwickelte Lösung",
      projects: {
        fugas: {
          name: "Wasserlecksuche",
          desc: "Website für Lecksuche-Unternehmen mit spezialisierten Werkzeugen.",
          problem: "Bedarf an einer professionellen digitalen Präsenz zur Kundengewinnung in einem technischen Sektor.",
          solution: "Interaktive Plattform mit Servicepräsentation und Schnellkontakt-Tools.",
        },
        fitness: {
          name: "Outlet Fitness",
          desc: "Moderne Webplattform zur Präsentation von Sportprodukten mit ansprechendem Design.",
          problem: "Fehlen eines optimierten digitalen Schaufensters für die Konversion von Fitnessprodukten.",
          solution: "Visuell beeindruckender E-Commerce mit reibungsloser Navigation und Verkaufsfokus.",
        },
      },
    },
    tech: {
      title: "Technologien",
      frontend: "Frontend",
      backend: "Backend & APIs",
      ai: "Angewandte Intelligenz",
    },
    sectors: {
      title: "Sektoren, denen ich helfe",
      ecommerce: "E-Commerce",
      services: "Dienstleistungsunternehmen",
      construction: "Bauwesen",
      health: "Gesundheit",
      education: "Bildung",
      startups: "Startups",
      tech: "Technologie",
    },
    solutions: {
      title: "Lösungen, die ich entwickle",
      web: "Professionelle Websites",
      landing: "Hochkonvertierende Landingpages",
      custom: "Maßgeschneiderte Websysteme",
      automation: "Digitale Automatisierung",
      dashboards: "Daten-Dashboards",
      ai: "KI-Integration",
      portals: "Unternehmensportale",
    },
    process: {
      title: "Arbeitsprozess",
      step1: "Projektanalyse",
      step2: "Lösungsdesign",
      step3: "Technologische Entwicklung",
      step4: "Qualitätstests",
      step5: "Endgültige Implementierung",
    },
    recruiters: {
      title: "Recruiter-Bereich",
      downloadCV: "Lebenslauf herunterladen",
    },
    contact: {
      title: "Kontakt",
      name: "Name",
      email: "E-Mail",
      company: "Unternehmen",
      projectType: "Projekttyp",
      message: "Nachricht",
      button: "Projekt starten",
    },
  },
  jp: {
    nav: {
      home: "ホーム",
      about: "私について",
      projects: "プロジェクト",
      tech: "テクノロジー",
      services: "ソリューション",
      contact: "お問い合わせ",
    },
    hero: {
      title: "ビジネスを推進するインテリジェントなデジタルソリューションを開発します。",
      subtitle: "最新のウェブサイト作成、プロセス自動化、高インパクトなデジタル体験。",
      cta1: "プロジェクトを見る",
      cta2: "今すぐ連絡",
      metrics: {
        projects: "実プロジェクト",
        tech: "テクノロジー",
        sectors: "対応セクター",
      },
    },
    about: {
      title: "私について",
      description: "高インパクトな技術ソリューションに焦点を当てたウェブ開発の専門家。私のビジョンは、アイデアを最適化されたデジタルプラットフォームに変えることです。",
      focus: "最先端技術によるプロセス最適化。",
      innovation: "絶え間ない革新のビジョンと実証された技術力。",
    },
    portfolio: {
      title: "プロジェクトポートフォリオ",
      viewProject: "プロジェクトを見る",
      details: "技術詳細",
      problem: "クライアントの課題",
      solution: "開発されたソリューション",
      projects: {
        fugas: {
          name: "水漏れ検知",
          desc: "専門ツールを使用する漏水検知会社向けに設計されたウェブサイト。",
          problem: "技術分野で顧客を獲得するためのプロフェッショナルなデジタルプレゼンスの必要性。",
          solution: "サービス紹介とクイックコンタクトツールを備えたインタラクティブなプラットフォーム。",
        },
        fitness: {
          name: "アウトレットフィットネス",
          desc: "魅力的なデザインでスポーツ製品を紹介する最新のウェブプラットフォーム。",
          problem: "フィットネス製品のコンバージョンに最適化されたデジタルショーケースの不足。",
          solution: "スムーズなナビゲーションと販売に焦点を当てた、視覚的にインパクトのあるEコマース。",
        },
      },
    },
    tech: {
      title: "テクノロジー",
      frontend: "フロントエンド",
      backend: "バックエンド & API",
      ai: "応用知能",
    },
    sectors: {
      title: "支援セクター",
      ecommerce: "Eコマース",
      services: "サービス企業",
      construction: "建設",
      health: "健康",
      education: "教育",
      startups: "スタートアップ",
      tech: "テクノロジー",
    },
    solutions: {
      title: "開発ソリューション",
      web: "プロフェッショナルウェブサイト",
      landing: "高コンバージョンランディングページ",
      custom: "カスタムウェブシステム",
      automation: "デジタル自動化",
      dashboards: "データダッシュボード",
      ai: "AI統合",
      portals: "ビジネスポータル",
    },
    process: {
      title: "作業プロセス",
      step1: "プロジェクト分析",
      step2: "ソリューション設計",
      step3: "技術開発",
      step4: "品質テスト",
      step5: "最終実装",
    },
    recruiters: {
      title: "リクルーターセクション",
      downloadCV: "CVをダウンロード",
    },
    contact: {
      title: "お問い合わせ",
      name: "お名前",
      email: "メールアドレス",
      company: "会社名",
      projectType: "プロジェクトタイプ",
      message: "メッセージ",
      button: "プロジェクト開始",
    },
  },
  zh: {
    nav: {
      home: "首页",
      about: "关于我",
      projects: "项目",
      tech: "技术",
      services: "解决方案",
      contact: "联系我们",
    },
    hero: {
      title: "开发推动业务发展的智能数字化解决方案。",
      subtitle: "创建现代网站、流程自动化和高影响力的数字化体验。",
      cta1: "查看项目",
      cta2: "立即联系",
      metrics: {
        projects: "实际项目",
        tech: "技术",
        sectors: "服务行业",
      },
    },
    about: {
      title: "关于我",
      description: "专注于高影响力技术解决方案的网站开发专家。我的愿景是将创意转化为优化的数字化平台。",
      focus: "利用尖端技术优化流程。",
      innovation: "不断的创新愿景和经过验证的技术能力。",
    },
    portfolio: {
      title: "项目组合",
      viewProject: "查看项目",
      details: "技术细节",
      problem: "客户问题",
      solution: "开发的解决方案",
      projects: {
        fugas: {
          name: "漏水检测",
          desc: "为使用专业工具的漏水检测公司设计的网站。",
          problem: "在技术领域吸引客户需要专业的数字化形象。",
          solution: "具有服务展示和快速联系工具的互动平台。",
        },
        fitness: {
          name: "健身奥特莱斯",
          desc: "用于展示体育产品的现代网站平台，设计极具吸引力。",
          problem: "缺乏针对健身产品转化的优化数字化展示。",
          solution: "具有流畅导航和销售重点的视觉冲击力强的电子商务。",
        },
      },
    },
    tech: {
      title: "技术",
      frontend: "前端",
      backend: "后端和 API",
      ai: "应用智能",
    },
    sectors: {
      title: "我服务的行业",
      ecommerce: "电子商务",
      services: "服务公司",
      construction: "建筑",
      health: "健康",
      education: "教育",
      startups: "初创公司",
      tech: "技术",
    },
    solutions: {
      title: "我开发的解决方案",
      web: "专业网站",
      landing: "高转化落地页",
      custom: "定制网站系统",
      automation: "数字化自动化",
      dashboards: "数据仪表板",
      ai: "AI 集成",
      portals: "企业门户",
    },
    process: {
      title: "工作流程",
      step1: "项目分析",
      step2: "方案设计",
      step3: "技术开发",
      step4: "质量测试",
      step5: "最终实施",
    },
    recruiters: {
      title: "招聘人员板块",
      downloadCV: "下载简历",
    },
    contact: {
      title: "联系我们",
      name: "姓名",
      email: "电子邮件",
      company: "公司",
      projectType: "项目类型",
      message: "留言",
      button: "启动项目",
    },
  },
};
