import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../Store/StateProvider';
import { Rating } from '@mui/material';
import CurrencyFormat from 'react-currency-format';
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
                <div>
                    <p className="checkoutProduct__title">{props.title}</p>
                    {/* <p><small>₹</small><strong>{value}</strong></p> */}
                    <CurrencyFormat
                        renderText={(value) => (
                            <>
                                <p>
                                    <strong> {value} </strong>
                                </p>
                            </>
                        )}
                        decimalScale={2}
                        value={props.price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={"₹"}
                    />
                    <div className="checkoutProduct__rating">
                        <Rating
                            value={props.rating}
                            precision={0.1}
                        />
                    </div>
                </div>
                <button onClick={removeProduct}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
