import React from "react";

// Import Images
import SMIT_Logo from "../assets/smit-logo.png";

// Import React Icons
import { FaBorderAll, FaUser } from "react-icons/fa6";
import { MdClass } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <aside className="w-[21%] h-dvh bg-gray-800 border-gray-800 border-r-2 overflow-hidden">
      {/* Sidebar Header */}
      <header className="w-full h-[10%] relative z-50 flex items-center px-[1.3rem] bg-gray-900 shadow-[0px_2px_5px_rgb(55_65_81)]">
        <div className="w-full flex items-center gap-[0.8rem] select-none">
          <span className="w-[4rem] h-[4rem] p-[0.2rem] rounded-full bg-slate-100 flex justify-center items-center border-2 border-[#7bb434]">
            <img src={SMIT_Logo} alt="Logo" className="w-full" />
          </span>

          <h2 className="text-[2.6rem] font-semibold text-white leading-[2rem]">
            Admin
          </h2>
        </div>
      </header>

      {/* Sidebar Body */}
      <div className="w-full h-[90%] px-[0.2rem] relative flex flex-col">
        <div className="w-full h-[70%] px-[0.6rem] pt-[1.5rem] pb-[1rem] overflow-auto scrollbar">
          <ul className="w-full flex flex-col gap-[0.8rem]">
            {[
              [FaBorderAll, "Courses"],
              [MdClass, "Classes"],
              [FaUsers, "Students"],
              [BsPeopleFill, "Trainers"],
            ].map(([TabIcon, tabName], index) => {
              return (
                <li
                  className="w-full relative overflow-hidden before:content-[''] before:w-[100%] before:h-[100%] before:z-0 before:absolute before:top-0 before:left-0 before:translate-x-[-100%] before:bg-gray-900 before:rounded-e-full before:transition before:ease-out before:duration-[0.4s] hover:before:translate-x-[0%]"
                  key={index}
                >
                  <a
                    href="#"
                    className="w-full relative z-10 flex items-center gap-[1.2rem] px-[1.2rem] py-[1rem] text-slate-100 border-white hover:border-l-[0.3rem] hover:text-white"
                  >
                    <TabIcon className="text-[2rem]" />
                    <span className="text-[1.9rem] leading-[1.9rem] font-semibold">
                      {tabName}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <footer className="w-full h-[30%] px-[0.8rem] absolute z-50 bottom-0 right-0 bg-gray-800">
          <ul className="w-full h-full py-[1rem] flex flex-col gap-[0.2rem] border-t-[2px] border-gray-900">
            <li className="w-full relative flex items-center gap-[1.2rem] px-[1.2rem] py-[0.8rem] text-slate-100 cursor-pointer hover:rounded-full hover:bg-gray-900 transition-all">
              <FaUser className="text-[2.8rem] bg-white text-gray-800 p-[0.4rem] rounded-full" />
              <span className="text-[1.9rem] leading-[1.9rem] font-semibold">
                Profile
              </span>
            </li>

            <li className="w-full relative flex items-center gap-[1.2rem] px-[1.2rem] py-[0.8rem] text-slate-100 cursor-pointer hover:rounded-full hover:bg-gray-900 transition-all">
              <IoSettingsSharp className="text-[2.8rem] bg-white text-gray-800 p-[0.4rem] rounded-full" />
              <span className="text-[1.9rem] leading-[1.9rem] font-semibold">
                Settings
              </span>
            </li>

            <li className="w-full relative flex items-center gap-[1.2rem] px-[1.2rem] py-[0.8rem] mt-[0.4rem] text-gray-900 bg-slate-300 cursor-pointer rounded-full transition-all hover:bg-slate-400 active:scale-95">
              <RiLogoutCircleLine className="text-[2.8rem] bg-gray-800 text-white font-extrabold p-[0.5rem] rounded-full" />
              <span className="text-[1.9rem] font-semibold">Logout</span>
            </li>
          </ul>
        </footer>
      </div>
    </aside>
  );
};

export default Sidebar;
