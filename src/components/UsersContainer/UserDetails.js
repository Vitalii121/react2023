import {useNavigate} from "react-router-dom";

const UserDetails = ({user}) => {

    const {id, name, username, email, address: {street, city}} = user;

    const navigate = useNavigate();

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>
                address:
                <div>street: {street}</div>
                <div>city: {city}</div>
            </div>
            <button onClick={() => navigate(`posts`)}>Get Posts</button>
        </div>
    );
};

export {UserDetails};