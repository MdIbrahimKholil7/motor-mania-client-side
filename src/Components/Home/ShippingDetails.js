import { PhoneIcon, ShieldCheckIcon, TagIcon, TruckIcon } from '@heroicons/react/solid';
import React from 'react';
import banner from '../../assets/images/banner.jpg'
const ShippingDetails = () => {
    return (
        <div
        style={{
            background: `url(${banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }} 
        className='my-20 py-20 shipping-bg relative'>
           
            <div className='grid justify-items-start pl-12 md:pl-4 md:pr-4 lg:grid-cols-4 gap-5 md:grid-cols-2 '>
                <div className='flex items-center  text-white z-10'>
                    <TruckIcon
                    className='w-14 mr-5 hover:w-[57px] duration-300'
                    />
                    <div>
                        <h4>Free Shipping</h4>
                        <p>For order from $3000</p>
                    </div>
                </div>
                <div className='flex items-center text-white z-10'>
                    <PhoneIcon
                    className='w-14 mr-5 hover:w-[57px] duration-300'
                    />
                    <div>
                        <h4>Free Shipping</h4>
                        <p>For order from $3000</p>
                    </div>
                </div>
                <div className='flex items-center text-white z-10'>
                    <ShieldCheckIcon
                    className='w-14 mr-5 hover:w-[57px] duration-300'
                    />
                    <div>
                        <h4>Free Shipping</h4>
                        <p>For order from $3000</p>
                    </div>
                </div>
                <div className='flex items-center text-white z-10'>
                    <TagIcon
                    className='w-14 mr-5 hover:w-[57px] duration-300'
                    />
                    <div>
                        <h4>Free Shipping</h4>
                        <p>For order from $3000</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippingDetails;