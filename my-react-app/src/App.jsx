import Header from './Header.jsx'
import Footer from "./Footer.jsx";
import Food from './Food.jsx';
import Card from './Card.jsx';

import food1 from './assets/apple_img.jpg';
import food2 from './assets/orange_img.jpg';
import food3 from './assets/banana_img.jpg';


function App() {
  return (
    <>
    <Header/>
    <Card name="Apple" image={food1} />
    <Card name="Orange" image={food2} />
    <Card name="Banana" image={food3} />
    <Food/>
    <Footer/> 
    </>
  );
}

export default App
