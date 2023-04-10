import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "../pages/Error/Error";

export interface Prop {
  children: JSX.Element[] | JSX.Element;
}

export const RoutesWithNotFound = ({ children }: Prop) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
