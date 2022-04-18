import React from 'react';

const Loading = () => {
    return (

        <div style={{height:'520px'}}className='bg-dark d-flex align-items-center justify-content-center py-4'>
            <div className="spinner-grow text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    );
};

export default Loading;