import { Box, Divider } from "@mui/material";
import MealsItem from "./MealsItem";

export default function MealsList({
  meals,
  handlePlanBtn,
  handleOpenMealBtnClick,
}) {
  return (
    <>
      {meals.map((item, index) => {
        return (
          <Box key={index}>
            <MealsItem
              item={item}
              handlePlanBtn={handlePlanBtn}
              handleOpenMealBtnClick={handleOpenMealBtnClick}
            />
            <Divider sx={{ mb: 2 }} />
          </Box>
        );
      })}
    </>
  );
}
