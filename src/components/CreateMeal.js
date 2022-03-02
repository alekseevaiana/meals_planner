import { Typography, Box } from "@mui/material";
import MealForm from "./MealForm";
import BackBtn from "./BackBtn";

export default function CreateMeal({ handleMealChange, allIngridients }) {
  return (
    <>
      <BackBtn direction="/" />
      <Box sx={{ m: 2 }}>
        <Typography variant="h6" color="primary.dark" sx={{ mb: 3 }}>
          Add new meal
        </Typography>
        <MealForm onChange={handleMealChange} allIngridients={allIngridients} />
      </Box>
    </>
  );
}
