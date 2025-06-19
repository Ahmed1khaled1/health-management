import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";

const Hero = ({titlePage}) => {
  return (
    <div className="w-full h-60 md:h-80 lg:h-90 relative  bg-[url('/banner2.jpg')] bg-center bg-cover bg-no-repeat">
      <div className="z-0 absolute inset-0 w-full bg-primary opacity-80 "></div>
      <div className="z-10 w-full h-full flex justify-center lg:justify-between items-center px-7 text-white ">
        <p
          className="hidden lg:block text-center font-bold mx-auto z-10"
          style={{
            transform: "rotate(180deg)",
            writingMode: "vertical-lr",
            textOrientation: "mixed",
          }}
        >
          24/7 EMERGENCY SERVICE{" "}
        </p>
        <h1 className="text-5xl md:text-7xl font-bold z-10">{titlePage}</h1>
        <div className="hidden lg:flex flex-col gap-4 text-white z-10">
          <Instagram />
          <Facebook />
          <Twitter />
          <Youtube />
        </div>
      </div>
    </div>
  );
};

export default Hero;
