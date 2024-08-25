import React from "react";
import SidebarMenu from "@/4_widgets/siderbar/components/SidebarMenu";
import { Outlet } from "react-router-dom";

const AppLayout: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto min-h-screen h-full">
      <div className="flex w-full">
        <SidebarMenu />
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
