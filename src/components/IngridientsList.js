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
                "text-transform": "capitalize",
                border: 1,
                borderColor: "grey.400",
                borderRadius: 1,
                mb: 2,
                pb: "13px",
                pt: "13px",
              }}
            >
              {ingridient}
              {type === "form" && (
                <ClearIcon
                  sx={{ ml: "auto" }}
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
