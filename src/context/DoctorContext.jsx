import { createContext, useState } from "react";
import getAppointment from "../component/Doctor/DoctorContext/getAppointment";
export const DoctorContext = createContext()
const DoctorContextProvider = (props)=>{
     const [doctor_token, setDoctorToken] = useState(localStorage.getItem('doctor_token'|| false))
     const BackendURL= import.meta.env.VITE_BACKEND_URL
     const [appointments, setAppointments] = useState(false);
   const  handleAppointment = async ()=>{
            await getAppointment(BackendURL,setAppointments,doctor_token);
     }
    const value = {
        doctor_token, 
        setDoctorToken,
        BackendURL,
        appointments,
         setAppointments,
         handleAppointment
    }
    return (
        <DoctorContext.Provider value={value}>
        { props.children}
        </DoctorContext.Provider>
    )
}
export default DoctorContextProvider