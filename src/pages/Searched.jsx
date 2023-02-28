import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
    <div className="grid grid-cols-4 gap-5">
      {searchedRecipes.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt="" className="w-full rounded-[2rem]" />
            <h4 className="text-center p-2">{item.title}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Searched;
