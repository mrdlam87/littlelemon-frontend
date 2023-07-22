import "./footer.component.scss";
import logo from "../../assets/images/Logo.png";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid--4-cols">
        <div className="div-social">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="div-icons">
            <IoLogoInstagram className="icon primary1" />
            <IoLogoFacebook className="icon primary1" />
            <IoLogoTwitter className="icon primary1" />
          </div>
          <p className="text-paragraph primary1 copyright">
            Copyright &copy; <span className="year">2023</span> by Little Lemon,
            Inc. All rights reserved.
          </p>
        </div>
        <div className="div-contact">
          <h3 className="title-section primary1">Contact Us</h3>
          <ul>
            <li>
              <a className="text-paragraph primary1 contact" href="/">
                info@littlelemon.com
              </a>
            </li>
            <li>
              <a className="text-paragraph primary1 contact" href="/">
                2045 W Jackson Blvd Chicago, Illinois, 60612
              </a>
            </li>
          </ul>
        </div>
        <div className="div-restaurant">
          <h3 className="title-section primary1">Restaurant</h3>
          <ul>
            <li>
              <Link to="/" className="text-paragraph primary1">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="text-paragraph primary1">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="text-paragraph primary1">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/reservations" className="text-paragraph primary1">
                Reservations
              </Link>
            </li>
          </ul>
        </div>
        <div className="div-account">
          <h3 className="title-section primary1">Account</h3>
          <ul>
            <li>
              <Link to="/" className="text-paragraph primary1">
                Create account
              </Link>
            </li>
            <li>
              <Link to="/" className="text-paragraph primary1">
                Login
              </Link>
            </li>
            <li>
              <Link to="/" className="text-paragraph primary1">
                Order online
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
