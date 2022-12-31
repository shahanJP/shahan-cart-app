import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import ShopContextProvider from "./context/ShopContextProvider";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Navbar />
        <Banner />
        <Shop />
        <Cart />
        <Footer />
      </ShopContextProvider>
    </div>
  );
}

export default App;
