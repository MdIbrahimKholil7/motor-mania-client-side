import React from 'react';
import Slider from 'react-slick/lib/slider';
import HelmetCard from './HelmetCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderProduct = ({ helmet, slideRef, show, auto }) => {
    let settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: show,
        slidesToScroll: 1,
        cssEase: "linear",

        /* mobileFirst: true, */
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: show,
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
        <div>
            <Slider {...settings}
                autoplay={auto ? auto : false}
                ref={slideRef}

            >
                {
                    helmet && helmet.map(elem => <HelmetCard
                        key={elem._id}
                        elem={elem}
                        height={'500px'}
                    />)
                }
            </Slider>
        </div>
    );
};

export default SliderProduct;