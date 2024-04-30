// Import React Icons

// Components
import Header from "./header";

const Batches = () => {
  return (
    <div className="w-[79%] h-dvh overflow-hidden">
      {/* Batches Header */}
      <Header />

      {/* Batches Body */}
      <div className="w-full h-[90%] grid grid-cols-1 tabletRg:grid-cols-2 tabletLg:grid-cols-3 gap-[3rem] p-[3%] overflow-auto"></div>
    </div>
  );
};

export default Batches;
