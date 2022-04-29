import LoginFormStyle from "./style";
import Input from "../parts/Input";
import React, { useState } from "react";
import TextArea from "../parts/TextArea";
import { showMessage } from "../../services/Alerts";

//credentials which will apear under login form!
import Credentials from "../parts/Credentials/Credentials";

//data for success login
import { data } from "../../components/helpers/loginData";

import Button from "../parts/Button";
// import { submit } from "../../services/Login";
import { handleFormSubmit } from "../../services/handleFormSubmit";

const Login = ({ setIsLoggedIn, setIsVisible, setLoginData }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [textArea, setTextArea] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isLoginSuccess = data.filter((d) => {
      return d.name === name && d.email === email;
    });
    if (isLoginSuccess.length > 0 && textArea !== "") {
      setIsLoggedIn(true);
      setIsVisible(true);
      showMessage("You got it", "success", 3000);
      setLoginData({ name: name, email: email, textArea: textArea });
    } else if (name === "" || email === "") {
      showMessage("empty fields", "error", 3000);
    } else if (
      !email.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      showMessage("Enter valid e-mail", "error", 3000);
    } else if (textArea === "") {
      showMessage("Make a question", "question", 3000);
    } else {
      showMessage("Wrong credentials", "error", 3000);
      setIsLoggedIn(false);
    }
  };

  return (
    <LoginFormStyle>
      <form
        onSubmit={handleFormSubmit}
        name={name}
        email={email}
        textArea={textArea}
      >
        <Input
          fieldType="text"
          fieldPlaceholder="Enter Name"
          fieldOnChange={(event) => {
            setName(event.target.value);
          }}
        />

        <Input
          fieldType="text"
          fieldPlaceholder="Enter email address"
          fieldOnChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <TextArea
          fieldPlaceholder="Question"
          fieldOnChange={(event) => {
            setTextArea(event.target.value);
          }}
        />

        <button type="submit">click</button>
      </form>
      {/* <Button
        buttonOnSubmit={handleFormSubmit(
          e,
          data,
          email,
          name,
          textArea,
          setIsLoggedIn,
          setIsVisible,
          showMessage,
        )}
        buttonTitle="Submit"

      /> */}
      <Credentials />
    </LoginFormStyle>
  );
};

export default Login;
