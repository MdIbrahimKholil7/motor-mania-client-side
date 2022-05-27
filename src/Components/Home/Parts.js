import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import fetcher from '../../api/fetcher';
import SliderController from './SliderController';
import SliderProduct from './SliderProduct';

const Parts = () => {
    const [allParts, setAllParts] = useState([])
    const slideRef = useRef(null)
    useEffect(() => {
        (async () => {
            const { data } = await fetcher('get-parts')
            setAllParts(data)
        })()
    }, [])
    const location=useLocation()
   
    const chevronIcon = (<div className='flex '>
        <div className="avatar placeholder mr-3">
            <div className="bg-primary text-white rounded-full w-8">
                <div className='cursor-pointer' onClick={() => slideRef.current.slickNext()}>
                    <ChevronLeftIcon
                        className='w-7 '
                    />
                </div>
            </div>
        </div>

        <div className="avatar placeholder">
            <div className="bg-primary text-white rounded-full w-8" onClick={() => slideRef.current.slickPrev()}>
                <div className='cursor-pointer'>
                    <ChevronRightIcon
                        className='w-7 '
                    />
                </div>
            </div>
        </div>

    </div>)
    return (
        <div className='mx-7 my-14'>
            <div>
                {
                   !location.pathname.includes('privateRoute') && <SliderController
                    chevronIcon={chevronIcon}
                    title={'Popular Bike Parts'}
                    />
                }
                {
                    <SliderProduct
                    slideRef={slideRef}
                    helmet={allParts}
                    show={4}
                    auto={true}
                    />
                }
            </div>
        </div>
    );
};

export default Parts;
