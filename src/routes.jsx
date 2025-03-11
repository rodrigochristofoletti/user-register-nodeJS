import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import ListUsers from "./pages/listUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users-list",
    element: <ListUsers />,
  },
]);

export default router
