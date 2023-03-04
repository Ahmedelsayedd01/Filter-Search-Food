import React from "react";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cuisine from "./Cuisine";
import Category from "../components/Category";
// import ErrorBoundary from "../components/ErrorBoundary";
import Search from "../components/Search";
import Searched from "./Searched";
import Recipe from "./Recipe";
function Pages() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Search />
          <Category />
          <Home />
        </>
      ),
    },
    {
      path: "/cuisine/:type",
      element: (
        <>
          <Search />
          <Category />
          <Cuisine />
        </>
      ),
      // errorElement: <ErrorBoundary />,
    },
    {
      path: "/searched/:search",
      element: (
        <>
          <Search />
          <Category />
          <Searched />
        </>
      ),
    },
    {
      path: "/recipe/:name",
      element: (
        <>
          <Search />
          <Category />
          <Recipe />
        </>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default Pages;
