import React, { useState } from "react";
import SingleArticleStyle from "./style";
// IMAGES -----------------------------------------------
import close from "../../images/close.png";
import settings from "../../images/mechanical-gears-.png";
//--------------------------------------------------------

const SingleArticle = (props) => {
  const [allArticles, setAllArticles] = useState(true);
  const [previewSingleArticle, setPreviewSingleArticles] = useState(false);

  const previevArticle = (key) => {};

  return (
    <SingleArticleStyle key={props.key} previevArticle={previevArticle}>
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
