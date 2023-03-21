import { useEffect, useState } from "react"
import  axios from "axios"
import type { PokeAPI } from "../types/PokeAPI"


const usePokeAPI = () => {
    const [pokemons, setPokemons] = useState<PokeAPI["results"]>()
    const API = "https://pokeapi.co/api/v2/pokemon?limit=151"

    const fetchData =async () => {
        const response = await axios.get<PokeAPI>(API)
        const data = response.data

        setPokemons(data.results)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return pokemons
}

export { usePokeAPI }