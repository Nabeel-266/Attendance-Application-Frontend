import React from "react";

// Components
import Sidebar from "../components/sidebar";
import Overlay from "../components/overlay";
import { Outlet } from "react-router-dom";

const AdminDashboard = ({ sidebarState, setSidebarState }) => {
  return (
    <div className="w-full min-h-dvh relative flex bg-slate-200">
      <Overlay sidebarState={sidebarState} setSidebarState={setSidebarState} />

      <Sidebar sidebarState={sidebarState} setSidebarState={setSidebarState} />

      <Outlet />
    </div>
  );
};

export default AdminDashboard;
