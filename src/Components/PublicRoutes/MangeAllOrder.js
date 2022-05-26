import React from 'react';
import { useQuery } from 'react-query';
import axiosPrivate from '../../api/axiosPrivate';

const MangeAllOrder = () => {
    const { loading, data, refetch } = useQuery('get-all-paid', () => axiosPrivate.get('http://localhost:5000/get-all-users-order'))
    console.log(data)
    if (loading) {
        return loading
    }
    return (
        <div>
            
        </div>
    );
};

export default MangeAllOrder;