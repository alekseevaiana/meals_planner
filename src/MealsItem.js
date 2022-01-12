import { Box, Button, Typography } from "@mui/material";
import IngridientsList from "./IngridientsList";

export default function MealsItem({ item }) {
  return (
    <>
      <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
        {item.name}
      </Typography>
      <Box sx={{ mb: 1 }}>
        {item.ingridients.map((ingridient, index) => {
          return (
            <>
              {ingridient}
              {index != item.ingridients.length - 1 ? ", " : ""}
            </>
          );
        })}
      </Box>
      <Box sx={{ mb: 2 }}>
        <Button variant="contained" sx={{ mr: 2 }}>
          Add to plan
        </Button>
        <Button variant="outlined">Open</Button>
      </Box>
    </>
  );
}
