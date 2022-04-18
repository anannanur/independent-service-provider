import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const {serviceId} = useParams()
    return (
        <div className='bg-dark py-5'>
            <h1 className='text-white text-center'>This is checkout: {serviceId}</h1>
        </div>
    );
};

export default CheckOut;