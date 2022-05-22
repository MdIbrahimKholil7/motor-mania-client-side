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
            <div class="hero-overlay bg-[#000000a7] bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md text-white">
                    <h1 class="mb-5 text-5xl font-bold">Find Best Parts For Your Vehicle</h1>
                    <p class="mb-5">Browse our range of Gore-Tex motorcycle clothing including Rukka, Dainese, Richa, Alpinestars, and more</p>
                    <PrimaryBtn>Shop Now</PrimaryBtn>
                </div>
            </div>
        </div>

    );
};

export default Banner;