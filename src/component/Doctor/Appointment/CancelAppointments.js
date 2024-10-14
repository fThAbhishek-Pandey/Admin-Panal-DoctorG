import { toast } from "react-toastify"
import axios from "axios";
const cancelAppointments = async (BackendURL,doctor_token,appointmentId) => {
   console.log("i am in : cancelAppointments : ", BackendURL,doctor_token,appointmentId)
  try {
    const {data} = await axios.post(BackendURL+ '/api/doctors/appointment-cancel',{appointmentId}, {headers:{doctor_token}})
     if(data.success){
        toast.success(data.message)
     }
     else {
        toast.error(data.message)
     }
  } catch (error) {
      console.log(error)
      toast.error(error.message);
  }
}

export default cancelAppointments