import { useState } from "react";
import { TextField, Box, Autocomplete, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { v4 as uuidv4 } from "uuid";

export default function InputAddIngridient({
  allIngridients,
  savedIngridients,
  onChange,
}) {
  const [name, setName] = useState("");

  const handleAdd = () => {
    // here is all ingridients that comes with meal
    // in case groceries or pantry should be the same
    const updated = [...savedIngridients];
    console.log("saved updated: ", updated);
    // if there is NO such ingridient come with input name -> push it to the list
    // how to check if ingridient already exists
    if (!updated.includes(name)) {
      console.log("not included");
      updated.push({
        name: name,
        id: uuidv4(),
        category: "",
        quantity: 1,
        dimension: "of them",
        notes: "",
        whereToBuy: "",
      });
    }
    setName("");
    // call func with new ingridients list
    console.log("updated", updated);
    onChange(updated);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAdd();
    }
  };
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Autocomplete
          sx={{ width: "100%" }}
          id="free-solo-demo"
          freeSolo
          options={allIngridients.map((option) => option)}
          onKeyPress={handleKeyPress}
          onChange={(event, newValue) => {
            setName(newValue);
          }}
          value={name}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Add ingridient"
              variant="outlined"
              onChange={(event) => setName(event.target.value)}
            />
          )}
        />
        <Box sx={{ p: 1 }}>
          <IconButton onClick={handleAdd}>
            <AddIcon aria-label="add ingridient" sx={{ ml: "auto" }} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}
