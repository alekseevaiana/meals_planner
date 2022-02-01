import { Button, List, ListItem } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export default function IngridientsList({ ingridients, handleDelete, type }) {
  return (
    <List>
      {ingridients &&
        ingridients.map((ingridient, index) => {
          return (
            <ListItem key={index} sx={{ "text-transform": "capitalize" }}>
              {ingridient}
              {type === "form" && (
                <ClearIcon
                  sx={{ ml: 2 }}
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
