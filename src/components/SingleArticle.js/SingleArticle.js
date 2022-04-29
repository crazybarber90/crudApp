import React, { useState } from "react";
import SingleArticleStyle from "./style";
import OneItemPreview from "../../components/OneItemPreview";
import close from "../../images/close.png";
import settings from "../../images/mechanical-gears-.png";

const SingleArticle = (props) => {
  // Function that will show and remove clicked article !
  const previevArticle = (id) => {
    // articlesData.filter((item) => item.id === props.id) &&
    props.setOneItemPreview(!props.oneItemPreview);
  };

  return (
    <>
      {props.oneItemPreview && (
        <OneItemPreview
          title={props.title}
          date={props.date}
          id={props.id}
          oneItemPreview={props.oneItemPreview}
          setOneItemPreview={props.setOneItemPreview}
        />
      )}
      <SingleArticleStyle>
        <div className="singleArticle">
          <div className="headerOfArticle">
            <img src={settings} />
            <img src={close} />
          </div>
          <div className="bodyOfArticle">
            <h3 onClick={previevArticle}>{props.title}</h3>
          </div>
          <div className="footerOfArticle">{props.date}</div>
        </div>
      </SingleArticleStyle>
    </>
  );
};

export default SingleArticle;
