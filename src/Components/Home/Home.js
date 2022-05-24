import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Bussiness from './Bussiness';
import Engine from './Engine';
import HeaderProduct from './HeaderProduct';
import Headlight from './Headlight';
import Helmet from './Helmet';
import Parts from './Parts';
import Services from './Services';
import ShippingDetails from './ShippingDetails';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <HeaderProduct/>
            <ShippingDetails/>
            <Services/>
            <Engine/>
            <Helmet/>
            <Headlight/>
            <Parts/>
            <Bussiness/>
            <Testimonials/>
            
        </div>
    );
};

export default Home;