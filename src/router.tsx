import { Box, Typography } from "@mui/material";
import { createBrowserRouter, createHashRouter, Link } from "react-router-dom";
import App from "./App";
import Floor from "./Floor";
import Readme from "./Readme";

function NotFound() {
  return (
    <Floor>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3">404 Not found.</Typography>
        <br />
        <Typography variant="body1">
          {`"${window.location.href.split("#").slice(1).join("")}"というパスは存在しません。`}
          <br />
          Reactアプリケーションは読み込まれており、動作しています。
        </Typography>
        <Link to="/index">Topページ</Link>
      </Box>
    </Floor>
  );
}

const router = createHashRouter(
  [
    {
      path: "/",
      children: [
        {
          path: "index",
          element: <App />,
        },
        {
          path: "readme",
          element: <Readme />,
        },
      ],
      errorElement: <NotFound />,
    },
  ],
  {
    basename: "/"
  }
);

export default router;