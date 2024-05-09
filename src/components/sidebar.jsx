import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Import Images
import SMIT_Logo from "../assets/smit-logo.png";

// Import React Icons
import { ImCross } from "react-icons/im";
import { MdClass } from "react-icons/md";
import { HiSquares2X2 } from "react-icons/hi2";
import { FaUsers, FaLayerGroup } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";

const Sidebar = ({ sidebarState, setSidebarState }) => {
  const location = useLocation();
  const [isActiveTab, setIsActiveTab] = useState(
    location.pathname.split("/")[2]
  );
  return (
    <aside
      className={`w-[30rem] laptopRg:w-[23%] desktopSm:w-[20%] h-dvh bg-gray-800 border-gray-900 border-r-2 z-[99] absolute translate-x-[-100%] laptopRg:relative laptopRg:translate-x-[0rem] ${
        sidebarState ? "translate-x-[0rem]" : "translate-x-[-100%]"
      } transition-all`}
    >
      {/* Sidebar Header */}
      <header className="w-full h-[6rem] relative z-50 flex items-center px-[1.3rem] bg-gray-900 shadow-[-2px_3px_5px_rgb(55_65_81)]">
        <div className="w-full flex items-center gap-[0.8rem] select-none">
          <span className="w-[4rem] h-[4rem] p-[0.2rem] rounded-full bg-slate-100 flex justify-center items-center border-2 border-[#7bb434]">
            <img src={SMIT_Logo} alt="Logo" className="w-full" />
          </span>

          <h2 className="text-[2.8rem] laptopRg:w-[2.6rem] font-semibold text-white leading-[2rem]">
            Admin
          </h2>
        </div>

        <span
          onClick={() => setSidebarState((prvState) => !prvState)}
          className={`absolute right-[-4rem] bg-gray-800 p-[0.7rem] rounded-[0.4rem] cursor-pointer ${
            sidebarState ? "block" : "hidden"
          }`}
        >
          <ImCross className="text-[1.8rem] text-white" />
        </span>
      </header>

      {/* Sidebar Body */}
      <div className="w-full h-[90%] relative flex flex-col">
        <div className="w-full h-[70%] pr-[0.6rem] pt-[1.5rem] pb-[1rem] overflow-auto scrollbar-light">
          <ul className="w-full flex flex-col gap-[0.8rem]">
            {[
              [MdClass, "Courses"],
              [FaLayerGroup, "Batches"],
              [HiSquares2X2, "Classes"],
              [BsPeopleFill, "Trainers"],
              [FaUsers, "Students"],
            ].map(([TabIcon, tabName], index) => {
              return (
                <li
                  className={`${
                    isActiveTab === tabName.toLowerCase()
                      ? "before:translate-x-[-20%]"
                      : "before:translate-x-[-100%] hover:before:translate-x-[0%]"
                  } w-full relative overflow-hidden before:content-[''] before:w-[100%] before:h-[100%] before:z-0 before:absolute before:top-0 before:left-0 before:bg-gray-900 before:rounded-e-full before:transition before:ease-out before:duration-[0.4s]`}
                  key={index}
                >
                  <Link
                    to={tabName.toLowerCase()}
                    onClick={() => {
                      setIsActiveTab(tabName.toLowerCase());
                      setSidebarState(false);
                    }}
                    className={`${
                      isActiveTab === tabName.toLowerCase()
                        ? "text-[#7bb434] border-[#7bb434] border-l-[0.3rem] "
                        : "text-slate-100 border-white hover:border-l-[0.3rem]"
                    } w-full relative z-10 flex items-center gap-[1.2rem] px-[1.5rem] py-[1rem] `}
                  >
                    <TabIcon className="text-[2rem]" />
                    <span className="text-[1.9rem] leading-[1.9rem] font-semibold">
                      {tabName}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <footer className="w-full flex flex-col px-[0.8rem] pt-[1rem] pb-[1.5rem] absolute z-50 bottom-0 right-0 bg-gray-800">
          <ul className="w-full pt-[1rem] pb-[0.5rem] flex flex-col gap-[0.2rem] border-t-[2px] border-gray-900">
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
          </ul>

          <button className="w-full relative flex items-center gap-[1.2rem] px-[1.2rem] py-[0.8rem] mt-[0.4rem] text-gray-900 bg-slate-200 cursor-pointer rounded-full transition-all hover:bg-[#0a639e] hover:text-white active:scale-95:">
            <RiLogoutCircleLine className="text-[2.8rem] bg-gray-800 text-white font-extrabold p-[0.5rem] rounded-full" />
            <span className="text-[1.9rem] font-semibold">Logout</span>
          </button>
        </footer>
      </div>
    </aside>
  );
};

export default Sidebar;
