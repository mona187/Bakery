import "./App.css";
import Cakes from "./products.js";

function App() {
  const CakeList = Cakes.map((Cake) => (
    <div className="cake" key={Cake.id}>
      <img alt={Cake.name} className="cake-image" src={Cake.image} />
      <p className="text">{Cake.name}</p>
      <p className="text">{Cake.price} KD</p>
    </div>
  ));
  return (
    <div>
      <div>
        <h1 className="text"> Bake and stay awake </h1>
        <h4 className="text">We beat it,you eat it!</h4>
        <p className="text">
          Welcome to the best bakery where every ingredient is specifically
          extracted from naturelands, so... GET READY to make delicious
          memories.
        </p>
        <img
          alt="bakery shop"
          src="https://oxitamins.com/wp-content/uploads/2021/04/somers_bakery-department-header.jpg"
          id="shop-image"
        />
      </div>
      <div className="list">{CakeList}</div>
    </div>
  );
}

export default App;
