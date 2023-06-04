const express = require("express");

require("dotenv").config();

const product = require("./api/product");
const app = express();

const PORT = process.env.PORT;

app.use("/api/product", product);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
