import React, { useEffect, useState } from 'react';
import './Exercise.css';
const Exercise = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div className='exercise-container'>
            <div className="exercises-container">
                <h2>hdud</h2>
            </div>
            <div className="cart-container">
                <p>xdhj</p>
            </div>
        </div>
    );
};

export default Exercise;