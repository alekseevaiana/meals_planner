import { Box, Button, Divider, Typography } from "@mui/material";
import MealsItem from "./MealsItem";

export default function MealsList({ meals }) {
  return (
    <>
      {meals.map((item) => {
        return (
          <>
            <MealsItem item={item} />
            <Divider sx={{ mb: 2 }} />
          </>
        );
      })}
    </>
  );
}
