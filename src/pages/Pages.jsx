import React from "react";
import Home from "./Home";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Cuisine from "./Cuisine";
function Pages() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cuisine",
      element: <Cuisine />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default Pages;
