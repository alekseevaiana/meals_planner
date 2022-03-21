import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { Link } from "react-router-dom";
import { Paper } from "@material-ui/core";
import React from "react";
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/material";

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
  },
  bottomNavigationLeft: {
    position: "fixed",
    top: 0,
    width: "100px",
    boxShadow: 3,
    left: 0,
    height: "100%",
    pb: 3,
    pt: 2,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 2,

    "& a": {
      maxHeight: "70px",
    },
  },
};

export default function NavigationPannel() {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Paper>
      <BottomNavigation
        showLabels
        sx={matches ? style.bottomNavigationLeft : style.bottomNavigation}
      >
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
