import { Box, Button, Typography } from "@mui/material";
import IngridientsList from "./IngridientsList";

export default function MealsItem({ item, type }) {
  const actionBtnType = (type) => {
    if (type === "inPlan") {
      return "Remove from plan";
    } else {
      return "Add to plan";
    }
  };
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
          {actionBtnType(type)}
        </Button>
        <Button variant="outlined">Open</Button>
      </Box>
    </>
  );
}
