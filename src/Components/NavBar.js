import { Logo, NavCakes, NavStyles, ThemeButton } from "../styles";
import SignupButton from "./buttons/SignupButton";
import SigninButton from "./buttons/SigninButton";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
const NavBar = (props) => {
  return (
    <NavStyles className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Logo to="/" className="navbar-brand">
            <img
              alt="Logo"
              src="https://media.istockphoto.com/vectors/bakery-badge-template-vector-illustration-bakery-shop-emblem-vintage-vector-id1143269308?k=6&m=1143269308&s=612x612&w=0&h=g0-PGuWuO3RccSIdMwesBE-cSZVQB5Bz5-p3DtE1gHo="
              width="100"
            />
          </Logo>
          <ul className="navbar-nav ml-0">
            <ThemeButton onClick={props.toggleTheme} className="nav-item">
              {props.currentTheme === "light" ? "Dark" : "Light"} mode
            </ThemeButton>
            {authStore.user ? (
              <p>hello{authStore.user.username}</p>
            ) : (
              <>
                <SigninButton />
                <SignupButton />
              </>
            )}
            <NavCakes to="/cakes" className="nav-item">
              Cakes
            </NavCakes>
            <NavCakes to="/bakeries" className="nav-item">
              Bakeries
            </NavCakes>
          </ul>
        </div>
      </div>
    </NavStyles>
  );
};

export default observer(NavBar);
