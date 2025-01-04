import Layout from "../layout/Layout";
import Home from "../view/home/Index";

const MainRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
  ],
};

export default MainRoutes;
