// import { useEffect, useState } from "react";
// import { options } from "./utils/constants" 
import { useSelector } from "react-redux";
// import { addVideoTrailer } from "./utils/moviesSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoContainer = ({vidId}) => {

    // const [trailorId, setTrailorId] = useState(null);
    useMovieTrailer(vidId);

    const trailor = useSelector((store) => store.movies.videoTrailer);
    // console.log(trailor?.key);

    return !trailor ? <h1 className="relative">Loading...</h1> : (
        <div className=" lg:m-auto">
            <iframe
            // width="560" 
            // height="315" 
            className="w-full h-[60vh] sm:w-screen sm:aspect-video sm:h-auto lg:w-screen lg:aspect-video lg:h-auto -mt-5"
            src={"https://www.youtube.com/embed/" + trailor?.key + "?&autoplay=1&mute=1&loop=1&autopause=0"}
            title="YouTube video player" 
            // frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
            >

            </iframe>
        </div>
    );
}

export default VideoContainer;