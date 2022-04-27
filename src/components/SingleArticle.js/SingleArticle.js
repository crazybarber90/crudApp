import React, { useState } from "react";
import SingleArticleStyle from "./style";
// IMAGES -----------------------------------------------
import close from "../../images/close.png";
import settings from "../../images/mechanical-gears-.png";
//--------------------------------------------------------

const SingleArticle = (props) => {
  const previevArticle = (id) => {
    // myItems.filter((item) => (item.id = id));
    // props.setOneItemPreview(true);
  };

  return (
    <SingleArticleStyle
      id={props.id}
      oneItemPreview={props.oneItemPreview}
      // setOneItemPreview={props.setOneItemPreview}
    >
      <div className="singleArticle">
        <div className="headerOfArticle">
          <img src={settings} />
          <img src={close} />
        </div>
        <div className="bodyOfArticle">
          <h3 onClick={previevArticle}>{props.title}</h3>
        </div>
        <div className="footerOfArticle">25.06.1991 17:25</div>
      </div>
    </SingleArticleStyle>
  );
};

export default SingleArticle;
