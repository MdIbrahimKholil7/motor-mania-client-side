import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, NavLink } from 'react-router-dom';
import auth from '../../firebase_init';
import TopBar from './TopBar';

const Navbar = ({ children }) => {
    const [user] = useAuthState(auth)
    const menu = [
        { name: 'Home', to: '/' },
        { name: 'Dashboard', to: '/dashboard/myProfile' },
        { name: 'Blog', to: '/blog' },
        { name: 'About Us', to: '/about' },
        { name: 'My Portfolio', to: '/myPortfolio' },

    ]
    const location = useLocation()

    return (
        <nav className=' '>
            {/* <TopBar/> */}
            <div className="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar  */}
                    <div className="w-full navbar bg-white">
                        {/* dashboard sidebar menu openar  */}
                        {
                            location.pathname.includes('dashboard') && <label for="dashboard-sidebar" className="btn drawer-button lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                        }

                        <div className="flex-1 text-4xl font-bold font">Parts<span className='text-primary '>Mania</span></div>
                        <div className="flex-none lg:hidden">
                            <label for="my-drawer-3" className="btn btn-square btn-ghost m-0 border-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>

                        <div className="flex-none hidden lg:block ">
                            <ul className="menu menu-horizontal items-center gap-x-3">
                                {/* Navbar menu content here  */}
                                {
                                    menu.map(({ name, to }, index) => <NavLink
                                        className={({ isActive }) => isActive ? 'text-red-500' : ''}
                                        key={index}
                                        to={to}>
                                        <li className='font-bold lg:text-[18px] xl:text-2xl'>
                                            {name}
                                        </li>
                                    </NavLink>
                                    )
                                }


                                {
                                    user ? <button onClick={() => signOut(auth)} className='btn rounded-full bg-primary text-white '>LogOut</button> : <li className='font-bold p-0 hover:bg-none lg:text-[18px] xl:text-2xl'><Link to='/login'>Login</Link></li>
                                }

                            </ul>
                        </div>
                    </div>
                    {/* Page content here 
                    Content */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-3" className="drawer-overlay"></label>
                    {/* <div className="flex-1 text-4xl font-bold font">Parts<span className='text-primary '>Mania</span></div> */}
                   
                    <ul className="menu items-center pt-14 p-4 overflow-y-auto w-80 bg-base-100">
                        {/* Sidebar content here  */}
                        {
                            menu.map(({ name, to }, index) => <NavLink
                                className={({ isActive }) => isActive ? 'text-red-500 my-5' : 'my-5'}
                                key={index}
                                to={to}>
                                <li>
                                    {name}
                                </li>
                            </NavLink>
                            )
                        }

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;