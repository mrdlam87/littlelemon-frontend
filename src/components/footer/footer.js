import "./footer.scss";
import logo from "../../assets/images/Logo.png";
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid--4-cols">
        <div className="div-social">
          <img src={logo} alt="" />
          <div className="div-icons">
            <IoLogoInstagram className="icon primary1" />
            <IoLogoFacebook className="icon primary1" />
            <IoLogoTwitter className="icon primary1" />
          </div>
        </div>
        <div className="div-contact">
          <h3 className="title-section primary1">Contact Us</h3>
          <ul>
            <li>
              <a className="text-paragraph primary1 contact" href="">
                info@littlelemon.com
              </a>
            </li>
            <li>
              <a className="text-paragraph primary1 contact" href="">
                2045 W Jackson Blvd Chicago, Illinois, 60612
              </a>
            </li>
          </ul>
        </div>
        <div className="div-restaurant">
          <h3 className="title-section primary1">Restaurant</h3>
          <ul>
            <li>
              <a className="text-paragraph primary1" href="">
                Home
              </a>
            </li>
            <li>
              <a className="text-paragraph primary1" href="">
                About
              </a>
            </li>
            <li>
              <a className="text-paragraph primary1" href="">
                Menu
              </a>
            </li>
            <li>
              <a className="text-paragraph primary1" href="">
                Reservations
              </a>
            </li>
          </ul>
        </div>
        <div className="div-account">
          <h3 className="title-section primary1">Account</h3>
          <ul>
            <li>
              <a className="text-paragraph primary1" href="">
                Create account
              </a>
            </li>
            <li>
              <a className="text-paragraph primary1" href="">
                Login
              </a>
            </li>
            <li>
              <a className="text-paragraph primary1" href="">
                Order online
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
