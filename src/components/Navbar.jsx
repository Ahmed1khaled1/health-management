import React, { useState } from "react";
import { HeartPulse, AlignJustify, X, ChevronDown } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";

const links = [
  { id: 1, name: "Home", path: "/" },
  { id: 1, name: "Team", path: "/doctors" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [token, setToken] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const navigate = useNavigate();


  return (
    <div className="sticky top-0 left-0 z-20 h-16 md:h-20 w-full flex justify-center items-center bg-primary text-white p-7 md:px-10 lg:px-20">
      <div className="w-full h-full md:max-w-11/12 flex items-center justify-between">
        {/* logo  */}
        <NavLink
          to={"/"}
          className="flex items-center text-3xl font-bold gap-1"
        >
          <HeartPulse className="text-second w-7 h-7" />
          <p>MediCare</p>
        </NavLink>
        {/* navigation links */}
        <ul className="hidden lg:flex items-center gap-8 font-semibold text-xl">
          {links.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className={({ isActive }) =>
                `  ${
                  isActive ? "border-b-2 border-second text-second" : ""
                } hover:text-second`
              }
            >
              <li>{link.name}</li>
            </NavLink>
          ))}
        </ul>
        <div className="flex items-center gap-5">

        {/* login button */}
        <div className="flex items-center gap-8 font-semibold">
          {token ? (
            <div onClick={()=>{setProfileMenu(!profileMenu)}} className="flex items-center relative group cursor-pointer ">
              <img
                src={assets.profile_pic}
                alt="profilePic"
                className="w-10 min-w-10 h-10 rounded-full object-cover "
              />
              <ChevronDown className="hidden lg:inline-block text-gray-500" />
              {
                profileMenu && 

              <div className={` ${profileMenu?"block":"hidden"} w-50 p-3 text-white bg-second absolute top-10 right-0 rounded-xl`}>
                <ul className="w-full h-full flex flex-col items-center ">
                  <li
                    onClick={() => navigate("/my-profile")}
                    className="py-2 rounded-md w-full text-center hover:bg-gray-200 hover:text-primary"
                  >
                    My Profile
                  </li>
                  <li
                    onClick={() => navigate("/my-appointments")}
                    className="py-2 rounded-md w-full text-center hover:bg-gray-200 hover:text-primary"
                  >
                    My Appointment
                  </li>
                  <li
                    onClick={() => setToken(false)}
                    className="py-2 rounded-md w-full text-center hover:bg-gray-200 hover:text-primary"
                  >
                    Logout
                  </li>
                </ul>
              </div>
              }
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-second hover:bg-second text-white cursor-pointer px-3 py-2 rounded-full"
            >
              LOGIN
            </button>
          )}
        </div>

        {/* hamburger menu for mobile view */}
        <div className="lg:hidden flex flex-col items-center justify-center gap-8 ">
          <AlignJustify
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
          {isOpen && (
            <div
              className="z-50 flex items-center justify-center fixed top-0 right-0 bg-white shadow-2xl w-64 h-[100vh] rounded-l-md  "
              onClick={() => setIsOpen(false)}
            >
              <div className="text-primary absolute top-5 right-7  cursor-pointer">
                <X />
              </div>
              <ul className="flex flex-col items-center w-full p-4 text-primary font-semibold">
                {links.map((link) => (
                  <NavLink
                    key={link.id}
                    to={link.path}
                    onClick={()=>setIsOpen(false)}
                    className={({ isActive }) =>
                      `  ${
                        isActive ? "bg-second text-white" : ""
                      } hover:bg-second hover:text-white text-lg font-semibold w-full text-center py-2 rounded-md  `
                    }
                  >
                    <li>{link.name}</li>
                  </NavLink>
                ))}
              </ul>
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
