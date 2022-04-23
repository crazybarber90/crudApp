import { useNavigate } from "react-router-dom";
import HomePageStyle from "./style";
import SingleArticle from "../../components/SingleArticle.js";
import React, { useState } from "react";
import OneItemPreview from "../../components/OneItemPreview/OneItemPreview";

export default function Home() {
  const [allArticles, setAllArticles] = useState(true);
  const [oneItemPreview, setOneItemPreview] = useState(false);
  // const navigate = useNavigate();

  return (
    <HomePageStyle>
      {/* <h1>homepage</h1> */}
      <SingleArticle title="Blue Article" key={1} />
      <SingleArticle title="Red Article" key={2} />
      <SingleArticle title="Green Article" key={3} />
      <SingleArticle title="Orange Article" key={4} />

      <OneItemPreview />
    </HomePageStyle>
  );
}
