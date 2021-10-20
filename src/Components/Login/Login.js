import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
import useAuth from './../../hooks/useAuth';

const Login = () => {
    const { getUserEmail, getUserPassword, EmailAndPasswordSignIn, googleSignIn } = useAuth();
    return (
        <div className="login-container">
            <form action="/action_page.php" method="post">
                <div className="imgcontainer">
                    <img src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg" alt="Avatar" className="avatar" />
                </div>

                <div className="l-container">
                    <label for="email"><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" onBlur={getUserEmail} required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" onBlur={getUserPassword} required />

                    <button type="submit" onClick={EmailAndPasswordSignIn}>Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                </div>

                <div className="container">
                    <p className="signup-link">Dont Have Account? <Link to="/register">Create an account</Link></p>
                    <p>or</p>
                    <button onClick={googleSignIn} className="google-login-btn" type="submit">Login With google</button>
                </div>

            </form>
        </div>
    );
};

export default Login;