import React from 'react';
import './Work.css';
import img1 from '../../../images/works/work-1.jpg';
import img2 from '../../../images/works/work-2.jpg';
import img3 from '../../../images/works/work-3.jpg';
import img4 from '../../../images/works/work-4.jpg';
import img5 from '../../../images/works/work-5.jpg';
import img6 from '../../../images/works/work-6.jpg';
import img7 from '../../../images/works/work-7.jpg';

const Works = () => {
    return (
        <div className="py-5" style={{backgroundColor: 'black'}}>
            <div className="container py-5">
                <div>
                    <h1 className="text-center pb-5 fw-bold mb-3" style={{color:'#ee7775'}}>My Works</h1>
                </div>
                <div className="row">
                    <div className="col-12 col-md-3 mt-2 mt-md-0">
                        <img src={img1} alt="" className='img-fluid img-style'/>
                    </div>
                    <div className="col-12 col-md-3">
                        <img src={img2} alt="" className='img-fluid img-style'/>
                    </div>
                    <div className="col-12 col-md-3">
                        <img src={img3} alt="" className='img-fluid img-style'/>
                    </div>
                    <div className="col-12 col-md-3">
                        <img src={img4} alt="" className='img-fluid img-style'/>
                    </div>
                    
                </div>
                <div className="container">
                <div className="row mt-4">
                    <div className="col-12 col-md-4">
                        <img src={img5} alt="" className='img-fluid img-style'/>
                    </div>
                    <div className="col-12 col-md-4">
                        <img src={img6} alt="" className='img-fluid img-style'/>
                    </div>
                    <div className="col-12 col-md-4">
                        <img src={img7} alt="" className='img-fluid img-style'/>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    );
};

export default Works;