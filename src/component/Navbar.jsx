import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminCondext";
import {useNavigate} from 'react-router-dom'
const Navbar = () => {
  const { adminToken, setAdminToken } = useContext(AdminContext);
  const navigate = useNavigate()
   const logOut = ()=>{
            console.log("i am claded")
            navigate('/')
            adminToken && setAdminToken ('')
            adminToken && localStorage.removeItem('AdminToken');
   }
  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white ">
      <div className="flex items-center gap-2 text-xs">
        <img className="w-36 sm:w-40 cursor-pointer" src={assets.admin_logo} alt="AdminLogo" />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">{adminToken ? "Admin" : "Doctor"}</p>
      </div>
      <button onClick={logOut} className="bg-primary text-white text-sm px-10 py-2 rounded-full">Logout</button>
    </div>
  );
};

export default Navbar;
