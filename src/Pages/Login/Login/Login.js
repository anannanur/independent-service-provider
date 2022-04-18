import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    // to send user from which page he came 
    let from = location?.state?.from.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    // error handling 
    let errorMessage;
    if (error) {
        errorMessage = <div className='d-flex justify-content-center w-50 mx-auto'>
            <p className='text-danger fw-bold'>{error.message}</p>
        </div>
    }

    if (loading || sending) {
        return <Loading></Loading>
    }
    const navigateRegister = event => {
        navigate(`/register`);
    }
    // if user forget his password 
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please give your email address');
        }

    }
    return (
        <div className='bg-dark text-white py-5'>
            <div className="container">
                <div className='col-12 w-75 mt-3 mx-auto pb-5 shadow-lg'>
                    <h1 className='text-center pt-3'>Please Login</h1>
                    <form className='w-50 mx-auto' onSubmit={handleSubmit}>
                        <SocialLogin></SocialLogin>
                        <div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" required />
                            </div>
                            <div className='my-4 d-grid'>
                                <button type="submit" style={{ backgroundColor: '#ea8685' }} className="btn rounded-pill text-white fw-bold">Login Here</button>
                            </div>
                        </div>
                        <p className='mt-2'>New to Wed_Birds? <Link onClick={navigateRegister} to="/register" className='text-decoration-none pe-auto' style={{ color: '#ea8685' }}>Please Register</Link></p>
                        <div className='d-flex'>
                            <p className='mt-2'>Forgot Password?</p>
                            <button onClick={resetPassword} className='btn btn-link pt-0 mt-0 text-decoration-none' style={{ color: '#ea8685' }}>Please Reset</button>
                        </div>
                    </form>
                    {errorMessage}
                    <ToastContainer />
                </div>

            </div>

        </div>
    );
};

export default Login;