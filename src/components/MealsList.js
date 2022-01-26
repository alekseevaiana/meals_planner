import { Box, Divider } from "@mui/material";
import MealsItem from "./MealsItem";
import NavigationPannel from "./NavigationPannel";

export default function MealsList({
  meals,
  handlePlanBtn,
  handleOpenMealBtnClick,
}) {
  const searchValues = [];

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

  console.log(filteredMeals);
  return (
    <>
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
