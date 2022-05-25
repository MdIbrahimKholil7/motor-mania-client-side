
import React, { useState } from 'react';
import fetcher from '../../api/fetcher';

const DeleteProduct = ({refetch,openModal,setOpenModal}) => {
    const [load,setLoad]=useState(false)
    const handleDelete=async()=>{
        const {data}=await fetcher.delete(`delete-product/${openModal}`)
        console.log(data)
        refetch()
        setOpenModal(null)
    }   
    return (
        <div>
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-primary">Are you sure you want to delete</h3>
                    <p class="py-4 p-0">You've been selected those product for your shop</p>

                    <div class="modal-action">
                        <button onClick={handleDelete} className='btn btn-primary mt-[14px]'>yes</button>
                        <label for="delete-modal" class="btn bg-black text-white">No</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteProduct;