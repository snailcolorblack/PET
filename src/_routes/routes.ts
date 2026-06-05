import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routesTree.ts'
import type { QueryClient } from '@tanstack/react-query'

export const router = createRouter({
    routeTree,
    context: {} as { queryClient: QueryClient },
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
})