import React from 'react';
import Banner from './Banner';
import Engine from './Engine';
import HeaderProduct from './HeaderProduct';
import Helmet from './Helmet';
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
        </div>
    );
};

export default Home;