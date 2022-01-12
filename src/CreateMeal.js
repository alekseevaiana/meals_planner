import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

export default function CreateMeal() {
  return (
    <>
      <Button variant="contained" color="secondary" component={Link} to={"/"}>
        Back home
      </Button>
      <Typography variant="h6">Add new meal</Typography>
    </>
  );
}
