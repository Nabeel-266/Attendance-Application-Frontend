import { Link } from "react-router-dom";
import courses from "../../data/courses";

// Components
import Header from "../header";

const Courses = ({ setSidebarState }) => {
  return (
    <>
      <div className="w-full laptopRg:w-[77%] desktopSm:w-[80%] h-dvh overflow-hidden">
        {/* Courses Header */}
        <Header headerTitle="Courses" setSidebarState={setSidebarState} />

        {/* Courses Body */}
        <div className="w-full max-h-[91%] grid grid-cols-1 tabletSm:grid-cols-2 tabletLg:grid-cols-3 gap-[2.5rem] desktopSm:gap-[3rem] p-[3%] overflow-auto">
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
