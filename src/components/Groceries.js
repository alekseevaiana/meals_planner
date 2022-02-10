import { Box, Typography } from "@mui/material";
import CheckboxList from "./CheckboxList";
import InputAddIngridient from "./InputAddIngridient";

export default function Groceries({ allIngridients }) {
  const ingridients = [
    {
      id: 1,
      name: "rice",
      category: "Pasta/Grains",
      quantity: 1,
      dimension: "of them",
      notes: "",
      whereToBuy: "",
    },
    {
      id: 2,
      name: "ground beef",
      category: "Meat",
      quantity: 1,
      dimension: "of them",
      notes: "",
      whereToBuy: "Trader Joe's",
    },
    {
      id: 3,
      name: "pasta",
      category: "Pasta/Grains",
      quantity: 1,
      dimension: "of them",
      notes: "",
      whereToBuy: "Trader Joe's",
    },
  ];
  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h6" color="primary.dark">
        Groceries
      </Typography>
      <InputAddIngridient allIngridients={allIngridients} />
      <CheckboxList ingridients={ingridients} />
    </Box>
  );
}
