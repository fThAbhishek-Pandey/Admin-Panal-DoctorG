import axious from 'axios'
import {toast} from 'react-toastify'
const getAppointment = async(BackendURL,setAppointments,doctor_token) => {

        try {
            const {data} = await axious.get(BackendURL+'/api/doctors/appointments',{headers: {doctor_token}});
            console.log("axios data : ",data)
            if(data.success) {
                setAppointments(data.appointment.reverse());
                toast.success("successfuly geting appointment")
            }
            else {
                toast.error(data.message);
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message);
        }
}

export default getAppointment