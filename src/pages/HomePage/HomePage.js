import { useNavigate } from "react-router-dom";
import HomePageStyle from "./style";
import SingleArticle from "../../components/SingleArticle.js";
import React, { useState } from "react";
import OneItemPreview from "../../components/OneItemPreview/OneItemPreview";

//this is an example of the destruction of prop's
export default function Home(title, key, previevArticle) {
  const [allArticles, setAllArticles] = useState(true);
  const [oneItemPreview, setOneItemPreview] = useState(false);
  // const navigate = useNavigate();

  return (
    <HomePageStyle>
      {/* <h1>homepage</h1> */}
      <SingleArticle
        title="Blue Article"
        key={1}
        previevArticle={previevArticle}
        setOneItemPreview={setOneItemPreview}
      />
      <SingleArticle
        title="Red Article"
        key={2}
        previevArticle={previevArticle}
        setOneItemPreview={setOneItemPreview}
      />
      <SingleArticle
        title="Green Article"
        key={3}
        previevArticle={previevArticle}
        setOneItemPreview={setOneItemPreview}
      />
      <SingleArticle
        title="Orange Article"
        key={4}
        previevArticle={previevArticle}
        setOneItemPreview={setOneItemPreview}
      />
      {oneItemPreview && <OneItemPreview />}
    </HomePageStyle>
  );
}
