import "./main.scss";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";

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
