import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
function Category() {
  return (
    <div className="flex justify-center my-2 mx-0">
      <Link to={"/cuisine"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Link>
      <div>
        <FaHamburger />
        <h4>American</h4>
      </div>
      <div>
        <GiNoodles />
        <h4>Thai</h4>
      </div>
      <div>
        <GiChopsticks />
        <h4>Japanese</h4>
      </div>
    </div>
  );
}

export default Category;
