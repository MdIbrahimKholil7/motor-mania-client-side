import { FlagIcon } from '@heroicons/react/solid';
import React from 'react';
import { FaFlag, FaUserFriends, FaCompass, FaRegBookmark } from 'react-icons/fa';
const Bussiness = () => {
    return (
        <div>
            <div class="stats rounded-none py-9 shadow gradient w-full">
                <div class="stat">
                    < FaFlag
                        className='text-3xl text-center'
                    />

                    <div class="stat-title">Countries</div>
                    <div class="stat-value">20+</div>

                </div>

                <div class="stat">
                    < FaCompass
                        className='text-3xl text-center'
                    />
                    <div class="stat-title">Order Complete</div>
                    <div class="stat-value">4,200+</div>

                </div>

                <div class="stat">
                    < FaUserFriends
                        className='text-3xl text-center'
                    />
                    <div class="stat-title">Happy Client</div>
                    <div class="stat-value">1000K +</div>

                </div>
                <div class="stat items-center">
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