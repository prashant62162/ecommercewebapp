import React from 'react';
import './Payment.css';
import { useStateValue } from '../Store/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { NavLink, useHistory } from 'react-router-dom';
import { getBasketTotal } from '../Store/reducer';
import { db } from '../firebase';
import CurrencyFormat from 'react-currency-format';

function Payment() {
    const history = useHistory();
    const [{ basket, user }, dispatch] = useStateValue();
    const totalamount = getBasketTotal(basket);
    const paymentSubmitHandler = (event) => {
        event.preventDefault();
        let bucketId = Math.round(Math.random() * 10 ** 10).toString();
        console.log(bucketId);
        if (!basket.length) {
            return alert("Add items in basket");
        }
        db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(bucketId)
            .set({
                basket: basket,
                total_amount: totalamount
            })
        dispatch({
            type: "EMPTY_BASKET"
        });
        alert("Payment Succefull!");
        history.replace("/orders");
    }
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout {
                        <NavLink to="/checkout">
                            ({basket?.length}{basket?.length === 1 ? " item" : " items"})
                        </NavLink>
                    }
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123, Cannaught Place</p>
                        <p>New Delhi</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__item">
                        {basket?.map((item) => <CheckoutProduct id={item.id} title={item.title} price={item.price} img={item.image} rating={item.rating} />)}

                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__item">
                        {/* <strong>Total: ₹ {getBasketTotal(basket)}</strong> */}
                        <CurrencyFormat
                            renderText={(value) => (
                                <>
                                    <p>
                                        Subtotal({basket?.length} items):<strong> {value} </strong>
                                    </p>
                                </>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={"₹"}
                        />
                        <div className="payment__details"> </div>
                    </div>
                </div>
                <button className="payment__button" onClick={paymentSubmitHandler}> Click to Pay</button>
            </div>
        </div>
    )
}

export default Payment;
