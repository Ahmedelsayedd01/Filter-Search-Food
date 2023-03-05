import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
function Category() {
  return (
    <div className="flex justify-center mb-6 mx-0">
      <NavLink
        to={"/cuisine/Italian"}
        className="flex flex-col justify-center items-center rounded-[50%] mr-8 bg-gradient-to-r from-[#494949] to-[#313131] w-20 h-20 cursor-pointer transform scale-90 focus:gradient"
      >
        <FaPizzaSlice className="text-white text-2xl" />
        <h4 className="text-white text-sm">Italian</h4>
      </NavLink>
      <NavLink
        to={"/cuisine/American"}
        className="flex flex-col justify-center items-center rounded-[50%] mr-8 bg-gradient-to-r from-[#494949] to-[#313131] w-20 h-20 cursor-pointer transform scale-90 focus:gradient"
      >
        <FaHamburger className="text-white text-2xl" />
        <h4 className="text-white text-sm">American</h4>
      </NavLink>
      <NavLink
        to={"/cuisine/Thai"}
        className="flex flex-col justify-center items-center rounded-[50%] mr-8 bg-gradient-to-r from-[#494949] to-[#313131] w-20 h-20 cursor-pointer transform scale-90 focus:gradient"
      >
        <GiNoodles className="text-white text-2xl" />
        <h4 className="text-white text-sm">Thai</h4>
      </NavLink>
      <NavLink
        to={"/cuisine/Japanese"}
        className="flex flex-col justify-center items-center rounded-[50%] mr-8 bg-gradient-to-r from-[#494949] to-[#313131] w-20 h-20 cursor-pointer transform scale-90 focus:gradient"
      >
        <GiChopsticks className="text-white text-2xl" />
        <h4 className="text-white text-sm">Japanese</h4>
      </NavLink>
    </div>
  );
}
export default Category;
