import React from "react"

import favoriteStar from "../assets/icon-favorite-star.svg"
import "../styles/PokemonCard.css"

interface Props {
    name: string
}

const PokemonCard = ({ name }: Props) => {
    return (
        <article className="pokemon-card">
            <div className="pokemon-card-header">
                <h3 className="pokemoncard-title">{name}</h3>
                <img src={favoriteStar} alt="star icon" />
            </div>
            <img className="pokemon-card-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt="" />
            <p className="pokemon-card-description">fire, magic</p>
        </article>
    )
}

export { PokemonCard }