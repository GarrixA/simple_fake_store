import { createBrowserRouter } from "react-router-dom";
import { protectedRoutes } from "./routes";
import App from "../App";

const finalRoutes = protectedRoutes.map((route) => {
  return {
    ...route,
    element: <App>{route.element}</App>,
  };
});

const router = createBrowserRouter(finalRoutes);

export default router;
