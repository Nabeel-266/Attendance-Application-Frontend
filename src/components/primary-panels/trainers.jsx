// Import React Icons

// Components
import Header from "../header";

const Trainers = ({ setSidebarState }) => {
  return (
    <div className="w-full laptopRg:w-[77%] desktopSm:w-[80%] h-dvh overflow-hidden">
      {/* Trainers Header */}
      <Header headerTitle="Trainers" setSidebarState={setSidebarState} />

      {/* Trainers Body */}
      <div className="w-full max-h-[90%] overflow-auto"></div>
    </div>
  );
};

export default Trainers;
