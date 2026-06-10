import { apiClient } from './apiClient'
import type { Character } from '../_types/character.interface'
import type { CharactersResponse } from '../_types/api.interface'
import type {GetCharactersParams} from "../_types/api-getCharacterParams.interface.ts";


export const charactersApi = {
    getAll: (params: GetCharactersParams = {}): Promise<CharactersResponse> => {
        const query = new URLSearchParams()

        if (params.page)    query.set('page',    String(params.page))
        if (params.name)    query.set('name',    params.name)
        if (params.status)  query.set('status',  params.status)
        if (params.species) query.set('species', params.species)
        if (params.gender)  query.set('gender',  params.gender)

        const qs = query.toString()
        return apiClient<CharactersResponse>(`/character${qs ? `?${qs}` : ''}`)
    },

    getById: (id: number): Promise<Character> =>
        apiClient<Character>(`/character/${id}`),

    getByIds: (ids: number[]): Promise<Character[]> =>
        apiClient<Character[]>(`/character/${ids.join(',')}`),
}