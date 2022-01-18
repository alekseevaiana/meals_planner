import { Box, Button, Typography } from "@mui/material";

export default function MealsItem({
  item,
  handlePlanBtn,
  handleRemoveFromPlanBtn,
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
        <Button
          variant="contained"
          sx={{ mr: 2 }}
          onClick={() =>
            item.inPlan
              ? handleRemoveFromPlanBtn(item.id)
              : handlePlanBtn(item.id)
          }
        >
          {actionBtnType(item.inPlan)}
        </Button>
        <Button variant="outlined">Open</Button>
      </Box>
    </>
  );
}
