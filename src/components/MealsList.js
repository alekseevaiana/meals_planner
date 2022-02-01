import { Box, Divider } from "@mui/material";
import MealsItem from "./MealsItem";
import NavigationPannel from "./NavigationPannel";
import Tags from "./Tags";
import { useState } from "react";

function isSameCaseInsesitive(s1, s2) {
  return s1.toLowerCase() === s2.toLowerCase();
}

function hasString(array, str) {
  return array.some((v) => isSameCaseInsesitive(v, str));
}

function hasAll(target, search) {
  return search.every((s) => hasString(target, s));
}

export default function MealsList({
  meals,
  handlePlanBtn,
  handleOpenMealBtnClick,
  allIngridients,
}) {
  const [search, setSearch] = useState([]);

  const filteredMeals = meals.filter((meal) =>
    hasAll(meal.ingridients, search)
  );

  return (
    <Box>
      {allIngridients && (
        <Tags ingridients={allIngridients} onChange={setSearch} />
      )}
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
    </Box>
  );
}
