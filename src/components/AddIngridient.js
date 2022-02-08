import { useState } from "react";
import { TextField, Box, Autocomplete } from "@mui/material";
import IngridientsList from "./IngridientsList";
import AddIcon from "@mui/icons-material/Add";

export default function AddIngridient({
  ingridients,
  onChange,
  handleDelete,
  allIngridients,
}) {
  const [name, setName] = useState("");

  const handleAdd = () => {
    const updated = [...ingridients];
    console.log("name:", name);
    if (!updated.includes(name)) {
      updated.push(name);
    }
    setName("");
    onChange(updated);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("enter");
      handleAdd();
    }
  };

  return (
    <Box>
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
          <AddIcon
            aria-label="toggle ingridient visibility"
            onClick={handleAdd}
            edge="end"
            sx={{ ml: "auto" }}
          />
        </Box>
      </Box>
      <Box sx={{ mb: 2 }}>
        <IngridientsList
          ingridients={ingridients}
          handleDelete={handleDelete}
          type="form"
        />
      </Box>
    </Box>
  );
}
