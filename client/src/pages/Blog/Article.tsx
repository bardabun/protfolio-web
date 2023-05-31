import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./article.css";
import StyledArticle from "./StyledArticle";

const Article = () => {
  let params = useParams();
  const [article, setArticle] = useState({});

  console.log("This is the NODE_ENV: xxxx" + process.env.NODE_ENV);
// Connect to the Socket.IO server
const serverURL =
  process.env.NODE_ENV === "production"
    ? "https://bardabun-server.vercel.app/"
    : "http://localhost:5000";

  useEffect(() => {
    // Fetch the article data from the server
    // fetch("https://bardabun-server.vercel.app/api/product") //const res = await fetch(SERVER_URL + "/api/product");
    fetch(`${serverURL}/api/product`) 
      // fetch("/api/product")
      .then((response) => response.json())
      .then((data) => {
        // Find the article with the matching headline
        let chosen = data.articles.find(
          (art) => params.userId === art.headline
        );

        if (chosen) {
          // Set the article data in the state
          setArticle(chosen.articleBody);
        } else {
          console.log("Couldn't find the article");
        }
      });
  }, []);

  return (
    <div className="article-page">
      {article ? <StyledArticle {...article} /> : <p>Loading...</p>}
    </div>
  );
};

export default Article;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import "./article.css";
// import StyledArticle from "./StyledArticle";

// interface Article {
//   title: string;
//   subtitle: string;
//   intro: string;
//   sections: {
//     title: string;
//     content: string | string[];
//   }[];
// }

// const Article: React.FC = () => {
//   let params = useParams();
//   const [article, setArticle] = useState<Article | {}>({});

//   useEffect(() => {
//     // Fetch the article data from the server
//     fetch("https://bardabun-server.vercel.app/api/product")
//       .then((response) => response.json())
//       .then((data: { articles: Article[] }) => {
//         // Find the article with the matching headline
//         let chosen = data.articles.find(
//           (art) => params.userId === art.title
//         );

//         if (chosen) {
//           // Set the article data in the state
//           setArticle(chosen);
//         } else {
//           console.log("Couldn't find the article");
//         }
//       });
//   }, []);

//   return (
//     <div className="article-page">
//       {article ? <StyledArticle {...article} /> : <p>Loading...</p>}
//     </div>
//   );
// };

// export default Article;
