const { GoogleGenerativeAI } = require("@google/generative-ai");

console.log(
  "Service Gemini Key:",
  process.env.GEMINI_API_KEY?.substring(0, 15)
);

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash"
});

const SYSTEM_PROMPT = `
You are a fashion intent extraction system.

Extract the following fields from the user query:

- gender
- occasion
- wear_type
- budget

Rules:

Gender:
- men
- women

Occasion:
- casual
- office
- party
- wedding
- vacation
- sports
- festive

Wear Type:
- western
- ethnic

Special Rule:
- If occasion is wedding and wear_type is not specified,
  set wear_type to ethnic.

Return ONLY valid JSON.

Example:

User Query:
I am a 22 year old male attending a wedding

Output:
{
  "gender":"men",
  "occasion":"wedding",
  "wear_type":"ethnic",
  "budget":null
}
`;

async function extractIntent(query) {
  try {

    const prompt = `
${SYSTEM_PROMPT}

User Query:
${query}
`;

    const result =
      await model.generateContent(prompt);

    const response =
      await result.response;

    const text =
      response.text();

    console.log("Gemini Raw Response:");
    console.log(text);

    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleaned);

  } catch (error) {

    console.error(
      "Gemini Intent Extraction Error:",
      error
    );

    throw error;
  }
}

module.exports = {
  extractIntent
};