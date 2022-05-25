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
import DeleteProduct from './DeleteProduct';
const MyOrder = () => {
    const [openModal, setOpenModal] = useState(null)
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const navigatePayment = useNavigate()
    const { isLoading, data,refetch } = useQuery(['repoData', user], () => fetch(`http://localhost:5000/users-order-data?email=${user?.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
    })
        .then(res => {
            if (res.status === 401 || res.status === 401 || res.statusText === 'Forbidden' || res.statusText === 'unAuthorized access') {
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
        <div className='mx-4 mt-14 '>
            <div class="">
                <table class="table w-full">
                    <thead>
                        <tr className='text-center'>
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
                            data?.map(({ name, _id, productName, quantitys, total, paid, img, transactionId }, index) => <tr
                                key={_id}
                                className='text-center'
                            >
                                <td>{index + 1}</td>
                                <td className='td'>{name}</td>
                                <td>{productName}</td>
                                <td><img className='w-17 object-cover' src={img} alt={productName} /></td>
                                <td>{quantitys}</td>
                                <td>{!paid ? <button onClick={() => navigatePayment(`/dashboard/payment/${_id}`)} className='btn btn-black bg-[#000] text-white'>Pay</button> : <span className='text-green-600 flex '><CheckIcon
                                    className='w-5 text-green-600'
                                />Paid</span>}</td>
                                <td>{!paid && <label onClick={()=>setOpenModal(_id)} for="delete-modal" className='btn btn-primary'>Cancel</label>}
                                
                                    <small className='text-green-500 text-xs'>
                                        {paid && 'TransactionId'}
                                        <br />
                                        {paid && transactionId}
                                    </small>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
                {
                    openModal && <DeleteProduct
                        setOpenModal={setOpenModal}
                        openModal={openModal}
                        refetch={refetch}
                    />
                }
            </div>
        </div>
    );
};

export default MyOrder;