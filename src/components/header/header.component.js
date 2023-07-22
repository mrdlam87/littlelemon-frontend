import "./header.component.scss";
import Nav from "../nav/nav.component";
import logo from "../../assets/images/Logo.svg";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const clickHandler = () => setMenuOpened(!menuOpened);

  return (
    <header className={menuOpened ? "nav-open" : ""}>
      <div className="container div-header">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Nav onNavigate={() => setMenuOpened(false)} />
        <button className="btn-nav" onClick={clickHandler}>
          <IoMenuOutline className="btn-icon" name="menu" />
          <IoCloseOutline className="btn-icon" name="close" />
        </button>
      </div>
    </header>
  );
};

export default Header;
