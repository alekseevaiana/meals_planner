import { Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import MealForm from "./MealForm";

export default function EditMeal({ meals, handleMealChange }) {
  const params = useParams();

  const paramId = Number.parseInt(params.id, 10);

  const currentMeal = meals.find((meal) => meal.id === paramId);

  return (
    <>
      {console.log("params =>", params)}
      <Button variant="contained" color="secondary" component={Link} to={"/"}>
        Back home
      </Button>
      <Typography>Edit meal</Typography>
      <MealForm value={currentMeal} onChange={handleMealChange} />
    </>
  );
}
