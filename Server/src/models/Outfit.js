const mongoose = require("mongoose");

const outfitSchema = new mongoose.Schema(
  {
    outfit_id: String,

    gender: String,

    wear_type: String,

    occasion: String,

    theme: String,

    hero: String,
    hero_id: String,

    second: String,
    second_id: String,

    layer: String,
    layer_id: String,

    footwear: String,
    footwear_id: String,

    accessory_1: String,
    accessory_1_id: String,

    accessory_2: String,
    accessory_2_id: String,

    palette: String,

    items_count: Number,

    total_price_inr: Number,

    image_files: String,

    stylist_rationale: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Outfit",
  outfitSchema
);