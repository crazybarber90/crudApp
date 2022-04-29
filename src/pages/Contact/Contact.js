import React, { useState } from "react";
import Login from "../../components/LoginForm/LoginForm";
import RightPart from "../../components/LoginRightPart.js";
import ContactStyle from "./style";

export default function Contact(props) {
  // const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
    textArea: "",
  });

  return (
    <ContactStyle>
      <Login
        setIsLoggedIn={setIsLoggedIn}
        setIsVisible={setIsVisible}
        setLoginData={setLoginData}
      />
      {isVisible && <RightPart loginData={loginData} />}
    </ContactStyle>
  );
}
