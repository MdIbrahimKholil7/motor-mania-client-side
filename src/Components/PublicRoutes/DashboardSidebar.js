import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  NavLink } from 'react-router-dom';
import auth from '../../firebase_init';
import useAdmin from '../../hooks/useAdmin';

const DashboardSidebar = ({ children }) => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile z-40">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col  min-h-screen">
                {/*  <!-- Page content here --> */}
                {children}
                
            </div>
            <div className="drawer-side shadow-xl">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto  bg-base-100 w-[220px] text-base-content">
                    {/*  <!-- Sidebar content here --> */}
                    <li className='font font-bold text-xl'><NavLink
                    className={({isActive})=>isActive?'text-red-500':''}
                     to='/dashboard/myProfile'>My Profile</NavLink></li>
                    {
                       !admin && <>
                            <li className='font font-bold text-xl'><NavLink
                              className={({isActive})=>isActive?'text-red-500':''}
                            to='/dashboard/myOrder'>My Order</NavLink></li>
                            <li className='font font-bold text-xl'><NavLink 
                              className={({isActive})=>isActive?'text-red-500':''}
                            to='/dashboard/addReview'>Add Review</NavLink></li>
                        </>
                    }
                    {
                        admin && <>
                          
                            <li className='font font-bold text-xl'><NavLink
                             className={({isActive})=>isActive?'text-red-500':''}
                            to='/dashboard/manageProduct'>Manage Product</NavLink></li>
                            <li className='font font-bold text-xl'><NavLink
                             className={({isActive})=>isActive?'text-red-500':''}
                            to='/dashboard/makeAdmin'>Make Admin</NavLink></li>
                            <li className='font font-bold text-xl'><NavLink
                             className={({isActive})=>isActive?'text-red-500':''}
                            to='/dashboard/manageAllOrder'>Manage All Order</NavLink></li>
                            <li className='font font-bold text-xl'><NavLink
                             className={({isActive})=>isActive?'text-red-500  bg-base-100':''}
                            to='/dashboard/addProduct'>Add Product</NavLink></li>
                           
                        </>
                    }



                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;