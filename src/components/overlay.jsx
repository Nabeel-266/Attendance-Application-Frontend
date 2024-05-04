import React from "react";

const Overlay = ({ sidebarState, setSidebarState }) => {
  return (
    <div
      onClick={() => setSidebarState((prvState) => !prvState)}
      className={`w-full h-dvh fixed top-0 left-0 z-[80] backdrop-blur-md bg-[#080b14cc] ${
        sidebarState ? "block" : "hidden"
      } transition-all`}
    ></div>
  );
};

export default Overlay;
