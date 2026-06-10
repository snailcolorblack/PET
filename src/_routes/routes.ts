import { createRouter } from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'
import { Route as rootRoute } from './__root'
import { Route as mainPageRoute } from './main.route'
import { Route as characterPageRoute } from './character.route'

const routeTree = rootRoute.addChildren([
    mainPageRoute,
    characterPageRoute,
])

export const router = createRouter({
    routeTree,
    context: {} as { queryClient: QueryClient },
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
})