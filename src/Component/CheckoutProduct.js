import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import './CheckoutProduct.css';
import { useStateValue } from '../Store/StateProvider';
function CheckoutProduct(props) {
    const [{ basket }, dispatch] = useStateValue();
    const removeProduct = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: props.id
        })
    }
    return (
        <div className="checkoutProduct" >
            <img className="checkoutProduct__image" src={props.img} />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{props.title}</p>
                <p><small>$</small><strong>{props.price}</strong></p>
                <div className="checkoutProduct__rating">
                    {Array(props.rating).fill().map(() => <StarIcon className="stars" />)}
                </div>
                <button onClick={removeProduct}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
