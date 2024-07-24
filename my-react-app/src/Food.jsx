import React, {useState} from 'react';

function Food(){
    const food1 = 'apple';
    const food2 = 'banana';
    const [foods, setFoods] = useState(['Apple', 'Banana']);
    
    
//
    function createFruit(){
        const newFood = document.getElementById('new').value;
        document.getElementById('new').value = '';  //clear the input field
        setFoods(f =>[...f, newFood]);
    }

    return(
        <>
        <h2>Enter fruits that you like</h2>
        <ul>
            {foods.map((food, index) => ( <li key={index}>{food}</li>))}
        </ul>
        <input type="text" placeholder='Enter here' id='new' />
        <button onClick={createFruit}>Add Fruit</button>
        </>
        
    );
}
export default Food