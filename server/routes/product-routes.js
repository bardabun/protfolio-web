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
