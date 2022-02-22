import { Box } from "@mui/material";

export default function IngridientsPreview({ ingridients }) {
  console.log("inside ingridients preview");
  return (
    <Box sx={{ pt: 2, display: "flex", flexWrap: "wrap" }}>
      {ingridients &&
        ingridients.map((ingridient, index) => {
          return (
            <Box
              key={index}
              sx={{
                textTransform: "capitalize",
                border: 1,
                borderColor: "grey.400",
                borderRadius: 1,
                p: "10px 13px",
                mb: 1,
                mr: 1,
              }}
            >
              {ingridient.name ?? "No name"}
            </Box>
          );
        })}
    </Box>
  );
}
