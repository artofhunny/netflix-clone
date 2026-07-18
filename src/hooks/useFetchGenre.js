import { useEffect, useState } from "react";
import { options } from "../components/utils/constants";
import { error } from "ajv/dist/vocabularies/applicator/dependencies";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../components/utils/firebase";
import { v4 as uuidv4 } from 'uuid';  // Import uuid for unique IDs

const useFetchGenre = (type) => {
    const [programs, setPrograms] = useState(null);

     // Use a consistent programId for overwriting the data
     const programId = 'mainProgramId'; // Fixed ID for the programs document

    useEffect(() => {
        if(type){
            fetchGenre().catch((err) => console.log(err.message));
        }
    }, [type]);

    const fetchGenre = async () => {

        const arr = [];

        for(let i = 0; i < 10; i++){
            const response = await fetch(`https://api.themoviedb.org/3/discover/${type}?with_genres=${type === "tv"? 10759 : 28}&page=${i}`, options);
            const data = await response.json();

            if (data && data.results) {
                data.results.forEach((program) => {
                    arr.push(program);
                });
            }
        }
        

        
        setPrograms(arr);
    };

    return programs;
}

export default useFetchGenre;