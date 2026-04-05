import { KNOWLEDGE_BASE, FALLBACK_RESPONSE } from './knowledgeBase';

export interface ChatMessage {
  role: 'user' | 'bot';
  text: string;
  timestamp: number;
}

export class ChatbotEngine {
  private history: ChatMessage[] = [];

  constructor() {
    // Load history from session storage if available
    const saved = sessionStorage.getItem('local_chatbot_history');
    if (saved) {
      this.history = JSON.parse(saved);
    }
  }

  private normalize(text: string): string {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove accents
      .replace(/[^\w\s/]/gi, '') // Remove special characters except /
      .trim();
  }

  private saveHistory() {
    sessionStorage.setItem('local_chatbot_history', JSON.stringify(this.history));
  }

  public getHistory(): ChatMessage[] {
    return this.history;
  }

  public clearHistory() {
    this.history = [];
    this.saveHistory();
  }

  public async processMessage(input: string): Promise<string> {
    const originalInput = input.trim();
    if (!originalInput) return "Por favor, escribe algo para poder ayudarte.";
    
    const normalizedInput = this.normalize(input);
    
    this.history.push({ role: 'user', text: originalInput, timestamp: Date.now() });

    let response = "";

    // 1. Check Commands
    if (normalizedInput.startsWith('/')) {
      response = this.handleCommand(normalizedInput);
    } else {
      // 2. Check Knowledge Base
      response = this.findBestMatch(normalizedInput);
    }

    this.history.push({ role: 'bot', text: response, timestamp: Date.now() });
    this.saveHistory();

    // Simulate thinking delay
    return new Promise((resolve) => {
      setTimeout(() => resolve(response), 600 + Math.random() * 800);
    });
  }

  private handleCommand(command: string): string {
    switch (command) {
      case '/ayuda': return KNOWLEDGE_BASE.ayuda.response;
      case '/servicios': return KNOWLEDGE_BASE.servicios.response;
      case '/contacto': return KNOWLEDGE_BASE.contacto.response;
      case '/ubicacion': return KNOWLEDGE_BASE.ubicacion.response;
      case '/horarios': return KNOWLEDGE_BASE.horarios.response;
      case '/limpiar': 
        this.clearHistory();
        return "Historial de conversación limpiado.";
      default:
        return "Comando no reconocido. Prueba con /ayuda para ver los comandos disponibles.";
    }
  }

  private findBestMatch(input: string): string {
    const words = input.split(/\s+/).filter(w => w.length > 2);
    let bestMatch: { score: number; response: string; key: string } = { score: 0, response: FALLBACK_RESPONSE, key: '' };

    for (const key in KNOWLEDGE_BASE) {
      const entry = KNOWLEDGE_BASE[key];
      let currentScore = 0;

      for (const keyword of entry.keywords) {
        // Exact match in the whole input
        if (input === keyword) {
          currentScore += 10;
        } else if (input.includes(keyword)) {
          currentScore += 5;
        }

        // Word by word match
        for (const word of words) {
          if (word === keyword) {
            currentScore += 8;
          } else if (keyword.includes(word) && word.length > 3) {
            currentScore += 3;
          }
        }
      }

      if (currentScore > bestMatch.score) {
        bestMatch = { score: currentScore, response: entry.response, key };
      }
    }

    // If the score is too low, use fallback
    if (bestMatch.score < 3) {
      return FALLBACK_RESPONSE;
    }

    // Add some variation to greetings if it's a greeting
    if (bestMatch.key === 'saludos') {
      const variations = [
        "¡Hola! ¿En qué puedo ayudarte hoy?",
        "¡Hola! Qué bueno verte por aquí. ¿Tienes alguna duda?",
        "¡Hola! Soy tu asistente virtual. ¿Qué te gustaría saber sobre nosotros?"
      ];
      return variations[Math.floor(Math.random() * variations.length)];
    }

    return bestMatch.response;
  }
}
