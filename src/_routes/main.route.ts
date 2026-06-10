import { createRoute } from '@tanstack/react-router'
import { Route as rootRoute } from './__root'
import MainPage from '../pages/Main.page'

export const Route = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: MainPage,
})