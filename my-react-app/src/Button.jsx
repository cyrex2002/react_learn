function Button({fruit, counter, className}) {

    const handleClick1 = () => alert('You bought '+counter+' '+fruit+'(s)');    

    //  const handleClick2 = () => alert('It is an Orange');
    // return <button onClick={fruit === "Apple" ? handleClick1 : handleClick2} >Click me</button>
    
    return <button className={className} onClick={handleClick1} >Buy</button>
}
export default Button;