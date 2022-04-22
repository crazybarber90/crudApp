import HeaderStyle from "./style";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <ul>
        <li
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            navigate("/about-us");
          }}
        >
          About us
        </li>
        <li
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact
        </li>
      </ul>
    </>
  );
};

export default Header;
