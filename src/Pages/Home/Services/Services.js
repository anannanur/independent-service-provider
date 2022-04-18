import React, { useState, useEffect } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    // loading services data 
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id="services" className='service-container bg-dark py-5'>
            <div className='title pb-3'>
                <h1 className='text-center fw-bold fs-1'>My Services</h1>
            </div>
            <div className="container py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-5">
                        {/* /* passing single data to service component */}
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