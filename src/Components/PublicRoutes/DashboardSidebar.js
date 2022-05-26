import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase_init';
import useAdmin from '../../hooks/useAdmin';

const DashboardSidebar = ({ children }) => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile z-40">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col  min-h-screen">
                {/*  <!-- Page content here --> */}
                {children}
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div class="drawer-side shadow-xl">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto  bg-base-100 w-[220px] text-base-content">
                    {/*  <!-- Sidebar content here --> */}
                    <li className='font font-bold text-xl'><Link to='/dashboard'>My Profile</Link></li>
                    {
                       !admin && <>
                            <li className='font font-bold text-xl'><Link to='/dashboard/myOrder'>My Order</Link></li>
                            <li className='font font-bold text-xl'><Link to='/dashboard/addReview'>Add Review</Link></li>
                        </>
                    }
                    {
                        admin && <>
                          
                            <li className='font font-bold text-xl'><Link to='/dashboard/manageAllUser'>Manage User</Link></li>
                            <li className='font font-bold text-xl'><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                            <li className='font font-bold text-xl'><Link to='/dashboard/manageAllOrder'>Manage All Order</Link></li>
                            <li className='font font-bold text-xl'><Link to='/dashboard/addProduct'>Add Product</Link></li>
                           
                        </>
                    }



                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;