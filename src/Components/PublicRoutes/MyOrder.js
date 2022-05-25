import { CheckIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import fetcher from '../../api/fetcher';
import auth from '../../firebase_init';
import Loading from '../Shared/Loading';
import axiosPrivate from '../../api/axiosPrivate'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const MyOrder = () => {

    const [user] = useAuthState(auth)
    const navigate=useNavigate()
    const navigatePayment=useNavigate()
    const { isLoading, data } = useQuery(['repoData', user], () => fetch(`http://localhost:5000/users-order-data?email=${user?.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
    })
        .then(res => {
            if(res.status === 401 || res.status === 401 || res.statusText === 'Forbidden' ||  res.statusText === 'unAuthorized access'){
                signOut(auth)
                navigate('/login')
            }
            console.log(res.status)
            return res.json()
        })
    )

    if (isLoading) {
        return <Loading />
    }
    console.log(data)
    return (
        <div className='mx-4'>
            <div class="">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(({ name,_id, productName, quantity, total, paid, img }, index) => <tr
                            key={_id}
                            >
                                <td>{index + 1}</td>
                                <td className='td'>{name}</td>
                                <td>{productName}</td>
                                <td><img className='w-17 object-cover' src={img} alt={productName} /></td>
                                <td>{quantity}</td>
                                <td>{!paid ? <button onClick={()=>navigatePayment(`/dashboard/payment/${_id}`)} className='btn btn-black bg-[#000] text-white'>Pay</button> : <span className='text-green-600'><CheckIcon
                                    className='w-5 text-green-600 mr-2'
                                />Paid</span>}</td>
                                <td>{!paid && <button className='btn btn-primary'>Cancel</button>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;