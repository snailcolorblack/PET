import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from '@tanstack/react-router'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {router} from './_routes/routes.ts'
import './index.css'


const queryClient = new QueryClient()
/* === Я НЕ СТАЛ ПИСАТЬ ДОП ОПЦИИ СЮДА === */

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} context={{queryClient}}/>
        </QueryClientProvider>
    </StrictMode>,
)