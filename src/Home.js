import { Box, Typography } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import MealsList from "./MealsList";
import PlanMealsList from "./PlanMealsList";

export default function Home({ meals }) {
  const mealsInPlan = meals.filter((meal) => meal.inPlan === true);
  return (
    <>
      {console.log(meals, "mealsData", new Date())}
      <Box
        sx={{
          p: 2,
          mb: 10,
          height: "100vh",
        }}
      >
        <Link to="/">
          <Typography>Meals</Typography>
        </Link>
        <Link to="/plan">
          <Typography>Plan</Typography>
        </Link>
        <Routes>
          <Route exact path="/" element={<MealsList meals={meals} />} />
          {console.log(mealsInPlan, "mealsInPlan")}
          <Route path="/plan" element={<PlanMealsList meals={mealsInPlan} />} />
        </Routes>
      </Box>
    </>
  );
}
