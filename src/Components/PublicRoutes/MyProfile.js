import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import fetcher from '../../api/fetcher';
import users from '../../assets/images/user.png'
import auth from '../../firebase_init';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading'
import UpdateModal from './UpdateModal';
const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [loading, setLoading] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [imgUrl, setImgUrl] = useState('')
    const [profile, setProfile] = useState({})
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const { loading: loadings } = useQuery(['get-profile-data', user], () => fetch(`http://localhost:5000/get-profile-data?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setProfile(data))
    )

    const { imgUrl: img, address, education, phone } = profile || {}
    
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
        const { name, address, phone, email, education } = data
        const user = {
            name,
            email,
            phone,
            address,
            education,
            imgUrl
        }

        fetcher.post('profile-data', user)
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

    }
    return (
        <div className='bg-base-200  py-7'>
            <div>
                <div>
                    <img className='w-[200px] rounded-full mx-auto' src={img?img:users} alt="" />
                </div>
                <form
                    className='w-[70%] mx-auto mt-14 justify-center flex-col items-center'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text mb-[-9px]">FullName</span>
                        </label>
                        <input
                            type="text"
                            placeholder="FullName"
                            value={user?.displayName}
                            readOnly
                            class="input input-bordered w-full rounded-full"
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
                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text mb-[-9px]">Email</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Email"
                            class="input input-bordered w-full rounded-full"
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
                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text mb-[-9px]">Phone</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Phone number"
                            class="input input-bordered w-full rounded-full"
                            value={phone ? phone : ''}
                            readOnly={phone ? true : false}
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
                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text mb-[-9px]">Address</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Address"
                            class="input input-bordered w-full rounded-full"
                            value={address ? address : ''}
                            readOnly={address ? true : false}
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
                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text mb-[-9px]">Education</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Education"
                            class="input input-bordered w-full rounded-full"
                            value={education ? education : ''}
                            readOnly={education ? true : false}
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
                    <div class="form-control w-full">
                        <label htmlFor='img'
                            class={`label w-[60%] mx-auto bg-[#1c1448] btn ${loading && 'loading'} p-0 m-0 my-7 rounded-full text-white text-center flex justify-center pl-5 items-center`}

                        >
                            {loading ? 'Uploading' : 'Upload Image'}
                        </label>
                        <input
                            type="file"
                            placeholder=""
                            id='img'
                            onChange={imageHandler}
                            class="input input-bordered hidden w-full rounded-full"
                            disabled={address && true}
                        />

                    </div>
                    <div className='mt-7 text-center'>
                        <button
                            className='btn bg-slate-700 text-white'
                            disabled={imgUrl  ? false : true}
                        >Save</button>
                        <button className=''>Update</button>

                        <label onClick={()=>setOpenModal(true)} for="my-modal" class=" modal-button btn bg-pink-900 text-white ml-7">Update</label>
                    </div>
                </form>

            </div>

            <UpdateModal
            profile={profile}
            />

        </div>
    );
};

export default MyProfile;