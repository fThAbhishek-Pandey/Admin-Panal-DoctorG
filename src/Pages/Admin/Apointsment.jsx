import React,{useContext, useEffect} from 'react'
import { AdminContext } from '../../context/AdminCondext'
import { AppContext } from '../../context/AppContext'
import {assets} from '../../assets/assets'
const Apointsment = () => {
  const {calculateAge,slotDataFormate,currencySymboll} = useContext(AppContext)
  const {adminToken,appointments,getAllAppointmentsHandler,cancelByAdminHandler} = useContext(AdminContext)
   console.log("appointments :",appointments);
  useEffect(()=>{
      if(adminToken){
        getAllAppointmentsHandler();
      }
  },[adminToken])
  const onCancel = async (appointmentId)=>{
    if(adminToken){
      cancelByAdminHandler(appointmentId)
    }
  }
  return  (
    <div className='w-full max-w-full m-5'>
        <p className='mb-3 text-lg font-medium' >All Appointments</p>
        <div className='bg-white rounded text-sm min-h-[60vh] max-h-[80vh] overflow-y-scroll'> 
            <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b'>
              <p>#</p>
              <p>Patient</p>
              <p>Age</p>
              <p>Date & Time</p>
              <p>Doctor Name</p>
              <p>fees</p>
              <p>Action</p>
            </div>
            {
              appointments && appointments.map((item, index)=>(
                <div className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50' key={index}>
                    <p className='max-sm:hidden'>{index+1}</p>
                    <div  className='flex items-center gap-2'>
                      <img className='w-12 rounded-full' src={item.userData.image} alt={item.userData.name} />
                      <p>{item.userData.name}</p>
                    </div>
                   
                       <p className='max-sm-hidden' >{calculateAge(item.userData.dob)}</p>
                       <p>{slotDataFormate(item.slotDate)}, {item.slotTime}</p>
                      <div  className='flex items-center gap-2'>
                      <img className='w-12 rounded-full bg-gray-200' src={item.docData.image} alt={item.docData.name} />
                      <p>{item.docData.name}</p>
                    </div>
                    <p>{currencySymboll}{" "}{item.amount}</p>
                    {
                      item.cancelled 
                      ? <p  className='text-red-600 text-xs font-medium'>Cancelled</p>
                      : <img onClick={()=>onCancel(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="cancel icon" />
                    }
                     
                    
                </div>
              ))
            }
        </div>



    </div>
  )
}

export default Apointsment