import React from 'react';
import {simpsons} from "../../data/data";
import './Person.modul.css';

const Person = () => {
    return (

        <div>
            {
                simpsons.map(simpson => (
                    <div className="wrapper">
                        <div>
                            <img src={simpson.photo} alt=""/>
                        </div>
                        <div className='infoWrap'>
                            <h2>{simpson.name} {simpson.surname}. Age: {simpson.age}</h2>
                            <p>{simpson.info}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export {Person};