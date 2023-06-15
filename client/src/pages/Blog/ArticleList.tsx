import React from "react";
import ArticleItem from "./ArticleItem";
import "./articleList.css";

export default function ArticleList({ articles }: { articles: any[] }) {
  return (
    <>
      <h3 className="header-rec-pub">
        <b>- RECENTLY PUBLISHED -</b>
      </h3>
      <div>
        {articles.map((article: any, i: number) => (
          <ArticleItem key={i} article={article} />
        ))}
      </div>
    </>
  );
}
