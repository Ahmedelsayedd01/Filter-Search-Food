import React from "react";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cuisine from "./Cuisine";
import Category from "../components/Category";
// import ErrorBoundary from "../components/ErrorBoundary";
import Search from "../components/Search";
import Searched from "./Searched";
import Recipe from "./Recipe";
import Nav from "../components/Nav";
function Pages() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav />
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
          <Nav />
          <Search />
          <Category />
          <Cuisine />
        </>
      ),
    },
    {
      path: "/searched/:search",
      element: (
        <>
          <Nav />
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
          <Nav />
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
