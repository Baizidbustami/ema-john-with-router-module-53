import {  } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../SignUp/firebaseInit';

const Shipment = () => {
    const [user]=useAuthState(auth)
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [address, setaddres]=useState('');
    const [phone, setPhone]=useState('');
    const [error, setError]=useState('');


    const handelNameBlur = e =>{
        setName(e.target.value)
    }
    const handeleraddresBlur = e =>{
        setaddres(e.target.value);
    }
    const handlerPhoneBlur = e =>{
        setPhone(e.target.value);
        const shipping = {name, email, address, phone};
        
    }

    const handleUserSignIn = e =>{
        e.preventDefault();
    }
    return (
        <div className='form-container'>

            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="text">Your Name</label>
                        <input onBlur={handelNameBlur} type="text" name="text" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input value={user?.email} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="text">Address</label>
                        <input onBlur={handeleraddresBlur} type="Text" name="password" id=""  required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone numbar">Phone Numbar</label>
                        <input onBlur={handlerPhoneBlur} type="text" name="confirm-password" id="" required/>
                    </div>
                    
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    <input className='form-submit' type="submit" value="Sign Up"  required/>
                </form>
            </div>
        </div>
    );
};

export default Shipment;