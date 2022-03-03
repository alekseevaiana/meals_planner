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
    if (!updated.includes(name) && name !== "") {
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

  const options = allIngridients;

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Autocomplete
          sx={{ width: "100%" }}
          id="free-solo-demo"
          freeSolo
          options={options}
          filterOptions={(options, params) => {
            if (params.inputValue && !options.includes(params.inputValue)) {
              return [params.inputValue, ...options];
            }
            return options;
          }}
          onKeyPress={handleKeyPress}
          onChange={(event, newValue, reason) => {
            if (reason != "selectOption") {
              return;
            }
            const updated = [...savedIngridients];
            if (!updated.includes(newValue)) {
              updated.push(newValue);
            }
            onChange(updated);
          }}
          onInputChange={(event, newValue, reason) => {
            if (reason === "reset") {
              setName("");
            } else {
              setName(newValue);
            }
          }}
          inputValue={name}
          clearOnBlur
          renderInput={(params) => (
            <TextField {...params} label="Add ingridient" variant="outlined" />
          )}
        />
      </Box>
    </>
  );
}
