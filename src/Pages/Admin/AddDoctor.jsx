import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import {AdminContext} from "../../context/AdminCondext"
import {toast} from 'react-toastify'
import axios, { Axios } from "axios";
const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [experience, setExperience] = useState("--select--");
  const [degree, setDegree] = useState("");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("--select--");
  const [addres1, setAddress1] = useState("");
  const [addres2, setAddress2] = useState("");
  const {backendURL,adminToken} = useContext(AdminContext);
  const onSubmitHandler = async (event)=>{
        event.preventDefault();
        console.log('i am onsubmit hadler function')
        try {
           if(!docImg) {
            console.log("image is not upload")
             return  toast.error("image is not upload")
           }
           const formData = new FormData();
          
           formData.append('image', docImg)
           formData.append('name', name)
           formData.append('email', email)
           formData.append('password',password)
           formData.append('experience', experience)
           formData.append('fees', Number(fees))
           formData.append('about', about)
           formData.append('speciality', speciality)
           formData.append('degree', degree)
           formData.append('address',JSON.stringify({street:{addres1},city:{addres2}}));
           formData.append('available',true)
          //  sonsole log formdata
          formData.forEach((value,key)=>{
            console.log (key ," : ", value,"\n");
          })
          //  set form data to Backed with api post 
          const {data} = await axios.post(backendURL+'/api/admin/add-doctor',formData, {headers:{adminToken}})
          console.log("data :",data)
          if(data.success){
                 toast.success(data.message);
          }
          else {
            toast.success(data.message);
          }
        } catch (error) {
          
        }
  }
  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Doctor</p>
      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500 ">
          <label htmlFor="doc-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt="upload area"
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            id="doc-img"
            hidden
          />
          <p>
            Upload Doctor <br />
            pic
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Abhishek"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border rounded px-3 py-2"
                type="email"
                placeholder="happiness@abhishek.com"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Password</p>
              <input
                onChange={(e) => setPasword(e.target.value)}
                value={password}
                className="border rounded px-3 py-2"
                type="password"
                placeholder="A2k2024"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Experience</p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                onClick={experience}
                className="border rounded px-3 py-2"
                name=""
                id=""
              >
                <option value="1 Year">1 year</option>
                <option value="2 Year">2 year</option>
                <option value="3 Year">3 year</option>
                <option value="5 Year">5 year</option>
                <option value="7 Year">7 year</option>
                <option value="10 Year">10 year</option>
                <option value="15 Year">15 year</option>
                <option value="20 Year">20 year</option>
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Free</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className="border rounded px-3 py-2"
                type="number"
                placeholder="₹ 500"
                required
              />
            </div>
          </div>
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Speciality</p>
              <select
                onClick={(e) => setSpeciality(e.target.value)}
                value={speciality}
                className="border rounded px-3 py-2"
                name=""
                id=""
              >
                <option value="General Physician">General Physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
              </select>
            </div>
            <div>
              <div className="flex-1 flex flex-col gap-1">
                <p>Doctor Education</p>
                <input
                  onChange={(e)=>setDegree(e.target.value)}
                  value={degree}
                  className="border rounded px-3 py-2"
                  type="text"
                  placeholder="M.B.B.S"
                  required
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <p>Address</p>
                <input
                  onChange={(e)=>(setAddress1(e.target.value))}
                  value={addres1}
                  className="border rounded px-3 py-2"
                  type="text"
                  placeholder="street"
                  required
                />
                <input
                  onChange={(e)=>(setAddress2(e.target.value))}
                  value={addres2}
                  className="border rounded px-3 py-2"
                  type="text"
                  placeholder="city"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="mt-4 mb-2">About the Doctor</p>
          <textarea
            onChange={(e)=>setAbout(e.target.value)}
            value={about}
            className="w-full px-4 pt-2 border rounded"
            placeholder="I have 30 year of ...."
            rows={5}
            required
          />
        </div>
        <button type="submit" className="bg-primary px-10 py-3 mt-4 text-white rounded-full">
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
