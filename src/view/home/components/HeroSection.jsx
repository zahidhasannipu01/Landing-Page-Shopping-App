import React from "react";
import backgroundImage from "../../../assets/background/bg.png";
import Container from "../../../utils/Container";
const HeroSection = () => {
  return (
    <Container>
      <div className="w-full h-[680px] bg-[#f4f6f5] rounded-3xl ">
        <img src={backgroundImage} alt="" className="w-full h-full" />
      </div>
    </Container>
  );
};

export default HeroSection;
