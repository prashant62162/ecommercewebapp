import { Grid } from '@mui/material';
import React from 'react';
import { useStateValue } from '../Store/StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';


function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    console.log(basket, user?.uid);
    return (
        <div className='checkout'>
            <Grid container spacing={2}>
                <Grid item md={8} xs={12}>
                    <div className="checkout__left">
                        <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Sep_2021/JUPITER_21/P4/Jupiter_GW-Editorial_P4_1150x323_P4._CB637734438_.jpg" alt="" />
                        <div>
                            <h2 className="checkout__title">
                                Hello, {user?.email} <br />
                                Your Shopping Basket
                            </h2>
                            {!(basket?.length) ? <h2 className="basket__warning">Oops,Your basket is empty!</h2> : basket?.map((item) => <CheckoutProduct id={item.id} title={item.title} price={item.price} img={item.image} rating={item.rating} />)}
                            {/* {(basket?.length) && basket?.map((item) => <CheckoutProduct id={item.id} title={item.title} price={item.price} img={item.image} rating={item.rating} />)}
                            {!(basket?.length) && <h2>Oops,Your basket is empty!</h2>} */}
                        </div>
                    </div>
                </Grid>
                <Grid item md={4} xs={12}>
                    <div className="checkout__right">
                        <Subtotal />
                    </div>
                </Grid>
            </Grid>


        </div>
    )
}

export default Checkout;
