import {useEffect, useState} from "react";

import css from './Genres.module.css'
import {genresService} from "../../services";
import {Genre} from "./Genre";

const Genres = () => {

    const [genres, setGenres] = useState([]);


    useEffect(() => {
        genresService.getAll().then(({data: {genres}})=>setGenres(genres))
    }, []);

    console.log(genres)

    return (
        <div className={css.Genres}>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};