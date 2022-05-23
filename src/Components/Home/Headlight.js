import React from 'react';
import bread from '../../assets/images/breadcrumbs.jpg'
import headlight from '../../assets/images/headlight.png'
const Headlight = () => {
    return (
        <div
            style={{
                background: `url(${bread})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className='md:flex justify-between items-center h-[280px] mt-20'>
                <div className='md:w-[57%]  w-full headlight flex justify-center items-center flex-col text-white'>
                    <h1 className='lg:text-5xl xl:text-6xl md:ml-[-40px] ml-[-44px] md:text-4xl text-2xl w-[80%] font font-bold md:leading-[68px] text-white z-10'>Take care of your jacket 40% off</h1>
                    <p className='w-[70%] md:ml-[-89px] ml-[-77px] mt-2 text-xl' >This discount is not valid in conjunction with other offers</p>
                </div>
                <div className='px-4 hidden md:block' >
                    <img className='w-[300px]' src={headlight} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Headlight;