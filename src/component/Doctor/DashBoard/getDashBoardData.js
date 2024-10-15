import axios, { Axios } from "axios"
import { toast } from "react-toastify"
const getDashBoardData = async(BackendURL,setDashData,doctor_token)=>{
        try {
            const {data} = await axios.get(BackendURL +'/api/doctors/dashboard', {headers:{doctor_token}})
            if(data.success){
                setDashData(data.dashData);
                toast.success('Successfully Geting Dashboard Data')
            }
            else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
}
export default getDashBoardData