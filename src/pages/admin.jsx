import React from "react";

// Components
import Sidebar from "../components/sidebar";
import Panel from "../components/panel";

const AdminDashboard = () => {
  return (
    <div className="w-full min-h-dvh flex bg-slate-300">
      <Sidebar />
      <Panel />
    </div>
  );
};

export default AdminDashboard;
