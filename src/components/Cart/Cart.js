import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h3>Ujjwal Tarafder</h3>
            <p>Khulna , Khulna</p>
            <p>Seclected Items:{cart.length}</p>
        </div>
    );
};

export default Cart;