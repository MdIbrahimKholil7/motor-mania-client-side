import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ elem }) => {
    const [detail, setDetail] = useState('')
    const [lessDetails, setLessDetail] = useState('')
    const [open,setOpen]=useState(true)
    const { img, servicenName, price, quantity, desc,_id } = elem
    console.log(elem)
    const navigate=useNavigate()
    useEffect(() => {
        const details = desc.length > 70 ? `${desc.slice(0, 69)}...` : desc
        setLessDetail(details)
        setDetail(details)
    }, [desc])
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
            <div class="card lg:max-w-lg bg-base-100 shadow-2xl">
                <figure class="px-10 pt-10">
                    <img src={img} class="rounded-xl h-48" alt={servicenName}/>
                </figure>
                <div class="card-body text-left  items-start">
                    <h2 class="card-title pl-0">{servicenName}</h2>
                    <p className='p-0'>{detail}</p>
                    <>{open ? showMorebtn:showLessbtn}</>
                    <p className='p-0'>Available:{quantity}</p>
                    <p className='p-0'>Price:${price}</p>
                    <div class="card-actions">
                        <button onClick={()=>navigate(`/privateRoute/${_id}`)} class="btn btn-primary">Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;