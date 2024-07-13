import { POSTER_URL } from "./utils/constants";

const MovieCard = ({img}) => {
    return(
        <div>
            <img className="w-36 min-w-36 rounded" src={POSTER_URL + img} alt="" />
        </div>
    );
}

export default MovieCard;