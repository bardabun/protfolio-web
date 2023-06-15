import React from "react";
import "./styledArticle.css";

const StyledArticle = (props) => {
  const { title, subtitle, intro, sections } = props;

  return (
    <div className="styled-article">
      {/* Render the main title */}
      <div className="article-title">{title} 👇</div>

      {/* Render the subtitle */}

      <div className="article-subtitle">{subtitle}</div>

      {/* Render the introduction */}
      <div className="article-intro">{intro}</div>

      {/* Render the sections */}
      {sections &&
        sections.map((section, index) => (
          <div key={index} className="article-section">
            {/* Render the section title */}
            <div className="article-section-title">{section.title}</div>

            {/* Render the section content */}
            {typeof section.content === "object" ? (
              section.content.map((pr, num) => (
                <p
                  key={num}
                  className="article-section-content"
                >{`${++num}. ${pr}`}</p>
              ))
            ) : (
              <p className="article-section-content">{section.content}</p>
            )}
          </div>
        ))}
    </div>
  );
};

export default StyledArticle;
