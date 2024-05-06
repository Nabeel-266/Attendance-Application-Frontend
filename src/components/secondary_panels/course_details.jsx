import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import courses from "../../data/courses";

// Import React Icons
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { RiEyeFill } from "react-icons/ri";

// Component
import Header from "../header";
import { FaLayerGroup, FaUsers } from "react-icons/fa";
import { HiSquares2X2 } from "react-icons/hi2";
import { BsPeopleFill } from "react-icons/bs";

import TrainerPic from "../../assets/Avatar.jpg";

const CourseDetails = ({ setSidebarState }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const selectedCourseIs = location.pathname
    .split("/")[3]
    .split("-")
    .join("")
    .toLowerCase();

  const selectedCourseData = courses.find(
    (course) =>
      course.name.split(" ").join("").toLowerCase() === selectedCourseIs
  );

  useEffect(() => {
    if (!selectedCourseData?.name) {
      navigate("*");
    }
  }, [selectedCourseData]);

  // Function to scroll left
  const scrollLeft = (scrollAmount) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollAmount;
    }
  };

  // Function to scroll right
  const scrollRight = (scrollAmount) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="w-full laptopRg:w-[77%] desktopSm:w-[80%] h-dvh overflow-hidden">
      {/* Course Detail Header */}
      <Header headerTitle="Course" setSidebarState={setSidebarState} />

      {/* Course Detail Body */}
      <div className="w-full max-h-[90%] flex flex-col px-[1%] overflow-auto scrollbar-dark">
        <section className="upperContent w-full flex flex-col gap-[0.4rem] px-[1%] py-[2rem]">
          <h1 className="text-[3.4rem] leading-[4rem] text-gray-900 font-quick font-bold">{`${selectedCourseData?.name}`}</h1>

          <div className="flex justify-start flex-wrap gap-[1.5rem] list-none py-[1rem]">
            {[
              [FaLayerGroup, "Batches"],
              [HiSquares2X2, "Sections"],
              [FaUsers, "Students"],
              [BsPeopleFill, "Trainers"],
            ].map(([Icon, Title], index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-[0.6rem] bg-gray-800 pl-[0.4rem] pr-[1.2rem] py-[0.4rem] rounded-full shadow-lg list-none overflow-hidden"
                >
                  <Icon className="text-[2.2rem] text-gray-800 bg-[#7bb434] rounded-full p-[0.3rem]" />
                  <span className="text-[1.8rem] leading-[1.2rem] text-white font-quick font-semibold">
                    {selectedCourseData?.[Title.slice(0).toLowerCase()]} {Title}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="middleContent w-full flex flex-col">
          <div className="w-full flex justify-between items-center bg-gray-900 px-[1%] py-[0.1rem] rounded-md">
            <span className="text-[2.7rem] text-white font-quick font-semibold px-[0.2rem]">
              Trainers
            </span>

            <div className="flex gap-[1.4rem] px-[0.4rem]">
              <button
                onClick={() => scrollLeft(-500)}
                className="flex items-center bg-slate-200 text-gray-800 rounded-md transition-all hover:bg-[#0a639e] hover:text-white active:scale-[0.98] px-[0.4rem] py-[0.2rem]"
              >
                <FaChevronLeft className="text-[2.2rem]" />
              </button>

              <button
                onClick={() => scrollRight(500)}
                className="flex items-center bg-slate-200 text-gray-800 rounded-md transition-all hover:bg-[#0a639e] hover:text-white active:scale-[0.98] px-[0.4rem] py-[0.2rem]"
              >
                <FaChevronRight className="text-[2.2rem]" />
              </button>
            </div>
          </div>

          <div
            ref={containerRef}
            className="w-full flex gap-[1.2rem] px-[1%] py-[1.5rem] overflow-hidden scroll-smooth"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((e, index) => (
              <div
                key={index}
                className="card min-w-[20rem] h-[18rem] relative flex flex-col justify-center items-center gap-[0.8rem] bg-gray-800 border-gray-900 border-[0.3rem] rounded-xl px-[1rem] cursor-pointer hover:scale-[1.03] group/trainerCard transition-all"
              >
                <abbr title="View Profile">
                  <RiEyeFill className="absolute top-[0.6rem] left-[0.6rem] p-[0.3rem] text-[2.4rem] text-gray-900 bg-slate-200 rounded-full hidden transition-all group-hover/trainerCard:block" />
                </abbr>
                <figure className="w-[8rem] overflow-hidden">
                  <img
                    src={TrainerPic}
                    alt="Trainer"
                    className="border-gray-900 border-[0.3rem] rounded-full object-cover"
                  />
                </figure>
                <figcaption className="text-[1.8rem] leading-[2.5rem] text-white font-quick font-semibold text-center">
                  Muhammad <br /> Sufiyan
                </figcaption>
              </div>
            ))}
          </div>
        </section>

        <section className="lowerContent w-full flex flex-col pt-[2rem]">
          <div className="w-full flex justify-between items-center bg-gray-900 px-[1%] py-[0.1rem] rounded-md">
            <span className="text-[2.7rem] text-white font-quick font-semibold px-[0.2rem]">
              Students
            </span>

            {/* <div className="flex gap-[1.4rem] px-[0.4rem]">
              <button className="flex items-center bg-slate-200 text-gray-800 rounded-md transition-all hover:bg-[#0a639e] hover:text-white active:scale-[0.98] p-[0.2rem]">
                <FaChevronLeft className="text-[2.2rem]" />
              </button>

              <button className="flex items-center bg-slate-200 text-gray-800 rounded-md transition-all hover:bg-[#0a639e] hover:text-white active:scale-[0.98] p-[0.2rem]">
                <FaChevronRight className="text-[2.2rem]" />
              </button>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseDetails;
