import React, { useState } from 'react';
import { login } from '../api/login';

interface LoginProps {
    updateLogin: (login: boolean) => void
}

function LoginForm(props: LoginProps) {

    const [user, setUser] = useState({ username: "", password: "" })

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
        try {
            e.preventDefault();
            if (!user.username || !user.password) {
                // show some error banner
                alert("Fill the form");
                return;
            }
            await login(user);
            props.updateLogin(true)
        }
        catch (e) {
            console.error(e);
        }
    }
    return (
        <React.Fragment>
            <div className="mt-5">
                <div className="col-md-6">
                    <h1>Finatech Solutions</h1>
                </div>
                <div className="col-md-6">
                    <form>
                        <div className="input-group mb-4">
                            <span className="input-group-text">Username</span>
                            <input type="text" className="form-control" name="username"
                                value={user.username} placeholder="Username" aria-label="User Name"
                                onChange={handleInput} aria-describedby="addon-wrapping" />
                        </div>
                        <div className="input-group mb-4">
                            <span className="input-group-text">Password</span>
                            <input type="password" className="form-control" name="password"
                                value={user.password} placeholder=" Password" aria-label="Password"
                                onChange={handleInput} aria-describedby="addon-wrapping" />
                        </div>

                        <input className="btn btn-primary" type="Login" value="Login"
                            onClick={handleSubmit} />


                    </form>
                </div>
            </div>
        </React.Fragment>
    )

}

export default LoginForm;