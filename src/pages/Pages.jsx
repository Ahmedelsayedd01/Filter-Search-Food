import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Nav from "../components/Nav";
import Search from "../components/Search";
import Category from "../components/Category";
import Recipe from "./Recipe";
import Searched from "./Searched";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
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
  // const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={route} />
    </AnimatePresence>
  );
}

export default Pages;
