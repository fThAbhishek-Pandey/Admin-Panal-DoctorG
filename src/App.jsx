import React, { useContext } from "react";
import Login from "./Pages/login";
import { ToastContainer } from "react-toastify";
import {AdminContext} from "./context/AdminCondext";
import { DoctorContext } from "./context/DoctorContext";
import Home from "./Pages/Home";
const App = () => {
  // console.log("AdminContext : ", AdminContext);
  const  {adminToken}  = useContext(AdminContext)
  // console.log ("adminToken : ",   adminToken  )
 const {doctor_token} =  useContext(DoctorContext);
  return !(adminToken || doctor_token) 
  ? (
    <div>
      <Login />
      <ToastContainer />
    </div>
  )
  : (
    <div>
    {doctor_token &&(
      <div>
              i am doctor
      </div>
    )}
    {adminToken && (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Home />
    </div>
  )}
  </div>
  ) ;
};

export default App;
