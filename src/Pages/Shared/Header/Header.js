import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-dark sticky-top">
            <div className="container">
                <Link className="navbar-brand fst-italic fw-bold text-white fs-1" to="/">Wed_Bird</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item">
                            <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="home#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;