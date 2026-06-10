import {useCharacters} from "../_hooks/useCharacters.ts";
import {useLayoutEffect} from "react";
import {Card, Link} from "@heroui/react";

export default function MainPage() {
    const {data: characters, isLoading: loading, error} = useCharacters();

    useLayoutEffect(() => {
        if (characters) {
            console.log('✅ Получены персонажи:', characters.results);
        }
    }, [characters]);


    return (
        <main className={'grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 container mx-auto px-2'}>
            {characters?.results && characters?.results.map(char => (
                <Link href={`/character/${char.id}`} className="block w-auto">
                    <Card className="flex flex-row gap-2 flex-wrap cursor-pointer max-[440px]:gap-4 shadow-[none]">
                        <img alt={char.name}
                             className="pointer-events-none aspect-square w-[100%] max-w-[360px] rounded-xl object-cover select-none flex-[1,360px] max-[440px]:max-w-[120px] "
                             loading="lazy"
                             src={char.image}
                        />
                        <Card.Header className="flex-[1,300px]">
                            <div className='flex flex-col gap-1'>
                                <Card.Title>{char.name}</Card.Title>
                                <Card.Description>{char.species} | {char.gender} | {char.status}</Card.Description>
                            </div>
                        </Card.Header>
                    </Card>
                </Link>
            ))}
        </main>
    )
}