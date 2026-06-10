export const BASE_URL = 'https://rickandmortyapi.com/api'

export const apiClient = async <T>(endpoint: string): Promise<T> => {
    const response = await fetch(`${BASE_URL}${endpoint}`)

    if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`)
    }

    return await response.json() as Promise<T>
}