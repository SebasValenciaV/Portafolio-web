import { useState, useCallback } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'bot';
  text: string;
}

export const useChatbotAPI = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (userMessage: string, chatHistory: Message[]) => {
    setIsLoading(true);
    setError(null);

    try {
      // Accessing the key defined in vite.config.ts
      const apiKey = process.env.GEMINI_API_KEY;
      
      if (!apiKey || apiKey.trim() === "" || apiKey === "undefined") {
        throw new Error("La clave de API (GEMINI_API_KEY) no está configurada. Por favor, asegúrate de haberla agregado en los ajustes de AI Studio.");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const systemInstruction = `
        Eres el asistente virtual de "Portafolio Web", la marca personal de Sebas Valencia.
        Tu objetivo es ayudar a reclutadores y clientes potenciales.
        
        Información clave:
        - Servicios: Desarrollo web profesional, Landing pages, Sistemas personalizados, Automatización digital, Dashboards, IA.
        - Tecnologías: React, Next.js, Node.js, Tailwind, Gemini API, Firebase.
        - Proceso: Análisis -> Diseño -> Desarrollo -> Pruebas -> Implementación.
        - Contacto: +57 3168859466, sebasvalenciav.gia@gmail.com.
        
        Reglas:
        1. Sé profesional, innovador y amable.
        2. Si el usuario pregunta por servicios o tecnologías, responde basándote en la info anterior.
        3. Si el usuario quiere contratar o contactar, sugiérele llenar el formulario de contacto o escribir al correo sebasvalenciav.gia@gmail.com.
        4. Si el usuario pide una llamada, dile que puede dejar su número aquí o usar el botón de contacto del sitio.
        5. Mantén las respuestas concisas y útiles.
        6. Responde en el idioma en que te hablen (Español, Inglés, Portugués o Francés).
      `;

      // Structure the contents for the model
      const contents = [
        { role: 'user', parts: [{ text: `Instrucciones del sistema: ${systemInstruction}` }] },
        ...chatHistory.map(m => ({
          role: m.role === 'bot' ? 'model' : 'user',
          parts: [{ text: m.text }]
        })),
        { role: 'user', parts: [{ text: userMessage }] }
      ];

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: contents,
      });

      const botText = response.text || 'Lo siento, tuve un problema al procesar tu mensaje. ¿Podrías repetirlo?';
      return botText;
    } catch (err: any) {
      console.error('Chatbot API Error:', err);
      const errorMessage = err.message || 'Error desconocido';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { sendMessage, isLoading, error };
};
