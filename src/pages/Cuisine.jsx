import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <motion.div
      animate={{ opacity: 2 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-4 gap-5"
    >
      {cuisine.map((item) => {
        return (
          <div key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" className="w-full rounded-[2rem]" />
              <h4 className="text-center p-2">{item.title}</h4>
            </Link>
          </div>
        );
      })}
    </motion.div>
  );
}

export default Cuisine;
