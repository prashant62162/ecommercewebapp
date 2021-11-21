import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import Grid from '@mui/material/Grid';
import { useStateValue } from '../Store/StateProvider';
import { Rating } from '@mui/material';
import CurrencyFormat from 'react-currency-format';
function ProductDetail() {
    const [{ basket, user, product_d }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: product_d.id,
                title: product_d.title,
                image: product_d.imgsrc,
                price: product_d.price,
                rating: product_d.rating
            }
        })
    };
    console.log(product_d)
    return (
        <div className="product__detail">
            <Grid container>
                <Grid item md={6} sm={12} className='detailProduct_imageBox'>
                    <img className="productDetail_image" src={product_d.image} />
                </Grid>
                <Grid item md={6} sm={12} >
                    <p className="productDetail__title">{product_d.title}</p>
                    <p className="productDetail__category">Catergory: <strong>{product_d.category}</strong></p>
                    <div className="productDetail__rating">
                        <Rating
                            value={product_d.rating}
                            precision={0.1}
                        />
                    </div>
                    <CurrencyFormat
                        renderText={(value) => (
                            <>
                                <p className="productDetail__price">
                                    Price: <strong> {value} </strong>
                                </p>
                            </>
                        )}
                        decimalScale={2}
                        value={product_d.price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={"₹"}
                    />

                    <button className='productDetail__button' onClick={addToBasket}>Add to Cart</button>
                    <div className='productDetail_description'>
                        <h3>Product Description:</h3>
                        <div className='productDetail_descriptionText'> {product_d.description}</div>
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}

export default ProductDetail;
