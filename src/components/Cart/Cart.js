import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);
    let total = 0;
    for (const exercise of cart) {
        total = total + exercise.time;
    }

    return (
        <div className='cart'>
            <div>
                <h3>Ujjwal Tarafder</h3>
                <p>Khulna , Khulna</p>
                <p>Seclected Items:{cart.length}</p>
            </div>
            <div>

                <h4>Exercise Details</h4>
            </div>
            <div className="d-flex gap-5 pt-3">
                <h5>Exercise Time :<span> {total}</span> min</h5>
            </div>
            <div className="d-flex gap-5 pt-3">
                <h5>Break Time : </h5> <span> { }sec </span>
            </div>

            <div className="d-flex justify-content-center py-2">
                <a>Activity Completed</a>
            </div>
        </div>

    );
};

export default Cart;