import React, { useEffect, useState } from 'react';
import Sectors from '../Sectors/Sectors';
import './Exercise.css';
const Exercise = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])
    return (
        <div className='exercise-container'>
            <div className="exercises-container">
                {
                    exercises.map(exercise => <Sectors
                        key={exercise.id}
                        exercise={exercise}
                    ></Sectors>)
                }
            </div>
            <div className="cart-container">
                <p>xdhj</p>
            </div>
        </div>
    );
};

export default Exercise;