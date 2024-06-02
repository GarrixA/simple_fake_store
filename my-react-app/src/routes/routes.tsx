import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Products from "../pages/Products";
import Register from "../pages/Register";
import SingleProduct from "../pages/SingleProduct";
import AuthGaurd from "./AuthGaurd";
import ServerError from "../pages/ServerError";
import Forbidden from "../pages/Forbidden";
import BadRequest from "../pages/BadRequest";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <SingleProduct />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    layout: "protected",
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/server-error",
    element: <ServerError />,
  },
  {
    path: "/forbidden",
    element: <Forbidden />,
  },
  {
    path: "/bad-request",
    element: <BadRequest />,
  },
];

const protectedRoutes = routes.map((route) => {
  if (route.layout) {
    return { ...route, element: <AuthGaurd>{route.element}</AuthGaurd> };
  } else {
    return route;
  }
});

export { protectedRoutes };
