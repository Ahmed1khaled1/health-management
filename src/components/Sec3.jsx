import React from "react";
import Button from "./common/Button";
import { specialityData } from "../assets/assets_frontend/assets";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sec3 = () => {
  const navigate = useNavigate();
  return (
    <div className="p-7 md:px-20 w-full pt-10 flex justify-center items-center bg-gray-100 relative ">
      <div className="absolute inset-0 bg-cyan-500 opacity-10"></div>

      <div className="z-10 w-full md:max-w-11/12 flex flex-col items-center justify-center ">
        <div className="w-full flex items-end justify-between mb-5">
          <h2 className="text-primary text-3xl lg:text-4xl font-bold max-w-md lg:max-w-lg ">
            Start Feeling Your Best Explore Our Wellness Services
          </h2>
          <div className="hidden md:inline-flex">
            <Button
              text="View All"
              bg="bg-primary"
              hover="hover:bg-primaryHover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
          {specialityData.map((item) => (
            <div
              key={item.speciality}
              className="relative max-w-md h-full cursor-pointer"
              onClick={() => {
                navigate(`/doctors/${item.speciality}`);
                scrollTo(0,0)
              }}
            >
              <div className="p-5 h-full group bg-white hover:bg-second hover:text-white space-y-1 max-w-md rounded-xl">
                <div className="flex justify-between ">
                  <img
                    src={item.image}
                    alt="specialityimage"
                    className="w-20 h-20"
                  />
                  <img
                    src={item.image}
                    alt="specialityimage"
                    className="w-25 h-25 opacity-25 absolute right-5 top-5"
                  />
                </div>
                <h3 className="text-xl text-primary group-hover:text-white font-bold">
                  {item.speciality}
                </h3>
                <p className="">{item.description} </p>
                <div
                  className="mt-5 border-b border-dashed border-gray-500 group-hover:border-white w-3/4"
                  style={{
                    borderBottomStyle: "dashed",
                    borderBottomWidth: "2px",
                  }}
                ></div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-second group-hover:bg-primary "></span>
                  <p> 25+ Coctor</p>
                </div>
                <div className="w-10 h-10  flex justify-center items-center p-1 absolute bottom-5 right-5 rounded-full bg-second group-hover:bg-white text-white group-hover:text-gray-500">
                  <ArrowUpRight className="w-5 " />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sec3;
