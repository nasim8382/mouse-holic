import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css';

const Cart = ({orders}) => {
    return (
        <div className='cart'>
            <h1>Ordered Mouse</h1>
            {
                 orders.map(order => 
                <div key={order.id} className='single-order-item'>
                    <div className='cart-img'>
                        <img src={order.img} alt="mouse" />
                    </div>
                    <h4 className='cart-text'>{order.name}</h4>
                    <button className='delete-btn'>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                    </button>
                </div>)
            }
            <div>
                <button className='cart-btn'>Set a single item</button>
            </div>
            <div>
                <button className='cart-btn'>Pick once more</button>
            </div>
        </div>
    );
};

export default Cart;