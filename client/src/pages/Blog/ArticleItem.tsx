import React from "react";
import { Link } from "react-router-dom";
import "./articleItem.css";

interface Article {
  headline: string;
  description: string;
}

interface Props {
  article: Article;
}

const ArticleItem: React.FC<Props> = ({ article }) => {
  return (
    <div>
      <Link className="link" to={`/article/${article.headline}`}>
        <div className="article-box">
          <h2 className="article-headline">{article.headline}</h2>
          <p className="article-description">{article.description}</p>
          <button className="btn-read-more">Read more..</button>
        </div>
      </Link>
    </div>
  );
}

export default ArticleItem;
