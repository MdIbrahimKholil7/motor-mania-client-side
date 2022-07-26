import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import fetcher from '../../api/fetcher';
import users from '../../assets/images/user.png'
import auth from '../../firebase_init';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [loading, setLoading] = useState(false)
    const [imgUrl, setImgUrl] = useState('')
    const [profile, setProfile] = useState({})
    const navigate=useNavigate()
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const { refetch } = useQuery(['get-profile-data', user], () => 
    fetch(`https://secret-bayou-77535.herokuapp.com/get-profile-data?email=${user?.email}`,{
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
    })
        .then(res =>{
            if (res.status === 401 || res.status === 403) {
                signOut(auth)
                navigate('/login')
            }
            return res.json()}
            )
        .then(data => setProfile(data))
    )
    const { imgUrl: img, address, education, phone } = profile || {}
    // console.log(profile)
    const imageHandler = async event => {
        setLoading(true)
        console.log(event.target.files[0])
        const image = event.target.files[0]
        const url = `https://api.imgbb.com/1/upload?key=b0218fca63a2d42f3b150732dddf9450`
        const formData = new FormData()
        formData.append('image', image)
        try {
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        setLoading(false)
                    }
                    setImgUrl(data.data.display_url)
                    console.log(data)
                })
        }
        catch (error) {
            console.log(error)
        }
    }
   
    const onSubmit = data => {
        console.log(data)
        const { address, phone, education } = data
        const users = {
            phone,
            address,
            education,
            imgUrl,
            name:user?.displayName
        }
        
        fetcher.put(`profile-data/${profile?._id}`, users)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your profile is Done',
                        showConfirmButton: false,
                        timer: 3000
                    })  
                }
            })
            refetch()
    }
    return (
        <div className='bg-base-200  py-[70px] '>
            <div>
                <div>
                    <img className='w-[150px] object-cover rounded-full mx-auto' src={img ? img : users} alt="" />
                </div>
                <form
                    className='w-[70%] mx-auto mt-14 mb-[100px] justify-center flex-col items-center'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text mb-[-9px]">FullName</span>
                        </label>
                        <input
                            type="text"
                            name='name'
                            placeholder="FullName"
                            value={user?.displayName}
                            readOnly
                            className="input input-bordered w-full rounded-full"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                },

                            })}

                        />
                        {
                            errors?.name?.type === 'required' && <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        }
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text mb-[-9px]">Email</span>
                        </label>
                        <input
                            type="text"
                            name='email'
                            placeholder="Email"
                            className="input input-bordered w-full rounded-full"
                            value={user?.email}
                            readOnly
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Please provide a valid Email'
                                },
                            })}
                        />
                        {
                            errors?.email?.type === 'required' && <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        }
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text mb-[-9px]">Phone</span>
                        </label>
                        <input
                            type="number"
                            name='phone'
                            placeholder={phone ? phone:'Phone'}
                            className="input input-bordered w-full rounded-full"

                         
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'Phone Number is Required'
                                },

                            })}
                        />

                        {
                            errors?.phone?.type === 'required' && <label className="label">
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}

                            </label>
                        }

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text mb-[-9px]">Address</span>
                        </label>
                        <input
                            type="text"
                            name='address'
                            placeholder={address ? address:'Address'}
                            className="input input-bordered w-full rounded-full"
                            
                            
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: 'Enter your address'
                                },

                            })}
                        />
                        {
                            errors?.address?.type === 'required' && <label className="label">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}

                            </label>
                        }
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text mb-[-9px]">Education</span>
                        </label>
                        <input
                            type="text"
                            name='education'
                            placeholder={education ? education:'Education'}
                            className="input input-bordered w-full rounded-full"
                        
                            {...register("education", {
                                required: {
                                    value: true,
                                    message: 'Enter your education'
                                },

                            })}
                        />
                        {
                            errors?.education?.type === 'required' && <label className="label">
                                {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                            </label>
                        }
                    </div>
                    <div className="form-control w-full">
                        <label htmlFor='img'
                            className={`label w-[60%] mx-auto bg-[#1c1448] btn ${loading && 'loading'} p-0 m-0 my-7 rounded-full text-white text-center flex justify-center items-center text-xs md:text-[17px] `}

                        >
                            {loading ? 'Uploading' : 'Upload Image'}
                        </label>
                        <input
                            type="file"
                            placeholder=""
                            id='img'
                            onChange={imageHandler}
                            className="input input-bordered hidden w-full rounded-full"
                            disabled={address && true}
                        />
                    </div>
                    <div className='mt-7 text-center'>
                        <button
                            className={`btn bg-slate-700 text-white`}
                            disabled={imgUrl ? false : true}
                            
                        >Add Information</button>
                   
                        <span onClick={()=>navigate('/dashboard/updateProfile')} for="my-modal" className=" modal-button btn bg-pink-900 text-white ml-7">Update Profile</span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;