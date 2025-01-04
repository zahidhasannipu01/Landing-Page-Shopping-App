import React from "react";

const Container = ({ children }) => {
  return (
    <div className="lg:max-w-[1240px] 2xl:max-w-[1440px] mx-auto">
      {children}
    </div>
  );
};

export default Container;
