import React, { useContext } from "react";
import Hero from "../components/Hero";
import { AppContext } from "../context/AppContext";

const Myappointments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div>
      <Hero titlePage="Patient Appointments" />
      <div className="w-full  flex justify-center items-center p-7 md:px-10 lg:px-20">
        <div className="w-full md:max-w-11/12 mx-auto flex flex-col items-center justify-center">
          {doctors.slice(0, 3).map((doctor) => (
            <div
              key={doctor._id}
              className="w-full flex flex-col lg:flex-row lg:justify-between items-center gap-5 border-y border-gray-300 p-3"
            >
              <div className=" flex gap-7">
                <img
                  src={doctor.image}
                  alt="doctor_image"
                  className="w-40 bg-cyan-500/10 rounded-md"
                />
                <div className="">
                  <p className="font-semibold"> {doctor.name} </p>
                  <p className=""> {doctor.speciality} </p>
                  <p className="font-semibold">Adersses:</p>
                  <p> {doctor.address.line1} </p>
                  <p> {doctor.address.line2} </p>
                  <p>
                    <span className="font-semibold">Date&Time: </span>
                    24 july 2025 | 10:30 PM
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-col gap-5 ">
                <button className="py-2 border border-gray-300 rounded-md w-45 bg-primary text-white cursor-pointer">
                  Pay Online
                </button>
                <button className="py-2 border border-gray-300 rounded-md w-45 bg-second text-white cursor-pointer">
                  Cancel Appointment{" "}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Myappointments;
