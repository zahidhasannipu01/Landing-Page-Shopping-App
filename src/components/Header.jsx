import React from "react";
import Container from "../utils/Container";
import Logo from "../assets/logo/logo.png";
const Header = () => {
  const menuData = [
    {
      id: 1,
      name: "CATALOGUE",
      link: "/",
    },
    {
      id: 2,
      name: "FASHION",
      link: "/about",
    },
    {
      id: 3,
      name: "FAVOURITE",
      link: "/services",
    },
    {
      id: 4,
      name: "LIFESTYLE",
      link: "/contact",
    },
  ];
  return (
    <Container>
      <div className="flex justify-between items-center">
        <div>
          <img src={Logo} alt="" className="w-full h-[50px]" />
        </div>
        <div className="flex justify-center items-center gap-x-[65px] cursor-pointer">
          <div className="flex justify-center items-center gap-x-[65px] cursor-pointer">
            {menuData.map((item, index) => (
              <div key={index.id}>
                <p className="font-medium text-[16px]">{item.name}</p>
              </div>
            ))}
          </div>
          <div className="w-full">
            <button className="bg-[#000000] text-white px-4 py-2 w-[120px] h-[50px] rounded-lg">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
