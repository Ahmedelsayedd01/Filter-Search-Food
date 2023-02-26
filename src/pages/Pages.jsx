import React from "react";
import Home from "./Home";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
function Pages() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default Pages;
