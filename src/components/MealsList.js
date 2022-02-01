import { Box, Divider } from "@mui/material";
import MealsItem from "./MealsItem";
import NavigationPannel from "./NavigationPannel";
import Tags from "./Tags";
import { useState } from "react";
import { Paper } from "@material-ui/core";

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
      <Box sx={{ mt: 1 }}>
        {filteredMeals.map((item, index) => {
          return (
            <Box sx={{ m: 2, mb: 3 }} key={index}>
              <Paper elevation={1}>
                <Box sx={{ p: 2 }}>
                  <MealsItem
                    item={item}
                    handlePlanBtn={handlePlanBtn}
                    handleOpenMealBtnClick={handleOpenMealBtnClick}
                  />
                </Box>
              </Paper>
            </Box>
          );
        })}
      </Box>
      <NavigationPannel />
    </Box>
  );
}
