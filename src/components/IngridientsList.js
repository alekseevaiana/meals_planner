import { List, ListItem } from "@mui/material";

export default function IngridientsList({ meal }) {
  return (
    <List>
      {meal.ingridients.map((ingridient, index) => {
        return (
          <ListItem key={index}>
            {ingridient}
            {index !== meal.ingridients.length - 1 ? ", " : ""}
          </ListItem>
        );
      })}
    </List>
  );
}
