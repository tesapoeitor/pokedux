import { Favorite } from "./Favorite"
import "../styles/PokemonCard.css"
import { Pokemon } from "../types/Pokemon"
import { useDispatch } from "react-redux"
import { setFavorite } from "../actions"

interface Props {
    name: string,
    image: string,
    types: Pokemon["types"],
    isFavorite: boolean,
    id: number
}

const PokemonCard = ({ name, image, types, isFavorite, id }: Props) => {
    const typesString = types.map(type => type.type.name).join(", ")
    const dispatch = useDispatch()

    const handleFavorite = () => {
        dispatch(setFavorite({ pokemonId: id }))
    }

    return (
        <article className="pokemon-card">
            <div className="pokemon-card-header">
                <h3 className="pokemoncard-title">{name}</h3>
                <Favorite onClick={handleFavorite} isFavorite={isFavorite}/>
            </div>
            <img className="pokemon-card-image" src={image} alt={name} />
            <span className="pokemon-card-abilities">
                {typesString}
            </span>
        </article>
    )
}

export { PokemonCard }