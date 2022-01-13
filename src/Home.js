import { Box } from "@mui/material";
import MealsList from "./MealsList";

export default function Home({ meals }) {
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
