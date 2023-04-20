import React, { useContext } from 'react';
import { userContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(userContext);
    if(loading)
    {
    return <progress className="progress progress-primary w-56" value="10" max="100"></progress>
    }
    if (user) {
        return children
    }
    return (
       <Navigate to='/login' replace={true}></Navigate>
    );
};

export default PrivateRoute;