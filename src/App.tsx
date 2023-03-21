import { Searcher } from "./components/Searcher"
import { PokemonList } from "./components/PokemonList"
import { usePokeAPI } from "./hooks/usePokeAPI"

function App() {
  const pokemons = usePokeAPI()

  return (
    <div className="App">
      <Searcher/>
      {pokemons && <PokemonList pokemons={pokemons}/>}
    </div>
  )
}

export default App