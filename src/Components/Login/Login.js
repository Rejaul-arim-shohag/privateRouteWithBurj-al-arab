import React from 'react';
import initializeAuthentication from '../../Firebase/firebase.init';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'
initializeAuthentication();
const Login = () => {
    const {user, signInUsingGoogle, logout} = useFirebase();
    return (
        <div>
            {
                user.displayName ? <button  className="main-btn" onClick={logout}>SIGNOUT</button>: <button  className="main-btn" onClick={signInUsingGoogle}>GOOGLE SIGNIN</button>
            }
        </div>
    );
};

export default Login;