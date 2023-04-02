import type { Pokemon } from "./Pokemon"

export interface Action {
    type: "SET_POKEMONS" | "SET_FAVORITE",
    payload: Pokemon[] | { pokemonId: number }
}
