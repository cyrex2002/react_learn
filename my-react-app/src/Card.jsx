
function Card(props) {

    return (
        <div className="card">
            <h2 className='card-title'>{props.name}</h2>
            <img className="card-image" src={props.image} alt="Food Picture" />
            <p className='card-text'>{props.name} is a fruit.</p>
        </div>   
    );
}

export default Card;