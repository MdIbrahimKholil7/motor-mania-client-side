import React, { useEffect, useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import bread from '../../assets/images/breadcrumbs.jpg'
import PrimaryBtn from '../Shared/PrimaryBtn';
import fetcher from '../../api/fetcher';
import { useRef } from 'react';
import SliderProduct from './SliderProduct';
import SliderController from './SliderController';

const Helmet = () => {
    const [helmet, setHelmet] = useState([])
    const slideRef = useRef(null)
    useEffect(() => {
        (async () => {
            const { data } = await fetcher('get-helmet')
            setHelmet(data)
        })()
    }, [])
    const chevronIcon = (<div className='flex '>
        <div class="avatar placeholder mr-3">
            <div class="bg-primary text-white rounded-full w-8">
                <div className='cursor-pointer' onClick={() => slideRef.current.slickNext()}>
                    <ChevronLeftIcon
                        className='w-7 '
                    />
                </div>
            </div>
        </div>

        <div class="avatar placeholder">
            <div class="bg-primary text-white rounded-full w-8" onClick={() => slideRef.current.slickPrev()}>
                <div className='cursor-pointer'>
                    <ChevronRightIcon
                        className='w-7 '
                    />
                </div>
            </div>
        </div>

    </div>)

    return (
        <div className='py-9 mx-7'>
            {
                <SliderController
                title={'New Style Helmet'}
                chevronIcon={chevronIcon}
                />
            }
            <div className='md:flex justify-between items-center'>
                <div
                    style={{
                        background: `url(${bread})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'

                    }}
                    className='md:w-[25%] rounded-xl py-7'
                >
                    <div class="hero">
                        <div class="hero-overlay bg-[#00000000] bg-opacity-60"></div>
                        <div class="hero-content text-center text-white">
                            <div class="max-w-md">
                                <div className='mb-3'>
                                    <h1 class="mb-2 text-3xl font-bold">Helmet</h1>
                                    <p className='p-0 text-white'>Low Prices</p>
                                    <p className='p-0 text-white'>Match Guarantee</p>
                                </div>
                                <div className='mb-4'>
                                    <p className='p-0 text-white'>Headlights</p>
                                    <p className='p-0 text-white'>Brakes & Suspension</p>
                                    <p className='p-0 text-white'>Body Parts</p>
                                </div>
                                <PrimaryBtn>Shop Now</PrimaryBtn>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-[70%] '>
                    <div className='md:hidden block'>
                        <div className='w-full flex justify-end my-9'>
                            {
                                chevronIcon
                            }
                        </div>
                    </div>
                    <div className='bg-white'>
                       
                        <SliderProduct
                        slideRef={slideRef}
                        helmet={helmet}
                        show={3}
                        auto={false}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Helmet;