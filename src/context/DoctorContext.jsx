import { createContext, useState } from "react";

export const DoctorContext = createContext()
const DoctorContextProvider = (props)=>{
     const [doctor_token, setDoctorToken] = useState(localStorage.getItem('doctor_token'|| false))


    const value = {
        doctor_token, setDoctorToken
    }
    return (
        <DoctorContext.Provider value={value}>
        { props.children}
        </DoctorContext.Provider>
    )
}
export default DoctorContextProvider