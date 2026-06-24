// testDirectGemini.js

require("dotenv").config();

const { GoogleGenerativeAI } =
require("@google/generative-ai");

async function run() {

  console.log(
    "KEY:",
    process.env.GEMINI_API_KEY?.substring(0,15)
  );

  const genAI =
    new GoogleGenerativeAI(
      process.env.GEMINI_API_KEY
    );

  const model =
    genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

  const result =
    await model.generateContent(
      "Say hello in one word"
    );

  console.log(
    result.response.text()
  );
}

run().catch(console.error);