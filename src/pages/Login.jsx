import React from 'react'
import { useNavigate } from "react-router-dom";
import Hero from '../components/Hero';
import { assets } from "../assets/assets_frontend/assets";
import { Clock, Mail, MapPin, MoveUpRight, PhoneCall } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Hero titlePage="Login" />
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

          <div className="w-full flex items-center gap-4">
            <div className="bg-cyan-500/10 rounded-full flex items-center gap-5 py-2 px-4">
              <img
                src={assets.group_profiles}
                alt="groupPic"
                className="border-r pr-5 border-gray-300"
              />
              <p className="text-gray-800 font-semibold">
                Talk to over 215 doctor
              </p>
            </div>
            <div
              onClick={() => navigate("/doctors")}
              className="bg-cyan-400/10 p-6 rounded-full text-cyan-500 cursor-pointer hover:text-white hover:bg-second"
            >
              <MoveUpRight />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
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
        <form className="bg-second p-7 my-7 pb-10 rounded-2xl text-white w-full max-w-lg ">
          <div className="mb-10">
            <h2 className="font-bold text-3xl">Login to Your Account</h2>
            <p>Please log in to book appointment</p>
          </div>
          <div className="w-full grid grid-cols-1 gap-5 space-y-3">
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
            <button className="w-full bg-primary py-2 rounded-xl">
              Create Account
            </button>
          </div>

          <p className="mt-5">
            Don't have an account?{" "}
            <span
              className="text-primary cursor-pointer underline"
              onClick={() => navigate("/register")}
            >
              Create Acount
            </span>
          </p>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Login