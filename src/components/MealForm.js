import { useState } from "react";
import { Button, TextField, Box, BottomNavigation } from "@mui/material";
import AddIngridient from "./AddIngridient";

// value is meal {name, ingridients, id}
export default function MealForm({ value, onChange }) {
  console.log(value);
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

  const handleDelete = (ingridientIndex) => {
    const data = [];
    let index = 0;
    for (const item of ingridients) {
      if (index === ingridientIndex) {
        index++;
      } else {
        data.push(item);
        index++;
      }
    }
    setIngridients(data);
  };

  return (
    <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        value={name}
        label="Title"
        variant="outlined"
        sx={{ mb: 2 }}
        onChange={(event) => setName(event.target.value)}
      />
      <AddIngridient
        ingridients={ingridients}
        onChange={setIngridients}
        handleDelete={handleDelete}
      />
      <Box>
        <Button variant="contained" color="success" type="submit">
          Add
        </Button>
      </Box>
    </Box>
  );
}
