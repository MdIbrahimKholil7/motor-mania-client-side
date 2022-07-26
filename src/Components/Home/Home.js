import React, { Suspense } from 'react';
import loading from '../../assets/images/loading (1).gif'
const Footer = React.lazy(() => import('../Shared/Footer'))
const Banner = React.lazy(() => import('./Banner'))
const Bussiness = React.lazy(() => import('./Bussiness'))
const Engine = React.lazy(() => import('./Engine'))
const HeaderProduct = React.lazy(() => import('./HeaderProduct'))
const Headlight = React.lazy(() => import('./Headlight'))
const Helmet = React.lazy(() => import('./Helmet'))
const Parts = React.lazy(() => import('./Parts'))
const Services = React.lazy(() => import('./Services'))
const ShippingDetails = React.lazy(() => import('./ShippingDetails'))
const Testimonials = React.lazy(() => import('./Testimonials'))


const Home = () => {
    return (
        <div className=''>
            <Suspense fallback={<div><img className='w-full h-screen' src={loading} alt="loading" /></div>}>
                <Banner />
                <HeaderProduct />
                <ShippingDetails />
                <div className='app'>
                    <Services />
                    <Engine />
                    <Helmet />
                </div>
                <Headlight />
                <div className='app'>
                    <Parts />
                </div>
                <Bussiness />
                <div className='app my-40'>
                    <Testimonials />
                </div>
            </Suspense>

        </div>
    );
};

export default Home;