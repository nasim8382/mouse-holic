import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Mouse from '../Mouse/Mouse';
import './Mouses.css';

const Mouses = () => {
    const [mouses, setMouses] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect( () => {
        fetch('mouse.json')
        .then(res => res.json())
        .then(data => setMouses(data));
    }, [])

    const handleOrder = mouse => {
        const newOrder = [...orders, mouse];
        setOrders(newOrder);
    } 

    return (
        <div className='mouse-container'>
            <div className='all-mouse-card'>
            {
                mouses.map( mouse => <Mouse 
                    key={mouse.id}
                    mouse={mouse}
                    handleOrder={handleOrder}
                ></Mouse>)
            }
            </div >
            <div className='order-cart'>
                <Cart orders={orders}></Cart>
            </div>
        </div>
    );
};

export default Mouses;