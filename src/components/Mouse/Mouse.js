import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Mouse.css';

const Mouse = ({mouse, handleOrder}) => {
    const {name, price, img} = mouse;
    return (
        <div className='mouse-card'>
            <img src={img} alt="mouse" />
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <button onClick={ () => handleOrder (mouse)} className='order-btn'>
                <p>Order Now</p>
                <FontAwesomeIcon className='order-icon' icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Mouse;