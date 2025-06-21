import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import Button from "./common/Button";
import {
  Clock,
  Locate,
  Mail,
  MapPin,
  MoveUpRight,
  PhoneCall,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactSec = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center  w-full h-fit px-7 lg:px-20 my-10 mx-auto sm:my-20 md:max-w-11/12">
      <div className="w-full h-full flex flex-col xl:flex-row justify-center items-center gap-10">
        {/* left side  */}
        <div className="flex flex-col gap-8 max-w-110 sm:max-w-130 md:max-w-170 lg:max-w-200 w-full xl:w-3/5  ">
          <h2 className="text-4xl lg:text-5xl text-primary font-bold">
            Connect with Us for Your Healthcare Needs
          </h2>
          <p className="text-gray-500 text-lg">
            Reach out for support, feedback, or to schedule an appointment. Fill
            out the form, and we'll promptly assist you and confirm your visit
            with our healthcare professionals.
          </p>

          <div className="w-full flex items-center gap-2 h-13 md:h-17">
            <div className="h-full bg-cyan-500/10 rounded-full flex items-center gap-5 p-3 md:pr-7 px-4">
              <img
                src={assets.group_profiles}
                alt="groupPic"
                className="border-r pr-5 border-gray-300 w-25 md:w-30"
              />
              <p className="text-gray-800 text-xs sm:text-base font-semibold">
                Talk to over 215 doctor
              </p>
            </div>
            <div
              onClick={() => navigate("/doctors")}
              className="h-full aspect-square bg-cyan-400/10 flex justify-center items-center rounded-full text-cyan-500 cursor-pointer hover:text-white hover:bg-second"
            >
              <MoveUpRight className="w-5" />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-7">
            <div className="flex items-center gap-3 bg-cyan-500/10 p-5 rounded-xl">
              <div className="bg-white p-4 rounded-full text-cyan-500  hover:text-white hover:bg-second">
                <MapPin />
              </div>
              <div>
                <p className="font-bold text-gray-800">Address</p>
                <p className="text-gray-500 ">
                  234 Oak Drive, Villagetown, USA{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-cyan-500/10 p-5 rounded-xl">
              <div className="bg-white p-4 rounded-full text-cyan-500  hover:text-white hover:bg-second">
                <PhoneCall />
              </div>
              <div>
                <p className="font-bold text-gray-800">Call Us</p>
                <p className="text-cyan-500 ">+1 123 456 7890 </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-cyan-500/10 p-5 rounded-xl">
              <div className="bg-white p-4 rounded-full text-cyan-500  hover:text-white hover:bg-second">
                <Mail />
              </div>
              <div>
                <p className="font-bold text-gray-800">Send us a Mail</p>
                <p className="text-cyan-500 ">email@domain.com </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-cyan-500/10 p-5 rounded-xl">
              <div className="bg-white p-4 rounded-full text-cyan-500  hover:text-white hover:bg-second">
                <Clock />
              </div>
              <div>
                <p className="font-bold text-gray-800">Opening Time</p>
                <p className="text-gray-500 ">Mon-Thu: 8:00am-5:00pm </p>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className=" w-full xl:w-2/5 h-full flex flex-col md:flex-row gap-7 items-center justify-center relative max-w-2xl">
          <form className="bg-second p-7 pb-10 rounded-2xl text-white w-full max-w-lg">
            <div className="mb-10">
              <h2 className="font-bold text-3xl"> Get in Touch </h2>
              <p className="font-semibold">You can reach us anytime</p>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 space-y-3">
              <input
                type="text"
                placeholder="First Name"
                required
                className=" w-full h-12 border-b-2 border-white focus:border-amber-200 bg-second py-2 px-3 text-white focus:outline-none focus:bg-second"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                className=" w-full h-12 border-b-2 border-white focus:border-amber-200 bg-second py-2 px-3 text-white focus:outline-none focus:bg-second"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className=" w-full h-12 border-b-2 border-white focus:border-amber-200 bg-second py-2 px-3 text-white focus:outline-none focus:bg-second"
              />
              <input
                type="numeric"
                placeholder="Phone Number"
                required
                className=" w-full h-12 border-b-2 border-white focus:border-amber-200 bg-second py-2 px-3 text-white focus:outline-none focus:bg-second"
              />
            </div>
            <textarea
              placeholder="Your Message"
              required
              rows="4"
              className="w-full h-32 mb-5 border-b-2 border-white focus:border-amber-200 
             bg-second py-2 px-3 text-white focus:outline-none 
             focus:bg-second resize-none"
            ></textarea>
            <Button text="Submit" bg="bg-primary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSec;
