import Button from "./Button";

import React, { useState } from "react";

function Card(props) {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div className="card">
            <h2 className='card-title'>{props.name}</h2>
            <img className="card-image" src={props.image} alt="Food Picture" />
            <p className='card-text'>{props.name} is a fruit.</p>
            <p className='card-text'>I want to buy {count} {props.name}s</p>
            <div className="count-change">
                <button className="button" onClick={increment}>+</button>
                <button className="button" onClick={decrement}>-</button>
                <button className="button" onClick={reset}>reset</button>
            </div>
            <Button className='button' fruit={props.name} counter={count} > </Button>
        </div>   
    );
}

export default Card;