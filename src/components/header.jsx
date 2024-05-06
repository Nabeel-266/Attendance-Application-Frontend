import { useState } from "react";

// Import React Icons
import { MdClass } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { HiSquares2X2 } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineAddCircle } from "react-icons/md";
import { TbArrowBackUp } from "react-icons/tb";
import { CgMenuLeft } from "react-icons/cg";

const Header = ({ headerTitle, setSidebarState }) => {
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // window.addEventListener("resize", () => {
  //   setScreenWidth(window.innerWidth);
  // });

  return (
    <header className="w-full h-[6rem] relative z-50 flex justify-between items-center px-[2%] bg-gray-900 shadow-[0px_2px_10px_rgb(17_24_39)]">
      <div className="flex items-center gap-[2.5rem]">
        <CgMenuLeft
          className="text-white text-[3.4rem] leading-[3rem] cursor-pointer laptopRg:hidden"
          onClick={() => setSidebarState((prvState) => !prvState)}
        />

        <div className="flex items-center gap-[0.8rem] text-white select-none">
          {headerTitle === "Courses" || "Course" ? (
            <MdClass className="text-[2.7rem]" />
          ) : headerTitle === "Batches" ? (
            <FaLayerGroup className="text-[2.2rem]" />
          ) : headerTitle === "Classes" ? (
            <HiSquares2X2 className="text-[2.8rem]" />
          ) : headerTitle === "Students" ? (
            <FaUsers className="text-[2.9rem]" />
          ) : headerTitle === "Trainers" ? (
            <BsPeopleFill className="text-[2.6rem]" />
          ) : (
            ""
          )}

          <span className="text-[2.7rem] laptopRg:text-[2.6rem] font-semibold">
            {headerTitle}
          </span>
        </div>
      </div>

      <div className="flex items-center">
        <button
          className={`${
            headerTitle === "Courses" ||
            headerTitle === "Batches" ||
            headerTitle === "Classes" ||
            headerTitle === "Students" ||
            headerTitle === "Trainers"
              ? "block"
              : "hidden"
          } flex items-center gap-[0.3rem] bg-slate-200 text-gray-800 px-[0.5rem] py-[0.4rem] rounded-md transition-all hover:bg-[#0a639e] hover:text-white active:scale-[0.98]`}
        >
          <MdOutlineAddCircle className="text-[2.4rem] leading-[1.5rem]" />
          <span className="text-[1.7rem] leading-[1.6rem] font-medium">
            {headerTitle === "Courses"
              ? "Add Course"
              : headerTitle === "Batches"
              ? "Add Batch"
              : headerTitle === "Classes"
              ? "Add Class"
              : headerTitle === "Students"
              ? "Add Student"
              : headerTitle === "Trainers" && "Add Trainer"}
          </span>
        </button>

        <button
          onClick={() => window.history.back()}
          className={`${
            headerTitle === "Course" ||
            headerTitle === "Batch" ||
            headerTitle === "Class" ||
            headerTitle === "Student" ||
            headerTitle === "Trainer"
              ? "block"
              : "hidden"
          } flex items-center bg-slate-200 text-gray-800 p-[2px] rounded-md transition-all hover:bg-[#0a639e] hover:text-white active:scale-[0.98]`}
        >
          <TbArrowBackUp className="text-[2.4rem] leading-[1.5rem]" />
        </button>
      </div>
    </header>
  );
};

export default Header;
