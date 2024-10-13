import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../../component/Doctor/Home/Navbar'
import Sidebar from '../../component/Doctor/Home/Sidebar'
import DoctorDashboard from './DoctorDashboard'
import Appointments from './Appointments'
import DoctorProfile from './DoctorProfile'
const DocHome = () => {
  return (
    <div>
       <Navbar/>
        <div className='flex '>
            <Sidebar />
            <div>
            <Routes>
              <Route path = '/' element ={<DoctorDashboard/>} />
              <Route  path = '/appointments' element ={<Appointments/>}  />
              <Route path = '/profile' element={<DoctorProfile/>} />
            </Routes>

            </div>
        </div>
    </div>
  )
}

export default DocHome