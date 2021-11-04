import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../Store/StateProvider';
import { useHistory } from 'react-router-dom';
import { getBasketTotal } from '../Store/reducer';
function Subtotal() {
    const history = useHistory();
    const [{ basket, user }, dispatch] = useStateValue();


    const checkoutPayment = () => {
        console.log(basket.length);
        if (user && basket.length) {
            return history.push("/payment");
        } else if (!user) {
            return history.push("/login");
        }
        else {
            return history.push("/");
        }
    }
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal({basket?.length} items):<strong> {value} </strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order containes a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button onClick={checkoutPayment}>Proceed to Checkout</button >
            {/* another method to navigate using react router dom */}
        </div >
    )
}

export default Subtotal;
