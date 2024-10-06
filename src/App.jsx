import React, { useContext } from "react";
import Login from "./Pages/login";
import { ToastContainer } from "react-toastify";
import {AdminContext} from "./context/AdminCondext";
import Home from "./Pages/Home";
const App = () => {
  console.log("AdminContext : ", AdminContext);
  const  {adminToken}  = useContext(AdminContext)
  console.log ("adminToken : ",   adminToken  )

  return adminToken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Home />
    </div>
  ) : (
    <div>
      <Login />
      <ToastContainer />
    </div>
  );
};

export default App;
