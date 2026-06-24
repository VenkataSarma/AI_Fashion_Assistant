const {
  extractIntent
} = require("../services/geminiService");

const {
  recommendOutfits
} = require("../services/recommendationService");

const recommend = async (req, res) => {

  try {

    const { query } = req.body;

    if (!query) {
      return res.status(400).json({
        success: false,
        message: "Query is required"
      });
    }

    const intent =
      await extractIntent(query);

    const recommendations =
      await recommendOutfits(intent);

    res.status(200).json({
      success: true,
      intent,
      recommendations
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  recommend
};