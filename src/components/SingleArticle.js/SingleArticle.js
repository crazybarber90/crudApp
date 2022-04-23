import SingleArticleStyle from "./style";
import close from "../../images/close.png";
import settings from "../../images/mechanical-gears-.png";
import React, { useState } from "react";

const SingleArticle = (props) => {
  const [allArticles, setAllArticles] = useState(true);
  const [previewSingleArticle, setPreviewSingleArticles] = useState(false);

  const previevArticle = (key) => {};

  return (
    <SingleArticleStyle key={props.key}>
      <div className="singleArticle">
        <div className="headerOfArticle">
          <img src={settings} />
          <img src={close} />
        </div>
        <div className="bodyOfArticle">
          <h3 onClick={previevArticle()}>{props.title}</h3>
        </div>
        <div className="footerOfArticle">25.06.1991 17:25</div>
      </div>
    </SingleArticleStyle>
  );
};

export default SingleArticle;
