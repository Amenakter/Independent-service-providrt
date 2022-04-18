import React from 'react';
import imgs from '../../../images/icons/dr.jpg'
import './DentistDetail.css'


const DentistDetail = () => {
    return (
        <div>
            <hr className='mt-5' />
            <h3 className='text-center'>Doctor Info:</h3>
            <div style={{ height: '1px' }} className='d-block mx-auto w-50 bg-secondary'></div>
            <div className='Dr-info container text-center d-flex flex-lg-row flex-sm-row  align-items-center align-items-md-center justify-content-md-between justify-content-between  mt-5'>
                <div className='col-md-6'>
                    <img className='imgs' src={imgs} alt="" />
                    <h3>Profile Of Professional Dr. Nasir Uddin</h3>
                    <p>BDS, MS (OMS)</p>
                    <p>advanced suigical training (Japan)</p>
                    <p>Trained in faciak plastic and reconstructive surgary(Canada) </p>
                    <p>Dental ,oral & Maxillofacial Surgary Specialist</p>
                </div>

                <div className='col-md-6' >
                    <p>Chambers:</p>
                    <h4>Avenue Dental Care</h4>
                    <p>House 3A , Satmosjid Road, Dhaka-11205, Bangladesh</p>
                    <h4>Bangladesh ENT Hospital Ltd.</h4>
                    <p>4/1/A Sobhanbag, Mirpur Road , Dhaka -1207</p>
                </div>

            </div>
        </div>

    );
};

export default DentistDetail;