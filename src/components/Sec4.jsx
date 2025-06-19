import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Sec4 = () => {
  return (
    <div
      className="flex justify-center items-center w-full px-7 lg:px-20 py-14
    bg-[url('/banner2.jpg')] bg-fixed bg-cover bg-center bg-no-repeat h-fit relative"
    >
      <div className="inset-0 bg-primaryHover opacity-90 absolute"></div>
      <div className="z-10 w-full md:max-w-11/12  h-full flex flex-col lg:flex-row gap-14 justify-center items-center">
        <div className="imageContainer  w-full lg:w-1/2 max-w-lg relative">
          <img
            src={assets.sec4_img}
            className=" min-w-full h-full object-cover "
            alt="Inverted"
          />

          <div className=" bg-second text-white flex flex-col gap-1 justify-center items-center absolute bottom-0 right-0 rounded-xl w-[30%] h-[28%] ">
            <p className="text-3xl sm:text-4xl font-bold">20+</p>
            <p className="text-sm sm:text-md">Years</p>
            <p> Experiance</p>
          </div>
        </div>
        <div className="w-full lg:w:1/2 max-w-lg">
          <h2 className="text-3xl font-bold text-white mt-5 max-w-lg">
            Why Choose Us for Your Health care Needs
          </h2>
          <div className="w-full grid grid-cols-2 gap-6 mt-5">
            <div className="backdrop-blur-xl rounded-xl max-w-60 p-5 text-white flex flex-col place-items-center gap-2">
              <div className="bg-second w-10 h-10 flex items-center justify-center rounded-full">
                <img src="/check.png" alt="checkimage" className="w-5" />
              </div>
              <p className="font-bold">More Experience</p>
              <p className="text-center text-sm text-gray-500 font-light">
                We offer a wide range of health services to meet all your needs.
              </p>
            </div>
            <div className="backdrop-blur-xl rounded-xl max-w-60 p-5 text-white flex flex-col place-items-center gap-2">
              <div className="bg-second w-10 h-10 flex items-center justify-center rounded-full">
                <img src="/check.png" alt="checkimage" className="w-5" />
              </div>
              <p className="font-bold">Seamless care </p>
              <p className="text-center text-sm text-gray-500 font-light">
                We offer a wide range of health services to meet all your needs.
              </p>
            </div>
            <div className="backdrop-blur-xl rounded-xl max-w-60 p-5 text-white flex flex-col place-items-center gap-2">
              <div className="bg-second w-10 h-10 flex items-center justify-center rounded-full">
                <img src="/check.png" alt="checkimage" className="w-5" />
              </div>
              <p className="font-bold">The right answers?</p>
              <p className="text-center text-sm text-gray-500 font-light">
                We offer a wide range of health services to meet all your needs.
              </p>
            </div>
            <div className="backdrop-blur-xl rounded-xl max-w-60 p-5 text-white flex flex-col place-items-center gap-2">
              <div className="bg-second w-10 h-10 flex items-center justify-center rounded-full">
                <img src="/check.png" alt="checkimage" className="w-5" />
              </div>
              <p className="font-bold">The right answers?</p>
              <p className="text-center text-sm text-gray-500 font-light">
                We offer a wide range of health services to meet all your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec4;
