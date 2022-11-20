import { Box, Typography } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App";
import Floor from "./Floor";
import Readme from "./Readme";

function NotFound() {
  return (
  <Floor>
    <Box>
      <Typography variant="h1">
        404 NotFound.
      </Typography>
      <br />
      <Typography variant="body1">
        {window.location.pathname}
      </Typography>
    </Box>
  </Floor>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: "/readme",
    element: <Readme />
  }
]);

export default router;