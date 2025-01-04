import React from "react";
import Container from "../../../utils/Container";

const Subscribe = () => {
  return (
    <div className="bg-yellow py-20 flex flex-col justify-center items-center">
      <Container>
        <div>
          <div>
            <p className="text-3xl text-white font-black text-center">
              JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
            </p>
            <p className="py-5 text-white text-center">
              Type your email down below and be young wild generation
            </p>
            <div className="bg-white py-2 px-2 flex justify-items-center items-center rounded-xl">
              <input
                type="text"
                className="focus:outline-none w-full px-4"
                placeholder="Add your email here"
              />
              <button className="bg-black text-white py-2 px-10 rounded-xl">
                SEND
              </button>
            </div>
          </div>
        </div>{" "}
      </Container>
    </div>
  );
};

export default Subscribe;
