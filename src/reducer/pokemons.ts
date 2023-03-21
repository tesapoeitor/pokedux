import type { PokemonsState } from "../types/PokemonsState"
import type { Action } from "../types/PokemonsAction"

const initialState: PokemonsState = {
    pokemons: []
}


export const pokemonsReducer = (state = initialState, action: Action): PokemonsState => {
    switch (action.type) {
        case "SET_POKEMONS":
            return {
                ...state,
                pokemons: action.payload
            }
        default:
            return state
    }
}