import React from "react";
import { useRoutes } from "react-router-dom";
import HomeScreen from "../HomeScreen";
import Footer from "../LandingPage/Footer";
import Header from "../LandingPage/Header";

const HomeRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
    },
  ]);

  return (
    <>
      <Header />
      {element}
      <Footer />
    </>
  );
};

export default HomeRoutes;
