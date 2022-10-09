import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Sectors from '../Sectors/Sectors';
import './Exercise.css';
const Exercise = () => {
    const [exercises, setExercises] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    const handleAddToCart = (exercise) => {
        console.log(exercise);
        const newCart = [...cart, exercise];
        setCart(newCart);
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