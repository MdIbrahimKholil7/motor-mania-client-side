import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import fetcher from '../../api/fetcher';
import auth from '../../firebase_init';
import Loading from '../Shared/Loading';

const MyOrder = () => {

    const [order, setOrder] = useState([])
    const [user] = useAuthState(auth)
    const { isLoading, error, data } = useQuery(['repoData',user], () => fetch(`http://localhost:5000/users-order-data?email=${user?.email}`)
        .then(res => res.json())
    )
    console.log(data)
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            
        </div>
    );
};

export default MyOrder;