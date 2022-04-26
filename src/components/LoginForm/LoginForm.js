import LoginFormStyle from "./style";
import Input from "../parts/Input";
import Button from "../parts/Button";
import { submit } from "../../services/Login";
import React, { useState } from "react";
import TextArea from "../parts/TextArea";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [textArea, setTextArea] = useState("");

  const data = [
    {
      name: "nikola",
      email: "nikola@react.com",
    },
  ];

  return (
    <LoginFormStyle>
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
        fieldType="text"
        fieldPlaceholder="Question"
        fieldOnChange={(event) => {
          setTextArea(event.target.value);
        }}
      />

      <Button
        buttonOnSubmit={submit(
          data,
          props.setIsLoggedIn,
          email,
          name,
          props.setIsVisible,
          textArea
        )}
        buttonTitle="Submit"
      />
    </LoginFormStyle>
  );
};

export default Login;
