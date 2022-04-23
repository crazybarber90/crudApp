import FooterStyle from "./style";

const Footer = () => {
  return (
    <FooterStyle>
      <div>Povered by ReactClass &copy; {new Date().getFullYear()} </div>
    </FooterStyle>
  );
};

export default Footer;
