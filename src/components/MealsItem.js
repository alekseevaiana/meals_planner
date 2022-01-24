import { Box, Button, Typography } from "@mui/material";
import IngridientsList from "./IngridientsList";

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
      <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
        {item.name}
      </Typography>
      <Box sx={{ mb: 1 }}>
        <IngridientsList ingridients={item.ingridients} />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Button
          variant="contained"
          sx={{ mr: 2 }}
          onClick={() => handlePlanBtn(item.id)}
        >
          {actionBtnType(item.inPlan)}
        </Button>
        <Button
          variant="outlined"
          onClick={() => handleOpenMealBtnClick(item.id)}
        >
          Open
        </Button>
      </Box>
    </>
  );
}
