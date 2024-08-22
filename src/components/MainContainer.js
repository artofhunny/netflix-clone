import { useSelector } from "react-redux";
import TitleContainer from "./TitleContainer";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {

    const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
    // if(movies === null) return;
    if (!movies) return null;


    
    const { original_title, overview, id } = movies[Math.floor(Math.random() * movies.length)];
    // console.log(id);
    
    return (
        <section 
        className="overflow-x-hidden overflow-y-hidden"
        >
            
            <TitleContainer title={original_title} des={overview} />
            <VideoContainer vidId={id} />
            
        </section>
    );
}
export default MainContainer;