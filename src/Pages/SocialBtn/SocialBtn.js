import React from 'react';
import google from '../../images/icons/google.png'
import github from '../../images/icons/github.png'
const SocialBtn = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center mt-5'>
                <div style={{ height: '1px' }} className='w-50 bg-secondary '></div>
                <p className='px-2 m-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-secondary '></div>
            </div>
            <div>
                <button className='btn btn-primary d-block mx-auto mb-2'>
                    <img src={google} alt="" />
                    <span className='px-2'>Login with google</span>
                </button>
                <button className='btn btn-primary d-block mx-auto mb-2'>
                    <img src={github} alt="" />
                    <span className='px-2'>Login with github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialBtn;