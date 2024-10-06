import React from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Admin/Dashboard";
import Apointsment from "./Admin/Apointsment"
import AddDoctor from "./Admin/AddDoctor";
import Doctors from "./Admin/Doctors";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <Routes>
            <Route path ='/' element={<></>}></Route>
            <Route path ='/admin-dashboard' element={<Dashboard/>}></Route>
            <Route path ='/all-appointments' element={<Apointsment/>}></Route>
            <Route path ='/add-doctor' element={<AddDoctor/>}></Route>
            <Route path ='/doctors-list' element={<Doctors/>}></Route>           
        </Routes>
      </div>
    </div>
  );
};

export default Home;
