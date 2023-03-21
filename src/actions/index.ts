import type { PokeAPI } from "../types/PokeAPI"
import type { Action } from "../types/PokemonsAction"

export const setPokemons = (payload: PokeAPI["results"]): Action => ({
    type: "SET_POKEMONS",
    payload
})