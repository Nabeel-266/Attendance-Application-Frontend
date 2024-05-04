import { useLocation } from "react-router-dom";
import courses from "../data/courses";

// Component
import Header from "./header";

const CourseDetails = ({ setSidebarState }) => {
  const location = useLocation();

  const selectedCourseIs =
    location.pathname.split("/")[2] === "courses" &&
    location.pathname.split("/")[3].split("-").join("").toLowerCase();

  const selectedCourseData = courses.find(
    (course) =>
      course.name.split(" ").join("").toLowerCase() === selectedCourseIs
  );

  const headerTitle = selectedCourseData.name;
  const shortHeaderTitle = selectedCourseData.shortName;

  return (
    <div className="w-full laptopRg:w-[77%] desktopSm:w-[80%] h-dvh overflow-hidden">
      <Header
        headerTitle={headerTitle}
        setSidebarState={setSidebarState}
        shortHeaderTitle={shortHeaderTitle}
      />
      CourseDetail
    </div>
  );
};

export default CourseDetails;
