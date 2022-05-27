import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import fetcher from '../../api/fetcher';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_stripe_key);
const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/get-payment/${id}`
    const { data, isLoading } = useQuery('get-order', () => fetcher.get(url))
    const { productName, price, total, quantity, img } = data?.data || {}
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div className="card md:w-96 w-80  glass mt-7 mb-14">
                <div>
                    <img className='w-40 rounded-lg mx-auto object-cover' src={img} alt="" />
                    <div className='pl-5'>
                        <h1 className='text-xl font font-bold'>{productName}</h1>
                        <p className='text-[16px] p-0 my-2 text-black font font-bold '>Price: ${price}</p>
                        <p className='text-[16px] p-0 my-2 text-black font font-bold '>Quantity: {quantity}</p>
                        <p className='text-[16px] p-0 my-2 text-black font font-bold '>Total: ${total}</p>
                    </div>
                </div>
                <div className="card-body">
                    <div className="card p-0 w-[90%] shadow-2xl pt-4 bg-base-100">
                        <div className="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm 
                                order={data?.data}
                                />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;