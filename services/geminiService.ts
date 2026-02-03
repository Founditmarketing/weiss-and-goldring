import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

export const getStyleAdvice = async (userQuery: string): Promise<string> => {
  try {
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

    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: systemInstruction
    });

    const result = await model.generateContent(userQuery);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am having trouble connecting to the style server. However, Ted is always available for a personal consultation.";
  }
};