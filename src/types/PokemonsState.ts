import type { PokeAPI } from "./PokeAPI"

export interface PokemonsState {
    pokemons: PokeAPI["results"]
}