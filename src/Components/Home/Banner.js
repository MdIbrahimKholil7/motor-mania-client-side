import React from 'react';
import banner from '../../assets/images/banner.jpg'
import PrimaryBtn from '../Shared/PrimaryBtn';
const Banner = () => {
    return (
        <div
            style={{
                background: `url(${banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'

            }}
            className="hero min-h-screen" >
            <div className="hero-overlay bg-[#000000a7] bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-white">
                    <h1 className="mb-5 text-5xl font-bold">Find The Best Parts For Your Vehicle</h1>
                    <p className="mb-5 text-white">Browse our range of Gore-Tex motorcycle clothing including Rukka, Dainese, Richa, Alpinestars, and more</p>
                    <PrimaryBtn>Shop Now</PrimaryBtn>
                </div>
            </div>
        </div>

    );
};

export default Banner;