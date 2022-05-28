import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import illustration from '../../assets/images/Illustration.png'
import './Login.css'
import Social from './Social';
import { useForm } from "react-hook-form";
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';
import Loading from '../Shared/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../api/useToken';
const Login = () => {
    const [logError, setLogError] = useState('')
    const [user]=useAuthState(auth)
    const [token]=useToken(user)
    // console.log(user)
    const [email, setEmail] = useState('')
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        users,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    useEffect(() => {
        if (error) {
            switch (error?.code) {
                case 'auth/user-not-found':
                    setLogError('User not found');
                    break;
                case 'auth/invalid-email':
                    setLogError('Email is not valid');
                    break;
                case 'auth/invalid-password':
                    setLogError('Wrong password');
                    break;
                default:
                    setLogError(`Something went wrong`);
            }
        }
    }, [error])
    if (loading) {
        return <Loading />
    }
    if (token) {
        navigate(from, { replace: true })
    }
    const handleReset = () => {
        console.log('click')
        sendPasswordResetEmail(email)
        toast('Password reset send on your email')
    }
    const onSubmit = (data) => {
        setLogError('')
        signInWithEmailAndPassword(data.email, data.password)
        reset()
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content justify-between w-full flex-col lg:flex-row-reverse lg:px-24 px-4 ">
                    <div className="card flex-shrink-0 w-full sm:w-[440px] shadow-2xl bg-base-100">
                        <div className="py-7">
                            <div className="lg:px-5 px-5 w-full">
                                <form className='' onSubmit={handleSubmit(onSubmit)}>
                                    <h1 className='text-center font font-bold text-2xl mb-9 text-[#6358DC]'>Please Login</h1>
                                    <div className='relative mb-9'>
                                        <input
                                            type="email"
                                            name='email'
                                            className=" w-full odd:"
                                            placeholder

                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: 'Email is Required'
                                                },
                                                pattern: {
                                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                    message: 'Please provide a valid Email'
                                                },
                                                onChange: e => setEmail(e.target.value)

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
                                            placeholder
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

                                        </label>
                                    </div>
                                    <p
                                        onClick={handleReset}
                                        className='my-4 text-[#6358DC] cursor-pointer font-[500]'
                                    >Forgot Password</p>
                                    {
                                        logError && <p className='text-red-500  text-center mb-[-4px]'>{logError}</p>
                                    }
                                    <div className="form-control mt-6">
                                        <button className="btn hover:bg-[#6358DC] bg-[#6358DC] text-white">Login</button>
                                    </div>
                                    <p className='py-3'>Already have an account ? <Link state={{ from: from }} replace className='text-[#6358DC] cursor-pointer' to='/register'>Register</Link></p>
                                    <Social />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="text-center lg:text-left hidden lg:block">
                        <img src={illustration} className='w-[330px] object-contain' alt="" />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;