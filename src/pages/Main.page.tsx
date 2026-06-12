import {useCharacters} from "../_hooks/useCharacters.ts";
import {Card, Link, Spinner} from "@heroui/react";
import {statusColor} from "../_utils/charStatus.ts";

export default function MainPage() {
    const {data: characters, isLoading: loading, error} = useCharacters();


    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Spinner />
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen text-red-500">
                {error.message}
            </div>
        )
    }


    return (
        <main className={'grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 container mx-auto px-2 py-5'}>
            {characters?.results && characters?.results.map(char => (
                <Link href={`/character/${char.id}`} className="block w-auto">
                    <Card className="flex flex-row overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                        <img
                            src={char.image}
                            alt={char.name}
                            className="pointer-events-none aspect-square w-[100%] max-w-[120px] rounded-xl object-cover select-none flex-[1,360px]"
                            loading="lazy"
                        />
                        <Card.Header className="flex flex-col justify-center gap-1 px-4">
                            <Card.Title>{char.name}</Card.Title>
                            <Card.Description>
                                {char.species} · {char.gender}
                            </Card.Description>
                            <span className={`text-sm font-medium ${statusColor[char.status]}`}>
                                {char.status}
                            </span>
                        </Card.Header>
                    </Card>
                </Link>
            ))}
        </main>
    )
}