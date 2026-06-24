require("dotenv").config();

const {
  extractIntent
} = require("./services/geminiService");

(async () => {

  const result =
    await extractIntent(
      "I am a 22 year old male attending a wedding"
    );

  console.log(result);

})();