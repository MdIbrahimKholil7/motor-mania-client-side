import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axiosPrivate from '../../api/axiosPrivate';
import AdminTable from './AdminTable';

const MakeAdmin = () => {
    const { loading, data, refetch } = useQuery('get-all-user', () => axiosPrivate.get('http://localhost:5000/get-all-user'))
    if (loading) {
        return loading
    }
    return (
        <div>
            <div className='px-4'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                    
                        <thead>
                            <tr className='text-center'>
                                <th>
                                    
                                </th>
                                <th>Image</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                      
                            {
                                data?.data?.map((elem,index)=><AdminTable
                                key={elem._id}
                                userData={elem}
                                index={index}
                                refetch={refetch}
                                />)
                            }
                           
                        </tbody>
                       

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;