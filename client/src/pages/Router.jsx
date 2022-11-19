import { useRoutes } from "react-router-dom";
import Homepage from "./Homepage";

const Router = () => {
    const routes = [{ path: "/", element: <Homepage /> }];

    const router = useRoutes(routes);

    return router;
};

export default Router;
