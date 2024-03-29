import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase_init';
import Loading from '../Shared/Loading';
import { useForm } from "react-hook-form";
import './Order.css'
import ReactImageMagnify from 'react-image-magnify';
import { CreditCardIcon, InboxIcon, UserIcon } from '@heroicons/react/solid';
import Parts from '../Home/Parts'
import fetcher from '../../api/fetcher';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { signOut } from 'firebase/auth';
const PrivateRoute = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState(100)
    const [error,setError]=useState('')
    const [user] = useAuthState(auth)
    const { id } = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const { servicenName, img, quantity, price, } = item || {}
    console.log(item)
    const url = `https://motor-mania-server.onrender.com/get-service?id=${id}&email=${user?.email}`
    
    // data fetching 
    useEffect(() => {
        try {
            if (user?.email) {
                (async () => {
                    await fetch(url, {
                        headers: {
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                        .then(res => {
                            if (res.status === 401 || res.status === 403) {
                                signOut(auth)
                                navigate('/login')
                            }
                            return res.json()
                        })
                        .then(data => {
                            setLoading(false)
                            setItem(data)
                        })
                }
                )()
            }
        }
        catch (err) {
            console.log(err)
        }


    }, [user, id, navigate, url])
    console.log(item)
    let err;
    useEffect(() => {
       
        if (value < 100) {
            
            setError('Please order minimum 100 product')
            setValue(100)
        }
        if (value > quantity) {
            setError( `You can't order more than available product`)
            setValue(quantity)
        }
        if (value > 100 && value < quantity) {
           setError('')
        }
    }, [value,quantity])
    if (loading) {
        console.log('click')
        return <Loading />
    }
    const onSubmit = async (datas) => {
        const { name, email, quantitys, address } = datas
        console.log(quantity)
        const body = {
            name,
            email,
            quantitys,
            productName: servicenName,
            address,
            total: quantitys * price,
            paid: false,
            price,
            img,
            id: id,
            quantity
        }
        const data = await fetcher.post('users-order-data', {
            body
        })
        console.log(data)
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your order is confirmed',
            showConfirmButton: false,
            timer: 3000
        })
        reset()
    }
    return (
        <div className=''> 
            <div className="hero min-h-[80vh] mb-14">
                <div className="hero-content w-full justify-between flex-col lg:flex-row">
                    <div className='w-[450px] flex justify-center items-center '>
                        {/*  <img src={img} className="rounded-lg w-[320px] object-cover" alt='' /> */}
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: `${img}`,
                                /*  width: 200,
                                 height:'auto', */
                                sizes: '(min-width: 300px) 33.5vw, (min-width: 415px) 50vw, 100vw',
                            },
                            largeImage: {
                                src: `${img}`,
                                width: 1200,
                                height: 1800
                            },

                        }} />

                    </div>
                    <div className='w-[500px]'>
                        <h1 className="text-5xl font-bold">{servicenName}</h1>
                        <p className="p-0 my-3">There are many variations of passages of , but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        <h1 className='font font-bold text-2xl mb-4'>${price}</h1>
                        <p className='font font-bold text-xl p-0 my-4 text-black'>Category : {servicenName}</p>
                        <p className='font font-bold text-xs p-0 my-4 text-black'>Available : {quantity}</p>

                    </div>
                </div>
            </div>

            <div className="lg:px-14 py-9 bg-base-100" >
                <div className='text-center text-2xl font font-bold mb-14'>
                    <h2>Product Order Form</h2>
                </div>
                <div className="flex justify-between flex-col lg:flex-row items-center">
                    <form className='md:w-[50%] w-full px-10 md:px-0 mb-12 md:mb-0'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="form-control w-full mb-5">
                            <label className="label justify-start items-start m-0 p-0 mb-3">
                                <span>
                                    <UserIcon
                                        className='w-5 mr-2 '
                                    />
                                </span>
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                value={user?.displayName}
                                readOnly
                                className="input input-bordered w-full form-border mb-3"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Please enter your name'
                                    },

                                })}

                            />

                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                        </div>

                        <div className="form-control w-full mb-5">
                            <label className="label justify-start items-start m-0 p-0  mb-3">
                                <span>
                                    <InboxIcon
                                        className='w-5 mr-2'
                                    />
                                </span>
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                value={user?.email}
                                readOnly
                                placeholder="email"
                                className="input input-bordered form-border mb-3 w-full"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Please enter your email'
                                    },

                                })}
                            />

                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                        </div>
                        <div className="form-control w-full mb-5">
                            <label className="label justify-start items-start m-0 p-0  mb-3">
                                <span>
                                    <InboxIcon
                                        className='w-5 mr-2'
                                    />
                                </span>
                                <span className="label-text">Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Quantity"
                                className="input input-bordered form-border mb-3 w-full"
                                value={value}
                                {...register("quantitys", {
                                    required: {
                                        value: true,
                                        message: 'Please enter quantity'
                                    },
                                    onChange: e => setValue(e.target.value)
                                })}
                            />


                            {errors.quantitys?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantitys.message}</span>}
                            {errors.minLength?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minLength.message}</span>}
                            {errors.maxLength?.type === 'required' && <span className="label-text-alt text-red-500">{errors.maxLength.message}</span>}
                            {
                                error && <span className="label-text-alt text-red-500">{err}</span>
                            }

                        </div>
                        <div className="form-control w-full mb-5">
                            <label className="label justify-start items-start m-0 p-0  mb-3">
                                <span>
                                    <CreditCardIcon
                                        className='w-5 mr-2'
                                    />
                                </span>
                                <span className="label-text">Address</span>

                            </label>
                            <input
                                type="text"
                                placeholder="Address"
                                className="input input-bordered form-border mb-3 w-full"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Please enter your address'
                                    },

                                })}
                            />

                            {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}

                        </div>
                        <div className="form-control">
                            <button disabled={value < 100 || value > quantity} className="btn hover:bg-[#6358DC]  bg-[#6358DC] text-white" type='submit'>Order</button>
                        </div>
                    </form>
                    <div className="Yorder w-[300px]">
                        <table>
                            <tr>
                                <th colspan="2">Your order</th>
                            </tr>
                            <tr>
                                <td>{servicenName}</td>
                                <td>${price}</td>
                            </tr>
                            <tr>
                                <td>Available</td>
                                <td>{quantity}</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>${value <= quantity && value >= 100 ? value * price : price * 100}
                                </td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>Free shipping</td>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>

            <div >
                <div className='text-3xl font font-bold mt-5 mb-2  px-9'>
                    <h1>Related Product</h1>
                </div>
                <Parts />
            </div>
        </div>
    );
};

export default PrivateRoute;