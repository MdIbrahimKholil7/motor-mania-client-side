import React from 'react';
import Banner from './Banner';
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
        </div>
    );
};

export default Home;