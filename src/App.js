import "./App.css";
import Home from "./Home";
import Header from "./header";
import Checkout from "./Checkout";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Header />, <Home />, checkout */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
