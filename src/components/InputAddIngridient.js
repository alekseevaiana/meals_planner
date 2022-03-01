import { useState } from "react";
import { TextField, Box, Autocomplete, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function InputAddIngridient({
  allIngridients,
  savedIngridients,
  onChange,
}) {
  const [name, setName] = useState("");

  const handleAdd = () => {
    const updated = [...savedIngridients];
    if (!updated.includes(name)) {
      updated.push(name);
    }
    setName("");
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
