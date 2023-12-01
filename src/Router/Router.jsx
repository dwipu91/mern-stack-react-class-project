import { createBrowserRouter } from "react-router-dom";

import privetRoute from "./priverRoute";
import publicRoute from "./publicRoute";


const router = createBrowserRouter([ ...publicRoute, ...privetRoute,])

export default router;


