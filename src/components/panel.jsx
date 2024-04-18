import React from "react";

// Import React Icons
import { FaBorderAll } from "react-icons/fa6";
import { MdOutlineAddCircle } from "react-icons/md";
import { TiThMenuOutline } from "react-icons/ti";
import { FaUsers } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa";
import { HiSquare2Stack } from "react-icons/hi2";

const Panel = () => {
  return (
    <div className="w-[79%] h-dvh overflow-hidden">
      {/* Panel Header */}
      <header className="w-full h-[10%] relative z-50 flex justify-between items-center px-[2rem] bg-gray-900 shadow-[0px_2px_5px_#222]">
        <div className="flex items-center gap-[2.5rem]">
          <TiThMenuOutline className="text-white text-[2.4rem] cursor-pointer hidden" />
          <div className="flex items-center gap-[1rem] text-white select-none">
            <FaBorderAll className="text-[2.4rem]" />
            <span className="text-[2.3rem] leading-[2.2rem] font-semibold">
              Courses
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <button
            className="flex items-center gap-[0.3rem] bg-slate-200 text-gray-800 text-[1.7rem] 
          leading-[1.7rem] font-medium px-[0.5rem] py-[0.4rem] rounded-md transition-all hover:bg-[#0a639e] hover:text-white active:scale-[0.98]"
          >
            <MdOutlineAddCircle className="text-[2.2rem]" /> Add Course
          </button>
        </div>
      </header>

      {/* Panel Body */}
      <div className="w-full h-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[3rem] place-content-between p-[3%] overflow-auto">
        {[1].map((item, index) => {
          return (
            <section
              key={index}
              className="w-full bg-slate-100 border-gray-900 border-[0.3rem] rounded-xl"
            >
              <h3 className="text-[2.4rem] font-bold text-white bg-slate-800 px-[1.4rem] py-[1rem]">
                Web & Mobile App Development
              </h3>

              <div className="lowerContent p-[1rem]">
                <ul className="text-[1.75rem] leading-[1rem] text-gray-800 flex flex-col gap-[1.3rem] font-medium list-none">
                  <li className="flex items-center gap-[1rem]">
                    <FaUsers size="2rem" /> 7 Trainers
                  </li>
                  <li className="flex items-center gap-[1rem]">
                    <BsPeopleFill size="2rem" /> 1k+ Students
                  </li>
                  <li className="flex items-center gap-[1rem]">
                    <HiSquare2Stack size="2rem" /> 9 Batches
                  </li>
                  <li className="flex items-center gap-[1rem]">
                    <FaLayerGroup size="1.8rem" /> 36 Sections
                  </li>
                </ul>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Panel;
