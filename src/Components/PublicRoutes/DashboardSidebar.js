import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
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
                    <li className='font font-bold text-xl'><Link to='/dashboard'>My Profile</Link></li>
                    {
                       !admin && <>
                            <li className='font font-bold text-xl'><Link to='/dashboard/myOrder'>My Order</Link></li>
                            <li className='font font-bold text-xl'><Link to='/dashboard/addReview'>Add Review</Link></li>
                        </>
                    }
                    {
                        admin && <>
                          
                            <li className='font font-bold text-xl'><Link to='/dashboard/manageProduct'>Manage Product</Link></li>
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