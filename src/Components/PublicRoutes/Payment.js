import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import fetcher from '../../api/fetcher';
import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams()
    const url=`http://localhost:5000/get-payment/${id}`
    const {data,isLoading}=useQuery('get-order', ()=>fetcher.get(url))
    console.log(data.data)
    const {productName,price,total,}=data.data || {}
    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <div class="card w-96 glass">
                <figure><img src="https://api.lorem.space/image/car?w=400&h=225" alt="car!" /></figure>
                <div class="card-body">
                    <div class="card w-full bg-base-100">
                        <div class="card-body">
                            <h2 class="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;