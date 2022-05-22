import { CogIcon } from '@heroicons/react/solid';
import React from 'react';
import engine from '../../assets/images/engine.png'
import engineLogo from '../../assets/images/logo-engine.png'
const Engine = () => {
    return (
        <div class="hero min-h-screen mt-12">
            <div class="hero-content justify-between flex-col lg:flex-row-reverse">
                <img src={engine} class="lg:w-[300px] w-[240px] object-cover  rounded-lg " alt='engine' />
                <div className='md:w-[50%]'>
                    <h1 class="md:text-4xl text-3xl font-bold font">Worlds Most Powerful Engine</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className='grid md:grid-cols-2 gap-9'>
                        <div className='flex items-center'>
                            <img className='w-16 bg-blend-overlay mr-4' src={engineLogo} alt="logo" />
                            <div>
                                <h1>Engine Power</h1>
                                <p>205hp (151 kW)</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <CogIcon
                                className='w-8 mr-4'
                            />
                            <div>
                                <h1>Engine type</h1>
                                <p>4-Stroke Cylinder</p>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-primary mt-7">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Engine;