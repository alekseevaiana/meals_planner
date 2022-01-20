import { Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import IngridientsList from "./IngridientsList";
import { Link } from "react-router-dom";

export default function MealPage({ mealsData }) {
  const params = useParams();
  const paramId = Number.parseInt(params.id, 10) ?? "N/A";

  const currentMeal = mealsData.find((meal) => meal.id === paramId);

  return (
    <>
      <Button variant="contained" color="secondary" component={Link} to={"/"}>
        Back home
      </Button>
      <Typography variant="h6" component="h2">
        {currentMeal.name}
      </Typography>
      <IngridientsList meal={currentMeal} />
    </>
  );
}
