
import {
  createBrowserRouter,
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
],{basename:"seiyaiwabuchi.github.io/my-react-boilerplate/"});

export default router;