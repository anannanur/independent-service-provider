import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {

    // signout process added 
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{backgroundColor:'rgba(1,1,1,.8)',borderBottom:'2px dotted #ea8685'}}>
            <div className="container">
                <Link className="navbar-brand fw-bold fs-1" style={{color:'#ea8685'}} to="/">Wed_Bird</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item">
                            <Link className="nav-link fw-bold fs-5 me-1" aria-current="page" style={{color:'#ea8685'}} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold fs-5 me-1" style={{color:'#ea8685'}} to="/about">About</Link>
                        </li>
                        {/* if user logged in  */}
                        {
                            user ?
                                <button onClick={handleSignOut} className='ms-2 fw-bold fs-5 btn' style={{backgroundColor:'#ea8685'}}>Sign Out</button>
                                :
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold fs-5" style={{color:'#ea8685'}} to="/login">Login</Link>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;