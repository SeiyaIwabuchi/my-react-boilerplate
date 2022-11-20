import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App";
import Readme from "./Readme";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/readme",
    element: <Readme />
  }
]);

export default router;