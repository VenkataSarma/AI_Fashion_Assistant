const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    brand: String,
    price_inr: Number,
    rating: Number,
    rating_count: Number,

    gender: String,
    wear_type: String,

    category: String,
    category_label: String,

    occasion: String,

    tags: String,

    description: String,

    image: String,

    site: String,

    product_url: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Product",
  productSchema
);