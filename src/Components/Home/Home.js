import React from "react";
import Carousel from "./Carousel";
import Info from "./Info";
import Testimonials from "./Testimonials";
import Footer from "../Shared/Footer";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Info />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
