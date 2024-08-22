import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

    const movie = useSelector((store) => store.movies.nowPlayingMovies);
    // console.log(movies[0].poster_path);
    const popular = useSelector((store) => store.movies.popularMovies);
    const upcoming = useSelector((store) => store.movies.upcomingMovies);
    const topRated = useSelector((store) => store.movies.topRated);
    // console.log(popular);
    return (
        <section className="bg-black" >
            
            <div className="lg:mx-20 sm:mx-16 mx-2 z-50 relative -mt-8 lg:-mt-56 sm:-mt-48 flex flex-col gap-2 sm:gap-7 lg:gap-10">
                <MovieList movies={movie} title={"Now Playing Movies"} />
                <MovieList movies={topRated} title={"Top Rated Movies"} />
                <MovieList movies={popular} title={"Popular Movies"} />
                <MovieList movies={upcoming} title={"Upcoming Movies"} />
            </div>
            
        </section>
    );
}
export default SecondaryContainer;