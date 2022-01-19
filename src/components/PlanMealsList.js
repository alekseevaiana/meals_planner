import { Typography } from "@mui/material";
import MealsList from "./MealsList";

export default function PlanMealsList({
  meals,
  handlePlanBtn,
  handleOpenMealBtnClick,
}) {
  return (
    <>
      <MealsList
        meals={meals}
        handlePlanBtn={handlePlanBtn}
        handleOpenMealBtnClick={handleOpenMealBtnClick}
      />
    </>
  );
}
