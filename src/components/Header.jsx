import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import Button from "./common/Button";

const Header = () => {
  return (
    <div
      className="flex items-center justify-center w-full px-7 lg:px-20 
    bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat h-fit relative"
    >
      <div className="z-10 w-full md:max-w-11/12 h-full flex max-lg:flex-col justify-center lg:items-center">
        {/* left side  */}
        <div className=" w-full lg:w-1/2 mt-10 lg:mt-0 text-white  flex flex-col gap-7 ">
          <h1 className=" text-4xl md:text-5xl lg:text-7xl max-w-lg  font-bold text-primary">
            Medical & <br /> Health Care <span className="text-second">Services</span>{" "}
          </h1>
          <p className="text-gray-600 text-xl max-w-md">
            Your health is our top priority. Schedule an appointment with us
            today
          </p>
          <div className="flex items-center gap-5">
            <Button
              text="Appointment"
              bg="bg-second"
              hover="hover:bg-secondHover"
              path="/doctors"
            />
            <Button
              text="contact Us"
              bg="bg-primary"
              hover="hover:bg-primaryHover"
              path="/contact"
            />
          </div>
        </div>
        {/* Right side  */}
        <div className=" w-full lg:w-1/2 h-full">
          <img
            src={assets.header}
            alt="headerImage"
            className=" w-[110%] h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
