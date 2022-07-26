import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase_init';
import useAdmin from '../../hooks/useAdmin';
import Loading from './Loading';

const RequireUser = ({children}) => {
    const [user,loading,error]=useAuthState(auth)
    console.log(user)
    const [admin,setAdminLoading]=useAdmin(user)
    const location=useLocation()
    if(loading || setAdminLoading){
        return <Loading/>
    }
    if(!user || admin){
        signOut(auth)
        return <Navigate to='/login' state={{from:location}} replace/>
    }
    return children
};

export default RequireUser;