import React, { useEffect, useState } from "react";
import "./blog.css";
import { useNavigate } from "react-router-dom";
import ArticleList from "./ArticleList";
import Loading from "../../assets/images/rhombus.gif";

interface Articles {
  articles: Array<{
    headline: string;
    articleBody: string;
  }>;
}
const serverURL =
  process.env.NODE_ENV === "production"
    ? "https://protfolio-web-server.vercel.app"
    : "http://localhost:5000";

const Blog: React.FC = () => {
  // const SERVER_URL = process.env.SERVER || ""; //why isn't it working??
  let navigate = useNavigate();
  const [articlesData, setArticlesData] = useState<Articles>({ articles: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${serverURL}/api/product`);
      // const res = await fetch("/api/product");
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
