const express = require("express");

const articlesControllers = require("../controllers/articles-controllers");

const router = express.Router();

router.get("/:aid", (req, res) => {
  const aid = req.params.aid;
  console.log(`aid: ${aid}`);
  console.log("it is not equal to allsubtitles");
  // Fetch by headline logic
  articlesControllers.getArticlesByHeadline(res, req);
});

router.get("/", (req, res) => {
  // Fetch all articles
  articlesControllers.getAllArticles(req, res);
});

module.exports = router;
// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const fs = require("fs");

// require("dotenv").config();

// const FILE_PATH = process.env.FILE_PATH;

// // Enable CORS for all routes
// router.use(cors());
// router.get("/", (req, res) => {
//   fs.readFile(FILE_PATH, "utf8", (err, data) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(JSON.parse(data));
//     }
//   });
// });
