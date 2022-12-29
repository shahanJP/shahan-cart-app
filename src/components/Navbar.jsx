import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from '../context/ShopContextProvider';
import "./navbar.css";

const Navbar = () => {
  const {basket} = useContext(ShopContext)

    return (
        <div className="navbar">
        <img src="" alt=""/>
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/cart">
        <ShoppingCart size={32} />
        </Link>
        <span style={{color:'orange'}}>{basket.length}</span>
      </div>
    </div>
    )
}

export default Navbar
