import React from "react";
import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../models/routes";
import { Dashboard } from "./Dashboard";
import { Home } from "./Home";

export const Private = () => {
  return (
    <>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
    </>
  );
};

export default Private;
