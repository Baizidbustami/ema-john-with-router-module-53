import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../SignUp/firebaseInit';
import './Login.css';

const Login = () => {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate= useNavigate();
      const location = useLocation();
      const from = location.state.from.pathname || '/';

    // event handler
    const handlerEmailBlur = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e =>{
        setPassword(e.target.value)
    }
    if(user){
        navigate(from, {replace: true});
    }
    const handleOnCharch = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(email,password);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleOnCharch}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handlerEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    
                    <p style={{color:'red'}}>{error?.message}</p>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;