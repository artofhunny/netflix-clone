import { useEffect, useState } from "react";
import { options } from "../components/utils/constants";

const useRecommendationMovies = (movieId) => {
    const [recommendations, setRecommendations] = useState(null);

    const fetchDetails = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/recommendations?language=en-US&page=1", options);
        const jsonData = await data.json();

        // console.log(jsonData);
        setRecommendations(jsonData.results);
    }

    useEffect(
        () => {
            fetchDetails();
        }, 
        []
    );

    return recommendations;
}

export default useRecommendationMovies;