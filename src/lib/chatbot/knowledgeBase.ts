export interface KnowledgeEntry {
  keywords: string[];
  response: string;
}

export const KNOWLEDGE_BASE: Record<string, KnowledgeEntry> = {
  servicios: {
    keywords: ['servicios', 'que haces', 'ofreces', 'trabajo', 'proyectos', 'desarrollo', 'diseño'],
    response: "Ofrecemos servicios de desarrollo web full-stack, diseño de interfaces (UI/UX), consultoría tecnológica y creación de aplicaciones personalizadas con tecnologías modernas como React, Node.js y IA."
  },
  contacto: {
    keywords: ['contacto', 'email', 'correo', 'escribir', 'hablar', 'whatsapp', 'telefono', 'celular'],
    response: "Puedes contactarnos a través del correo sebasvalenciav.gia@gmail.com o enviarnos un mensaje directo por WhatsApp al +57 3168859466. ¡Estaremos encantados de hablar contigo!"
  },
  ubicacion: {
    keywords: ['ubicacion', 'donde estas', 'donde estan', 'ciudad', 'pais', 'oficina', 'donde vives'],
    response: "Estamos ubicados en Colombia, pero trabajamos de forma remota para clientes en todo el mundo. No tenemos una oficina física abierta al público en este momento."
  },
  horarios: {
    keywords: ['horarios', 'hora', 'cuando atienden', 'abierto', 'disponible', 'tiempo'],
    response: "Nuestro horario de atención es de lunes a viernes, de 8:00 AM a 6:00 PM (Hora Colombia). Sin embargo, puedes dejarnos un mensaje en cualquier momento y te responderemos lo antes posible."
  },
  productos: {
    keywords: ['productos', 'que vendes', 'comprar', 'software', 'apps'],
    response: "Más que productos cerrados, desarrollamos soluciones a medida. Sin embargo, tenemos plantillas de portafolios, dashboards y sistemas de gestión que podemos adaptar a tus necesidades."
  },
  ayuda: {
    keywords: ['ayuda', 'help', 'que puedo hacer', 'instrucciones', 'soporte'],
    response: "Puedo ayudarte con información sobre nuestros servicios, contacto, ubicación y horarios. También puedes usar comandos como /servicios o /contacto. ¿En qué más puedo apoyarte?"
  },
  saludos: {
    keywords: ['hola', 'buenos dias', 'buenas tardes', 'buenas noches', 'que tal', 'hey', 'como estas'],
    response: "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre mis servicios o usar el menú de abajo."
  },
  despedidas: {
    keywords: ['chao', 'adios', 'hasta luego', 'nos vemos', 'bye', 'gracias'],
    response: "¡Fue un placer ayudarte! Que tengas un excelente día. Si necesitas algo más, aquí estaré."
  },
  general_tech: {
    keywords: ['internet', 'web', 'tecnologia', 'programacion', 'javascript', 'react', 'ia', 'inteligencia artificial'],
    response: "La tecnología es mi pasión. Me especializo en el ecosistema de JavaScript (React, Node) y en la integración de IA para crear experiencias web increíbles."
  }
};

export const FALLBACK_RESPONSE = "Lo siento, no tengo información específica sobre eso en mi base de datos local. ¿Podrías intentar con otras palabras o usar uno de los botones de ayuda?";
