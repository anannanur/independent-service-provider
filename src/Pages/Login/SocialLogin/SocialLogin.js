import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google.png';
import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();

    // to send user from which page he came 
    let from = location?.state?.from.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    // error handling 
    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger text-center fw-bold mt-2'>{error?.message}</p>
    }
    if(loading){
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='text-center mt-4 mb-4'>
                <button onClick={() => signInWithGoogle()} style={{ backgroundColor: '#ea8685' }} className='rounded-pill btn fw-bold text-white w-50 mx-auto'>
                    <img src={google} className="me-2" alt="" />
                    <span>
                        Google Sign In
                    </span>
                </button>
                {errorMessage}
            </div>
        </div>
    );

};

export default SocialLogin;