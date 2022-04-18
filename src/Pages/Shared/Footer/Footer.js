import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className='bg-secondary mt-5 px-5 py-2'>
            <div className='container p-5 text-light d-flex align-items-center justify-content-between'>
                <div>
                    <h5>Avenue Dental Care</h5>
                    <p>Visiting Hours:4pm-9pm(Friday Closed)</p>
                    <p className='fw-bold'>Phone:0123243453, 0193584353,0193439556</p>
                </div>
                <div>
                    <h5>Bangladesh ENT Hospital Ltd.</h5>
                    <p>Visiting Hours:11am-2pm(Friday Closed)</p>
                    <p className='fw-bold'>Phone:0123243453, 0193584353,0193439556</p>
                </div>
            </div>
            <p className='text-center text-light mt-3'>Copyright © {year}</p>
        </div>
    );
};

export default Footer;