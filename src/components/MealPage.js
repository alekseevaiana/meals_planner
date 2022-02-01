import { Typography, Button, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import IngridientsList from "./IngridientsList";
import { Link } from "react-router-dom";
import IngridientsPreview from "./IngridientsPreview";

export default function MealPage({ mealsData, onDeleteClick }) {
  const params = useParams();
  // check here if paramId is not a number
  const paramId = Number.parseInt(params.id, 10);
  // do it only if paramId is a number
  const currentMeal = mealsData.find((meal) => meal.id === paramId);
  //use useMemo for preventing doing the same if component rerenders
  // const currentMeal = () => {
  //   const paramId = Number.parseInt(params.id, 10);
  //   if (paramId) {
  //     return mealsData.find((meal) => meal.id === paramId);
  //   }
  //   return "Error";
  // };

  return (
    <Box sx={{ m: 2 }}>
      <Typography
        variant="h6"
        component="h2"
        color="primary.dark"
        sx={{ mb: 1 }}
      >
        {currentMeal.name}
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ fontSize: "18px" }}>
          Ingridients
        </Typography>
        <IngridientsPreview ingridients={currentMeal.ingridients} />
      </Box>
      <Button
        variant="outlined"
        sx={{ mr: 2, color: "white", backgroundColor: "success" }}
        component={Link}
        to={`/meals/${params.id}/edit`}
        variant="contained"
      >
        Edit
      </Button>
      <Button
        variant="outlined"
        color="error"
        onClick={() => onDeleteClick(currentMeal.id)}
      >
        Delete
      </Button>
    </Box>
  );
}
