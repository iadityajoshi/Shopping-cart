import "./App.css";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/cart" exact element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;
