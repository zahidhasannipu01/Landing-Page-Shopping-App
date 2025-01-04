import React from "react";
import PromoBanner from "../../../assets/banners/banner-5.png";
import Container from "../../../utils/Container";
const PromotionBanner = () => {
  return (
    <Container>
      <div className="w-full h-[450px] mb-10">
        <img
          src={PromoBanner}
          alt=""
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </Container>
  );
};

export default PromotionBanner;
