import React, {useEffect, useState} from 'react';
import {launchService} from "../../../services/launchService";
import {Launch} from "../Launch/Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([]);


    useEffect(() => {
        launchService.getAll().then(({data}) => {
            const filter = data.filter(value => value.launch_year !== "2020");
            setLaunches(filter)
        })
    }, [])


    return (
        <div>
            {launches.map(launch => <Launch key={launch.launce_data_unix} launch={launch}/>)};
        </div>
    );
};

export {Launches};