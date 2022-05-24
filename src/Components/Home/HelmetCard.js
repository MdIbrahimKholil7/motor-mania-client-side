import { StarIcon } from '@heroicons/react/solid';
import React from 'react';

const HelmetCard = ({ elem, height }) => {
    const { productName, img, price, ratings } = elem || {}
   
    return (
        <div>
            <div class={`card max-w-lg  shadow-md mx-2  p-0 my-2 cursor-pointer relative overflow-hidden card-parent duration-300 ease-in ${height ? `h-[${height}]` : 'h-auto'}`}>
               
                    <img className=' img-card h-36' src={img} alt={productName} class="rounded-xl" />
              
                <div class="card-body  p-2">
                    <h2 class="card-title p-0">{productName}</h2>
                    <div className='flex justify-between items-center w-full pb-3 '>
                        <h1>${price}</h1>
                        <div className='flex'>
                            {
                                [...Array(Number(ratings))].map((elem, index) => <StarIcon
                                    key={index}
                                    className='w-4 text-[#f6c80edf] mr-1'
                                />)
                            }
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <button className='absolute bottom-[-70px] duration-300 ease-in btn btn-primary order-btn mx-auto block '>Order</button>
                </div>
            </div>
        </div>
    );
};

export default HelmetCard;