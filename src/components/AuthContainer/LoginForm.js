import {useForm} from "react-hook-form";
import {useState} from "react";

import {authService} from "../../services";

const LoginForm = () => {
    const [serverError, setServerError] = useState(null);

    const {register, handleSubmit} = useForm();


    const login = async (user) => {
        try {
            const {data} = await authService.login(user);
            console.log(data)
            setServerError(null)
        } catch (e) {
            setServerError(e.response.data)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(login)}>
                {serverError && <div>User name or password incorrect</div>}
                <div>username: <input type="text"{...register('username')}/></div>
                <div>username: <input type="text"{...register('password')}/></div>
                <button>Login</button>
            </form>
        </div>
    );
};

export {LoginForm};