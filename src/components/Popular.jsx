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
              <SplideSlide>
                <div className="relative min-w-[25rem] overflow-hidden">
                  <p className="absolute z-10 left-1/2 bottom-1/2 -translate-x-[20%] translate-y-0 text-white w-full">
                    {recipe.title}
                  </p>
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="absolute rounded-[2rem] w-full object-cover left-0"
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

// const Wrapper = styled.div`
//   margin: 4rem 0rem;
// `;
// const Card = styled.div`
//   min-width: 25rem;
//   border-radius: 2rem;
//   overflow: hidden;
//   position: relative;

//   img {
//     border-radius: 2rem;
//     position: absolute;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
//   p {
//     position: absolute;
//     z-index:10;
//     left:50%;
//     bottom:0%;
//     transform: translate(-50%, 0%);
//     color: white;
//     width:100%;
//   }
// `;

export default Popular;
