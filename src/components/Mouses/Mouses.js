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

    const handleDuplicateOrders = data => {
        return data.filter((value, index) => data.indexOf(value) === index)
    };

    const handleOrder = mouse => {
        if (orders.length < 4) {
           const newOrder = handleDuplicateOrders([...orders, mouse]);
            setOrders(newOrder);
        }
        else {
            alert('Oops!!! you have ordered maximum mouses.')
        }
    }

    const setOne = () => {
        const quantity = orders.length;
        if (quantity > 1) {
            const randomIndex = Math.round(Math.random() * quantity);
            const singleIndex = [orders[randomIndex]]
            setOrders(singleIndex);
        }
        else {
            alert('Please order more than one!!!!!');
        }
    }

    const removeAll = () => setOrders([]);

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
                <Cart 
                orders={orders}
                setOne={setOne}
                removeAll= {removeAll}
                ></Cart>
            </div>
        </div>
    );
};

export default Mouses;