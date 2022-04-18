import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-dark py-5'>
            <div className='container pb-5'>
                <div className="row mt-5 d-flex justify-content-center align-items-center">
                    <div className="col-md-4 shadow-lg p-3">
                        <h4 style={{ color: '#2bcbba' }}>1. Authentication vs Authorization</h4>
                        <p className='text-muted'><span style={{ color: '#2bcbba' }}>Ans:</span> Authorization is a system implemented in an app that controls the informative access and limiting actions
                            performed by users. All users may not have same authorization. On the otherhand, Authentication is a procedure also
                            implemented in an app to check user's identity true or false. If the user's identity is true then he/she will allowed if not true
                            then he/she will not allowed to access the information or perform any action in that app.
                        </p>
                    </div>
                    <div className="col-md-4 shadow-lg p-3">
                        <h4 style={{ color: '#2bcbba' }}>2. Why are you using firebase? What other options do you have to implement authentication?</h4>
                        <p className='text-muted'><span style={{ color: '#2bcbba' }}>Ans:</span> Firebase is a development platform created by Google for building mobile and web applications, that provides
                            a plenty of features from hosting to database to analytics to authentication and much more. I am using firebase
                            because it's amusing features helped my apps to grow to the next level.
                            I have react-firebase-hooks to implement authentication which makes my code more easier and cleaner. Even 'auth0.com', 'okta.com'
                            can be alternative of using firebase to create authentication procedure in any app.</p>
                    </div>
                    <div className="col-md-4 shadow-lg p-3">
                        <h4 style={{ color: '#2bcbba' }}>3. What other services does firebase provide other than authentication?</h4>
                        <p className='text-muted'><span style={{ color: '#2bcbba' }}>Ans:</span> Not only authetication system but also Firebase provides multitude services which have made developers' life easier.
                            It's topmost functionalities are - Firebase Database, Firebase Cloud Storage, Firebase Cloud Messaging, Firebase Remote Config,
                            Firebase Analytics.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;