import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import MealForm from "./MealForm";

export default function EditMeal() {
  const params = useParams();

  return (
    <>
      {console.log("params =>", params)}
      <Typography>Edit meal</Typography>
      <MealForm />
    </>
  );
}
