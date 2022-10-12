import React, { useEffect, useState } from 'react';

import Cart from '../Cart/Cart';
import Sectors from '../Sectors/Sectors';
import { addToDb, getStoredCart } from '../utilities/fackdb';
import './Exercise.css';
const Exercise = () => {
    const [exercises, setExercises] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        // console.log('exercise load')
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])
    useEffect(() => {
        // console.log('Local storage first line')
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedExercise = exercises.find(exercise => exercise.id === id);
            // console.log(addedExercise);
            if (addedExercise) {
                const quantity = storedCart[id];
                addedExercise.quantity = quantity;
                savedCart.push(addedExercise);
            }
        }
        setCart(savedCart);
    }, [exercises])


    const handleAddToCart = (selectedExercise) => {
        let newCart = [];
        // console.log(exercise);
        const exists = cart.find(exercise => exercise.id === selectedExercise.id);
        if (!exists) {
            selectedExercise.quantity = 1;
            newCart = [...cart, selectedExercise];
        }
        else {
            const rest = cart.filter(exercise => exercise.id !== selectedExercise.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedExercise.id);
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
                <Cart cart={cart}

                ></Cart>
            </div>


        </div>
    );
};

export default Exercise;