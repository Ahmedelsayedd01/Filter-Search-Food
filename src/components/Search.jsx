import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
    console.log("hello");
  };
  return (
    <form className="relative w-full mb-2" onSubmit={submitHandler}>
      <FaSearch className="absolute top-2/4 left-0 transform translate-y-[-50%] translate-x-[100%] text-white cursor-pointer" />
      <input
        type="text"
        className="w-full border-none bg-gradient-to-r from-[#494949] to-[#313131] text-2xl text-white py-2 px-12 rounded-2xl"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
    </form>
  );
}

export default Search;
