import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from './firebaseInit';
import './SignUp.css';
const SignUp = () => {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [creatPassword, setCreatPassword]=useState('');
    const [error, setError]=useState('');
    const [createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate();

    // handeler

    const handelEmailBlur = e =>{
        setEmail(e.target.value)
    }
    const handelerPasswordBlur = e =>{
        setPassword(e.target.value);
    }
    const handleCreatPassword = e =>{
        setCreatPassword(e.target.value);
        if(password !== creatPassword){
            setError('Your two passwords did not match');
            return
        }
        if(password.length <6){
            setError('Password must be 6 characters or longer')
            return;
        }
    }
    
    if(user){
        navigate('/shop')
    }
    // formHandler

    const handleUserSignIn = e =>{
        e.preventDefault();
        createUserWithEmailAndPassword(email,password)
    }
    return (
        <div className='form-container'>
             <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handelEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handelerPasswordBlur} type="password" name="password" id=""  required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleCreatPassword} type="password" name="confirm-password" id="" />
                    </div>
                    
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    <input className='form-submit' type="submit" value="Sign Up"  required/>
                </form>
                <p>
                    Already Have an account? <Link className='form-link' to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;