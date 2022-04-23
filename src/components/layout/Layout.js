import LayoutStyle from "./style";
import Footer from "./Footer";
import Header from "./Header";
import AboutUs from "../../pages/AboutUs";
import Contact from "../../pages/Contact";
import HomePage from "../../pages/HomePage";
import NotFound from "../../pages/NotFound";

export default function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

{
  /* <Header setIsLoggedIn={props.isLoggedIn} />
{props.children}
<Footer /> */
}
