import { useNavigate } from "react-router-dom";
import HomePageStyle from "./style";
import SingleArticle from "../../components/SingleArticle.js";
import React, { useState } from "react";
import OneItemPreview from "../../components/OneItemPreview/OneItemPreview";

//this is an example of the destruction of prop's
export default function Home(title, id, previevArticle) {
  const [allArticles, setAllArticles] = useState(true);
  const [oneItemPreview, setOneItemPreview] = useState(false);
  // const navigate = useNavigate();

  return (
    <HomePageStyle>
      {/* <h1>homepage</h1> */}
      <SingleArticle
        title="Blue Article"
        id={1}
        previevArticle={previevArticle}
        // setOneItemPreview={setOneItemPreview}
      />
      <SingleArticle
        title="Red Article"
        id={2}
        previevArticle={previevArticle}
        // setOneItemPreview={setOneItemPreview}
      />
      <SingleArticle
        title="Green Article"
        id={3}
        previevArticle={previevArticle}
        // setOneItemPreview={setOneItemPreview}
      />
      <SingleArticle
        title="Orange Article"
        id={4}
        previevArticle={previevArticle}
        // setOneItemPreview={setOneItemPreview}
      />
      {oneItemPreview && <OneItemPreview setOneItemPreview={false} id={id} />}
    </HomePageStyle>
  );
}
