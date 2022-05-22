import React, { useEffect, useState } from 'react';

const ServiceCard = ({ elem }) => {
    const [detail, setDetail] = useState('')
    const [lessDetails, setLessDetail] = useState('')
    const [open,setOpen]=useState(true)
    const { img, servicenName, price, quantity, desc } = elem

    useEffect(() => {
        const details = desc.length > 70 ? `${desc.slice(0, 69)}...` : desc
        setLessDetail(details)
        setDetail(details)
    }, [desc])
    console.log(elem)
    const showMore=()=>{
        setDetail(desc)
        setOpen(false)
    }
    const showLess=()=>{
        setDetail(lessDetails)
        setOpen(true)
    }
    const showMorebtn = <button className='text-gray-400' onClick={showMore}>Show More</button>
    const showLessbtn = <button className='text-gray-400' onClick={showLess}>Show Less</button>

    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} class="rounded-xl h-48" alt={servicenName}/>
                </figure>
                <div class="card-body text-left  items-start">
                    <h2 class="card-title">{servicenName}</h2>
                    <p className='p-0'>{detail}</p>
                    <>{open ? showMorebtn:showLessbtn}</>
                    <p>Available:{quantity}</p>
                    <p>Price:${price}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;