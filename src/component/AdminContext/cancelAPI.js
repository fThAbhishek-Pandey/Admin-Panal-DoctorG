import axios from "axios"
import { toast } from "react-toastify"

const cancelAPI = async( backendURL, adminToken, appointmentId, getAllAppointmentsHandler) => {
      console.log( appointmentId);
    
    try {
        const {data} = await axios.put(backendURL + '/api/admin/cancel-appointment', {appointmentId},{headers:{adminToken}})
        if(data.success){
            toast.success();
            getAllAppointmentsHandler()
        }
        else {
            toast.error(data.message);
        }
     } catch (error) {
        console.log(error);
        toast.error(error.message);
     }



}

export default cancelAPI