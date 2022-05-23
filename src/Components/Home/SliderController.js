import React from 'react';

const SliderController = ({title,chevronIcon}) => {
    console.log(title,chevronIcon)
    return (
        <div>
            <div className='flex justify-between items-center  mb-9'>
                <div className=''>
                    <h1 className='text-3xl font-bold font '>{title}</h1>
                </div>
                <div className='md:block hidden'>
                    {
                        chevronIcon
                    }
                </div>
            </div>

        </div>
    );
};

export default SliderController;