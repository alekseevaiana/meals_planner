import { Button, List, ListItem } from "@mui/material";

export default function IngridientsList({ ingridients, handleDelete, type }) {
  return (
    <List>
      {ingridients &&
        ingridients.map((ingridient, index) => {
          return (
            <ListItem key={index}>
              {ingridient}
              {/* {index !== ingridients.length - 1 ? ", " : ""} */}
              {type === "form" && (
                <Button
                  variant="contained"
                  sx={{ ml: 2 }}
                  onClick={() => handleDelete(index)}
                >
                  D
                </Button>
              )}
            </ListItem>
          );
        })}
    </List>
  );
}
