import { Box, Typography } from "@mui/material";
import CheckboxList from "./CheckboxList";

export default function Groceries({}) {
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
    <Box>
      <Typography variant="h6" color="primary.dark">
        Groceries
      </Typography>
      <CheckboxList ingridients={ingridients} />
      {/* 
      - Render checklist
      - Add new ingridient with Autocomplit with parametrs: name, quaontity, category, where to buy
      - Add new ingridient input
      - when add -> open popup with additional inputs
      */}
    </Box>
  );
}
