import React from "react";
import { assets } from "../../assets/assets";
const AddDoctor = () => {
  return (
    <form className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Doctor</p>
      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500 ">
          <label htmlFor="doc-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={assets.upload_area}
              alt="upload area"
            />
          </label>
          <input type="file" id="doc-img" hidden />
          <p>
            Upload Doctor <br />
            pic
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Name</p>
              <input className="border rounded px-3 py-2" type="text" placeholder="Abhishek" required />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Email</p>
              <input
                className="border rounded px-3 py-2"
                type="email"
                placeholder="happiness@abhishek.com"
                required
              />
            </div >
            <div className="flex-1 flex flex-col gap-1" >
              <p>Doctor Password</p>
              <input className="border rounded px-3 py-2" type="password" placeholder="A2k2024" required />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Experience</p>
              <select className="border rounded px-3 py-2"  name="" id="">
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
              <input className="border rounded px-3 py-2" type="number" placeholder="₹ 500" required />
            </div>
          </div>
          <div className="w-full lg:flex-1 flex flex-col gap-4" >
            <div  className="flex-1 flex flex-col gap-1" >
              <p>Speciality</p>
              <select className="border rounded px-3 py-2" name="" id="">
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
                <input className="border rounded px-3 py-2" type="text" placeholder="M.B.B.S" required />
              </div>
              <div  className="flex-1 flex flex-col gap-1">
                <p>Address</p>
                <input className="border rounded px-3 py-2" type="text" placeholder="street" required />
                <input  className="border rounded px-3 py-2" type="text" placeholder="city" required />
              </div>
            </div>
          </div>
        </div>
        <div>
            <p className="mt-4 mb-2" >About the Doctor</p>
            <textarea className="w-full px-4 pt-2 border rounded" placeholder="I have 30 year of ...." rows={5} required />
          </div>
        <button className="bg-primary px-10 py-3 mt-4 text-white rounded-full">Add Doctor</button>
      </div>
    </form>
  );
};

export default AddDoctor;
