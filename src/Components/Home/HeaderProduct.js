import React from 'react';
import engine from '../../assets/images/engine2.png'
import tyre from '../../assets/images/tyre2.png'
import PrimaryBtn from '../Shared/PrimaryBtn';
const HeaderProduct = () => {
    return (
        <div className='grid lg:grid-cols-2  gap-9 w-full px-4 my-9'>
            <div class="flex bg-[#f7f2f2] shadow-xl">
                <div class="card-body px-4  sm:px-4  items-start justify-center">
                    <h2 class="text-[15px]">Power tools of next level</h2>
                    <p className=' flex-grow-0 font-bold text-xs sm:text-2xl mb-7'>Cruiser Engine</p>
                    <PrimaryBtn>Shop Now</PrimaryBtn>
                </div>
                <div className='flex justify-center w-[220px] items-center pr-5 polygon relative'>
                    <img className='w-[150px] sm:w-[190px] md:w-[190px] lg:w-[190px] absolute sm:img left-[9px] sm:top-[-17px] top-[5px]  object-cover py-9' src={engine} alt="engine" />
                </div>
            </div>
            <div class="card card-side  bg-[#f7f2f2] shadow-xl">
                <div class="card-body px-4  sm:px-4 items-start justify-center">
                    <h2 className='text-[15px]'>New Style Heritage Bike</h2>
                    <p className=' flex-grow-0 font-bold text-2xl mb-7'>Bike Tyre</p>
                    <PrimaryBtn>Shop Now</PrimaryBtn>
                </div>

                <div className='flex w-[220px] justify-center items-center pr-5 polygon relative'>
                    <img className='lg:w-[170px] img object-cover py-9' src={tyre} alt="engine" />
                </div>

            </div>
        </div>
    );
};

export default HeaderProduct;