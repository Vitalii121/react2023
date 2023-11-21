import {useEffect, useState} from "react";
import {carService} from "../../services";

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data})=>{
            console.log(data);
        })
    }, []);

    return (
        <div>
            Cars
        </div>
    );
};

export {Cars};