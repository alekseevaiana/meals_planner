import { List, ListItem } from "@mui/material";

export default function IngridientsList({ ingridients }) {
  return (
    <List>
      {ingridients &&
        ingridients.map((ingridient, index) => {
          return (
            <ListItem key={index}>
              {ingridient}
              {index !== ingridients.length - 1 ? ", " : ""}
            </ListItem>
          );
        })}
    </List>
  );
}
