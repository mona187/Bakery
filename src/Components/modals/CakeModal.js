import Modal from "react-modal";
// state
import { useState } from "react";
//styles
import { CreateButtonStyled } from "../../styles";
import cakeStore from "../../stores/cakeStore";
const CakeModal = (props) => {
  const [cake, setCake] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setCake({ ...cake, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    cakeStore.cakeCreate(cake);
    props.closeModal();
  };
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Cake Modal"
      >
        <h1>Add new cake</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-6">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="name"
                required
              />
            </div>
            <div className="col-6">
              <label>Price</label>
              <input
                className="form-control"
                type="number"
                min="1"
                onChange={handleChange}
                name="price"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="description"
              required
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="image"
              required
            />
          </div>
          <CreateButtonStyled>Add Cake</CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};
export default CakeModal;
