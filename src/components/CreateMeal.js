import { Link } from "react-router-dom";
import { Button, Typography, TextField, Box } from "@mui/material";
import MealForm from "./MealForm";

export default function CreateMeal({ handleMealChange }) {
  return (
    <>
      <Typography variant="h6">Add new meal</Typography>
      <MealForm onChange={handleMealChange} />
    </>
  );
}
