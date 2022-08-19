import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cars from "./pages/cars/Cars";

import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/Login/Login";
import Register from "./pages/register/Register";
import Tourism from "./pages/tourism/Tourism";
import AirportTaxis from "./pages/airportTaxis/AirportTaxis";
import CarDesc from "./pages/car-desc/CarDesc";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/cars" element={<Cars/>} />
        <Route path="/desc" element={<CarDesc/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/tourism" element={<Tourism/>} />
        <Route path="/taxis" element={< AirportTaxis/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
