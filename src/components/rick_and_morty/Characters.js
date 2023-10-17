import React from 'react';
import {characters} from "../../data/data";
import {Character} from "./Character";

const Characters = () => {
    return (
        <div>
            {
                characters.map(character => <Character key={character.id} character={character}/>)
            }
        </div>
    );
};

export {Characters};