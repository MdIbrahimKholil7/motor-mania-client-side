import { StarIcon } from '@heroicons/react/solid';
import React from 'react';

const TestimonialCard = ({ elem }) => {
    const { desc, name, img, address, ratings } = elem
    return (
        <div className='mb-5'>
            <div className="  p-0 mx-3 shadow-xl image-full rounded-lg">
                <div className="card-body py-7 px-4 rounded-lg">
                    <p>{desc}</p>
                    <div className="card-actions flex flex-col items-center justify-start mt-6">
                        <div className="avatar">
                            <div className="w-[64px] h-[64px] rounded-full  ring-offset-base-100 ring-offset-2 mr-5">
                                <img className='' src={img} alt='clientImage' />
                            </div>
                        </div>
                        <div>
                            <div className='text-center mb-2'>
                                <h1 className='font-bold'>{name}</h1>
                                <h2>{address}</h2>
                            </div>
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
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;