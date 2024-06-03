import Counter from "../components/Counter";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Products from "../pages/Products";
import Register from "../pages/Register";
import SingleProduct from "../pages/SingleProduct";
import AuthGaurd from "./AuthGaurd";

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
    path: "/redux",
    element: < Counter/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    layout: "protected",
  },
  {
    path: "*",
    element: <NotFound />,
  }
];

const protectedRoutes = routes.map((route) => {
  if (route.layout) {
    return { ...route, element: <AuthGaurd>{route.element}</AuthGaurd> };
  } else {
    return route;
  }
});

export { protectedRoutes };
