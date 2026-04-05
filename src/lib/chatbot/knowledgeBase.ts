export interface KnowledgeEntry {
  keywords: string[];
  response: string;
}

export const KNOWLEDGE_BASE: Record<string, KnowledgeEntry> = {
  servicios: {
    keywords: ['servicios', 'que haces', 'ofreces', 'trabajo', 'proyectos', 'desarrollo', 'diseño', 'soluciones', 'crear'],
    response: "Ofrecemos servicios integrales de desarrollo web full-stack, diseño de interfaces (UI/UX), consultoría tecnológica, integración de Inteligencia Artificial y creación de aplicaciones personalizadas. Nos enfocamos en soluciones escalables y modernas."
  },
  contacto: {
    keywords: ['contacto', 'email', 'correo', 'escribir', 'hablar', 'whatsapp', 'telefono', 'celular', 'redes', 'linkedin', 'github'],
    response: "Puedes contactarnos por correo en sebasvalenciav.gia@gmail.com o vía WhatsApp al +57 3168859466. También puedes encontrarme en LinkedIn y GitHub como Sebas Valencia."
  },
  ubicacion: {
    keywords: ['ubicacion', 'donde estas', 'donde estan', 'ciudad', 'pais', 'oficina', 'donde vives', 'colombia', 'medellin'],
    response: "Estamos basados en Colombia (Medellín), pero operamos de forma 100% remota para clientes en cualquier parte del mundo. ¡La tecnología no tiene fronteras!"
  },
  horarios: {
    keywords: ['horarios', 'hora', 'cuando atienden', 'abierto', 'disponible', 'tiempo', 'atencion'],
    response: "Atendemos de lunes a viernes, de 8:00 AM a 6:00 PM (GMT-5). Si escribes fuera de este horario, te responderemos en cuanto estemos de vuelta."
  },
  tecnologias: {
    keywords: ['tecnologias', 'stack', 'lenguajes', 'herramientas', 'react', 'node', 'typescript', 'javascript', 'tailwind', 'nextjs', 'python', 'ia', 'gemini'],
    response: "Nuestro stack principal incluye React, Next.js, TypeScript, Node.js y Tailwind CSS. También trabajamos con Python e integraciones de IA (como Gemini y OpenAI) para potenciar las aplicaciones."
  },
  experiencia: {
    keywords: ['experiencia', 'años', 'trayectoria', 'senior', 'junior', 'tiempo trabajando', 'historia'],
    response: "Contamos con más de 5 años de experiencia en el desarrollo de software y diseño digital, trabajando con startups y empresas consolidadas para digitalizar sus procesos."
  },
  portfolio: {
    keywords: ['portafolio', 'proyectos', 'trabajos', 'ejemplos', 'clientes', 'muestrame', 'que has hecho'],
    response: "Puedes ver nuestros proyectos destacados en la sección de 'Portafolio' de este sitio. Hemos desarrollado desde dashboards complejos hasta landing pages de alto impacto."
  },
  precios: {
    keywords: ['precios', 'cuanto cuesta', 'valor', 'presupuesto', 'cotizacion', 'barato', 'caro', 'tarifa'],
    response: "Cada proyecto es único. Ofrecemos cotizaciones personalizadas basadas en la complejidad y el tiempo estimado. Escríbenos a contacto para obtener un presupuesto detallado."
  },
  ayuda: {
    keywords: ['ayuda', 'help', 'que puedo hacer', 'instrucciones', 'soporte', 'comandos'],
    response: "Puedo informarte sobre mis servicios, tecnologías, contacto, ubicación, horarios y portafolio. También puedes usar comandos como /servicios, /contacto o /limpiar."
  },
  saludos: {
    keywords: ['hola', 'buenos dias', 'buenas tardes', 'buenas noches', 'que tal', 'hey', 'como estas', 'saludos'],
    response: "¡Hola! Soy tu asistente virtual. Estoy aquí para resolver tus dudas sobre este sitio y mis servicios. ¿En qué puedo ayudarte hoy?"
  },
  despedidas: {
    keywords: ['chao', 'adios', 'hasta luego', 'nos vemos', 'bye', 'gracias', 'muchas gracias', 'agradecido'],
    response: "¡De nada! Ha sido un placer. Si tienes más preguntas en el futuro, no dudes en volver. ¡Que tengas un gran día!"
  },
  quien_eres: {
    keywords: ['quien eres', 'quien es sebas', 'nombre', 'tu creador', 'quien te hizo'],
    response: "Soy el asistente virtual de Sebas Valencia, un desarrollador apasionado por la tecnología y la innovación. Él me diseñó para ayudarte a conocer mejor su trabajo."
  },
  blog: {
    keywords: ['blog', 'articulos', 'leer', 'publicaciones', 'escritos'],
    response: "Actualmente no tenemos una sección de blog activa, pero Sebas comparte sus conocimientos a través de proyectos en GitHub y publicaciones en LinkedIn."
  },
  metodologia: {
    keywords: ['metodologia', 'como trabajas', 'proceso', 'pasos', 'agile', 'scrum'],
    response: "Trabajamos con metodologías ágiles, priorizando la comunicación constante con el cliente, entregas iterativas y un enfoque centrado en el usuario final."
  },
  seguridad: {
    keywords: ['seguridad', 'privacidad', 'datos', 'proteccion', 'encriptacion'],
    response: "La seguridad es primordial. Implementamos las mejores prácticas de desarrollo, desde la validación de datos hasta la protección contra ataques comunes (OWASP), para mantener tus proyectos seguros."
  }
};

export const FALLBACK_RESPONSE = "Lo siento, no tengo una respuesta específica para eso en mi base de datos local. 😅\n\n¿Podrías intentar preguntarme sobre mis servicios, tecnologías, portafolio o contacto? También puedes usar los botones de acceso rápido de abajo.";
