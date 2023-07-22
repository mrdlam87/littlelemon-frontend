import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/home/home-page";
import Main from "./components/main/main";
import Reservations from "../src/routes/reservations/reservations";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="reservations" element={<Reservations />} />
      </Route>
    </Routes>
  );
}

export default App;
