import React from "react";
import { FaSearch } from "react-icons/fa";
function Search() {
  return (
    <form className="relative w-full mb-2">
      <input
        type="text"
        className="w-full border-none bg-gradient-to-r from-[#494949] to-[#313131] text-2xl text-white py-2 px-12 rounded-2xl"
      />
      <FaSearch className="absolute top-2/4 left-0 transform translate-y-[-50%] translate-x-[100%] text-white" />
    </form>
  );
}

export default Search;
