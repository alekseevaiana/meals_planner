import { Link } from "react-router-dom";
import { Button, Typography, TextField, Box } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { useState } from "react";
import IngridientsList from "./IngridientsList";
import AddIngridient from "./AddIngridient";
import MealForm2 from "./MealForm2";
import MealForm from "./MealForm";

export default function CreateMeal({
  handleFormSubmit,
  handleAddIngridientIcon,
  ingridientsList,
  currentInputIngridient,
  handleMealNameInput,
  handleCancelMealBtn,
  handleIngridientInputChange,
  handleMealChange,
}) {
  return (
    <>
      <Button variant="contained" color="secondary" component={Link} to={"/"}>
        Back home
      </Button>
      <Typography variant="h6">Add new meal</Typography>
      <MealForm2 onChange={handleMealChange} />
      {/* <MealForm
        onTitleInput={handleMealNameInput}
        handleFormSubmit={handleFormSubmit}
        handleAddIngridientIcon={handleAddIngridientIcon}
        ingridientsList={ingridientsList}
        currentInputIngridient={currentInputIngridient}
        handleCancelMealBtn={handleCancelMealBtn}
        handleIngridientInputChange={handleIngridientInputChange}
      /> */}
    </>
  );
}
