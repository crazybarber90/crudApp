import React, { useState, useEffect } from "react";
import SingleArticleStyle from "./style";
import close from "../../images/close.png";
import settings from "../../images/mechanical-gears-.png";
import OneItemEdit from "../OneItemEdit";

const SingleArticle = (props) => {
  const [showOneItemEdit, setShowOneItemEdit] = useState(false);

  // Function that will show and remove clicked article !
  const previevArticle = (id, title, date) => {
    props.setOneItemPreview(!props.oneItemPreview);
    props.setOneItemData({ title: title, id: id, date: date });
  };

  const removeArticle = (id) => {
    let newData = props.allData.filter((item) => item.id !== props.id);
    // console.log("newData", newData);
    props.setAllData(newData);
  };

  return (
    <SingleArticleStyle>
      {showOneItemEdit && (
        <OneItemEdit
          id={props.id}
          title={props.title}
          date={props.date}
          setShowOneItemEdit={setShowOneItemEdit}
          showOneItemEdit={showOneItemEdit}
          setAllData={props.setAllData}
          allData={props.allData}
        />
      )}
      <div className="singleArticle">
        <div className="headerOfArticle">
          <img
            src={settings}
            onClick={() => setShowOneItemEdit(!showOneItemEdit)}
          />
          <img src={close} onClick={() => removeArticle(props.id)} />
        </div>
        <div className="bodyOfArticle">
          <h3 onClick={() => previevArticle(props.id, props.title, props.date)}>
            {props.title}
          </h3>
        </div>
        <div className="footerOfArticle">{props.date}</div>
      </div>
    </SingleArticleStyle>
  );
};

export default SingleArticle;
