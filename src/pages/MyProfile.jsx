import React, { useState } from "react";
import Hero from "../components/Hero";
import { assets } from "../assets/assets_frontend/assets";

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Doe",
    image: assets.profile_pic,
    email: "example@email.com",
    phone: "+1234567890",
    adress: {
      line1: "234 Oak Drive, Villagetown, USA",
      line2: "123 Oak Drive, Villagetown, USA",
    },
    gender: "Male",
    dob: "10-05-2001",
  });
  return (
    <div>
      <Hero titlePage="Patient Info" />
      <div className="w-full flex justify-center items-center">
        <div className="w-full md:max-w-11/12 p-7 md:px-10 lg:px-20 space-y-3">
          <img
            src={userData.image}
            alt="profilePicture"
            className="w-40 mb-5"
          />
          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder={userData.name}
              className="border-2 border-gray-300 rounded-md py-1 px-4"
            />
          ) : (
            <h2 className="text-2xl font-bold text-primary">{userData.name}</h2>
          )}
          <hr className="w-full lg:w-1/2 text-gray-300" />
          <p className="font-semibold ">Contact Information</p>
          <div className="flex items-center gap-4">
            <p>Email : </p>
            {isEdit ? (
              <input
                type="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="border-2 border-gray-300 rounded-md py-1 px-4"
              />
            ) : (
              <p> {userData.email} </p>
            )}
          </div>
          <div className="flex items-center gap-4">
            <p>Phone : </p>
            {isEdit ? (
              <input
                type="numerical"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="border-2 border-gray-300 rounded-md py-1 px-4"
              />
            ) : (
              <p> {userData.phone}</p>
            )}
          </div>
          <div className="flex items- gap-4">
            <p>Adress : </p>
            {isEdit ? (
              <div className="flex flex-col">
                <input
                  type="text"
                  value={userData.adress.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      adress: { ...prev.adress, line1: e.target.value },
                    }))
                  }
                  className="border-2 border-gray-300 rounded-md py-1 px-4"
                />
                <br />
                <input
                  type="text"
                  value={userData.adress.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      adress: { ...prev.adress, line1: e.target.value },
                    }))
                  }
                  className="border-2 border-gray-300 rounded-md py-1 px-4"
                />
              </div>
            ) : (
              <p>
                {" "}
                {userData.adress.line1} <br /> {userData.adress.line2}{" "}
              </p>
            )}
          </div>
          <div className="flex items-center gap-4">
            <p>Gender : </p>
            {isEdit ? (
              <select
                value={userData.gender}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                className="border-2 border-gray-300 rounded-md py-1 px-4"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            ) : (
              <p>{userData.gender} </p>
            )}
          </div>
          <div className="flex items-center gap-4">
            <p>Birthday : </p>
            {isEdit ? (
              <input
                type="numerical"
                value={userData.dob}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                className="border-2 border-gray-300 rounded-md py-1 px-4"
              />
            ) : (
              <p> {userData.dob}</p>
            )}
          </div>
          {isEdit ? (
            <button
              onClick={() => setIsEdit(false)}
              className="py-2 w-50 bg-primary text-white rounded-lg cursor-pointer"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="py-2 w-50 bg-second text-white rounded-lg cursor-pointer"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
