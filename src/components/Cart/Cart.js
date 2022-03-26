import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = ({orders, setOne, removeAll, removeItem}) => {
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
                    <button onClick={() => removeItem(order.id)} className='delete-btn'>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                    </button>
                </div>)
            }
            <div>
                <button onClick={setOne} className='cart-btn'>Set a single item</button>
            </div>
            <div>
                <button onClick={removeAll} className='cart-btn'>Pick once more</button>
            </div>
        </div>
    );
};

export default Cart;