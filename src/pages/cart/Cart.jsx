import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContextProvider';
import { DATAS } from '../../data';
import CartItem from './CartItem';
import { Link } from "react-router-dom"
import './cart.css'

const Cart = () => {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount();
    
    return (
        <div className='cart' id="cart">
           <h1>Your Carts Items</h1>
        <div className="cartItems">
        {DATAS.map((data)=>{
          if(cartItems[data.id] > 0){
            return <CartItem product={data}/>
          }
          
        })}
        </div>
        <div className="checkout">
        <p>Total: $ {totalAmount}</p>
        <button className='ctBtn' ><Link to="/" className='link'>Continue Shopping</Link></button>
        
       
        </div>
        </div>
    )
}

export default Cart
