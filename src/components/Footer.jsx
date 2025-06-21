import React from "react";
import { Phone, Mail, Clock, HeartPulse } from "lucide-react";

const Footer = () => {
  return (
    <div
      className=" bg-[url('/bg.jpg')] bg-cover bg-no-repeat bg-center 
      flex justify-center items-center w-full p-7 md:px-10 lg:px-20 "
    >
      <div className="w-full max-w-11/12 h-full flex-col justify-center items-center">
        <div className="flex w-full flex-col lg:flex-row lg:justify-between gap-5 ">
          <div className="lg:w-1/3">
            <p className="text-primary font-semibold text-xl">
              Get in Touch with us
            </p>
            <p className="text-gray-600">Lorem Ipsum is simply dummy</p>
          </div>
          <div className="flex flex-wrap justify-between w-full gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10  flex justify-center items-center p-1 bottom-5 right-5 rounded-full bg-primary hover:animate-bounce text-white">
                <Phone className="w-5 " />
              </div>
              <div>
                <p className="text-primary font-semibold">Call Us</p>
                <p className="text-gray-600">+1 123 456 7890</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10  flex justify-center items-center p-1 bottom-5 right-5 rounded-full bg-primary hover:animate-bounce text-white">
                <Mail className="w-5 " />
              </div>
              <div>
                <p className="text-primary font-semibold">Send us a Mail</p>
                <p className="text-gray-600">info@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10  flex justify-center items-center p-1 bottom-5 right-5 rounded-full bg-primary hover:animate-bounce text-white">
                <Clock className="w-5 " />
              </div>
              <div>
                <p className="text-primary font-semibold">Opening Time</p>
                <p className="text-gray-600">Mon -Sat: 7:00 - 17:00</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5 text-gray-300" />
        <div className="flex flex-col lg:flex-row gap-5 w-full mx-auto py-7">
          <div className="flex flex-col lg:max-w-1/4">
            <div className="flex items-center pb-3 text-3xl font-bold gap-1">
              <HeartPulse className="text-second w-7 h-7" />
              <p className="text-primary">MediCare</p>
            </div>
            <p className="text-gray-500">
              <span className="text-second">ClinicMaster </span>
              Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, Sed Diam
              Nonummy Nibh Euismod Tincidunt Ut Laoreet Dolore Agna Aliquam Erat
              . Wisi Enim Ad Minim Veniam, Quis Tation. Sit Amet, Consec Tetuer.
              Ipsum Dolor
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:w-3/4 gap-5 ">
            <div className="flex flex-col gap-2 text-sm ">
              <p className="text-primary mb-2 text-lg font-semibold">
                Our Services
              </p>
              <p className="text-gray-500">Emergency Care</p>
              <p className="text-gray-500">Operation Theater</p>
              <p className="text-gray-500">Medical Checkup</p>
              <p className="text-gray-500">Diagnostic Center</p>
              <p className="text-gray-500">Outdoor Checkup</p>
            </div>
            <div className="flex flex-col gap-2 text-sm ">
              <p className="text-primary mb-2 text-lg font-semibold">
                Our Services
              </p>
              <p className="text-gray-500">Emergency Care</p>
              <p className="text-gray-500">Operation Theater</p>
              <p className="text-gray-500">Medical Checkup</p>
              <p className="text-gray-500">Diagnostic Center</p>
              <p className="text-gray-500">Outdoor Checkup</p>
            </div>
            <div className="flex flex-col gap-2 text-sm ">
              <p className="text-primary mb-2 text-lg font-semibold">
                Our Services
              </p>
              <p className="text-gray-500">Emergency Care</p>
              <p className="text-gray-500">Operation Theater</p>
              <p className="text-gray-500">Medical Checkup</p>
              <p className="text-gray-500">Diagnostic Center</p>
              <p className="text-gray-500">Outdoor Checkup</p>
            </div>
            <div className="flex flex-col gap-2 text-sm ">
              <p className="text-primary mb-2 text-lg font-semibold">
                Our Services
              </p>
              <p className="text-gray-500">Emergency Care</p>
              <p className="text-gray-500">Operation Theater</p>
              <p className="text-gray-500">Medical Checkup</p>
              <p className="text-gray-500">Diagnostic Center</p>
              <p className="text-gray-500">Outdoor Checkup</p>
            </div>
          </div>
        </div>
        <hr className="my-5 text-gray-300" />
        <div className="flex flex-col lg:flex-row gap-5 lg:justify-between w-full">
          <div>
            <p className="text-2xl font-semibold text-primary">
              Important Updates Waiting for you
            </p>
            <p className="text-gray-500">
              Get our latest and best contents right into your inbox
            </p>
          </div>
          <div className="border border-gray-300 rounded-xl p-1 flex">
            <input
              type="email"
              placeholder="Your Email Adress"
              className="focus:outline-none w-full p-2"
            />
            <button className="w-40 py-2 text-white bg-second rounded-xl ">
              Subscrip
            </button>
          </div>
        </div>
        <hr className="my-5 text-gray-300" />

        <p className="text-gray-500 text-center">© 2025 <span className="text-second">designed by Ahmed Khaled</span> . All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
