import React from 'react';
import google from '../../assets/images/search 1.png'
import facebook from '../../assets/images/Vector.png'
import auth from '../../firebase_init';
import { useSignInWithGoogle, useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { useNavigate } from 'react-router-dom';
const Social = () => {
    const [signInWithGoogle,gUser, loading, error] = useSignInWithGoogle(auth);
    // console.log(user)
    let err;
    if(loading){
        return <Loading/>
    }
    if(error){
       return err=<p className='text-red-500 py-4'>{error?.message}</p>
    }
    return (
        <div>
            {err}
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
            </div>
            <div onClick={()=>signInWithGoogle()} className="form-control mt-6">
                <button className="btn hover:bg-white bg-white text-black"
                ><img className=' mr-3' src={google} alt="google" /> Login With Google</button>
            </div>
            <div className="form-control mt-6">
                <button className="btn hover:bg-white bg-white text-black"><img className=' mr-3' src={facebook} alt="google" /> Login With Facebook</button>
            </div>
        </div>
    );
};

export default Social;