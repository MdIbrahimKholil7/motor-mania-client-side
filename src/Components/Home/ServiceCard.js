import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ elem }) => {
    const [detail, setDetail] = useState('')
    const [lessDetails, setLessDetail] = useState('')
    const [open,setOpen]=useState(true)
    const { img, servicenName, price, quantity, desc,_id } = elem
   
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
            <div className="card lg:max-w-lg bg-base-100 shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src={img} className="rounded-xl h-48" alt={servicenName}/>
                </figure>
                <div className="card-body text-left  items-start">
                    <h2 className="card-title pl-0">{servicenName}</h2>
                    <p className='p-0'>{detail}</p>
                    <>{open ? showMorebtn:showLessbtn}</>
                    <p className='p-0'>Available:{quantity}</p>
                    <p className='p-0'>Price:${price}</p>
                    <div className="card-actions">
                        <button onClick={()=>navigate(`/privateRoute/${_id}`)} className="btn btn-primary">Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;