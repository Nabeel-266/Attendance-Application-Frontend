// Import React Icons

// Components
import Header from "../components/header";

const Classes = ({ setSidebarState }) => {
  return (
    <div className="w-full laptopRg:w-[77%] desktopSm:w-[80%] h-dvh overflow-hidden">
      {/* Classes Header */}
      <Header headerTitle="Classes" setSidebarState={setSidebarState} />

      {/* Classes Body */}
      <div className="w-full max-h-[90%] overflow-auto"></div>
    </div>
  );
};

export default Classes;
