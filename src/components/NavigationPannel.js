import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavigationPannel() {
  const [value, setValue] = useState(0);

  const handleClick = (event) => {
    console.log("clicked bottom nav", event.target.value);
  };

  return (
    <BottomNavigation
      showLabels
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        borderTop: "1px solid rgba(0, 0, 0, 0.12)",
        boxShadow: "5px 10px rgba(0, 0, 0, 0.12)",
      }}
      value={value}
      onChange={(e) => handleClick(e)}
    >
      <BottomNavigationAction
        label="home"
        icon={<HomeIcon />}
        component={Link}
        to={"/"}
      />
      <BottomNavigationAction
        label="new meal"
        icon={<AddSharpIcon />}
        component={Link}
        to={"/new_meal"}
      />
    </BottomNavigation>
  );
}
