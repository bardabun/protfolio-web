const express = require("express");
const router = express.Router();

const fs = require("fs");
const FILE_PATH = process.env.FILE_PATH || "./records.json";

// Enable CORS for all routes
router.use((req, res, next) => {
  console.log("Setting CORS headers");
  res.set(
    "Access-Control-Allow-Origin",
    "https://protfolio-web-bar.vercel.app"
  );
  // res.set(
  //   "Access-Control-Allow-Methods",
  //   "GET, HEAD, POST, PUT, DELETE, PATCH"
  // );
  // res.set("Access-Control-Allow-Headers", "Content-Type");
  next();
});

router.get("/", (req, res) => {
  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(JSON.parse(data));
    }
  });
});

module.exports = router;
