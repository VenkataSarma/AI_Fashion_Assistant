const Outfit = require("../models/Outfit");

function calculateScore(outfit, userProfile) {

  let score = 0;

  // HARD FILTER: Gender must match
  if (
    userProfile.gender &&
    outfit.gender &&
    outfit.gender.toLowerCase() !==
    userProfile.gender.toLowerCase()
  ) {
    return 0;
  }

  // Gender Match
  if (
    outfit.gender &&
    userProfile.gender &&
    outfit.gender.toLowerCase() ===
    userProfile.gender.toLowerCase()
  ) {
    score += 50;
  }

  // Occasion Match
  if (
    outfit.occasion &&
    userProfile.occasion &&
    outfit.occasion.toLowerCase() ===
    userProfile.occasion.toLowerCase()
  ) {
    score += 30;
  }

  // Wear Type Match
  if (
    outfit.wear_type &&
    userProfile.wear_type &&
    outfit.wear_type.toLowerCase() ===
    userProfile.wear_type.toLowerCase()
  ) {
    score += 20;
  }

  // Budget Match
  if (
    userProfile.budget &&
    outfit.total_price_inr &&
    outfit.total_price_inr <= userProfile.budget
  ) {
    score += 20;
  }

  return score;
}

async function recommendOutfits(userProfile) {

  try {

    const outfits = await Outfit.find();

    if (!outfits.length) {
      return [];
    }

    const ranked = outfits
      .map((outfit) => {

        const outfitObj =
          outfit.toObject();

        return {
          ...outfitObj,
          score: calculateScore(
            outfitObj,
            userProfile
          )
        };

      })

      // Remove irrelevant outfits
      .filter(
        outfit => outfit.score > 0
      )

      .sort(
        (a, b) => b.score - a.score
      );

    return ranked.slice(0, 5);

  } catch (error) {

    console.error(
      "Recommendation Error:",
      error
    );

    return [];
  }
}

module.exports = {
  recommendOutfits
};