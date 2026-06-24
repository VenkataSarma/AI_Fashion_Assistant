require("dotenv").config();

const connectDB = require("./config/db");

const recommendationService =
  require("./services/recommendationService");

console.log("Loaded Service:");
console.log(recommendationService);

async function run() {
  try {

    await connectDB();

    const results =
      await recommendationService.recommendOutfits({
        gender: "men",
        occasion: "wedding",
        wear_type: "ethnic",
        budget: null
      });

    console.log("\nTotal Recommendations:");
    console.log(results.length);

    console.log("\nTop Recommendation:");
    console.log(results[0]);

    process.exit(0);

  } catch (error) {

    console.error(error);

    process.exit(1);
  }
}

run();