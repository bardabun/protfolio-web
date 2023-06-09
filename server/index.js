const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const product = require("./routes/product-routes");
const app = express();

const PORT = process.env.PORT;

app.use(cors());

app.use("/api/product", product);

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const server = app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });
