import { Box, BottomNavigation } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import { meals } from "./data.js";
import MealsList from "./MealsList";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          p: 2,
          mb: 10,
          height: "100vh",
        }}
      >
        <MealsList meals={meals} />
      </Box>
    </>
  );
}
