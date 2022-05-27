import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useQuery } from 'react-query';
import axiosPrivate from '../../api/axiosPrivate';
import fetcher from '../../api/fetcher';
import DeleteProduct from './DeleteProduct';

const ManageProduct = () => {
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(5)
    const [openModal, setOpenModal] = useState(null)
    const deleteUrl = `delete-service`
    const { loading, data, refetch } = useQuery('get-all-product', () => axiosPrivate.get(`http://localhost:5000/get-all-product?page=${page}&size=${size}`))
    useEffect(()=>{
        (async()=>{
            const {data}=await fetcher.get(`get-all-product-count`)
            const length=Math.ceil(data.result/5)
            console.log(length)
            setCount(length)
        })()
        },[])
    console.log(data)
    if (loading) {
        return loading
    }
    
    const handlePageClick = data => {
        setPage(data.selected)
    }
    return (
        <div className='bg-base-300'>
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

                                    <label onClick={() => setOpenModal(_id)} for="delete-modal" className='btn btn-primary'>Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
                {
                    openModal && <DeleteProduct
                        refetch={refetch}
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        deleteUrl={deleteUrl}
                    />
                }

                <div className='flex justify-center items-center mb-5'>
                    <div className='w-[100%]  flex items-center justify-center'>
                        <ReactPaginate
                            previousLabel={'Prev'}
                            nextLabel={'Next'}
                            breakLabel={'...'}
                            pageCount={count}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={2}
                            onPageChange={handlePageClick}
                            containerClassName={'paginateContainer'}
                            pageClassName={'page-btn'}
                            previousClassName={'previous'}
                            previousLinkClassName={'link-btn'}
                            pageLinkClassName={'link-btn'}
                            nextClassName={'previous'}
                            breakClassName={'page-btn'}
                            breakLinkClassName={'link-btn'}
                            nextLinkClassName={'link-btn'}
                            activeClassName={'active-btn'}
                        />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ManageProduct;