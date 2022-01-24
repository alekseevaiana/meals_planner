import { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import AddIngridient from "./AddIngridient";
import { Navigate } from "react-router";

// value is meal {name, ingridients, id}
export default function MealForm({ value, onChange }) {
  const [name, setName] = useState(value ? value.name : "");
  const [ingridients, setIngridients] = useState(
    value ? value.ingridients : []
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    onChange({
      ...value,
      name,
      ingridients,
    });
  };

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{ m: 2 }}
    >
      <TextField
        id="outlined-basic"
        value={name}
        label="Title"
        variant="outlined"
        sx={{ mb: 2 }}
        onChange={(event) => setName(event.target.value)}
      />
      <AddIngridient ingridients={ingridients} onChange={setIngridients} />
      <Box>
        <Button variant="contained" color="success" type="submit">
          Add
        </Button>
        {/* <Button variant="outlined" color="error" onClick={handleCancelMealBtn}>
          Cancel
        </Button> */}
      </Box>
    </Box>
  );
}
