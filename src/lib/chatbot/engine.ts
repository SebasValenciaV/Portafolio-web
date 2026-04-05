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
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s/]/gi, '')
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
    const words = input.split(/\s+/);
    let bestMatch: { score: number; response: string } = { score: 0, response: FALLBACK_RESPONSE };

    for (const key in KNOWLEDGE_BASE) {
      const entry = KNOWLEDGE_BASE[key];
      let currentScore = 0;

      for (const keyword of entry.keywords) {
        // Exact match
        if (input.includes(keyword)) {
          currentScore += 2;
        }
        // Partial word match
        for (const word of words) {
          if (word.length > 3 && (keyword.includes(word) || word.includes(keyword))) {
            currentScore += 1;
          }
        }
      }

      if (currentScore > bestMatch.score) {
        bestMatch = { score: currentScore, response: entry.response };
      }
    }

    return bestMatch.response;
  }
}
