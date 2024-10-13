import { toast } from "react-toastify"
import axios from "axios";
const GetAllAppointmnent = async (backendURL, adminToken) => {
  try {
     const {data} = await axios.get(backendURL+'/api/admin/appointments',{headers:{ adminToken}})
     return data;
  } catch (error) {
    console.log(error.message);
    toast.error(error.message);
  }
}

export default GetAllAppointmnent