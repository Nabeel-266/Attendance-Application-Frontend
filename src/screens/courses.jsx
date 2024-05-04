import { Link, Outlet } from "react-router-dom";
import courses from "../data/courses";

// Components
import Header from "../components/header";

const Courses = ({ setSidebarState }) => {
  return (
    <>
      <div className="w-full laptopRg:w-[77%] desktopSm:w-[80%] h-dvh overflow-hidden">
        {/* Courses Header */}
        <Header headerTitle="Courses" setSidebarState={setSidebarState} />

        {/* Courses Body */}
        <div className="w-full max-h-[90%] grid grid-cols-1 tabletSm:grid-cols-2 tabletLg:grid-cols-3 gap-[2.5rem] desktopSm:gap-[3rem] p-[3%] overflow-auto">
          {courses.map(({ name }, index) => {
            return (
              <Link
                to={`${name.split(" ").join("-").toLowerCase()}`}
                key={index}
              >
                <section className="w-full size-[200px] flex items-center justify-center bg-slate-900 border-slate-600 border-[0.4rem] shadow-slate-400 shadow-lg rounded-[1.2rem] cursor-pointer transition-all overflow-hidden hover:-translate-y-[0.4rem] hover:shadow-lg hover:shadow-slate-500 tabletLg:hover:shadow-xl tabletLg:hover:shadow-slate-500">
                  <span className="text-[2.6rem] laptopRg:text-[2.5rem] desktopSm:text-[2.6rem] font-semibold text-white bg-slate-900 px-[7%] text-center">
                    {`${name}`}
                  </span>

                  {/* <div className="lowerContent px-[1.2rem] py-[1rem]">
                  <ul className="text-[1.75rem] leading-[1rem] text-gray-800 flex flex-col gap-[1.3rem] font-medium list-none">
                    <li className="flex items-center gap-[1rem]">
                      <BsPeopleFill size="2rem" /> {trainers} Trainers
                    </li>
                    <li className="flex items-center gap-[1rem]">
                      <FaUsers size="2rem" /> {students} Students
                    </li>
                    <li className="flex items-center gap-[1rem]">
                      <FaLayerGroup size="1.8rem" /> {batches} Batches
                    </li>
                    <li className="flex items-center gap-[1rem]">
                      <HiSquares2X2 size="1.8rem" /> {sections} Sections
                    </li>
                  </ul>
                </div> */}
                </section>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Courses;
