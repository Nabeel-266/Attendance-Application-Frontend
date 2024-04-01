import React from "react";

// Components
import Topbar from "../components/topbar";

const Dashboard = () => {
  return (
    <>
      <Topbar />
      <div className="w-full min-h-dvh bg-[rgba(246,246,246,0.9)] backdrop-blur-[0px]">
        Dashboard
      </div>
    </>
  );
};

export default Dashboard;
