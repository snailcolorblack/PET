import type {Character} from "../_types/character.interface.ts";

export const statusColor: Record<Character['status'], string> = {
    Alive: 'text-green-500',
    Dead: 'text-red-500',
    unknown: 'text-gray-400',
}