import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <div className="my-20 flex gap-10">
      <div className="w-2/4">
        <h3 className="mb-6">{details.title}</h3>
        <img src={details.image} alt="" />
      </div>
      <div className="w-2/4">
        <div className="flex mb-6">
          <button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => {
              setActiveTab("instructions");
            }}
          >
            Instructions
          </button>
          <button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => {
              setActiveTab("ingredients");
            }}
          >
            Ingredients
          </button>
        </div>
        {activeTab === "instructions" && (
          <div className="">
            <p
              dangerouslySetInnerHTML={{ __html: details.summary }}
              className="text-lg font-medium"
            ></p>
            <p
              dangerouslySetInnerHTML={{ __html: details.instructions }}
              className="font-normal mt-6"
            ></p>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li className="text-xl list-disc ml-6" key={ingredient.id}>
                {ingredient.original}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Recipe;
