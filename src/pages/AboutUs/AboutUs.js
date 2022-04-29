import AboutUsStyle from "./style";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AboutUs() {
  const [title, setTitle] = useState("");

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")

      .then(function (response) {
        // console.log(response.data[0].title);
        setTitle(response.data[0].title);
      })

      .catch(function (error) {
        if (error.response.status === 404) {
          console.log("Endpoint ne postoji");
        }
      })

      .then(function () {});
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AboutUsStyle>
      {/* DATA FROM RANDOM API  */}
      <h1>About us</h1>
      Lorem Ipsum <span className="span">{title}</span> is simply dummy text of
      the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into electronic
      typesetting, remaining essentially unchanged. It was popularised in the
      1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
      printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into electronic
      typesetting, remaining essentially unchanged. It was popularised in the
      1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ipsum.
    </AboutUsStyle>
  );
}
