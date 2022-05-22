import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import bread from '../../assets/images/breadcrumbs.jpg'
import PrimaryBtn from '../Shared/PrimaryBtn';
import fetcher from '../../api/fetcher';
import HelmetCard from './HelmetCard';
import { useRef } from 'react';

const Helmet = () => {
    const [helmet, setHelmet] = useState([])
    const slideRef = useRef(null)
    const url = `http://localhost:5000/get-helmet`
    useEffect(() => {
        (async () => {
            const { data } = await fetcher('get-helmet')
            setHelmet(data)
        })()
    }, [])
    console.log(slideRef.current)
    let settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",

        /* mobileFirst: true, */
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

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
            <div className='flex justify-between items-center  mb-9'>
                <div className=''>
                    <h1 className='text-3xl font-bold font '>New Style Helmet</h1>
                </div>
                <div className='md:block hidden'>
                    {
                        chevronIcon
                    }
                </div>
            </div>

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
                                    <p>Low Prices</p>
                                    <p>Match Guarantee</p>
                                </div>
                                <div className='mb-4'>
                                    <p>Headlights</p>
                                    <p>Brakes & Suspension</p>
                                    <p>Body Parts</p>
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
                        <Slider {...settings}
                            autoplay={false}
                            ref={slideRef}
                        >
                            {
                                helmet && helmet.map(elem => <HelmetCard
                                    key={elem.key}
                                    elem={elem}
                                />)
                            }
                        </Slider>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Helmet;