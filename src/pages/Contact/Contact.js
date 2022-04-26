import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import Login from "../../components/LoginForm/LoginForm";
import RightPart from "../../components/LoginRightPart.js";
import ContactStyle from "./style";
import React, { useState } from "react";

export default function Contact() {
  // const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <ContactStyle>
      <Login setIsLoggedIn={setIsLoggedIn} setIsVisible={setIsVisible} />
      {isVisible && <RightPart />}
    </ContactStyle>
  );
}
