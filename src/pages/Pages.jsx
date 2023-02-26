import React from "react";
import Home from "./Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cuisine from "./Cuisine";
import Category from "../components/Category";
function Pages() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Category />
          <Home />
        </>
      ),
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
