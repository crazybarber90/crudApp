import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import Login from "../../components/LoginForm/LoginForm";
import RightPart from "../../components/LoginRightPart.js";
import ContactStyle from "./style";

export default function Contact() {
  // const navigate = useNavigate();

  return (
    <ContactStyle>
      <Login />
      <RightPart />
    </ContactStyle>
  );
}
