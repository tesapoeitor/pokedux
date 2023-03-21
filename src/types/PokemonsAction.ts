import type { PokeAPI } from "./PokeAPI"

export interface Action {
    type: "SET_POKEMONS",
    payload: PokeAPI["results"]
}
