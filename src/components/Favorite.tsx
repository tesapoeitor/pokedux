import estrella_blanca from "../assets/estrella_blanca.svg"
import estrella_amarilla from "../assets/estrella_amarilla.svg"

interface Props {
    onClick: () => void,
    isFavorite: boolean
}

const Favorite = ({ onClick, isFavorite }: Props) => {
    const icon = isFavorite ? estrella_amarilla : estrella_blanca

    return (
        <img onClick={onClick} src={icon} alt="star icon" className="favorite"/>
    )
}

export { Favorite }