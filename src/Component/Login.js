import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import './Login.css';

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth =>
                history.push('/'))
            .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <NavLink to="/">
                <img className="login__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="" />
            </NavLink>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={signIn} className="loginSignin__button">Sign-in</button>
                    <p>By signing in you agree to the terms and condition of this website.</p>
                    <button onClick={register} className="loginRegistration__button">Create Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
