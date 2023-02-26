import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
function Category() {
  return (
    <div className="flex justify-center my-2 mx-0">
      <NavLink to={"/cuisine"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={}>
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink>
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </div>
  );
}

export default Category;
