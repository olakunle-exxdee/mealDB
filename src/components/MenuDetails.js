import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

const MenuDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchMeal = useCallback(async () => {
    setLoading(true);
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    const { meals } = data;
    setMeal(meals);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetchMeal();
  }, [fetchMeal]);
  if (loading) {
    return <Loading />;
  }

  console.log(meal);
  return (
    <div className="menu-details">
      <div className="">
        <Link to="/">MENU</Link>
      </div>
      {meal.map((item) => {
        const {
          idMeal,
          strInstructions,
          strMeal,
          strMealThumb,
          strSource,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10,
        } = item;
        return (
          <div key={idMeal} className="details">
            <div className="details-content">
              <div className="img-details">
                <img src={strMealThumb} alt={strMeal} />
              </div>
              <div className="ing">
                <h1 className="heading">{strMeal}</h1>
                <div className="list">
                  <p className="p">Ingredients</p>
                  <div className="underline"></div>
                  <ul>
                    <p>{strIngredient1}</p>
                    <p>{strIngredient2}</p>
                    <p>{strIngredient3}</p>
                    <p>{strIngredient4}</p>
                    <p>{strIngredient5}</p>
                    <p>{strIngredient6}</p>
                    <p>{strIngredient7}</p>
                    <p>{strIngredient8}</p>
                    <p>{strIngredient9}</p>
                    <p>{strIngredient10}</p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="intruction">
              <p className="p">Intructions</p>
              <div className="underline"></div>
              <p className="text">
                {strInstructions}
                <a className="link" href={`${strSource}`}>
                  read more
                </a>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuDetails;
