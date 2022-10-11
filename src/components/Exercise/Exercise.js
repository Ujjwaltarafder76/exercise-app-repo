import React, { useEffect, useState } from 'react';

import Cart from '../Cart/Cart';
import Sectors from '../Sectors/Sectors';
import { addToDb, getStoredCart } from '../utilities/fackdb';
import './Exercise.css';
const Exercise = () => {
    const [exercises, setExercises] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])
    useEffect(() => {
        const storedCart = getStoredCart();
        for (const id in storedCart) {
            console.log(id);
        }
    }, [])


    const handleAddToCart = (exercise) => {
        // console.log(exercise);
        const newCart = [...cart, exercise];
        setCart(newCart);
        addToDb(exercise.id);
    }
    return (
        <div className='exercise-container'>
            <div className="exercises-container">
                {
                    exercises.map(exercise => <Sectors
                        key={exercise.id}
                        exercise={exercise}
                        handleAddToCart={handleAddToCart}
                    ></Sectors>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>


        </div>
    );
};

export default Exercise;