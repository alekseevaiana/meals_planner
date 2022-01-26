import { Box, Divider } from "@mui/material";
import MealsItem from "./MealsItem";
import NavigationPannel from "./NavigationPannel";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Tags from "./Tags";

export default function MealsList({
  meals,
  handlePlanBtn,
  handleOpenMealBtnClick,
}) {
  const searchValues = [];
  const ingridientsList = ["rice", "meat", "pasta", "beef"];

  const filteredMeals = meals.filter((meal) => {
    const ingridients = meal.ingridients;
    let index = 0;
    searchValues.forEach((value) => {
      if (ingridients.includes(value)) {
        index++; //
      }
    });
    if (index === searchValues.length) {
      return meal;
    }
  });

  return (
    <>
      <Tags ingridients={ingridientsList} />
      <Box sx={{ m: 2 }}>
        {filteredMeals.map((item, index) => {
          return (
            <Box key={index}>
              <MealsItem
                item={item}
                handlePlanBtn={handlePlanBtn}
                handleOpenMealBtnClick={handleOpenMealBtnClick}
              />
              {/* {index !== ingridients.length - 1 ? ", " : ""} */}
              {index !== meals.length - 1 && <Divider sx={{ mb: 2 }} />}
            </Box>
          );
        })}
      </Box>
      <NavigationPannel />
    </>
  );
}
