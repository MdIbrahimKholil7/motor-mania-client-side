import React from 'react';
import notFound from '../../assets/images/notFound.png'
const NotFound = () => {
    return (
        <div>
            <div className='w-full h-screen'>
                <img className='w-full h-full' src={notFound} alt="notfound" />
            </div>
        </div>
    );
};

export default NotFound;