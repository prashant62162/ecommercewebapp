import React from 'react';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from './CheckoutProduct';
import './Order.css';

function Order(props) {
    console.log(props.productList)
    return (
        <div className="order">
            <div className="order__id">
                <h3> <strong>Order Id:</strong> {props.productList.id}</h3>
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            <p>
                                Subtotal({props.productList.data.basket?.length} items):<strong> {value} </strong>
                            </p>
                        </>
                    )}
                    decimalScale={2}
                    value={props.productList.data.total_amount}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={"₹"}
                />

            </div>
            <div className="order__list">
                {props.productList.data.basket?.map(item => <CheckoutProduct id={item.id} title={item.title} price={item.price} img={item.image} rating={item.rating} />)}
            </div>
        </div>
    )
}

export default Order;
