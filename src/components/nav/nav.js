import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = ({ onNavigate }) => {
  return (
    <nav className="nav-main">
      <Link to="/" className="secondary4" onClick={onNavigate}>
        Home
      </Link>
      <Link to="/" className="secondary4" onClick={onNavigate}>
        About
      </Link>
      <Link to="/" className="secondary4" onClick={onNavigate}>
        Menu
      </Link>
      <Link to="/reservations" className="secondary4" onClick={onNavigate}>
        Reservations
      </Link>
      <Link to="/" className="secondary4" onClick={onNavigate}>
        Order Online
      </Link>
      <Link to="/" className="secondary4" onClick={onNavigate}>
        Login
      </Link>
    </nav>
  );
};

export default Nav;
