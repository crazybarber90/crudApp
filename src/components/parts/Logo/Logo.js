import LogoStyle from "./style";
import logoImage from "./../../../images/fitness02.jpg";

import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <LogoStyle>
      <img
        src={logoImage}
        style={{ width: "50px" }}
        onClick={() => {
          navigate("/");
        }}
      />
    </LogoStyle>
  );
};

export default Logo;
