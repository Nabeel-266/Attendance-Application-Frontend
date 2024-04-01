// Import Logo
import SMIT_Logo from "../assets/smit-logo.png";

const Topbar = () => {
  return (
    <header className="w-full h-[8.8vh] fixed top-0 left-0 z-50 flex items-center backdrop-blur-[0px]">
      <div className="flex justify-between px-[1%] mb-[0.4rem]">
        <div className="leftSide flex items-center gap-[0.3rem] select-none">
          <img src={SMIT_Logo} alt="Logo" className="w-[8.2rem]" />
          <h2 className="text-[3rem] font-bold text-gray-800 leading-[2.3rem] self-end">
            Portal
          </h2>
        </div>

        <div className="rightSide"></div>
      </div>
    </header>
  );
};

export default Topbar;
