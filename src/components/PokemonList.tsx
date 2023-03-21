import React from "react"

import { PokemonCard } from "../components/PokemonCard"
import "../styles/PokemonList.css"
import { PokeAPI } from "../types/PokeAPI"

interface Props {
    pokemons: PokeAPI["results"]
}

const PokemonList= ({ pokemons }: Props) => {
    return (
        <div className="pokemon-list">
        {pokemons.map(pokemon => (
            <PokemonCard name={pokemon.name} key={pokemon.name}/>
        ))}
        </div>
    )
}

export { PokemonList }