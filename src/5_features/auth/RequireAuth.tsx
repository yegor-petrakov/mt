import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import useAuth from "../../7_shared/hooks/useAuth";

const RequireAuth: React.FC = () => {
  const location = useLocation();

  const { res } = useAuth();

  console.log(res);

  return res ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;
