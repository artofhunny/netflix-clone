import { useSelector } from "react-redux";
import TitleContainer from "./TitleContainer";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {

    const movies = useSelector((store) => store.movies.nowPlayingMovies);
    if(movies === null) return;

    
    const { original_title, overview, id } = movies[5];
    // console.log(original_title, overview);
    
    return (
        <section 
        className="absolute top-0"
        >
            
            <TitleContainer title={original_title} des={overview} />
            <VideoContainer vidId={id} />
            
        </section>
    );
}
export default MainContainer;