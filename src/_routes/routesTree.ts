import {rootRoute} from "./__root.tsx";
import {indexRoute} from "./Index.route.ts";

export const routeTree = rootRoute.addChildren([
    indexRoute
])