import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/Navbar";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import ShopContextProvider from "./context/ShopContextProvider";
import Banner from "./routes/Banner";
import Footer from "./routes/Footer";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Navbar />
        <Banner />
        <Routes>
       
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={ <Cart />}/>
        </Routes>
        <Footer />
      </ShopContextProvider>
    </div>
  );
}

export default App;
