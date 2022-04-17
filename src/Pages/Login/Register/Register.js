import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const userNameRef = useRef('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate(`/login`);
    }
    const handleSubmit = event => {
        event.preventDefault();
        const name = userNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);
    }

    if(user){
        navigate('/home');
    }
    return (

        <div className="container">
            <div className='w-50 py-5 mx-auto'>
                <h1 className='text-center pt-3'>Please Register</h1>
                <form className='w-75 mx-auto pb-5' onSubmit={handleSubmit}>
                    <div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input type="text" ref={userNameRef} className="form-control" id="exampleInputName" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" ref={passwordRef} className="form-control" id="exampleInputPassword1" required />
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