import { Link } from "react-router-dom";
import { Button, Divider } from "@mui/material";
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
      >
        Add new meal
      </Button>
      {meals.map((item) => {
        return (
          <>
            <MealsItem
              item={item}
              handlePlanBtn={handlePlanBtn}
              handleOpenMealBtnClick={handleOpenMealBtnClick}
            />
            <Divider sx={{ mb: 2 }} />
          </>
        );
      })}
    </>
  );
}
