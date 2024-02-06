import {useNavigate} from "react-router-dom";

const User = ({user}) => {

    const {id, name, address: {street, city}} = user;

    const navigate= useNavigate();

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>
                address:
            <div>street: {street}</div>
            <div>city: {city}</div>
            </div>
            <button onClick={()=>navigate(`${id}`)}>Get posts</button>
        </div>
    );
};

export {User};