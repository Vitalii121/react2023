import React from 'react';
import './Person.modul.css';

const Person = ({simpson}) => {
    const {photo, name,surname, age, info} =simpson;
    return (

        <div>

                    <div className="wrapper">
                        <div>
                            <img src={photo} alt=""/>
                        </div>
                        <div className='infoWrap'>
                            <h2>{name} {surname}. Age: {age}</h2>
                            <p>{info}</p>
                        </div>
                    </div>

        </div>
    );
};

export {Person};