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
            <div className="card shadow-lg card-style bg-dark">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body bg-dark text-center">
                    <h4 className="p-2 fw-bold text-danger" style={{ color: '#ee7775' }}>{name}</h4>
                    <p className="card-text text-secondary">{description}</p>
                    <p className="card-text text-warning fw-bold">${price}</p>
                </div>
                {/* when user logged in and click here,he will be sent to checkout page  */}
                <button onClick={() => navigateToCheckOut(id)} className='btn btn-danger'>Book Now</button>
            </div>
        </div>



    );
};

export default Service;