import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Social from './Social';
import { useForm } from "react-hook-form";
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Shared/Loading';
import useToken from '../../api/useToken';
const Login = () => {
    const [passError, setPassError] = useState('')
    const [user] = useAuthState(auth)
    const [token] = useToken(user)
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from || "/";
    const [
        createUserWithEmailAndPassword,
        users,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    // console.log(user)
    const [updateProfile, updating] = useUpdateProfile(auth);
    if (loading || updating) {
        console.log(loading)
        return <Loading />
    }

    if (error) {
        return
    }
    if (token) {
        navigate(from, { replace: true })
    }
    // submit function  
    const onSubmit = async (data) => {
        const { name, email, password, confirmPassword, } = data
        if (password !== confirmPassword) {
            setPassError('Password not match')
        } else {
            setPassError('')
            await createUserWithEmailAndPassword(email, password)
            toast.success('Email verification sent')
            await updateProfile({displayName:name});
            reset()
        }
    }

    return (
        <div className=''>
            <div className="hero min-h-screen">
                <div className="hero-content justify-between w-full flex-col lg:flex-row-reverse lg:px-12 px-4 ">
                    <div className="card flex-shrink-0 w-full sm:w-[440px] shadow-2xl bg-base-100">
                        <div className="py-7">
                            <div className="lg:px-5 px-5 w-full">
                                <form className='' onSubmit={handleSubmit(onSubmit)}>
                                    <h1 className='text-center font font-bold text-2xl mb-9 text-[#6358DC]'>Register</h1>

                                    <div className='relative mb-9'>
                                        <input
                                            type="text"
                                            className="write w-full odd:"
                                            placeholder=''
                                            name='name'
                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                    message: 'Please input your name'
                                                },

                                            })}

                                        />
                                        <label for='name' className={`hello mb-9 `}>Username</label>
                                        <span className="enter"></span>
                                        <label className="label">
                                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                                        </label>
                                    </div>

                                    <div className='relative mb-9'>
                                        <input
                                            type="text"
                                            className="write w-full odd:"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: 'Email is Required'
                                                },
                                                pattern: {
                                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                    message: 'Please provide a valid Email'
                                                }
                                            })}
                                        />
                                        <label className="hello">Email</label>
                                        <span className="enter"></span>
                                        <label className="label">
                                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        </label>
                                    </div>

                                    <div className='relative mb-9'>
                                        <input
                                            type="password"
                                            className="write w-full odd:"
                                            {...register("confirmPassword", {
                                                required: {
                                                    value: true,
                                                    message: 'Please enter your confirm password'
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message: 'Password should be greater than 6'
                                                }
                                            })}
                                        />
                                        <label className="hello">Confirm Password</label>
                                        <span className="enter"></span>
                                        <label className="label">
                                            {errors.confirmPassword?.type === 'required' && <span className="label-text-alt text-red-500">{errors.confirmPassword.message}</span>}
                                            {errors.confirmPassword?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.confirmPassword.message}</span>}
                                        </label>
                                    </div>

                                    <div className='relative mb-9'>
                                        <input
                                        type="password"
                                            className="write w-full odd:"
                                            {...register("password", {
                                                required: {
                                                    value: true,
                                                    message: 'Please enter your password'
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message: 'Password should be greater than 6'
                                                }
                                            })}
                                        />
                                        <label className="hello">Password</label>
                                        <span className="enter"></span>
                                        <label className="label">
                                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                            {
                                                passError && <span className="label-text-alt text-red-500">{passError}</span>
                                            }
                                        </label>
                                    </div>

                                    <div className="form-control mt-6">
                                        <button className="btn hover:bg-[#6358DC] bg-[#6358DC] text-white">Register</button>
                                    </div>
                                    <p className='py-3'>Don't have an account ? <Link className='text-[#6358DC] cursor-pointer' to='/login'>Login</Link></p>
                                    <Social />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="text-center lg:text-left hidden lg:block lg:w-[440px] xl:w-[540px] register ">
                        <h1 className='text-white text-4xl font font-bold mr-16'>Glad To See You</h1>
                        <p className='text-white text-xl font mt-3 mr-16 '>Please Register</p>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;