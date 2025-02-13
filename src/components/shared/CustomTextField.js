import React from "react";
import { TextField, InputAdornment } from "@mui/material";

const CustomTextField = ({
  label,
  type = "text",
  register,
  error,
  helperText,
  endAdornment,
  ...rest
}) => {
  return (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      margin="normal"
      type={type}
      {...register}
      error={!!error}
      helperText={helperText}
      InputProps={{
        endAdornment: endAdornment ? (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ) : null,
      }}
      {...rest}
    />
  );
};

export default CustomTextField;
