import React from "react";
import Drawer from "@/4_widgets/drawer";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="fixed w-full inset-x-0 bottom-0 z-50 flex items-center justify-center h-24 bg-gray-400">
        <div className="relative">
          <div className="absolute bottom-[1.5rem] left-1/2 transform -translate-x-1/2">
            <Drawer />
          </div>
        </div>
      </div>
      HomePage
    </div>
  );
};

export default HomePage;
