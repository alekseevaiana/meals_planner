import { Button, List, ListItem } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export default function IngridientsList({ ingridients, handleDelete, type }) {
  return (
    <List sx={{ pt: 2 }}>
      {ingridients &&
        ingridients.map((ingridient, index) => {
          return (
            <ListItem
              key={index}
              sx={{
                textTransform: "capitalize",
                // border: 1,
                // borderColor: "grey.400",
                borderRadius: 1,
                backgroundColor: "rgba(203, 240, 225, 0.3);",
                mb: 2,
                pb: "8px",
                pt: "8px",
              }}
            >
              {ingridient}
              {type === "form" && (
                <ClearIcon
                  sx={{ ml: "auto", cursor: "pointer" }}
                  onClick={() => handleDelete(index)}
                  color="action"
                />
              )}
            </ListItem>
          );
        })}
    </List>
  );
}
