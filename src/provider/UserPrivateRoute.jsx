import React, { useContext } from 'react';
import { AuthContext } from './Authprovider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../sherad/Loader';

const UserPrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    if(user)
    {
        return children
    }
    if(loading)
    {
        return <h3>gffdhgvjkghgjlj</h3>
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default UserPrivateRoute;