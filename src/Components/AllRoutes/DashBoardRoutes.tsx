import React from "react";
import { useRoutes } from "react-router-dom";
import DashBoardHome from "../Dashdoard/DashBoardHome";

const DashBoardRoutes = () => {
  let elements = useRoutes([
    {
      path: "/dashboard",
      element: <DashBoardHome />,
    },
  ]);
  return elements;
};

export default DashBoardRoutes;
