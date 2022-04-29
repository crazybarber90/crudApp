import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route element={<HomePage />} path="/" exact />
            <Route element={<AboutUs />} path="/about-us" exact />
            <Route element={<Contact />} path="/contact" exact />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
