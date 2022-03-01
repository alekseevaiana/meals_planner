import { FormGroup, FormControlLabel, Checkbox, Box } from "@mui/material/";
import { useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function CheckboxList({ ingridients, handleDelete }) {
  return (
    <>
      <FormGroup>
        {ingridients &&
          ingridients.map((ingridient, index) => {
            return (
              <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                <FormControlLabel
                  control={<Checkbox name={ingridient} />}
                  label={ingridient}
                  key={index}
                />
                <DeleteOutlineOutlinedIcon
                  sx={{ marginLeft: "auto" }}
                  onClick={() => handleDelete(ingridient)}
                />
              </Box>
            );
          })}
      </FormGroup>
    </>
  );
}
