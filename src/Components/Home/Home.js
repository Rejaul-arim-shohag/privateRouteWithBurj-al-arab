import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import Header from '../Header/Header';

const Home = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h1>This is Home</h1>
            {
                user.displayName
            }
        </div>
    );
};

export default Home;