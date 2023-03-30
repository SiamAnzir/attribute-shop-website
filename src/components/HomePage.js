import React from "react";
import NavBar from "./Navbar";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <section>
      <NavBar></NavBar>
      <Home></Home>
      <Products></Products>
      <Contact></Contact>
      <Footer></Footer>
    </section>
  );
};

export default HomePage;
