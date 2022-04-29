import { useNavigate } from "react-router-dom";
import HomePageStyle from "./style";
import SingleArticle from "../../components/SingleArticle.js";
import React, { useEffect, useState } from "react";
import { articlesData } from "../../components/helpers/articles";
import OneItemPreview from "../../components/OneItemPreview";
// import OneItemPreview from "../../components/OneItemPreview/OneItemPreview";

//this is an example of the destruction of prop's
export default function Home() {
  const [oneItemPreview, setOneItemPreview] = useState(false);
  const [oneItemData, setOneItemData] = useState();
  const [allData, setAllData] = useState();
  // const navigate = useNavigate();

  useEffect(() => {
    setAllData([...articlesData]);
  }, []);

  // console.log("alldata", allData);
  return (
    <HomePageStyle>
      {oneItemPreview && (
        <OneItemPreview
          oneItemPreview={oneItemPreview}
          setOneItemPreview={setOneItemPreview}
          oneItemData={oneItemData}
        />
      )}

      {allData &&
        allData.map((article) => {
          return (
            <SingleArticle
              key={article.id}
              allData={allData}
              setAllData={setAllData}
              title={article.title}
              id={article.id}
              date={article.date}
              setOneItemPreview={setOneItemPreview}
              oneItemPreview={oneItemPreview}
              setOneItemData={setOneItemData}
            />
          );
        })}
    </HomePageStyle>
  );
}
