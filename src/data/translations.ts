export type Language = 'es' | 'en' | 'pt' | 'fr';

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
          problem: "Necessidade de uma presença digital profissional para atrair clientes em um setor técnico.",
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
      landing: "Landing Pages de Alta Conversão",
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
      message: "Mensagem",
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
};
