import { ChangeEvent, ReactNode, useState, useEffect } from "react"
import iconSearch from "../assets/icon-search.svg"
import logo from "../assets/logo.svg"
import "../styles/Searcher.css"
import { PokemonList } from "../components/PokemonList"
import { Pokemon } from "../types/Pokemon"
import { useSelector } from "react-redux"
import { PokemonsState } from "../types/PokemonsState"

interface Props {
    pokemons: Pokemon[]
}

const Searcher = ({ pokemons }: Props) => {
    const pokemonsList = useSelector((state: PokemonsState) => state.pokemons)
    const [searchedPokemons, setSearchedPokemons] = useState([] as Pokemon[])
    const [showAllPokemons, setShowAllPokemons] = useState(true)

    useEffect(() => {
        setSearchedPokemons(pokemonsList)
    }, [pokemonsList])
    
    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value
        const pokemonsFiltered = pokemonsList.filter(pokemon => pokemon.name.includes(query))

        if (pokemonsFiltered.length > 0) {
            setSearchedPokemons(pokemonsFiltered)
            setShowAllPokemons(false)
        } else {
            setSearchedPokemons([])
            setShowAllPokemons(false)
        }
    }

    return (
        <>
            <img className='logo' src={logo} alt="logo pokedux"/>
            <form className='searcher'>
                <input type="text" placeholder='Buscar ...' onChange={handleSearch}/>
                <button type='button'>
                    <img src={iconSearch} alt="icon search" />
                </button>
            </form>
            {showAllPokemons && <PokemonList pokemons={pokemonsList}/>}
            {!showAllPokemons && searchedPokemons.length > 0 && <PokemonList pokemons={searchedPokemons}/>}
            {!showAllPokemons && searchedPokemons.length === 0 && <h2 style={{ textAlign: 'center', marginTop: '30px' }}>No se encontraron resultados</h2>}
        </>
    )
}

export { Searcher }
