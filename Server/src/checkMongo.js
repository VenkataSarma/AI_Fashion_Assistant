require("dotenv").config();
const mongoose = require("mongoose");

async function run() {

  await mongoose.connect(
    process.env.MONGODB_URI
  );

  console.log(
    "Current Database:",
    mongoose.connection.db.databaseName
  );

  const collections =
    await mongoose.connection.db
      .listCollections()
      .toArray();

  console.log("\nCollections:");

  collections.forEach(c => {
    console.log(c.name);
  });

  process.exit();
}

run();