import { StarIcon } from '@heroicons/react/solid';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HelmetCard = ({ elem, height }) => {
    const { servicenName, img, price, ratings,_id } = elem || {}
    const navigate=useNavigate()
    const location=useLocation()
    const url=`privateRoute/${_id}`
    return (
        <div>
            <div className={`card max-w-lg  shadow-md mx-2  p-0 my-2 cursor-pointer relative overflow-hidden card-parent duration-300 ease-in h-[300px]`}>
               
                    <img className='rounded-xl img-card mx-auto h-36' src={img} alt={servicenName}  />
              
                <div className="card-body justify-end  p-2">
                    <h2 className="card-title p-0">{servicenName}</h2>
                    <div className='flex justify-between items-center w-full pb-3 '>
                        <h1>${price}</h1>
                        <div className='flex'>
                            {
                                [...Array(Number(ratings || 4))].map((elem, index) => <StarIcon
                                    key={index}
                                    className='w-4 text-[#f6c80edf] mr-1'
                                />)
                            }
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <button 
                    onClick={
                        ()=>navigate(`${location.pathname.includes('privateRoute') ? location.pathname=url:url}`)} className='absolute bottom-[-70px] duration-300 ease-in btn btn-primary order-btn mx-auto block '>Order</button>
                </div>
            </div>
        </div>
    );
};

export default HelmetCard;