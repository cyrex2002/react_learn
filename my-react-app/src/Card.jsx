import food1 from './assets/apple.jpg';
function Card() {
    return (
        <div className="card">
            <h2 className='card-title'>Apple</h2>
            <img className="card-image" src={food1} alt="Food Picture" />
            <p className='card-text'>Apple is a fruit</p>
        </div>   
    );
}

export default Card;