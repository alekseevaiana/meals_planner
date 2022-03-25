import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import IngridientsPreview from "./IngridientsPreview";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const style = {
  showAll: {
    height: "auto",
  },
  showLess: {
    height: "207px",
    overflow: "hidden",
  },
};

export default function MealsItem({
  item,
  handlePlanBtn,
  handleOpenMealBtnClick,
}) {
  const [isMore, setIsMore] = useState(false);
  const actionBtnType = (inPlan) => {
    if (inPlan) {
      return "Remove from plan";
    } else {
      return "Add to plan";
    }
  };

  const handleExpandIcon = () => {
    console.log("isMore? =>> ", isMore);
    setIsMore(!isMore);
  };
  return (
    <Box>
      <Box
        onClick={() => handleOpenMealBtnClick(item.id)}
        sx={{ cursor: "pointer" }}
      >
        <Typography
          variant="h6"
          component="h3"
          sx={{
            mb: 1,
            textTransform: "capitalize",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            height: "35px",
          }}
        >
          {item.name}
        </Typography>
        <Box sx={isMore ? style.showAll : style.showLess}>
          <IngridientsPreview ingridients={item.ingridients} />
        </Box>
      </Box>
      {isMore ? (
        <ExpandLessIcon
          onClick={handleExpandIcon}
          sx={{ cursor: "pointer", m: 1, ml: 0 }}
        />
      ) : (
        <ExpandMoreIcon
          onClick={handleExpandIcon}
          sx={{ cursor: "pointer", m: 1, ml: 0 }}
        />
      )}
      <Box sx={{ mb: 2 }}>
        <Button
          variant="contained"
          sx={{ mr: 2 }}
          onClick={() => handlePlanBtn(item.id)}
        >
          {actionBtnType(item.inPlan)}
        </Button>
      </Box>
    </Box>
  );
}
