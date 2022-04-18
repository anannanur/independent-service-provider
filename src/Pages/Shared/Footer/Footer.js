import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='bg-dark text-center text-white py-5 footer-style'>
            <div className="container">
                <div className="row pt-3">
                    <div className="col-md-12 text-center text-white">
                        <h2 style={{color:'#ea8685'}}>Web_Birds</h2>
                        <p>Copyright &copy; 2022 <span style={{color:'#ea8685'}}>Wed_Birds</span></p>
                        <small>All rights reserved</small>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;