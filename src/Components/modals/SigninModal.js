import Modal from "react-modal";

//state
import { useState } from "react";

//styles
import { CreateButtonStyled } from "../../styles";
import authStore from "../../stores/authStore";

const SigninModal = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signin(userData);
    props.closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Signin Modal"
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-6">
              <label>Username</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="username"
                value={user.username}
              />
            </div>
            <div className="col-6">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                onChange={handleChange}
                name="password"
              />
            </div>
          </div>
          <CreateButtonStyled>Sign in </CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};

export default SigninModal;
