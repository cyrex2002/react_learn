import Button from "./Button";

import React, { useState } from "react";

function Card(props) {

    const [count, setCount] = useState(0);
    const [shipping, setShipping] = useState("");

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }    

    function handleQuantityChange(event) {
        setCount(event.target.value);
    }

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
                <input className="card-input" value={count} type="number" onChange={handleQuantityChange} />
                <button className="button" onClick={decrement}>-</button>
                <button className="button" onClick={reset}>reset</button>
            </div>
            <Button class_Name='button' fruit={props.name} counter={count} shipping_={shipping}> </Button>
            <br />
            <label className="card-label">
                <input type="radio" value="Pick Up"
                       checked = {shipping === "Pick Up"}
                       onChange={handleShippingChange} />
                Pick Up       
            </label>
            <label className="card-label">
                <input type="radio" value="Delivery"
                       checked = {shipping === "Delivery"}
                       onChange={handleShippingChange} />
                Delivery       
            </label>
        </div>   
    );
}

export default Card;