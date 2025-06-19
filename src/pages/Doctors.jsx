import React, { useContext, useEffect, useState } from "react";
import Hero from "../components/Hero";
import { AppContext } from "../context/AppContext";
import Card from "../components/common/Card";
import { specialityData } from "../assets/assets_frontend/assets";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/common/Button";

const Doctors = () => {
  const { doctors } = useContext(AppContext);
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="">
      <Hero titlePage="Team" />

      <div className="w-full mt-10 md:mt-20 mb-10 md:max-w-11/12 mx-auto p-7 md:px-10 lg:px-20 ">
        <p className="text-primary font-bold mb-5 text-2xl md:text-5xl">
          Browse through the doctors specialist.
        </p>
        {/* filters  */}
        <div >
          <button
            onClick={() => {
              setShowFilter(!showFilter);
            }}
            className={`mb-3 px-5 py-1 bg-second text-white border-2 border-gray-300 rounded-xl cursor-pointer hover:bg-primary hover:text-white`}
          >
            Filters
          </button>

          {showFilter && (
            <div className={`flex flex-wrap gap-4 mb-5 `}>
              {specialityData.map((item) => (
                <p
                  key={item.speciality}
                  onClick={() => {
                    speciality === item.speciality
                      ? navigate("/doctors")
                      : navigate(`/doctors/${item.speciality}`);
                  }}
                  className={` ${
                    item.speciality === speciality ? "bg-second text-white" : ""
                  }
                text-gray-700 border-2 py-1 px-3 border-gray-300 rounded-lg cursor-pointer hover:bg-second hover:text-white`}
                >
                  {item.speciality}
                </p>
              ))}
            </div>
          )}
        </div>
        {/* doctors  */}
        <div className="mx-auto w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {filterDoc.map((doctor) => (
            <Card key={doctor._id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
