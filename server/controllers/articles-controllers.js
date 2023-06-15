const ArticleModel = require("../models/article-model");

// Middleware function to get a article by its Headline
const getArticlesByHeadline = (req, res, next) => {
  const articleHeadline = req.params.aid;
  ArticleModel.findOne({ headline: articleHeadline })
    .then((article) => {
      // If article is not found.
      if (!article) {
        console.log("article is not found");
        res.status(404).json({ message: "Article not found." });
        return;
      }
      // Return the article as a response
      res.json(article);
    })
    .catch((error) => {
      console.log(error);
      // Handle the error and send an appropriate response
      res
        .status(500)
        .json({ message: "Failed to retrieve article by headline." });
    });
};

const getAllArticles = (req, res, next) => {
  ArticleModel.find()
    .lean() // Retrieve plain JavaScript objects instead of Mongoose documents
    .then((articles) => {
      // Check if articles is empty
      if (articles.length === 0) {
        res.status(404).json({ message: "No articles found." });
        return;
      }

      // Return the articles as a response
      res.json(articles);
    })
    .catch((error) => {
      console.log(error);
      // Handle the error and send an appropriate response
      res.status(500).json({ message: "Failed to retrieve articles." });
    });
};

exports.getArticlesByHeadline = getArticlesByHeadline;
exports.getAllArticles = getAllArticles;
