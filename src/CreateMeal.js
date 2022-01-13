import { Link } from "react-router-dom";
import { Button, Typography, TextField, Box } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { useState } from "react";

export default function CreateMeal() {
  const [inputIngridient, setInputIngridient] = useState();
  const [ingridients, setIngridients] = useState(["chicken"]);

  const handleIngridientInput = (e) => {
    console.log(e.target.value);
    setInputIngridient(e.target.value);
  };

  const handleAddIngridient = () => {
    console.log("call handle ingridients");
    // read what came from input
    // copy old ingridients
    // save input value to ingridients array
    // clear input
    const new_ingridient = inputIngridient;
    console.log("new ingridient" + new_ingridient);
    setIngridients([...ingridients, new_ingridient]);
    setInputIngridient("");
  };

  return (
    <>
      <Button variant="contained" color="secondary" component={Link} to={"/"}>
        Back home
      </Button>
      <Typography variant="h6">Add new meal</Typography>
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <TextField
        id="outlined-basic"
        label="Add ingridient"
        variant="outlined"
        sx={{ mb: 2 }}
        onChange={handleIngridientInput}
        value={inputIngridient}
      />
      <AddCircleOutlineRoundedIcon onClick={handleAddIngridient} />
      <Box sx={{ mb: 2 }}>
        {ingridients &&
          ingridients.map((ingridient) => {
            return ingridient + ", ";
          })}
      </Box>
      <Box>
        <Button variant="contained" color="success">
          Add
        </Button>
        <Button variant="outlined" color="error">
          Cancel
        </Button>
      </Box>
    </>
  );
}
