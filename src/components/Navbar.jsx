import React,{useContext} from 'react';
import { HashLink } from 'react-router-hash-link';
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from '../context/ShopContextProvider';
import "./navbar.css";

const Navbar = () => {
  const {basket} = useContext(ShopContext)

    return (
        <div className="navbar">
        <img src="" alt=""/>
      <div className="links">
      <HashLink smooth to="#shop">Shop</HashLink>
      
      <HashLink smooth to="#cart"><ShoppingCart size={32} /></HashLink>
        
       
        <span style={{color:'orange'}}>{basket.length}</span>
      </div>
    </div>
    )
}

export default Navbar
