import { Link } from "react-router-dom";
import { Box, Button, Divider } from "@mui/material";
import MealsItem from "./MealsItem";

export default function MealsList({
  meals,
  handlePlanBtn,
  handleOpenMealBtnClick,
}) {
  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to={"/new_meal"}
        sx={{ mb: 2 }}
      >
        Add new meal
      </Button>
      {meals.map((item, index) => {
        return (
          <Box key={item.id}>
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
