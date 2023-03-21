import { useEffect } from "react"
import  axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { setPokemons } from "../actions"
import type { PokeAPI } from "../types/PokeAPI"
import type { PokemonsState } from "../types/PokemonsState"


const usePokeAPI = () => {
    const pokemons = useSelector((state: PokemonsState) => state.pokemons)
    const dispatch = useDispatch()

    const API = "https://pokeapi.co/api/v2/pokemon?limit=151"

    const fetchData =async () => {
        const response = await axios.get<PokeAPI>(API)
        const data = response.data

        dispatch(setPokemons(data.results))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return pokemons
}

export { usePokeAPI }