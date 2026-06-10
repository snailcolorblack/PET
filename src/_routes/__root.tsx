import {createRootRouteWithContext, Outlet} from "@tanstack/react-router";
import {Suspense} from "react";
import { Spinner } from '@heroui/react';

export const Route = createRootRouteWithContext()({
    component: () => (
        <Suspense fallback={<><Spinner size={'xl'}/></>}>
            <Outlet />
        </Suspense>
    ),
})