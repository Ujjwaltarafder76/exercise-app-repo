import React from 'react';
import './Sectors.css';
const Sectors = (props) => {
    const { name, image, age, time, about } = props.exercise;

    return (
        <div className='exercise'>
            <img src={image} alt="" />
            <div className='exercise-info'>
                <p className='exercise-name'>{name}</p>
                <p><small>{about}</small></p>
                <p>For Age:{age}</p>
                <p>   Time required:{time}</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.exercise)} className='btn-cart'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Sectors;