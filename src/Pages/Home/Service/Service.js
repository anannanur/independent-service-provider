import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const{name,img,description,price} = service;
    return (
       
            <div className="col d-flex justify-content-center">
                <div className="card bg-secondary shadow-lg text-white card-style" >
                    <img src={img} className="card-img-top"  alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text">${price}</p>
                        </div>
                        <button className='btn btn-primary'>Book Now</button>
                </div>
            </div>
           
            
       
    );
};

export default Service;