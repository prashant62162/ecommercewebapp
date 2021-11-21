import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import './Login.css';

function Login() {
    const history = useHistory()
    const [registered, setRegistered] = useState(true);
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
    const modalChangeHandler = e => {
        e.preventDefault();
        setRegistered(registered => !registered);
    }
    return (
        <div className="login">
            <NavLink to="/">
                <img className="login__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="" />
            </NavLink>
            <div className="login__container">
                {registered ? <h1>Sign In</h1> : <h1>Register</h1>}
                {registered ? <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={signIn} className="loginSignin__button">Sign-in</button>
                    <p>By signing in you agree to the terms and condition of this website.</p>
                    <br />
                    <h5 style={{ textAlign: 'center' }}>Not yet Registered?</h5>
                    <button onClick={modalChangeHandler} className="loginRegistration__button">Create your Account </button>
                </form> :
                    <form action="">
                        <h5>E-mail</h5>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                        <h5>Password</h5>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <button onClick={register} className="loginSignin__button">Submit</button>
                        <p>By registering you agree to the terms and condition of this website.</p>
                        <br />
                        <h5 style={{ textAlign: 'center' }}>Already Registered?</h5>
                        <button onClick={modalChangeHandler} className="loginRegistration__button">Sign In </button>
                    </form>}
            </div>
        </div>
    )
}

export default Login
