import { Box, Divider } from "@mui/material";
import MealsItem from "./MealsItem";
import NavigationPannel from "./NavigationPannel";
import Tags from "./Tags";
import { useState } from "react";

export default function MealsList({
  meals,
  handlePlanBtn,
  handleOpenMealBtnClick,
}) {
  const [search, setSearch] = useState([]);
  const ingridientsList = ["rice", "meat", "pasta", "beef"];

  const filteredMeals = meals.filter((meal) => {
    const ingridients = meal.ingridients;
    let index = 0;
    search.forEach((value) => {
      if (ingridients.includes(value)) {
        index++;
      }
    });
    if (index === search.length) {
      return meal;
    }
  });

  const getValue = (newValue) => {
    setSearch(newValue);
  };

  return (
    <>
      <Tags ingridients={ingridientsList} onChange={getValue} />
      {console.log("search values ===> ", search)}
      <Box sx={{ m: 2 }}>
        {filteredMeals.map((item, index) => {
          return (
            <Box key={index}>
              <MealsItem
                item={item}
                handlePlanBtn={handlePlanBtn}
                handleOpenMealBtnClick={handleOpenMealBtnClick}
              />
              {index !== meals.length - 1 && <Divider sx={{ mb: 2 }} />}
            </Box>
          );
        })}
      </Box>
      <NavigationPannel />
    </>
  );
}
