import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState("");
  const params = useParams();

  const getSearced = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearced(params.search);
  }, [params.search]);
  return <div>Searched</div>;
}

export default Searched;
