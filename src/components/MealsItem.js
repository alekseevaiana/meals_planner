import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import IngridientsList from "./IngridientsList";
import IngridientsPreview from "./IngridientsPreview";

export default function MealsItem({
  item,
  handlePlanBtn,
  handleOpenMealBtnClick,
}) {
  const actionBtnType = (inPlan) => {
    if (inPlan) {
      return "Remove from plan";
    } else {
      return "Add to plan";
    }
  };
  return (
    <>
      <Box
        onClick={() => handleOpenMealBtnClick(item.id)}
        sx={{ cursor: "pointer" }}
      >
        <Typography
          variant="h6"
          component="h3"
          sx={{ mb: 1, textTransform: "capitalize" }}
        >
          {item.name}
        </Typography>
        <Box sx={{ mb: 1 }}>
          <IngridientsPreview ingridients={item.ingridients} />
        </Box>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Button
          variant="contained"
          sx={{ mr: 2 }}
          onClick={() => handlePlanBtn(item.id)}
        >
          {actionBtnType(item.inPlan)}
        </Button>
      </Box>
    </>
  );
}
