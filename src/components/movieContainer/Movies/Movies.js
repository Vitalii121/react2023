import {useEffect, useState} from "react";
// import {useSearchParams} from "react-router-dom";

import {Movie} from "../Movie";
import {movieService} from "../../../services/movieService";

const Movies = () => {

    const [moviesRes, setMoviesRes] = useState({results: []})

    // const [query, setQuery] = useSearchParams({page:'1'})
    // const page =query.get('page')

    useEffect(() => {
        movieService.getAll()
            .then(({data: {results}}) => setMoviesRes({results}))
    }, []);
    console.log(moviesRes)

    return (
        <div>
            {moviesRes.results.map(movieRes => <Movie key={movieRes.id} movieRes={movieRes}/>)}

        </div>
    );
};

export {Movies};