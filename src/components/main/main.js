import "./main.scss";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Main = () => {
  return (
    <div className="div-main">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
