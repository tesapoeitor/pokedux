import { Searcher } from "./components/Searcher"
import { usePokeAPI } from "./hooks/usePokeAPI"
import { useSelector } from "react-redux"
import { PokemonsState } from "./types/PokemonsState"

function App() {
  usePokeAPI()
  const pokemons = useSelector((state: PokemonsState) => state.pokemons)

  return (
    <div className="App">
      <Searcher pokemons={pokemons}/>
      {/* {pokemons && <PokemonList pokemons={pokemons}/>} */}
    </div>
  )
}

export default App