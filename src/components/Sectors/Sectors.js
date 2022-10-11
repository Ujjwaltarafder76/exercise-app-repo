import React from 'react';
import './Sectors.css';
const Sectors = ({ exercise, handleAddToCart }) => {
    // const { exercise, handleAddToCart } = props;
    const { name, image, age, time, about, id } = exercise;

    return (
        <div className='exercise'>
            <img src={image} alt="" />
            <div className='exercise-info'>
                <p className='exercise-name'>{name}</p>
                <p><small>{about}</small></p>
                <p>For Age:{age}</p>
                <p>   Time required:{time}</p>
                <p>{id}</p>
            </div>
            <button onClick={() => handleAddToCart(exercise, id)} className='btn-cart'>
                <p>Add to list</p>
            </button>

        </div>
    );
};

export default Sectors;