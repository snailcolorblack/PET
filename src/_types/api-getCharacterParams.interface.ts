export interface GetCharactersParams {
    page?: number
    name?: string
    status?: 'alive' | 'dead' | 'unknown'
    species?: string
    gender?: 'female' | 'male' | 'genderless' | 'unknown'
}