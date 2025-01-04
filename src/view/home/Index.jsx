import React from "react";
import HeroSection from "./components/HeroSection";
import BrandSlider from "./components/BrandSlider";
import NewArrival from "./components/NewArrival";
import PromotionBanner from "./components/PromotionBanner";
import Favorite from "./components/Favorite";
import AppSection from "./components/AppSection";
import Subscribe from "./components/Subscribe";

const Home = () => {
  return (
    <div className="mt-10">
      <HeroSection />
      <BrandSlider />
      <NewArrival />
      <PromotionBanner />
      <Favorite />
      <AppSection />
      <Subscribe />
    </div>
  );
};

export default Home;
