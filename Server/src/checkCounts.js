require("dotenv").config();
const mongoose = require("mongoose");

async function run() {

  await mongoose.connect(
    process.env.MONGODB_URI
  );

  const db = mongoose.connection.db;

  const outfitsCount =
    await db.collection("outfits")
      .countDocuments();

  const productsCount =
    await db.collection("products")
      .countDocuments();

  console.log(
    "Outfits Collection Count:",
    outfitsCount
  );

  console.log(
    "Products Collection Count:",
    productsCount
  );

  process.exit();
}

run();