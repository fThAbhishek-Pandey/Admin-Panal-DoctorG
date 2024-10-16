import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminCondext";
import { DoctorContext } from "../context/DoctorContext";
import axios from 'axios';
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState('fth@doctorg.com');
  const [password,setPassword] = useState('fth830564');
  const {setAdminToken,backendURL} = useContext(AdminContext)
  const {  setDoctorToken  }= useContext(DoctorContext)
  const onSubmitHandle = async(event)=> {
     event.preventDefault();
    //  console.log("i am called backendURL : ",backendURL)
     try {
         if(state === "Admin"){
          // console.log(": Admin")
             const {data} = await axios.post(backendURL+'/api/admin/login',{email,password})
             console.log("data : ",data)   
             if (data.success){
                  localStorage.setItem("AdminToken", data.token)
                  setAdminToken("success",data.token)
                  toast.success("You are login");
                  navigate('/')
               }
               else {
                toast.error(data.massage);
               }
            }
            
         else {
          const {data} = await axios.post(backendURL+'/api/doctors/login',{email,password})
          console.log("data : ",data)   
          if (data.success){
               localStorage.setItem("doctor_token", data.doctor_token)
               setDoctorToken("success",data.doctor_token)
              //  toast.success("You are login as Doctor");
              toast.success("You are login as Doctor")
               navigate('/')
            }
            else {
             toast.error(data.massage);
            }
         }
        //  console.log("I am not sucess");
     } catch (error) {
            console.log("error : ",error)
            toast.error(data.massage);
     }
    }
  return (
    <form onSubmit={onSubmitHandle} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-[340px] sm:min-w-96  border rounded-xl text-[#5E5E5E] text-sm shadow-lg ">
        <p className="text-2xl font-semibold m-auto"><span className="text-primary">{state}</span> login</p>
        <div>
          <p className="w-full" >Email</p>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} className="border border-[#DADADA] rounded w-full p-2 mt-1 " type="email" required />
        </div>
        <div>
          <p className="w-full">Password</p>
          <input onChange={(e)=>setPassword(e.target.value)} value={password}  className="border border-[#DADADA] rounded w-full p-2 mt-1 " type="password" required />
        </div>
        <button  className="bg-primary text-white w-full py-2 rounded-md text-base">login</button>
      {
        state === 'Admin' 
        ? <p>Doctor Login <span className="text-primary underline cursor-pointer" onClick={()=>setState('Doctor')}>Click here</span></p>
        :<p>Admin Login <span className="text-primary underline cursor-pointer" onClick={()=>setState('Admin')}>Click here</span></p>
      }
      </div>
    </form>
  );
};

export default Login;
