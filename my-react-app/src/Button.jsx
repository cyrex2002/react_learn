function Button( props) {
    const handleClick1 = () => alert(`You bought ${props.counter} ${props.fruit}(s)`);    
    return <button className={props.class_Name} onClick={handleClick1} >Buy</button>
}   
export default Button;