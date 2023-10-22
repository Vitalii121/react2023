import React from 'react';
import './Launch.modul.css';

const Launch = ({launch}) => {
    const {mission_name,launch_year, links:{mission_patch}}=launch;
    
    
    return (
        <div>
            <div className="wrap">
            <img src={mission_patch} alt={mission_name}/>
            <h1>mission name: {mission_name} <br/> launch year: {launch_year} </h1>
            </div>
        </div>
    );
};

export {Launch};