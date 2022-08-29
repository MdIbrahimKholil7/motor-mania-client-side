import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import axiosPrivate from '../../api/axiosPrivate';
import users from '../../assets/images/user.png'
import auth from '../../firebase_init';
import useAdmin from '../../hooks/useAdmin';
import AdminLoading from '../Shared/AdminLoading';
import Loading from '../Shared/Loading';

const AdminTable = ({ userData, index, refetch }) => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    const { email, imgUrl, name, role, _id } = userData
    const [loading,setLoading]=useState(false)
    if(loading){
        console.log('click')
        return <AdminLoading/>
    }
    const makeAdmin = async () => {
       if(admin){
       await axiosPrivate.patch(`https://secret-bayou-77535.herokuapp.com/make-admin/${_id}`)
       }
        refetch()
    }
    const handleDelete=async()=>{
        if(admin){
            setLoading(true)
            const {data}=await axiosPrivate.delete(`https://secret-bayou-77535.herokuapp.com/delete-admin/${_id}`)
            setLoading(false)
            // console.log(data)
           }
    }
    return (
        <>
            <tr className='text-center relative'>
                <td>{index + 1}</td>
                <td>
                    <div className="flex items-center justify-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12 mx-auto">
                                <img src={imgUrl ? imgUrl : users} alt="Avatar" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span className="badge badge-ghost badge-sm">{email}</span>
                </td>
                <td>
                    {
                        role === 'admin' ? <button className='btn-xs btn bg-black text-white'>Admin</button> : <button onClick={makeAdmin} className='btn-xs bg-black btn text-white'>Make Admin</button>
                    }
                </td>
                <th>
                    <button onClick={handleDelete} className="btn-xs btn btn-primary">Delete</button>
                </th>
            </tr>

        </>
    );
};

export default AdminTable;