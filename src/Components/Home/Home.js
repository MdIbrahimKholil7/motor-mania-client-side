import React from 'react';
import Banner from './Banner';
import Bussiness from './Bussiness';
import Engine from './Engine';
import HeaderProduct from './HeaderProduct';
import Headlight from './Headlight';
import Helmet from './Helmet';
import Parts from './Parts';
import Services from './Services';
import ShippingDetails from './ShippingDetails';

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
        </div>
    );
};

export default Home;