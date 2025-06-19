import React, { useEffect, useState } from "react";
import { assets, slides } from "../assets/assets_frontend/assets";



const Sec5 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // auto-slide every 3s
    return () => clearInterval(interval); // clean up on unmount
  }, []);

  return (
    <div
      className="flex justify-center items-center w-full px-7 lg:px-20 pt-14
        bg-[url('/banner.jpg')] bg-fixed bg-cover bg-center bg-no-repeat h-fit relative"
    >
      <div className="inset-0 bg-primaryHover opacity-90 absolute"></div>
      <div className="z-10 w-full md:max-w-11/12  h-full flex flex-col-reverse lg:flex-row gap-14 justify-center items-center">
        <div className="  w-full lg:w-1/2 max-w-lg relative">
          <img
            src={assets.header_img}
            className=" min-w-full h-full object-cover "
            alt="Inverted"
          />
        </div>
        <div className="w-full lg:w:1/2 max-w-lg">
          <h2 className="text-3xl font-bold text-white mt-5 max-w-lg">
            Real Patients, Real Stories. And our achievements
          </h2>
          <div className="w-full gap-6 my-5">
            <div className="max-w-lg mx-auto mt-10">
              <div className="relative w-full h-80 sm:h-60 overflow-hidden rounded-xl shadow-lg">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                      index === currentIndex ? "translate-96" : "translate-0"
                    }`}
                  >
                    <div className="bg-white rounded-xl max-w-lg flex flex-col sm:flex-row overflow-hidden">
                      <div className="sm:bg-cyan-500/15 sm:w-[30%] h-full flex sm:flex-col p-5 sm:p-0">
                        <img
                          src={slide.image}
                          alt="checkimage"
                          className="w-20 sm:w-full rounded-xl sm:rounded-b-none"
                        />
                        <div className="p-3 flex flex-col items-center">
                          <p className="text-primary font-semibold">
                            Kenneth Fong
                          </p>
                          <p className="text-sm text-second">Patient</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:w-[70%] py-5 sm:py-10 h-full px-5">
                        <p className="font-bold text-primary mb-3">
                          Best Treatment
                        </p>
                        <p className=" text-sm text-gray-500 ">{slide.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec5;
