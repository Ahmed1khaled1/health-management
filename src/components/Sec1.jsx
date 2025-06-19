import React from "react";
import { PhoneCall, Clock } from "lucide-react";
import Li from "./common/Li";
import Button from "./common/Button";
import { assets } from "../assets/assets_frontend/assets";

const openHours = [
  { day: "Monday", time: "9:00 AM - 5:00 PM" },
  { day: "Tuesday", time: "9:00 AM - 5:00 PM" },
  { day: "Wednesday", time: "9:00 AM - 5:00 PM" },
  { day: "Thursday", time: "9:00 AM - 5:00 PM" },
  { day: "Friday", time: "9:00 AM - 5:00 PM" },
  { day: "Saturday", time: "10:00 AM - 2:00 PM" },
];

const Sec1 = () => {
  return (
    <div className="flex items-center justify-center  w-full h-fit px-7 lg:px-20 my-10 mx-auto sm:my-20 md:max-w-11/12">
      <div className="w-full h-full flex flex-col xl:flex-row-reverse justify-center items-center gap-10">
        {/* left side  */}
        <div className="flex flex-col gap-8 max-w-110 sm:max-w-130 md:max-w-170 lg:max-w-200 w-full xl:w-1/2  ">
          <h2 className="text-4xl lg:text-5xl text-primary font-bold">
            World ClassName Patient Facilities Designed for You
          </h2>
          <p className="text-gray-500 text-lg">
            Experience the future of healthcare. Our state-of-the-art facilities
            are equipped with the latest technology, ensuring you receive the
            world's best quality treatment. Here, cutting-edge tools meet
            unparalleled expertise, providing a comfortable and effective path
            to optimal health.
          </p>
          <ul className="list-none grid grid-cols-1 sm:grid-cols-2 w-full text-gray-800 font-medium space-y-2 ">
            <Li text="Advanced Diagnostic Tools" />
            <Li text="Research and Development" />
            <Li text="Emergency Services" />
            <Li text="Advanced Imaging Services" />
            <Li text="Intensive Care Units (ICUs)" />
            <Li text="Rehabilitation Services" />
            <Li text="Telemedicine Facilities" />
            <Li text="Patient-Centric Approach" />
            <Li text="Multidisciplinary Team" />
            <Li text="Health Information Technology" />
          </ul>
          <div className="w-full flex items-center gap-8">
            <Button
              text="Appointment"
              bg="bg-primary"
              hover="hover:bg-primaryHover"
              path="/doctors"
            />
            <div className="flex items-center gap-2">
              <PhoneCall className="text-second w-10 h-10 animate-pulse" />
              <div>
                <p className="text-gray-600">Contact us?</p>
                <p className="font-semibold text-gray-800">+1 123 456 7890</p>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className=" w-full xl:w-1/2 h-full flex flex-col md:flex-row gap-7 items-center justify-center lg:justify-start relative max-w-2xl">
          <img
            src={assets.sec1_img}
            alt="aboutImage"
            className=" max-w-sm sm:max-w-lg h-auto rounded-2xl"
          />
          <div className=" md:absolute right-0 bottom-5 p-4 w-sm md:w-60 h-fit rounded-2xl space-y-3 bg-second text-white text-sm ">
            <div className="relative">
              <div className="bg-primary w-12 md:w-20 h-12 md:h-20 rounded-full absolute -top-8 md:-top-12 -right-8 md:-right-12 border-4 flex items-center justify-center">
                <Clock className="w-12 h-12" />
              </div>
              <p className="font-bold text-lg mb-3">Open Hours</p>
              <div className="flex flex-col gap-2">

              {openHours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between items-center"
                >
                  <p>{item.day} </p>
                  <p className="font-bold">{item.time} </p>
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

export default Sec1;
