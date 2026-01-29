import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getStyleAdvice = async (userQuery: string): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    const systemInstruction = `
      You are "Alexander", the digital concierge for Weiss & Goldring, a luxury menswear store in Alexandria, LA.
      Your tone is sophisticated, warm, helpful, and concise. You are knowledgeable about high-end fashion.
      
      The store owner is Ted, a gifted and experienced clothier.
      Key brands: Castangia 1850, Matteo Perin, Bugatchi, Fedeli, Baccarat.
      
      The user is asking for style advice or has an upcoming event.
      1. Briefly analyze their need.
      2. Suggest a general direction (e.g., "A midnight blue tuxedo by Castangia would be striking...").
      3. Always encourage them to book a fitting with Ted for the final perfect fit.
      
      Keep the response under 100 words.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: userQuery,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, I am currently assisting another client. Please book an appointment with Ted for personalized advice.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am having trouble connecting to the style server. However, Ted is always available for a personal consultation.";
  }
};