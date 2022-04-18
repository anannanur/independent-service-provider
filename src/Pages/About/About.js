import React from 'react';
import img from '../../images/about.png';
import './About.css';

const About = () => {
    return (
        <div className="bg-dark py-5">
            <div className="container py-5 d-md-flex justify-content-center">
                <div class="card mb-3 bg-dark text-white shadow-lg" style={{ maxWidth: "540px" }}>
                    <div className="row">
                        <div class="col-md-8">
                            <div class="card-body ms-1">
                                <h4 style={{ color: '#ea8685' }} class="fw-bold card-title mt-5">About me</h4>
                                <p class="card-text text-muted mt-1">Hi!! This is Humayra Nur Ananna, a web-development learner. Initially, I want to be a junior web developer. My future goal is to become a full stack web developer.</p>
                            </div>
                        </div>
                        <div class="col-md-4 img-responsive">
                            <img src={img} class="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;