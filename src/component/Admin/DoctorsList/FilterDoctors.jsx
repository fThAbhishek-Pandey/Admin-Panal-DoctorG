import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../../context/AdminCondext";
const FilteredDocter = ({ doctors }) => {
  console.log("FilteredDocter :", doctors);
  const { changeAvaibility } = useContext(AdminContext);
  const Navigate = useNavigate();
  return (
    doctors && (
      <div className="w-full grid  grid-cols-[repeat(auto-fill,minmax(200px,1fr))]  gap-2 pt-3 gap-y-4 px-1 sm:px-0">
        {doctors.map((item, idx) => {
          return (
            <div
              className="border  border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-5px] transition-all duration-500"
              key={"fth02" + idx}
            >
              <img
                onClick={() => {
                  Navigate(`/appointment/${item._id}`);
                  scrollTo(0, 0);
                }}
                className="bg-blue-50 w-full hover:bg-primary transition-all duration-500"
                src={item.image}
                alt={item.name}
              />
              <div className="p-4">
                <div>
                  <p className="text-gray-900 text-lg font-medium ">
                    {item.name}
                  </p>
                  <p className="text-gray-600 text-sm">{item.speciality}</p>
                  <div className="flex items-center text-sm gap-2 text-center">
                    <input
                      className={`w-5 h-5 rounded-full`}
                      type="checkbox"
                      onChange={()=>changeAvaibility(item._id)}
                      checked={item.available}
                    />
                    <p
                      className={`w-2 h-2 rounded-full ${
                        item.available ? "text-green-500" : "text-red-600"
                      }`}
                    >
                      Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default FilteredDocter;
