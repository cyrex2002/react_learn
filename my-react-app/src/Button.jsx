function Button( props) {
    let handleClick1;
    if(props.shipping_ === "Pick Up") {
        handleClick1 = () => alert(`You bought ${props.counter} ${props.fruit}(s), please pick up your order at the store`);
    }
    else {    
        handleClick1 = () => alert(`You bought ${props.counter} ${props.fruit}(s), we will you deliver your order soon`);
    }
    return <button className={props.class_Name} onClick={handleClick1} >Buy</button>
}   
export default Button;