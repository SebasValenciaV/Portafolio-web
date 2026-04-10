export type Language = 'es' | 'en' | 'pt' | 'fr' | 'it' | 'de' | 'jp' | 'zh';

export interface Translation {
  nav: {
    home: string;
    about: string;
    projects: string;
    tech: string;
    services: string;
    contact: string;
    dashboard: string;
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
    heading: string;
    description: string;
    downloadCV: string;
    viewRepos: string;
    playMatchMaster: string;
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    callUs: string;
    email: string;
    name: string;
    company: string;
    projectType: string;
    projectTypePlaceholder: string;
    projectTypeWeb: string;
    projectTypeApp: string;
    projectTypeAutomation: string;
    projectTypeOther: string;
    message: string;
    messagePlaceholder: string;
    button: string;
    success: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    companyPlaceholder: string;
  };
  dashboard: {
    title: string;
    subtitle: string;
    localTime: string;
    sessionTime: string;
    aiStatus: string;
    aiOptimal: string;
    aiSystemsOnline: string;
    openChat: string;
    networkTest: string;
    measuring: string;
    optimal: string;
    acceptable: string;
    slow: string;
    download: string;
    upload: string;
    calculating: string;
    repeatTest: string;
    startTest: string;
    globalAiInvestment: string;
    aiModelEvolution: string;
    parameters: string;
    milestone: string;
    billions: string;
    searchingLocation: string;
    unknownLocation: string;
    activityDetected: string;
    techEvents: {
      transformer: string;
      gpt2: string;
      gpt3: string;
      copilot: string;
      chatgpt: string;
      llmEra: string;
      multimodal: string;
      quantum: string;
      agi: string;
    };
  };
  footer: {
    description: string;
    quickLinks: string;
    rights: string;
  };
  customizer: {
    title: string;
    mainColor: string;
    displayMode: string;
    dark: string;
    light: string;
    visualEffects: string;
    intensity: string;
    animations: string;
    ambientMusic: string;
    volume: string;
    description: string;
  };
  music: {
    ambientMusic: string;
  };
  whatsapp: {
    message: string;
  };
  game: {
    title: string;
    description: string;
    controls: string;
    movement: string;
    shoot: string;
    mobile: string;
    mobileDesc: string;
    startMission: string;
    missionFailed: string;
    shipDestroyed: string;
    score: string;
    enemies: string;
    level: string;
    time: string;
    playAgain: string;
  };
  chatbot: {
    welcome: string;
    resetHistory: string;
    error: string;
    faq: string;
    placeholder: string;
    localInfo: string;
    assistantName: string;
    offline: string;
    resetTitle: string;
    helpCommand: string;
    fallback: string;
    cleaning: string;
    cleaned: string;
    services: string;
    portfolio: string;
    tech: string;
    experience: string;
    prices: string;
    contact: string;
    location: string;
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
      dashboard: "Dashboard",
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
      heading: "¿Buscas talento tecnológico?",
      description: "He desarrollado proyectos de alto impacto utilizando las tecnologías más modernas del mercado. Mi enfoque está en la escalabilidad, el rendimiento y la experiencia de usuario.",
      downloadCV: "Descargar CV",
      viewRepos: "Ver Repositorios",
      playMatchMaster: "Jugar Match Master",
    },
    contact: {
      title: "Contacto",
      subtitle: "Iniciemos tu próximo gran proyecto digital.",
      description: "Estoy listo para ayudarte a transformar tus ideas en soluciones tecnológicas de alto impacto. Contáctame hoy mismo.",
      callUs: "Llámanos",
      email: "Email",
      name: "Nombre",
      company: "Empresa",
      projectType: "Tipo de proyecto",
      projectTypePlaceholder: "Seleccionar tipo",
      projectTypeWeb: "Sitio Web",
      projectTypeApp: "Aplicación Web",
      projectTypeAutomation: "Automatización",
      projectTypeOther: "Otro",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      button: "Iniciar proyecto",
      success: "¡Mensaje Enviado!",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      companyPlaceholder: "Nombre de tu empresa",
    },
    dashboard: {
      title: "Métricas en Tiempo Real",
      subtitle: "Visualiza el crecimiento tecnológico y el avance de la inteligencia artificial con datos históricos reales, junto con métricas de tu sesión actual.",
      localTime: "Hora Local",
      sessionTime: "Tiempo de Sesión",
      aiStatus: "Estado IA",
      aiOptimal: "Óptimo",
      aiSystemsOnline: "Sistemas en línea",
      openChat: "Abrir Chat",
      networkTest: "Test de Red",
      measuring: "Midiendo...",
      optimal: "Óptimo",
      acceptable: "Aceptable",
      slow: "Lento",
      download: "Descarga",
      upload: "Carga",
      calculating: "Calculando",
      repeatTest: "Repetir Test",
      startTest: "Iniciar Test",
      globalAiInvestment: "Inversión Global en IA",
      aiModelEvolution: "Evolución de Modelos IA (Parámetros)",
      parameters: "Parámetros",
      milestone: "Hito",
      billions: "Billones USD",
      searchingLocation: "Buscando ubicación...",
      unknownLocation: "Ubicación Desconocida",
      activityDetected: "Actividad detectada",
      techEvents: {
        transformer: "Primeros modelos Transformer",
        gpt2: "GPT-2 demuestra capacidades de texto",
        gpt3: "GPT-3 revoluciona el NLP",
        copilot: "Auge de GitHub Copilot y AlphaFold",
        chatgpt: "Lanzamiento de ChatGPT (OpenAI)",
        llmEra: "Era de los LLMs (GPT-4, Gemini)",
        multimodal: "IA Multimodal y Agentes Autónomos",
        quantum: "IA Cuántica y Razonamiento Avanzado",
        agi: "AGI Temprana y Adopción Masiva",
      },
    },
    footer: {
      description: "Desarrollo de soluciones digitales inteligentes que impulsan negocios. Creación de sitios web modernos y experiencias digitales de alto impacto.",
      quickLinks: "Enlaces Rápidos",
      rights: "Todos los derechos reservados.",
    },
    customizer: {
      title: "Personalización",
      mainColor: "Color Principal",
      displayMode: "Modo de Visualización",
      dark: "Oscuro",
      light: "Claro",
      visualEffects: "Efectos Visuales",
      intensity: "Intensidad",
      animations: "Animaciones",
      ambientMusic: "Música Ambiental",
      volume: "Volumen",
      description: "Personaliza tu experiencia para que el portafolio se adapte a tu estilo visual preferido.",
    },
    music: {
      ambientMusic: "Ambient Music",
    },
    whatsapp: {
      message: "Hola Sebas, vi tu portafolio y me gustaría obtener más información sobre tus servicios.",
    },
    game: {
      title: "Space Defender",
      description: "Defiende la galaxia. Esquiva planetas, destruye enemigos y alcanza el nivel máximo.",
      controls: "Controles:",
      movement: "para moverte",
      shoot: "para disparar",
      mobile: "Móvil:",
      mobileDesc: "Toca y arrastra para moverte y disparar.",
      startMission: "Iniciar Misión",
      missionFailed: "Misión Fallida",
      shipDestroyed: "Tu nave ha sido destruida.",
      score: "Puntaje",
      enemies: "Enemigos",
      level: "Nivel",
      time: "Tiempo",
      playAgain: "Jugar de Nuevo",
    },
    chatbot: {
      welcome: "¡Hola! Soy tu asistente virtual inteligente. 👋\n\nEstoy aquí para ayudarte a conocer mejor este sitio, mis servicios, tecnologías y experiencia. Todo funciona de forma local y privada.\n\n¿En qué puedo ayudarte hoy? Puedes usar los botones de abajo o escribirme directamente.",
      resetHistory: "Historial de conversación limpiado. 👋\n\n¿En qué puedo ayudarte ahora?",
      error: "Ups, algo salió mal en mi lógica local.",
      faq: "Preguntas frecuentes",
      placeholder: "Escribe tu duda o /ayuda...",
      localInfo: "Funciona localmente. Prueba comandos como /servicios o /contacto.",
      assistantName: "Asistente Local",
      offline: "100% Offline",
      resetTitle: "Reiniciar conversación",
      helpCommand: "Puedo informarte sobre mis servicios, tecnologías, contacto, ubicación, horarios y portafolio. También puedes usar comandos como /servicios, /contacto o /limpiar.",
      fallback: "Lo siento, no tengo una respuesta específica para eso en mi base de datos local. 😅\n\n¿Podrías intentar preguntarme sobre mis servicios, tecnologías, portafolio o contacto? También puedes usar los botones de acceso rápido de abajo.",
      cleaning: "Limpiando...",
      cleaned: "Historial de conversación limpiado.",
      services: "Servicios",
      portfolio: "Portafolio",
      tech: "Tecnologías",
      experience: "Experiencia",
      prices: "Precios",
      contact: "Contacto",
      location: "Ubicación",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      projects: "Projects",
      tech: "Tech Stack",
      services: "Services",
      contact: "Contact",
      dashboard: "Dashboard",
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
      heading: "Looking for tech talent?",
      description: "I have developed high-impact projects using the most modern technologies on the market. My focus is on scalability, performance, and user experience.",
      downloadCV: "Download CV",
      viewRepos: "View Repositories",
      playMatchMaster: "Play Match Master",
    },
    contact: {
      title: "Contact",
      subtitle: "Let's start your next big digital project.",
      description: "I'm ready to help you transform your ideas into high-impact technological solutions. Contact me today.",
      callUs: "Call us",
      email: "Email",
      name: "Name",
      company: "Company",
      projectType: "Project type",
      projectTypePlaceholder: "Select type",
      projectTypeWeb: "Website",
      projectTypeApp: "Web Application",
      projectTypeAutomation: "Automation",
      projectTypeOther: "Other",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      button: "Start project",
      success: "Message Sent!",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@email.com",
      companyPlaceholder: "Your company name",
    },
    dashboard: {
      title: "Real-Time Metrics",
      subtitle: "Visualize technological growth and the advancement of artificial intelligence with real historical data, along with metrics from your current session.",
      localTime: "Local Time",
      sessionTime: "Session Time",
      aiStatus: "AI Status",
      aiOptimal: "Optimal",
      aiSystemsOnline: "Systems online",
      openChat: "Open Chat",
      networkTest: "Network Test",
      measuring: "Measuring...",
      optimal: "Optimal",
      acceptable: "Acceptable",
      slow: "Slow",
      download: "Download",
      upload: "Upload",
      calculating: "Calculating",
      repeatTest: "Repeat Test",
      startTest: "Start Test",
      globalAiInvestment: "Global AI Investment",
      aiModelEvolution: "AI Model Evolution (Parameters)",
      parameters: "Parameters",
      milestone: "Milestone",
      billions: "Billions USD",
      searchingLocation: "Searching location...",
      unknownLocation: "Unknown Location",
      activityDetected: "Activity detected",
      techEvents: {
        transformer: "First Transformer models",
        gpt2: "GPT-2 demonstrates text capabilities",
        gpt3: "GPT-3 revolutionizes NLP",
        copilot: "Rise of GitHub Copilot and AlphaFold",
        chatgpt: "ChatGPT Launch (OpenAI)",
        llmEra: "Era of LLMs (GPT-4, Gemini)",
        multimodal: "Multimodal AI and Autonomous Agents",
        quantum: "Quantum AI and Advanced Reasoning",
        agi: "Early AGI and Massive Adoption",
      },
    },
    footer: {
      description: "Developing intelligent digital solutions that drive business. Creation of modern websites and high-impact digital experiences.",
      quickLinks: "Quick Links",
      rights: "All rights reserved.",
    },
    customizer: {
      title: "Customization",
      mainColor: "Main Color",
      displayMode: "Display Mode",
      dark: "Dark",
      light: "Light",
      visualEffects: "Visual Effects",
      intensity: "Intensity",
      animations: "Animations",
      ambientMusic: "Ambient Music",
      volume: "Volume",
      description: "Customize your experience so the portfolio adapts to your preferred visual style.",
    },
    music: {
      ambientMusic: "Ambient Music",
    },
    whatsapp: {
      message: "Hi Sebas, I saw your portfolio and would like to get more information about your services.",
    },
    game: {
      title: "Space Defender",
      description: "Defend the galaxy. Dodge planets, destroy enemies, and reach the maximum level.",
      controls: "Controls:",
      movement: "to move",
      shoot: "to shoot",
      mobile: "Mobile:",
      mobileDesc: "Touch and drag to move and shoot.",
      startMission: "Start Mission",
      missionFailed: "Mission Failed",
      shipDestroyed: "Your ship has been destroyed.",
      score: "Score",
      enemies: "Enemies",
      level: "Level",
      time: "Time",
      playAgain: "Play Again",
    },
    chatbot: {
      welcome: "Hello! I am your intelligent virtual assistant. 👋\n\nI am here to help you get to know this site, my services, technologies, and experience better. Everything works locally and privately.\n\nHow can I help you today? You can use the buttons below or write to me directly.",
      resetHistory: "Conversation history cleared. 👋\n\nHow can I help you now?",
      error: "Oops, something went wrong in my local logic.",
      faq: "Frequently asked questions",
      placeholder: "Type your question or /help...",
      localInfo: "Works locally. Try commands like /services or /contact.",
      assistantName: "Local Assistant",
      offline: "100% Offline",
      resetTitle: "Reset conversation",
      helpCommand: "I can inform you about my services, technologies, contact, location, hours, and portfolio. You can also use commands like /services, /contact, or /clear.",
      fallback: "I'm sorry, I don't have a specific answer for that in my local database. 😅\n\nCould you try asking me about my services, technologies, portfolio, or contact? You can also use the quick access buttons below.",
      cleaning: "Cleaning...",
      cleaned: "Conversation history cleared.",
      services: "Services",
      portfolio: "Portfolio",
      tech: "Technologies",
      experience: "Experience",
      prices: "Prices",
      contact: "Contact",
      location: "Location",
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
      dashboard: "Dashboard",
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
      heading: "Procurando talento tecnológico?",
      description: "Desenvolvi projetos de alto impacto usando as tecnologias mais modernas do mercado. Meu foco é em escalabilidade, desempenho e experiência do usuário.",
      downloadCV: "Baixar CV",
      viewRepos: "Ver Repositórios",
      playMatchMaster: "Jogar Match Master",
    },
    contact: {
      title: "Contato",
      subtitle: "Vamos começar seu próximo grande projeto digital.",
      description: "Estou pronto para ajudá-lo a transformar suas ideias em soluções tecnológicas de alto impacto. Entre em contato comigo hoje mesmo.",
      callUs: "Ligue para nós",
      email: "Email",
      name: "Nome",
      company: "Empresa",
      projectType: "Tipo de projeto",
      projectTypePlaceholder: "Selecionar tipo",
      projectTypeWeb: "Site Web",
      projectTypeApp: "Aplicação Web",
      projectTypeAutomation: "Automação",
      projectTypeOther: "Outro",
      message: "Mensagem",
      messagePlaceholder: "Conte-me sobre seu projeto...",
      button: "Iniciar projeto",
      success: "Mensagem Enviada!",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "seu@email.com",
      companyPlaceholder: "Nome da sua empresa",
    },
    dashboard: {
      title: "Métricas em Tempo Real",
      subtitle: "Visualize o crescimento tecnológico e o avanço da inteligência artificial com dados históricos reais, junto com métricas da sua sessão atual.",
      localTime: "Hora Local",
      sessionTime: "Tempo de Sessão",
      aiStatus: "Estado IA",
      aiOptimal: "Ótimo",
      aiSystemsOnline: "Sistemas online",
      openChat: "Abrir Chat",
      networkTest: "Teste de Rede",
      measuring: "Medindo...",
      optimal: "Ótimo",
      acceptable: "Aceitável",
      slow: "Lento",
      download: "Download",
      upload: "Upload",
      calculating: "Calculando",
      repeatTest: "Repetir Teste",
      startTest: "Iniciar Teste",
      globalAiInvestment: "Investimento Global em IA",
      aiModelEvolution: "Evolução de Modelos IA (Parâmetros)",
      parameters: "Parâmetros",
      milestone: "Marco",
      billions: "Bilhões USD",
      searchingLocation: "Buscando localização...",
      unknownLocation: "Localização Desconhecida",
      activityDetected: "Atividade detectada",
      techEvents: {
        transformer: "Primeiros modelos Transformer",
        gpt2: "GPT-2 demonstra capacidades de texto",
        gpt3: "GPT-3 revoluciona o NLP",
        copilot: "Auge do GitHub Copilot e AlphaFold",
        chatgpt: "Lançamento do ChatGPT (OpenAI)",
        llmEra: "Era dos LLMs (GPT-4, Gemini)",
        multimodal: "IA Multimodal e Agentes Autónomos",
        quantum: "IA Quântica e Raciocínio Avançado",
        agi: "AGI Precoce e Adopção Massiva",
      },
    },
    footer: {
      description: "Desenvolvimento de soluções digitais inteligentes que impulsionam negócios. Criação de sites modernos e experiências digitais de alto impacto.",
      quickLinks: "Links Rápidos",
      rights: "Todos os direitos reservados.",
    },
    customizer: {
      title: "Personalização",
      mainColor: "Cor Principal",
      displayMode: "Modo de Visualização",
      dark: "Escuro",
      light: "Claro",
      visualEffects: "Efeitos Visuais",
      intensity: "Intensidade",
      animations: "Animações",
      ambientMusic: "Música Ambiental",
      volume: "Volume",
      description: "Personalize sua experiência para que o portfólio se adapte ao seu estilo visual preferido.",
    },
    music: {
      ambientMusic: "Ambient Music",
    },
    whatsapp: {
      message: "Olá Sebas, vi seu portfólio e gostaria de obter mais informações sobre seus serviços.",
    },
    game: {
      title: "Space Defender",
      description: "Defenda a galáxia. Desvie de planetas, destrua inimigos e alcance o nível máximo.",
      controls: "Controles:",
      movement: "para se mover",
      shoot: "para atirar",
      mobile: "Móvel:",
      mobileDesc: "Toque e arraste para se mover e atirar.",
      startMission: "Iniciar Missão",
      missionFailed: "Missão Falhou",
      shipDestroyed: "Sua nave foi destruída.",
      score: "Pontuação",
      enemies: "Inimigos",
      level: "Nível",
      time: "Tempo",
      playAgain: "Jogar Novamente",
    },
    chatbot: {
      welcome: "Olá! Eu sou seu assistente virtual inteligente. 👋\n\nEstou aqui para ajudá-lo a conhecer melhor este site, meus serviços, tecnologias e experiência. Tudo funciona de forma local e privada.\n\nComo posso ajudá-lo hoje? Você pode usar os botões abaixo ou escrever para mim diretamente.",
      resetHistory: "Histórico de conversas limpo. 👋\n\nComo posso ajudá-lo agora?",
      error: "Ops, algo deu errado na minha lógica local.",
      faq: "Perguntas frequentes",
      placeholder: "Digite sua dúvida ou /ajuda...",
      localInfo: "Funciona localmente. Tente comandos como /servicos ou /contato.",
      assistantName: "Assistente Local",
      offline: "100% Offline",
      resetTitle: "Reiniciar conversa",
      helpCommand: "Posso informá-lo sobre meus serviços, tecnologias, contato, localização, horários e portfólio. Você também pode usar comandos como /servicos, /contato ou /limpar.",
      fallback: "Sinto muito, não tenho uma resposta específica para isso no meu banco de dados local. 😅\n\nVocê poderia tentar me perguntar sobre meus serviços, tecnologias, portfólio ou contato? Você também pode usar os botões de acesso rápido abaixo.",
      cleaning: "Limpando...",
      cleaned: "Histórico de conversas limpo.",
      services: "Serviços",
      portfolio: "Portfólio",
      tech: "Tecnologias",
      experience: "Experiência",
      prices: "Preços",
      contact: "Contato",
      location: "Localização",
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
      dashboard: "Tableau de bord",
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
      heading: "Vous recherchez des talents technologiques ?",
      description: "J'ai développé des projets à fort impact en utilisant les technologies les plus modernes du marché. Je me concentre sur l'évolutivité, la performance et l'expérience utilisateur.",
      downloadCV: "Télécharger le CV",
      viewRepos: "Voir les Dépôts",
      playMatchMaster: "Jouer à Match Master",
    },
    contact: {
      title: "Contact",
      subtitle: "Commençons votre prochain grand projet numérique.",
      description: "Je suis prêt à vous aider à transformer vos idées en solutions technologiques à fort impact. Contactez-moi dès aujourd'hui.",
      callUs: "Appelez-nous",
      email: "Email",
      name: "Nom",
      company: "Entreprise",
      projectType: "Type de projet",
      projectTypePlaceholder: "Sélectionner le type",
      projectTypeWeb: "Site Web",
      projectTypeApp: "Application Web",
      projectTypeAutomation: "Automatisation",
      projectTypeOther: "Autre",
      message: "Message",
      messagePlaceholder: "Parlez-moi de votre projet...",
      button: "Démarrer le projet",
      success: "Message Envoyé!",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "votre@email.com",
      companyPlaceholder: "Nom de votre entreprise",
    },
    dashboard: {
      title: "Métriques en Temps Réel",
      subtitle: "Visualisez la croissance technologique et l'avancement de l'intelligence artificielle avec des données historiques réelles, ainsi que des métriques de votre session actuelle.",
      localTime: "Heure Locale",
      sessionTime: "Temps de Session",
      aiStatus: "État IA",
      aiOptimal: "Optimal",
      aiSystemsOnline: "Systèmes en ligne",
      openChat: "Ouvrir le Chat",
      networkTest: "Test Réseau",
      measuring: "Mesure...",
      optimal: "Optimal",
      acceptable: "Acceptable",
      slow: "Lent",
      download: "Téléchargement",
      upload: "Téléchargement",
      calculating: "Calcul en cours",
      repeatTest: "Répéter le Test",
      startTest: "Démarrer le Test",
      globalAiInvestment: "Investissement Mondial en IA",
      aiModelEvolution: "Évolution des Modèles IA (Paramètres)",
      parameters: "Paramètres",
      milestone: "Jalon",
      billions: "Milliards USD",
      searchingLocation: "Recherche de l'emplacement...",
      unknownLocation: "Emplacement Inconnu",
      activityDetected: "Activité détectée",
      techEvents: {
        transformer: "Premiers modèles Transformer",
        gpt2: "GPT-2 démontre des capacités textuelles",
        gpt3: "GPT-3 révolutionne le NLP",
        copilot: "Essor de GitHub Copilot et AlphaFold",
        chatgpt: "Lancement de ChatGPT (OpenAI)",
        llmEra: "Ère des LLM (GPT-4, Gemini)",
        multimodal: "IA Multimodale et Agents Autonomes",
        quantum: "IA Quantique et Raisonnement Avancé",
        agi: "AGI Précoce et Adoption Massive",
      },
    },
    footer: {
      description: "Développement de solutions numériques intelligentes qui stimulent les entreprises. Création de sites web modernes et expériences numériques à fort impact.",
      quickLinks: "Liens Rapides",
      rights: "Tous droits réservés.",
    },
    customizer: {
      title: "Personnalisation",
      mainColor: "Couleur Principale",
      displayMode: "Mode d'Affichage",
      dark: "Sombre",
      light: "Clair",
      visualEffects: "Effets Visuels",
      intensity: "Intensité",
      animations: "Animations",
      ambientMusic: "Musique d'Ambiance",
      volume: "Volume",
      description: "Personnalisez votre expérience pour que le portefeuille s'adapte à votre style visuel préféré.",
    },
    music: {
      ambientMusic: "Ambient Music",
    },
    whatsapp: {
      message: "Bonjour Sebas, j'ai vu votre portefeuille et j'aimerais obtenir plus d'informations sur vos services.",
    },
    game: {
      title: "Space Defender",
      description: "Défendez la galaxie. Esquivez les planètes, détruisez les ennemis et atteignez le niveau maximum.",
      controls: "Commandes :",
      movement: "pour se déplacer",
      shoot: "pour tirer",
      mobile: "Mobile :",
      mobileDesc: "Touchez et faites glisser pour vous déplacer et tirer.",
      startMission: "Démarrer la Mission",
      missionFailed: "Mission Échouée",
      shipDestroyed: "Votre vaisseau a été détruit.",
      score: "Score",
      enemies: "Ennemis",
      level: "Niveau",
      time: "Temps",
      playAgain: "Rejouer",
    },
    chatbot: {
      welcome: "Bonjour ! Je suis votre assistant virtuel intelligent. 👋\n\nJe suis ici pour vous aider à mieux connaître ce site, mes services, mes technologies et mon expérience. Tout fonctionne localement et de manière privée.\n\nComment puis-je vous aider aujourd'hui ? Vous pouvez utiliser les boutons ci-dessous ou m'écrire directement.",
      resetHistory: "Historique des conversations effacé. 👋\n\nComment puis-je vous aider maintenant ?",
      error: "Oups, quelque chose s'est mal passé dans ma logique locale.",
      faq: "Questions fréquemment posées",
      placeholder: "Tapez votre question ou /aide...",
      localInfo: "Fonctionne localement. Essayez des commandes comme /services ou /contact.",
      assistantName: "Assistant Local",
      offline: "100% Hors ligne",
      resetTitle: "Réinitialiser la conversation",
      helpCommand: "Je peux vous informer sur mes services, mes technologies, mon contact, mon emplacement, mes horaires et mon portefeuille. Vous pouvez également utiliser des commandes comme /services, /contact ou /effacer.",
      fallback: "Désolé, je n'ai pas de réponse spécifique pour cela dans ma base de données locale. 😅\n\nPourriez-vous essayer de m'interroger sur mes services, mes technologies, mon portefeuille ou mon contact ? Vous pouvez également utiliser les boutons d'accès rapide ci-dessous.",
      cleaning: "Nettoyage...",
      cleaned: "Historique des conversations effacé.",
      services: "Services",
      portfolio: "Portefeuille",
      tech: "Technologies",
      experience: "Expérience",
      prices: "Prix",
      contact: "Contact",
      location: "Emplacement",
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
      dashboard: "Dashboard",
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
      heading: "Cerchi talento tecnologico?",
      description: "Ho sviluppato progetti ad alto impatto utilizzando le tecnologie più moderne sul mercato. Il mio focus è su scalabilità, prestazioni ed esperienza utente.",
      downloadCV: "Scarica CV",
      viewRepos: "Vedi Repository",
      playMatchMaster: "Gioca a Match Master",
    },
    contact: {
      title: "Contatto",
      subtitle: "Iniziamo il tuo prossimo grande progetto digitale.",
      description: "Sono pronto ad aiutarti a trasformare le tue idee in soluzioni tecnologiche ad alto impatto. Contattami oggi stesso.",
      callUs: "Chiamaci",
      email: "Email",
      name: "Nome",
      company: "Azienda",
      projectType: "Tipo di progetto",
      projectTypePlaceholder: "Seleziona tipo",
      projectTypeWeb: "Sito Web",
      projectTypeApp: "Applicazione Web",
      projectTypeAutomation: "Automazione",
      projectTypeOther: "Altro",
      message: "Messaggio",
      messagePlaceholder: "Parlami del tuo progetto...",
      button: "Inizia progetto",
      success: "Messaggio Inviato!",
      namePlaceholder: "Il tuo nome",
      emailPlaceholder: "tuo@email.com",
      companyPlaceholder: "Nome della tua azienda",
    },
    dashboard: {
      title: "Metriche in Tempo Reale",
      subtitle: "Visualizza la crescita tecnologica e l'avanzamento dell'intelligenza artificiale con dati storici reali, insieme alle metriche della tua sessione attuale.",
      localTime: "Ora Locale",
      sessionTime: "Tempo di Sessione",
      aiStatus: "Stato IA",
      aiOptimal: "Ottimale",
      aiSystemsOnline: "Sistemi online",
      openChat: "Apri Chat",
      networkTest: "Test di Rete",
      measuring: "Misurazione...",
      optimal: "Ottimale",
      acceptable: "Accettabile",
      slow: "Lento",
      download: "Download",
      upload: "Caricamento",
      calculating: "Calcolo in corso",
      repeatTest: "Ripeti Test",
      startTest: "Inizia Test",
      globalAiInvestment: "Investimento Globale in IA",
      aiModelEvolution: "Evoluzione dei Modelli IA (Parametri)",
      parameters: "Parametri",
      milestone: "Traguardo",
      billions: "Miliardi USD",
      searchingLocation: "Ricerca posizione...",
      unknownLocation: "Posizione Sconosciuta",
      activityDetected: "Attività rilevata",
      techEvents: {
        transformer: "Primi modelli Transformer",
        gpt2: "GPT-2 dimostra capacità testuali",
        gpt3: "GPT-3 rivoluziona il NLP",
        copilot: "Ascesa di GitHub Copilot e AlphaFold",
        chatgpt: "Lancio di ChatGPT (OpenAI)",
        llmEra: "Era dei LLM (GPT-4, Gemini)",
        multimodal: "IA Multimodale e Agenti Autonomi",
        quantum: "IA Quantistica e Ragionamento Avanzato",
        agi: "AGI Precoce e Adozione di Massa",
      },
    },
    footer: {
      description: "Sviluppo di soluzioni digitali intelligenti che guidano il business. Creazione di siti web moderni ed esperienze digitali ad alto impatto.",
      quickLinks: "Link Rapidi",
      rights: "Tutti i diritti riservati.",
    },
    customizer: {
      title: "Personalizzazione",
      mainColor: "Colore Principale",
      displayMode: "Modalità di Visualizzazione",
      dark: "Scuro",
      light: "Chiaro",
      visualEffects: "Effetti Visuali",
      intensity: "Intensità",
      animations: "Animazioni",
      ambientMusic: "Musica Ambientale",
      volume: "Volume",
      description: "Personalizza la tua esperienza in modo che il portfolio si adatti al tuo stile visivo preferito.",
    },
    music: {
      ambientMusic: "Ambient Music",
    },
    whatsapp: {
      message: "Ciao Sebas, ho visto il tuo portfolio e vorrei avere maggiori informazioni sui tuoi servizi.",
    },
    game: {
      title: "Space Defender",
      description: "Difendi la galassia. Schiva i pianeti, distruggi i nemici e raggiungi il livello massimo.",
      controls: "Controlli:",
      movement: "per muoverti",
      shoot: "per sparare",
      mobile: "Mobile:",
      mobileDesc: "Tocca e trascina per muoverti e sparare.",
      startMission: "Inizia Missione",
      missionFailed: "Missione Fallita",
      shipDestroyed: "La tua nave è stata distrutta.",
      score: "Punteggio",
      enemies: "Nemici",
      level: "Livello",
      time: "Tempo",
      playAgain: "Gioca Ancora",
    },
    chatbot: {
      welcome: "Ciao! Sono il tuo assistente virtuale intelligente. 👋\n\nSono qui per aiutarti a conoscere meglio questo sito, i miei servizi, le tecnologie e l'esperienza. Tutto funziona localmente e privatamente.\n\nCome posso aiutarti oggi? Puoi usare i pulsanti qui sotto o scrivermi direttamente.",
      resetHistory: "Cronologia conversazioni cancellata. 👋\n\nCome posso aiutarti ora?",
      error: "Ops, qualcosa è andato storto nella mia logica locale.",
      faq: "Domande frequenti",
      placeholder: "Scrivi la tua domanda o /aiuto...",
      localInfo: "Funziona localmente. Prova comandi come /servizi o /contatto.",
      assistantName: "Assistente Locale",
      offline: "100% Offline",
      resetTitle: "Reinizia conversazione",
      helpCommand: "Posso informarti sui miei servizi, tecnologie, contatto, posizione, orari e portfolio. Puoi anche usare comandi come /servizi, /contato o /cancella.",
      fallback: "Spiacente, non ho una risposta specifica per questo nel mio database locale. 😅\n\nPotresti provare a chiedermi dei miei servizi, tecnologie, portfolio o contatto? Puoi anche usare i pulsanti di accesso rapido qui sotto.",
      cleaning: "Pulizia...",
      cleaned: "Cronologia conversazioni cancellata.",
      services: "Servizi",
      portfolio: "Portfolio",
      tech: "Tecnologie",
      experience: "Esperienza",
      prices: "Prezzi",
      contact: "Contatto",
      location: "Posizione",
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
      dashboard: "Dashboard",
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
      heading: "Suchen Sie Tech-Talente?",
      description: "Ich habe wirkungsvolle Projekte mit den modernsten Technologien auf dem Markt entwickelt. Mein Fokus liegt auf Skalierbarkeit, Leistung und Benutzererfahrung.",
      downloadCV: "Lebenslauf herunterladen",
      viewRepos: "Repositories ansehen",
      playMatchMaster: "Match Master spielen",
    },
    contact: {
      title: "Kontakt",
      subtitle: "Lassen Sie uns Ihr nächstes großes digitales Projekt starten.",
      description: "Ich bin bereit, Ihnen dabei zu helfen, Ihre Ideen in wirkungsvolle technologische Lösungen zu verwandeln. Kontaktieren Sie mich noch heute.",
      callUs: "Rufen Sie uns an",
      email: "E-Mail",
      name: "Name",
      company: "Unternehmen",
      projectType: "Projekttyp",
      projectTypePlaceholder: "Typ auswählen",
      projectTypeWeb: "Website",
      projectTypeApp: "Webanwendung",
      projectTypeAutomation: "Automatisierung",
      projectTypeOther: "Andere",
      message: "Nachricht",
      messagePlaceholder: "Erzählen Sie mir von Ihrem Projekt...",
      button: "Projekt starten",
      success: "Nachricht Gesendet!",
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "ihre@email.com",
      companyPlaceholder: "Name Ihres Unternehmens",
    },
    dashboard: {
      title: "Echtzeit-Metriken",
      subtitle: "Visualisieren Sie das technologische Wachstum und den Fortschritt der künstlichen Intelligenz mit realen historischen Daten, zusammen mit Metriken Ihrer aktuellen Sitzung.",
      localTime: "Ortszeit",
      sessionTime: "Sitzungszeit",
      aiStatus: "KI-Status",
      aiOptimal: "Optimal",
      aiSystemsOnline: "Systeme online",
      openChat: "Chat öffnen",
      networkTest: "Netzwerktest",
      measuring: "Messung...",
      optimal: "Optimal",
      acceptable: "Akzeptabel",
      slow: "Langsam",
      download: "Download",
      upload: "Upload",
      calculating: "Berechnung...",
      repeatTest: "Test wiederholen",
      startTest: "Test starten",
      globalAiInvestment: "Globale KI-Investitionen",
      aiModelEvolution: "Evolution der KI-Modelle (Parameter)",
      parameters: "Parameter",
      milestone: "Meilenstein",
      billions: "Milliarden USD",
      searchingLocation: "Suche Standort...",
      unknownLocation: "Unbekannter Standort",
      activityDetected: "Aktivität erkannt",
      techEvents: {
        transformer: "Erste Transformer-Modelle",
        gpt2: "GPT-2 demonstriert Textfähigkeiten",
        gpt3: "GPT-3 revolutioniert NLP",
        copilot: "Aufstieg von GitHub Copilot und AlphaFold",
        chatgpt: "ChatGPT-Start (OpenAI)",
        llmEra: "Ära der LLMs (GPT-4, Gemini)",
        multimodal: "Multimodale KI und autonome Agenten",
        quantum: "Quanten-KI und fortgeschrittenes Denken",
        agi: "Frühe AGI und massive Einführung",
      },
    },
    footer: {
      description: "Entwicklung intelligenter digitaler Lösungen, die das Geschäft vorantreiben. Erstellung moderner Websites und wirkungsvoller digitaler Erlebnisse.",
      quickLinks: "Schnelllinks",
      rights: "Alle Rechte vorbehalten.",
    },
    customizer: {
      title: "Anpassung",
      mainColor: "Hauptfarbe",
      displayMode: "Anzeigemodus",
      dark: "Dunkel",
      light: "Hell",
      visualEffects: "Visuelle Effekte",
      intensity: "Intensität",
      animations: "Animationen",
      ambientMusic: "Hintergrundmusik",
      volume: "Lautstärke",
      description: "Passen Sie Ihr Erlebnis an, damit sich das Portfolio an Ihren bevorzugten visuellen Stil anpasst.",
    },
    music: {
      ambientMusic: "Ambient Music",
    },
    whatsapp: {
      message: "Hallo Sebas, ich habe dein Portfolio gesehen und würde gerne mehr Informationen über deine Dienstleistungen erhalten.",
    },
    game: {
      title: "Space Defender",
      description: "Verteidige die Galaxie. Weiche Planeten aus, zerstöre Feinde und erreiche das maximale Level.",
      controls: "Steuerung:",
      movement: "zum Bewegen",
      shoot: "zum Schießen",
      mobile: "Mobil:",
      mobileDesc: "Tippen und ziehen zum Bewegen und Schießen.",
      startMission: "Mission starten",
      missionFailed: "Mission fehlgeschlagen",
      shipDestroyed: "Dein Schiff wurde zerstört.",
      score: "Punktzahl",
      enemies: "Feinde",
      level: "Level",
      time: "Zeit",
      playAgain: "Nochmal spielen",
    },
    chatbot: {
      welcome: "Hallo! Ich bin dein intelligenter virtueller Assistent. 👋\n\nIch bin hier, um dir zu helfen, diese Seite, meine Dienstleistungen, Technologien und Erfahrungen besser kennenzulernen. Alles funktioniert lokal und privat.\n\nWie kann ich dir heute helfen? Du kannst die Schaltflächen unten verwenden oder mir direkt schreiben.",
      resetHistory: "Gesprächsverlauf gelöscht. 👋\n\nWie kann ich dir jetzt helfen?",
      error: "Ups, in meiner lokalen Logik ist etwas schiefgelaufen.",
      faq: "Häufig gestellte Fragen",
      placeholder: "Gib deine Frage ein oder /hilfe...",
      localInfo: "Funktioniert lokal. Probiere Befehle wie /services oder /contact.",
      assistantName: "Lokaler Assistent",
      offline: "100% Offline",
      resetTitle: "Gespräch neustarten",
      helpCommand: "Ich kann dich über meine Dienstleistungen, Technologien, Kontakt, Standort, Zeiten und mein Portfolio informieren. Du kannst auch Befehle wie /services, /contact oder /clear verwenden.",
      fallback: "Entschuldigung, ich habe dafür keine spezifische Antwort in meiner lokalen Datenbank. 😅\n\nKönntest du versuchen, mich nach meinen Dienstleistungen, Technologien, meinem Portfolio oder meinem Kontakt zu fragen? Du kannst auch die Schnellzugriffstasten unten verwenden.",
      cleaning: "Reinigung...",
      cleaned: "Gesprächsverlauf gelöscht.",
      services: "Dienstleistungen",
      portfolio: "Portfolio",
      tech: "Technologien",
      experience: "Erfahrung",
      prices: "Preise",
      contact: "Kontakt",
      location: "Standort",
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
      dashboard: "ダッシュボード",
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
      heading: "技術的な才能をお探しですか？",
      description: "市場で最も現代的な技術を使用して、インパクトのあるプロジェクトを開発してきました。スケーラビリティ、パフォーマンス、ユーザーエクスペリエンスに重点を置いています。",
      downloadCV: "CVをダウンロード",
      viewRepos: "リポジトリを見る",
      playMatchMaster: "Match Masterをプレイ",
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "次の大きなデジタルプロジェクトを始めましょう。",
      description: "あなたのアイデアをインパクトのある技術ソリューションに変えるお手伝いをする準備ができています。今すぐご連絡ください。",
      callUs: "お電話ください",
      email: "メールアドレス",
      name: "お名前",
      company: "会社名",
      projectType: "プロジェクトタイプ",
      projectTypePlaceholder: "タイプを選択",
      projectTypeWeb: "ウェブサイト",
      projectTypeApp: "ウェブアプリケーション",
      projectTypeAutomation: "自動化",
      projectTypeOther: "その他",
      message: "メッセージ",
      messagePlaceholder: "プロジェクトについて教えてください...",
      button: "プロジェクト開始",
      success: "メッセージ送信完了！",
      namePlaceholder: "お名前",
      emailPlaceholder: "your@email.com",
      companyPlaceholder: "会社名",
    },
    dashboard: {
      title: "リアルタイムメトリクス",
      subtitle: "実際の履歴データとともに、現在のセッションのメトリクスを使用して、技術的な成長と人工知能の進歩を視覚化します。",
      localTime: "現地時間",
      sessionTime: "セッション時間",
      aiStatus: "AIステータス",
      aiOptimal: "最適",
      aiSystemsOnline: "システムオンライン",
      openChat: "チャットを開く",
      networkTest: "ネットワークテスト",
      measuring: "測定中...",
      optimal: "最適",
      acceptable: "許容範囲",
      slow: "遅い",
      download: "ダウンロード",
      upload: "アップロード",
      calculating: "計算中",
      repeatTest: "テストを再試行",
      startTest: "テストを開始",
      globalAiInvestment: "グローバルAI投資",
      aiModelEvolution: "AIモデルの進化（パラメータ）",
      parameters: "パラメータ",
      milestone: "マイルストーン",
      billions: "10億米ドル",
      searchingLocation: "場所を検索中...",
      unknownLocation: "不明な場所",
      activityDetected: "アクティビティを検出",
      techEvents: {
        transformer: "最初のTransformerモデル",
        gpt2: "GPT-2がテキスト能力を実証",
        gpt3: "GPT-3がNLPに革命を起こす",
        copilot: "GitHub CopilotとAlphaFoldの台头",
        chatgpt: "ChatGPTのリリース (OpenAI)",
        llmEra: "LLMの时代 (GPT-4, Gemini)",
        multimodal: "マルチモーダルAIと自律型エージェント",
        quantum: "量子AIと高度な推论",
        agi: "初期のAGIと大规模な普及",
      },
    },
    footer: {
      description: "ビジネスを推進するインテリジェントなデジタルソリューションを開発します。最新のウェブサイトと高インパクトなデジタル体験の作成。",
      quickLinks: "クイックリンク",
      rights: "全著作権所有。",
    },
    customizer: {
      title: "カスタマイズ",
      mainColor: "メインカラー",
      displayMode: "表示モード",
      dark: "ダーク",
      light: "ライト",
      visualEffects: "視覚効果",
      intensity: "強度",
      animations: "アニメーション",
      ambientMusic: "環境音楽",
      volume: "音量",
      description: "ポートフォリオが好みの視覚スタイルに適応するように、体験をカスタマイズします。",
    },
    music: {
      ambientMusic: "環境音楽",
    },
    whatsapp: {
      message: "こんにちはセバス、あなたのポートフォリオを拝見しました。サービスについて詳しく知りたいです。",
    },
    game: {
      title: "スペースディフェンダー",
      description: "銀河を守れ。惑星を避け、敵を破壊し、最大レベルに到達せよ。",
      controls: "操作方法:",
      movement: "移動",
      shoot: "射撃",
      mobile: "モバイル:",
      mobileDesc: "タッチしてドラッグして移動と射撃。",
      startMission: "ミッション開始",
      missionFailed: "ミッション失敗",
      shipDestroyed: "あなたの船は破壊されました。",
      score: "スコア",
      enemies: "敵",
      level: "レベル",
      time: "時間",
      playAgain: "もう一度プレイ",
    },
    chatbot: {
      welcome: "こんにちは！私はあなたのインテリジェントな仮想アシスタントです。 👋\n\nこのサイト、私のサービス、テクノロジー、経験についてより深く知るお手伝いをします。すべてはローカルかつプライベートに動作します。\n\n今日はどのようなお手伝いができますか？下のボタンを使用するか、直接メッセージを書いてください。",
      resetHistory: "会話履歴がクリアされました。 👋\n\n次はどのようなお手伝いができますか？",
      error: "おっと、ローカルロジックで何かがうまくいかなかったようです。",
      faq: "よくある質問",
      placeholder: "質問を入力するか、/help...",
      localInfo: "ローカルで動作します。/servicesや/contactなどのコマンドを試してください。",
      assistantName: "ローカルアシスタント",
      offline: "100% オフライン",
      resetTitle: "会話をリセット",
      helpCommand: "サービス、テクノロジー、連絡先、場所、時間、ポートフォリオについてお知らせできます。/services、/contact、/clearなどのコマンドも使用できます。",
      fallback: "申し訳ありませんが、ローカルデータベースにその特定の回答はありません。 😅\n\nサービス、テクノロジー、ポートフォリオ、または連絡先について聞いてみてください。下のクイックアクセスボタンも使用できます。",
      cleaning: "クリーニング中...",
      cleaned: "会話履歴がクリアされました。",
      services: "サービス",
      portfolio: "ポートフォリオ",
      tech: "テクノロジー",
      experience: "経験",
      prices: "価格",
      contact: "連絡先",
      location: "場所",
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
      dashboard: "仪表板",
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
      heading: "正在寻找技术人才？",
      description: "我使用市场上最现代的技术开发了具有高影响力的项目。我的重点是可扩展性、性能和用户体验。",
      downloadCV: "下载简历",
      viewRepos: "查看代码库",
      playMatchMaster: "玩 Match Master",
    },
    contact: {
      title: "联系我们",
      subtitle: "让我们开始您的下一个重大数字化项目。",
      description: "我已准备好帮助您将创意转化为具有高影响力的技术解决方案。今天就联系我吧。",
      callUs: "致电我们",
      email: "电子邮件",
      name: "姓名",
      company: "公司",
      projectType: "项目类型",
      projectTypePlaceholder: "选择类型",
      projectTypeWeb: "网站",
      projectTypeApp: "Web 应用程序",
      projectTypeAutomation: "自动化",
      projectTypeOther: "其他",
      message: "留言",
      messagePlaceholder: "告诉我您的项目...",
      button: "启动项目",
      success: "消息已发送！",
      namePlaceholder: "您的姓名",
      emailPlaceholder: "your@email.com",
      companyPlaceholder: "您的公司名称",
    },
    dashboard: {
      title: "实时指标",
      subtitle: "通过真实的历数据可视化技术增长和人工智能的进步，以及当前会话的指标。",
      localTime: "当地时间",
      sessionTime: "会话时间",
      aiStatus: "AI 状态",
      aiOptimal: "最佳",
      aiSystemsOnline: "系统在线",
      openChat: "打开聊天",
      networkTest: "网络测试",
      measuring: "测量中...",
      optimal: "最佳",
      acceptable: "可接受",
      slow: "缓慢",
      download: "下载",
      upload: "上传",
      calculating: "计算中",
      repeatTest: "重复测试",
      startTest: "开始测试",
      globalAiInvestment: "全球 AI 投资",
      aiModelEvolution: "AI 模型演进（参数）",
      parameters: "参数",
      milestone: "里程碑",
      billions: "十亿美元",
      searchingLocation: "正在搜索位置...",
      unknownLocation: "未知位置",
      activityDetected: "检测到活动",
      techEvents: {
        transformer: "首个 Transformer 模型",
        gpt2: "GPT-2 展示文本能力",
        gpt3: "GPT-3 彻底改变 NLP",
        copilot: "GitHub Copilot 和 AlphaFold 兴起",
        chatgpt: "ChatGPT 发布 (OpenAI)",
        llmEra: "大语言模型时代 (GPT-4, Gemini)",
        multimodal: "多模态 AI 和自主代理",
        quantum: "量子 AI 和高级推理",
        agi: "早期 AGI 和大规模采用",
      },
    },
    footer: {
      description: "开发推动业务发展的智能数字化解决方案。创建现代网站和高影响力的数字化体验。",
      quickLinks: "快速链接",
      rights: "保留所有权利。",
    },
    customizer: {
      title: "个性化",
      mainColor: "主色调",
      displayMode: "显示模式",
      dark: "深色",
      light: "浅色",
      visualEffects: "视觉效果",
      intensity: "强度",
      animations: "动画",
      ambientMusic: "背景音乐",
      volume: "音量",
      description: "个性化您的体验，使作品集适应您喜欢的视觉风格。",
    },
    music: {
      ambientMusic: "背景音乐",
    },
    whatsapp: {
      message: "你好 Sebas，我看了你的作品集，想了解更多关于你服务的信息。",
    },
    game: {
      title: "太空保卫战",
      description: "保卫银河系。躲避行星，摧毁敌人，达到最高等级。",
      controls: "控制：",
      movement: "移动",
      shoot: "射击",
      mobile: "移动端：",
      mobileDesc: "触摸并拖动以移动和射击。",
      startMission: "开始任务",
      missionFailed: "任务失败",
      shipDestroyed: "你的飞船已被摧毁。",
      score: "分数",
      enemies: "敌人",
      level: "等级",
      time: "时间",
      playAgain: "再玩一次",
    },
    chatbot: {
      welcome: "你好！我是你的智能虚拟助手。 👋\n\n我在这里帮助你更好地了解这个网站、我的服务、技术和经验。一切都在本地私密运行。\n\n今天有什么我可以帮你的吗？你可以使用下面的按钮或直接给我留言。",
      resetHistory: "对话历史已清除。 👋\n\n现在有什么我可以帮你的吗？",
      error: "糟糕，我的本地逻辑出了点问题。",
      faq: "常见问题",
      placeholder: "输入你的问题或 /help...",
      localInfo: "本地运行。尝试 /services 或 /contact 等命令。",
      assistantName: "本地助手",
      offline: "100% 离线",
      resetTitle: "重置对话",
      helpCommand: "我可以向你介绍我的服务、技术、联系方式、位置、时间和作品集。你也可以使用 /services、/contact 或 /clear 等命令。",
      fallback: "抱歉，我的本地数据库中没有针对该问题的特定回答。 😅\n\n你可以尝试询问我的服务、技术、作品集或联系方式吗？你也可以使用下方的快速访问按钮。",
      cleaning: "清理中...",
      cleaned: "对话历史已清除。",
      services: "服务",
      portfolio: "作品集",
      tech: "技术",
      experience: "经验",
      prices: "价格",
      contact: "联系我们",
      location: "位置",
    },
  },
};
