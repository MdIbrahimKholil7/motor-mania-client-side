import React from 'react';
import { SearchIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/solid'
const TopBar = () => {
    return (
        <div >
            <div class=" w-full px-4">
                <div class=" pt-4 card rounded-box flex flex-row justify-evenly items-center">
                    <div class="form-control">
                        <label class="input-group ">
                            <input type="text" placeholder="Search" class="input input-bordered focus:outline-none" />
                            <span className='bg-primary cursor-pointer text-white'>
                                <SearchIcon
                                    className='w-5 h-5 '
                                />
                            </span>
                        </label>
                    </div>
                    <div className=''>
                        <div class="avatar placeholder items-center">
                            <div class="bg-primary text-white rounded-full w-10">
                                <span className=''>
                                    <UserIcon
                                        className='w-5 h-5'
                                    />
                                </span>
                            </div>
                            <h1 className='ml-2 font-bold font text-[18px]'>My Profile</h1>
                        </div>
                        <div class="avatar placeholder items-center ml-9">
                            <div class="bg-primary text-white rounded-full w-10">
                                <span className=''>
                                    <ShoppingCartIcon
                                        className='w-5 h-5'
                                    />
                                </span>
                            </div>
                            <h1 className='ml-2 font-bold font text-[18px]'>Cart</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider m-0 pt-3"></div>
        </div>
    );
};

export default TopBar;