import React from "react";
import Container from "../../../utils/Container";
import banner from "../../../assets/banners/banner-8.png";
import app from "../../../assets/banners/app.png";

const AppSection = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 py-20 items-center">
        <div className="flex justify-center">
          <div>
            <div>
              <p className="text-5xl font-black ">
                DOWNLOAD APP & <br /> GET THE VOUCHER!
              </p>
              <p className="py-10 text-lg">
                Get 30% off for first transaction using <br />
                Rondovision mobile app for now.
              </p>
              <img src={app} alt="" className="w-[250px] h-full" />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={banner} alt="" className="w-[400px] h-full" />
        </div>
      </div>
    </Container>
  );
};

export default AppSection;
