import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { getParamId } from "../helper";
import BackBtn from "./BackBtn";

import MealForm from "./MealForm";

export default function EditMeal({ meals, handleMealChange, allIngridients }) {
  const params = useParams();

  const currentMeal = meals.find((meal) => meal.id === getParamId(params));

  return (
    <>
      <BackBtn direction="/" />
      <Box sx={{ m: 2 }}>
        <Typography sx={{ mb: 3 }} variant="h6" color="primary.dark">
          Edit meal
        </Typography>
        <MealForm
          value={currentMeal}
          onChange={handleMealChange}
          allIngridients={allIngridients}
        />
      </Box>
    </>
  );
}
