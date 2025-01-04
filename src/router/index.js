const { createBrowserRouter } = require("react-router");
const { default: MainRoutes } = require("./MainRoutes");

const router = createBrowserRouter([MainRoutes]);

export default router;
