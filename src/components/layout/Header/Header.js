import HeaderStyle from "./style";
import { useNavigate } from "react-router-dom";
import Logo from "../../parts/Logo";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderStyle>
      <Logo />
      <div className="headerMenu">
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
      </div>
    </HeaderStyle>
  );
};

export default Header;
