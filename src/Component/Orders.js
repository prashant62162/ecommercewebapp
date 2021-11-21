import React, { useEffect, useState } from 'react';
import './Orders.css';
import { db } from '../firebase';
import { useStateValue } from '../Store/StateProvider';
import Order from './Order';
function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (user) {

            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .onSnapshot((snapshot) => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))

        } else {
            setOrders([])
        }
        setLoading(false);
    }, [user]);


    let content = <h2 style={{ textAlign: "center" }}>Checking...</h2>

    if (!user) {
        content = <h2>Please Sign In!</h2>
    } else {
        content = !orders ? <h2>Loading Orders</h2> : !(orders.length) ? <h2>No Order Placed!</h2> : orders?.map(order => <Order productList={order} />)
    }

    //else if (!loading && !orders) {
    //     content = <h2>No orders placed!</h2>
    // } else if (!loading) {
    //     content = !(orders.length) ? <h2>Loading Orders</h2> : orders?.map(order => <Order productList={order} />)
    // }



    return (
        <div className="orders">
            <h1>Your Order History</h1>
            <div className="order__list">
                {content}
            </div>
        </div>
    )
}




export default Orders;
