
import React, { useState } from 'react';
import fetcher from '../../api/fetcher';

const DeleteProduct = ({ refetch, openModal, setOpenModal, deleteUrl }) => {
    console.log(deleteUrl)
    console.log(openModal)
    const handleDelete = async () => {
        console.log('click')
        
            const { data } = await fetcher.delete(`${deleteUrl}/${openModal}`)
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
                    <p class="py-4 p-0">If you click this button the product will b deleted</p>

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