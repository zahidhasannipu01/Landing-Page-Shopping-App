import React from "react";
import Container from "../../../utils/Container";
import hnm from "../../../assets/logo/hnm.png";
import obey from "../../../assets/logo/obey.png";
import shopify from "../../../assets/logo/shopify.png";
import locaste from "../../../assets/logo/locaste.png";
import levis from "../../../assets/logo/levis.png";
import amazon from "../../../assets/logo/amazon.png";

const BrandSlider = () => {
  const brandData = [
    {
      id: 1,
      logo: hnm,
    },
    {
      id: 2,
      logo: obey,
    },
    {
      id: 3,
      logo: shopify,
    },
    {
      id: 4,
      logo: locaste,
    },
    {
      id: 5,
      logo: levis,
    },
    {
      id: 6,
      logo: amazon,
    },
  ];
  return (
    <div className="bg-yellow my-10 py-8">
      <Container>
        <div className="grid grid-cols-6 gap-x-20">
          {brandData.map((item, index) => (
            <div key={index.id} className="inline-block mx-5">
              <img
                src={item.logo}
                alt=""
                className="w-full h-[70px] object-contain mx-auto mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BrandSlider;
