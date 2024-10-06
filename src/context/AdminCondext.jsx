import { createContext, useState } from "react";

export const AdminContext = createContext()
const AdminContextProvider = (props)=>{
    const [adminToken ,setAdminToken] = useState(localStorage.getItem('AdminToken')?localStorage.getItem('AdminToken'):'');
    const backendURL = import.meta.env.VITE_BACKEND_URL

    const value = {
        adminToken ,
        setAdminToken,
        backendURL
    }
    return (
        <AdminContext.Provider value={value}>
        { props.children}
        </AdminContext.Provider>
    )
}
export default AdminContextProvider