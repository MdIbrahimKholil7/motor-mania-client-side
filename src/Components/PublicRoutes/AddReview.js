import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { useForm } from "react-hook-form";
import fetcher from '../../api/fetcher';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';
import axiosPrivate from '../../api/axiosPrivate';
import Loading from '../Shared/Loading';
const AddReview = () => {
    const [ratings, setRating] = useState('')
    const [users, setUser] = useState('')
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    console.log(users)
    const [user] = useAuthState(auth)
    useEffect(() => {
        (async () => {
            const { data } =await axiosPrivate.get(`http://localhost:5000/get-profile-data?email=${user?.email}`)
          
                setUser(data)
        })()
    }, [user])
    if(loading){
        return <Loading/>
    }
    const handleStar = rating => {
        setRating(rating)
    }
    const onSubmit = async (data) => {
        setLoading(true)
        const { review } = data
        const usrReview={
            desc:review,
            ratings,
            img:users.imgUrl,
            email:user?.email,
            name:user?.displayName,
            address:users.address
        }
        fetcher.put(`add-review?email=${user?.email}`,usrReview)
         .then(res=>{
            setLoading(false)
            console.log(res)
           return res.json()}) 

        /*    fetch(`http://localhost:5000/add-review/`,{
               method:'PUT',
               headers:{
                   'content-type':'application/json'
               },
               body:JSON.stringify(usrReview)
           })
           .then(res=>res.json())
           .then(data=>console.log(data)) */
        reset()
    }
    return (
        <div className='bg-base-200 min-h-screen'>
            <div>
                <h1 className='text-2xl text-center font font-bold my-9'>Add Your Review</h1>
                <div className='w-[70%] mx-auto '>
                    <div className=''>
                        <ReactStars
                            count={5}
                            onChange={handleStar}
                            size={24}
                            activeColor="#ffd700"
                        />,
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='w-full'
                    >
                        <div class="form-control">
                            <textarea
                                class="textarea w-full textarea-bordered h-24"
                                placeholder="Add review"
                                {...register("review", {
                                    required: {
                                        value: true,
                                        message: 'Please add your review'
                                    },

                                })}

                            ></textarea>
                            {
                                errors?.review?.type === 'required' && <label className="label">
                                    {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                                </label>
                            }
                        </div>
                        <button className='btn bg-slate-600 text-white mt-5 block mx-auto'>Add Review</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;