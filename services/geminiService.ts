import { GoogleGenAI, Type } from "@google/genai";
import { LetterData } from '../types';

export const generateLetterContent = async (): Promise<LetterData> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key not found, using fallback letter.");
    throw new Error("No API Key");
  }

  const ai = new GoogleGenAI({ apiKey });

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: `Write a heartwarming, gentle letter from a father to his wife and newborn child. The tone should be peaceful, grateful, and cute. Split the letter into 5 sequential parts for a scrolling website. 
    
    For each part, provide a short description for a Charles M. Schulz Peanuts-style cartoon illustration (using original characters, not existing Peanuts characters). 
    
    CRITICAL INSTRUCTIONS FOR ILLUSTRATION DESCRIPTIONS:
    1. Every illustration MUST include two corgis.
    2. Maintain character consistency: The Father has black hair, glasses, and a green sweater. The Mother has black hair and a blue dress.
    
    Return JSON.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING, description: "A gentle title for the letter" },
          parts: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.INTEGER },
                text: { type: Type.STRING, description: "The content of this part of the letter" },
                illustrationPrompt: { type: Type.STRING, description: "Description for the accompanying illustration, specifically in Charles M. Schulz Peanuts style but with original characters, including two corgis and consistent parents (Dad with black hair and glasses, Mom in blue dress)" }
              },
              required: ["id", "text", "illustrationPrompt"]
            }
          }
        },
        required: ["title", "parts"]
      }
    }
  });

  const text = response.text;
  if (!text) {
    throw new Error("Empty response from Gemini");
  }

  return JSON.parse(text) as LetterData;
};
