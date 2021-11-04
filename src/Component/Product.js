import React from 'react';
import './Product.css';
import { Rating } from '@mui/material';
import { useStateValue } from '../Store/StateProvider'
import CurrencyFormat from 'react-currency-format';
function Product(props) {
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch the item to the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: props.id,
                title: props.title,
                image: props.imgsrc,
                price: props.price,
                rating: props.rating
            }
        })
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{props.title}</p>
                <p className="product__price">
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
                    /> </p>
                <div className="product__rating">
                    <Rating
                        value={props.rating}
                        precision={0.1}
                    />
                </div>
            </div>
            <img src={props.imgsrc} alt="productimage" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product;
