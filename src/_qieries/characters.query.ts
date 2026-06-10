import type {GetCharactersParams} from "../_types/api-getCharacterParams.interface.ts";

export const charactersQuery = {
    all: ['characters'],
    // ======= Characters All =======
    lists: () => [...charactersQuery.all, 'list'],
    list: (params: GetCharactersParams) => [...charactersQuery.lists(), params],
    // ======= Characters Some =======
    details: () => [...charactersQuery.all, 'detail'],
    detail: (id: number) => [...charactersQuery.details(), id],
}