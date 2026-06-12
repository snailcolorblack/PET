import {Card, Spinner} from '@heroui/react'
import {useParams, Link} from '@tanstack/react-router'
import {useCharacterById} from "../_hooks/useCharacters.ts";
import {statusColor} from "../_utils/charStatus.ts";


export default function CharacterPage() {
    const {id} = useParams({from: '/character/$id'})
    const {data: character, isLoading: loading, error} = useCharacterById(id)

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Spinner/>
            </div>
        )
    }

    if (error || !character) {
        return (
            <div className="flex justify-center items-center min-h-screen text-red-500">
                {error?.message ?? 'Character not found'}
            </div>
        )
    }
    return (
        <main className="container mx-auto px-4 py-6 max-w-2xl">
            <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors mb-6 inline-block">
                ← Back
            </Link>

            <Card className="overflow-hidden">
                <img
                    src={character.image}
                    alt={character.name}
                    className="w-full object-cover max-h-72 rounded-xl"
                />

                <Card.Header className="flex flex-col gap-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <Card.Title className="text-2xl">{character.name}</Card.Title>
                        <span className={`text-sm font-medium ${statusColor[character.status]}`}>
                                {character.status}
                            </span>
                    </div>
                    <Card.Description>
                        {character.species} · {character.gender}
                        {character.type && ` · ${character.type}`}
                    </Card.Description>
                </Card.Header>

                <Card.Content className="flex flex-col gap-4">
                    <InfoRow label="LAST LOCATION" value={character.location.name}/>
                    <InfoRow label="ORIGON" value={character.origin.name}/>
                    <InfoRow label="EPISODES" value={`${character.episode.length} episodes`}/>
                </Card.Content>
            </Card>
        </main>
    )
}

function InfoRow({label, value}: { label: string; value: string }) {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-400 uppercase tracking-wide">{label}</span>
            <span className="text-sm font-medium">{value}</span>
        </div>
    )
}