import React from 'react';
import './Cart.css';

const Cart = ({orders}) => {
    return (
        <div>
            <h1>{orders.length}</h1>
            <h3>Ordered Mouse</h3>
        </div>
    );
};

export default Cart;