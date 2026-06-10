import { useParams } from '@tanstack/react-router'

export default function CharacterPage() {
    const { id } = useParams({ from: '/character/$id' })

    return (
        <main>
            <h1>Character #{id}</h1>
        </main>
    )
}