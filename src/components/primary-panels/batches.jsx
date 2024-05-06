// Import React Icons

// Components
import Header from "../header";

const Batches = ({ setSidebarState }) => {
  return (
    <div className="w-full laptopRg:w-[77%] desktopSm:w-[80%] h-dvh overflow-hidden">
      {/* Batches Header */}
      <Header headerTitle="Batches" setSidebarState={setSidebarState} />

      {/* Batches Body */}
      <div className="w-full max-h-[90%] overflow-auto"></div>
    </div>
  );
};

export default Batches;
