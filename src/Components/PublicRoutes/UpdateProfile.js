import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import fetcher from '../../api/fetcher';
import auth from '../../firebase_init';
const UpdateProfile = () => {

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [user]=useAuthState(auth)
    const onSubmit = data => {
        console.log(data)
        const { address, phone, education } = data
        const users = {
            phone,
            address,
            education,

        }

        fetcher.patch(`update-profile/${user?.email}`,users)
        .then(res => {
            console.log(res)
            if (res.data.acknowledged) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your profile is updated',
                    showConfirmButton: false,
                    timer: 3000
                })
            }
        })
        reset()
    }
    return (
        <div className='bg-base-200 py-14'>
            <form
                className='w-[70%] mx-auto mt-14 justify-center flex-col items-center'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text mb-[-9px]">Phone</span>
                    </label>
                    <input
                        type="number"
                        name='phone'
                        placeholder={'Phone'}
                        class="input input-bordered w-full rounded-full"


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
                        name='address'
                        placeholder='Address'
                        class="input input-bordered w-full rounded-full"


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
                        name='education'
                        placeholder='Education'
                        class="input input-bordered w-full rounded-full"

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

                <div className='mt-7 text-center'>
                    <button for="my-modal" class=" modal-button btn bg-pink-900 text-white ml-7">Update Profile</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;