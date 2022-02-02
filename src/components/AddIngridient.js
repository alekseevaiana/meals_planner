import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { useState } from "react";
import { TextField, Box } from "@mui/material";
import IngridientsList from "./IngridientsList";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/icons-material/";

import InputAdornment from "@mui/material/InputAdornment";
import { OutlinedInput, InputLabel, FormControl } from "@mui/material";

export default function AddIngridient({ ingridients, onChange, handleDelete }) {
  const [name, setName] = useState("");

  const handleAdd = () => {
    const updated = [...ingridients];
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
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <FormControl variant="outlined" sx={{ width: "100%" }}>
          <InputLabel htmlFor="outlined-adornment-ingridient">
            Add ingridient
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-ingridient"
            value={name}
            onChange={(event) => setName(event.target.value)}
            onKeyPress={handleKeyPress}
            label="Add ingridient"
            endAdornment={
              <InputAdornment position="end">
                <AddIcon
                  aria-label="toggle ingridient visibility"
                  onClick={handleAdd}
                  edge="end"
                />
              </InputAdornment>
            }
          />
        </FormControl>
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
