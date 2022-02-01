import * as React from "react";
import { useState } from "react";

import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function Tags({ ingridients, onChange }) {
  return (
    <Stack sx={{ p: 2 }}>
      <Autocomplete
        multiple
        id="tags-filled"
        options={ingridients.map((option) => option)}
        freeSolo
        onChange={(event, newValue) => {
          onChange(newValue);
        }}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Search by ingridients"
          />
        )}
      />
    </Stack>
  );
}
