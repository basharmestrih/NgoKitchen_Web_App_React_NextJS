import { Fragment } from "react";
import { CircularProgress } from "@mui/material";

export function LoadingSpinner({ size = 64 }) {
  return (
    <Fragment>
      <CircularProgress
        size={size}
        thickness={4}
        sx={{ color: "#000000" }}
      />
    </Fragment>
  );
}
