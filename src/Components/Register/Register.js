import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Register.css";

const Register = () => {
    const { googleSignIn, emailAndPasswordSignIn, getUserEmail, getUserPassword } = useAuth();
    return (
        <div className="signup-container">
            <form action="/action_page.php" className="form-style">
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <label for="email"><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" onBlur={getUserEmail} required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" onBlur={getUserPassword} required />

                    <label for="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

                    <label>
                        <input type="checkbox" checked="checked" name="remember" className="checkbox-style" /> Remember me
                    </label>

                    <button onClick={emailAndPasswordSignIn} type="submit">Signup Now</button>
                    <p className="login-link">Already have an account? <Link to="/login">Login here</Link> </p>

                    <button onClick={googleSignIn} className="google-login-btn" type="submit">Login With google</button>

                </div>
            </form>
        </div>
    );
};

export default Register;