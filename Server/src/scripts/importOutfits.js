const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

require("dotenv").config();

const connectDB = require("../config/db");
const Outfit = require("../models/Outfit");

async function importOutfits() {
  try {

    await connectDB();

    console.log("Connected to MongoDB");

    // Remove old data
    await Outfit.deleteMany({});

    console.log("Old outfits removed");

    const outfits = [];

    fs.createReadStream(
      path.join(__dirname, "../../data/outfits.csv")
    )
      .pipe(csv())
      .on("data", (row) => {

        outfits.push({
          outfit_id: row.outfit_id,
          gender: row.gender,
          wear_type: row.wear_type,
          occasion: row.occasion,
          theme: row.theme,

          hero: row.hero,
          hero_id: row.hero_id,

          second: row.second,
          second_id: row.second_id,

          layer: row.layer,
          layer_id: row.layer_id,

          footwear: row.footwear,
          footwear_id: row.footwear_id,

          accessory_1: row.accessory_1,
          accessory_1_id: row.accessory_1_id,

          accessory_2: row.accessory_2,
          accessory_2_id: row.accessory_2_id,

          palette: row.palette,

          items_count: Number(row.items_count),

          total_price_inr: Number(
            row.total_price_inr
          ),

          image_files: row.image_files,

          stylist_rationale:
            row.stylist_rationale
        });

      })
      .on("end", async () => {

        console.log(
          `Loaded ${outfits.length} outfits from CSV`
        );

        await Outfit.insertMany(outfits);

        console.log(
          `${outfits.length} Outfits Imported Successfully`
        );

        process.exit(0);
      });

  } catch (error) {

    console.error(
      "Import Error:",
      error
    );

    process.exit(1);
  }
}

importOutfits();