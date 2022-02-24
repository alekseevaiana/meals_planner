import { Box, Typography } from "@mui/material";
import { useState } from "react";
import CheckboxList from "./CheckboxList";
import InputAddIngridient from "./InputAddIngridient";
import { v4 as uuidv4 } from "uuid";

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

export default function Groceries({ allIngridients }) {
  const [groceries, setGroceries] = useState([]);

  const updateIngridients = (updated) => {
    console.log("inside update ingridients: ", updated);
    setGroceries(updated);
  };
  console.log("groceries: ", groceries);
  console.log("all ingridients", allIngridients);
  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h6" color="primary.dark">
        Groceries
      </Typography>

      <InputAddIngridient
        allIngridients={allIngridients}
        onChange={updateIngridients}
        savedIngridients={groceries}
      />
      <CheckboxList ingridients={groceries} />
    </Box>
  );
}
