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

    let from = location?.state?.from.pathname || "/";

    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger'>Error: {error.message}</p>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading || sending) {
        return <Loading></Loading>
    }
    const navigateRegister = event => {
        navigate(`/register`);
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please give your email address');
        }

    }
    return (
        <div className="container">
            <div className='w-50 py-5 mx-auto'>
                <h1 className='text-center pt-3'>Please Login</h1>
                <form className='w-75 mx-auto pb-5' onSubmit={handleSubmit}>
                    <div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" required />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    {errorMessage}
                    <p>New to Wed_Bird? <Link onClick={navigateRegister} to="/register" className='text-primary text-decoration-none pe-auto'>Please Register</Link></p>
                    <p>Forgot Password? <button onClick={resetPassword} className='btn btn-link'>Please Reset</button></p>

                </form>

                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>

        </div>
    );
};

export default Login;