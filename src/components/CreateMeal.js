import { Link } from "react-router-dom";
import { Button, Typography, TextField, Box } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { useState } from "react";

export default function CreateMeal({
  handleAddMealBtn,
  handleIngridientInput,
  handleAddIngridient,
  inputIngridient,
  ingridients,
  handleIngridientNameInput,
  handleCancelMealBtn,
}) {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <Button variant="contained" color="secondary" component={Link} to={"/"}>
        Back home
      </Button>
      <Box component="form" autoComplete="off" onSubmit={handleFormSubmit}>
        <Typography variant="h6">Add new meal</Typography>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          sx={{ mb: 2 }}
          onChange={handleIngridientNameInput}
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
            ingridients.map((ingridient, index) => {
              return `${ingridient} ${
                ingridients.length - 1 === index ? "" : ", "
              }`;
            })}
        </Box>
        <Box>
          <Button
            variant="contained"
            color="success"
            onClick={handleAddMealBtn}
            type="submit"
          >
            Add
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={handleCancelMealBtn}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </>
  );
}
