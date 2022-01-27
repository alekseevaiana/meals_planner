import * as React from "react";
import { useState } from "react";

import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function Tags({ ingridients, onChange }) {
  return (
    <Stack
    // spacing={3} sx={{ width: 500 }}
    >
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
            variant="filled"
            label="Search by ingridients"
            placeholder="Search by ingridients"
          />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
];
