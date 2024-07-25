import React, {useState} from 'react';

function Food(){
    const [foods, setFoods] = useState([]);

    const [foodName, setFoodName] = useState("");
    const [foodOrigin, setFoodOrigin] = useState("");
    const [foodExpire, setFoodExpire] = useState("");

   

    function createFruit(){

        const newFood = {
            name: foodName,
            origin: foodOrigin,
            expire: foodExpire
        }
        setFoods(f =>[...f, newFood]);

        setFoodName('');
        setFoodOrigin(''); 
        setFoodExpire('');
    }

    function handleFoodName(event){
        setFoodName(event.target.value);
    }
    function handleFoodOrigin(event){
        setFoodOrigin(event.target.value);
    }
    function handleFoodExpire(event){
        setFoodExpire(event.target.value);
    }

    return(
        <>
        <h2>Enter fruits that you like</h2>
        <ul>
            {foods.map((newFood, index) => ( 
                <li key={index}>
                    {newFood.name} {newFood.origin} {newFood.expire}
                </li>))}
        </ul>
        <input type="text" placeholder='Enter Name here'  onChange={handleFoodName} value={foodName}/>
        <input type="text" placeholder='Enter Origin here'  onChange={handleFoodOrigin} value={foodOrigin}/>
        <input type="text" placeholder='Enter Expire here'  onChange={handleFoodExpire} value={foodExpirenpm}/>
        <button onClick={createFruit}>Add Fruit</button>
        </>
        
    );
}
export default Food