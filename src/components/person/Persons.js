import React from 'react';
import {simpsons} from "../../data/data";
import './Person.modul.css';
import {Person} from "./Person";

const Persons = () => {
    return (

        <div>
            {
                simpsons.map(simpson =><Person key={simpson.id} simpson={simpson}/> )
            }
        </div>
    );
};

export {Persons};