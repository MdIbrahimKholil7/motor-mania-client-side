import React from 'react';
import Banner from './Banner';
import Engine from './Engine';
import HeaderProduct from './HeaderProduct';
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
        </div>
    );
};

export default Home;