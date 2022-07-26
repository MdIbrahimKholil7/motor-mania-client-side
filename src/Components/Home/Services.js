import React, { useEffect, useState } from 'react';
import fetcher from '../../api/fetcher';
import tank from '../../assets/images/fuel-tank.png'
import silencer from '../../assets/images/silencer.png'
import ServiceCard from './ServiceCard';
const Services = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        (async () => {
            const get = await fetcher.get('service-get')
            setData(get.data)
        })()
    }, [])
    console.log(data)
    return (
        <div className='app'>
            <div className='px-4'>
                <h1 className='text-center font-bold text-primary font text-3xl mb-16'>Get Bike Parts</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-9'>
                    {
                        data.map((elem, index) => <ServiceCard
                            key={index}
                            elem={elem}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;