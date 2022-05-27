import React from 'react';
import { SearchIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/solid'
const TopBar = () => {
    return (
        <div >
            <div className=" w-full px-4">
                <div className=" pt-4  rounded-box flex flex-row justify-evenly items-center">
                    <div className="form-control">
                        <label className="input-group ">
                            <input type="text" placeholder="Search" className="input input-bordered focus:outline-none" />
                            <span className='bg-primary cursor-pointer text-white'>
                                <SearchIcon
                                    className='w-5 h-5 '
                                />
                            </span>
                        </label>
                    </div>
                    <div className=''>
                        <div className="avatar placeholder items-center">
                            <div className="bg-primary text-white rounded-full w-10">
                                <span className=''>
                                    <UserIcon
                                        className='w-5 h-5'
                                    />
                                </span>
                            </div>
                            <h1 className='ml-2 font-bold font text-[18px]'>My Profile</h1>
                        </div>
                        <div className="avatar placeholder items-center ml-9">
                            <div className="bg-primary text-white rounded-full w-10">
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
            {/* <div className="divider m-0 pt-3"></div> */}
        </div>
    );
};

export default TopBar;