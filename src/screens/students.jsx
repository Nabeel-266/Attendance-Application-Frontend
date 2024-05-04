// Import React Icons

// Components
import Header from "../components/header";

const Students = ({ setSidebarState }) => {
  return (
    <div className="w-full laptopRg:w-[77%] desktopSm:w-[80%] h-dvh overflow-hidden">
      {/* Students Header */}
      <Header headerTitle="Students" setSidebarState={setSidebarState} />

      {/* Students Body */}
      <div className="w-full max-h-[90%] overflow-auto"></div>
    </div>
  );
};

export default Students;
