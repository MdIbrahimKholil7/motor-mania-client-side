import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axiosPrivate from '../../api/axiosPrivate';
import DeleteProduct from './DeleteProduct';

const ManageProduct = () => {
    const [openModal,setOpenModal]=useState(null)
    const deleteUrl=`delete-service`
    const { loading, data, refetch } = useQuery('get-all-product', () => axiosPrivate.get('http://localhost:5000/get-all-product'))
    console.log(data)
    if (loading) {
        return loading
    }
    return (
        <div>
            <div class="overflow-x-auto px-3 py-12">
                <table class="table table-zebra w-full">

                    <thead>
                        <tr className='text-center'>
                            <th></th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            data?.data?.map(({ servicenName, quantity, img, _id }, index) => <tr
                                key={_id}
                                className='text-center'
                            >
                                <td>{index + 1}</td>
                                <td className='text-left '>{servicenName}</td>
                                <td><img className='mask mask-squircle w-12 h-12' src={img} alt={servicenName} /></td>
                                <td>{quantity}</td>
                                <td>
                                   
                                    <label onClick={()=>setOpenModal(_id)} for="delete-modal" className='btn btn-primary'>Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
               {
                   openModal &&  <DeleteProduct
                   refetch={refetch}
                   openModal={openModal}
                   setOpenModal={setOpenModal}
                   deleteUrl={deleteUrl}
                   />
               }
            </div>
        </div>
    );
};

export default ManageProduct;