import type { PokemonsState } from "../types/PokemonsState"
import type { Pokemon } from "../types/Pokemon"
import type { Action } from "../types/PokemonsAction"

const initialState: PokemonsState = {
    pokemons: []
}


export const pokemonsReducer = (state = initialState, action: Action): PokemonsState => {
    switch (action.type) {
        case "SET_POKEMONS":
            (action.payload as Pokemon[])
            return {
                ...state,
                pokemons: action.payload
            }
        case "SET_FAVORITE":
            (action.payload as { pokemonId: number })
            const newPokemonsList = [...state.pokemons]
            const pokemonIndex = newPokemonsList.findIndex(pokemon => pokemon.id === action.payload.pokemonId)
            if(pokemonIndex !== -1) {
                newPokemonsList[pokemonIndex].isFavorite = !newPokemonsList[pokemonIndex].isFavorite
                return {
                    ...state,
                    pokemons: newPokemonsList
                }
            }
            return {
                ...state,
            }
        default:
            return state
    }
}