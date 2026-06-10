import {createRootRouteWithContext, Outlet} from "@tanstack/react-router";
import {Suspense} from "react";

export const Route = createRootRouteWithContext()({
    component: () => (
        <Suspense fallback={'Loading ...'}>
            <Outlet />
        </Suspense>
    ),
})