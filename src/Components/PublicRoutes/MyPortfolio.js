import React from 'react';
import { Link } from 'react-router-dom';
import portfolioImg from '../../assets/images/portfolio-removebg-preview.png'
const MyPortFolio = () => {
    return (
        <div>


            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content justify-between w-full flex-col lg:flex-row px-5">
                    <img className='md:w-[300px] w-[270px] mt-[-100px] mx-auto' src={portfolioImg} alt='img' />
                    <div className='md:w-[50%] w-full mt-7 md:mt-0 '>
                        <h1 className="md:text-4xl text-2xl font-bold">My Information</h1>
                        <div className='mt-7'>
                            <p className='p-0 text-[17px] text-black'>Name:Md Ibrahim Kholil</p>
                            <p className='p-0 text-[17px] text-black  '>Education:HSC</p>
                            <p className='p-0 text-[17px] text-black  '>Email:kholilmdibrahim17@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-5'>
                <div className='mt-9 mb-9 rounded-2xl py-7 md:w-[50%] w-full mx-auto border-solid border-2 border-gray-600 ' >

                    <h1 className='text-center font-bold md:my-7 my-3 text-2xl'>My Skills</h1>
                    <div>
                        <ol className='list-decimal pl-9'>
                            <li>Html</li>
                            <li>Css</li>
                            <li>Tailwind Css</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Firebase</li>
                            <li>Nodejs</li>
                            <li>MongoDb</li>
                            <li>Express Js</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className='px-5'>
                <div className='md:w-[50%] mx-auto h-auto py-7 px-5 rounded-2xl my-9 border-solid border-2 border-gray-600'>
                    <h1 className='text-center font-bold md:my-7 my-3 text-2xl'>My Project Link</h1>
                    <h3>Warehouse Project</h3>
                    <a className=' underline mb-3 block text-green-600' href="https://cargo-warehouse.web.app/" target='_blank'>https://cargo-warehouse.web.app/</a>
                    <h3>Gym Website</h3>
                    <a className=' underline p-0 text-green-600 mb-3 block' href="https://gym-project-2.web.app" target='_blank'>https://gym-project-2.web.app</a>

                    <h3>Bike Parts Site</h3>
                    <a className=' underline p-0 text-green-600 mb-3 block' href="https://parts-mania.web.app/" target='_blank' >https://parts-mania.web.app/</a>
                </div>
            </div>
        </div>

    );
};

export default MyPortFolio;