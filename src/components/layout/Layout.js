import LayoutStyle from "./style";
import Footer from "./Footer";
import Header from "./Header";

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