import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import axiosPrivate from '../../api/axiosPrivate'
import fetcher from '../../api/fetcher';
const CheckoutForm = ({ order }) => {

    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const { name, total, email, id, available, quantity, _id } = order || {}
    /* console.log(stripe)
    console.log(elements) */
    console.log(clientSecret)
    useEffect(() => {
        (async () => {
            const { data } = await axiosPrivate.post(`http://localhost:5000/create-payment-intent`, { price: total })
            console.log(data)
            setClientSecret(data.clientSecret)
        })()
    }, [total])
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setErr(error?.message || '')
        setSuccess('');
        // setProcessing(true);
        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setErr(intentError?.message)
        } else {
            setErr('')
            const details = {
                id,
                _id,
                available: available - quantity,
                transactionId: paymentIntent.id,
                name,
                email
            }

            console.log(paymentIntent)

            /*  (async () => {
                
             })()
         setSuccess(paymentIntent.id) */

            await fetch('http://localhost:5000/payment-complete', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(details)
            })
                .then(res => res.json())
                .then(data => console.log(data))


        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '13px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn mt-5 text-white hover:bg-[#12196cfa] bg-[#12196cfa]' type="submit" disabled={!stripe || !elements || !clientSecret}>
                    Pay
                </button>
                {
                    err && <small className='text-red-500 mt-3 block'>{err}</small>
                }
                {
                    success && <small className='text-green-500 mt-3'>{success}</small>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;