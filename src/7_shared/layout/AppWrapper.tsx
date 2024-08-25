import React from "react";
import { Outlet } from "react-router-dom";

// Functional component with props
const AppWrapper: React.FC = () => {
  return (
    <div className="w-full min-h-screen h-full bg-gray-50 border border-red-600">
      <Outlet />
    </div>
  );
};

export default AppWrapper;
