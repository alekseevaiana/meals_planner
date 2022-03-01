import { Box, Typography } from "@mui/material";
import { useState } from "react";
import CheckboxList from "./CheckboxList";
import InputAddIngridient from "./InputAddIngridient";

export default function Groceries({ allIngridients }) {
  const [groceries, setGroceries] = useState([]);

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
