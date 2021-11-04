import React, { useEffect, useState } from 'react';
import './Orders.css';
import { db } from '../firebase';
import { useStateValue } from '../Store/StateProvider';
import Order from './Order';
function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

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

    }, [user]);
    console.log(orders?.data)
    return (
        <div className="orders">
            <h1>Your Order History</h1>
            <div className="order__list">
                {!(orders.length) ? <h2>No Order Placed!</h2> : orders?.map(order => <Order productList={order} />)}
            </div>
        </div>
    )
}




export default Orders;
