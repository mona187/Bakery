import "../App.css";
const BakeryItems = (props) => {
  return (
    <div className="cake">
      <img alt={props.name} className="cake-image" src={props.image} />
      <p className="text">{props.name}</p>
      <p className="text">{props.price} KD</p>
    </div>
  );
};

export default BakeryItems;
