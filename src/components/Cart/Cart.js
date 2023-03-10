
import { useState, useEffect } from 'react';
import { addToDb, time } from '../utilities/fackdb';
import './Cart.css';

// timeeerrrr
const Cart = (props) => {

    const { cart } = props;
    // console.log(cart);
    let total = 0;
    let quantity = 0;
    for (const exercise of cart) {
        quantity = quantity + exercise.quantity;
        total = total + exercise.time * exercise.quantity;
    }

    useEffect(() => {
        const newTime = localStorage.getItem('breakTime')
        setTime(newTime);

    }, [cart])
    const setLocalStroge = (time) => {

        return (
            localStorage.setItem('breakTime', time)
        )
    }
    const [time, setTime] = useState(0);
    const breakTime = (time) => {

        // console.log(time);
        const newTime = [time];
        setTime(newTime);
        addToDb(time);
    }



    const handleAlert = () => {

    }


    return (
        <div className='cart'>
            <div>
                <h2>Ujjwal Tarafder</h2>
                <p> B.Sc (Hon)Chemistry <br />
                    Khulna University,<br />
                    Khulna , Khulna .</p>
                <hr />
            </div>
            <div>
                <h5>Add a Break</h5>
                <div>
                    <button onClick={() => breakTime(10)} className="button break-time ">10s</button>
                    <button onClick={() => breakTime(20)} className="button break-time ">20s</button>
                    <button onClick={() => breakTime(30)} className="button break-time ">30s</button>
                    <button onClick={() => breakTime(40)} className="button break-time ">40s</button>
                    <button onClick={() => breakTime(50)} className="button break-time ">50s</button>


                </div>
                <div>
                    <h4>Exercise Details</h4>
                </div>
                <div>
                    <h5 className='Exercise-Time'>Exercise Time :<span> {total}</span> min</h5>
                </div>
                <div>
                    <h5 className='Exercise-Time'>Break Time :<span>{time} sec </span> </h5>
                </div>
                <div>
                    {/* <a href="">Activity Completed</a> */}
                    <a onClick={handleAlert} href="alart.html" className='btn'>Activity Completed</a>

                </div>
            </div>

        </div>

    );
};


export default Cart;