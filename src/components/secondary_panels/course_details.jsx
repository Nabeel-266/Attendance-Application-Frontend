import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import courses from "../../data/courses";
import students from "../../data/student";

import TrainerPic from "../../assets/Avatar.jpg";

// Import React Icons
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { RiEyeFill } from "react-icons/ri";
import { FaLayerGroup, FaUsers } from "react-icons/fa";
import { HiSquares2X2 } from "react-icons/hi2";
import { BsPeopleFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
// import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
// import { GrSort } from "react-icons/gr";

// Component
import Header from "../header";

const CourseDetails = ({ setSidebarState }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const trainerContRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // window.addEventListener("resize", () => {
  //   setScreenWidth(window.innerWidth);
  // });

  useEffect(() => {
    const container = trainerContRef.current;
    if (container) {
      const hasHorizontalScrollbar =
        container.scrollWidth > container.clientWidth;
      setIsScrolling(hasHorizontalScrollbar);
    }
  }, []);

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
    if (trainerContRef.current) {
      trainerContRef.current.scrollLeft += scrollAmount;
    }
  };

  // Function to scroll right
  const scrollRight = (scrollAmount) => {
    if (trainerContRef.current) {
      trainerContRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="w-full laptopRg:w-[77%] desktopSm:w-[80%] h-dvh overflow-hidden">
      {/* Course Detail Header */}
      <Header headerTitle="Course" setSidebarState={setSidebarState} />

      {/* Course Detail Body */}
      <div className="w-full max-h-[91%] flex flex-col px-[1%] overflow-auto scrollbar-dark">
        <section className="w-full flex flex-col gap-[0.4rem] px-[1%] py-[2rem]">
          <h1 className="text-[3.4rem] leading-[4rem] text-gray-900 font-quick font-bold">{`${selectedCourseData?.name}`}</h1>

          <div className="flex justify-start flex-wrap gap-[1.5rem] list-none py-[1rem]">
            {[
              [FaLayerGroup, "Batches"],
              [HiSquares2X2, "Sections"],
              [BsPeopleFill, "Trainers"],
              [FaUsers, "Students"],
            ].map(([Icon, Title], index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-[0.6rem] bg-gray-800 pl-[0.5rem] pr-[1.2rem] py-[0.5rem] rounded-full shadow-lg list-none overflow-hidden"
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

        <section className="w-full flex flex-col border-t-[0.2rem] border-gray-300 pt-[1rem] pb-[2rem]">
          <div className="w-full flex justify-between items-center px-[1%] py-[0.8rem] rounded-md">
            <span className="text-[2.8rem] leading-[2.7rem] text-gray-900 font-quick font-bold px-[0.2rem]">
              Batches
            </span>

            <button className="text-[1.6rem] text-white bg-slate-800 rounded-md transition-all hover:bg-[#0a639e] hover:text-white active:scale-[0.98] px-[1rem] py-[0.4rem]">
              Create Batch
            </button>
          </div>

          <div className="w-full grid grid-cols-1 tabletRg:grid-cols-2 desktopSm:grid-cols-3 gap-[1rem] px-[1%] py-[1rem] overflow-hidden">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, index) => (
              <div
                key={index}
                className="group/batch relative flex items-center gap-[1rem] bg-gray-800 px-[1rem] py-[1rem] rounded-md transition-all hover:bg-slate-700"
              >
                <h6 className="text-[2rem] leading-[2rem] text-white font-semibold font-quick">
                  Batch 0{e}
                </h6>

                <span className="text-[1.4rem] text-blue-500 border-[0.2rem] border-blue-500 px-[1rem] py-[0.2rem] rounded-full">
                  Completed
                </span>

                <button className="absolute right-[1rem] text-[2.5rem] text-white hover:scale-[1.05] hidden group-hover/batch:block">
                  <MdDelete className="" />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full flex flex-col border-t-[0.2rem] border-gray-300 pt-[1rem] pb-[2rem]">
          <div className="w-full flex justify-between items-center px-[1%] py-[0.8rem] rounded-md">
            <span className="text-[2.8rem] leading-[2.7rem] text-gray-900 font-quick font-bold px-[0.2rem]">
              Sections
            </span>

            <div className="flex items-center gap-[1rem]">
              <select
                id="batches"
                className="text-[1.75rem] font-normal font-quick outline-none text-white bg-slate-800 px-[0.4rem] py-[0.4rem] rounded-md"
              >
                <option value="batch-01">Batch 01</option>
                <option value="batch-02">Batch 02</option>
                <option value="batch-03">Batch 03</option>
                <option value="batch-04">Batch 04</option>
                <option value="batch-05">Batch 05</option>
              </select>

              <button className="text-[1.6rem] text-white bg-slate-800 rounded-md transition-all hover:bg-[#0a639e] hover:text-white active:scale-[0.98] px-[1rem] py-[0.4rem]">
                Add Section
              </button>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 tabletSm:grid-cols-2 tabletRg:grid-cols-3 laptopRg:grid-cols-4 desktopSm:grid-cols-5 gap-[1rem] px-[1%] py-[1rem] overflow-hidden">
            {["A", "B", "C", "D", "E"].map((e, index) => (
              <div
                key={index}
                className="group/batch relative flex items-center gap-[1rem] bg-gray-800 px-[1rem] py-[1rem] rounded-md transition-all hover:bg-slate-700"
              >
                <h6 className="text-[2rem] leading-[2rem] text-white font-semibold font-quick">
                  Section {e}
                </h6>

                <button className="absolute right-[1rem] text-[2.5rem] text-white hover:scale-[1.05] hidden group-hover/batch:block">
                  <MdDelete className="" />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full flex flex-col border-t-[0.2rem] border-gray-300 pt-[1rem] pb-[2rem]">
          <div className="w-full flex justify-between items-center px-[1%] py-[0.8rem] rounded-md">
            <span className="text-[2.8rem] leading-[2.7rem] text-gray-900 font-quick font-bold px-[0.2rem]">
              Trainers
            </span>

            {isScrolling && (
              <div className="flex gap-[1.4rem] px-[0.4rem]">
                <button
                  onClick={() => scrollLeft(-500)}
                  className="flex items-center text-white bg-slate-800 rounded-md transition-all hover:bg-[#0a639e] hover:text-white active:scale-[0.98] p-[0.4rem]"
                >
                  <FaChevronLeft className="text-[2rem]" />
                </button>

                <button
                  onClick={() => scrollRight(500)}
                  className="flex items-center text-white bg-slate-800 rounded-md transition-all hover:bg-[#0a639e] hover:text-white active:scale-[0.98] p-[0.4rem]"
                >
                  <FaChevronRight className="text-[2rem]" />
                </button>
              </div>
            )}
          </div>

          <div
            ref={trainerContRef}
            className="w-full flex gap-[1.2rem] px-[1%] py-[1rem] overflow-hidden scroll-smooth"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((e, index) => (
              <div
                key={index}
                className="card min-w-[25rem] px-[1rem] pt-[1rem] pb-[2rem] relative flex flex-col justify-center items-center gap-[0.8rem] bg-gray-800 border-gray-900 border-[0.3rem] rounded-xl cursor-pointer hover:scale-[1.03] group/trainerCard transition-all"
              >
                <abbr title="View Profile">
                  <RiEyeFill className="absolute top-[0.6rem] left-[0.6rem] p-[0.3rem] text-[2.4rem] text-gray-900 bg-[#7bb434] rounded-full hidden transition-all group-hover/trainerCard:block" />
                </abbr>

                <figure className="w-[8rem] overflow-hidden">
                  <img
                    src={TrainerPic}
                    alt="Trainer"
                    className="border-gray-900 border-[0.3rem] rounded-full object-cover"
                  />
                </figure>

                <figcaption className="flex flex-col gap-[1rem] text-[1.7rem] leading-[1.7rem] font-quick font-semibold text-center">
                  <span className=" text-white">Muhammad Sufiyan</span>
                </figcaption>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full flex flex-col gap-[1rem] border-t-[0.2rem] border-gray-300 px-[1%] pt-[1rem] pb-[2rem]">
          <div className="w-full flex justify-between items-center py-[0.8rem] rounded-md">
            <span className="text-[2.8rem] leading-[2.7rem] text-gray-900 font-quick font-bold px-[0.2rem]">
              Students
            </span>

            <div className="flex gap-[1.4rem] px-[0.4rem]">
              <select
                id="batches"
                className="text-[1.8rem] font-semibold font-quick outline-none text-white bg-slate-800 px-[0.4rem] py-[0.4rem] rounded-md"
              >
                <option value="batch-01">Batch 01</option>
                <option value="batch-02">Batch 02</option>
                <option value="batch-03">Batch 03</option>
                <option value="batch-04">Batch 04</option>
                <option value="batch-05">Batch 05</option>
              </select>

              <select
                id="sections"
                className="text-[1.8rem] font-semibold font-quick outline-none text-white bg-slate-800 px-[0.4rem] py-[0.1rem] rounded-md"
              >
                <option value="section-A">Section A</option>
                <option value="section-B">Section B</option>
                <option value="section-C">Section C</option>
                <option value="section-D">Section D</option>
                <option value="section-E">Section E</option>
              </select>
            </div>
          </div>

          <div className="w-full overflow-auto rounded-lg">
            <table className="w-full min-w-[67rem] bg-gray-800">
              <thead className="bg-slate-800 text-[#7bb434]">
                <tr className="text-[2.2rem] leading-[2.2rem] text-center font-bold font-quick">
                  <th className="py-[1.2rem]">ID</th>
                  <th className="py-[1.2rem]">Picture</th>
                  <th className="py-[1.2rem]">Student Name</th>
                  <th className="py-[1.2rem]">Father Name</th>
                </tr>
              </thead>

              <tbody className="border-gray-950 border-y-[0.2rem] text-slate-200">
                {students.map(
                  ({ name, fatherName, rollNo, profilePic }, index) => (
                    <tr
                      key={index}
                      className="text-[1.8rem] text-center font-medium font-quick rounded-full border-gray-900 border-b-[0.1rem] transition-all select-none cursor-pointer hover:bg-slate-700"
                      style={{ borderRadius: "0.8rem" }}
                    >
                      <td className="py-[1rem]">{rollNo}</td>
                      <td className="py-[1rem] flex justify-center items-center">
                        <img
                          src={profilePic}
                          alt="profilePic"
                          className="size-[4rem] rounded-full shadow-lg shadow-slate-800"
                        />
                      </td>
                      <td className="py-[1rem]">{name}</td>
                      <td className="py-[1rem]">{fatherName}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseDetails;
