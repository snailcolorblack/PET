import { Outlet } from '@tanstack/react-router'

function App() {
    return (
        <>
            <header>header</header>
            <Outlet />
            <footer>footer</footer>
        </>
    )
}

export default App