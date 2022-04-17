import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;

    const navigate = useNavigate();
    const navigateToCheckOut = id => {
        navigate(`/service/${id}`);
    }
    return (

        <div className="col d-flex justify-content-center">
            <div className="card bg-secondary shadow-lg text-white card-style" >
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">${price}</p>
                </div>
                <button onClick={() => navigateToCheckOut(id)} className='btn btn-primary'>Book Now</button>
            </div>
        </div>



    );
};

export default Service;