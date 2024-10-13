import { createContext } from "react";
import calculateAge from "../component/Appcontext/calculateAge";
import slotDataFormate from "../component/Appcontext/Dateformating";
export const AppContext = createContext()
const AppContextProvider = (props)=>{

    const currencySymboll = '₹';
    const value = {
        calculateAge,
        slotDataFormate,
        currencySymboll
    }
    return (
        <AppContext.Provider value={value}>
        { props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider