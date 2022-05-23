import React from 'react';
import { Link } from 'react-router-dom';
import illustration from '../../assets/images/Illustration.png'
import Social from './Social';
const Login = () => {
    // bg-[#E5E5E5]
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content justify-between w-full flex-col lg:flex-row-reverse lg:px-24 px-4 ">
                    <div class="card flex-shrink-0 w-full sm:w-[440px] shadow-2xl bg-base-100">
                        <div class="py-7">
                            <div class="lg:px-5 px-5 w-full">
                                <form className=''>
                                    <h1 className='text-center font font-bold text-2xl mb-9 text-[#6358DC]'>Register</h1>
                                    <div className='relative mb-9'>
                                        <input type="text" class="write w-full odd:" placeholder></input>
                                        <label class="hello">Username</label>
                                        <span class="enter"></span>
                                    </div>
                                   
                                    <div className='relative mb-9'>
                                        <input type="text" class="write w-full odd:" placeholder></input>
                                        <label class="hello">Password</label>
                                        <span class="enter"></span>
                                    </div>
                                    <p className='my-4 text-[#6358DC] font-[500]'>Forgot Password</p>
                                    <div class="form-control mt-6">
                                        <button class="btn hover:bg-[#6358DC] bg-[#6358DC] text-white">Login</button>
                                    </div>
                                    <p className='py-3'>Don't have an account ? <Link className='text-[#6358DC] cursor-pointer' to='/register'>Register</Link></p>
                                    <Social/>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="text-center lg:text-left hidden lg:block">
                        <img src={illustration} className='w-[330px] object-contain' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;