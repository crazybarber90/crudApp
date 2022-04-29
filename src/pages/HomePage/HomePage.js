import { useNavigate } from "react-router-dom";
import HomePageStyle from "./style";
import SingleArticle from "../../components/SingleArticle.js";
import React, { useState } from "react";
import { articlesData } from "../../components/helpers/articles";
// import OneItemPreview from "../../components/OneItemPreview/OneItemPreview";

//this is an example of the destruction of prop's
export default function Home() {
  const [oneItemPreview, setOneItemPreview] = useState(false);

  // const navigate = useNavigate();

  return (
    <HomePageStyle>
      {articlesData.map((article) => {
        return (
          <SingleArticle
            title={article.title}
            id={article.id}
            date={article.date}
            setOneItemPreview={setOneItemPreview}
            oneItemPreview={oneItemPreview}
          />
        );
      })}
    </HomePageStyle>
  );
}
