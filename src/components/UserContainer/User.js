import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    const {id, name, userName, email} = user;

    const navigate = useNavigate();

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>userName: {userName}</div>
            <div>email: {email}</div>
            <button onClick={()=>navigate('posts',{state:id})}>get posts</button>
        </div>
    );
};

export {User};