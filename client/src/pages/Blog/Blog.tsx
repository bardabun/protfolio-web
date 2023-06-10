import React, { useEffect, useState } from "react";
import "./blog.css";
import ArticleList from "./ArticleList";
import Loading from "../../assets/images/rhombus.gif";

interface Articles {
  articles: Array<{
    headline: string;
    articleBody: string;
  }>;
}
console.log("This is the REACT_APP_SERVER_URL: " + process.env.REACT_APP_SERVER_URL);
const serverURL = process.env.REACT_APP_SERVER_URL;

const Blog: React.FC = () => {
  const [articlesData, setArticlesData] = useState<Articles>({ articles: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${serverURL}/api/product`);
      const data: Articles = await res.json();
      setArticlesData(data);
      setIsLoading(false);
    }
    fetchData();
  }, [isLoading]);

  return (
    <div className="back">
      <div className="roll">
        <div className="articles-container">
          {isLoading || typeof articlesData.articles === "undefined" ? (
            // <p className="loading-text">Loading...</p>
            <img src={Loading} alt="Loading GIF" className="loading-gif" />
          ) : (
            <ArticleList articles={articlesData.articles} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
