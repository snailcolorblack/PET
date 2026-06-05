import { createRootRouteWithContext } from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'
import App from '../App.tsx'

export interface RouterContext {
    queryClient: QueryClient
}

export const rootRoute = createRootRouteWithContext<RouterContext>()({
    component: App,
})