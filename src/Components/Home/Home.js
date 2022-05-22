import React from 'react';
import Banner from './Banner';
import HeaderProduct from './HeaderProduct';
import ShippingDetails from './ShippingDetails';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <HeaderProduct/>
            <ShippingDetails/>
        </div>
    );
};

export default Home;