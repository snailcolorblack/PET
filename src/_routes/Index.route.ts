import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'
import  HomePage  from '../pages/index/Index.tsx'

export const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: HomePage,
})