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
  //const options = name ? [name, ...allIngridients] : allIngridients;
  const options = allIngridients;

  return (
    <>
      NAME: {name}
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
            console.log(event, newValue, reason);
            if (reason != "selectOption") {
              return;
            }
            const updated = [...savedIngridients];
            if (!updated.includes(newValue)) {
              updated.push(newValue);
            }
            setName("");
            onChange(updated);
          }}
          value={name}
          selectOnFocus
          clearOnBlur
          renderInput={(params) => (
            <TextField {...params} label="Add ingridient" variant="outlined" />
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
