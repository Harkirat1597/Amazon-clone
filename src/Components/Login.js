import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ updateLoginFlag }) => {
    const userRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
        updateLoginFlag(true);
        
        return function cleanup() {
            updateLoginFlag(false);
        };
    }, []);

    const handleSubmitLogIn = (e) => {
        e.preventDefault();
    }

    return (
        <div className='login-container'>
            
            <Link to='/'>
                <img className='amazon-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png" alt=""></img>
            </Link>

            <div className='login-form-container'>
                <div className='login-form'>
                    <h1>Sign in</h1>
                    <form onSubmit={handleSubmitLogIn}> 
                        <strong>E-mail</strong>
                        <input ref={userRef} type='email' required/>
                        <strong>Password</strong>
                        <input ref={passwordRef} type='password' required/>
                        <button type='submit'>Sign In</button>
                    </form>
                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                    <p>Create you account as it a front end only demo application</p>
                </div>

                <div  className="mc-2" style={{fontSize: "10px"}}>Return to Log in?</div>

                <Link to='/signup'>
                    <button className="login-form-redirect-btn mc-2" >Create your Amazon account</button>
                </Link>
            </div>
        </div>
    );
}

export default Login;