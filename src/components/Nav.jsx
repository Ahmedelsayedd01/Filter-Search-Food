import React from "react";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
function Nav() {
  return (
    <nav>
      <GiKnifeFork />
      <Link to={"/"}>deliciousss</Link>
    </nav>
  );
}

export default Nav;
