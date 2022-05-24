import React, { useEffect, useState } from 'react';
import Slider from 'react-slick/lib/slider';
import fetcher from '../../api/fetcher';
import quote from '../../assets/images/quote.svg'
import TestimonialCard from './TestomonialCard';
const Testimonials = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        (async () => {
            const { data } = await fetcher('get-review')
            setReview(data)
        })()
    }, [])
    const settings = {
        arrows: true,
        dots: true,
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
    return (
        <div className='mt-12 px-4 mb-20'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-2xl font-bold'>Testimonial</h1>
                    <h2 className='text-4xl p-0'>What Our Clients Says</h2>
                </div>
                <div>
                    <img className='w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='mt-20 w-[94%] mx-auto'>
                <Slider {...settings}
                    autoplay={true}
                >
                    {
                        review && review.map(elem => <TestimonialCard
                            key={elem.id}
                            elem={elem}
                        />)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;