import React, { useContext } from "react";
import { DoctorContext } from "../../../context/DoctorContext";
import { NavLink } from "react-router-dom";
import { assets } from "../../../assets/assets";
const Sidebar = () => {
   const { doctor_token }= useContext(DoctorContext)
  return (
    <div className="min-h-screen bg-white border-r">
      {doctor_token && (
        <ul className="text-[#515151] mt-5">
          <NavLink to={'/'} className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#F2F3FF] border-r-4 border-primary ':''}`} > 
             <img className="w-6" src={assets.home_icon} alt="" />
             <p>Dashboard</p>
          </NavLink>
          <NavLink to={'/appointments'} className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#F2F3FF] border-r-4 border-primary ':''}`} > 
             <img className="w-6" src={assets.appointment_icon} alt="" />
             <p>Appointment</p>
          </NavLink>
          <NavLink to={'/profile'} className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#F2F3FF] border-r-4 border-primary ':''}`} > 
             <img className="w-8" src={assets.doctor_icon} alt="" />
             <p>Profile</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
