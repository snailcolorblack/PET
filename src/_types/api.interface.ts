import type { Character } from './character.interface'

export interface ApiInfo {
    count: number
    pages: number
    next: string | null
    prev: string | null
}

export interface CharactersResponse {
    info: ApiInfo
    results: Character[]
}