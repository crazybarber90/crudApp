import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
// import User from "./pages/User";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/layout/Layout";
// import axios from "axios";
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
      {/* <Header setValue={setValue} />
        Homepage
        <hr />
        Title is: {title}
      <Footer /> */}
    </div>
  );
}

export default App;
