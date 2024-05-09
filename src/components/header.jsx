import { Link } from "react-router-dom";

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
        {headerTitle === "Courses" ? (
          <HeaderButton title={headerTitle} value="add-course" />
        ) : headerTitle === "Batches" ? (
          <HeaderButton title={headerTitle} value="add-batch" />
        ) : headerTitle === "Classes" ? (
          <HeaderButton title={headerTitle} value="add-class" />
        ) : headerTitle === "Students" ? (
          <HeaderButton title={headerTitle} value="add-student" />
        ) : (
          headerTitle === "Trainers" && (
            <HeaderButton title={headerTitle} value="add-trainer" />
          )
        )}

        <button
          className={`${
            headerTitle === "Courses" ||
            headerTitle === "Batches" ||
            headerTitle === "Classes" ||
            headerTitle === "Students" ||
            headerTitle === "Trainers"
              ? "hidden"
              : "block"
          } flex items-center gap-[0.3rem] bg-slate-200 text-gray-800 px-[0.5rem] py-[0.4rem] rounded-md transition-all hover:bg-[#0a639e] hover:text-white active:scale-[0.98]`}
        >
          <TbArrowBackUp className="text-[2.4rem] leading-[1.5rem]" />
        </button>
      </div>
    </header>
  );
};

const HeaderButton = ({ title, value }) => {
  return (
    <button
      className={`${
        title === "Courses" ||
        title === "Batches" ||
        title === "Classes" ||
        title === "Students" ||
        title === "Trainers"
          ? "block"
          : "hidden"
      } flex items-center gap-[0.3rem] bg-slate-200 text-gray-800 px-[0.5rem] py-[0.4rem] rounded-md transition-all hover:bg-[#0a639e] hover:text-white active:scale-[0.98]`}
    >
      <MdOutlineAddCircle className="text-[2.4rem] leading-[1.5rem]" />
      <span className="text-[1.7rem] leading-[1.6rem] font-medium">
        {value
          .split("-")
          .map(
            (str) =>
              str.charAt(0).toUpperCase() + "" + str.slice(1).toLowerCase()
          )
          .join(" ")}
      </span>
    </button>
  );
};

export default Header;
