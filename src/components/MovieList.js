import MovieCard from "./MovieCard";

const MovieList = ({movies, title}) => {

    // console.log(movies);
    if(movies === null) return;

    return (
        <div className="">
            <h1 className="text-2xl py-2 font-bold text-white" >{title}</h1>
            <div className="flex overflow-x-scroll gap-3 scroll-hidden">
                {
                    movies?.slice()?.reverse()?.map(movie => {
                        return <MovieCard img={movie.poster_path} />
                    })
                }
            </div>
        </div>
    )
}

export default MovieList;