import React,{useContext, useEffect} from 'react'
import { AdminContext } from '../../context/AdminCondext';
import FilterDoctors from '../../component/Admin/DoctorsList/FilterDoctors';
const Doctors =  () => {
    const {doctors,adminToken,getAllDoctors} = useContext(AdminContext);
    // console.log("getAllDoctors : ", doctors);
    useEffect(()=>{
        if(adminToken){
          getAllDoctors();
        }
    },[adminToken])
    // console.log("getAllDoctors02 : ", doctors);
  return doctors&&  (
     <FilterDoctors doctors= {doctors} className='' />
  )
}

export default Doctors