import React from 'react'
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Button = ({text,bg,hover,path}) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {navigate(path)}}
      className={`px-5 sm:px-2 h-14 text-lg font-semibold ${bg} ${hover} rounded-xl flex items-center gap-3 cursor-pointer`}
    >
      <p className="md:pl-3 text-white">{text}</p>
      <div className="max-sm:hidden bg-white rounded-md h-10 w-10 flex items-center justify-center text-gray-600  ">
        <MoveRight className="p-1" />
      </div>
    </button>
  );
}

export default Button