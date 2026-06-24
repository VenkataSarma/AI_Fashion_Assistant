require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const recommendationRoutes =
require("./routes/recommendationRoutes");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());
app.use(
  "/images",
  express.static(
    path.join(
      __dirname,
      "../../images"
    )
  )
);
app.use(
  "/api",
  recommendationRoutes
);

app.get("/", (req, res) => {

  res.send(
    "Fashion AI Server Running"
  );

});

const PORT =
process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});