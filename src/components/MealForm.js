import { useState } from "react";
import { Button, TextField, Box, BottomNavigation } from "@mui/material";
import AddIngridient from "./AddIngridient";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

// value is meal {name, ingridients, id}
export default function MealForm({ value, onChange, allIngridients }) {
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
      if (index !== ingridientIndex) {
        data.push(item);
      }
      index++;
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
        sx={{ mb: 2, width: "100%" }}
        onChange={(event) => setName(event.target.value)}
      />
      <AddIngridient
        ingridients={ingridients}
        onChange={setIngridients}
        handleDelete={handleDelete}
        allIngridients={allIngridients}
      />
      <Box sx={{ textAlign: "center" }}>
        <Fab aria-label="add" color="primary" type="submit">
          <AddIcon />
        </Fab>
      </Box>
    </Box>
  );
}
