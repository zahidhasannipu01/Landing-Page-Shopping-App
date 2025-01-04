import React from "react";
import Container from "../utils/Container";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const socialMedia = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
    },

    {
      name: "Instagram",

      icon: <FaInstagram />,
    },
    {
      name: "Twitter",

      icon: <FaTwitter />,
    },
    {
      name: "Linkedin",

      icon: <FaLinkedinIn />,
    },
  ];
  const footerMenu = [
    {
      name: "Company",
      submenu: [
        { name: "About" },
        { name: "Contact Us" },
        { name: "Support" },
        { name: "Careers" },
      ],
    },
    {
      name: "Quick Links",
      submenu: [
        { name: "Share Location" },
        { name: "OrdersTracking" },
        { name: "Size Guide" },
        { name: "FAQs" },
      ],
    },
    {
      name: "Legal",
      submenu: [{ name: "Terms & Conditions" }, { name: "Privacy Policy" }],
    },
  ];
  return (
    <div className="bg-black w-full py-[119px]">
      <Container>
        <div className="flex justify-between ">
          <div className="flex flex-col gap-y-10">
            <div>
              <p className="text-white font-bold text-[40px]">Fashion</p>
            </div>
            <div>
              <p className="text-gray text-[15px]">
                Complete your style with awesome <br /> clothes from us.
              </p>
            </div>
            <div className="flex justify-start items-center gap-x-4">
              {socialMedia.map((item, index) => (
                <div key={index}>
                  <p className="bg-yellow px-2 py-2 text-lg rounded-xl">
                    {item.icon}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-x-[150px] text-[16px]">
            {footerMenu.map((item, index) => {
              return (
                <div key={index} className="">
                  <div className="pb-10">
                    <p className="text-white">{item.name}</p>
                  </div>
                  <div className="flex flex-col gap-y-8">
                    {item.submenu.map((subitem, subindex) => {
                      return (
                        <div key={subindex}>
                          <p className="text-gray ">{subitem.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
