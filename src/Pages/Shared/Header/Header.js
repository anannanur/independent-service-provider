import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }
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
                        {
                            user ?
                                <button onClick={handleSignOut} className='btn btn-primary'>Sign Out</button>
                                :
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/login">Login</Link>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;