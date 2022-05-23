import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from './TopBar';

const Navbar = ({children}) => {
    const menu = [
        { name: 'Home', to: '/' },
        { name: 'Dashboard', to: '/dashboard' },
        { name: 'Blog', to: '/blog' },
        { name: 'About', to: '/about' },
        { name: 'Login', to: '/login' },
        
    ]
    return (
        <nav className=' '>
            {/* <TopBar/> */}
            <div class="drawer">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    {/* Navbar  */}
                    <div class="w-full navbar">
                        <div class="flex-1 text-4xl font-bold font">Parts<span className='text-primary '>Mania</span></div>
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>

                        <div class="flex-none hidden lg:block ">
                            <ul class="menu menu-horizontal items-center gap-x-3">
                                {/* Navbar menu content here  */}
                                {
                                    menu.map(({ name, to }, index) => <Link
                                        key={index}
                                        to={to}>
                                        <li className='font-bold lg:text-[18px] xl:text-2xl'>
                                            {name}
                                        </li>
                                    </Link>
                                    )
                                }
                                <li>
                                    <div class="dropdown dropdown-end dropdown-hover p-0 pr-4">
                                        <label className='font-bold relative lg:text-[18px] xl:text-2xl shop ' tabindex="0">Shop</label>
                                        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-36">
                                            <li><a>Item 1</a></li>
                                            <li><a>Item 2</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Page content here 
                    Content */}
                    {children}
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {/* Sidebar content here  */}
                        {
                            menu.map(({ name, to }, index) => <Link
                                key={index}
                                to={to}>
                                <li>
                                    {name}
                                </li>
                            </Link>
                            )
                        }

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;