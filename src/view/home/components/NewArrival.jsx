import React from "react";
import Container from "../../../utils/Container";
import Banner1 from "../../../assets/banners/banner-1.png";
import Banner2 from "../../../assets/banners/banner-2.png";
import Banner3 from "../../../assets/banners/banner-3.png";
import { IoMdArrowForward } from "react-icons/io";

const NewArrival = () => {
  return (
    <Container>
      <div className="mb-10">
        <div className="py-10 ">
          <div className="relative">
            <p className="text-3xl font-black ">NEW ARRIVALS</p>
            <div className="absolute top-5 left-28 -z-10">
              <svg
                width="150"
                height="20"
                viewBox="0 0 186 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M84 3.97549C65.3333 8.30883 22.4 19.9755 0 31.9755C56.6667 37.3088 173.2 39.1755 186 3.97549C168 0.975492 122.4 -3.22451 84 3.97549Z"
                  fill="#EBD96B"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-24">
          <div className="w-[400px] h-auto ">
            <img
              src={Banner1}
              alt=""
              className="w-full h-[500px] object-cover rounded-3xl"
            />
            <div className="py-2 flex justify-between items-center">
              <div>
                <p className="text-xl font-medium">Hoodies & Sweetshirt</p>
                <p className="text-md font-medium text-[#7F7F7F]">
                  Explore Now!
                </p>
              </div>
              <div>
                <IoMdArrowForward className="text-2xl text-[#7F7F7F]" />
              </div>
            </div>
          </div>
          <div className="w-[400px] h-auto ">
            <img
              src={Banner2}
              alt=""
              className="w-full h-[500px] object-cover rounded-3xl"
            />
            <div className="py-2 flex justify-between items-center">
              <div>
                <p className="text-xl font-medium">Coats & Parkas</p>
                <p className="text-md font-medium text-[#7F7F7F]">
                  Explore Now!
                </p>
              </div>
              <div>
                <IoMdArrowForward className="text-2xl text-[#7F7F7F]" />
              </div>
            </div>
          </div>
          <div className="w-[400px] h-auto ">
            <img
              src={Banner3}
              alt=""
              className="w-full h-[500px] object-cover rounded-3xl"
            />
            <div className="py-2 flex justify-between items-center">
              <div>
                <p className="text-xl font-medium">Tees & T-Shirt</p>
                <p className="text-md font-medium text-[#7F7F7F]">
                  Explore Now!
                </p>
              </div>
              <div>
                <IoMdArrowForward className="text-2xl text-[#7F7F7F]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewArrival;
