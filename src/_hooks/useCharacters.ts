import { useQuery } from '@tanstack/react-query'
import type {GetCharactersParams} from "../_types/api-getCharacterParams.interface.ts";
import {charactersQuery} from "../_qieries/characters.query.ts";
import {charactersApi} from "../_api/characters.api.ts";


export const useCharacters = (params: GetCharactersParams = {}) => {
    return useQuery({
        queryKey: charactersQuery.list(params),
        queryFn: () => charactersApi.getAll(params),
    })
}

export const useCharacterById = (id: number) => {
    return useQuery({
        queryKey: charactersQuery.detail(id),
        queryFn: () => charactersApi.getById(id),
        enabled: !!id,
    })
}