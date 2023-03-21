import { Searcher } from "./components/Searcher"
import { PokemonList } from "./components/PokemonList"
import { usePokeAPI } from "./hooks/usePokeAPI"
import { connect } from "react-redux"
import { setPokemons as setPokemonsAction } from "./actions"
import axios from "axios"
import { useEffect } from "react"
import type { PokeAPI } from "./types/PokeAPI"
import type { PokemonsState } from "./types/PokemonsState"
import type { Dispatch } from "redux"
import type { Action } from "./types/PokemonsAction"

interface Props {
  pokemons: PokeAPI["results"]
  setPokemons: (value: PokeAPI["results"]) => Action
}

function App({ pokemons, setPokemons }: Props) {
console.log("🚀 ~ file: App.tsx:19 ~ App ~ pokemons:", pokemons)

  const API = "https://pokeapi.co/api/v2/pokemon?limit=151"

  const fetchData =async () => {
      const response = await axios.get<PokeAPI>(API)
      const data = response.data

      setPokemons(data.results)
  }

  useEffect(() => {
      fetchData()
  }, [])

  return (
    <div className="App">
      <Searcher/>
      {pokemons && <PokemonList pokemons={pokemons}/>}
    </div>
  )
}

const mapStateToProps = (state: PokemonsState) => ({
  pokemons: state.pokemons
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setPokemons: (value: PokeAPI["results"]) => dispatch(setPokemonsAction(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)