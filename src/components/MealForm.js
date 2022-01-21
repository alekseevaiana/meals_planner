import { Button, TextField, Box } from "@mui/material";
import AddIngridient from "./AddIngridient";

export default function MealForm({
  handleFormSubmit,
  handleAddIngridientIcon,
  ingridientsList,
  currentInputIngridient,
  handleCancelMealBtn,
  handleIngridientInputChange,
  onTitleInput,
}) {
  return (
    <Box component="form" autoComplete="off" onSubmit={handleFormSubmit}>
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        sx={{ mb: 2 }}
        onChange={onTitleInput}
      />
      <AddIngridient
        handleAddIngridientIcon={handleAddIngridientIcon}
        handleIngridientInputChange={handleIngridientInputChange}
        ingridientsList={ingridientsList}
        currentInputIngridient={currentInputIngridient}
      />
      <Box>
        <Button variant="contained" color="success" type="submit">
          Add
        </Button>
        <Button variant="outlined" color="error" onClick={handleCancelMealBtn}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
