import { createSlice } from '@reduxjs/toolkit'
import type { PokemonsState } from "../types/PokemonsState"

const initialState: PokemonsState = {
    pokemons: [],
}

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers:{
        setPokemons: (state, action) => {
            state.pokemons = action.payload
        },
        setSearchedPokemons: (state, action) => {
            state.pokemons = action.payload
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
                return pokemon.id === action.payload.pokemonId;
            });
    
            if(currentPokemonIndex >= 0) {
                const isFavorite = state.pokemons[currentPokemonIndex].isFavorite;
    
            state.pokemons[currentPokemonIndex].isFavorite = !isFavorite;
            }
        }
    }
})

export const { setPokemons, setSearchedPokemons, setFavorite } = dataSlice.actions
export default dataSlice.reducer