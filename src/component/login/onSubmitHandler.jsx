import React from 'react'
import axios from 'axios'
import { useContext } from 'react';
import { AdminContext } from "../../context/AdminCondext";
const OnSubmitHandler = async (state,email,password) => {
        //  evt.preventDefault();
         
         const {setAdminToken,backendURL} = useContext(AdminContext)
         try {
             if(state === "Admin"){
                 const {data} = await axios.post(backendURL+'/api/admin/login',{email,password})
                   if (data.success){
                      console.log(data.token)
                   }
                }
             else {}
         } catch (error) {
          
         }
 
 
 
  return (
    <div>onSubmitHandler


    </div>
  )
}

export default OnSubmitHandler