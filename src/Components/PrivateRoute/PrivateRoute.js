import React from 'react';
import {Navigate } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const PrivateRoute = ({children}) => {
    console.log("children", children)
    const {user}= useFirebase();
    console.log("Private page user", user)
    return( user.displayName ? children : <Navigate to="/login"/>)
};

export default PrivateRoute;