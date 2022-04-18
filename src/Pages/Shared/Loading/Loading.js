import React from 'react';

const Loading = () => {
    return (
        <div style={{height:"300px"}} className='d-flex justify-content-center align-items-center w-100'>
            <div className="spinner-grow text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;