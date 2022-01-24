import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { useState } from "react";
import { TextField, Box } from "@mui/material";
import IngridientsList from "./IngridientsList";

export default function AddIngridient({ ingridients, onChange }) {
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
      <TextField
        id="outlined-basic"
        label="Add ingridient"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
        value={name}
        onKeyPress={handleKeyPress}
      />
      <AddCircleOutlineRoundedIcon onClick={handleAdd} />
      <Box sx={{ mb: 2 }}>
        <IngridientsList ingridients={ingridients} />
      </Box>
    </Box>
  );
}
