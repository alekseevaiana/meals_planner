import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { TextField, Box } from "@mui/material";
import IngridientsList from "./IngridientsList";

export default function AddIngridient({
  ingridientsList,
  currentInputIngridient,
  handleAddIngridientIcon,
  handleIngridientInputChange,
}) {
  return (
    <Box>
      <TextField
        id="outlined-basic"
        label="Add ingridient"
        variant="outlined"
        onChange={handleIngridientInputChange}
        value={currentInputIngridient}
      />
      <AddCircleOutlineRoundedIcon onClick={handleAddIngridientIcon} />
      <Box sx={{ mb: 2 }}>
        <IngridientsList ingridients={ingridientsList} />
      </Box>
    </Box>
  );
}
