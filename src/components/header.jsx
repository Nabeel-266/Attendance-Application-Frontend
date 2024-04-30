import { useLocation } from "react-router-dom";

// Import React Icons
import { MdClass } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { HiSquares2X2 } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineAddCircle } from "react-icons/md";
import { TiThMenuOutline } from "react-icons/ti";

const Header = () => {
  const location = useLocation();
  const headerTitle = location.pathname.split("/")[2];

  return (
    <header className="w-full h-[10%] relative z-50 flex justify-between items-center px-[2rem] bg-gray-900 shadow-[0px_2px_5px_#222]">
      <div className="flex items-center gap-[2.5rem]">
        <TiThMenuOutline className="text-[#7bb434] text-[2.4rem] cursor-pointer laptopRg:hidden" />

        <div className="flex items-center gap-[1rem] text-white select-none">
          {headerTitle === "courses" ? (
            <MdClass className="text-[2.5rem]" />
          ) : headerTitle === "batches" ? (
            <FaLayerGroup className="text-[2.3rem]" />
          ) : headerTitle === "classes" ? (
            <HiSquares2X2 className="text-[2.7rem]" />
          ) : headerTitle === "students" ? (
            <FaUsers className="text-[2.9rem]" />
          ) : headerTitle === "trainers" ? (
            <BsPeopleFill className="text-[2.5rem]" />
          ) : (
            ""
          )}

          <span className="text-[2.5rem] leading-[2.2rem] font-semibold">
            {`${headerTitle.charAt(0).toUpperCase()}${headerTitle
              .slice(1)
              .toLowerCase()}`}
          </span>
        </div>
      </div>

      <div className="flex items-center">
        <button
          className="flex items-center gap-[0.3rem] bg-slate-200 text-gray-800 text-[1.7rem] 
          leading-[1.7rem] font-medium px-[0.5rem] py-[0.4rem] rounded-md transition-all hover:bg-[#0a639e] hover:text-white active:scale-[0.98]"
        >
          <MdOutlineAddCircle className="text-[2.2rem]" />{" "}
          {headerTitle === "courses"
            ? "Add Course"
            : headerTitle === "batches"
            ? "Add Batch"
            : headerTitle === "classes"
            ? "Add Class"
            : headerTitle === "students"
            ? "Add Student"
            : headerTitle === "trainers"
            ? "Add Trainer"
            : ""}
        </button>
      </div>
    </header>
  );
};

export default Header;
