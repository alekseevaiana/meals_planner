import { FormGroup, FormControlLabel, Checkbox } from "@mui/material/";

export default function CheckboxList({ ingridients }) {
  return (
    <>
      <FormGroup>
        {ingridients &&
          ingridients.map((ingridient, index) => {
            return (
              <FormControlLabel
                control={<Checkbox />}
                label={ingridient}
                key={index}
              />
            );
          })}
      </FormGroup>
    </>
  );
}
