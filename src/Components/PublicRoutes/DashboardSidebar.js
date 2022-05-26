import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSidebar = ({children}) => {
    return (
        <div class="drawer drawer-mobile z-40">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col px-4 min-h-screen">
               {/*  <!-- Page content here --> */}
               {children}
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div class="drawer-side shadow-xl">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto  bg-base-100 w-[220px] text-base-content">
                   {/*  <!-- Sidebar content here --> */}
                    <li className='font font-bold text-xl'><Link to='/dashboard'>My Profile</Link></li>
                    <li className='font font-bold text-xl'><Link to='/dashboard/myOrder'>My Order</Link></li>
                    <li className='font font-bold text-xl'><Link to='/dashboard/addReview'>Add Review</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;