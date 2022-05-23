import { FlagIcon } from '@heroicons/react/solid';
import React from 'react';
import { FaFlag, FaUserFriends, FaCompass, FaRegBookmark } from 'react-icons/fa';
const Bussiness = () => {
    return (
        <div>
            <div class=" grid sm:grid-cols-2 md:grid-cols-4 justify-items-center rounded-none py-9 shadow gradient w-full px-9">
                <div class="stat pl-20 md:pl-0">
                    < FaFlag
                        className='text-3xl text-center'
                    />

                    <div class="stat-title">Countries</div>
                    <div class="stat-value">20+</div>

                </div>

                <div class="stat pl-20 md:pl-0">
                    < FaCompass
                        className='text-3xl text-center'
                    />
                    <div class="stat-title">Order Complete</div>
                    <div class="stat-value">4,200+</div>

                </div>

                <div class="stat pl-20 md:pl-0 ">
                    < FaUserFriends
                        className='text-3xl text-center'
                    />
                    <div class="stat-title">Happy Client</div>
                    <div class="stat-value">1000K +</div>

                </div>
                <div class="stat pl-20 md:pl-0 items-center">
                    < FaRegBookmark
                        className='text-3xl text-center'
                    />
                    <div class="stat-title">Feedbacks</div>
                    <div class="stat-value">3000K +</div>

                </div>

            </div>
        </div>
    );
};

export default Bussiness;