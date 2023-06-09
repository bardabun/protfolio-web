import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./article.css";
import StyledArticle from "./StyledArticle";

const Article = () => {
  let params = useParams();
  const [article, setArticle] = useState({});

const serverURL = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    // Fetch the article data from the server.
    fetch(`${serverURL}/api/product`) 
      .then((response) => response.json())
      .then((data) => {
        // Find the article with the matching headline
        let chosen = data.find(
          (art: { headline: string; }) => params.userId === art.headline
        );

        if (chosen) {
          // Set the article data in the state
          setArticle(chosen.articleBody);
        } else {
          console.log("Couldn't find the article");
        }
      });
  }, [params.userId, serverURL]);

  return (
    <div className="article-page">
      {article ? <StyledArticle {...article} /> : <p>Loading...</p>}
    </div>
  );
};

export default Article;