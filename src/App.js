import "./App.css";
import Home from "./Home";
import Header from "./header";
import Checkout from "./Checkout";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Login from "./Login";
function App() {
  return (
    <div className="App">
      {/* <Header />, <Home />, checkout */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Login" element={<Login />}/>
          <Route path="/" element={<Home />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
