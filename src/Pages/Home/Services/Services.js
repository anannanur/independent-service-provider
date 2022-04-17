import React, { useState, useEffect } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id="services" className='service-container py-5'>
            <h1>Services:{services.length}</h1>
            <div className="container ">
                <div className="container">
                        <div className="row row-cols-1 row-cols-md-3 g-5">
                        {
                            services.map(service => <Service key={service.id} service={service}></Service>)
                        }
                    </div>
                     
                </div>
            </div>
        </div>
    );
};

export default Services;