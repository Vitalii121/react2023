import {characters} from "../../data/data";
import React from 'react';

const Character = () => {
    return (
        <div>
            {
                characters.map(character => (
                    <div className="wrapper">
                        <div>
                            <img src={character.image} alt=""/>
                        </div>
                        <div className='infoWrap'>
                            <h2>#{character.id}. Name: {character.name}. Gender: {character.gender}</h2>
                            <h3>Species: {character.species}  Status: {character.status}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export {Character};