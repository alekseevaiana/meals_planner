import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { Link } from "react-router-dom";
import { Paper } from "@material-ui/core";
import React from "react";
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";

const style = {
  bottomNavigation: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
    boxShadow: 3,
    left: "50%",
    transform: "translate(-50%, 0)",
    height: "60px",
    pb: 3,
    pt: 2,
  },
};

export default function NavigationPannel() {
  return (
    <Paper>
      <BottomNavigation showLabels sx={style.bottomNavigation}>
        <BottomNavigationAction
          label="new meal"
          icon={<AddSharpIcon />}
          component={Link}
          to={"/new_meal"}
        />
        <BottomNavigationAction
          label="groceries"
          icon={<LocalGroceryStoreRoundedIcon />}
          component={Link}
          to={"/groceries"}
        />
      </BottomNavigation>
    </Paper>
  );
}
