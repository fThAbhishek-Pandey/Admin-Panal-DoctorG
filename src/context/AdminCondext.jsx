import { createContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
export const AdminContext = createContext();
const AdminContextProvider = (props) => {
  const [adminToken, setAdminToken] = useState(
    localStorage.getItem("AdminToken") ? localStorage.getItem("AdminToken") : ""
  );
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [doctors, setDoctors] = useState([]);
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
  const value = {
    adminToken,
    setAdminToken,
    backendURL,
    doctors,
    getAllDoctors,
    changeAvaibility,
  };
  
  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};
export default AdminContextProvider;
