import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const userNameRef = useRef('');

    // email verification system done 
    const [
        createUserWithEmailAndPassword,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // when user will register,his profile will be updated 
    const [updateProfile] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate(`/login`);
    }

    // when user registers, his profile will be updated  
    const handleSubmit = async (event) => {
        event.preventDefault();
        const displayName = userNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
        alert('upadated profile');
        navigate('/home');
    }

    // error handling 
    let errorMessage;
    if (error) {
        errorMessage = <div className='d-flex justify-content-center w-50 mx-auto'>
            <p className='text-danger fw-bold'>{error.message}</p>
        </div>
    }


    return (
        <div className="bg-dark py-5 text-white">
            <div className="container">
                <div className='col-12 w-75 py-5 mx-auto shadow-lg'>
                    <h1 className='text-center pt-3'>Please Register</h1>
                    <form className='w-50 mx-auto pb-5' onSubmit={handleSubmit}>
                        <div>
                            <SocialLogin></SocialLogin>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input type="text" ref={userNameRef} className="form-control" id="exampleInputName" />
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
                            <div className="d-grid mt-4 mb-3">
                                <button type="submit" style={{ backgroundColor: '#ea8685' }} className="btn text-white fw-bold rounded-pill">Register Here</button>
                            </div>
                            {errorMessage}
                        </div>
                        <p>Already have an account? <Link onClick={navigateLogin} style={{ color: '#ea8685' }} to="/login" className='text-decoration-none pe-auto'>Please Login</Link></p>

                    </form>
                </div>

            </div>
        </div>

    );
};

export default Register;