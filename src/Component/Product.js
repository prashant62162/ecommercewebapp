import React from 'react';
import './Product.css'
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from '../Store/StateProvider'
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
                <p className="product__price"> <small>₹</small> <strong>{props.price}</strong> </p>
                <div className="product__rating">
                    {Array(props.rating).fill().map(() => <StarIcon className="stars" />)}
                </div>
            </div>
            <img src={props.imgsrc} alt="productimage" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product;
