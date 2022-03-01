import { FormGroup, FormControlLabel, Checkbox } from "@mui/material/";
import { useState } from "react";

export default function CheckboxList({ ingridients }) {
  return (
    <>
      <FormGroup>
        {ingridients &&
          ingridients.map((ingridient, index) => {
            return (
              <FormControlLabel
                control={<Checkbox name={ingridient} />}
                label={ingridient}
                key={index}
              />
            );
          })}
      </FormGroup>
    </>
  );
}
