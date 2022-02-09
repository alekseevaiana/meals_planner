import { FormGroup, FormControlLabel, Checkbox } from "@mui/material/";

export default function CheckboxList({ ingridients }) {
  return (
    <>
      <FormGroup>
        {ingridients &&
          ingridients.map((ingridient) => {
            return (
              <FormControlLabel
                control={<Checkbox />}
                label={ingridient.name}
                key={ingridient.id}
              />
            );
          })}
      </FormGroup>
    </>
  );
}
