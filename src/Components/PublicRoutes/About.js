import React from 'react';
import bread from '../../assets/images/breadcrumbs.jpg'
import headLight from '../../assets/images/headlight.png'
import Bussiness from '../Home/Bussiness';
import Testimonials from '../Home/Testimonials';


const About = () => {
    return (
        <div>
            <div
                style={{
                    background: `url(${bread})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'

                }}
                className='hero-overlay h-[50vh] w-full bg-[#000000a7] bg-opacity-60'
            >
                <div className="hero-content h-full z-10 text-center text-neutral-content">
                    <div className='text-white flex justify-center items-center h-full'>
                        <h1 className='font font-bold uppercase italic text-5xl text-primary'>About Us</h1>
                    </div>
                </div>
            </div>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col  lg:flex-row-reverse">
                    <div className='w-[50%] '>
                        <img className='w-[360px] mx-auto' src={headLight} alt='' />
                    </div>
                    <div className='w-[50%]'>
                        <h1 class="text-5xl font-bold">About PartsMania</h1>
                        <p class="py-6 p-0">The more we drive the car the better they seem to operate operate. No noise, just stopping power! Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam</p>
                        <p class="py-2 p-0 mb-7">vel illum qui dolorem eum fugiat quo voluptas nulla pariatur erit qui in ea voluptate verit qui in ea voluptate vele.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div>
                <Bussiness/>
            </div>
            <div>
                <Testimonials/>
            </div>
        </div>
    );
};

export default About;