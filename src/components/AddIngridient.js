import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { useState } from "react";
import { TextField, Box } from "@mui/material";
import IngridientsList from "./IngridientsList";
import AddIcon from "@mui/icons-material/Add";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";

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
        <OutlinedInput
          id="outlined-basic"
          label="Add ingridient"
          variant="outlined"
          onChange={(event) => setName(event.target.value)}
          value={name}
          onKeyPress={handleKeyPress}
          endAdornment={
            <InputAdornment position="end">
              <AddIcon onClick={handleAdd} edge="end">
                f
              </AddIcon>
            </InputAdornment>
          }
        />
        {/* <AddIcon onClick={handleAdd} fontSize="large" /> */}
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
