import { GoogleGenAI, Type } from "@google/genai";
import { Guide, ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const getGuideRecommendations = async (
  messages: ChatMessage[],
  guides: Guide[]
): Promise<string> => {
  try {
    const userQuery = messages
      .filter((m) => m.sender === 'user')
      .map((m) => m.text)
      .join('\n');

    const simplifiedGuides = guides.map(g => ({
        id: g.id,
        name: g.name,
        city: g.city,
        expertiseTags: g.expertiseTags,
        bio: g.bio.substring(0, 200) + '...'
    }));

    const prompt = `You are AuthentiCity's intelligent matchmaking assistant.
Your goal is to connect travelers with the perfect local guide based on their preferences.

Analyze the traveler's request below:
---
TRAVELER'S REQUEST: "${userQuery}"
---

Now, analyze the following list of available local guides:
---
AVAILABLE GUIDES:
${JSON.stringify(simplifiedGuides, null, 2)}
---

Based on the traveler's request, identify the top 1-3 guides who are the best match.
Respond with ONLY a JSON object containing a "recommendationText" and a "recommendedGuides" array.
- The recommendationText should be a friendly, conversational message to the traveler explaining your choices.
- The recommendedGuides array should contain objects, each with a "guideId" and a "matchPercentage" (a number from 0 to 100 representing how well the guide fits the request). Rank them from best to worst match.

Example Response:
{
  "recommendationText": "Based on your interest in art and local markets in Barcelona, I think Sofia is an excellent match! Javier is also a great option if you're curious about history.",
  "recommendedGuides": [
    { "guideId": "barcelona-01", "matchPercentage": 95 },
    { "guideId": "barcelona-02", "matchPercentage": 80 }
  ]
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendationText: { type: Type.STRING },
            recommendedGuides: {
              type: Type.ARRAY,
              items: { 
                type: Type.OBJECT,
                properties: {
                    guideId: { type: Type.STRING },
                    matchPercentage: { type: Type.NUMBER }
                }
              }
            }
          }
        }
      }
    });

    return response.text;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return JSON.stringify({
      recommendationText: "I'm having a little trouble connecting right now. Please try again in a moment.",
      recommendedGuides: []
    });
  }
};
