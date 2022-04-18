import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'


const Service = ({ service }) => {
    const { id, img, name, price, description } = service;
    const navigate = useNavigate();

    const navigateToDetails = (id) => {
        navigate(`/service/${id}`)
    }

    return (
        <div className='services mt-5 p-3' >
            <img className='border border-secondary rounded w-100' src={img} alt="" />
            <h4>{name}</h4>
            <p>price:${price}</p>
            <p>{description}</p>
            <button onClick={() => navigateToDetails(id)} className='btn btn-primary'>Check Out</button>
        </div>
    );
};

export default Service;