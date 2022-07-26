import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useQuery } from 'react-query';
import axiosPrivate from '../../api/axiosPrivate';
import fetcher from '../../api/fetcher';
import DeleteProduct from './DeleteProduct';
import Loading from '../Shared/Loading'
const MangeAllOrder = () => {
    const [openModal, setOpenModal] = useState(null)
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(5)
  
    const { loading, data, refetch } = useQuery(['get-all-paid',page,size], () => axiosPrivate.get(`https://secret-bayou-77535.herokuapp.com/get-all-users-order?page=${page}&size=${size}`)
    /* .then(res=>{
        setLoading(false)
    }) */
    )

    console.log(data)
    console.log(loading)
    const deleteUrl = `delete-userOrder`
    useEffect(()=>{
    (async()=>{
        const {data}=await fetcher.get(`get-all-users-order-count`)
        const length=Math.ceil(data.result/5)
        console.log(length)
        setCount(length)
    })()
    },[])

    if (loading) {
        return <Loading/>
    }

    const handleShipped = async (id) => {
        await fetcher.patch(`update-status/${id}`)
        refetch()
    }
    const handlePageClick = data => {
        setPage(data.selected)
        refetch()
    }
    return (
        <div className='bg-base-300 py-[90px]'>
            <div className="overflow-x-auto px-4 py-20">
                <table className="table table-zebra w-full overflow-x-auto">

                    <thead>
                        <tr className='text-center'>
                            <th></th>
                            <th>User Name</th>
                            <th>Product Name</th>
                            <th>Email</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data?.data?.map(({ email, status, productName, paid, name, _id }, index) => <tr
                                key={_id}
                                className="text-center"
                            >
                                <td className='id'>{index + 1}</td>
                                <td>{name}</td>
                                <td>{productName}</td>
                                <td>{email}</td>
                                <td>{
                                    paid ? `${status ? 'Shipped' : 'Pending'}` : 'Not Paid'
                                }</td>
                                <td>{

                                    status ? <small>Already Shipped</small> : <>
                                        {paid ? <button
                                            onClick={() => handleShipped(_id)}
                                            className='btn text-white bg-[#080236]'>Shipped</button> :
                                            <label
                                                onClick={() => setOpenModal(_id)} for="delete-modal"
                                                className='btn btn-primary'
                                            >Delete</label>}
                                    </>
                                }</td>


                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                openModal && <DeleteProduct
                    setOpenModal={setOpenModal}
                    openModal={openModal}
                    refetch={refetch}
                    deleteUrl={deleteUrl}
                />}
            <div className='flex justify-center items-center mb-5'>
                <div className='w-[100%]  flex items-center justify-center'>
                    <ReactPaginate
                        previousLabel={'Prev'}
                        nextLabel={'Next'}
                        breakLabel={'...'}
                        pageCount={count}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={1}
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
    );
};

export default MangeAllOrder;