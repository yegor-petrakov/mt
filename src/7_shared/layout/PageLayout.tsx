import React, { ReactNode } from "react";

// Define the props interface
interface PageWrapperProps {
  children: ReactNode; // Type for children prop
}

// Functional component with props
const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return <div className="w-full">{children}</div>;
};

export default PageWrapper;
