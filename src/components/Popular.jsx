import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
    // console.log(data.recipes);
  };

  return (
    <div>
      <div className="my-[4rem] mx-0">
        <h3>Popular Picks</h3>

        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <div className="relative flex items-center justify-center min-w-[25rem] overflow-hidden">
                  <p className="absolute bottom-5 z-10 text-white w-full text-center font-semibold	text-base h-2/5 flex justify-center items-center">
                    {recipe.title}
                  </p>
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="rounded-[2rem] w-full h-full object-cover left-0"
                  />
                  <div className="absolute z-10 w-full h-full bg-gradient-to-t from-transparent to-[rgba(0,0,0,0.5)] "></div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default Popular;
