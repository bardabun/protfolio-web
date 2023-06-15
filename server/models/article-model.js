const mongoose = require("mongoose");

// Define the code block schema using Mongoose
const articleSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  headline: String,
  alternativeHeadline: String,
  editor: String,
  genre: String,
  keywords: String,
  wordcount: Number,
  datePublished: Date,
  dateModified: Date,
  description: String,
  articleBody: {
    title: String,
    subtitle: String,
    intro: String,
    sections: [
      {
        title: String,
        content: [String],
      },
    ],
  },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
