import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../actions/NavbarActions";

const Navbar = () => {
  const menuIsOpened = useSelector((state) => state.navbar.menuIsOpened);
  const basicNavbarColor = useSelector(
    (state) => state.navbar.basicNavbarColor
  );
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`navbar-wrapper ${!basicNavbarColor ? "transparent" : ""}`}
      >
        <div className="navbar container">
          <div
            className="sidenav-trigger-wrapper"
            onClick={() => dispatch(toggleMenu())}
          >
            <div className="sidenav-trigger"></div>
          </div>
          <h1 className="logo">Meal App</h1>
          <ul className="menu">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
        </div>
      </div>
      <ul className={!menuIsOpened ? "sidenav" : "sidenav visible"}>
        <li className="sidenav-item">
          <Link onClick={() => dispatch(toggleMenu())} to={"/"}>
            Home
          </Link>
        </li>
        <li className="sidenav-item">
          <Link onClick={() => dispatch(toggleMenu())} to={"/about"}>
            About
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
