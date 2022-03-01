import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import CheckboxList from "./CheckboxList";
import InputAddIngridient from "./InputAddIngridient";
import { getFromStorage } from "../helper";

export default function Groceries({ allIngridients }) {
  const [groceries, setGroceries] = useState(() =>
    getFromStorage("groceries", [])
  );

  useEffect(() => {
    localStorage.setItem("groceries", JSON.stringify(groceries));
  }, [groceries]);

  const updateIngridients = (updated) => {
    setGroceries(updated);
  };
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
