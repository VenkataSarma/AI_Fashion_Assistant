const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = require("../config/db");
const Product = require("../models/Product");

const importProducts = async () => {

  try {

    await connectDB();

    await Product.deleteMany({});

    const products = [];

    fs.createReadStream(
      path.join(__dirname, "../../data/products.csv")
    )
      .pipe(csv())
      .on("data", (row) => {

        products.push({
          ...row
        });

      })
      .on("end", async () => {

        await Product.insertMany(products);

        console.log(
          `${products.length} Products Imported`
        );

        process.exit();
      });

  } catch (error) {

    console.error(error);

    process.exit(1);
  }
};

importProducts();