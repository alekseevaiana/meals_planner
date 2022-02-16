import { FaxRounded } from "@mui/icons-material";
import { Typography, Button, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import IngridientsPreview from "./IngridientsPreview";
import { getParamId } from "../helper";

export default function MealPage({ mealsData, onDeleteClick }) {
  const params = useParams();

  const currentMeal = mealsData.find((meal) => meal.id === getParamId(params));

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
