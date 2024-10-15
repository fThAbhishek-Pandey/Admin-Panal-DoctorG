import React, {useContext, useEffect} from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import {assets} from '../../assets/assets'
import completeAppointments from "../../component/Doctor/Appointment/completeAppointments";
import cancelAppointments from "../../component/Doctor/Appointment/CancelAppointments";
const DoctorDashboard = () => {
    const {dashData, handleDashboard, handleAppointment, doctor_token, BackendURL} = useContext(DoctorContext);
    const { calculateAge,slotDataFormate,currencySymboll} = useContext(AppContext)
    console.log("dashData : ",dashData,doctor_token)
    useEffect(()=>{
      if(doctor_token) handleDashboard();
    },[doctor_token])

    const onCompleteHandler = async (appointmentId) => {
      await completeAppointments(BackendURL, doctor_token, appointmentId);
    };
    const onCancelHandler = async (appointmentId) => {
      console.log("onCancelHandler : ", appointmentId);
      await cancelAppointments(BackendURL, doctor_token, appointmentId);
    };
    useEffect(() => {
      if (doctor_token) {
        handleAppointment();
      }
    }, [doctor_token]);
  return dashData &&(
    <div className='m-5'>
        <div className='flex flex-wrap gap-3'>
          <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 '>
                <img src={assets.earning_icon} alt="" />
                <div>
                  <p className='text-xl font-semibold text-gray-600'>{dashData.earning}</p>
                  <p className='text-gray-400'>Earning</p>
                </div>
          </div>
          <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 '>
                <img className='w-14' src={assets.appointments_icon} alt="" />
                <div >
                  <p className='text-xl font-semibold text-gray-600'>{dashData.appointments}</p>
                  <p className='text-gray-400'>Appointments</p>
                </div>
          </div>
          <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 '>
          <img className='w-14' src={assets.patients_icon} alt="" />
                <div>
                  <p className='text-xl font-semibold text-gray-600'>{dashData.patients}</p>
                  <p className='text-gray-400'>Patients</p>
                </div>
          </div>
          <div className="w-full  max-w-full m-5">
      <p className="mb-3 text-lg font-medium">All Appointments</p>
      <div className="bg-white rounded text-sm min-h-[60vh] max-h-[80vh] overflow-y-scroll">
        <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b">
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Payment Type</p>
          <p>fees</p>
          <p>Action</p>
        </div>
        {dashData.latest_appointment &&
          dashData.latest_appointment.map((item, index) => (
            <div
              className="flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50"
              key={index}
            >
              <p className="max-sm:hidden">{index + 1}</p>
              <div className="flex items-center gap-2">
                <img
                  className="w-12 rounded-full"
                  src={item.userData.image}
                  alt={item.userData.name}
                />
                <p>{item.userData.name}</p>
              </div>

              <p className="max-sm-hidden">{calculateAge(item.userData.dob)}</p>
              <p>
                {slotDataFormate(item.slotDate)}, {item.slotTime}
              </p>
             {!item.cancelled
             ? <p>{item.payOine ? "Online" : "CASH"}</p>
             : <p>CANCEL</p>
            }
              <p>
                {currencySymboll} {item.amount}
              </p>
              {item.cancelled ? (
                <p className="bg-red-600 p-3 text-white rounded-full font-medium">Cancelled</p>
              ) : (
                <div>
                  {item.isCompleted ? (
                    <p className="bg-green-600 text-white p-3 rounded-full text-sm font-medium" >Completed</p>
                  ) : (
                    <div>
                      <img
                        onClick={() => onCancelHandler(item._id)}
                        className="w-10 cursor-pointer"
                        src={assets.cancel_icon}
                        alt="cancel icon"
                      />
                      <img
                        onClick={() => onCompleteHandler(item._id)}
                        className="w-10 cursor-pointer"
                        src={assets.tick_icon}
                        alt="verify icon"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
    </div>
    </div>
  )
}

export default DoctorDashboard