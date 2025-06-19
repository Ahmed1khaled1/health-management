import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Sec2 = () => {
  return (
    <div className="w-full py-10 px-7 md:py-15 md:px-20 flex items-center justify-center  
    bg-[url('/sec2_img.jpg')] bg-contain bg-fixed text-white ">
      <div className="w-full md:max-w-11/12 flex flex-col lg:flex-row gap- items-center ">
        <div className='lg:w-1/4'>
          <img src={assets.group_profiles} alt="groupPic"/>
          <p className="text-xl font-semibold mt-4">
            300+ Appointment Booking Confirm for this Week
          </p>
        </div>
        <div className="flex justify-between items-center lg:w-3/4 w-full sm:px-15">
          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl md:text-5xl font-extrabold">200+</p>
            <p className='md:text-lg'>Specialists</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl md:text-5xl font-extrabold">45k</p>
            <p className='md:text-lg'>Happy Patients</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl md:text-5xl font-extrabold">150+</p>
            <p className='md:text-lg'>Winning Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec2