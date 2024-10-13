import axios from "axios"
import { toast } from "react-toastify"


const findDashData =async (backendURL, adminToken, setDashData) => {
      try {
           const {data} = await axios.get(backendURL+'/api/admin/admin-dashboard', {headers:{adminToken}})
           if(data.success){
            console.log("data.dashData",data)
              setDashData(data.dashData);
              toast.success("Suceessfully find");
           }
           else {
            toast.error(data.message);
           }

      } catch (error) {
          console.log(error)
          toast.error(error.message)
      }
}

export default findDashData