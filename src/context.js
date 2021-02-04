import React, { createContext, useContext, useEffect, useState } from "react";
import { useCallback } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [search, setSearch] = useState("pie");
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchMeal = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await response.json();
      const { meals } = data;
      if (meals) {
        const newMeals = meals.map((item) => {
          const {
            strArea,
            strInstructions,
            strMeal,
            idMeal,
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
            strIngredient11,
            strIngredient12,
            strMealThumb,
            strSource,
            strYoutube,
            strCategory,
          } = item;
          return {
            origin: strArea,
            instructions: strInstructions,
            meal: strMeal,
            id: idMeal,
            link: strSource,
            youtube: strYoutube,
            image: strMealThumb,
            category: strCategory,
            ingredient1: strIngredient1,
            ingredient2: strIngredient2,
            ingredient3: strIngredient3,
            ingredient4: strIngredient4,
            ingredient5: strIngredient5,
            ingredient6: strIngredient6,
            ingredient7: strIngredient7,
            ingredient8: strIngredient8,
            ingredient9: strIngredient9,
            ingredient10: strIngredient10,
            ingredient11: strIngredient11,
            ingredient12: strIngredient12,
          };
        });
        setMenu(newMeals);
        setLoading(false);
      } else {
        setMenu([]);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  }, [search]);
  useEffect(() => {
    fetchMeal();
  }, [fetchMeal]);

  return (
    <MenuContext.Provider value={{ menu, setSearch, loading, error, search }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(MenuContext);
};
