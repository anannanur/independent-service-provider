import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
    }
    const navigateLogin = event => {
        navigate(`/login`);
    }
    return (

        <div className="container">
            <div className='w-50 py-5 mx-auto'>
                <h1 className='text-center pt-3'>Please Register</h1>
                <form className='w-75 mx-auto pb-5' onSubmit={handleSubmit}>
                    <div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input type="text" className="form-control" id="exampleInputName" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" required />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    <p>Already have an account? <Link onClick={navigateLogin} to="/login" className='text-primary text-decoration-none pe-auto'>Please Login</Link></p>
                </form>
            </div>
        </div>

    );
};

export default Register;