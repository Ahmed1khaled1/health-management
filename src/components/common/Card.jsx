import React, { useState } from "react";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Card = ({ doctor }) => {
  const [activeDoctorId, setActiveDoctorId] = useState(null);
  const navigate = useNavigate();
  const handleDoctorClick = (id) => {
    setActiveDoctorId(id);
  };
  return (
    <div
      key={doctor._id}
      className={`
              ${activeDoctorId === doctor._id ? "bg-primary group" : ""}
              hover:bg-primary bg-gray-200 p-1 rounded-xl group max-w-md
            `}
      onClick={() => handleDoctorClick(doctor._id)}
    >
      <img
        src={doctor.image}
        alt="doctor-image"
        className="bg-white rounded-xl w-full aspect-square object-cover"
      />
      <div className="flex items-center justify-between p-2">
        <div>
          <p
            className={`
                  ${
                    activeDoctorId === doctor._id
                      ? "text-white"
                      : "text-primary "
                  }
                  font-semibold group-hover:text-white
                `}
          >
            {doctor.name}
          </p>
          <p className="text-second text-sm">{doctor.speciality}</p>
        </div>
        <div
          onClick={() => navigate(`/appointment/${doctor._id}`)}
          className={` ${
            activeDoctorId === doctor._id
              ? "text-primary bg-white "
              : "text-white"
          } group-hover:bg-white bg-primary rounded-md  cursor-pointer
              h-10 w-10 flex items-center justify-center  group-hover:text-gray-600  `}
        >
          <MoveRight className="p-1" />
        </div>
      </div>
    </div>
  );
};

export default Card;
