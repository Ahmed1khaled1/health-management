import React, { useContext } from "react";
import Button from "./common/Button";
import Card from "./common/Card";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const {doctors} = useContext(AppContext)

  return (
    <div className=" flex flex-col items-center justify-center gap-5 w-full md:max-w-11/12 mx-auto p-7 md:px-20 my-10">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-3xl text-primary font-bold max-w-60 sm:max-w-lg ">
          We Employ only Specialists
        </h2>
        <Button
          text="View All"
          bg="bg-second"
          hover="hover:bg-secondHover"
          path="/doctors"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 ">
        {doctors.slice(0, 4).map((doctor) => (
          <Card key={doctor._id} doctor={doctor}/>
        ))}
      </div>
    </div>
  );
};

export default TopDoctors;
