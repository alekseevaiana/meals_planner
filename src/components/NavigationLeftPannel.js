import { Box } from "@mui/material";

export default function NavigationLeftPannel() {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "60px",
        backgroundColor: "yellow",
        height: "100%",
      }}
    >
      <Box>Home</Box>
      <Box>Groceries</Box>
    </Box>
  );
}
