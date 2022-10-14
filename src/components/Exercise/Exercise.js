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


            <div className='questions'>
                <h1>Questions :-</h1>
                <div>
                    <h2 >
                        <button className='first'>
                            How does react work?
                        </button>
                    </h2>
                    <div>
                        <div>
                            ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.
                        </div>
                    </div>
                </div>
                <div>
                    <h2>
                        <button className='first'>
                            Difference between props and state?
                        </button>
                    </h2>
                    <div>
                        <div>
                            Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.

                            Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
                        </div>
                    </div>
                </div>
                <div >
                    <h2 >
                        <button className='first'>
                            How many uses of useEffect without API ?
                        </button>
                    </h2>
                    <div>
                        <div>
                            If we pass dependencies to useEffect hook, then useEffect will executed every time when the variables which we passed to dependency array . We should useEffect, when your component depends on the outside world data, and we can not guarantee that data will come or not (maybe the server is down there). So, Instead of throwing errors and stop other components from being rendered, move them into useEffect hook. If we pass an empty array to useEffect then our component will be rendered for first time when a component is rendered. To re-call useEffect hook we have to refresh our page. With useEffect, you can handle lifecycle events directly inside function components. Namely, three of them: componentDidMount, componentDidUpdate, and componentWillUnmount
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Exercise;