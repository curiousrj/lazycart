import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <ProductList />
    </React.Fragment>
  );
};

export default Home;
