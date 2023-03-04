import React from "react";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
function Nav() {
  return (
    <nav className="flex items-center my-8">
      <GiKnifeFork />
      <Link to={"/"} className="font-normal text-2xl font-[cursive]">deliciousss</Link>
    </nav>
  );
}

export default Nav;
