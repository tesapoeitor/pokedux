import React from "react"

import { Pokemon } from "../types/Pokemon"
import { PokemonCard } from "../components/PokemonCard"
import "../styles/PokemonList.css"

interface Props {
    pokemons: Pokemon[]
}

const PokemonList= () => {
    return (
        <div className="pokemon-list">
        {Pokemons.map(pokemon => (
            <PokemonCard/>
        ))}
        </div>
    )
}

const Pokemons = Array(10).fill("")

export { PokemonList }