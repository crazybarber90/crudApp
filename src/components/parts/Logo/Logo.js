import LogoStyle from "./style";

import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <LogoStyle>
      <img
        src="/images/fitness02.jpg"
        onClick={() => {
          navigate("/");
        }}
      />
    </LogoStyle>
  );
};

export default Logo;
