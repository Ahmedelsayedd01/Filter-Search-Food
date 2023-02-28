import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
function Search() {
  const [input, setInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className="relative w-full mb-2" onSubmit={submitHandler()}>
      <FaSearch className="absolute top-2/4 left-0 transform translate-y-[-50%] translate-x-[100%] text-white cursor-pointer" />
      <input
        type="text"
        className="w-full border-none bg-gradient-to-r from-[#494949] to-[#313131] text-2xl text-white py-2 px-12 rounded-2xl"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <h1>{input}</h1>
    </form>
  );
}

export default Search;
