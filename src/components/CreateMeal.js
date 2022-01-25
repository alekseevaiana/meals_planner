import { Typography, Box } from "@mui/material";
import MealForm from "./MealForm";

export default function CreateMeal({ handleMealChange }) {
  return (
    <>
      <Box sx={{ m: 2 }}>
        <Typography variant="h6">Add new meal</Typography>
        <MealForm onChange={handleMealChange} />
      </Box>
    </>
  );
}
