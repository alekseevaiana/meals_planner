import { Typography } from "@mui/material";
import MealsList from "./MealsList";

export default function PlanMealsList({ meals, handlePlanBtn }) {
  return (
    <>
      <Typography>My list with plan meals</Typography>
      <MealsList meals={meals} handlePlanBtn={handlePlanBtn} />
    </>
  );
}
