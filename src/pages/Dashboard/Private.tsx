import React from "react";
import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../models/routes";
import { Dashboard } from "./Dashboard";
import { Home } from "./Home";
import { RoutesWithNotFound } from "../../utilities";

export const Private = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
    </RoutesWithNotFound>
  );
};

export default Private;
