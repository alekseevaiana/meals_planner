import { Box } from "@mui/material";
import IngridientsList from "./IngridientsList";
import InputAddIngridient from "./InputAddIngridient";

export default function AddIngridient({
  ingridients,
  onChange,
  handleDelete,
  allIngridients,
}) {
  return (
    <Box>
      <InputAddIngridient
        savedIngridients={ingridients}
        allIngridients={allIngridients}
        onChange={onChange}
      />
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
