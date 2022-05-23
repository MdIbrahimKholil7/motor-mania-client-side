import React from 'react';
import google from '../../assets/images/search 1.png'
import facebook from '../../assets/images/Vector.png'
const Social = () => {
    return (
        <div>
            <div class="flex flex-col w-full border-opacity-50">
                <div class="divider">OR</div>
            </div>
            <div class="form-control mt-6">
                <button class="btn hover:bg-white bg-white text-black"
                ><img className=' mr-3' src={google} alt="google" /> Login With Google</button>
            </div>
            <div class="form-control mt-6">
                <button class="btn hover:bg-white bg-white text-black"><img className=' mr-3' src={facebook} alt="google" /> Login With Facebook</button>
            </div>
        </div>
    );
};

export default Social;