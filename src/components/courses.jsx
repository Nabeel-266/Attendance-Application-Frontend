// Import React Icons
import { FaUsers } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa";
import { HiSquares2X2 } from "react-icons/hi2";

// Components
import Header from "./header";

const Courses = () => {
  const courses = [
    {
      name: "Web & Mobile Application Development",
      shortName: "WMA",
      trainers: "7",
      students: "1200",
      batches: "9",
      sections: "36",
    },
    {
      name: "Generative AI and Chatbot Development",
      shortName: "GAIC",
      trainers: "3",
      students: "520",
      batches: "3",
      sections: "9",
    },
    {
      name: "Graphic Designing & Video Editing",
      shortName: "GLD",
      trainers: "8",
      students: "1150",
      batches: "8",
      sections: "32",
    },
    {
      name: "Certified Computer Operater",
      shortName: "CCO",
      trainers: "5",
      students: "750",
      batches: "6",
      sections: "24",
    },
    {
      name: "Certified Computer Accountancy",
      shortName: "CCA",
      trainers: "6",
      students: "900",
      batches: "5",
      sections: "25",
    },
    {
      name: "Cisco Certified Network Associate",
      shortName: "CCNA",
      trainers: "3",
      students: "600",
      batches: "4",
      sections: "24",
    },
  ];

  return (
    <div className="w-[100%] laptopRg:w-[78%] laptopLg:w-[80%] h-dvh overflow-hidden">
      {/* Courses Header */}
      <Header />

      {/* Courses Body */}
      <div className="w-full max-h-[90%] grid grid-cols-1 tabletRg:grid-cols-2 tabletLg:grid-cols-3 gap-[2rem] desktopSm:gap-[3rem] p-[3%] overflow-auto">
        {courses.map(
          ({ name, trainers, students, batches, sections }, index) => {
            return (
              <section
                key={index}
                className="w-full size-[200px] flex items-center justify-center bg-slate-900 border-slate-600 border-[0.4rem] shadow-slate-400 shadow-lg rounded-[1.2rem] cursor-pointer transition-all overflow-hidden hover:-translate-y-[0.4rem] hover:shadow-xl hover:shadow-slate-500"
              >
                <h3 className="text-[2.6rem] font-semibold text-white bg-slate-900 px-[7%] text-center">
                  {`${name}`}
                </h3>

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
            );
          }
        )}
      </div>
    </div>
  );
};

export default Courses;
