import React from 'react';

const Character = ({character}) => {
    let {id, name, gender, image, species, status} = character;
    return (
        <div>
            <div className="wrapper">
                <div>
                    <img src={image} alt=""/>
                </div>
                <div className='infoWrap'>
                    <h2>#{id}. Name: {name}. Gender: {gender}</h2>
                    <h3>Species: {species} Status: {status}</h3>
                </div>
            </div>
        </div>
    );
};

export {Character};