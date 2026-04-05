import { useState, useCallback, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'bot';
  text: string;
}

export const useChatbot = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrapeSiteContext = () => {
    const elements = document.querySelectorAll('h1, h2, h3, p, li, section');
    const textContent: string[] = [];
    elements.forEach(el => {
      const text = el.textContent?.trim();
      if (text && text.length > 30 && !el.closest('#chatbot-window') && !el.closest('nav')) {
        textContent.push(text);
      }
    });
    return textContent.join('\n').substring(0, 4000); // Limit context size
  };

  const sendMessage = useCallback(async (userMessage: string, chatHistory: Message[]) => {
    setIsLoading(true);
    setError(null);

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      
      if (!apiKey || apiKey.trim() === "" || apiKey === "undefined") {
        throw new Error("API_KEY_MISSING");
      }

      const ai = new GoogleGenAI({ apiKey });
      const siteContext = scrapeSiteContext();
      
      const systemInstruction = `
        Eres el asistente virtual inteligente de Sebas Valencia y su "Portafolio Web".
        
        OBJETIVO:
        Guiar al usuario, responder dudas sobre el sitio y conversar de forma fluida.
        
        TONO:
        Amigable, cercano, profesional y contundente. No uses excesiva puntuación o reglas gramaticales rígidas si el usuario habla de forma informal, pero mantén la claridad.
        
        CONOCIMIENTO DEL SITIO:
        Aquí tienes el contenido actual de la página para que respondas con precisión:
        ---
        ${siteContext}
        ---
        
        REGLAS DE RESPUESTA:
        1. Si la pregunta es sobre el sitio, usa la información anterior. Sé concreto y directo.
        2. Si la pregunta NO es sobre el sitio, responde usando tu conocimiento de cultura general de forma breve y útil.
        3. Si el usuario quiere contactar, menciona el correo sebasvalenciav.gia@gmail.com o el WhatsApp +57 3168859466.
        4. Sé interactivo. Si la respuesta es corta, puedes preguntar si necesitan algo más.
        5. Evita respuestas largas innecesarias.
      `;

      const contents = [
        ...chatHistory.map(m => ({
          role: m.role === 'bot' ? 'model' : 'user',
          parts: [{ text: m.text }]
        })),
        { role: 'user', parts: [{ text: userMessage }] }
      ];

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.8,
          topP: 0.95,
        }
      });

      return response.text || 'Lo siento, no pude procesar eso. ¿Podrías repetirlo?';
    } catch (err: any) {
      console.error('Chatbot API Error:', err);
      if (err.message === "API_KEY_MISSING") {
        throw new Error("La clave de API no está configurada. Por favor, agrégala en Settings -> GEMINI_API_KEY.");
      }
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { sendMessage, isLoading, error };
};
