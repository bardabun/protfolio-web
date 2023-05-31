const express = require("express");
const router = express.Router();
const cors = require("cors");

const fs = require("fs");
const FILE_PATH = process.env.FILE_PATH || "./records.json";

// Enable CORS for all routes
router.use(cors());
console.log(process.env.FILE_PATH);
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
