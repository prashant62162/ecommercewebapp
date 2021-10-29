import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../Store/StateProvider';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    const subTotal = basket.reduce((acc, item) => acc + item.price, 0);
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
                value={subTotal}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
