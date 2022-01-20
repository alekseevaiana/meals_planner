import { Link } from "react-router-dom";
import { Button, Typography, TextField, Box } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { useState } from "react";
import IngridientsList from "./IngridientsList";
import AddIngridient from "./AddIngridient";

export default function CreateMeal({
  handleAddMealBtn,
  handleAddIngridientIcon,
  ingridientsList,
  currentInputIngridient,
  handleMealNameInput,
  handleCancelMealBtn,
  handleIngridientInputChange,
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
          onChange={handleMealNameInput}
        />
        <AddIngridient
          handleAddIngridientIcon={handleAddIngridientIcon}
          handleIngridientInputChange={handleIngridientInputChange}
          ingridientsList={ingridientsList}
          currentInputIngridient={currentInputIngridient}
        />
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
