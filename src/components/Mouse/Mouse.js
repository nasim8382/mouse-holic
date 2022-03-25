import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Mouse.css';

const Mouse = ({mouse, handleOrder}) => {
    const {id, name, price, img} = mouse;
    return (
        <div className='mouse-card'>
            <img src={img} alt="mouse" />
            <h2>{name}</h2>
            <h3>Price: ${price}</h3>
            <button onClick={ () => handleOrder (mouse)} className='order-btn'>
                <p>Order Now</p>
                <FontAwesomeIcon className='order-icon' icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Mouse;