import { PokemonCard } from "../components/PokemonCard"
import { Pokemon } from "../types/Pokemon"
import "../styles/PokemonList.css"

interface Props {
    pokemons: Pokemon[]
}

const PokemonList= ({ pokemons }: Props) => {
    return (
        <div className="pokemon-list">
        {pokemons.map(pokemon => (
            <PokemonCard 
                name={pokemon.name} 
                image={pokemon.sprites.front_default}
                types={pokemon.types}
                key={pokemon.name}
                isFavorite={pokemon.isFavorite ? pokemon.isFavorite : false}
                id={pokemon.id}
            />
        ))}
        </div>
    )
}

export { PokemonList }