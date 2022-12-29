import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <Router>
      <Navbar/>
      <Banner/>
        <Routes>
          <Route exact path="/{my-cart}" component={<Shop />} />
          <Route path="/cart" component = {<Cart/>} />
        </Routes>
        <Footer/>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
