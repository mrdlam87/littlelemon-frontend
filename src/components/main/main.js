import "./main.scss";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useContext } from "react";
import { IntersectionContext } from "../../contexts/intersection.context";

const Main = () => {
  const { heroInView } = useContext(IntersectionContext);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const mainClass = `div-main ${isHomePage && !heroInView ? "sticky" : ""}`;

  return (
    <div className={mainClass}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
