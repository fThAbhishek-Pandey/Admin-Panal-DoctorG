import { createContext, useState } from "react";

export const DoctorContext = createContext()
const DoctorContextProvider = (props)=>{
     const [doctor_token, setDoctorToken] = useState(localStorage.getItem('doctor_token'|| false))
     const BackendURL= import.meta.env.VITE_BACKEND_URL

    const value = {
        doctor_token, 
        setDoctorToken,
        BackendURL
    }
    return (
        <DoctorContext.Provider value={value}>
        { props.children}
        </DoctorContext.Provider>
    )
}
export default DoctorContextProvider