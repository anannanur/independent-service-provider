import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google.png';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorMessage;

    if (error) {
        errorMessage =
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
    }
    if (user) {
        navigate('/home');
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            {errorMessage}
            <button onClick={() => signInWithGoogle()} className='btn btn-primary text-white w-50 mx-auto'>
                <img src={google} className="me-2" alt="" />
                <span>
                    Google Sign In
                </span>
            </button>
        </div>
    );

};

export default SocialLogin;