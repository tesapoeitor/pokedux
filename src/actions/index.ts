import { Dispatch } from "redux"
import type { Pokemon } from "../types/Pokemon"
import type { Action } from "../types/PokemonsAction"

export const setPokemons = (payload: Pokemon[]): Action => ({
    type: "SET_POKEMONS",
    payload
})

export const setFavorite = (payload: { pokemonId: number}): Action => ({
    type: "SET_FAVORITE",
    payload
})