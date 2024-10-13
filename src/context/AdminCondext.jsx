import { createContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import GetAllAppointmnent from "../component/AdminContext/GetAllAppointmnent";
import cancelAPI from "../component/AdminContext/cancelAPI";
import findDashData from "../component/AdminContext/findDashData";
export const AdminContext = createContext();
const AdminContextProvider = (props) => {
  const [adminToken, setAdminToken] = useState(
    localStorage.getItem("AdminToken") ? localStorage.getItem("AdminToken") : ""
  );
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments]= useState(false);
  const [dashData, setDashData] = useState(false);
  const getAllDoctors = async () => {
    try {
      console.log("i am in GetAllDoctors Functions : ");
      const { data } = await axios.get(backendURL + "/api/admin/all-doctors", {headers: { adminToken }});
      console.log("data : ", data);
      if (data.success) {
        setDoctors(data.doctors);
        console.log("data01 : ", doctors);
      } 
      else {
        toast.error(data.error);
      }
    } catch (error) {
        console.log(error)
        toast.error(error);
    }
    console.log("data02 : ", doctors);
  };
  const changeAvaibility = async (docId) => {
    console.log("changeAvaibility is called");
    try {
      const {data} = await axios.post(backendURL + "/api/admin/change-visibility", {docId}, {headers:{adminToken}});
      if (data.success) {
        toast.success(data.message)
        getAllDoctors();
      }
      else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(message)
    }
  };
  
  
// const get all appointsments
const getAllAppointmentsHandler = async()=>{
      const data= await GetAllAppointmnent(backendURL, adminToken);
     
      if(data.success){
        toast.success("successfully get appointsment");
        setAppointments(data.appointments);
     }
     else {
         toast.error(data.message)
         return false;
     }

}
const cancelByAdminHandler = async(appointmentId)=>{
       await cancelAPI(backendURL, adminToken, appointmentId, getAllAppointmentsHandler)
}
const handleDashData = async ()=>{
  console.log("handleDashData i am ")
       await findDashData(backendURL, adminToken, setDashData);
}
const value = {
  adminToken,
  setAdminToken,
  backendURL,
  doctors,
  getAllDoctors,
  changeAvaibility,
  getAllAppointmentsHandler,
  appointments,
  cancelByAdminHandler,
  dashData,
  handleDashData
};


  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};
export default AdminContextProvider;
