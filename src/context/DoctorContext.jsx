import { createContext, useState } from "react";
import getAppointment from "../component/Doctor/DoctorContext/getAppointment";
import getDashBoardData from "../component/Doctor/DashBoard/getDashBoardData";
export const DoctorContext = createContext()
const DoctorContextProvider = (props)=>{
     const [doctor_token, setDoctorToken] = useState(localStorage.getItem('doctor_token'|| false))
     const BackendURL= import.meta.env.VITE_BACKEND_URL
     const [appointments, setAppointments] = useState(false);
     const [dashData, setDashData]=useState(false);
   const  handleAppointment = async ()=>{
            await getAppointment(BackendURL,setAppointments,doctor_token);
     }
     const handleDashboard = async ()=>{
        await getDashBoardData(BackendURL,setDashData,doctor_token);
     }
    const value = {
        doctor_token, 
        setDoctorToken,
        BackendURL,
        appointments,
         setAppointments,
         handleAppointment,
         dashData,
         handleDashboard
    }
    return (
        <DoctorContext.Provider value={value}>
        { props.children}
        </DoctorContext.Provider>
    )
}
export default DoctorContextProvider