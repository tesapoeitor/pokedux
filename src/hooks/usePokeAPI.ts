import { useEffect } from "react"
import  axios from "axios"
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { setPokemons } from "../actions"
import type { PokeAPI } from "../types/PokeAPI"
import type { PokemonsState } from "../types/PokemonsState"
import { Pokemon } from "../types/Pokemon"

const getPokemonDetails = async (pokemon: {url: string}) => {
    const response = await axios.get<Pokemon>(pokemon.url)
    const data = response.data

    return data
}

const usePokeAPI = () => {
    const pokemons = useSelector((state: PokemonsState) => state.pokemons, shallowEqual)
    const dispatch = useDispatch()

    const API = "https://pokeapi.co/api/v2/pokemon?limit=151"

    const fetchData =async () => {
        const response = await axios.get<PokeAPI>(API)
        const data = response.data.results

        const pokemonsDetailed = await Promise.all(data.map((pokemon) => getPokemonDetails(pokemon)))

        dispatch(setPokemons(pokemonsDetailed))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return pokemons
}

export { usePokeAPI }